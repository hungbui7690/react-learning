/*
  Including Images P2
  - pic

  (***) the way we handle fonts and media/sound are similar
*/

import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  // ***
  return (
    <div>
      <div>Personal Digital Assistants</div>

      {/* local */}
      <img src={AlexaImage} alt='Alexa' />
      <img src={SiriImage} alt='Siri' />
      <img src={CortanaImage} alt='Cortana' />

      {/* external  */}
      <img src='https://picsum.photos/200' alt='random' />

      <ProfileCard title='Alexa' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@acortana32' />
      <ProfileCard title='Siri' handle='@siri01' />
    </div>
  )
}

export default App
