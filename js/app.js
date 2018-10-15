document.addEventListener('DOMContentLoaded', () => {



  const handleFormSubmit = function(event){
    event.preventDefault()

    const findSelection = function(field) {
      for (pos of position) {
        if (target.input[pos].checked){
          return target.input[pos].value;
        }
      }
    }

    firstName = event.target.firstName.value;
    lastName = event.target.lastName.value;
    club = event.target.club.value;
    value = event.target.value.value;
    position = event.findSelection('position');


    // radios = event.findSelection('position')

    // const findSelection(field)=function(){
    //   for (var i = 0, length = radios.length; i < length; i++)
    //   {if (radios[i].checked){
    //   return radios[i].value;
    //   break;
    //     }
    //   }
    // }
    // var position = findSelection('position')
    //   const findSelection(field) {
    //
    //   }



    const playerCard = document.createElement('div');

    const firstNameElement = document.createElement('h3');
      firstNameElement.textContent = firstName;
    const lastNameElement = document.createElement('h3');
      lastNameElement.textContent = lastName;
    const clubElement = document.createElement('p');
      clubElement.textContent = club;
    const valueElement = document.createElement('p');
      valueElement.textContent = value;
    const positionElement = document.createElement('p');
        positionElement.textContent = radios;

    playerCard.appendChild(firstNameElement);
    playerCard.appendChild(lastNameElement);
    playerCard.appendChild(clubElement);
    playerCard.appendChild(valueElement);
    playerCard.appendChild(positionElement);

    const list = document.querySelector('#player-list');
    list.appendChild(playerCard);

    form.reset()

  }

  const handleDeleteButtonClick = function(event){
    const playerList = document.querySelector('#player-list');
      while (playerList.firstChild) {playerList.removeChild(playerList.firstChild);
      }
  }


  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteButtonClick)


})
