import { SectionProvider } from '@/components/section-provider';
import React from 'react';

export const withSectionProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithSectionProvider: React.FC<P> = (props) => {
    return (
      <SectionProvider>
        <Component {...props} />
      </SectionProvider>
    );
  };

  // Set display name for debugging purposes
  const displayName = Component.displayName || Component.name || 'Component';
  WithSectionProvider.displayName = `withSectionProvider(${displayName})`;

  return WithSectionProvider;
};

export default withSectionProvider;
