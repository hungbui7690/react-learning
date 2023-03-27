/*
  Handling Image Accessibility

*/

import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      {/* pass props: image */}
      <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' />
      <ProfileCard image={CortanaImage} title='Cortana' handle='@acortana32' />
      <ProfileCard image={SiriImage} title='Siri' handle='@siri01' />
    </div>
  )
}

export default App
