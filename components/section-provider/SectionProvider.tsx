'use client';

import React, { useEffect, useState } from 'react';
import { api } from '../../libs/axios';

type SectionProviderProps = {
  children: React.ReactNode;
};

export const SectionProvider: React.FC<SectionProviderProps> = ({
  children,
}) => {
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeSession = async () => {
      // TODO: Re-enable when cart API is available
      setIsLoading(false);
      return;

      try {
        // Check if we're in browser environment
        if (typeof window !== 'undefined') {
          // Check if session exists in localStorage
          if (!localStorage.getItem('converge_section')) {
            // Call API to get new session
            const response = await api.post<{ data: { sessionId: string } }>(
              '/cart/session'
            );

            // Store session in localStorage
            if (response.data) {
              localStorage.setItem(
                'converge_section',
                JSON.stringify(response.data.data?.sessionId)
              );
            }
          }
        }
      } catch (error: unknown) {
        // Suppress 404 errors — cart API may not be available yet
        const status = (error as { response?: { status?: number } })?.response?.status;
        // non-404 errors suppressed in production
      } finally {
        setIsLoading(false);
      }
    };

    initializeSession();
  }, []);

  // if (isLoading && typeof window !== 'undefined') {
  //   return <div>Loading...</div>; // Or return a loading spinner component
  // }

  return <>{children}</>;
};
