# Project: MyFavoriteFoodApp [BLA 1]
# Name: Saranya Chotsiri
# Course: CSC-6530-1 | Mobile Application Design and Development I
# Instructor: Dr Victor Govindaswamy
# Start Date: 9/15/2026


## Description
Learning React Native from some tutorials and try to build my own application.
For BLA 1, I plan to create a Food Menu App focusing primarily on UI design and user interaction.

The main goal of BLA 1 is to practice React Native UI development, components, navigation, and interactive elements. 
I will focus on creating a clean and user-friendly interface before adding more advanced functionality in the following BLAs.

### The main screens will include:
-	Home Page – Food Menu header, search bar, food categories, and food cards.
-	Food Detail (Future Plan) – Food image, food category, calories, protein, and other details.
-	Favorite Page – Users can add or remove foods from their favorites list, also show total calories from selected food.

### Design 
- Logo
- Food Categories
- Favorite button
- Food Cards
- Food Detail
- Food search

### Food Detail (Future Plan)
- Food Name
- Food Image
- Calories
- Nutrition
- Description

### Interaction 
- Pressable / TouchableOpacity
- Navigate to screens
- Search/filter
- Favorite/unfavorite
- Category selection
- FlatList
 
## Technologies
- React Native
- TypeScript
- Android Emulator
- Expo Go

## How to Run
- npm install (Install Packages)
- npm start (Start Expo)
- npx expo start -c (Start Expo and clear cache)

### What I Have Learned? (Challenges)

📝 One of the hardest things for me was understanding how data is passed between different files in React Native.<br>
I was confused about how to connect my food data into other files.<br>
I learned that the data can be stored in a state in the parent component, and passed to other components using props.<br>

For example,<br>
my 'favorites' state is stored in 'App.js': `const [favorites, setFavorites] = useState([]);`<br>
then passed to 'Favorites.js' by the props: `<Favorites favorites={favorites} setFavorites={setFavorites} />`<br>
then 'Home.js' has change State (Add Favorites): `onPress={() => toggleFavorite(item)}`<br>
So, the data in `Array:favorites` had changed.<br>
Then every page that uses favorites will get the updated data.<br>
(The `FlatList` uses `favorites` as its data, and `{item}` represents each food item in the list.)

💡 Once I understood this connection, React Native started to make more sense to me. <br>
This was probably the most confusing part for me, besides learning JavaScript syntax.<br>

---

## YouTube Links
1. Theory and Background Information:
https://youtu.be/m21mL1Nb2Vc

2. Code Walkthough:
https://youtu.be/Q0foKCw8rjY

3. App Demonstration:
https://youtu.be/95oK-GYRdFY

---

## LinkedIn Posts
1. https://www.linkedin.com/feed/update/urn:li:activity:7509049826517450752/
2. https://www.linkedin.com/feed/update/urn:li:activity:7509051210084077568/
3. https://www.linkedin.com/feed/update/urn:li:activity:7509051888814968832/

## Screenshots
 - [Screenshots](./docs/screenshots/)  

---

# Future Plans
 
## BLA 2 – CRUD and Local Data
For BLA 2, I plan to expand the Food Menu concept into a Food Tracking App.

### The application will introduce CRUD functionality, including:
- Add a food/meal
- View food details
- Edit food information
- Delete a food/meal
- Manage food data locally

---

## BLA 3 – API and AI

For BLA 3, I plan to further develop the Food Tracking App into a ByteBurn application by integrating an external API and AI functionality.

The goal is to connect the existing food-tracking features with external data and introduce an AI-based feature, such as an AI food or nutrition coach.

This will allow me to gradually develop the project from a UI-focused application into a more functional application using local data, APIs, and AI.

---

## Tutorials and Learning Resources

I plan to use the following YouTube tutorials as learning resources. 
Rather than following one tutorial as a complete project, I will use different sections from each tutorial to learn specific concepts and combine them into my own application. 

🙏 Big Thanks to all tutorial.

### 1. React Native Basic Core Components (Thai)*
https://www.youtube.com/watch?v=2lHPaT7urVA&t=6845s
I will use this tutorial to review React Native core components and basic UI development. I find Thai-language explanations easier to understand for learning the fundamentals.

### 2. React Native Todo List
https://www.youtube.com/watch?v=CfSK9niSAxY
I will use this tutorial to study list management and the concept of adding items to a list, which I plan to apply to the favorite food feature.

### 3. React Native Backend / Search Bar
https://www.youtube.com/watch?v=fLIl6jypzkI&t=330s
I will use the relevant sections to study backend-related concepts and search bar functionality.

### 4. React Native Delete Meal
https://www.youtube.com/watch?v=XCifkDC0yXA&t=2997s
I will use this tutorial to study how to implement delete functionality for meals, which will be relevant to BLA 2.

I will combine the relevant concepts from these resources and implement them in my own Food Menu and Food Tracking applications rather than directly reproducing the tutorials.

---
