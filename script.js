function searchItems() {
    // Get the search query from the input field
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
    // Define your sample items with different images
    const sampleItems = [
        {
            price: '279,999',
            title: 'iPhone 13 Pro',
            location: 'karoni gilgit colony . 2 days ago',
            image: './images/bodyimg1.jpeg',
        },
        {
            price: '279,999',
            title: 'iPhone 13 Pro',
            location: 'karoni gilgit colony . 2 days ago',
            image:'./images/bodyimg1.jpeg',
        },
        {
            price: '249,999',
            title: 'iPhone 13 Pro 256 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 2 days ago',
            image:'./images/pictwo.jpeg',
        },
        {
            price: '199,999',
            title: 'iPhone 13 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 2 days ago',
            image:'./images/picthree.jpeg',
        },
        {
            price: '2500,000',
            title: 'iphone 12 pro 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 1 year ago',
            image:'./images/picfour.jpeg',
        },
        {
            price: '229,999',
            title: 'iPhone 12 Por 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 1 week ago',
            image:'./images/five.jpeg',
        },
        {
            price: '179,999',
            title: 'iPhone 11 Por 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 3 weeks ago',
            image:'./images/picseven.jpeg',
        },
        {
            price: '40,000',
            title: 'iphone 7 Por 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 15 days ago',
            image:'./images/picegiht.jpeg',
        },
        {
            price: '65,000',
            title: 'iphone XR pro 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 18 days ago',
            image:'./images/picnane.jpeg',
        },
        {
            price: '180,000',
            title: 'iphone XS Max pro 55 gb non pta,,0319-3824547 whatsapp only',
            location: 'karoni gilgit colony . 22 days ago',
            image:'./images/picthen.jpeg',
        },
        {
            price: '45,000',
            title: 'iphone 7 plus 55 gb non pta,,0319-3824547 whatsapp only',
            location: ' karoni gilgit colony . 1 days ago',
            image:'./images/picthree.jpeg',
        },
    ];
  
    // Clear the search results container before displaying new results
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
    
    // Filter the items based on the search query and price
    const filteredItems = sampleItems.filter((item) => {
      return item.title.includes(searchQuery);
    });
  
    // Create result elements for each matching item
    filteredItems.forEach((item) => {
      const searchResultDiv = document.createElement('div');
      searchResultDiv.className = 'main-video';
      searchResultDiv.innerHTML = `
        <!-- HTML structure for search results here -->
        <div class="main-img">
        <img src="${item.image}" alt="Item Image">
    </div>
    <div class="main-box-contint">
        <div class="inboxtop">
            <div><h3>${item.price}</h3></div>
            <div class="main-icon"><i class="fa-regular fa-heart"></i></div>
        </div>
        <br>
        <h3 class="title">${item.title}</h3>
        <br>
        <br>
        <h6>${item.location}</h6>
        <div class="icon-box-main">
            <div class="top-bar-itesms">
                <button class="last-left-butten">
                    <i class="fa-solid fa-phone"></i> <strong>Call</strong>
                </button>
            </div>
            <div class="top-bar-itesms icon-two ">
                <button class="last-left-butten chat-icon">
                    <i class="fa-regular fa-comment"></i><strong>Chat</strong>
                </button>
            </div>
        </div>
    </div>
      `;
      searchResultsContainer.appendChild(searchResultDiv);
    });
  
    // Hide other views and show the search results view
    document.getElementById('tableview').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';

    document.querySelector('.manu').style.backgroundColor = '#C8F8F6';
    document.querySelector('.block').style.backgroundColor = '';

  }
   
// Function to create and display the table
function createTable() {
    // Get a reference to the table element
    const table = document.getElementById('tableview');

    // Clear any existing content in the table
    table.innerHTML = '';

    // Define the data for the table rows
    const rowData = [
        {
            price: 'Rs 25,999',
            title: 'SAPRKX NEO 7 PLUS (4GB 64GB) Box Pack 5000MP battery',
            location: 'NOOR MOBILE DHARAMPURA',
            timeAgo: '9 hours ago',
            image: 'images/picthree.jpeg',
        },
            {
        price: 'Rs 25,999',
        title: 'SAPRKX NEO 7 PLUS (4GB 64GB) Box Pack 5000MP battery',
        location: 'NOOR MOBILE DHARAMPURA | 9 hours ago',
        image: 'images/picthree.jpeg',
    },
    {
        price: '279,999',
        title: 'iPhone 13 Pro',
        location: 'karoni gilgit colony . 2 days ago',
        image: './images/bodyimg1.jpeg',
    },
    {
        price: '279,999',
        title: 'iPhone 13 Pro',
        location: 'karoni gilgit colony . 2 days ago',
        image:'./images/bodyimg1.jpeg',
    },
    {
        price: '249,999',
        title: 'iPhone 13 Pro 256 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 2 days ago',
        image:'./images/pictwo.jpeg',
    },
    {
        price: '199,999',
        title: 'iPhone 13 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 2 days ago',
        image:'./images/picthree.jpeg',
    },
    {
        price: '2500,000',
        title: 'iphone 12 pro 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 1 year ago',
        image:'./images/picfour.jpeg',
    },
    {
        price: '229,999',
        title: 'iPhone 12 Por 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 1 week ago',
        image:'./images/five.jpeg',
    },
    {
        price: '179,999',
        title: 'iPhone 11 Por 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 3 weeks ago',
        image:'./images/picseven.jpeg',
    },
    {
        price: '40,000',
        title: 'iphone 7 Por 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 15 days ago',
        image:'./images/picegiht.jpeg',
    },
    {
        price: '65,000',
        title: 'iphone XR pro 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 18 days ago',
        image:'./images/picnane.jpeg',
    },
    {
        price: '180,000',
        title: 'iphone XS Max pro 55 gb non pta,,0319-3824547 whatsapp only',
        location: 'karoni gilgit colony . 22 days ago',
        image:'./images/picthen.jpeg',
    },
    {
        price: '45,000',
        title: 'iphone 7 plus 55 gb non pta,,0319-3824547 whatsapp only',
        location: ' karoni gilgit colony . 1 days ago',
        image:'./images/picthree.jpeg',
    },
        // Add more data here as needed...
    ];

    // Create the rows and cells for the table
    for (let i = 0; i < rowData.length; i++) {
        // Create a new row element
        const row = document.createElement('tr');

        // Create 3 cells (td) for each row
        for (let j = 0; j < 3; j++) {
            // Create a new cell element
            const cell = document.createElement('td');

            // Create the content for the cell using the provided data
            const item = rowData[i];
            cell.innerHTML = `
                <div class="main-box">
                    <div class="box-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="icon-rs">
                        <div class="rs">
                            <h4>${item.price}</h4>
                        </div>
                        <div class="box-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="main-p">
                        <p>${item.title}</p>
                    </div>
                    <div class="bottom">
                        <h6 class="h6-bottom">${item.location}</h6>
                        <h6>${item.timeAgo}</h6>
                    </div>
                </div>
            `;

            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
    // Function to show Table View
    console.log("showTableView() function called");
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('tableview').style.display = 'table';

    document.querySelector('.manu').style.backgroundColor = '';
    document.querySelector('.block').style.backgroundColor = '#C8F8F6';
}
// Call the createTable() function to generate the table
createTable();


// Get DOM elements
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const sliderLeft = document.getElementById('sliderLeft');
const sliderRight = document.getElementById('sliderRight');
const minPriceLabel = document.getElementById('minPriceLabel');
const maxPriceLabel = document.getElementById('maxPriceLabel');

// Initial price range values
let minValue = 250;
let maxValue = 1000000;

// Initialize slider and labels
function initializeSlider() {
    minPriceInput.value = minValue;
    maxPriceInput.value = maxValue;
    minPriceLabel.textContent = minValue;
    maxPriceLabel.textContent = maxValue;
}

// Initialize the slider and add event listeners
initializeSlider();
addSliderEventListeners(sliderLeft, handleMouseMoveLeft, handleMouseUp);
addSliderEventListeners(sliderRight, handleMouseMoveRight, handleMouseUp);



// Add event listeners for slider handles
function addSliderEventListeners(handle, moveHandler, upHandler) {
    handle.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upHandler);
    });
}
//moveHandler
//upHandler

// Handle mouse movement for left slider
function handleMouseMoveLeft(event) {
    const maxX = sliderRight.offsetLeft;
    const newPosition = Math.min(maxX, Math.max(0, event.clientX - sliderLeft.offsetWidth));
    updateSliderPosition(sliderLeft, newPosition);
}

// Handle mouse movement for right slider
function handleMouseMoveRight(event) {
    const minX = sliderLeft.offsetLeft;
    const maxX = sliderRight.parentElement.offsetWidth;
    const newPosition = Math.min(maxX, Math.max(minX, event.clientX - sliderRight.offsetWidth));

    updateSliderPosition(sliderRight, newPosition); // ya ju function h Update  kath h slider position
}
//The offsetWidth property returns the viewable width of an element (in pixels) 
//including padding, border and scrollbar, but not the margin.
//The coordinates of the mouse pointer when clicked:
//let x = event.clientX;  // Horizontal
//let y = event.clientY;  // Vertical


// ya Remove event listeners jab mouse is released laty h tu
function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMoveLeft);
    document.removeEventListener('mousemove', handleMouseMoveRight);
    document.removeEventListener('mouseup', handleMouseUp);
}
//ya ju function h Update kath h slider position ko
function updateSliderPosition(slider, newPosition) {
    slider.style.left = newPosition + 'px';
    const priceRange = calculatePriceRange();
    minPriceInput.value = priceRange[0];
    maxPriceInput.value = priceRange[1];
    minPriceLabel.textContent = priceRange[0];
    maxPriceLabel.textContent = priceRange[1];
}



// Calculate price range based on slider positions
function calculatePriceRange() {
    const totalWidth = sliderRight.parentElement.offsetWidth;
    const range = maxValue - minValue;
    const leftPosition = sliderLeft.offsetLeft;
    const rightPosition = sliderRight.offsetLeft + sliderRight.offsetWidth;
    
    const minPrice = Math.round((leftPosition / totalWidth) * range) + minValue;
    const maxPrice = Math.round((rightPosition / totalWidth) * range) + minValue;

    return [minPrice, maxPrice];
}


