// Food data
const foods = [
    {
        name: "Chicken Caesar Salad",
        description: "Grilled chicken, lettuce, and a light dressing make this a healthy, protein-rich option.",
        category: "healthy",
        image: "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2023/01/caesar-salad-crispy-chicken.jpg" // Placeholder image
    },
    {
        name: "Falafel Wrap",
        description: "Made from chickpeas, this plant-based meal is high in protein and fiber.",
        category: "healthy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzFsn0SdGVIeRhcO0Fa1R7uLPm8imj4fz0A&s"
    },
    {
        name: "Shakshuka",
        description: "Poached eggs in a tomato and pepper sauce, providing a good mix of protein and antioxidants.",
        category: "healthy",
        image: "https://www.foodandwine.com/thmb/1OCLKHCH7XrqSOXyJr7dOuYVkNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Shakshuka_FT_RECIPE0224-173f35ee79c242e99de6e5f644e51f9f.jpg"
    },
    {
        name: "Pad Thai",
        description: "A healthier noodle option when made with minimal oil and lean proteins like shrimp or tofu.",
        category: "healthy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCylxfP50ETWvYyVwTx3qbbPj27wYtyyW5GQ&s"
    },
    {
        name: "Sushi",
        description: "Rich in omega-3 fatty acids from fish and packed with vitamins from the seaweed and vegetables.",
        category: "healthy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2qH0Ba6fAJJf5w3yfnGS5HZEJkE2HXpsAQ&s"
    },
    {
        name: "Ratatouille",
        description: "A French vegetable dish that’s loaded with healthy antioxidants, vitamins, and fiber.",
        category: "healthy",
        image: "https://api.vip.foodnetwork.ca/wp-content/uploads/2022/05/summer-rainbow-ratatouille.jpg?w=3840&quality=75"
    },
    {
        name: "Pho",
        description: "A light, broth-based soup that is low in fat and contains healthy ingredients like lean meat, rice noodles, and herbs.",
        category: "healthy",
        image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2023/10/pho.jpg"
    },
    {
        name: "Spaghetti Carbonara",
        description: "While slightly indulgent, this dish can be made healthier by controlling portion size and using whole wheat pasta.",
        category: "healthy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLk3SXck4nO5f6MTNmW4RnifKpukKq77gHQ&s"
    },
    {
        name: "Pav Bhaji",
        description: "A vegetable-heavy dish rich in vitamins and fiber, though the bread can be substituted with whole wheat options.",
        category: "healthy",
        image: "https://www.cookingwithsiddhi.com/wp-content/uploads/2019/11/pav-bhaji-750x500.jpeg"
    },
    {
        name: "Quinoa Salad",
        description: "A superfood dish made from quinoa, which is high in protein and fiber, combined with vegetables like cucumber, tomatoes, and a light dressing for a healthy, nutrient-rich meal.",
        category: "Healthy Foods",
        image: "https://www.thespruceeats.com/thmb/ggHafkpSpJqI3zs6o92DusfEeC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-145059660-59b1a84edafc47269db2062015b80c05.jpg"
    },
    {
        name: "Moussaka",
        description: "A balanced dish when made with lean meat and a vegetable base, especially eggplant, which is rich in fiber and vitamins.",
        category: "healthy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtmvyLBkTIRQ6rNgmAaGBruyxorb2BcRxUw&s"
    },
    {
        name: "Beef Tacos",
        description: "Tacos can be rich in flavor and calories, especially when using ground beef, cheese, and sour cream.",
        category: "indulgent",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg"
    },
    {
        name: "Fish and Chips",
        description: "Deep-fried fish and fries are more of a comfort food due to their high fat and calorie content.",
        category: "indulgent",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThste36KMzQa67zftRXPXB6Aj73yRtpeycKg&s"
    },
    {
        name: "Butter Chicken (Murgh Makhani)",
        description: "This creamy and buttery Indian dish is indulgent and higher in fat due to the use of cream and butter.",
        category: "indulgent",
        image: "https://indugetscooking.wordpress.com/wp-content/uploads/2013/09/butter-chicken-murgh-makhani-recipe-1024x1024.jpg?w=663"
    },
    {
        name: "Beef Stroganoff",
        description: "A rich and creamy dish, often served with egg noodles or rice, making it a hearty, indulgent meal.",
        category: "indulgent",
        image: "https://saltedmint.com/wp-content/uploads/2024/01/Beef-stroganoff-with-rice-2.jpg"
    },
    {
        name: "Margherita Pizza",
        description: "Pizza, though often balanced with veggies and cheese, can be high in carbs and fat, especially when eaten in large portions.",
        category: "indulgent",
        image: "https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg"
    },
    {
        name: "Eggplant Parmesan",
        description: "This Italian classic is breaded and fried, then covered in cheese, making it a more indulgent option.",
        category: "indulgent",
        image: "https://www.eatingwell.com/thmb/AADqyJzanmxhohPE6ieAi4okuQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra-CrispyEggplantParmesan-Beauty-01-89d65a140a3640e3aba7b80ad8865dba.jpg"
    },
    {
        name: "Shrimp Scampi",
        description: "With a butter and garlic sauce, this dish leans towards indulgence, especially when served with pasta.",
        category: "indulgent",
        image: "https://www.spendwithpennies.com/wp-content/uploads/2024/06/1200-Easy-Shrimp-Scampi-Recipe-2-SpendWithPennies.jpg"
    },
    {
        name: "Chicken Biryani",
        description: "A rich, flavorful rice dish, often high in calories due to the use of ghee and spices.",
        category: "indulgent",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXgfbcYmzx2Hjs_B44qMQrJA-H_AbjFlX-A&s"
    },
    {
        name: "Peking Duck",
        description: "Duck is a fatty meat, and this dish is roasted to achieve crispy skin, making it more of an indulgent food.",
        category: "indulgent",
        image: "https://www.thespruceeats.com/thmb/ggHafkpSpJqI3zs6o92DusfEeC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-145059660-59b1a84edafc47269db2062015b80c05.jpg"
    },
    {
        name: "Goulash",
        description: "A hearty stew made with beef and potatoes, goulash is filling and rich, often eaten as a comfort meal.",
        category: "indulgent",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSrZ1fnCGrpoRbQT0EQ4eZ5G0uwaa34yxgQ&s"
    }
];

// Function to create food cards
function createFoodCards() {
    const foodCardsContainer = document.getElementById("foodCards");
    foodCardsContainer.innerHTML = ""; // Clear previous cards
    foods.forEach(food => {
        const card = document.createElement("div");
        card.className = "col-md-4 food-card"; // 3 cards per row on medium and larger screens
        card.innerHTML = `
            <div class="card mb-4">
                <img src="${food.image}" class="card-img-top" alt="${food.name}">
                <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">${food.description}</p>
                </div>
            </div>
        `;
        foodCardsContainer.appendChild(card);
    });
}

// Function to filter food cards based on search input and category
function filterFood() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const categorySelect = document.getElementById("categorySelect").value;
    const filteredFoods = foods.filter(food => {
        const matchesName = food.name.toLowerCase().includes(searchInput);
        const matchesCategory = categorySelect === "all" || food.category === categorySelect;
        return matchesName && matchesCategory;
    });
    displayFilteredFoods(filteredFoods);
}

// Function to display filtered foods
function displayFilteredFoods(filteredFoods) {
    const foodCardsContainer = document.getElementById("foodCards");
    foodCardsContainer.innerHTML = ""; // Clear previous cards
    filteredFoods.forEach(food => {
        const card = document.createElement("div");
        card.className = "col-md-4 food-card"; // 3 cards per row on medium and larger screens
        card.innerHTML = `
            <div class="card mb-4">
                <img src="${food.image}" class="card-img-top" alt="${food.name}">
                <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">${food.description}</p>
                </div>
            </div>
        `;
        foodCardsContainer.appendChild(card);
    });
}

// Event listeners
document.getElementById("searchInput").addEventListener("input", filterFood);
document.getElementById("categorySelect").addEventListener("change", filterFood);

// Initial display of food cards
createFoodCards();
