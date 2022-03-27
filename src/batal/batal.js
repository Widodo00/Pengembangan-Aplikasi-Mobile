import {Text, View, Pressable, ScrollView, Modal } from 'react-native';
import {MaterialCommunityIcons, AntDesign, Feather, Entypo, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "./style";
import React, {useState} from "react";

const batal = ({ navigation }) => {

  const [lainnyaVisible, setlainnyaVisible] = useState(false);

  return (
    <View style={styles.container}>
    <Modal
        animationType='none'
        transparent={true}
        visible={lainnyaVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.kotakjudulpopup}>
            <Text style={styles.teksjudulpopup}>MENU</Text>
          </View>
          <View style={styles.kotaklainnya}>
            <View style={styles.baris}>
              <View style={styles.menu}>
              <FontAwesome5 name="search" size={75} color="black"/>
              <Text>Cek Pemesanan</Text>
              </View>
              <View style={styles.menu}>
              <Ionicons name="people" size={75} color="black"/>
              <Text>Detail Profile</Text>
              </View>
            </View>
            <View style={styles.baris}>
              <View style={styles.menu}>
              <AntDesign name="phone" size={75} color="black" />
              <Text>Hubungi Kami</Text>
              </View>
              <View style={styles.menu}>
              <FontAwesome name="history" size={75} color="black" />
              <Text>Riwayat Pemesanan</Text>
              </View>
            </View>
            <View>
            <Pressable
              style={styles.tombol}
              title="Keluar"
              onPress={() => setlainnyaVisible(!lainnyaVisible)}
              >
              <Text style={styles.tekstombol}>Keluar</Text>
            </Pressable>
            </View>
          </View>
          </View>
        </View>

      </Modal>
      <View style={styles.judul}>
        <Text style={styles.teksjudul}>Daftar Pembatalan</Text>
      </View>
      <ScrollView>

      </ScrollView>
      <View style={styles.kotaknav}>
        <Pressable
          onPress={() => navigation.navigate('home')}
        >
          <AntDesign name="home" style={styles.iconnav} size={30} />
          <Text style={styles.teksnav}>Beranda</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('pesan')}
        >
          <Feather name="book" style={styles.iconnav} size={30}/>
          <Text style={styles.teksnav}>Pesanan Saya</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('batal')}
        >
          <MaterialCommunityIcons name="cash-refund" style={styles.iconnav} size={30}/>
          <Text style={styles.teksnav}>Pembatalan</Text>
        </Pressable>
        <Pressable
          onPress={() => setlainnyaVisible(!lainnyaVisible)}
        >
          <Entypo name="menu" style={styles.iconnav} size={30}/>
          <Text style={styles.teksnav}>Lainnya</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default batal;