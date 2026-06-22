import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InventoryItemBox({
//   icon,
  borderColor = '#D4A84F', // default gold
  size = 78,               // matches NIKKE inventory tile size
}) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={[styles.container, { width: size, height: size, borderBottomColor: borderColor }]}>
        {/* <Image source={icon} style={styles.icon} resizeMode="contain" /> */}

        {/* <Text style={styles.quantity} numberOfLines={1}> */}
        {/* </Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3, 
  },

//   icon: {
//     width: '70%',
//     height: '70%',
//   },

//   quantity: {
//     marginTop: 4,
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '600',
//   },
});
