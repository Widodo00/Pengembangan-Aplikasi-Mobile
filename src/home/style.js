import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },

    kotakjudul: {
      flex: 1,
      position: 'absolute',
      backgroundColor: 'white',
      height: 150,
      width: 350,
      top: 50,
      alignItems: 'center',
      borderRadius: 10,
    },

    judul: {
      top: 20,
      flex: 1,
      fontSize: 30,
      fontWeight: "bold",
      color: 'blue',
    },

    ket: {
      color: 'grey',
      paddingBottom: 3,
    },

    form: {
      height: 480,
      width: 350,
      backgroundColor: 'white',
      paddingLeft: 20,
      borderRadius: 10,
      top: 50,
    },

    input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },

    icon: {
      paddingRight: 20,
    },

    kotakinput: {
      borderWidth: 1,
      paddingLeft: 10,
      width: 250,
      borderColor: 'grey',
      borderRadius: 10,
      backgroundColor: 'lightgrey',
      marginBottom: 10,
      height: 30,
      justifyContent: 'center',
      top: 5,
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

    icontombol: {
      left: -70,
    },

    jumlah: {
      backgroundColor: 'lightgrey',
      width: 300,
      height: 30,
      borderRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20,
      borderColor: 'grey',
      borderWidth: 1,
    },

    teksform: {
      color: 'black',
      left: 20,
    },

    kotaknav: {
      backgroundColor: 'white',
      height: 75,
      width: '100%',
      top: 130,
      flexDirection: 'row',
      color: 'blue',
      justifyContent: 'center',
    },

    iconnav: {
      color: 'blue',
      top: 10,
      paddingHorizontal: 35,
    },

    tanggal: {
      width: 250,
    },

    teksnav: {
      color: 'blue',
      top: 10,
      left: 25,
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

    pilihpopup:{
      left: 30,
      paddingVertical: 10,
    },

    subtekspopup:{
      color: 'grey',
      fontSize: 10,
    },

    tekspopup:{
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 15,
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
  });

  export default styles;