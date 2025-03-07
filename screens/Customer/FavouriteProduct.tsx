// FavouritesScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductGrid from '../../components/ProductGrid';

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
}

const favouriteProducts: Product[] = [
  { id: '1', name: 'Product 1', price: '$20', image: require('../../assets/postPic.jpg') },
  { id: '2', name: 'Product 2', price: '$30', image: require('../../assets/postPic.jpg') },
  { id: '3', name: 'Product 3', price: '$25', image: require('../../assets/postPic.jpg') },
];

const FavouritesScreen = () => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.heartButton}>
        <Ionicons name="heart" size={24} color="red" /> {/* Filled heart icon */}
      </TouchableOpacity>
    </View>
  );

  return (
    <ProductGrid onProductClick={function (product: Product): void {
          throw new Error('Function not implemented.');
      } } navigation={undefined}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default FavouritesScreen;