import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpAffiliate= ({ navigation }: { navigation: any }): React.JSX.Element => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo */}
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.title}>Make a Affiliate Account</Text>

            {/* Input Fields */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="CNIC Number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                multiline
            />
            {/* Cover Photo Upload */}
            <TouchableOpacity style={styles.uploadSection}>
                <Icon name="image-outline" size={24} color="#253A3D" />
                <Text style={styles.uploadText}>Attach a CNIC Photo</Text>
            </TouchableOpacity>

            {/* Become a Seller Button */}
            <TouchableOpacity style={styles.button}
             onPress={() => navigation.navigate('AffiliateTabNavigator')}>
                <Text style={styles.buttonText}>Become a Affiliate Marketer</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#253A3D',
        marginVertical: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    uploadSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    uploadText: {
        fontSize: 16,
        color: '#253A3D',
        marginLeft: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#253A3D',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default SignUpAffiliate;