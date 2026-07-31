const cardMap = new Map();

function getElements() {
  return {
    input: document.querySelector('#searchInput'),
    select: document.querySelector('#booksSelect'),
    results: document.querySelector('#resultsList'),
    modal: document.querySelector('#hadithModal'),
  };
}

function renderHadithCard(hadith) {
  const existingCard = cardMap.get(hadith.id);
  if (existingCard) {
    return existingCard;
  }
  const card = document.createElement('li');
  cardMap.set(hadith.id, card);
  card.className = 'hadith-card';
  const title = document.createElement('h3');
  title.textContent = hadith.headingArabic;
  const description = document.createElement('p');
  description.textContent = hadith.hadithArabic;
  card.appendChild(title);
  card.appendChild(description);
  return card;
}

function renderHadithsList(hadiths, getElements) {
  const list = getElements.results;
  cardMap.forEach((card, id) => {
    if (!hadiths.some((hadith) => hadith.id === id)) {
      card.remove();
      cardMap.delete(id);
    }
  });
  hadiths.forEach((hadith, index) => {
    const card = renderHadithCard(hadith);
    const currentAtIndex = list.children[index];
    if (currentAtIndex !== card) {
      list.insertBefore(card, currentAtIndex || null);
    }
  });
}

function renderModal(hadith, getElements) {
  const modal = getElements.modal;
  modal.innerHTML = `
    <h2>${hadith.title}</h2>
    <p>${hadith.description}</p>
  `;
  modal.style.display = 'block';
}

export { getElements, renderHadithCard, renderHadithsList, renderModal };
