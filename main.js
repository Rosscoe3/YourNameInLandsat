import './style.css'
//import { setupCounter } from './counter.js'

const nameInput = document.getElementById("nameInput");
const enterButton = document.getElementById("enterButton");
const nameBoxes = document.getElementById("nameBoxes");

let existingBoxes = []; // Array to store existing name boxes

enterButton.addEventListener("click", function() {
  
  const input = nameInput.value.trim();
  
  // Make sure a value is populating the input field
  if (input) 
  {
    if(nameBoxes.children.length > 0) // Check if there are existing boxes
    {
      
      console.log(nameBoxes.children.length);

      // Disable all current letters
      for(let x = 0; x < nameBoxes.children.length; x++)
      {
        nameBoxes.children[x].classList.toggle("active");
      }

      // Wait till all children have disabled before activating new letters
      setTimeout(() => {
        // Remove all child elements to start with a clean slate
        while (nameBoxes.firstChild) 
        {
          nameBoxes.removeChild(nameBoxes.firstChild);
        }
  
        // Set gap based on the amount of text
        let gap = convertRange(input.length, [1, 50], [1, 0.1] );
        nameBoxes.style.gap = gap + "%";

        // Create amount of images based on the number of characters
        for(let i = 0; i < input.length; i++)
        {
          console.log(input[i]);

          // If the input character isn't a blank space
          if(input[i] != " ")
          {
            const img = document.createElement("img");
            img.src = "images/" + input[i].toLowerCase() + "_0.jpg";

            if(!img.src)
            {
              img.src = "images/test.jpg";
            }
    
            setTimeout(() => {
              img.classList.toggle("active");
            }, 750);

            nameBoxes.appendChild(img);
          }
          // If the input character is a blank space
          else
          {
            const blankDiv = document.createElement("div");
            blankDiv.classList = "blankDiv";
            let width = convertRange(input.length, [1, 50], [2, 5] );
            blankDiv.style.width = width + "%";
            
            nameBoxes.appendChild(blankDiv);
          }
        }
      }, 750);
      
    }
    else
    {
      
    }

    const newBoxes = []; // Array to store new name boxes
  } 
});

// Convert ranges to scale values
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}