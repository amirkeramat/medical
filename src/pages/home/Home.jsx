import About from "../../components/home/about/About"
import Expertise from "../../components/home/expertise/Expertise"
import Intro from "../../components/home/intro/Intro"
import Counter from "../../components/home/counter/Counter"
import Services from "../../components/home/services/Services"
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Intro/>
      <About/>
      <Expertise/>
      <Counter/>
      <Services/>
    </div>
  )
}

export default Home