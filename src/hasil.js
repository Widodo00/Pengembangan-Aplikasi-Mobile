import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./hasilstyle";

const Jadwal = [
    {
        jadwal_id: '001',
        bandara_kode_keberangkatan: 'CGK',
        bandara_kode_tujuan: 'SUB',
        maskapai_id: 'GI',
        maskapai_nama: 'Garuda Indonesia',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Soekarno-Hatta',
        bandara_nama_tujuan: 'Juanda',
        tanggal: '14/03/2022',
    },
    {
        jadwal_id: '002',
        bandara_kode_keberangkatan: 'DPS',
        bandara_kode_tujuan: 'CGK',
        maskapai_id: 'CT',
        maskapai_nama: 'Citilink',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Ngurah Rai',
        bandara_nama_tujuan: 'Soekarno-Hatta',
        tanggal: '17/03/2022',
    },
    {
        jadwal_id: '003',
        bandara_kode_keberangkatan: 'UPG',
        bandara_kode_tujuan: 'DPS',
        maskapai_id: 'SA',
        maskapai_nama: 'Sriwijaya Air',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Sultan Hasanudin',
        bandara_nama_tujuan: 'Ngurah Rai',
        tanggal: '15/03/2022',
    },
    {
        jadwal_id: '004',
        bandara_kode_keberangkatan: 'DPS',
        bandara_kode_tujuan: 'SUB',
        maskapai_id: 'GI',
        maskapai_nama: 'Garuda Indonesia',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Ngurah Rai',
        bandara_nama_tujuan: 'Juanda',
        tanggal: '14/03/2022',
    },
    {
        jadwal_id: '005',
        bandara_kode_keberangkatan: 'CGK',
        bandara_kode_tujuan: 'UPG',
        maskapai_id: 'CT',
        maskapai_nama: 'Citilink',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Soekarno-Hatta',
        bandara_nama_tujuan: 'Sultan Hasanudin',
        tanggal: '16/03/2022',
    },
    {
        jadwal_id: '006',
        bandara_kode_keberangkatan: 'SUB',
        bandara_kode_tujuan: 'DPS',
        maskapai_id: 'AA',
        maskapai_nama: 'Air Asia',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Juanda',
        bandara_nama_tujuan: 'Ngurah Rai',
        tanggal: '15/03/2022',
    },
    {
        jadwal_id: '007',
        bandara_kode_keberangkatan: 'UPG',
        bandara_kode_tujuan: 'CGK',
        maskapai_id: 'SA',
        maskapai_nama: 'Sriwijaya Air',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Sultan Hasanudin',
        bandara_nama_tujuan: 'Soekarno-Hatta',
        tanggal: '16/03/2022',
    },
    {
        jadwal_id: '008',
        bandara_kode_keberangkatan: 'KNO',
        bandara_kode_tujuan: 'UPG',
        maskapai_id: 'LA',
        maskapai_nama: 'Lion Air',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Kualanamu',
        bandara_nama_tujuan: 'Sultan Hasanudin',
        tanggal: '18/03/2022',
    },
    {
        jadwal_id: '009',
        bandara_kode_keberangkatan: 'SUB',
        bandara_kode_tujuan: 'KNO',
        maskapai_id: 'AA',
        maskapai_nama: 'Air Asia',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Juanda',
        bandara_nama_tujuan: 'Kualanamu',
        tanggal: '19/03/2022',
    },
    {
        jadwal_id: '010',
        bandara_kode_keberangkatan: 'KNO',
        bandara_kode_tujuan: 'DPS',
        maskapai_id: 'LA',
        maskapai_nama: 'Lion Air',
        maskapai_logo: 'plane',
        bandara_nama_keberangkatan: 'Kualanamu',
        bandara_nama_tujuan: 'Ngurah Rai',
        tanggal: '18/03/2022',
    },
];

const Item = ({ bandara_nama_keberangkatan, maskapai_logo, maskapai_nama, bandara_nama_tujuan, tanggal }) => (
    <View style={styles.jadwal}>
        <View style={styles.awal}>
            <View style={styles.detail}>
                <Text style={styles.bandara}>{bandara_nama_keberangkatan}     -</Text>
            </View>
            <View style={styles.detail}>
                <Icon name={maskapai_logo} size={18} color='green' />
                <Text style={styles.maskapaiNama}>{maskapai_nama}</Text>
            </View>
        </View>
        <View style={styles.awal}>
            <View style={styles.awal}>
                <Text style={styles.bandara}>{bandara_nama_tujuan}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.tanggal}>{tanggal}</Text>
            </View>
        </View>
    </View>
);

const Hasil = ({ navigation }) => {

    const [filteredData, setfilteredData] = useState([]);
    const [hasilCariText, sethasilCariText] = useState('');

    useEffect(() => {
        filterCari(navigation.getParam('berangkat'), navigation.getParam('tujuan'), navigation.getParam('tanggal'));
        return () => {
        }
    }, [])

    const filterCari = (berangkat, tujuan, tanggal) => {
        if (berangkat) {
            const jadwalbaru = Jadwal.filter((item) => {
                const temp = item.bandara_nama_keberangkatan ? item.bandara_nama_keberangkatan : '';
                const temp1 = berangkat
                return temp.indexOf(temp1) > -1;
            });
            setfilteredData(jadwalbaru);
            return sethasilCariText(navigation.getParam('berangkat'));

        }
        else if (tujuan) {
            const jadwalbaru = Jadwal.filter((item) => {
                const temp = item.bandara_nama_tujuan ? item.bandara_nama_tujuan : '';
                const temp1 = tujuan
                return temp.indexOf(temp1) > -1;
            });
            setfilteredData(jadwalbaru);
            return sethasilCariText(navigation.getParam('tujuan'));

        }
        else if (tanggal) {
            const jadwalbaru = Jadwal.filter((item) => {
                const temp = item.tanggal ? item.tanggal : '';
                const temp1 = tanggal
                return temp.indexOf(temp1) > -1;
            });
            setfilteredData(jadwalbaru);
            return sethasilCariText(navigation.getParam('tanggal'));

        }
        else {
            setfilteredData(Jadwal);
            return 'No Parameter'

        }
    };


    const renderItem = ({ item }) => (
        <Item
            bandara_nama_keberangkatan={item.bandara_nama_keberangkatan}
            bandara_nama_tujuan={item.bandara_nama_tujuan}
            maskapai_nama={item.maskapai_nama}
            tanggal={item.tanggal}
            maskapai_logo={item.maskapai_logo}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Icon
                    style={styles.bar} name="arrow-left" size={25} color='white' onPress={() => navigation.goBack()} />
                <Text style={styles.judul}>Hiling.id</Text>
                <Icon
                    style={styles.user} name="user" size={25} color='white' onPress={() => console.warn("icon user ditekan!")} />
                <Text style={styles.hasilCari}>
                    Hasil Pencarian "{hasilCariText}"
                </Text>
            </View>
            <View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.jadwal_id}
                />
            </View>
            <Text style={styles.copyright}>Copyright Widodo - 119140156</Text>
        </View >
    );
};

export default Hasil;