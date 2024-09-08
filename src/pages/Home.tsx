import Discover from "../components/Discover"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Hero from "../components/Hero"
import Nav from "../components/Nav"

const Home = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <GetStarted/>
        <Discover/>
        <Footer/>
    </>
  )
}

export default Home