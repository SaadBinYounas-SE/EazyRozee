// FavouritesScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductGrid from '../../components/ProductGrid';
import { NavigationProp } from '@react-navigation/native';

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
interface Props {
    navigation: NavigationProp<any>;
}

const FavouritesScreen: React.FC<Props> = ({ navigation }) => {
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
    // <ProductGrid onProductClick={function (product: Product): void {
    //       throw new Error('Function not implemented.');
    //   } } navigation={undefined}/>

    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Favourites</Text>
      <View style={styles.divider} />
      

      {/* Product Grid */}
      <ProductGrid showFilledHeart={true} navigation={navigation} onProductClick={function (product: Product): void {
                } }/>
    </View>

    //   <ProductGrid
    //   products={favouriteProducts}
    //   onProductClick={(product) => {
    //     // Handle product click (e.g., navigate to product details)
    //     console.log('Product clicked:', product);
    //   }}
    //   showFilledHeart={true} // Pass a prop to show filled hearts
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  divider: { height: 2, backgroundColor: "#253A3D", marginBottom: 10},
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