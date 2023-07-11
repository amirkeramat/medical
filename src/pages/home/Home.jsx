import About from "../../components/home/about/About"
import Expertise from "../../components/home/expertise/Expertise"
import Intro from "../../components/home/intro/Intro"
import Counter from "../../components/home/counter/Counter"
import Services from "../../components/home/services/Services"
import Doctors from "../../components/home/doctors/Doctors"
import Appointments from "../../components/home/appointments/Appointments"
import Comments from "../../components/home/comments/Comments"
import Question from "../../components/home/question/Question"
import Articles from "../../components/home/articles/Articles"
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Intro/>
      <About/>
      <Expertise/>
      <Counter/>
      <Services/>
      <Doctors/>
      <Appointments/>
      <Comments/>
      <Articles/>
      <Question/>
    </div>
  )
}

export default Home