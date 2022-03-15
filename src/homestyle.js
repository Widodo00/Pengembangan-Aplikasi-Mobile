import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 805,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
    nav: {
        backgroundColor: 'green',
        width: '100%',
        height: 70,
    },
    bar: {
        position: 'absolute',
        left: 20,
        top: 40,
    },
    user: {
        position: 'absolute',
        right: 20,
        top: 40,

    },
    judul: {
        width: '100%',
        height: 450,
        backgroundColor: 'green',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: 'center',

    },
    judulteks: {
        top: 50,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
    },
    tabel: {
        width: '80%',
        height: 350,
        backgroundColor: 'white',
        position: 'absolute',
        top: 225,
        borderRadius: 10,
        padding: 20,
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'darkgrey',
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        color: 'green',
        flex: 0.5,
    },
    tekstabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    kotakInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        height: 43,
        width: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'darkgrey',
        fontSize: 14,
        flex: 2.5,
    },
    tanggal: {
        borderWidth: 1,
        height: 43,
        width: '100%',
        borderRadius: 10,
        borderColor: 'darkgrey',
        fontSize: 14,
        flex: 2.5,
    },
    tombol: {
        marginTop: 10,
        backgroundColor: 'orange',
        width: '100%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tekstombol: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    copyright: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        color: 'grey',
        fontSize: 20,
    },
});

export default styles;