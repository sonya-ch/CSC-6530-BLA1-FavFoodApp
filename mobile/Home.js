import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import foodData from "../data/food";
import myStyle from "../assets/styles/myStyle";

export default function Home({ favorites, setFavorites }) {
  const [search, setSearch] = useState("");

  const toggleFavorite = (food) => {
    const alreadyFavorite = favorites.some(
      (item) => item.id === food.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter((item) => item.id !== food.id)
      );
    } else {
      setFavorites([...favorites, food]);
    }
  };

  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderFood = ({ item }) => {
    const isFavorite = favorites.some(
      (food) => food.id === item.id
    );

    return (
      <View style={myStyle.foodCard}>
        <Image
          source={{ uri: item.image }}
          style={myStyle.foodImage}
        />

        <View style={myStyle.foodInfo}>
          <Text style={myStyle.foodName}>
            {item.name}
          </Text>

          <Text style={myStyle.calories}>
            {item.calories} kcal
          </Text>

          <TouchableOpacity
            style={myStyle.favoriteButton}
            onPress={() => toggleFavorite(item)}
          >
            <Text style={myStyle.favoriteText}>
              {isFavorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={myStyle.container}>
      <View style={myStyle.header}>
        <Text style={myStyle.logo}>
          🍓 Food Menu
        </Text>
      </View>

      <Text style={myStyle.title}>
        Favorite Food Menu
      </Text>

      <TextInput
        style={myStyle.searchBox}
        placeholder="Search food..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredFood}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFood}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}