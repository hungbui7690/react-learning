/*
  Using Argument Destructuring P3
  - ProfileCard.js

*/

import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexa' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@acortana32' />
      <ProfileCard title='Siri' handle='@siri01' />
    </div>
  )
}

export default App
