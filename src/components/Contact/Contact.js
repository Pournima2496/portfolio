import './Contact.scss'
import { BG } from '../../constants/images'


const Contact = () => {
  return (
    <div className='container contact' id='contact'>
      <div className="left">
        <img src={BG} alt="" />
      </div>
      <div className="right">
        <form action="" autoComplete='off'>
        <h1 className='heading'>Contact Me</h1>
          <div className="inputs">
            {/* <label htmlFor="">Name</label> */}
            <input type="text" placeholder='Name'/>
          </div>
          <div className="inputs">
            {/* <label htmlFor="">Email</label> */}
            <input type="email" placeholder='email' />
          </div>
          <div className="inputs">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button >Send</button>
          <button >Cancel</button>


        </form>
      </div>
    </div>
  )
}

export default Contact