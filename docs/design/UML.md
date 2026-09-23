```mermaid
flowchart TD

    Home --> Search
    Home --> FoodCard
    FoodCard --> FavoriteCard["❤️ Favorite"]

    Home --> TapFood
    TapFood --> FoodDetail
    FoodDetail --> AddFavorite["❤️ Add Favorite"]

    Favorites --> FavFood["Food"]
    FavFood --> Qty["+ / - Quantity"]
    FavFood --> Remove["Remove"]

    Favorites --> TotalCal["Total Calories"]
