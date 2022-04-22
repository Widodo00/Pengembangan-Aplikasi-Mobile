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
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      top: 30,
    },

    teksjudul: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },

    pesanan:{
      backgroundColor: 'white',
      height: 75,
      width: 350,
      borderRadius: 10,
      paddingLeft: 20,
      paddingBottom: 10,
      marginBottom: 20,
    },

    nama:{
      paddingTop: 10,
    },

    teksnama:{
      fontSize: 20,
      fontWeight: 'bold',
    },

    halaman:{
      height: 600,
      top: 40,
    },

    no:{
        paddingTop: 5,
      },
  
    teksno:{
        fontSize: 15,
      },

  });

  export default styles;