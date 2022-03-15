import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    jadwal: {
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'center',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
    },
    awal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    maskapaiNama: {
        position: "absolute",
        fontWeight: 'bold',
        fontSize: 14,
        left: 25,
    },
    perjalanan: {
        fontSize: 12,
    },
    tanggal: {
        paddingTop: 3,
        fontSize: 14,
        color: 'blue',
    },
    nav: {
        backgroundColor: 'green',
        width: '100%',
        height: 150,
    },
    bar: {
        position: 'absolute',
        left: 20,
        top: 50,
    },
    user: {
        position: 'absolute',
        right: 20,
        top: 50,

    },
    judul: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        top: 65,
        alignSelf: 'center',
    },
    hasilCari: {
        alignSelf: 'center',
        top: 75,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },copyright: {
        position: 'absolute',
        top: 750,
        alignSelf: 'center',
        color: 'grey',
        fontSize: 20,
    }
});

export default styles;