import React, { useState } from "react";
import { 
    View, 
    TouchableOpacity, 
    FlatList, 
    Image, 
    StyleSheet, 
    Text, 
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationProp } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

interface Product {
    id: string;
    image: any;
    name: string;
    rating: number;
    price: string;
    description: string;
    category: string
}

interface Props {
  showFilledHeart?: boolean;
  navigation: any;
  onProductClick: (product: Product) => void;
}


const Products: React.FC<Props> = ({ navigation,onProductClick,showFilledHeart }) => {
    const categories: string[] = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5","Category 6","Category 7"];


    const posts: Product[] = [
        { id: '1', image: require('../assets/postPic.jpg'), name: 'Product 1', rating: 1.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[1] },
        { id: '3', image: require('../assets/postPic.jpg'), name: 'Product 3', rating: 4.2, price: '$20', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[2]  },
        { id: '2', image: require('../assets/postPic.jpg'), name: 'Product 2', rating: 3.0, price: '$30', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[3]  },
        { id: '4', image: require('../assets/postPic.jpg'), name: 'Product 4', rating: 4.7, price: '$15', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[4]  },
        { id: '5', image: require('../assets/postPic.jpg'), name: 'Product 5', rating: 5.0, price: '$40', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[5]  },
        { id: '6', image: require('../assets/postPic.jpg'), name: 'Product 6', rating: 4.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[6]  },
        { id: '7', image: require('../assets/postPic.jpg'), name: 'Product 7', rating: 4.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[0]  },

    ];

    return (
        <View style={style.container}>
          <FlatList
             data={posts}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
                 <TouchableOpacity
                     style={style.postContainer}
                     onPress={() => {
                      navigation.navigate("ProductDetail", { product: item });
                      onProductClick(item); // Call the onProductClick function
                    }}
                    
                 >
                     <Image source={item.image} style={style.postImage} />
                     <View style={style.postDetails}>
                         <Text style={style.postName}>{item.name}</Text>
                         <Text style={style.postRating}>Rating: {item.rating}</Text>
                         <Text style={style.postPrice}>{item.price}</Text>
                     </View>
                     <TouchableOpacity style={style.heartButton}>
                         <AntDesign
                           name={showFilledHeart ? 'heart' : 'hearto'} // Show filled or outlined heart
                           size={20}
                           color={showFilledHeart ? 'red' : '#000'} // Red for filled, black for outlined
                         />
                     </TouchableOpacity>
                 </TouchableOpacity>
             )}
             numColumns={2}
             contentContainerStyle={style.postList} 
          />
        </View>
    );
};

const style = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#fff" 
    },
    postList: { paddingHorizontal: 10, paddingTop: 5 },
    postContainer: { flex: 1, backgroundColor: "#f9f9f9", margin: 10, borderRadius: 10, padding: 10, justifyContent: 'space-between', alignItems: 'center', elevation: 3, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4 },
    postImage: { width: 100, height: 100, borderRadius: 10 },
    postDetails: { marginVertical: 10, alignItems: 'center' },
    postName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    postRating: { fontSize: 14, color: 'gray' },
    postPrice: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
    heartButton: { position: 'absolute', bottom: 10, right: 10 },
});

export default Products;