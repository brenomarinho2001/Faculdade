const Cena = ({children,cena}) =>
    <View>
        <Text style={{ fontSize: 20 }}>Cena {cena}</Text>
        {
            React.Children.map(
                children,
                (personagem) => {
                    return React.cloneElement(personagem, { cena })
                }
            )
        }
    </View>
export default Cena'