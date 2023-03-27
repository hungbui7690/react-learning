/*
  Review on how CSS Works
  - pic
  > https://bulma.io/documentation/


  Adding CSS Libraries with NPM
  > npm install bulma
    > check node_modules/ > we will use bulma.css > pic
    
  - after checking node_modules/ > we will know what we need to import 
    > import in App.js

  (***) we learn this because most of the CSS Library does not show us how to import using npm install

*/

import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

import 'bulma/css/bulma.css' // *** after import > check browser > font changes

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' />
      <ProfileCard image={CortanaImage} title='Cortana' handle='@acortana32' />
      <ProfileCard image={SiriImage} title='Siri' handle='@siri01' />
    </div>
  )
}

export default App
