import { SessionProvider } from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
import MobileMenu from "../components/MobileMenu";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <div className="bg-[#202123] md:hidden">
                <MobileMenu />
              </div>
              <div className="flex">
                {/* Mobile Menu */}

                {/* Sidebar */}
                <div className="bg-[#202123] max-w-xs h-screen md:min-w-[20rem] hidden md:block">
                  <Sidebar />
                </div>
                {/* Client Provider */}
                <ClientProvider />

                {/* Content */}
                <div className="bg-[#343541] flex-1">{children}</div>
              </div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
