import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./homestyle";
import DatePicker from "react-native-datepicker";

const HomeScreen = ({ navigation }) => {
    const [berangkat, setberangkat] = useState('');
    const [caritujuan, setcaritujuan] = useState('');
    const [date, setDate] = useState('16/03/2022');

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style={styles.statusbar}/>
                <View style={styles.nav}>
                    <Icon style={styles.bar} name="bars" size={30} color='white'/>
                    <Icon style={styles.user} name="user" size={30} color='white'/>
                </View>
                <View style={styles.judul}>
                    <Text style={styles.judulteks}>Hiling.id</Text>
                </View>
                <View style={styles.tabel}>
                    <Text style={styles.tekstabel}>Lokasi Keberangkatan</Text>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="plane-departure" size={21} color='green' />
                        <TextInput
                            style={styles.kotakInput}
                            placeholder='Masukkan Lokasi Keberangkatan'
                            value={berangkat}
                            onChangeText={(text) => setberangkat(text)}
                        />
                    </View>
                    <Text style={styles.tekstabel}>
                        Lokasi Tujuan
                    </Text>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="plane-arrival" size={21.5} color='green' />
                        <TextInput
                            style={styles.kotakInput}
                            placeholder='Masukkan Lokasi Tujuan'
                            value={caritujuan}
                            onChangeText={(text) => setcaritujuan(text)}
                        />
                    </View>
                    <Text style={styles.tekstabel}>
                        Tanggal Keberangkatan
                    </Text>
                    <View style={styles.input}>
                        <DatePicker
                            style={styles.tanggal}
                            date={date}
                            mode="date"
                            format="DD/MM/YYYY"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 5,
                                    top: 4,
                                },
                                dateInput: {
                                    alignItems: "flex-start",
                                    left: 50,
                                    borderWidth: 0,
                                },
                                placeholderText: {
                                    fontSize: 17,
                                    color: "gray"
                                },
                                dateText: {
                                    fontSize: 17,
                                }
                            }}
                            onDateChange={(date) => setDate(date)}/>
                    </View>
                    <Pressable
                        style={styles.tombol}
                        title="cari"
                        onPress={() => navigation.navigate('Hasil', { berangkat: berangkat, tujuan: caritujuan, tanggal: date })}
                    >
                        <Text style={styles.tekstombol}>Cari</Text>
                    </Pressable>
                </View>
                <Text style={styles.copyright}>Copyright Widodo - 119140156</Text>
            </View >
        </ScrollView>
    );
};

export default HomeScreen;