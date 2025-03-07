import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "react-native-vector-icons/AntDesign";

const AddNewProductScreen = () => {
  const [stock, setStock] = useState(1);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [commissionRate, setCommissionRate] = useState(""); // User input for commission rate
  const commission = price && commissionRate ? (parseFloat(price) * (parseFloat(commissionRate) / 100)).toFixed(2) : "0.00";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      
      {/* Add Photo Section */}
      <TouchableOpacity style={styles.photoCard}>
        <AntDesign name="plus" size={40} color="#aaa" />
        <Text style={styles.photoText}>Add Photo</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.cardInput}>
        <TextInput placeholder="Product Name" style={styles.input} />
      </View>
      
      <View style={styles.cardInput}>
        <TextInput placeholder="Description" style={styles.input} multiline />
      </View>

      {/* Stock Counter */}
      <View style={styles.cardRow}>
        <Text>Stock:</Text>
        <TouchableOpacity
          disabled={stock === 1}
          onPress={() => setStock(stock - 1)}
          style={[styles.stockButton, stock === 1 && styles.disabledButton]}
        >
          <AntDesign name="minus" size={20} color={stock === 1 ? "gray" : "black"} />
        </TouchableOpacity>
        <Text>{stock}</Text>
        <TouchableOpacity onPress={() => setStock(stock + 1)} style={styles.stockButton}>
          <AntDesign name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Price and Commission */}
      <View style={styles.cardInput}>
        <TextInput
          placeholder="Price"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setPrice}
          value={price}
        />
      </View>
      
      <View style={styles.cardInput}>
        <TextInput
          placeholder="Commission Rate (%)"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setCommissionRate}
          value={commissionRate}
        />
      </View>
      <Text style={styles.commissionText}>Commission: Rs {commission}</Text>

      {/* Category Picker */}
      <View style={styles.cardInput}>
        <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Clothing" value="clothing" />
          <Picker.Item label="Accessories" value="accessories" />
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: 'center' },
  photoCard: {
    alignItems: "center",
    justifyContent: "center",
    height: 200, // Increased height
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#253A3D",
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  photoText: { color: "#aaa", marginTop: 10 },
  cardInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#253A3D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: { fontSize: 16 },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#253A3D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stockButton: { padding: 10 },
  disabledButton: { opacity: 0.5 },
  commissionText: { fontSize: 16, color: "#888", marginBottom: 10 },
  submitButton: {
    backgroundColor: "#253A3D",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40
  },
  submitText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default AddNewProductScreen;
