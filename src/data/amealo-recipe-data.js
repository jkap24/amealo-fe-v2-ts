// recipes that will be automatically available in amaealo returned from Django backend

const AmealoRecipeData = {
    // The logic to assign the correct date to each recipe should be applied when the initial meal plan is generated
    "amealoRecipes":[
        {
            "id": 0,
            "name": "Organic Cottage Pie",
            "mealTime": "Dinner",
            "description": "A Rustic Classic",
            "ingredients": [
                {
                    "id": 1,
                    "name": "Spaghetti",
                    "quantity": "2",
                    "unit": ""
                },
            ], 
            "appliances": [], 
            "recommendedProducts": [],
            "DietaryRequirements": ["Chrohns Friendly"],
            "DietType": [],
            "CookingMethod": ["bake"],
            "cuisine": "English"

        },
        {
            "id": 1,
            "name": "Classic Meatballs",
            "mealTime": "Dinner",
            "description": "An Italian Staple",
            "ingredients": [
                {
                    "id": 2,
                    "name": "Pancetta",
                    "quantity": "300",
                    "unit": "grams"
                },
            ], 
            "appliances": [], 
            "recommendedProducts": [],
            "DietaryRequirements": [],
            "DietType": ["High Protein"],
            "CookingMethod": [],
            "cuisine": "Italian"
        },
        {
            "id": 3,
            "name": "Perfect Scrambled Eggs",
            "mealTime": "Breakfast",
            "description": "Scrambled eggs cooked to perfection!",
            "ingredients": [
                {
                    "id": 3,
                    "name": "Eggs",
                    "quantity": "3",
                    "unit": ""
                },
            ], 
            "appliances": [], 
            "recommendedProducts": [],
            "DietaryRequirements": [],
            "DietType": [],
            "CookingMethod": ["High Protein"],
            "cuisine": ""
        },
        {
            "id": 4,
            "name": "Turkey Twizzlers",
            "mealTime": "Lunch",
            "description": "A meal certain to bring chronic illness!",
            "ingredients": [
                {
                    "id": 3,
                    "name": "Eggs",
                    "quantity": "3",
                    "unit": ""
                },
            ], 
            "appliances": [], 
            "recommendedProducts": [],
            "DietaryRequirements": [],
            "DietType": [],
            "CookingMethod": ["Evil", "shit"],
            "cuisine": ""
        },
    ]
        
}

export default AmealoRecipeData