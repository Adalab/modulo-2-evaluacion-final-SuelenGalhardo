'use strict';

const ListElement = document.querySelector('.js__list');
const InputSelection = document.querySelector('.js__selection');
const InputBtn = document.querySelector('.js__submit');

const serverURL = `https://api.disneyapi.dev/character?page=50`;

//const GITHUB_USER = '<SuelenGalhardo>';

let animesDataList = [];
//peticion al servidor
//FETCH
/* */
fetch(serverURL)
  .then((response) => response.json())
  .then((data) => {
    animesDataList = data.data;
    renderListCharacters(animesDataList);
  });

//FUNCIONS
function renderListCharacters(list) {
  for (const eachCharacter of list) {
    ListElement.innerHTML += renderOnlyCharacter(eachCharacter);
  }
}

function renderOnlyCharacter(dataObjeto) {
  let html = `<li id="${dataObjeto._id}" class="character__card">
                 <img class="character__img js_img" src="${dataObjeto.imageUrl}" alt="Disney Characters" />
                <p class="character__name js_name">${dataObjeto.name}</p>
                 
              </li>`;
  return html;
}

//Eventos
/*linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);*/
