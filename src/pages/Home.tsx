import Discover from "../components/Discover"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Hero from "../components/Hero"
import Jobboard from "../components/Jobboard"
import Nav from "../components/Nav"

const Home = () => {
  return (
    <div className=" overflow-hidden">
        <Nav/>
        <Hero/>
        <Jobboard/>
        <GetStarted/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default Home