// Getting the button and form
const btn = document.querySelector('.search');
const form = document.querySelector('.input');

// Listen to form submitting by click or enter key
form.addEventListener('submit', function (e) {
  e.preventDefault();
  prayerTimes();
});

// Function to get prayer times and add them to UI table
async function prayerTimes() {
  btn.textContent = 'جاري البحث...'; // Adding loading UX and disabling the btn
  btn.disabled = true;

  try {
    // Get the country from input and show error msg if needed
    const country = capitalize(
      document.querySelector('.country-input').value.trim(),
    );
    const countryError = document.querySelector('#country-error');
    countryError.textContent = '';
    if (!country.trim()) {
      countryError.textContent = 'الرجاء إدخال اسم دولة صحيح';
      return;
    }

    // Get the city from input and show error msg if needed
    const city = capitalize(document.querySelector('.city-input').value.trim());
    const cityError = document.querySelector('#city-error');
    cityError.textContent = '';
    if (!city.trim()) {
      cityError.textContent = 'الرجاء إدخال اسم مدينة صحيح';
      return;
    }

    // Fetch the data and check for the API response
    const fetchedData = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=5`,
    );

    if (!fetchedData.ok) {
      throw new Error(fetchedData.status);
    }

    const data = await fetchedData.json();

    // Adding a paragraph to show dates
    const description = document.querySelector('.placeholder');
    description.innerHTML = '';
    const paragraph = document.createElement('p');
    paragraph.textContent = `مواقيت الصلاة اليوم ${data.data.date.hijri.weekday.ar} الموافق ${data.data.date.gregorian.date} ميلاديا, ${data.data.date.hijri.day}-${data.data.date.hijri.month.ar}-${data.data.date.hijri.year} هجريا`;
    description.appendChild(paragraph);

    // Get prayer times and add them to the table
    const times = data.data.timings;
    const tableData = document.querySelectorAll('td');
    tableData.forEach((item) => {
      item.textContent = times[item.id];
    });
  } catch (error) {
    console.error(error);
    const cityError = document.querySelector('#city-error');
    cityError.textContent = 'حدث خطأ. تحقق من اسم المدينة أو الدولة';
  } finally {
    // Return btn to normal
    btn.textContent = 'بحث';
    btn.disabled = false;
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
