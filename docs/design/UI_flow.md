```mermaid
flowchart TD

    Home[Home] --> SelectFood["Select Food"]
    SelectFood --> FoodDetail["Food Detail"]
    FoodDetail --> AddFav["Add Favorite"]
    AddFav --> Favorites["Favorites"]
    Favorites --> Qty["+ / - Quantity"]
    Qty --> TotalCal["Total Calories updates"]
