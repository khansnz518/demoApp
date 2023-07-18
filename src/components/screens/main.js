import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState } from "react";

  const Main = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      getProduction();
    }, []);
    const getProduction = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
    };
    return (
      <View style={StyleSheet.container}>
        <View style={styles.filterContainer}>
          <Text style={{ fontWeight: "bold",color:'#000' }}>{product.length} items</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Image
                source={require("../../assests/filter.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold",color:'#000' }}>Filter</Text>
          </View>
        </View>
        <FlatList
          data={product}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {}}
                style={styles.productItem}
              >
                <Image source={{ uri: item.image }} style={styles.item} />
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Image
                    source={require("../../assests/star.png")}
                    style={styles.star}
                  />
                  <Text>{item.rating.rate}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.name}>
                    {item.title.length > 12
                      ? item.title.substring(0, 12) + "..."
                      : item.title}
                  </Text>
                  <Text style={styles.desc}>
                    {item.description.length > 15
                      ? item.description.substring(0, 15) + "..."
                      : item.description}
                  </Text>
                  <Text style={styles.price}> {"\u20B9" + item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  
  export default Main;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    productItem: {
      width: "47%",
      backgroundColor: "#fff",
      marginTop: 5,
      marginHorizontal: 5,
      padding: 15,
    },
    item: {
      width: '100%',
      height: 250,
    },
    name: {
      fontSize: 18,
      fontWeight: "600",
      marginLeft: 0,
      color:'#000'
    },
    desc: {
      marginLeft: 0,
      color:'#000'
    },
    price: {
      color: "black",
      fontSize: 18,
      fontWeight: "800",
      marginLeft: 0,
      marginTop: 5,
      color:'#000'
    },
    filterContainer: {
      marginHorizontal: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    btn: {
      width: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: "black",
    },
    detail: {
      marginTop: 15,
      justifyContent: "flex-start",
    },
    star: {
      height: 15,
      width: 15,
    },
  });
  