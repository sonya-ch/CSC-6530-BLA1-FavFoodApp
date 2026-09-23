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
    FavFood --> RemoveFavorite["Remove"]

    Favorites --> TotalCal["Total Calories"]

---

```mermaid
flowchart TD

    Home[Home] --> SelectFood["Select Food"]
    SelectFood --> FoodDetail["Food Detail"]
    FoodDetail --> AddFav["Add Favorite"]
    AddFav --> Favorites["Favorites"]
    Favorites --> Qty["+ / - Quantity"]
    Qty --> TotalCal["Total Calories updates"]

---
