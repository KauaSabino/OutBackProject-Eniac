
import { StyleSheet, Text, ScrollView, Image, Dimensions, View } from 'react-native';
import Swiper from 'react-native-swiper';
import 'setimmediate';


const { width } = Dimensions.get('window');


export default function Principal() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Guarulhos, SP</Text>

      <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Image source={require('../images/poster.png')} style={styles.image} />
      </View>
      <View style={styles.slide}>
      <Image source={require('../images/poster2.png')} style={styles.image}/>
      </View>
      <View style={styles.slide}>
        <Image source={require('../images/poster3.png')} style={styles.image} />
      </View>
    </Swiper>
      
    
    <View style={styles.categorias} id='Categorias'>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.listCateg}>
        <View id='categ1' style={styles.categ}>
          <Image source={require('../images/BloominOnion.png')} style={styles.iconCateg}/>
          <Text style={styles.titleCateg}>Aperitivos</Text>
        </View>
        <View id='categ1' style={styles.categ}>
          <Image source={require('../images/JuniorRibsForTwo.png')} style={styles.iconCateg}/>
          <Text style={styles.titleCateg}>Favoritos</Text>
        </View>
        <View id='categ1' style={styles.categ}>
          <Image source={require('../images/TheOutbackSpecial.png')} style={styles.iconCateg}/>
          <Text style={styles.titleCateg}>Steaks</Text>
        </View>
        <View id='categ1' style={styles.categ}>
          <Image source={require('../images/SteakhousePasta.png')} style={styles.iconCateg}/>
          <Text style={styles.titleCateg}>Massas</Text>
        </View>
        <View id='categ1' style={styles.categ}>
          <Image source={require('../images/TheOutbackerBurger.png')} style={styles.iconCateg}/>
          <Text style={styles.titleCateg}>Burgers</Text>
        </View>
      </View>
    </View>
    <View>
      <Text style={styles.title}>Novidade</Text>
      <Image source={require('../images/poster2.png')} style={styles.poster}/>
      <Image source={require('../images/poster.png')} style={styles.poster}/>
      <Image source={require('../images/poster2.png')} style={styles.poster}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 5
  },
  poster: {
    width: '100%',
    maxWidth:'100%',
    height: 180,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  iconCateg: {
    width: 65,
    height: 65,
    borderRadius: 100,
    textAlign: 'center'
  },
  listCateg: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  categ: {
    width: 70,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  titleCateg: {
    fontSize: 14,
    fontWeight: 'medium',
    textAlign:'center',
  },
  image:{
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  wrapper:{
    width: '100%',
    height: 180,
  },
  slide:{
    width: '100%',
    height: 180,
  }

});
