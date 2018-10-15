const IMAGES = [
    {src: "assets/images/rm1.jpg", alt:"The Wife" },
    {src: "assets/images/rm2.jpg", alt:"Cafe"},
    {src: "assets/images/rm3.jpg", alt:"Strava Map" },
    {src: "assets/images/rm4.jpg", alt:"Cats" },
    {src: "assets/images/rm5.jpg", alt:"More Cats" },
    {src: "assets/images/rm6.jpg", alt:"Still a Cat" },
    {src: "assets/images/rm7.jpg", alt:"Do you only have cat pictures?" },
    {src: "assets/images/rm8.jpg", alt:"Yep it's a cat" },
    {src: "assets/images/rm9.jpg", alt:"CatPic 3029384827"}
]


const thumbnailContainer = document.querySelector('[data-container]')
const galleryElement = document.querySelector('[data-largeOutput]');


function createImage(imageData) {
    const newImage = document.createElement('img');
    
    // theImage.src = imageURL;
    newImage.src = imageData.src;
    newImage.alt = imageData.alt;

    // add an event listener to the image
    newImage.addEventListener('click', function (event) {
        console.log("*hello*")
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(`This is the event source ${event.target.src}`);
        // I can now set the output image's src
        // to event.target.src!
        galleryElement.src =  event.target.src;
    });
    return newImage;
}

function createImgContainer(imageData) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('thumbnail-item');
    const image = createImage(imageData);
    imgContainer.appendChild(image);

    return imgContainer;
}

IMAGES.forEach(function (imageData) {
    // We pass that image URL to our createThumbnail func
    let testThumb = createImgContainer(imageData);
    // then append that thumbnail to the page.
    thumbnailContainer.appendChild(testThumb);
});
