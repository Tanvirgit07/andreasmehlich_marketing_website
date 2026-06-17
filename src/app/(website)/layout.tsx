import React from "react";
import WebsiteChrome from "./_components/WebsiteChrome";

function Layout({ children }: { children: React.ReactNode }) {
  return <WebsiteChrome>{children}</WebsiteChrome>;
}

export default Layout;
