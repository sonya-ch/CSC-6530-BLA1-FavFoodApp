## 1. Interaction States Flow

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


---

## 2. UI Screen Flow

```md
```mermaid
flowchart TD

    Home[Home] --> SelectFood["Select Food"]
    SelectFood --> FoodDetail["Food Detail"]
    FoodDetail --> AddFav["Add Favorite"]
    AddFav --> Favorites["Favorites"]
    Favorites --> Qty["+ / - Quantity"]
    Qty --> TotalCal["Total Calories updates"]

---

## 3. Class Diagram 

```md
```mermaid
classDiagram

    class Food {
        int id
        string name
        string image
        int calories
        int protein
        int carbs
        int fat
    }

    class FavoriteFood {
        int foodId
        int quantity
    }

    Food <|-- FavoriteFood

---