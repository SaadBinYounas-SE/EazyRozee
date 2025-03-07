import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import ProductGrid from "../../components/ProductGrid";

// Define types for stack navigation
type RootStackParamList = {
  ProductDetail: { product: Product };
};

// Define props for the screen
type ProductDetailScreenProps = { 
  route: RouteProp<RootStackParamList, "ProductDetail">;
  navigation: StackNavigationProp<RootStackParamList, "ProductDetail">;
};

// Define Product and Review interfaces
export interface Product {
  image: string;
  name: string;
  rating: number;
  description: string;
  price: string;
  category: string;
}

interface Review {
  id: string;
  reviewerName: string;
  timeAgo: string;
  reviewText: string;
  rating: number;
}

// Dummy reviews data
const reviews: Review[] = [
  { id: "1", reviewerName: "Ali Khan", timeAgo: "2 days ago", reviewText: "Great quality product! Highly recommended.", rating: 5 },
  { id: "2", reviewerName: "Sara Ahmed", timeAgo: "1 week ago", reviewText: "Not bad, but could be better.", rating: 3 },
  { id: "3", reviewerName: "Bilal Raza", timeAgo: "3 months ago", reviewText: "Absolutely loved it! Will buy again.", rating: 5 },
  { id: "4", reviewerName: "Maha Zain", timeAgo: "5 days ago", reviewText: "Good quality, but delivery was slow.", rating: 4 },
  { id: "5", reviewerName: "Tariq Mehmood", timeAgo: "1 month ago", reviewText: "Worth the price. Very happy with my purchase!", rating: 5 },
];

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
const scrollViewRef = useRef<ScrollView>(null);

const handleRelatedProductClick = (relatedProduct: Product) => {
  navigation.setParams({ product: relatedProduct });

  setTimeout(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, 50); // Small delay to ensure the new product is rendered
};
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <Image source={typeof product.image === "string" ? { uri: product.image } : product.image} style={styles.productImage} />
      
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="sharealt" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      
      <View style={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={index}
            name={index < product.rating ? "star" : "star-outline"}
            size={20}
            color="gold"
          />
        ))}
      </View>

      {/* Category above the description */}
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Line below description */}
      <View style={styles.divider} />

      {/* Review Section Header */}
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewHeading}>Customer Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
      {/* Review Section */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={styles.reviewBox}>
            <Text style={styles.reviewText}>{item.reviewText}</Text>
            <Text style={styles.reviewerInfo}>
              {item.reviewerName} · {item.timeAgo}
            </Text>
            <View style={styles.reviewRating}>
              {[...Array(5)].map((_, index) => (
                <Ionicons
                  key={index}
                  name={index < item.rating ? "star" : "star-outline"}
                  size={12}
                  color="gold"
                />
              ))}
            </View>
          </View>
        )}
      />
       <Text style={styles.relatedTitle}>Related Products</Text>
       <ProductGrid navigation={navigation} onProductClick={handleRelatedProductClick}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  backButton: { position: "absolute", top: 20, left: 20, zIndex: 1 },
  productImage: { width: "100%", height: 300, resizeMode: "cover", borderRadius: 10 },
  iconRow: { flexDirection: "row", position: "absolute", right: 20, top: 340 },
  iconButton: { marginHorizontal: 10 },
  productName: { fontSize: 24, fontWeight: "bold", marginTop: 20, marginLeft: 10 },
  price: { fontSize: 20, fontWeight: "bold", marginVertical: 5, marginLeft: 10 },
  rating: { flexDirection: "row", marginVertical: 10, marginLeft: 10 },
  category: { fontSize: 16, color: "black", fontWeight: "bold", marginBottom: 5, marginLeft: 10 },
  description: { fontSize: 16, color: "black", marginVertical: 10, marginLeft: 10 },
  divider: { height: 1, backgroundColor: "#ccc", marginVertical: 10 },
  reviewHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 },
  reviewHeading: { fontSize: 20, fontWeight: "bold" },
  seeAllText: { fontSize: 14, color: "#253A3D", fontWeight: "bold", marginBottom: 10 },
  reviewBox: { width: 250,height:130, backgroundColor: "#F8F8F8", padding: 10, borderRadius: 10, marginRight: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,marginBottom: 10 },
  reviewText: { fontSize: 14, color: "#333", marginBottom: 8 },
  reviewerInfo: { fontSize: 12, color: "#777", marginBottom: 4 },
  reviewRating: { flexDirection: "row", marginTop: 5 },
  relatedTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 }
});

export default ProductDetailScreen;
