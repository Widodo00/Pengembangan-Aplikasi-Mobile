import {Text, View, Pressable, ScrollView, Modal} from 'react-native';
import {MaterialCommunityIcons, AntDesign, Feather, Entypo, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "./style";
import data from "./data.json";

export default function App() {
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
};