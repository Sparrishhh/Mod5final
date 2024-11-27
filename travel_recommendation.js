const data = {
    "countries": [
        {
            "id": 1,
            "name": "Australia",
            "cities": [
                {
                    "name": "Sydney, Australia",
                    "imageUrl": "enter_your_image_for_sydney.jpg",
                    "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                },
                {
                    "name": "Melbourne, Australia",
                    "imageUrl": "enter_your_image_for_melbourne.jpg",
                    "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
                }
            ]
        },
        {
            "id": 2,
            "name": "Japan",
            "cities": [
                {
                    "name": "Tokyo, Japan",
                    "imageUrl": "enter_your_image_for_tokyo.jpg",
                    "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
                },
                {
                    "name": "Kyoto, Japan",
                    "imageUrl": "enter_your_image_for_kyoto.jpg",
                    "description": "Known for its historic temples, gardens, and traditional tea houses."
                }
            ]
        },
        {
            "id": 3,
            "name": "Brazil",
            "cities": [
                {
                    "name": "Rio de Janeiro, Brazil",
                    "imageUrl": "enter_your_image_for_rio.jpg",
                    "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
                },
                {
                    "name": "São Paulo, Brazil",
                    "imageUrl": "enter_your_image_for_sao-paulo.jpg",
                    "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
                }
            ]
        }
    ],
    "temples": [
        {
            "id": 1,
            "name": "Angkor Wat, Cambodia",
            "imageUrl": "travelRecommendation/Temple.png", // Updated to match your file path
            "description": "A UNESCO World Heritage site and the largest religious monument in the world."
        },
        {
            "id": 2,
            "name": "Taj Mahal, India",
            "imageUrl": "enter_your_image_for_taj-mahal.jpg",
            "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
        }
    ],
    "beaches": [
        {
            "id": 1,
            "name": "Bora Bora, French Polynesia",
            "imageUrl": "enter_your_image_for_bora-bora.jpg",
            "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
        },
        {
            "id": 2,
            "name": "Copacabana Beach, Brazil",
            "imageUrl": "enter_your_image_for_copacabana.jpg",
            "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
        }
    ]
};

// Function to display content based on user input
function handleSearchInput(searchInput) {
    const dropdown = document.getElementById('dropdown'); // Assuming you have a dropdown element
    dropdown.innerHTML = ''; // Clear previous content

    if (searchInput.includes('temple')) {
        dropdown.style.display = 'block';
        dropdown.innerHTML = `
            <div class="recommendation">
                <img src="travelRecommendation/Temple.png" alt="Angkor Wat, Cambodia" style="width: 100%; height: auto;">
                <h3>Angkor Wat</h3>
                <p>Explore the stunning Angkor Wat temple in Cambodia, one of the most iconic landmarks in the world.</p>
            </div>
        `;
    } else if (searchInput.includes('country')) {
        dropdown.style.display = 'block';
        dropdown.innerHTML = `
            <div class="recommendation">
                <img src="travelRecommendation/Country.png" alt="Alresford, Hampshire" style="width: 100%; height: auto;">
                <h3>Alresford Countryside</h3>
                <p>Relax and unwind in the peaceful countryside of Alresford, offering a blend of rural charm and scenic beauty.</p>
            </div>
        `;
    } else {
        dropdown.style.display = 'none';
    }
}

// Example: Hooking up search input to handleSearchInput
document.getElementById('search').addEventListener('input', (event) => {
    handleSearchInput(event.target.value.toLowerCase());
});
