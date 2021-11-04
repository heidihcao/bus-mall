# bus-mall

## First Lab Oct 30 ## 
- Three products at a time, side-by-side-by-side:
  -  manage the size and the aspect ratio of the images
- On top of total number of clicks, also show the % of times that an item was clicked when it was shown.
  - Keep track of how many times each image is displayed and do calculations
  
- Create a constructor function that creates an object associated with each product, and has the following properties:
  - Name of the product
  - File path of image
  - Times the image has been shown
- Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side 
  - 25 rounds of voting before ending the session.
  - Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes. Increment its property of times it has been shown by one.
  - Attach an event listener to the section of the HTML page where the images are going to be displayed.
  - Once the users ‘clicks’ a product, generate three new products for the user to pick from. <br>
  - Define a property to hold the number of times a product has been clicked.
  - After every selection by the viewer, update the newly added property to reflect if it was clicked.

- View a report of results after all rounds of voting have concluded.
  - Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.
  - After voting rounds have been completed, remove the event listeners on the product.
  - Add a button with the text "View Results," which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: "banana had 3 votes, and was seen 5 times."
  - NOTE: Displayed product names should match the file name for the product. Example: the product represented with "dog-duck.jpg" should be displayed to the user as exactly “dog-duck” when the results are shown.
  
  
** How would I program interactive CLICKS REMAINING? **

## Second Lab Nov 3 ##
- prevent users from seeing the same image in two subsequent iterations
- Update your algorithm to randomly generate three unique product images from the images directory.
- Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
- Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
- Place the bar chart in the section located beneath your three product images
The bar charts should only appear after all voting data has been collected.