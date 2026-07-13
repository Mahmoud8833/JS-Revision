import { fetchHadiths } from './api.js';
import {
  getElements,
  renderHadithCard,
  renderHadithsList,
  renderModal,
} from './render.js';

const [input, select, resultsList, modal] = getElements(
  '#searchInput',
  '#booksSelect',
  '#resultsList',
  '#hadithModal',
);

const hadiths = await fetchHadiths({
  book: select.value,
  hadithEnglish: input.value,
});

renderHadithsList(hadiths, input, select, resultsList, modal);
