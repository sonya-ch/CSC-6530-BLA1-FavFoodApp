import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Home from "./Home";
import Favorites from "./Favorites";
import myStyle from "../assets/styles/myStyle";

export default function App() {
  const [screen, setScreen] = useState("home");

  const [favorites, setFavorites] = useState([]);

  return (
    <View style={{ flex: 1 }}>

      {screen === "home" ? (
        <Home
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ) : (
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#EEE",
        }}
      >
        <TouchableOpacity
          onPress={() => setScreen("home")}
        >
          <Text>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen("favorites")}
        >
          <Text>❤️ Favorites</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}