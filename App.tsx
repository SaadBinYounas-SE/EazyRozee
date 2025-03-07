import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // React Navigation
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
// import SellerHomeScreen from './screens/sellerHomeScreen';
// import type {PropsWithChildren} from 'react';
// import{ Text, View } from 'react-native';
import CustomerTabNavigator from './screens/TabNavigators/CustomerTabNavigator';
// import SellerSignUp from './screens/Seller/SignUpSeller';
import LoginCustomer from './screens/Customer/LogIn';
import SignupCustomer from './screens/Customer/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LoginCustomer} />
        <Stack.Screen name="SignUp" component={SignupCustomer} />
        <Stack.Screen name="CustomerTabNavigator" component={CustomerTabNavigator} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


//   <NavigationContainer>
   
  //     {/* <SellerTabNavigator /> */}
  //     {/* <SellerSignUp/> */}
  //     <LoginCustomer/>    
  //  </NavigationContainer>
