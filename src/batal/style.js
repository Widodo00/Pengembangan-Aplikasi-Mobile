import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      height: '100%',
    },

    judul: {
      backgroundColor: 'blue',
      width: '100%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      paddingTop: 30,
    },

    teksjudul: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },

    teksnav: {
      color: 'blue',
      top: 10,
      left: 25,
    },

    kotaknav: {
      backgroundColor: 'white',
      height: 75,
      width: '100%',
      flexDirection: 'row',
      color: 'blue',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
    },

    iconnav: {
      color: 'blue',
      top: 10,
      paddingHorizontal: 35,
    },

    teksnavpesanan: {
      color: 'blue',
      top: 10,
      left: 10,
    },

    teksnavbatal: {
      color: 'blue',
      top: 10,
      left: 10,
    },

    kotaklainnya:{
      height: 400,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 35,
    },

    baris:{
      flexDirection: 'row',
    },

    menu:{
      height: 150,
      width: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalView: {
      backgroundColor: 'lightgrey',
      borderRadius: 10,
      width: '90%',
    },

    kotakjudulpopup: {
      backgroundColor: 'orange',
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'center',
    },

    teksjudulpopup: {
      color: 'white',
      fontWeight: 'bold',
      padding: 10,
    },

    tombol: {
      backgroundColor: 'orange',
      width: 300,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    tekstombol: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  export default styles;