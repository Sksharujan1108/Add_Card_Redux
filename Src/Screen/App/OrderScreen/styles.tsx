import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    itemName: {
      fontSize: 16,
    },
    itemQuantity: {
      fontSize: 16,
    },
    total: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    backButton: {
        backgroundColor: 'blue', // Background color for the button
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      },
      backButtonText: {
        color: 'white', // Text color for the button
        fontSize: 18,
      },
  });