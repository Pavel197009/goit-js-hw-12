import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import { createMarkup } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader, createLightBox } from './js/render-functions';
import { refs } from './js/refs';

refs.form.addEventListener("submit", handleSearchPhoto);

createLightBox();
  
function handleSearchPhoto(e) {
    e.preventDefault();
    if (e.currentTarget.elements.search_text.value.trim().length === 0)        // если строка поиска пустая или пробелы
    {
        iziToast.error({ position: 'topRight', message: 'Search text is empty. Enter the text, please' });
        return;
    };
    let searchString = e.currentTarget.elements.search_text.value.trim().split(" ").join("+");  // преобразование строки поиска для HTTP-запроса
    clearGallery();                                                             // очистка галереи
    showLoader();                                                               // светим лоадер
    let data = getImagesByQuery(searchString).then(res => {                     // обработчик промиса 
        if (!res.data.total) {                                                  // если ничего не вернули из запроса
            iziToast.error({ position: 'topRight', message: `Sorry, there are no images matching your search query. Please try again!` });
        } else {                                                                // иначе строим галерею с картинками
            createGallery(res.data.hits);
        }
        hideLoader();                                                           // гасим лоадер после загрузки картинок
    });    
}
