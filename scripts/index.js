const IMAGES = [
    {img: assets/images/rm1.jpg alt:"The Wife" },
    {img: assets/images/rm2.jpg alt:"Cafe"},
    {img: assets/images/rm3.jpg alt:"Strava Map" },
    {img: assets/images/rm4.jpg alt:"Cats" },
    {img: assets/images/rm5.jpg alt:"More Cats" },
    {img: assets/images/rm6.jpg alt:"Still a Cat" },
    {img: assets/images/rm7.jpg alt:"Do you only have cat pictures?" },
    {img: assets/images/rm8.jpg alt:"Yep it's a cat" },
    {img: assets/images/rm9.jpg alt:"CatPic 3029384827"}

]


function createImg(pic) {
    const newImage = document.createElement('img');
    newImage.src = pic.img;
    newImage.alt = pic.alt;
    return newImage;
}

function createImgContainer() {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    imgContainer.appendChild(createImg());

    return buttonContainer;
}