
import React from 'react'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  
  return (
    <html lang="en">
          <body
          >
          <div>{children}</div>
        
          </body>
        </html>)
    
}
