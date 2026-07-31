import { fetchHadiths } from './api.js';
import {
  getElements,
  renderHadithCard,
  renderHadithsList,
  renderModal,
} from './render.js';

const hadiths = await fetchHadiths({
  book: getElements().select.value,
  hadithEnglish: getElements().input.value,
});

renderHadithsList(hadiths, getElements());
