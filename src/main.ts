import { User } from './User';
import {
  app,
  addBtn,
  removeBtn,
  firstName,
  surname,
  age,
  gender,
  optionFemale,
  optionMale,
  header,
  main,
  userCard,
  userCardContainer,
  showUserCardBtn,
  checkBox,
} from './constants';

import './style.css';

const users: [] = [];

addBtn.addEventListener('click', () => {
  const firstName: HTMLInputElement = document.getElementById('name');
  const surname: HTMLInputElement = document.getElementById('surname');
  const gender: HTMLInputElement = document.getElementById('gender');
  const age: HTMLInputElement = document.getElementById('age');

  if (
    firstName.value.length &&
    surname.value.length &&
    age.value.length !== 0
  ) {
    const user: {} = new User({
      firstName: firstName.value,
      surname: surname.value,
      age: parseInt(age.value),
      gender: gender.value,
      checked: false,
    });
    users.push(user);
    firstName.value = '';
    surname.value = '';
    age.value = '';
    console.log(users);
    header.append(showUserCardBtn);
  }
});
console.log(users);

showUserCardBtn.addEventListener('click', () => {
  for (let i = 0; i < users.length; i++) {
    if (users.length !== 0) {
      userCard.innerHTML = `<h3>Name:</h3>
      <p> ${users[i].firstName}</p>
      <h3>Surname:</h3>
      <p>${users[i].surname} </p>
      <h3>age:</h3>
      <p>${users[i].age} </p>
      <h3> gender:</h3>
      <p>${users[i].gender} </p>`;
    }
  }

  main.appendChild(userCardContainer);
  userCardContainer.append(userCard, checkBox);
});
checkBox.addEventListener('change', () => {
  if (checkBox) {
    for (let i = 0; i < users.length; i++) {
      users[i].checked = true;
      console.log(users[i]);
    }
  } else {
    for (let i = 0; i < users.length; i++) {
      users[i].checked = false;
      console.log(users[i]);
    }
  }
});

removeBtn.addEventListener('click', () => {
  users.pop();
  if (users.length <= 0) {
    main.remove(showUserCardBtn);
  }
  console.log(users);
});

app?.append(header, main);
gender.append(optionMale, optionFemale);
header.append(addBtn, removeBtn, firstName, surname, age, gender);
