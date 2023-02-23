import { SessionProvider } from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
import MobileMenu from "../components/MobileMenu";
import { MenuProvider } from "../context/MobileMenu";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body className="h-screen flex flex-col">
        <SessionProvider session={session}>
          <MenuProvider>
            {!session ? (
              <Login />
            ) : (
              <>
                {/* Mobile Menu */}
                <div className="bg-[#202123] md:hidden">
                  <MobileMenu />
                </div>

                <div className="flex flex-1 h-[300px]">
                  {/* Sidebar */}
                  <div className="bg-[#202123] max-w-xs h-screen md:min-w-[20rem] hidden md:block">
                    <Sidebar />
                  </div>
                  {/* Client Provider for Toast Messages */}
                  <ClientProvider />
                  {/* Content */}
                  <div className="bg-[#343541] flex-1">{children}</div>
                </div>
              </>
            )}
          </MenuProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
