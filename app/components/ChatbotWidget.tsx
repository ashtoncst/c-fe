"use client";

import { useEffect, useRef } from "react";
import { useIsClient } from "@/hooks/useIsClient";

// [SECURITY FIX] Replaced dangerouslySetInnerHTML with programmatic DOM
// creation. The previous implementation passed a static HTML string into
// dangerouslySetInnerHTML — a pattern that becomes an XSS sink the moment any
// dynamic/user-supplied value is interpolated into the string. Using
// document.createElement and explicit attribute assignment is safe by
// construction: attributes are set as strings on the DOM node, never parsed as
// HTML. No behaviour change for end-users.

const ChatbotWidget = () => {
  const isClient = useIsClient();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient) return;

    // Load the Dialogflow messenger CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Load the Dialogflow messenger script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.head.appendChild(script);

    // Add custom styles
    const style = document.createElement("style");
    style.textContent = `
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #f3f6fc;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    `;
    document.head.appendChild(style);

    // Build the df-messenger custom element tree programmatically instead of
    // using dangerouslySetInnerHTML to avoid creating an HTML-injection sink.
    const dfMessenger = document.createElement("df-messenger");
    dfMessenger.setAttribute("location", "us-central1");
    dfMessenger.setAttribute("project-id", "converge-global");
    dfMessenger.setAttribute("agent-id", "5de0af06-5e39-40fc-a57b-7b64281db6bb");
    dfMessenger.setAttribute("language-code", "en");
    dfMessenger.setAttribute("max-query-length", "-1");

    const dfChatBubble = document.createElement("df-messenger-chat-bubble");
    dfChatBubble.setAttribute("chat-title", "Converge Chat Agent");
    dfMessenger.appendChild(dfChatBubble);

    const container = containerRef.current;
    if (container) {
      container.appendChild(dfMessenger);
    }

    // Cleanup function
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      if (container && container.contains(dfMessenger)) {
        container.removeChild(dfMessenger);
      }
    };
  }, [isClient]);

  if (!isClient) return null;

  return <div ref={containerRef} />;
};

export default ChatbotWidget;
