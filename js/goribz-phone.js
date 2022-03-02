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
    .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phoneDetail => {
    console.log(phoneDetail);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phoneDetail.image}" class="card-img-top w-50 mx-auto" alt="...">
    <div class="card-body">
        <h5 class="card-title">${phoneDetail.name}</h5>
        <p class="card-text">Chipset: ${phoneDetail.mainFeatures.chipSet}</p>
        <p class="card-text">Display size: ${phoneDetail.mainFeatures.displaySize}</p>
        <p class="card-text">Memory: ${phoneDetail.mainFeatures.memory}</p>
        <p class="card-text">Bluetooth: ${phoneDetail.others.Bluetooth}</p>
        <p class="card-text">GPS: ${phoneDetail.others.GPS}</p>
        <p class="card-text">NFC: ${phoneDetail.others.NFC}</p>
        <p class="card-text">Radio: ${phoneDetail.others.Radio}</p>
        <p class="card-text">USB: ${phoneDetail.others.USB}</p>
        <p class="card-text">WLAN: ${phoneDetail.others.WLAN}</p>

        // <p class="card-text">

        //     if(phoneDetail.releaseDate === ''){
        //         <p class="card-text">No release date found</p>
        //     }
        //     else{
        //         <p class="card-text">${phoneDetail.releaseDate}</p>
        //     }
        // </p>

        // <button onclick="" type="button" class="btn btn-secondary btn-sm">Show More</button>
    </div>
    </div>
    `;
    phoneDetails.appendChild(div);
}