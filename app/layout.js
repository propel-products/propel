import './globals.css'

export const metadata = {
  title: 'OCOIOM Limited | Financial Clarity for Modern Businesses',
  description: 'Expert accounting and advisory services for businesses. Bookkeeping, tax preparation, CFO services, and strategic financial guidance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
