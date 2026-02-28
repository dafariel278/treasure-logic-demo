export const metadata = {
  title: "Treasure Logic",
  description: "Strategic intelligence powered by Treasure David.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        background: "radial-gradient(circle at center, #111 0%, #000 75%)",
        color: "#e5e5e5",
        fontFamily: "system-ui",
        margin: 0
      }}>
        {children}
      </body>
    </html>
  );
}
