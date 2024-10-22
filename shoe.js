
        // Get the button and the div elements
        const button = document.getElementById('cesc');
        const div = document.querySelectorAll('.kak');

        // Function to toggle visibility
        button.addEventListener('click', () => {
            div.forEach(div => {
                if (div.style.display === 'none') {
                    div.style.display = 'block'; // Show the element
                } else {
                    div.style.display = 'none'; // Hide the element
                }
            });
        });



        var cart = [];
        var totalPrice = 0;
    
        // Function to open the cart sidebar
        document.getElementById('cartIcon').addEventListener('click', function() {
          document.getElementById('cartSidebar').style.width = '300px'; // Open the sidebar to 300px width
        });
    
        // Function to close the cart sidebar
        function closeCart() {
          document.getElementById('cartSidebar').style.width = '0'; // Close the sidebar
        }
    
        // Function to add an item to the cart
        function addToCart(loafers, price) {
          cart.push({ name: productName, price: price });
          totalPrice += price;
          displayCart();
        }
    
        // Function to display the cart items and total price
        function displayCart() {
          var cartItemsElement = document.getElementById('cartItems');
          var cartTotalElement = document.getElementById('cartTotal');
    
          // Clear the current list
          cartItemsElement.innerHTML = '';
    
          // Add each item in the cart to the list
          cart.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item.name + ' - $' + item.price;
            cartItemsElement.appendChild(listItem);
          });
    
          // Update the total price
          cartTotalElement.textContent = totalPrice.toFixed(2);
        }
