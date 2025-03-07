import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import CustomerHome from '../Customer/CustomerHomeScreen'; // Adjust path as needed
import Cart from '../Customer/AddToCart'; // Create this screen
import Favourites from '../Customer/FavouriteProduct'; // Create this screen
import Profile from '../Customer/CustomerProfile'; // Create this screen
import ProductDetail, { Product } from '../Customer/ProductDetailScreen'; // Adjust path as needed

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  CustomerHome: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

// 🔹 Stack Navigator for Customer Home Tab
const CustomerHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerHome"
        component={CustomerHome}
        options={{ headerShown: false }} // Hide default header
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }} // Hide default header
      />
    </Stack.Navigator>
  );
};

const CustomerTabNavigator = () => {
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
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          // Add other route conditions here as needed
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#253A3D',
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
      })}
    >
      <Tab.Screen name="Home" component={CustomerHomeStack} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourites" component={Favourites} />
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

export default CustomerTabNavigator;