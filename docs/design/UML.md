## Class Diagram

+----------------------+
|        Food          |
+----------------------+
| id                   |
| name                 |
| image                |
| calories             |
| protein              |
| carbs                |
| fat                  |
+----------------------+
           |
           v
+----------------------+
|    FavoriteFood      |
+----------------------+
| foodId               |
| quantity             |
+----------------------+

---

## UI Screen Flow

          ┌─────────┐
          │  Home   │
          └────┬────┘
               │
         Select Food
               ↓
       ┌──────────────┐
       │ Food Detail  │
       └──────┬───────┘
              │
         Add Favorite
              ↓
       ┌──────────────┐
       │  Favorites   │
       └──────┬───────┘
              │
        + / - Quantity
              ↓
       Total Calories updates

---
## UI Screen Flow

          ┌─────────┐
          │  Home   │
          └────┬────┘
               │
         Select Food
               ↓
       ┌──────────────┐
       │ Food Detail  │
       └──────┬───────┘
              │
         Add Favorite
              ↓
       ┌──────────────┐
       │  Favorites   │
       └──────┬───────┘
              │
        + / - Quantity
              ↓
       Total Calories updates

---