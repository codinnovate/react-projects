import { useState } from "react";
import "./event-rsvp.css"

export function EventRSVPForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [numberOfAttendees, setNumberOfAttendees] = useState('');
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [dietary, setDietary] = useState('')
  const [submittedData, setSubmittedData] = useState(null)


  function handleSubmission(e){
      e.preventDefault()
      setSubmittedData({
      name,
      email,
      numberOfAttendees,
      dietary,
      additionalGuests
      })


  
  }

  return (
    <div>
    <form 
    className="forms"
    onSubmit={handleSubmission}>
    <label>Name
    <input value={name} type="text" required onChange={(e) => setName(e.target.value)}/>
    </label>

    <label>Email
    <input value={email} required type="email" onChange={(e) => setEmail(e.target.value)}/>
    </label>

    <label>Number of Attendees
    <input 
     type='number'
     value={numberOfAttendees} 
     required
     min={1}
     onChange={(e) => setNumberOfAttendees(e.target.value) }  />
    </label>

    <label>Dietary Preferences
    <input type='text' 
    value={dietary}
    onChange={(e) => setDietary(e.target.value)} 
    />
    </label>

    <label>Bringing additional guests?
    <input
    type='checkbox' 
    checked={additionalGuests}
    onChange={(e) => setAdditionalGuests(e.target.checked)} 
    />
    </label>

    <button 
    type="submit">
    Submit RSVP
    </button>

    </form>
    {submittedData && 
    <div className="board">
     <span>Name:{submittedData.name}</span>
     <span>Email:{submittedData.email}</span>
     <span>Number of Attendees:{submittedData.numberOfAttendees}</span>
     <span>Dietary Preferences:{submittedData.dietary}</span>
     <span>Additional Guests:{submittedData.additionalGuests ? "Yes": "No"}</span>
    </div>
    }
    </div>
  )
}