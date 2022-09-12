import './Home.scss'
import { BG } from '../../constants/images'

const Home = () => {
  return (
    <div className='container home' id='home'>
     <div className="left">
     <h1>Hi, 
     <br /> I am Pournima Gaikwad</h1>
     <h1 className='heading'>Frontend Developer</h1>
     <br />
     <button className='btn'>Download CV</button>
     <button className='btn'>Contact Me</button>

     </div>
     <div className="right">
      <img src={BG} alt=""/>
     </div>
    </div>
  )
}

export default Home