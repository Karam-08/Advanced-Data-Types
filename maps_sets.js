let studentMap1 = new Map();

studentMap1.set("03-30-2008", "Karam Abbas");
studentMap1.set("08-30-2000", "Hussein Abbas");
studentMap1.set("03-13-1999", "Maryam Abbas");

let favorites = new Map();

favorites.set('Vegetable', "Mushroom")
favorites.set('Meat', "Chicken")
favorites.set('Game', "Warframe")
favorites.set('Cake', "Ice Cream")

console.log(favorites.get('Cake'))

const map = new Map();
for(var i = 1; i < 101; i++){
    map.set(i, i + map.get(i-1))
}

let cakeRecipe = new Map([
    ['butter', '1/2 cup'],
    ['eggs', '1 large'],
    ['vanilla extract', '2 teaspoons'],
    ['flour', '1 & 1/2 cups'],
    ['baking powder', '1 & 3/4 teaspoons'],
    ['milk', '1/2 cup'],
])

cakeRecipe.set('white sugar', '2 cups') // Add white sugar
console.log(cakeRecipe)

console.log("") // Spacing

console.log(cakeRecipe.has('eggs')) // Check if we have eggs
console.log(cakeRecipe.get('eggs')) // How many eggs?
cakeRecipe.set('eggs', '2 large') // Only 1 egg? We need more.

console.log("") // Spacing

console.log(cakeRecipe)

console.log("") // Spacing

cakeRecipe.delete('vanilla extract') // No more vanilla cake
cakeRecipe.set('chocolate', '1 bar') // I want chocolate

console.log(cakeRecipe)

for(row in cakeRecipe){console.log(row)}
for(row of cakeRecipe){console.log(row)}

console.log(cakeRecipe.keys())
console.log(cakeRecipe.entries())