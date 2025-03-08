import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// Dummy data for brands and their products
const brands = [
  {
    id: '1',
    name: 'Brand 1',
    logo: require('../../assets/logo.png'),
    products: [
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
    ]
  },
  {
    id: '2',
    name: 'Brand 2',
    logo: require('../../assets/logo.png'),
    products: [
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
      require('../../assets/postPic.jpg'),
    ]
  },
  {
    id: '3',
    name: 'Brand 3',
    logo: require('../../assets/logo.png'),
    products: [
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
        require('../../assets/postPic.jpg'),
    ]
  }
];

const CollaboratorScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Collaborators</Text>
      <View style={styles.divider} />

      {brands.map(brand => (
        <View key={brand.id} style={styles.brandCard}>
          <Text style={styles.brandName}>{brand.name}</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productScroll}>
            {brand.products.map((product, index) => (
              <Image key={index} source={product} style={styles.productImage} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  divider: { height: 2, backgroundColor: '#253A3D', marginBottom: 20 },
  brandCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  brandLogo: { width: 70, height: 70, alignSelf: 'center', marginBottom: 10 },
  brandName: { fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 10 },
  productScroll: { paddingLeft: 10 },
  productImage: { width: 100, height: 100, marginRight: 10, borderRadius: 10 }
});

export default CollaboratorScreen;
