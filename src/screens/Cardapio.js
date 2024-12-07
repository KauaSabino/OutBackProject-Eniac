import { StyleSheet, Text, View, Image } from 'react-native';

export default function Cardapio() {

  return (
    <View style={styles.container}>
      <View style={styles.legenda}>
        <Text style={styles.title}>#Cardápio</Text>
        <Text style={styles.span}>Explore o nosso cardápio e descubra sabores únicos preparados para você!</Text>
      </View>

      <View style={styles.prato}>
        <Image source={require('../images/prato.png')} style={styles.pratoImg}  />
        <View style={styles.textosPrato}>
          <Text style={styles.titlePrato}>Ribs and Steak</Text>
          <Text style={styles.descPrato}>Uma Jr. Ribs com acompanhamento servida com o Toowoomba Filet, um corte de filet mignon coberto...</Text>
        </View>
      </View>
      <View style={styles.prato}>
        <Image source={require('../images/prato.png')} style={styles.pratoImg}  />
        <View style={styles.textosPrato}>
          <Text style={styles.titlePrato}>Ribs and Steak</Text>
          <Text style={styles.descPrato}>Uma Jr. Ribs com acompanhamento servida com o Toowoomba Filet, um corte de filet mignon coberto...</Text>
        </View>
      </View>
      <View style={styles.prato}>
        <Image source={require('../images/prato.png')} style={styles.pratoImg}  />
        <View style={styles.textosPrato}>
          <Text style={styles.titlePrato}>Ribs and Steak</Text>
          <Text style={styles.descPrato}>Uma Jr. Ribs com acompanhamento servida com o Toowoomba Filet, um corte de filet mignon coberto...</Text>
        </View>
      </View>
      <View style={styles.prato}>
        <Image source={require('../images/prato.png')} style={styles.pratoImg}  />
        <View style={styles.textosPrato}>
          <Text style={styles.titlePrato}>Ribs and Steak</Text>
          <Text style={styles.descPrato}>Uma Jr. Ribs com acompanhamento servida com o Toowoomba Filet, um corte de filet mignon coberto...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: '#A00F2D',
    textAlign: 'center',
    fontFamily: 'Roboto',

  },
  span: {
    textAlign: 'center',
    fontWeight: 'regular',
    fontFamily: 'Roboto',
  },
  prato:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    gap: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(160, 15, 45, 0.37)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 7,  
  },
  pratoImg:{
    width: 70,
    height: 70,
  },
  textosPrato:{
    width: 200,
  },
  titlePrato:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A00F2D',
    fontFamily: 'Roboto',
  },
  descPrato:{
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});
