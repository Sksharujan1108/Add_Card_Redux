import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../Features/stateHook";
import { useAppSelector } from "../../../Features/stateHook";
import { styles } from "./styles";
import { RootStackScreenProps } from "../../../Module/navigation";
import {
  AddCart,
  addToCart,
  incrementItem,
} from "../../../Features/Slices/AddSlice";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  const dataList = useAppSelector<any>(AddCart);
  const dispatch = useAppDispatch();

  const [selectedItem, setSelectedItem] = useState("");

  const handleLogIn = (item: any) => {
    if (selectedItem === item.id) {
      dispatch(incrementItem(item.id));
    } else {
      setSelectedItem(item.id);
      dispatch(addToCart(item));
    }
  };
  const selectedItems = dataList.filter((item: any) => item.quantity > 0);
  const handleOrderItem = () => {
    const orderedItems = selectedItems.map((item: any) => ({
      name: item.name,
      quantity: item.quantity,
    }));
    const totalQuantity = selectedItems.reduce(
      (total: any, item: any) => total + item.quantity,
      0
    );
    navigation.navigate("OrderScreen", { orderedItems, total: totalQuantity });
  };

  useEffect(() => {
    // Dispatch an action to populate the dataList from your Redux store (if not already populated
  }, []);

  return (
    <SafeAreaView style={{ marginTop: 60 }}>
      <View style={styles.BtnContainerqty}>
        <TouchableOpacity
          style={styles.BtnViewqty}
          onPress={() => handleOrderItem()}
        >
          <Text style={styles.btnTxtqty}>
            {selectedItem !== null
              ? `Name: ${
                  dataList.find((item: any) => item.id === selectedItem)?.name
                }, Quantity: ${selectedItems.reduce(
                  (total: any, item: any) => total + item.quantity,
                  0
                )}`
              : "Select an item to Buy"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={styles.container}>
            <Text style={styles.txt}>Name :{item?.name}</Text>
            <Text style={styles.txt}>Description :{item?.description}</Text>
            <Text style={styles.txt}>Price :{item?.price}</Text>
            <Text style={styles.txt}>Quantity: {item?.quantity}</Text>

            <View style={styles.BtnContainer}>
              <TouchableOpacity
                style={styles.BtnView}
                onPress={() => handleLogIn(item)}
              >
                <Text style={styles.btnTxt}> BUY </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
