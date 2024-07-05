import './style.css'

//import { setupCounter } from './counter.js'

const nameInput = document.getElementById("nameInput");
const enterButton = document.getElementById("enterButton");
const nameBoxes = document.getElementById("nameBoxes");
const downloadButton = document.getElementById("downloadBtn");
const locationTitle = document.getElementById("locationTitle");
const locationCoordinates = document.getElementById("locationCoordinates");

let imageSelected = false;

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

            var name = pickLetterImage(input[i]).toLowerCase();
            img.src = "images/" + name + ".jpg";
            img.alt = name;
            img.id = "img";
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
    number = getRandomInt(0, 1);
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
    number = getRandomInt(0, 2);
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
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "u")
  {
    number = getRandomInt(0, 2);
  }
  else if(text.toLowerCase() == "v")
  {
    //number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "w")
  {
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "x")
  {
    number = getRandomInt(0, 1);
  }
  else if(text.toLowerCase() == "y")
  {
    number = getRandomInt(0, 1);
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
  console.log(imageSelected);

  if(!imageSelected)
  {
    //** If location title isn't active, enable it*/
    if(!locationTitle.classList.contains("active"))
    {
      locationTitle.classList.toggle("active");
    }
    //** If location title isn't active, enable it*/
    if(!locationCoordinates.classList.contains("active"))
    {
      locationCoordinates.classList.toggle("active");
    }
  
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
    if(x.alt == "j_0")
    {
      locationTitle.innerHTML = "Great Barrier Reef";
      locationTitle.href = "https://worldview.earthdata.nasa.gov/?v=146.1248187792869,-18.735903515172936,147.59594425519202,-17.899497498630097&l=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,HLS_L30_Nadir_BRDF_Adjusted_Reflectance,VIIRS_NOAA21_CorrectedReflectance_TrueColor(hidden),VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor&lg=true&s=-93.0518,35.1662%2B-116.6554,39.3565%2B-119.056,40.9107%2B-119.2064,40.7852%2B-81.2747,53.0084%2B146.8476,-18.3487&t=2023-09-01-T18%3A03%3A26Z​";
      locationCoordinates.innerHTML = "18°20'55.3 S 146°50'51.4 E";
      locationCoordinates.href = "https://www.google.com/maps/place/18%C2%B020'55.3%22S+146%C2%B050'51.4%22E/@-18.3013843,146.8642487,39611m/data=!3m1!1e3!4m4!3m3!8m2!3d-18.3487!4d146.8476?entry=ttu";
    }
    if(x.alt == "j_1")
    {
      locationTitle.innerHTML = "Karakaya Dam, Turkey";
      locationTitle.href = "https://go.nasa.gov/3QE3Wa1​";
      locationCoordinates.innerHTML = "38°29'37.7 N 38°26'39.5 E";
      locationCoordinates.href = "https://www.google.com/maps/place/38%C2%B029'37.7%22N+38%C2%B026'39.5%22E/@38.5489247,38.208631,112968m/data=!3m1!1e3!4m4!3m3!8m2!3d38.4938!4d38.4443?entry=ttu";
    }
    if(x.alt == "k_0")
    {
      locationTitle.innerHTML = "Sirmilik National Park, Canada";
      locationTitle.href = "https://landsat.visibleearth.nasa.gov/view.php?id=87216​";
      locationCoordinates.innerHTML = "72°05'01.1 N 76°48'42.9 W";
      locationCoordinates.href = "https://www.google.com/maps/place/72%C2%B005'01.1%22N+76%C2%B048'42.9%22W/@72.1091739,-77.3683173,70440m/data=!3m1!1e3!4m12!1m7!3m6!1s0x4e17b70e5a3af4b1:0x1e43c34c0c4309a2!2sSirmilik+National+Park!8m2!3d73.3652488!4d-79.0152625!16zL20vMDZmeDZk!3m3!8m2!3d72.083628!4d-76.811917?entry=ttu";
    }
    if(x.alt == "l_0")
    {
      locationTitle.innerHTML = "Nusantara, Indonesia";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/152471/nusantara-a-new-capital-city-in-the-forest%20%E2%80%8B";
      locationCoordinates.innerHTML = "0°58'18.1 S 116°41'58.9 E";
      locationCoordinates.href = "https://www.google.com/maps/place/0%C2%B058'18.1%22S+116%C2%B041'58.9%22E/@-0.9725262,116.6947405,2641m/data=!3m1!1e3!4m12!1m7!3m6!1s0x2df6c93c8bb52e15:0x238de9438b4d18a8!2z64iE7IKw7YOA6528!8m2!3d-0.9746384!4d116.7094308!16s%2Fm%2F03bw_z_!3m3!8m2!3d-0.971695!4d116.699694?entry=ttu";
    }
    if(x.alt == "l_1")
    {
      locationTitle.innerHTML = "Xingjiang, China";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/82853/faults-in-xinjiang​";
      locationCoordinates.innerHTML = "40°04'02.8 N 77°40'00.7 E";
      locationCoordinates.href = "https://www.google.com/maps/place/40%C2%B004'02.8%22N+77%C2%B040'00.7%22E/@40.0613207,77.5606821,20116m/data=!3m1!1e3!4m7!1m2!2m1!1sTien+Shan+mountains!3m3!8m2!3d40.067453!4d77.666852?entry=ttu";
    }
    if(x.alt == "m_0")
    {
      locationTitle.innerHTML = "Shenandoah River, Virginia";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/84837/the-sinuous-shenandoah​";
      locationCoordinates.innerHTML = "38°46'32.2 N 78°24'07.1 W";
      locationCoordinates.href = "https://www.google.com/maps/place/Shenandoah+River/@38.7773712,-78.4192219,6454m/data=!3m1!1e3!4m7!3m6!1s0x89b6047d550cb7f7:0x83e4ccba6e682c02!4b1!8m2!3d39.1019371!4d-77.9660084!16zL20vMDMzejYz?entry=ttu";
    }
    if(x.alt == "m_1")
    {
      locationTitle.innerHTML = "Patomac River";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/84837/the-sinuous-shenandoah​";
      locationCoordinates.innerHTML = "38°46'32.2 N 78°24'07.1 W";
      locationCoordinates.href = "https://www.google.com/maps/place/Shenandoah+River/@38.7773712,-78.4192219,6454m/data=!3m1!1e3!4m7!3m6!1s0x89b6047d550cb7f7:0x83e4ccba6e682c02!4b1!8m2!3d39.1019371!4d-77.9660084!16zL20vMDMzejYz?entry=ttu";
    }
    if(x.alt == "m_2")
    {
      locationTitle.innerHTML = "Tian Shan Mountains, Kyrgyzstan";
      locationTitle.href = "https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/abc/images/m/tienshan_oli_2015226_lrg.jpg​";
      locationCoordinates.innerHTML = "42°07'16.4 N 80°02'44.1 E";
      locationCoordinates.href = "https://www.google.com/maps/search/Tian+Shan+Mountains,+Kyrgyzstan+/@42.1159018,79.945501,16875m/data=!3m1!1e3?entry=ttu";
    }
    if(x.alt == "o_0")
    {
      locationTitle.innerHTML = "Crater Lake, Oregon";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/151161/a-clear-view-of-crater-lake​";
      locationCoordinates.innerHTML = "42°56'10.0 N 122°06'04.7 W";
      locationCoordinates.href = "https://www.google.com/maps/place/42%C2%B056'10.0%22N+122%C2%B006'04.7%22W/@42.9299656,-122.1478883,34289m/data=!3m1!1e3!4m4!3m3!8m2!3d42.9361!4d-122.1013?entry=ttu";
    }
    if(x.alt == "p_0")
    {
      locationTitle.innerHTML = "Mackenzie River Delta, Canada";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/8320/mackenzie-river-delta-canada​";
      locationCoordinates.innerHTML = "68°12'54.4 N 134°23'15.3 W";
      locationCoordinates.href = "https://www.google.com/maps/place/68%C2%B012'54.4%22N+134%C2%B023'15.3%22W/@68.2079858,-134.5221453,23980m/data=!3m1!1e3!4m4!3m3!8m2!3d68.215103!4d-134.387585?entry=ttu";
    }
    if(x.alt == "q_0")
    {
      locationTitle.innerHTML = "Lonar Crater, India";
      locationTitle.href = "https://go.nasa.gov/3USLQmX​";
      locationCoordinates.innerHTML = "19°58'36.8 N 76°30'30.6 E";
      locationCoordinates.href = "https://www.google.com/maps/place/19%C2%B058'36.8%22N+76%C2%B030'30.6%22E/@19.9770683,76.4830842,6175m/data=!3m1!1e3!4m7!1m2!2m1!1sLonar+Crater,+India!3m3!8m2!3d19.976888!4d76.508512?entry=ttu";
    }
    if(x.alt == "r_0")
    {
      locationTitle.innerHTML = "Lago Menendez, Argentina";
      locationTitle.href = "https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/abc/images/r/lagomenendez_oli_2015021_lrg.jpg";
      locationCoordinates.innerHTML = "42°41'14.9 S 71°52'21.7 W";
      locationCoordinates.href = "https://www.google.com/maps/place/42%C2%B041'14.9%22S+71%C2%B052'21.7%22W/@-42.6921215,-71.9452812,30666m/data=!3m1!1e3!4m12!1m7!3m6!1s0x961c217407edac45:0xb660993af48f583f!2sLake+Men%C3%A9ndez!8m2!3d-42.6849165!4d-71.8274846!16s%2Fg%2F120l2rkc!3m3!8m2!3d-42.687479!4d-71.872688?entry=ttu";
    }
    if(x.alt == "s_0")
    {
      locationTitle.innerHTML = "Mackenzie River";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/89870/where-trucks-drive-on-the-river";
      locationCoordinates.innerHTML = "68°25'01.0 N 134°08'35.2 W";
      locationCoordinates.href = "https://www.google.com/maps/place/Tuktoyaktuk,+NT,+Canada/@68.408019,-134.2820739,33486m/data=!3m1!1e3!4m6!3m5!1s0x5113cb935c41b04d:0x1155e872d8421ea3!8m2!3d69.445358!4d-133.034181!16zL20vMDNwOXF4?entry=ttu";
    }
    if(x.alt == "s_1")
    {
      locationTitle.innerHTML = "N’Djamena, Chad";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/87237/the-alphabet-from-orbit-letter-t";
      locationCoordinates.innerHTML = "12°00'27.7 N 15°03'46.2 E";
      locationCoordinates.href = "https://www.google.com/maps/place/12%C2%B000'27.7%22N+15%C2%B003'46.2%22E/@12.0046806,15.0451832,17158m/data=!3m1!1e3!4m13!1m8!3m7!1s0x11196053fc686ffb:0xf9442c3f64221374!2sDigangali,+Chad!3b1!8m2!3d12.0619444!4d15.0727778!16s%2Fg%2F11nmsbmc9w!3m3!8m2!3d12.007689!4d15.062824?entry=ttu";
    }
    if(x.alt == "t_0")
    {
      locationTitle.innerHTML = "Al Ramlah, United Arab Emirates";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/87237/the-alphabet-from-orbit-letter-t";
      locationCoordinates.innerHTML = "23°10'30.0 N 53°47'52.8 E";
      locationCoordinates.href = "https://www.google.com/maps/place/23%C2%B010'30.0%22N+53%C2%B047'52.8%22E/@23.2263071,53.5999631,91189m/data=!3m1!1e3!4m4!3m3!8m2!3d23.175!4d53.798?entry=ttu";
    }
    if(x.alt == "t_1")
    {
      locationTitle.innerHTML = "Lena River Delta";
      locationTitle.href = "https://oceancolor.gsfc.nasa.gov/gallery/759/";
      locationCoordinates.innerHTML = "72°52'40.3 N 129°31'51.5 E";
      locationCoordinates.href = "https://www.google.com/maps/place/72%C2%B052'40.3%22N+129%C2%B031'51.5%22E/@72.787563,128.6593921,85488m/data=!3m1!1e3!4m12!1m7!3m6!1s0x5b1ba3a5c11a7b29:0x90c8b3da45330bba!2sLaptev+Sea!8m2!3d75.9645208!4d126.6348815!16zL20vMDI4bmRz!3m3!8m2!3d72.877867!4d129.530964?entry=ttu";
    }
    if(x.alt == "u_0")
    {
      locationTitle.innerHTML = "Canyonlands National Park, Utah";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/83875/the-loop";
      locationCoordinates.innerHTML = "38°16'09.1 N 109°55'32.7 W";
      locationCoordinates.href = "https://www.google.com/maps/place/38%C2%B016'09.1%22N+109%C2%B055'32.7%22W/@38.2749009,-110.0024741,14590m/data=!3m1!1e3!4m12!1m7!3m6!1s0x8747e1ee4518a6a9:0x15a452a9c502e6aa!2sCanyonlands+National+Park!8m2!3d38.2135733!4d-109.9025345!16zL20vMDF3cTgz!3m3!8m2!3d38.269198!4d-109.925762?entry=ttu";
    }
    if(x.alt == "u_1")
    {
      locationTitle.innerHTML = "Bamforth National Wildlife Refuge, Wyoming";
      locationTitle.href = "";
      locationCoordinates.innerHTML = "41°19'26.0 N 105°46'13.9 W";
      locationCoordinates.href = "https://www.google.com/maps/place/Bamforth+National+Wildlife+Refuge/@41.2734513,-106.0072281,91289m/data=!3m1!1e3!4m12!1m5!3m4!2zNDHCsDIwJzE3LjUiTiAxMDXCsDQ4JzUwLjAiVw!8m2!3d41.3382!4d-105.8139!3m5!1s0x8768812b9b07cc19:0x839bb585413c393f!8m2!3d41.3777918!4d-105.7317396!16zL20vMGJnMGY5?entry=ttu";
    }
    if(x.alt == "u_2")
    {
      locationTitle.innerHTML = "Potomac River, Virginia";
      locationTitle.href = "";
      locationCoordinates.innerHTML = "38°29'06.4 N 77°10'19.9 W";
      locationCoordinates.href = "https://www.google.com/maps/place/38%C2%B029'06.4%22N+77%C2%B010'19.9%22W/@38.469861,-77.324325,79968m/data=!3m1!1e3!4m4!3m3!8m2!3d38.4851!4d-77.1722?entry=ttu";
    }
    if(x.alt == "v_0")
    {
      locationTitle.innerHTML = "Cellina and Meduna Rivers, Italy";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/47670/gravel-rivers-in-northeastern-italy";
      locationCoordinates.innerHTML = "46°06'41.4 N 12°45'26.6 E";
      locationCoordinates.href = "https://www.google.com/maps/place/46%C2%B006'41.4%22N+12%C2%B045'26.6%22E/@46.1123599,12.6682228,45913m/data=!3m1!1e3!4m4!3m3!8m2!3d46.1115!4d12.7574?entry=ttu";
    }
    if(x.alt == "w_0")
    {
      locationTitle.innerHTML = "Ponoy River, Russia";
      locationTitle.href = "";
      locationCoordinates.innerHTML = "67°02'10.9 N 40°20'19.3 E";
      locationCoordinates.href = "https://maps.app.goo.gl/znyoEABx7pGmi3QS9";
    }
    if(x.alt == "w_1")
    {
      locationTitle.innerHTML = "La Primavera, Columbia";
      locationTitle.href = "";
      locationCoordinates.innerHTML = "5°26'57.9 N 69°47'57.0 W";
      locationCoordinates.href = "https://maps.app.goo.gl/bG7qmTVbkf6Mcjs46";
    }
    if(x.alt == "x_0")
    {
      locationTitle.innerHTML = "Wolstenholme Fjord, Greenland";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/150267/a-half-century-of-loss-in-northwest-greenland";
      locationCoordinates.innerHTML = "76°44'03.8 N 68°36'23.3 W";
      locationCoordinates.href = "https://www.google.com/maps/place/76%C2%B044'03.8%22N+68%C2%B036'23.3%22W/@76.769809,-69.2574316,78627m/data=!3m1!1e3!4m12!1m7!3m6!1s0x4e363cf35b4fee17:0x41fd8c3cf71f8024!2sWolstenholme+Fjord!8m2!3d76.6170514!4d-69.0542596!16zL20vMGJqd3dn!3m3!8m2!3d76.734386!4d-68.606478?entry=ttu";
    }
    if(x.alt == "x_1")
    {
      locationTitle.innerHTML = "Davis Straight, Greenland";
      locationTitle.href = "https://oceancolor.gsfc.nasa.gov/gallery/feature/images/LC09_L1TP_004017_20230903_20230903_02_T1_Greenland_lg.png";
      locationCoordinates.innerHTML = "62°14'14.8 N 49°34'49.9 W";
      locationCoordinates.href = "https://www.google.com/maps/place/62%C2%B014'14.8%22N+49%C2%B034'49.9%22W/@62.2576372,-50.2124668,119807m/data=!3m1!1e3!4m4!3m3!8m2!3d62.237433!4d-49.580516?entry=ttu";
    }
    if(x.alt == "y_0")
    {
      locationTitle.innerHTML = "Bíobío River, Chile";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/150945/fires-blaze-through-south-central-chile";
      locationCoordinates.innerHTML = "37°16'02.4 S 72°43'42.9 W";
      locationCoordinates.href = "https://www.google.com/maps/place/37%C2%B016'02.4%22S+72%C2%B043'42.9%22W/@-37.2890838,-72.7147119,11.54z/data=!4m12!1m7!3m6!1s0x9612d6239f78768f:0x62a4a840164470ae!2zQsOtb2LDrW8gUml2ZXI!8m2!3d-37.6673574!4d-72.163673!16zL20vMDZiZmdu!3m3!8m2!3d-37.267341!4d-72.728582?entry=ttu";
    }
    if(x.alt == "y_1")
    {
      locationTitle.innerHTML = "Estuario de Virrila, Peru";
      locationTitle.href = "https://earthobservatory.nasa.gov/images/151183/warming-water-and-downpours-in-peru";
      locationCoordinates.innerHTML = "5°51'53.4 S 80°43'51.6 W";
      locationCoordinates.href = "https://www.google.com/maps/place/5%C2%B051'53.4%22S+80%C2%B043'51.6%22W/@-5.8409555,-80.83445,12.13z/data=!4m12!1m7!3m6!1s0x90497ce60f8e3bc1:0x703ee5f60c9c907d!2sEstuario+de+Virrila!8m2!3d-5.7988889!4d-80.8647222!16s%2Fg%2F12ls2ksqv!3m3!8m2!3d-5.864833!4d-80.730992?entry=ttu";
    }
  }

}
function imageOut(x)
{
  //** Make sure there is not an image already selected */
  if(!imageSelected)
  {
    //** If the Location Title is active, disable it */
    if(locationTitle.classList.contains("active"))
    {
      locationTitle.classList.toggle("active");
    }
    //** If location title isn't active, enable it*/
    if(locationCoordinates.classList.contains("active"))
    {
      locationCoordinates.classList.toggle("active");
    }
  }

}

//** Click event to handle selection of images */
window.onclick = function(event) 
{
  for(let x = 0; x < nameBoxes.children.length; x++)
  {
    if(nameBoxes.children[x].classList.contains("selected"))
    {
      nameBoxes.children[x].classList.toggle("selected")
    }
  }
  
  if (event.target.matches('img')) 
  {
    event.target.classList.toggle("selected");
    imageSelected = true;
  }
  //** Disable all other  */
  else
  {
    imageSelected = false;
  }
}

// Functionality for the download button
downloadButton.addEventListener("click", function () {
  downloadDivAsPng("nameBoxes", "export.png");
});

// Convert ranges to scale values
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}