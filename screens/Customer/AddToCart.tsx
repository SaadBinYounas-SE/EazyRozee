import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const dummyCart = [
  { id: '1', name: 'Product 1', category: 'Electronics', price: '$20', image: require('../../assets/postPic.jpg'), quantity: 1 },
  { id: '2', name: 'Product 2', category: 'Clothing', price: '$30', image: require('../../assets/postPic.jpg'), quantity: 2 },
  { id: '3', name: 'Product 3', category: 'Home Decor', price: '$25', image: require('../../assets/postPic.jpg'), quantity: 1 },
  { id: '4', name: 'Product 4', category: 'Electronics', price: '$20', image: require('../../assets/postPic.jpg'), quantity: 1 },
  { id: '5', name: 'Product 5', category: 'Clothing', price: '$30', image: require('../../assets/postPic.jpg'), quantity: 2 },
  { id: '6', name: 'Product 6', category: 'Home Decor', price: '$25', image: require('../../assets/postPic.jpg'), quantity: 1 },


];

const CartScreen = () => {
  const [cart, setCart] = useState(dummyCart);

  const incrementQuantity = (id: string) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id: string) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Cart</Text>
        <View style={styles.divider} />
      <ScrollView style={styles.cartList}>
        {cart.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCategory}>{item.category}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summarySection}>
        <Text style={styles.summaryText}>Subtotal: ${calculateTotal()}</Text>
        <Text style={styles.summaryText}>Shipping: $5.00</Text>
        <Text style={styles.summaryText}>Total: ${(parseFloat(calculateTotal()) + 5).toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Confirm Payment and Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding:10 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', margin: 10 },
  divider: { height: 2, backgroundColor: "#253A3D", marginBottom: 10},
  cartList: { flex: 1, paddingHorizontal: 10 },
  cartItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  productImage: { width: 70, height: 70, borderRadius: 10 },
  productDetails: { flex: 1, marginLeft: 20 },
  productName: { fontSize: 18, fontWeight: 'bold' },
  productCategory: { fontSize: 14, color: '#555' },
  productPrice: { fontSize: 16, color: '#555' },
  quantityControl: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 10 },
  quantity: { fontSize: 18 },
  summarySection: { padding: 20, borderTopWidth: 1, borderColor: '#ccc', backgroundColor: '#f9f9f9', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  summaryText: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  checkoutButton: { backgroundColor: '#253A3D', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  checkoutText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

export default CartScreen;
