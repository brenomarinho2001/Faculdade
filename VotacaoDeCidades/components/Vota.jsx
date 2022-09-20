import { View, Text, Button } from 'react-native'
import { useState } from 'react'

const VotaCidade = () => {

    const [quixada,setQuixada] = useState(0)
    
    const [quixeramobim,setQuixeramobim] = useState(0)

    const [ibicuitinga,setIbicuitinga] = useState(0)

    const [resultado,setResultado] = useState()





    const votoQuixada = () =>{
      setQuixada(quixada+1)
    }

     const votoQuixer = () =>{
      setQuixeramobim(quixeramobim+1)
    }

     const votoIbi = () =>{
      setIbicuitinga(ibicuitinga+1)
    }
     

    const ResultadoVotos = () => {
      if(quixada > quixeramobim && quixada > ibicuitinga){
        setResultado("Quixada venceu!")
      }
      else if(quixeramobim > quixada && quixeramobim > ibicuitinga){
        setResultado("Quixaramobim Venceu!")
      }
      else if(ibicuitinga > quixada && ibicuitinga > quixeramobim) {
        setResultado("Ibicuitinga Venceu!")
      }
      else{
        setResultado("empate!")
      }
    }
    

  
    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixadá: {quixada} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim:{quixeramobim} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga:{ibicuitinga}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Resultado:{resultado}</Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress={votoQuixada}/> 
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim' onPress={votoQuixer}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga' onPress={votoIbi}/>
                </View>
            </View>
            <View style={{margin:1}}>
                    <Button title='Mostrar Resultado' onPress={ResultadoVotos}/>
                </View>
        </View>
    )
}
export default VotaCidade