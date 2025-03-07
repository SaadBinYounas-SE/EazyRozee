import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ProductGrid from "../../components/ProductGrid";
import { Product } from "./productDetailScreen";

const SellerStoreScreen = () => {
  const storeName = "Seller's Store";
  const totalProducts = 25;
  const totalSold = 120;
  const coverPhoto = require("../../assets/postPic.jpg");
  const profilePhoto = require("../../assets/postPic.jpg");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.storeName}>{storeName}</Text>
      
      {/* Cover and Profile Photo Section */}
      <View style={styles.coverContainer}>
        <Image source={coverPhoto} style={styles.coverPhoto} />
        <Image source={profilePhoto} style={styles.profilePhoto} />
      </View>
      
      {/* Seller Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Total Products: {totalProducts}</Text>
        <Text style={styles.statsText}>Total Sold: {totalSold}</Text>
      </View>
      
      {/* Product Grid */}
      <ProductGrid navigation={undefined} onProductClick={function (product: Product): void {
        throw new Error("Function not implemented.");
      } } />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  storeName: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  coverContainer: { alignItems: "center", marginBottom: 20},
  coverPhoto: { width: "100%", height: 250, resizeMode: "cover", borderRadius: 20 },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 60,
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
    borderWidth: 2,
    borderColor: "white",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  statsText: { fontSize: 16, fontWeight: "bold" },
});

export default SellerStoreScreen;
