import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import myStyle from "../assets/styles/myStyle";

export default function Favorites({
  favorites,
  setFavorites,
}) {
  const removeFavorite = (id) => {
    setFavorites(
      favorites.filter((food) => food.id !== id)
    );
  };

  const renderFavorite = ({ item }) => {
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
            onPress={() => removeFavorite(item.id)}
          >
            <Text style={myStyle.favoriteText}>
              ♥ Remove Favorite
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
          🍓 My Favorites
        </Text>
      </View>

      {favorites.length === 0 ? (
        <Text style={myStyle.emptyText}>
          No favorite food yet ❤️
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFavorite}
        />
      )}
    </View>
  );
}