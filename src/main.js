import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const loader = document.getElementById('loader');

const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a search query.' });
    return;
  }

  clearGallery();
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
    iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again.' });
  }
});
