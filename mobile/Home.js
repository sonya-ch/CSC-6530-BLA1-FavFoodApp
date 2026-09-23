import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

//Food details data
import foodData from "../data/food"; 

import myStyle from "../assets/styles/myStyle";

//props favorites, setFavorites
export default function Home({ favorites, setFavorites }) {
  
  //state search = waiting for search input.
  const [search, setSearch] = useState("");


  //Toggle favorite status (Add/Remove)
  // - food = parameter containing the food item selected from user
  // - item = parameter representing each item from the favorites array
  const toggleFavorite = (food) => {
    const alreadyFavorite = favorites.some( //get food.id if the food is already in favorites
      (item) => item.id === food.id
    );

    if (alreadyFavorite) { 
      setFavorites(
        favorites.filter((item) => item.id !== food.id) //already favorite = not show the food
      );
    } else {
      setFavorites([...favorites, food]); //show favorite
    }
  };

  //filter food based on search query by name
  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  //Render Food Cards
  const renderFood = ({ item }) => {

    const isFavorite = favorites.some(
      (food) => food.id === item.id
    );

  //return food card
  return (
      <View style={myStyle.foodCard}>
        <Image source={{ uri: item.image }} style={myStyle.foodImage} />

        <View style={myStyle.foodInfo}>
          <Text style={myStyle.foodName}>
            {item.name}
          </Text>

          <Text style={myStyle.calories}>
            {item.calories} kcal
          </Text>

          {/* Argument = data sent to the function (item) */}
          <TouchableOpacity style={myStyle.favoriteButton} onPress={() => toggleFavorite(item)} > 
            <Text style={myStyle.favoriteText}> 
              {isFavorite ? "💔 Remove Favorite" : "❤️ Add Favorite"}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }; //renderFood()

  //return home screen
  return (
    <View style={myStyle.container}>

      <View style={myStyle.header}>
        <Text style={myStyle.logo}>
          <Image
            source={require("../assets/images/Logo_FoxBit.png")}
            style={{ width: 120, height: 48, resizeMode: "contain" }}
          />
        ByteBurn
        </Text>
      </View>

      <Text style={myStyle.title}>
        Food Menu
      </Text>

      <TextInput
        style={myStyle.searchBox}
        placeholder="Search food..."
        value={search}
        onChangeText={setSearch}
      />

      {/* filteredFood = data from search */}
      <FlatList
        data={filteredFood} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFood}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}