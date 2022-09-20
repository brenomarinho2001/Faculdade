import {View,Text} from 'react-native'

const Disciplina = ({children,disciplina})=> {
    <View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            {disciplina}
        </Text>
    
    </View>
}

export default Disciplina