import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { RootStackScreenProps } from '../../../Module/navigation';

interface RouteParams {
  orderedItems: {
    name: string;
    quantity: number;
  }[];
  total: number;
}

const OrderScreen = ({navigation}: RootStackScreenProps<"OrderScreen">) => {
  const route = useRoute();
  const { orderedItems, total } = route.params as RouteParams;

  const renderItem = ({ item }: { item: { name: string; quantity: number } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordered Items</Text>
      <FlatList
        data={orderedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <Text style={styles.total}>Total Quantity: {total}</Text>

      <TouchableOpacity style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

    </View>
  );
};

export default OrderScreen;
