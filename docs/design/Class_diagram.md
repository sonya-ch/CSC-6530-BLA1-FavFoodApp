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