/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  // Your code here

    if (typeof weight !== "number" || Number.isNaN(weight) || weight <= 0) return -1;
  if (typeof orderTotal !== "number" || Number.isNaN(orderTotal) || orderTotal < 0) return -1;
  if (typeof country !== "string") country = "";

  const isDomestic = country.trim().toUpperCase() === "US";
  let Shippingcost = 0;

  // Free shipping rules
  if (isDomestic && orderTotal > 50) return Shippingcost;
  if (!isDomestic && orderTotal > 100) return Shippingcost;

  // Base shipping by weight + destination
  if (isDomestic) {
    if (weight <= 1)  Shippingcost =  5;
    if (weight <= 5) Shippingcost = 10;
    if (weight > 5) Shippingcost = 15;
    
  } 
  else {
    if (weight <= 1) Shippingcost = 15;
    if (weight <= 5) Shippingcost = 25;
    if (weight > 5) Shippingcost = 40;
    
  }

return Shippingcost ;
  
}
