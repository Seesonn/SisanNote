import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Examples from "./components/Examples"

import AnimeSection from "./components/AnimeSection"
import SisanNote from "./components/SisanNote"

export default function App() {
  return (
    <div>
    {/* <div className="min-h-screen bg-gradient-to-br from-amber-200 via-sky-100 to-teal-100">
      <Navbar />
      <main className="container mx-auto px-4 pt-8 pb-16">
        <Hero />
        <Examples />
      </main>
      </div>
      <AnimeSection/> */}
      <SisanNote/>
    </div>
  )
}

