import '../styles/global.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PublicVoice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="pageContainer">{children}</div>
      </body>
    </html>
  );
}
