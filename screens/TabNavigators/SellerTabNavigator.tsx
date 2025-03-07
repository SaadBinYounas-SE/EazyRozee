import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens
import SellerHome from '../Seller/sellerHomeScreen'; // Adjust path as needed
import SellerStore from '../Seller/sellerStore'; // Create this screen
import AddProduct from '../Seller/addNewProduct'; // Create this screen
import Analytics from '../Seller/sellerAnalytics'; // Create this screen
import Profile from '../Seller/sellerProfile'; // Create this screen
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail, { Product } from '../Seller/productDetailScreen';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  SellerHome: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

// 🔹 Stack Navigator for Seller Home Tab
const SellerHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellerHome"
        component={SellerHome}
        options={{ headerShown: false }} // Hide default header
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false}} 
      />
    </Stack.Navigator>
  );
};

const SellerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Store') {
            iconName = focused ? 'storefront' : 'storefront-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Add Product') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'analytics' : 'analytics-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          // Add other route conditions here as needed
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: "#253A3D",
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
      })}
    >
      <Tab.Screen name="Home" component={SellerHomeStack} />
      <Tab.Screen name="Store" component={SellerStore} />
      <Tab.Screen name="Add Product" component={AddProduct} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = {
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabLabel: {
    fontSize: 12,
  },
  tabIcon: {
    marginTop: 5,
  },
};

export default SellerTabNavigator;
