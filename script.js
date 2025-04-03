/* Example JavaScript */
function validateEmail(email) {
  return email.includes("@") && email.includes(".com");
}
console.log(validateEmail("test@example.com"));


let hasCoupon = true;
let isSenior = false;
if (hasCoupon || isSenior) {
  console.log("Gets a discount!")
}


let cards = ["Hiking", "Camping", "Biking", "Climbing"];
cards.push("Fishing");
console.log(cards);


let word = "Natures";
console.log(word(0));
console.log(word(3));
console.log(word(6));


let images = ["polynesia", "winter", "tents", "alpine-skiier", "cave", "scooter"];
for (let i = 0; i < images.length; i++) {
  console.log(`${i + 1}. ${images[i]}`);
}
for (let image of images) {
  console.log(`image: ${image}`);
}
for (let index in tasks) {
  console.log(`index: ${index}, image: ${images[index]}`);
}