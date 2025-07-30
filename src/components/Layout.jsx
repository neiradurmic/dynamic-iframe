import {Navbar} from './Navbar'

export function Layout({children}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
