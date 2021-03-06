import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import SignUp from '../screen/SignUp'

const Stack = createStackNavigator();
const StackRoutes = () => {
	console.log("***************************")
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={SplashScreen} screenOptions={({ route, navigation }) => ({ headerShown: false, })}>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};


export default StackRoutes;