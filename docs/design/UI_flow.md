```mermaid
flowchart TD
    Home[Home] --> SearchFood["Search Food"]
    Home[Home] --> SelectFood["Select Food"]
   
    SearchFood --> AddFav["Add Favorite"]
    SelectFood --> AddFav["Add Favorite"]
    AddFav --> Favorites["Favorites"]
    Favorites --> TotalCal["Total Calories updates"]
