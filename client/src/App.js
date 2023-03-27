/*
  Including Images P1
  - pic
  - create src/images/

  (***) depends on the size of the image, it will be used differently > webpack
    - small: raw data
    - big: image file
*/

import ProfileCard from './ProfileCard'

// ***
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

// ***
console.log(AlexaImage)
console.log(SiriImage)

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
