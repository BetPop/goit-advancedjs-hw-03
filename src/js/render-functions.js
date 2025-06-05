// render-functions.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabay-api';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

let query = '';
let lightbox;

// Loader control
const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

// Markup generator
const createImageCard = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="photo-card">
    <a href="${largeImageURL}" data-lightbox="gallery">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    <div class="info">
      <div class="info-item-wrapper"><p class="info-item"><b>Likes</b></p><p class="info-item">${likes}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Views</b></p><p class="info-item">${views}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Comments</b></p><p class="info-item">${comments}</p></div>
      <div class="info-item-wrapper"><p class="info-item"><b>Downloads</b></p><p class="info-item">${downloads}</p></div>
    </div>
  </li>
`;

const renderImages = images => {
  const markup = images.map(createImageCard).join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
  } else {
    lightbox.refresh();
  }
};

const handleSearch = async event => {
  event.preventDefault();
  query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a valid search query.' });
    return;
  }

  gallery.innerHTML = '';
  showLoader();

  try {
    const data = await fetchImages(query);
    hideLoader();

    if (!data || data.hits.length === 0) {
      iziToast.warning({ title: 'No results', message: 'Sorry, no images found.' });
      return;
    }

    iziToast.success({ title: 'Hooray!', message: `We found ${data.totalHits} images.` });
    renderImages(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({ title: 'Error', message: 'Something went wrong.' });
  }
};

form.addEventListener('submit', handleSearch);
