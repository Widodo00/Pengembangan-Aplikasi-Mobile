import {Text, View, ScrollView, TextInput, Pressable} from 'react-native';
import React, { useState } from "react";
import {AntDesign} from '@expo/vector-icons';
import styles from "../style";
import data from "../data.json";

const home = ({ navigation }) => {
  const [carinama, setnama] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.judul}>
        <Text style={styles.teksjudul}>Kontak</Text>
      </View>
      <View style={styles.halaman}>
      <ScrollView>
      {data.map(post => {
        return(
          <View style={styles.pesanan}>
            <>
              <View style={styles.nama}>
                <Text style={styles.teksnama}>{post.nama}</Text>
              </View><View style={styles.no}>
                <Text style={styles.teksno}>{post.no}</Text>
              </View>
            </>
          </View>
        )
      })}
      </ScrollView>
      </View>
    </View>
  );
}

export default home;