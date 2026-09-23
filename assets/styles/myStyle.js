import { StyleSheet } from "react-native";

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },
/*------ Home : Header -------*/
  header: {
  height: 60,
  backgroundColor: "#F8DDE5",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
},

logoImage: {
  width: 40,
  height: 40,
  resizeMode: "contain",
  marginRight: 60,
},

logoText: {
  fontSize: 26,
  fontWeight: "bold",
  color: "#6B3E4B",
},

menuButton: {
  marginLeft: 70,
  padding: 8,
},

menuIcon: {
  fontSize: 30,
  color: "#6B3E4B",
  fontWeight: "bold",
},

/*---------------------------------- */

  totalCaloriesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B3E4B"
  },

  /*
  header: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8DDE5",
  },



  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6B3E4B",
  },
*/
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A3037",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#4A3037",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  navbar: {
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#EEE",
  },
  
  searchBox: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8CBD3",
  },
/*
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  category: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E8CBD3",
  },

  categoryText: {
    color: "#6B3E4B",
  },
*/
  menuHeader: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 15,
},

menuTitle: {
  fontSize: 32,
  fontWeight: "bold",
  color: "#4B2735",
},

categories: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  marginEnd: 20,
},

category: {
  fontSize: 14,
  fontWeight: "600",
  color: "#6B3E4B",
},

  foodCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
  },

  foodImage: {
    width: "100%",
    height: 180,
  },

  foodInfo: {
    padding: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A3037",
  },

  calories: {
    marginTop: 5,
    color: "#777",
  },

  favoriteButton: {
    marginTop: 10,
    backgroundColor: "#F8DDE5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  favoriteText: {
    color: "#6B3E4B",
    fontWeight: "bold",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#777",
    fontSize: 16,
  },
});

export default myStyle;