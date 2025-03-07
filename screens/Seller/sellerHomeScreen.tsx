import React, { useState } from "react";
import { 
    View, 
    TouchableOpacity, 
    ScrollView, 
    FlatList, 
    Image, 
    StyleSheet, 
    TextInput, 
    Text, 
    GestureResponderEvent
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationProp } from '@react-navigation/native';
import ProductGrid from "../../components/ProductGrid";


interface Product {
    id: string;
    image: any;
    name: string;
    rating: number;
    price: string;
    description: String;
    category: String
}

interface Props {
    navigation: NavigationProp<any>;
}

const SellerHome: React.FC<Props> = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const categories: string[] = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5","Category 6","Category 7"];

    const handleSearchChange = (text: string) => {
        setSearchQuery(text);
    };

    const handleCategorySelect = (index: number) => {
        setSelectedCategory(index);
    };

    const posts: Product[] = [
        { id: '1', image: require('../../assets/postPic.jpg'), name: 'Product 1', rating: 1.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[1] },
        { id: '3', image: require('../../assets/postPic.jpg'), name: 'Product 3', rating: 4.2, price: '$20', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[2]  },
        { id: '2', image: require('../../assets/postPic.jpg'), name: 'Product 2', rating: 3.0, price: '$30', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[3]  },
        { id: '4', image: require('../../assets/postPic.jpg'), name: 'Product 4', rating: 4.7, price: '$15', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[4]  },
        { id: '5', image: require('../../assets/postPic.jpg'), name: 'Product 5', rating: 5.0, price: '$40', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[5]  },
        { id: '6', image: require('../../assets/postPic.jpg'), name: 'Product 6', rating: 4.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[6]  },
        { id: '7', image: require('../../assets/postPic.jpg'), name: 'Product 7', rating: 4.5, price: '$25', description: 'lorem ipsum this is the description of my screen this is very fancy product al the description will stay here and will not run anywhere', category: categories[7]  },

    ];


    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <TouchableOpacity style={style.backButton}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
    
                <View style={style.searchBar}>
                    <Icon name="search" size={20} color="gray" />
                    <TextInput
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                        style={style.searchInput}
                        placeholder="Search"
                    />
                </View>
    
                <TouchableOpacity>
                    <Image source={require("../../assets/logo.png")} style={style.logo} />
                </TouchableOpacity>
            </View>
    
            <ScrollView horizontal style={style.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[style.categoryButton, selectedCategory === index && style.selectedCategoryButton]}
                        onPress={() => handleCategorySelect(index)}
                    >
                        <Text style={[style.categoryText, selectedCategory === index && style.selectedCategoryText]}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ProductGrid navigation={navigation} onProductClick={function (product: Product): void {
                } }/>
            </ScrollView>

        </View>
    );
    
};

const style = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#fff" 
    },
    topBar: { 
        flexDirection: "row", 
        alignItems: "center", 
        paddingHorizontal: 10, 
        paddingVertical: 5,
        backgroundColor: "#f8f8f8", 
        borderBottomWidth: 1, 
        borderBottomColor: 'black' 
    },
    backButton: { 
        marginRight: 20, 
        marginLeft: 10 
    },
    searchBar: { 
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor: "#e0e0e0", 
        borderRadius: 20, 
        paddingHorizontal: 10, 
        height: 40 
    },
    searchInput: { 
        flex: 1, 
        fontSize: 16, 
        color: "#000" 
    },
    logo: { 
        width: 60, 
        height: 60, 
        resizeMode: "contain", 
        marginLeft: 10 
    },
    categoryContainer: { 
        flexDirection: 'row', 
        marginTop: 20,
    },
    categoryButton: { 
        backgroundColor: '#d3d3d3', 
        paddingVertical: 8, 
        paddingHorizontal: 10, 
        marginRight: 5, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 40, 
        marginLeft: 10,
        marginBottom:20
    },
    selectedCategoryButton: { backgroundColor: "#253A3D" },
    categoryText: { color: 'black', fontSize: 14 },
    selectedCategoryText: { color: 'white' },
    postList: { paddingHorizontal: 10, paddingTop: 5 },
    postContainer: { flex: 1, backgroundColor: "#f9f9f9", margin: 10, borderRadius: 10, padding: 10, justifyContent: 'space-between', alignItems: 'center', elevation: 3, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4 },
    postImage: { width: 100, height: 100, borderRadius: 10 },
    postDetails: { marginVertical: 10, alignItems: 'center' },
    postName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    postRating: { fontSize: 14, color: 'gray' },
    postPrice: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
    heartButton: { position: 'absolute', bottom: 10, right: 10 },
});

export default SellerHome;