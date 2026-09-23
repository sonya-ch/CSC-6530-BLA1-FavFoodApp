## Class Diagram

┌────────────────────┐
│       Food         │
├────────────────────┤
│ id                 │
│ name               │
│ image              │
│ calories           │
│ protein            │
│ carbs              │
│ fat                │
└────────────────────┘
          │
          ▼
┌────────────────────┐
│   FavoriteFood     │
├────────────────────┤
│ foodId             │
│ quantity           │
└────────────────────┘

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

## Interaction States Flow

Home
 ├─ Search
 ├─ Food Card
 │    └─ ❤️ Favorite
 │
 └─ Tap Food
        ↓
   Food Detail
        └─ ❤️ Add Favorite

Favorites
 ├─ Food
 │   ├─ − Quantity +
 │   └─ Remove
 │
 └─ Total Calories
