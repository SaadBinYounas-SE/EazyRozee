import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // React Navigation
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
import CustomerTabNavigator from './screens/TabNavigators/CustomerTabNavigator';
import LoginCustomer from './screens/Customer/LogIn';
import SignupCustomer from './screens/Customer/SignUp';
import SignUpSeller from './screens/Seller/SignUpSeller';
import SignUpAffiliate from './screens/AffiliateMarketer/SignUpAffiliate';
import SellerTabNavigator from './screens/TabNavigators/SellerTabNavigator';
import AffiliateTabNavigator from './screens/TabNavigators/AffiliateTabNavigator';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LoginCustomer} />
        <Stack.Screen name="SignUp" component={SignupCustomer} />
        <Stack.Screen name="CustomerTabNavigator" component={CustomerTabNavigator} /> 
        <Stack.Screen name="SignUpSeller" component={SignUpSeller} />
        <Stack.Screen name="SignUpAffiliate" component={SignUpAffiliate} />
        <Stack.Screen name="SellerTabNavigator" component={SellerTabNavigator} /> 
        <Stack.Screen name="AffiliateTabNavigator" component={AffiliateTabNavigator} /> 


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
