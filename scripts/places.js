const destinationPlacesContainer = document.querySelector('.destination__places');
const dataPlaces = [
    {
        id: 1,
        title: "The Stuga",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image1.jpg"
    },
    {
        id: 2,
        title: "Tiny Cabin in the mountains",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image2.jpg"
    },
    {
        id: 3,
        title: "Dragonfly Tiny Cabin",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image3.jpg"
    },
    {
        id: 4,
        title: "Trickle Creek Ranch",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image4.jpg"
    },
    {
        id: 5,
        title: "The Hermitage Cabin",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image5.jpg"
    },
    {
        id: 6,
        title: "Kindred Spirits Cabin",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image6.jpg"
    },
    {
        id: 7,
        title: "The Summit Cabin",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image7.jpg"
    },
    {
        id: 8,
        title: "Ninovan on the Shore",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image8.jpg"
    },
    {
        id: 9,
        title: "Barrier island elevated tent",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image9.jpg"
    },
    {
        id: 10,
        title: "The Tree House",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image10.jpg"
    },
    {
        id: 11,
        title: "Red Lifeguard Stand",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image11.jpg"
    },
    {
        id: 12,
        title: "Luxury Tiny Beach Cabin",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        price: "$36 | night",
        img: "./images/image12.jpg"
    },
];

dataPlaces.map((data) => {
    destinationPlacesContainer.innerHTML += `
        <div class="place">
        <div class="place__banner">
            <img class="place__banner-img" src="${data.img}" alt="${data.id}">
            <div class="place__like">
                <svg class="place__like-icon" xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037"
                    viewBox="0 0 24.037 24.037">
                    <path id="Path_955" data-name="Path 955"
                        d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z"
                        transform="translate(2.716 20.496) rotate(-45)" stroke="#e76f51" stroke-width="1.5" />
                </svg>
            </div>
            <div class="place__price">
                <p class="place__price-text">${data.price}</p>
            </div>
        </div>
        <h3 class="place__title">${data.title}</h3>
        <p class="place__caption">${data.caption}</p>
        <a href="#" class="btn-comp place__link">Read More</a>
    </div>
    `;
})