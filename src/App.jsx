import { useState } from 'react'
import './App.css'
import './styles/style.css'
import PersonalInfo from './application'


function App() {
  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    dateofstudy: "",
    company: "",
    position: "",
    responsibilities: "",
    startdate: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    setSubmitted(true)
  }

  return (
    <>
      {!submitted ?
        <div id="container">
          <form onSubmit={handleSubmit}>
            <div>
              <PersonalInfo setInfo={setInfo} info={info}></PersonalInfo>
            </div>

            <div className='submit-button'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div> : <div id="container">
          <h2>Personal Information</h2>
          <p>Fullname: {info.fullname} </p>
          <p>Email: {info.email} </p>
          <p>Phone: {info.phone} </p>
          <h2>Education</h2>
          <p>School: {info.school} </p>
          <p>Study: {info.study} </p>
          <p>Date Of Study: {info.dateofstudy} </p>
          <h2>Work Experience</h2>
          <p>Company: {info.company} </p>
          <p>Position: {info.position} </p>
          <p>Responsibilities: {info.responsibilities} </p>
          <p>Start Date: {info.startdate} </p>

        </div>
      } </>
  )
}

export default App
