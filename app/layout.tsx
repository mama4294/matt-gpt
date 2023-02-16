import { SessionProvider } from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";
import Login from "../components/Login";

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
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]">
                <Sidebar />
              </div>
              {/* Client Provider */}

              {/* Content */}
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
