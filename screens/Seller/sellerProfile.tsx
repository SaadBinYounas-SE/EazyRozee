import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SellerProfileScreen = () => {
    const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Profile</Text>
      <View style={styles.divider} />

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={require("../../assets/postPic.jpg")}
          style={styles.profilePic}
        />
        <TouchableOpacity>
          <Text style={styles.changeProfileText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Separator Line Above Seller Information */}
      <View style={styles.separator} />

      {/* Seller Information */}
      <View style={styles.sellerInfoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name:</Text>
          <Text style={styles.infoText}>John Doe</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Store Name:</Text>
          <Text style={styles.infoText}>John's Store</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoText}>+1234567890</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
      </View>

      {/* Edit Option */}
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="pencil-outline" size={24} color='blue' />
      </TouchableOpacity>

      {/* Separator Line Above Switch To Section */}
      <View style={styles.separator} />

      {/* Switch To Section */}
      <Text style={styles.switchToText}>Switch To</Text>
      <View style={styles.roleButtonsContainer}>
        <TouchableOpacity style={[styles.roleButton, styles.customerButton]}
         onPress={() => navigation.getParent()?.navigate('LogIn')}>
          <Text style={styles.roleText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.roleButton, styles.affiliateButton]}>
          <Text style={styles.roleText}>Affiliate Marketer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  divider: { height: 2, backgroundColor: "#253A3D", marginVertical: 15 },
  profilePicContainer: { alignItems: 'center', marginVertical: 10 },
  profilePic: { width: 100, height: 100, borderRadius: 50 },
  changeProfileText: { color: 'blue', marginTop: 5 },
  sellerInfoContainer: { width: '100%', marginTop: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  infoLabel: { fontSize: 16, fontWeight: 'bold' },
  infoText: { fontSize: 16 },
  editButton: { alignSelf: 'flex-end', marginTop: 10 },
  separator: { height: 1, backgroundColor: '#ccc', marginVertical: 8 }, // Added separator style
  switchToText: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  roleButtonsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  roleButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  customerButton: { backgroundColor: '#253A3D', paddingLeft: 25, paddingRight: 25 },
  affiliateButton: { backgroundColor: '#253A3D' },
  roleText: { color: '#fff', fontWeight: 'bold' },
});

export default SellerProfileScreen;