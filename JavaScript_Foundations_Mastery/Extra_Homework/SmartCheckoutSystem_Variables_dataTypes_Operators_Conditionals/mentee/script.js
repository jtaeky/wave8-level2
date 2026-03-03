// ✅ SMART CHECKOUT SYSTEM
// Goal: Calculate discount + shipping + final total based on inputs.
// Logic rules must use ONLY: variables, data types, operators, conditionals.
// We ARE allowed to use DOM + event listeners because this is the Realistic UI version.

// Step 1: Get references to the DOM elements we need using document.getElementById()
// Store references for:
// - cart total input        → id="cartTotal"
// - membership dropdown     → id="membership"
// - coupon dropdown         → id="coupon"
// - calculate button        → id="calcBtn"
// - message paragraph       → id="message"
// - subtotal display        → id="subtotalText"
// - discount display        → id="discountText"
// - shipping display        → id="shippingText"
// - final total display     → id="finalTotalText"

// Inputs
const cartTotalInput = document.getElementById("cartTotal");
const membershipSelect = document.getElementById("membership");
const couponSelect = document.getElementById("coupon");

// Button
const calcBtn = document.getElementById("calcBtn");

// Output / display elements
const messagePara = document.getElementById("message");
const subtotalText = document.getElementById("subtotalText");
const discountText = document.getElementById("discountText");
const shippingText = document.getElementById("shippingText");
const finalTotalText = document.getElementById("finalTotalText");

// Step 2: Add a click event listener to the Calculate button
// When the button is clicked, run the checkout calculation function
calcBtn.addEventListener("click", handleCalc);

// Step 3: Inside the click function, read the user inputs
// - cartTotal should become a NUMBER (not a string)
// - membership will be a STRING
// - coupon value will be a STRING ("yes" or "no")
// Then convert coupon into a BOOLEAN:
//    hasCoupon = true if coupon === "yes", otherwise false

function handleCalc() {
  let cartTotal = Number(cartTotalInput.value);
  let membership = membershipSelect.value;
  let couponValue = couponSelect.value;
  let hasCoupon = couponValue === "yes";

  if (!cartTotal || cartTotal <= 0) {
    messagePara.textContent = "warning";
    return;
  }

  let subtotal = cartTotal;
  let discountAmount = 0;
  let shippingCost = 0;
  let totalAfterDiscount = 0;
  let finalTotal = 0;

  if (membership === "premium") {
    discountAmount = subtotal * 0.15;
  } else if (membership === "vip") {
    discountAmount = subtotal * 0.25;
  } else {
    discountAmount = 0;
  }

  if (hasCoupon) {
    discountAmount += subtotal * 0.10;
  }

  totalAfterDiscount = subtotal - discountAmount;

  if (totalAfterDiscount >= 150) {
    shippingCost = 0;
  } else {
    shippingCost = 9.99;
  }

  finalTotal = totalAfterDiscount + shippingCost;

  subtotalText.textContent = subtotal;
  discountText.textContent = discountAmount;
  shippingText.textContent = shippingCost;
  finalTotalText.textContent = finalTotal;

  if (shippingCost === 0) {
    messagePara.textContent = "free shipping";
  } else {
    messagePara.textContent = `add ${150 - totalAfterDiscount} more`;
  }
}

