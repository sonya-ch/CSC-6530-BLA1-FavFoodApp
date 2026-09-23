```mermaid
flowchart TD

    Home --> Search
    Home --> FoodCard1
    FoodCard1 --> AddFavorite["❤️ Add Favorite"]

    Favorites --> FoodCard2
    FoodCard2 --> RemoveFavorite["💔 Remove Favorite"]

    Favorites --> TotalCal["Total Calories"]
