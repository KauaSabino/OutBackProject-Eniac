import { StyleSheet, Text, View, Image } from 'react-native';

export default function Delivery() {
  return (
    <View style={styles.container}>
      <View style={styles.legenda}>
        <Text style={styles.title}>#Delivery</Text>
        <Text style={styles.span}>Para receber os nossos pratos na sua casa, peça em seu app de delivery favorito.</Text>
      </View>
      <View style={styles.divImages}>
        <Image source={require('../images/btnIfood.png')} style={styles.btnImage}/>
        <Image source={require('../images/btnRappi.png')} style={styles.btnImage}/>
        <Image source={require('../images/btnUberEats.png')} style={styles.btnImage}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  legenda:{
    textAlign: 'center'
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: '#A00F2D',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  span: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  btnImage: {
    width: 291,
    height: 63,
    marginVertical: 10
  },
  divImages:{
    marginTop: 50,
  }
});
