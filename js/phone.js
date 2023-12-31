const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // 1. get container
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container cards before adding new cards
  phoneContainer.textContent = "";

// display show button if there are more than 12 button
const showAllContainer = document.getElementById('show-all-container')
if(phones.length>12){
  showAllContainer.classList.remove('hidden')
}
else{
  showAllContainer.classList.add('hidden')
}


// display 1st only 12 phones
  phones =phones.slice(0,12)

  // console.log(phones.length);
  // console.log(phones);
  phones.forEach((phone) => {
    // console.log(phone);
    // 2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-6 shadow-xl`;
    // set innerHTML
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
};

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};

// loadPhone();
