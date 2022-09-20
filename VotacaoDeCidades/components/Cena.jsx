import {View,Text} from 'react-native'
import Personagem from './Personagem.jsx'


const Cena = ({titulo}) =>
  <View>
    <Text>Cena {titulo}</Text>
    <Personagem nome='Eleven'/>
    <Personagem nome='Vecna'/>
    <Personagem nome='Max'/>
  </View>

  export default Cena