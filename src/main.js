import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import { createMarkup } from './js/render-functions';
import { PixabayAPI }  from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader, createLightBox, hideProgress, showProgress }  from './js/render-functions';
import { refs } from './js/refs';

refs.form.addEventListener("submit", handleSearchPhoto);
refs.loadMore.addEventListener("click", handleLoadMore);
refs.btnUp.addEventListener("click", handleBtnUp);
const pixabay = new PixabayAPI();  // изначальная инициализация объекта класса PixabayAPI
let searchString = "";

createLightBox();
  
async function handleSearchPhoto(e) {
    e.preventDefault();
    if (e.currentTarget.elements.search_text.value.trim().length === 0)        // если строка поиска пустая или пробелы
    {
        iziToast.error({ position: 'topRight', message: 'Search text is empty. Enter the text, please' });
        return;
    };
    searchString = e.currentTarget.elements.search_text.value.trim().split(" ").join("+");  // преобразование строки поиска для HTTP-запроса
    clearGallery();                                                             // очистка галереи
    pixabay.resetValues();
    hideProgress();
    showLoader();                                                               // светим лоадер
    let res = await pixabay.getImagesByQuery(searchString, pixabay.currentPage+1);
    if (!res.total) {                                                  // если ничего не вернули из запроса
        iziToast.error({ position: 'topRight', message: `Sorry, there are no images matching your search query. Please try again!` });
    } else {                                                                // иначе строим галерею с картинками
        createGallery(res.hits);
        refs.progresslabel.textContent = `Downloaded ${pixabay.loadedPhotos} from ${pixabay.totalPhotos}`;
        refs.progressBar.value = pixabay.loadedPhotos / pixabay.totalPhotos * 100;
        showProgress();
    }
    if (pixabay.currentPage < pixabay.maxPages) {
        refs.loadMore.style.visibility = "visible";
    }
    hideLoader();                                                           // гасим лоадер после загрузки картинок
}

async function handleLoadMore() {
    refs.loadMore.style.visibility = "hidden";
    let res = await pixabay.getImagesByQuery(searchString, pixabay.currentPage + 1);
    createGallery(res.hits);
    refs.progresslabel.textContent = `Downloaded ${pixabay.loadedPhotos} from ${pixabay.totalPhotos}`
    refs.progressBar.value = pixabay.loadedPhotos / pixabay.totalPhotos * 100;
    if (pixabay.currentPage < pixabay.maxPages) {
        refs.loadMore.style.visibility = "visible";
    }
}

