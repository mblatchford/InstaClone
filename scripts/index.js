const IMAGES = [
    {src: "assets/images/rm1.jpg", alt:"The Wife", index:0},
    {src: "assets/images/rm2.jpg", alt:"Cafe", index:1},
    {src: "assets/images/rm3.jpg", alt:"Strava Map", index:2 },
    {src: "assets/images/rm4.jpg", alt:"Cats", index:3},
    {src: "assets/images/rm5.jpg", alt:"More Cats", index:4},
    {src: "assets/images/rm6.jpg", alt:"Still a Cat", index:5 },
    {src: "assets/images/rm7.jpg", alt:"Do you only have cat pictures?", index:6 },
    {src: "assets/images/rm8.jpg", alt:"Yep it's a cat", index:7 },
    {src: "assets/images/rm9.jpg", alt:"CatPic 3029384827", index:8}
]


const thumbnailContainer = document.querySelector('[data-container]')
const galleryElement = document.querySelector('[data-largeOutput]');
const modalElement = document.querySelector('[data-modal]');

function createImage(imageData) {
    const newImage = document.createElement('img');
    
    // theImage.src = imageURL;
    newImage.src = imageData.src;
    newImage.alt = imageData.alt;
    newImage.index = imageData.index;

    // add an event listener to the image
    newImage.addEventListener('click', function (event) {
        // console.log("*hello*")
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        // console.log(`This is the event source ${event.target.src}`);
        // I can now set the output image's src
        // to event.target.src!
        galleryElement.src =  event.target.src;
        galleryElement.index = event.target.index;
        // modal is hidden by default
        modalElement.classList.remove('modal-hidden');
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

// add class of modal-hidden back onto div 
function toggleModal(event){
    modalElement.classList.toggle('modal-hidden');
}
// on user click of modal view, hide reverting back to thumbnails
modalElement.addEventListener('click', toggleModal);
window.addEventListener('keydown', (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 27){
        modalElement.classList.add('modal-hidden');
    }
});

// rather than trying to match sources I just added another 
// attribute in my IMAGES array of objects for index.
function nextImage(event){
    // if left arrow was pressed
    if(event.keyCode === 37) {
        // check currently pulled up image index
        let index = galleryElement.index;
        // linked list-ish functionality
        // if moving left puts me undefined 
        // wrap to the end of the array 
        if(index - 1 < 0){
            index = (IMAGES.length)-1;
            // replace shown image with new one
            galleryElement.src = IMAGES[index].src;
            galleryElement.index = index;
            galleryElement.alt = IMAGES[index].alt;
            // if moving left doesn't put us past the beginning 
            // just decriment the index
        }else{
            galleryElement.src = IMAGES[index-1].src;
            galleryElement.index = index - 1;
            galleryElement.alt = IMAGES[index-1].alt;
        }
    }
    
    if(event.keyCode === 39){
        let index = galleryElement.index;
        // if moving right puts me undefined wrap 
        // to the beginning of the array 
        if(index + 1 > IMAGES.length-1){
            // replace shown image with new one
            index = 0;
            galleryElement.src = IMAGES[index].src;
            galleryElement.index = index;
            galleryElement.alt = IMAGES[index].alt;
             // if moving left doesn't put us past the end 
            // just increment the index
        }else{
            galleryElement.src = IMAGES[index + 1].src;
            galleryElement.index = index + 1;
            galleryElement.alt = IMAGES[index + 1].alt;
        }
    }
};

window.addEventListener('keydown', nextImage);