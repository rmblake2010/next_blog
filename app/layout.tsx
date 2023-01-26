import Link from "next/link"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Header = () => {
    return (
      <div className='text-center bg-slate-800 my-6 rounded-md'>
        <Link href='/'>
        <h1 className="text-3x1 text-white font-bold"> Ryan's Blog!</h1>
        </Link>
        <p className="text-slate-300">Welcome to my blog about stuff and things!</p>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div className='border-t border-slate-500 mt-6 py-6 text-center text-slate-400'>
        <span>Developed By Ryan Blake</span>
      </div>
    )
  }


  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
