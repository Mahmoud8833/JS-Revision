const searchForm = document.querySelector('.search-form');
const inputValue = document.querySelector('#search-field');
const cardList = document.querySelector('.cards');

let chaptersArr = [];

async function getSurah() {
  try {
    const fetchedData = await fetch(
      'https://api.quran.com/api/v4/chapters?language=ar',
    );
    if (!fetchedData.ok) {
      throw new Error(fetchedData.status);
    }

    const response = await fetchedData.json();
    const chapters = response.chapters;
    return chapters;
  } catch (error) {
    console.error(error);
  }
}

function renderSurah(data) {
  try {
    if (!data) {
      const errorMsg = document.querySelector('#error-msg');
      errorMsg.textContent = 'نعتذر لحدوث خطأ في السيرفر';
      return;
    }

    data.forEach((chapter) => {
      const surahName = chapter.name_arabic;
      const surahNumber = chapter.id;
      const verseCount = chapter.verses_count;
      const revelationPlaceEN = chapter.revelation_place;
      const revelationPlaceAR =
        revelationPlaceEN === 'makkah' ? 'مكة' : 'المدينة';
      const cardItem = document.createElement('li');
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h2');
      const number = document.createElement('p');
      const verses = document.createElement('p');
      const place = document.createElement('p');

      title.textContent = `اسم السورة: ${surahName}`;
      card.appendChild(title);
      number.textContent = `رقم السورة: ${surahNumber}`;
      card.appendChild(number);
      verses.textContent = `عدد الآيات: ${verseCount}`;
      card.appendChild(verses);
      place.textContent = `مكان النزول: ${revelationPlaceAR}`;
      card.appendChild(place);

      cardItem.appendChild(card);
      cardList.appendChild(cardItem);
    });
  } catch (error) {
    const errorMsg = document.querySelector('#error-msg');
    errorMsg.textContent = 'نعتذر لحدوث خطأ في عرض السور';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  chaptersArr = (await getSurah()) || [];
  renderSurah(chaptersArr);
});

inputValue.addEventListener('input', function (e) {
  cardList.innerHTML = '';
  const searchValue = inputValue.value.trim();

  const titles = chaptersArr.filter((card) =>
    card.name_arabic.includes(searchValue),
  );
  if (titles.length === 0) {
    cardList.innerHTML = '<p>لم يتم العثور على نتيجة</p>';
    return;
  }
  renderSurah(titles);
});
