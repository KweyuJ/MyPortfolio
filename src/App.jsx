import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Qualification from "./components/Qualification"
import Testimonials from "./components/testimonials/Testimonials"





function App() {
 

  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
    </main>
 
    </>
  )
}

export default App
