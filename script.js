document.addEventListener("DOMContentLoaded", () => {
  console.log("Ongoya The Great loaded");

  const form = document.getElementById("orderForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const amountInput = document.querySelector("input[type='number']");
    const amount = Number(amountInput.value);

    const points = Math.floor(amount / 100);

    const pointsBox = document.getElementById("points");
    pointsBox.innerText = "Your Points: " + points;

    alert("Order placed! You earned " + points + " loyalty points ⭐");
  });
});
