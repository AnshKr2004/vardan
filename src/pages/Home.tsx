import Discover from "../components/Discover"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Hero from "../components/Hero"
import Nav from "../components/Nav"

const Home = () => {
  return (
    <div className=" overflow-hidden">
        <Nav/>
        <Hero/>
        <GetStarted/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default Home