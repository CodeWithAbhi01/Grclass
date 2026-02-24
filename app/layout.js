import './globals.css';

export const metadata = {
  title: 'GR Class | Maritime Classification & Compliance',
  description:
    'GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) delivering maritime safety, statutory, and environmental compliance services worldwide.',
  keywords: [
    'GR Class',
    'Maritime Classification',
    'RO',
    'RSO',
    'Classification Society',
    'SOLAS',
    'MARPOL',
    'ISPS Code'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
