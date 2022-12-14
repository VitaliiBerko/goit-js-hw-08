// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// / Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import galleryTmp from '../templates/gallery.hbs'

// console.log(galleryTmp);


const galleryContainer = document.querySelector('.gallery');
const cardsMarkUp = createPhotoCardMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createPhotoCardMarkup(galleryItems) {
    return galleryItems.map(galleryTmp).join('');     
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