var listingPrice = 799
var sellingPrice = 199

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice) * 100

console.log("Discounted % is:", + discountPercentage)

displayDiscountPercentage = Math.round(discountPercentage)

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice

console.log(typeof result);
