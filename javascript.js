initialize = async function() {
    const url = "https://restcountries.eu/rest/v2/all";
    let countries = await getCountries(url);
    let flags = [];
    let names = [];
    let i;
    for(i = 0; i < countries.length; i++) {  
        flags.push(countries[i].flag);
        names.push(countries[i].name);
    }

    showFlags(flags, names);

}

getCountries = function(url){
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        return json;
      });
  
}

showFlags = function(flags, names){
    let list = document.getElementsByClassName('flags-list');
    let j;
    for(j = 0; j < flags.length; j++){
        let listItem = document.createElement('li');
        let flagImg = document.createElement('img');
        flagImg.setAttribute('src', flags[j]);
        flagImg.setAttribute('alt', 'na');
        flagImg.setAttribute('height', '32px');
        flagImg.setAttribute('width', '64px');
        listItem.value = names[j];
        listItem.appendChild(flagImg);
        list[0].appendChild(listItem);

    }
}

window.onload = initialize;