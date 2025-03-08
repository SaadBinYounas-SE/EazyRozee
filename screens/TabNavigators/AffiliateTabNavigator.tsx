import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import your screens
import AffiliateHome from '../AffiliateMarketer/AffiliateHomeScreen'; // Adjust path as needed
import Collaborators from '../AffiliateMarketer/Collaborators'; // Renamed for Affiliate context
import Generate from '../AffiliateMarketer/URLGenerator'; // Renamed for Affiliate context
import Analytics from '../AffiliateMarketer/AffiliateAnalytics';
import Profile from '../AffiliateMarketer/AffiliateProfile';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail, { Product } from '../AffiliateMarketer/ProductDetailAffiliate';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  AffiliateHome: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

// 🔹 Stack Navigator for Affiliate Home Tab
const AffiliateHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AffiliateHome"
        component={AffiliateHome}
        options={{ headerShown: false }} // Hide default header
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AffiliateTabNavigator = () => {
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
            } else if (route.name === 'Collaborators') {
                iconName = focused ? 'storefront' : 'storefront-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Generate') {
                iconName = focused ? 'link' : 'link-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Analytics') {
                iconName = focused ? 'analytics' : 'analytics-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            }

        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: "#253A3D",
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
      })}
    >
      <Tab.Screen name="Home" component={AffiliateHomeStack} />
      <Tab.Screen name="Collaborators" component={Collaborators} />
      <Tab.Screen name="Generate" component={Generate} />
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

export default AffiliateTabNavigator;
