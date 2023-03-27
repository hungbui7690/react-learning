/*
  Introducing the Props System
  - pic

/////////////////////////////

  Picturing the Movement of Data
  - pic

/////////////////////////////

  Adding Props
  
*/

import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      {/* (1) */}
      <ProfileCard title='Alexa' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@acortana32' />
      <ProfileCard title='Siri' handle='@siri01' />
    </div>
  )
}

export default App
