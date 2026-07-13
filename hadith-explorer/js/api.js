import { API_KEY } from './config.js';

async function fetchHadiths({ book, hadithEnglish, requestID } = {}) {
  const params = new URLSearchParams();
  params.set('apiKey', API_KEY);
  if (book) {
    params.set('book', book);
  }
  if (hadithEnglish) {
    params.set('hadithEnglish', hadithEnglish);
  }
  const url = `https://hadithapi.com/api/hadiths?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data.hadiths.data;
}

export { fetchHadiths };
