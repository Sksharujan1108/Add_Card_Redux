import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      BtnContainerqty: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      BtnViewqty: {
        // paddingLeft: 15,
        width: 100,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 15,

        elevation: 30,
      },
      btnTxtqty: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
      },
      txt: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        
      },
      BtnContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',

      },
      BtnView: {
        // paddingLeft: 15,
        width: 100,
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 15,
      },
      btnTxt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
      }
})