import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Principal from '../screens/Principal';
import Cardapio from '../screens/Cardapio';
import Cupons from '../screens/Cupons';
import Delivery from '../screens/Delivery';
import Reservas from '../screens/Reservas';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: true,
          headerTitleAlign: 'center', // Alinha a imagem no centro
          headerTitle: () => (
            <Image
              source={require('../images/outback-logo.png')}
              resizeMode="contain"
              style={{ width: 103, height: 40 }}
            />
          ),
          headerStyle: {
            backgroundColor: '#A00F2D', // Define o fundo do cabeçalho como preto
          },
      tabBarStyle:{backgroundColor: "#A00F2D"}}
      }>
        
       
        
        <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarIcon: ({size})=> <Feather name='home' color="#FFF" size={size}/>,
          tabBarLabelStyle:{
            color: "#FFF"
          }
        }}/>

         <Tab.Screen
        name="Cardápio"
        component={Cardapio}
        options={{
          tabBarIcon: ({size})=> <Feather name='book-open' color="#FFF" size={size}/>,
          tabBarLabelStyle:{
            color: "#FFF"
          }
        }}/>

          <Tab.Screen
            name="Cupons"
            component={Cupons}
            options={{
              tabBarIcon: ({size})=> <Feather name='tag' color="#FFF" size={size}/>,
              tabBarLabelStyle:{
                color: "#FFF"
              }
            }}
          />
         <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: ({size})=> <Feather name='shopping-bag' color="#FFF" size={size}/>,
          tabBarLabelStyle:{
            color: "#FFF"
          }
        }}/>

          <Tab.Screen
        name="Reservas"
        component={Reservas}
        options={{
          tabBarIcon: ({size})=> <Feather name='calendar' color="#FFF" size={size}/>,
          tabBarLabelStyle:{
            color: "#FFF"
          }
        }}/>

        
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
   
});