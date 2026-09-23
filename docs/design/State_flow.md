```mermaid
flowchart TD

    Home --> Search
    Home --> FoodCard
    FoodCard --> AddFavorite["❤️ Add Favorite"]

    Favorites --> FoodCard
    FoodCard --> AddFavorite["💔 Remove Favorite"]

    Favorites --> TotalCal["Total Calories"]
