import './style.css'

//import { setupCounter } from './counter.js'

const nameInput = document.getElementById("nameInput");
const enterButton = document.getElementById("enterButton");
const nameBoxes = document.getElementById("nameBoxes");
const downloadButton = document.getElementById("downloadBtn");
const locationTitle = document.getElementById("locationTitle");
const locationCoordinates = document.getElementById("locationCoordinates");

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

            //img.src = "images/" + input[i].toLowerCase() + "_0.jpg";

            var name = pickLetterImage(input[i]);
            img.src = "images/" + name + ".jpg";
            img.alt = name;
            img.addEventListener("mouseover", function()
            { 
              imageOver(this, name); 
            });
            img.addEventListener("mouseout", function()
            { 
              imageOut(this, name); 
            });

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

    const newBoxes = []; // Array to store new name boxes
  } 
});

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enterButton").click();
  }
});

// Downloads the image as a png
function downloadDivAsPng(divId, filename) {
  const div = document.getElementById(divId);

  if (!div) {
    console.error(`Div with ID "${divId}" not found.`);
    return;
  }

  html2canvas(div, {backgroundColor:null}) // Consider using allowTaint with caution
    .then(canvas => {
      const imageData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageData;
      link.download = filename;
      link.click();
    })
    .catch(error => {
      console.error('Error exporting div:', error);
    });
}

function pickLetterImage(text)
{
  var number = 0;
  var name;

  if(text.toLowerCase() == "a")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "b")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "c")
  {
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "d")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "e")
  {
    number = getRandomInt(0, 2);
  }
  else if(text.toLowerCase() == "f")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "g")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "h")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "i")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "j")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "k")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "l")
  {
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "m")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "n")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "o")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "p")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "q")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "r")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "s")
  {
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "t")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "u")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "v")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "w")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "x")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "y")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "z")
  {
    //number = getRandomInt(0, 1);
  }
  
  name = text + "_" + number;

  return name;
}

// Creates a random int between 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imageOver(x)
{
  console.log(x);

  if(x.alt == "a_0")
  {
    locationTitle.innerHTML = "Hickman, Kentucky";
    locationTitle.href = "https://go.nasa.gov/3zotXEt";
    locationCoordinates.innerHTML = "36°35'20.8 N 89°20'26.9 W";
    locationCoordinates.href = "https://www.google.com/maps/place/36%C2%B035'20.8%22N+89%C2%B020'26.9%22W/@36.5689533,-89.4212718,11.38z/data=!4m4!3m3!8m2!3d36.5891111!4d-89.3408056?entry=ttu";
  }
  if(x.alt == "b_0")
  {
    locationTitle.innerHTML = "Holla Bend, Arkansas";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/87241/the-alphabet-from-orbit-letter-b";
    locationCoordinates.innerHTML = "35°08'41.1 N 93°03'16.5 W";
    locationCoordinates.href = "https://www.google.com/maps/place/35%C2%B008'41.1%22N+93%C2%B003'16.5%22W/@35.1447544,-93.0571582,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.14475!4d-93.0545833?entry=ttu";
  }
  if(x.alt == "c_0")
  {
    locationTitle.innerHTML = "Black Rock Desert, Nevada";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/151802/summer-rains-on-nevadas-black-rock-playa?src=ve";
    locationCoordinates.innerHTML = "40°47'15.8 N 119°12'13.0 W";
    locationCoordinates.href = "https://www.google.com/maps/place/40%C2%B047'15.8%22N+119%C2%B012'13.0%22W/@40.7482658,-119.5536543,84761m/data=!3m1!1e3!4m4!3m3!8m2!3d40.7877096!4d-119.203614?entry=ttu";
  }
  if(x.alt == "c_1")
  {
    locationTitle.innerHTML = "Deception Island, Antarctica";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/146164/the-island-shaped-like-a-horseshoe";
    locationCoordinates.innerHTML = "62°57'22.3 S 60°38'32.8 W";
    locationCoordinates.href = "https://www.google.com/maps/place/62%C2%B057'22.3%22S+60%C2%B038'32.8%22W/@-62.9561919,-60.6450193,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-62.9561944!4d-60.6424444?entry=ttu";
  }
  if(x.alt == "d_0")
  {
    locationTitle.innerHTML = "Akimiski Island, Canada";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/8657/akimiski-island-canada";
    locationCoordinates.innerHTML = "53°00'58.5 N 81°18'24.6 W";
    locationCoordinates.href = "https://www.google.com/maps/place/53%C2%B000'58.5%22N+81%C2%B018'24.6%22W/@52.8535127,-81.6813828,147353m/data=!3m1!1e3!4m4!3m3!8m2!3d53.01625!4d-81.3068333?entry=ttu";
  }
  if(x.alt == "e_0")
  {
    locationTitle.innerHTML = "Firn-filled Fjords, Tibet";
    locationTitle.href = "https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/abc/images/f/tibet_oli_2014116_lrg.jpg";
    locationCoordinates.innerHTML = "29°15'46.9 N 96°19'03.8 E";
    locationCoordinates.href = "https://www.google.com/maps/place/29%C2%B015'46.9%22N+96%C2%B019'03.8%22E/@29.2803917,96.192327,59727m/data=!3m1!1e3!4m13!1m8!3m7!1s0x3761317e9c4a2cc1:0x1fc12c628413da99!2sTibet,+China!3b1!8m2!3d29.6472399!4d91.11745!16zL20vMGY4bmY!3m3!8m2!3d29.26304!4d96.317724!5m1!1e4?entry=ttu";
  }
  if(x.alt == "e_1")
  {
    locationTitle.innerHTML = "Sea of Okhotsk";
    locationTitle.href = "https://oceancolor.gsfc.nasa.gov/gallery/774/​";
    locationCoordinates.innerHTML = "54°42'50.3 N 136°34'20.4 E";
    locationCoordinates.href = "https://www.google.com/maps/place/54%C2%B042'50.3%22N+136%C2%B034'20.4%22E/@54.713983,136.5674735,556m/data=!3m1!1e3!4m12!1m7!3m6!1s0x58c264a91dfb3971:0xa9181fd1ed34bb71!2sSea+of+Okhotsk!8m2!3d52.873623!4d149.3658173!16zL20vMGZ3azA!3m3!8m2!3d54.71398!4d136.572339?entry=ttu";
  }
  if(x.alt == "e_2")
  {
    locationTitle.innerHTML = "Bellona Plateau";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/151169/stirring-up-carbonate-in-the-coral-sea​";
    locationCoordinates.innerHTML = "20°30'00.0 S 158°30'00.0 E";
    locationCoordinates.href = "https://www.google.com/maps/place/20%C2%B030'00.0%22S+158%C2%B030'00.0%22E/@-16.8094327,154.1932946,5.04z/data=!4m4!3m3!8m2!3d-20.5!4d158.5?entry=ttu";
  }
  if(x.alt == "g_0")
  {
    locationTitle.innerHTML = "Fonte Boa, Amazonas";
    locationTitle.href = "​";
    locationCoordinates.innerHTML = "2°26'30.8 S 66°16'43.7 W";
    locationCoordinates.href = "https://www.google.com/maps/place/2%C2%B026'30.8%22S+66%C2%B016'43.7%22W/@-2.4639488,-66.4453563,11z/data=!4m4!3m3!8m2!3d-2.4419!4d-66.2788?entry=ttu";
  }
  if(x.alt == "h_0")
  {
    locationTitle.innerHTML = "Southwestern Kyrgyzstan";
    locationTitle.href = "https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/abc/images/h/kadamzhai_oli_2014242_lrg.jpg​";
    locationCoordinates.innerHTML = "40°14'03.6 N 71°14'22.8 E";
    locationCoordinates.href = "https://www.google.com/maps/place/40%C2%B014'03.6%22N+71%C2%B014'22.8%22E/@40.2264242,71.2122775,13393m/data=!3m1!1e3!4m13!1m8!3m7!1s0x3897381dfce927f3:0x281058b74e88c433!2sKyrgyzstan!3b1!8m2!3d41.20438!4d74.766098!16s%2Fm%2F0jt3tjf!3m3!8m2!3d40.234345!4d71.239679?entry=ttu";
  }
  if(x.alt == "i_0")
  {
    locationTitle.innerHTML = "Petermann Glacier, Greenland";
    locationTitle.href = "https://earthobservatory.nasa.gov/images/151358/retreat-at-petermann-glacier​";
    locationCoordinates.innerHTML = "81°29'14.9 N 54°34'50.1 W";
    locationCoordinates.href = "https://www.google.com/maps/place/81%C2%B029'14.9%22N+54%C2%B034'50.1%22W/@81.4874808,-54.5854659,162m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x4fc83c8a2acdcf2d:0xebd0c56e04079842!2sPetermann+Glacier!8m2!3d80.5!4d-59.5000001!16s%2Fm%2F06w9gr5!3m3!8m2!3d81.48748!4d-54.580595?entry=ttu";
  }

  //81°29'14.9"N 54°34'50.1"W

}
function imageOut(x)
{
  console.log(x);
  console.log("MOUSE OUT");
}

// Functionality for the download button
downloadButton.addEventListener("click", function () {
  downloadDivAsPng("nameBoxes", "export.png");
});

// Convert ranges to scale values
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}