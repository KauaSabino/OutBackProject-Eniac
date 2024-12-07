import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Cupons() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.legenda}>
        <Text style={styles.title}>#Cupons</Text>
        <Text style={styles.span}>Utilize os códigos na hora do pagamento para obter o desconto.</Text>
      </View>
        <Text style={styles.subtitle}>Cupons disponiveis</Text>

        <View style={styles.card1}>
          <Feather name='tag' color="#A00F2D" style={styles.icon}/>
          <View>
            <Text style={styles.subtitle}>R$ 20 off</Text>
            <Text style={styles.parag}>Pedido minimo de 150 reais.</Text>
            <Text style={styles.parag}>20OFF150</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Feather name='tag' color="#A00F2D" style={styles.icon}/>
          <View>
            <Text style={styles.subtitle}>R$ 20 off</Text>
            <Text style={styles.parag}>Pedido minimo de 150 reais.</Text>
            <Text style={styles.parag}>20OFF150</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Feather name='tag' color="#A00F2D" style={styles.icon}/>
          <View>
            <Text style={styles.subtitle}>R$ 20 off</Text>
            <Text style={styles.parag}>Pedido minimo de 150 reais.</Text>
            <Text style={styles.parag}>20OFF150</Text>
          </View>
        </View>
        <View style={styles.card1}>
          <Feather name='tag' color="#A00F2D" style={styles.icon}/>
          <View>
            <Text style={styles.subtitle}>R$ 20 off</Text>
            <Text style={styles.parag}>Pedido minimo de 150 reais.</Text>
            <Text style={styles.parag}>20OFF150</Text>
          </View>
        </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  legenda:{
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: '#A00F2D',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  subtitle:{
    fontSize: 17,
    fontWeight:  'bold',
    textAlign: 'left',
    width: '100%',
    fontFamily: 'Roboto',
    padding: 10,
  },
  span: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  card1:{
    width: 280,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  parag: {
    fontFamily: 'Roboto',
  },
  icon: {
    fontSize: 45
  }
});
