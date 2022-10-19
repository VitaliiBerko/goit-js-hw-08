// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const cardsMarkUp = createPhotoCartMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createPhotoCartMarkup() {
    return galleryItems.map( ({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('');     
}

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    
});

function onGalleryContainerClick (event) {
    event.preventDefault();

    const isPhotoCardEl = event.target.classList.contains('gallery__image');

    if(!isPhotoCardEl) {
        return;
  }
} 