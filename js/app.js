document.addEventListener('DOMContentLoaded', () => {


  const handleFormSubmit = function(event){
    event.preventDefault()

    firstName = event.target.firstName.value;
    lastName = event.target.lastName.value;
    club = event.target.club.value;
    value = event.target.value.value;

    const playerCard = document.createElement('div');

    const firstNameElement = document.createElement('h3');
      firstNameElement.textContent = firstName;
    const lastNameElement = document.createElement('h3');
      lastNameElement.textContent = lastName;
    const clubElement = document.createElement('p');
      clubElement.textContent = club;
    const valueElement = document.createElement('p');
      valueElement.textContent = value;

    playerCard.appendChild(firstNameElement);
    playerCard.appendChild(lastNameElement);
    playerCard.appendChild(clubElement);
    playerCard.appendChild(valueElement);

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
