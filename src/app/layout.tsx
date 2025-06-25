// layout.tsx (src/app/layout.tsx)

import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu Projeto",
  description: "Descrição",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
