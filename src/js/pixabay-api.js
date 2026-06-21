import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';    // URL-путь для запроса
const API_KEY = '28194821-49041d995ecd04735d9e20d11';   // ключ для запроса
const urlAXIOS = `?key=${API_KEY}`;                     // создаем строку поиска для запроса


export class PixabayAPI {
  constructor() {
    this.currentPage = 0;
    this.totalPhotos = 0;
    this.per_page = 15;
    this.maxPages = 0;
    this.loadedPhotos = 0;
  }
  
  async getImagesByQuery(searchString, page) {
    const params = {                                        // создаем параметры для запроса
      q: searchString,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: this.per_page,
      page: page,
    };

  // const urlAXIOS = `?key=${API_KEY}&q=${this.#query}&page=${this.#page}&per_page=${this.#per_page}`;

    const res = await axios.get(urlAXIOS, { params });
    if (!page) {
      this.maxPages = Math.ceil(res.data.total / this.per_page);
      this.totalPhotos = res.data.total;
    }
    this.currentPage +=1;
    this.loadedPhotos += res.data.hits.length;
    return res.data;                 // axios get-запрос и возврат промиса
  }

  resetValues() {
    this.currentPage = 0;
    this.totalPhotos = 0;
    this.maxPages = 0;
    this.loadedPhotos = 0;
  }

  //get query() {
    // this.#query;
  //  return this.#query;
  //}

  //set query(newQuery) {
  //  this.#query = newQuery;
  //}

  //incrementPage() {
  //  this.#page += 1;
  //}

  //resetPage() {
  //  this.#page = 1;
  //}

  //setTotal(total) {
  //  this.totalPhotos = total;
  //}

  //hasMorePhotos() {
    // console.log('page', this.#page);
    // console.log('totalPhotos', this.#totalPhotos);
    // console.log('per_page', this.#per_page);
  //  return this.#page < Math.ceil(this.#totalPhotos / this.#per_page);
  //}
}