"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { parseMarkdownForTypeWriter } from "@/utils/markdownParser";

type Props = {
  text: any;
  speed?: number;
  uuid: string;
  onTyping?: () => void;
  onComplete?: () => void;
  shouldType?: boolean;
};

export interface TypeWriterRef {
  stop: () => void;
  isTyping: () => boolean;
}

// [SECURITY FIX] Added escapeHtml helper to sanitize raw text content before
// it is inserted into innerHTML. The TypeWriter receives AI backend responses
// via WebSocket. Without escaping, an adversary who controls the backend
// response (or injects into the WebSocket stream) could inject arbitrary HTML
// through patterns like **<img src=x onerror=alert(1)>**, which would be
// wrapped in <strong> and set via innerHTML. Escaping text before wrapping in
// markdown HTML tags prevents this class of XSS.
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper function to convert markdown **text** into HTML.
// Text captured inside ** markers is HTML-escaped before being wrapped in
// <strong> so that embedded HTML special characters are inert.
const parseMarkdownToHTML = (text: string): string => {
  // First escape the whole string, then convert markdown sequences back
  // to HTML tags. Because we operate on the escaped string, any HTML in
  // the original content is already neutralised.
  const escaped = escapeHtml(text);
  // Bold: **text** → <strong>
  let html = escaped.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-bold">$1</strong>'
  );
  // Line breaks: \n → <br>
  html = html.replace(/\n/g, "<br>");
  return html;
};

export const TypeWriter = forwardRef<TypeWriterRef, Props>(
  (
    { text, speed = 10, uuid = "", onTyping, onComplete, shouldType = true },
    ref
  ) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const currentIndexRef = useRef(0);
    const isTypingRef = useRef(false);

    useImperativeHandle(ref, () => ({
      stop: () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          isTypingRef.current = false;
        }
      },
      isTyping: () => isTypingRef.current,
    }));

    useEffect(() => {
      const ele = document.getElementById(uuid);
      if (!ele || !text) return;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // [SECURITY FIX] parseMarkdownToHTML now HTML-escapes the input before
      // wrapping markdown tokens in HTML tags, preventing XSS from
      // AI/WebSocket-supplied content.
      const htmlText = parseMarkdownToHTML(text);

      ele.innerHTML = "";
      currentIndexRef.current = 0;
      isTypingRef.current = true;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlText;

      const fullHTML = tempDiv.innerHTML;

      intervalRef.current = setInterval(() => {
        if (ele && currentIndexRef.current < fullHTML.length) {
          const currentHTML = fullHTML.substring(
            0,
            currentIndexRef.current + 1
          );

          const openTags = (currentHTML.match(/<[^>]*$/g) || []).length;

          if (openTags === 0) {
            ele.innerHTML = currentHTML;
          }

          currentIndexRef.current++;

          if (onTyping) {
            onTyping();
          }
        }

        if (currentIndexRef.current >= fullHTML.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            isTypingRef.current = false;
            ele.innerHTML = fullHTML;
            if (onComplete) {
              onComplete();
            }
          }
        }
      }, speed);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          isTypingRef.current = false;
        }
      };
    }, [text, speed, uuid, onTyping, onComplete]);

    return <p id={uuid}></p>;
  }
);

TypeWriter.displayName = "TypeWriter";
