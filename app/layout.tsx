// app/layout.tsx
import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Nolens - Art Meets Web3',
  description: 'Join Nolens, the ultimate social app for NFT enthusiasts and Web3 hub for art galleries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}