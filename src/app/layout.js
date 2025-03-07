import './globals.css';

export const metadata = {
  title: 'KMIT PR Department | Keshav Memorial Institute of Technology',
  description: 'Official website of KMIT\'s Public Relations department',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}