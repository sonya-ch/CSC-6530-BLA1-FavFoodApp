```mermaid
flowchart TD

    Home --> Search
    Home --> FoodCard
    FoodCard --> FavoriteCard["❤️ Favorite"]

    Home --> TapFood
    TapFood --> AddFavorite["❤️ Add Favorite"]

    Favorites --> FavFood["Food"]
    FavFood --> removeFavorite["💔 Remove Favorite"]

    Favorites --> TotalCal["Total Calories"]
