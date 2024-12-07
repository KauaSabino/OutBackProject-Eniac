import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import Entrar from '../screens/Entrar';
import Cadastrar from '../screens/Cadastro';
import 'setimmediate';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Entrar">
                <Stack.Screen name="Entrar" component={Entrar} options={{ headerShown: false }}/>
                <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={TabRoutes} options={{ headerShown: false }} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}