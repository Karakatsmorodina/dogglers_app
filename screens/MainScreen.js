import {
  View,
  ActivityIndicator,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const data = [
  {
    name: "Sheikh",
    age: "8",
    img: "https://pet-guide.ru/wp-content/uploads/2022/11/vsyo-pro-sobaku-alabaj-800x445.jpg",
  },
  {
    name: "Tzeitel",
    age: "7",
    img: "https://www.zooplus.de/magazin/wp-content/uploads/2017/03/Mops.jpg",
  },
  {
    name: "Pol",
    age: "5",
    img: "https://www.purina.ru/sites/default/files/styles/nppe_breed_selector_500/public/2020-04/poodle_miniature.jpg?itok=8pH8vlBM",
  },
  {
    name: "Laika",
    age: "3",
    img: "https://storage-api.petstory.ru/resize/1600x1200x80/36/e9/c2/36e9c2c995b1428ba5d1fc87e3d7169e.jpeg",
  },
  {
    name: "Haskii",
    age: "12",
    img: "https://ethnomir.ru/upload/medialibrary/a8a/otkuda_vzyalis_khaski_1.jpg",
  },
  {
    name: "Bob",
    age: "7",
    img: "https://faunistics.com/wp-content/uploads/2019/02/1-4.jpg",
  },
  {
    name: "Aktos",
    age: "15",
    img: "https://hvost.news/upload/resize_cache/iblock/128/750_400_1/128cbfa05a2dba8581355496cfc06910.jpg",
  },
  {
    name: "Aktaban",
    age: "6",
    img: "https://img.aboutanimal.ru/images/2017/12/21/taksa-1513847177.jpg",
  },
];

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              width: 400,
              marginBottom: 20,
            }}
          >
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: item.img }}
            />
            <Text style={{ fontSize: 28, fontWeight: "600" }}>
              Name: {item.name}
            </Text>
            <Text style={{ fontSize: 18 }}>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "lightgreen",
  },
});
