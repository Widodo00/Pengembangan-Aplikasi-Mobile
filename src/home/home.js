import {Text, View, Pressable, Modal} from 'react-native';
import { Fontisto, MaterialCommunityIcons, AntDesign, Feather, Entypo, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "./style";
import DatePicker from "react-native-datepicker";
import React, {useState} from "react";

const home = ({ navigation }) => {
  const [date, setdate] = useState('');
  const [awal, setawal] = useState('Pilih Awal Pelabuhan');
  const [tujuan, settujuan] = useState('Pilih Tujuan Pelabuhan');
  const [kelas, setkelas] = useState('Pilih Layanan');
  const [jam, setjam] = useState('Pilih Jam Masuk');
  const [jumlah, setjumlah] = useState('1');
  const [awalVisible, setawalVisible] = useState(false);
  const [tujuanVisible, settujuanVisible] = useState(false);
  const [kelasVisible, setkelasVisible] = useState(false);
  const [jamVisible, setjamVisible] = useState(false);
  const [jumlahVisible, setjumlahVisible] = useState(false);
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
      <Modal
        animationType="none"
        transparent={true}
        visible={awalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.kotakjudulpopup}>
              <Text style={styles.teksjudulpopup}>PILIH PELABUHAN AWAL</Text>
            </View>
            <View style={styles.pilihanpopup}>
              <Pressable
                style={styles.pilihpopup}
                value="Bakauheni"
                status={awal==='Bakauheni'}
                onPress={() => setawal('Bakauhuni')}
                onPressOut={() => setawalVisible(!awalVisible)}
                >
                <Text style={styles.subtekspopup}>Lampung</Text>
                <Text style={styles.tekspopup}>Bakauheni</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Gilimanuk"
                status={awal==='Gilimanuk'}
                onPress={() => setawal('Gilimanuk')}
                onPressOut={() => setawalVisible(!awalVisible)}
                >
                <Text style={styles.subtekspopup}>Bali</Text>
                <Text style={styles.tekspopup}>Gilimanuk</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Ketapang"
                status={awal==='Ketapang'}
                onPress={() => setawal('Ketapang')}
                onPressOut={() => setawalVisible(!awalVisible)}
                >
                <Text style={styles.subtekspopup}>Jawa Timur</Text>
                <Text style={styles.tekspopup}>Ketapang</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Merak"
                status={awal==='Merak'}
                onPress={() => setawal('Merak')}
                onPressOut={() => setawalVisible(!awalVisible)}
                >
                <Text style={styles.subtekspopup}>Banten</Text>
                <Text style={styles.tekspopup}>Merak</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={tujuanVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.kotakjudulpopup}>
              <Text style={styles.teksjudulpopup}>PILIH PELABUHAN TUJUAN</Text>
            </View>
            <View style={styles.pilihanpopup}>
              <Pressable
                style={styles.pilihpopup}
                value="Bakauheni"
                status={tujuan==='Bakauheni'}
                onPress={() => settujuan('Bakauheni')}
                onPressOut={() => settujuanVisible(!tujuanVisible)}
                >
                <Text style={styles.subtekspopup}>Lampung</Text>
                <Text style={styles.tekspopup}>Bakauheni</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Gilimanuk"
                status={tujuan==='Gilimanuk'}
                onPress={() => settujuan('Gilimanuk')}
                onPressOut={() => settujuanVisible(!tujuanVisible)}
                >
                <Text style={styles.subtekspopup}>Bali</Text>
                <Text style={styles.tekspopup}>Gilimanuk</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Ketapang"
                status={tujuan==='Ketapang'}
                onPress={() => settujuan('Ketapang')}
                onPressOut={() => settujuanVisible(!tujuanVisible)}
                >
                <Text style={styles.subtekspopup}>Jawa Timur</Text>
                <Text style={styles.tekspopup}>Ketapang</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Merak"
                status={tujuan==='Merak'}
                onPress={() => settujuan('Merak')}
                onPressOut={() => settujuanVisible(!tujuanVisible)}
                >
                <Text style={styles.subtekspopup}>Banten</Text>
                <Text style={styles.tekspopup}>Merak</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={kelasVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.kotakjudulpopup}>
              <Text style={styles.teksjudulpopup}>PILIH KELAS LAYANAN</Text>
            </View>
            <View style={styles.pilihanpopup}>
              <Pressable
                style={styles.pilihpopup}
                value="Express"
                status={kelas==='Express'}
                onPress={() => setkelas('Express')}
                onPressOut={() => setkelasVisible(!kelasVisible)}
                >
                <Text style={styles.tekspopup}>Express</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="Reguler"
                status={kelas==='Reguler'}
                onPress={() => setkelas('Reguler')}
                onPressOut={() => setkelasVisible(!kelasVisible)}
                >
                <Text style={styles.tekspopup}>Reguler</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={jamVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.kotakjudulpopup}>
              <Text style={styles.teksjudulpopup}>PILIH JAM MASUK PELABUHAN</Text>
            </View>
            <View style={styles.pilihanpopup}>
              <Pressable
                style={styles.pilihpopup}
                value="00.00"
                status={jam==='00.00'}
                onPress={() => setjam('00.00')}
                onPressOut={() => setjamVisible(!jamVisible)}
                >
                <Text style={styles.tekspopup}>00.00</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="06.00"
                status={jam==='06.00'}
                onPress={() => setjam('06.00')}
                onPressOut={() => setjamVisible(!jamVisible)}
                >
                <Text style={styles.tekspopup}>06.00</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="12.00"
                status={jam==='12.00'}
                onPress={() => setjam('12.00')}
                onPressOut={() => setjamVisible(!jamVisible)}
                >
                <Text style={styles.tekspopup}>12.00</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="18.00"
                status={jam==='18.00'}
                onPress={() => setjam('18.00')}
                onPressOut={() => setjamVisible(!jamVisible)}
                >
                <Text style={styles.tekspopup}>18.00</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={jumlahVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.kotakjudulpopup}>
              <Text style={styles.teksjudulpopup}>PILIH JUMLAH PENUMPANG</Text>
            </View>
            <View style={styles.pilihanpopup}>
              <Pressable
                style={styles.pilihpopup}
                value="1"
                status={jumlah==='1'}
                onPress={() => setjumlah('1')}
                onPressOut={() => setjumlahVisible(!jumlahVisible)}
                >
                <Text style={styles.tekspopup}>1</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="2"
                status={jumlah==='2'}
                onPress={() => setjumlah('2')}
                onPressOut={() => setjumlahVisible(!jumlahVisible)}
                >
                <Text style={styles.tekspopup}>2</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="3"
                status={jumlah==='3'}
                onPress={() => setjumlah('3')}
                onPressOut={() => setjumlahVisible(!jumlahVisible)}
                >
                <Text style={styles.tekspopup}>3</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="4"
                status={jumlah==='4'}
                onPress={() => setjumlah('4')}
                onPressOut={() => setjumlahVisible(!jumlahVisible)}
                >
                <Text style={styles.tekspopup}>4</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
              <Pressable
                style={styles.pilihpopup}
                value="5"
                status={jumlah==='5'}
                onPress={() => setjumlah('5')}
                onPressOut={() => setjumlahVisible(!jumlahVisible)}
                >
                <Text style={styles.tekspopup}>5</Text>
                <Text style={styles.tekspopup}>------------------------------------------------</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.kotakjudul}>
        <Text style={styles.judul}>KAPALZY</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.ket}>Pelabuhan Awal</Text>
        <View style={styles.input}>
          <Fontisto name="sait-boat" size={24} color="grey" style={styles.icon}/>
          <Pressable
            style={styles.kotakinput}
            title="awal"
            onPress={() => setawalVisible(!awalVisible)}
            >
            <Text style={styles.teksform}>{awal}</Text>
          </Pressable>
        </View>
        <Text style={styles.ket}>Pelabuhan Tujuan</Text>
        <View style={styles.input}>
        <MaterialCommunityIcons name="sail-boat" size={24} color="grey" style={styles.icon}/>
          <Pressable
            style={styles.kotakinput}
            title="tujuan"
            onPress={() => settujuanVisible(!tujuanVisible)}
            >
            <Text style={styles.teksform}>{tujuan}</Text>
          </Pressable>
        </View>
        <Text style={styles.ket}>Kelas Layanan</Text>
        <View style={styles.input}>
        <MaterialCommunityIcons name="chair-rolling" size={24} color="grey" style={styles.icon}/>
          <Pressable
            style={styles.kotakinput}
            title="kelas"
            onPress={() => setkelasVisible(!kelasVisible)}
            >
            <Text style={styles.teksform}>{kelas}</Text>
          </Pressable>
        </View>
        <Text style={styles.ket}>Tanggal Masuk Pelabuhan</Text>
        <View style={styles.input}>
          <DatePicker
            style={styles.tanggal}
            date={date}
            mode="date"
            format="DD/MM/YYYY"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: -5,
                height: 20,
                width: 20,
              },
              dateInput: {
                left: 45,
                borderWidth: 1,
                borderRadius: 10,
                height: 30,
                backgroundColor: 'lightgrey',
                borderColor: 'grey',
              },
            }}
            onDateChange={(date) => setdate(date)}
            />
        </View>
        <Text style={styles.ket}>Jam Masuk Pelabuhan</Text>
        <View style={styles.input}>
        <AntDesign name="clockcircleo" size={24} color="grey" style={styles.icon}/>
          <Pressable
            style={styles.kotakinput}
            title="jam"
            onPress={() => setjamVisible(!jamVisible)}
            >
            <Text style={styles.teksform}>{jam}</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.jumlah}
          title="jumlah"
          onPress={() => setjumlahVisible(!jumlahVisible)}
          >
          <Text style={styles.teksform}>Dewasa                                        {jumlah} Orang</Text>
        </Pressable>
        <Pressable
          style={styles.tombol}
          title="buat"
          onPress={() => navigation.navigate('pesan', {parawal:awal,})}
          >
          <AntDesign name="search1" size={24} color="white" style={styles.icontombol} />
          <Text style={styles.tekstombol}>Buat Tiket</Text>
        </Pressable>
      </View>
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

export default home;