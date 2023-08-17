// WITH WE HAVE TO USE BROWSER CAPABILITIES THAT WHY WE NEED TO USE CLIENT DIRECTIVE
"use client";

// NEXT-AUTH HOOK
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
