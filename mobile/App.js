//Navigation bar <Home> <Favorites>

import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Home from "./Home"; //props Home
import Favorites from "./Favorites";

import myStyle from "../assets/styles/myStyle.js";

export default function App() {

  //state screen, innitialize to "home"
  const [screen, setScreen] = useState("home"); 

  //Empty array for favorites food
  const [favorites, setFavorites] = useState([]); 

  return (
    <View style={{ flex: 1 }}> 

      {screen === "home" ? ( // if screen is home = show Home screen
        <Home
          favorites={favorites} // Array favorites, contains the favorite selected 
          setFavorites={setFavorites}
        />
      ) : ( //else show Favorites screen
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}

      <View style={myStyle.navbar}>

        <TouchableOpacity onPress={() => setScreen("home")}>
          <Text>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setScreen("favorites")}>
          <Text>❤️ Favorites</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}