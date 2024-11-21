// Smoothie class
class Smoothie {
    constructor(name, size, fruits, addons, instructions) {
      this.name = name;
      this.size = size;
      this.fruits = fruits;
      this.addons = addons;
      this.instructions = instructions;
    }
  
    // Method to generate a description of the smoothie
    getDescription() {
      const fruits = this.fruits.length > 0 ? this.fruits.join(", ") : "None";
      const addons = this.addons.length > 0 ? this.addons.join(", ") : "None";
      const instructions = this.instructions ? this.instructions : "No special instructions.";
      
      return `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Fruits:</strong> ${fruits}</p>
        <p><strong>Add-ons:</strong> ${addons}</p>
        <p><strong>Special Instructions:</strong> ${instructions}</p>
      `;
    }
  }
  
  // Capture form input and display order summary
  document.getElementById("order-button").addEventListener("click", () => {
    // Form values
    const name = document.getElementById("customer-name").value.trim();
    const size = document.getElementById("smoothie-size").value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(input => input.value);
    const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(input => input.value);
    const instructions = document.getElementById("special-instructions").value.trim();
  
    // Validate inputs
    if (!name || !size) {
      alert("Please fill out your name and choose a smoothie size.");
      return;
    }
  
    // Create Smoothie object and display order summary
    const smoothie = new Smoothie(name, size, fruits, addons, instructions);
    document.getElementById("order-summary").innerHTML = smoothie.getDescription();
  });
  