
// import * as bootstrap from 'bootstrap';
import { refs } from './refs';

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
let lightBox = null;

export function createGallery(photos) {                     // создание галереи по данным HTTP-запроса
  const strings = photos
    .map(                                                   // создание массива HTML-фрагментов strings
      photo => 
        `<li class="gallery-item">
<a class="gallery-link" href="${photo.largeImageURL}" >
    <img class="gallery-img" src="${photo.webformatURL}" alt="${photo.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${photo.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${photo.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${photo.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${photo.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`
  );
  refs.gallery.innerHTML = strings.join(" ");               // создание галереи из массива strings
  lightBox.refresh();                                       // обновление lightBox после построения галереи
}

export function clearGallery() {                      // очистка галереи
  refs.gallery.innerHTML = "";
}

export function showLoader() {                        // делаем лоадер видимым
  refs.loader.style.visibility = 'visible';
} 

export function hideLoader() {                        // скрываем лоадер
  refs.loader.style.visibility = 'hidden';
} 

export function createLightBox() {                    // создание объекта SimpleLightBox
  lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
})
}