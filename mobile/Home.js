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

  //state category = selected food category
  const [selectedCategory, setSelectedCategory] = useState("All");


  //Toggle favorite status (Add/Remove)
  // - food = parameter containing the food item selected from user
  // - item = parameter representing each item from the favorites array
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


  //Filter food based on category AND search query
  const filteredFood = foodData.filter((food) => {

    //Check category
    const matchCategory =
      selectedCategory === "All" || 
      food.category === selectedCategory;

    //Check search
    const matchSearch =
      food.name.toLowerCase().includes(search.toLowerCase());

    //Show food only when both conditions are true
    return matchCategory && matchSearch;
  });


  //Render Food Cards
  const renderFood = ({ item }) => {

    const isFavorite = favorites.some(
      (food) => food.id === item.id
    );

    //return food card
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

          {/* Argument = data sent to the function (item) */}
          <TouchableOpacity
            style={myStyle.favoriteButton}
            onPress={() => toggleFavorite(item)}
          >
            <Text style={myStyle.favoriteText}>
              {isFavorite
                ? "💔 Remove Favorite"
                : "❤️ Add Favorite"}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    ); //return food card
  }; //renderFood()


  //return home screen
  return (
    <View style={myStyle.container}>

      {/* Header */}
      <View style={myStyle.header}>

        <Image
          source={require("../assets/images/Logo_FoxBit.png")}
          style={myStyle.logoImage}
        />

        <Text style={myStyle.logoText}>
          ByteBurn
        </Text>

        <TouchableOpacity style={myStyle.menuButton} onPress={() => console.log("Menu pressed")} >
          <Text style={myStyle.menuIcon}>☰</Text>
        </TouchableOpacity>

      </View>


      {/* Food Menu + Categories */}
      <View style={myStyle.menuHeader}>

        <Text style={myStyle.title}>
          Food Menu
        </Text>

        <View style={myStyle.categories}>

          {/* Breakfast */}
          <TouchableOpacity onPress={() => setSelectedCategory("Breakfast")}>
            <Text style={myStyle.category}>🥞</Text>
          </TouchableOpacity>

          {/* Lunch */}
          <TouchableOpacity onPress={() => setSelectedCategory("Lunch")}>
            <Text style={myStyle.category}>🍱</Text>
          </TouchableOpacity>

          {/* Dinner */}
          <TouchableOpacity onPress={() => setSelectedCategory("Dinner")} >
            <Text style={myStyle.category}>🍝</Text>
          </TouchableOpacity>

          {/* All Food */}
          <TouchableOpacity onPress={() => setSelectedCategory("All")} >
            <Text style={myStyle.category}>🍽️</Text>
          </TouchableOpacity>

        </View>
      </View>


      <Text style={myStyle.subtitle}>
        What is your favorite food?
      </Text>


      {/* Search */}
      <TextInput
        style={myStyle.searchBox}
        placeholder="Search food..."
        value={search}
        onChangeText={setSearch}
      />


      {/* filteredFood = data from category + search */}
      <FlatList
        data={filteredFood}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFood}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}