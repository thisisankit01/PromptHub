import { ReactNode } from "react";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import "@styles/globals.css";
import { Session } from "next-auth";

interface RootLayoutProps {
  children: ReactNode;
  session: Session;
}

export const metadata = {
  title: "PromptHub",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children, session }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
