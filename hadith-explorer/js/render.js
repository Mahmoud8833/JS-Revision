function getElements(input, select, results, modal) {
  return [
    document.querySelector(input),
    document.querySelector(select),
    document.querySelector(results),
    document.querySelector(modal),
  ];
}

function renderHadithCard(hadith) {
  const card = document.createElement('li');
  card.className = 'hadith-card';
  card.innerHTML = `
    <h3>${hadith.title}</h3>
    <p>${hadith.description}</p>
  `;
  return card;
}

function renderHadithsList(hadiths, ...getElements) {
  const list = getElements[2];
  list.innerHTML = '';
  hadiths.forEach((hadith) => {
    const card = this.renderHadithCard(hadith);
    list.appendChild(card);
  });
}

function renderModal(hadith, ...getElements) {
  const modal = getElements[3];
  modal.innerHTML = `
    <h2>${hadith.title}</h2>
    <p>${hadith.description}</p>
  `;
  modal.style.display = 'block';
}

export { getElements, renderHadithCard, renderHadithsList, renderModal };
