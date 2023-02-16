import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          {/* Sidebar */}

          {/* Client Provider */}

          {/* Content */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
