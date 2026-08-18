import "./globals.css";

export const metadata = {
  title: "Random Joke Generator",
  description: "A simple random joke generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}