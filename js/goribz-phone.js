const searchPhone = () => {
    const searchFeild = document.getElementById("search-feild");
    const searchText = searchFeild.value;

    searchFeild.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
    
    const displaySearchResult = phones => {
        const searchResult = document.getElementById('search-result');
            phones.forEach(phone => {
                // console.log(phone);
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                <div class="card w-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">Release Date: ${phone.releaseDate}</p>
                        <p class="card-text">Brand: ${phone.brand}</p>
                        <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-secondary btn-sm">Details</button>
                    </div>
                </div>
                `;

                searchResult.appendChild(div);
            })
    }
     
}

const loadPhoneDetails = mainFeatures => {
    // console.log(mainFeatures);
    const url = ` https://openapi.programming-hero.com/api/phone/${mainFeatures}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data.mainFeatures))
}

const displayPhoneDetails = phoneDetail => {
    console.log(phoneDetail);
}