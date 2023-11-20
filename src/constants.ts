export const app = document.querySelector('#app');
export const header: HTMLElement = document.createElement('header');
export const main: HTMLElement = document.createElement('main');
export const addBtn: HTMLButtonElement = document.createElement('button');
export const removeBtn: HTMLButtonElement = document.createElement('button');
export const firstName: HTMLInputElement = document.createElement('input');
export const surname: HTMLInputElement = document.createElement('input');
export const age: HTMLInputElement = document.createElement('input');
export const gender: HTMLSelectElement = document.createElement('select');
export const optionMale: HTMLOptionElement = document.createElement('option');
export const optionFemale: HTMLOptionElement = document.createElement('option');
export const userCard: HTMLElement = document.createElement('div');
export const checkBox: HTMLInputElement = document.createElement('input');
export const userCardContainer: HTMLElement = document.createElement('div');
export const showUserCardBtn: HTMLButtonElement =
  document.createElement('button');

//! OPTION MALE ATTRIBUTES
optionMale.value = 'male';
optionMale.text = 'Male';

//! OPTION FEMALE ATTRIBUTES
optionFemale.value = 'female';
optionFemale.text = 'Female';
//! ADD BUTTON ATTRIBUTES
addBtn.textContent = 'Add user';
addBtn.className = 'add__btn';
//! REMOVE BUTTON ATTRIBUTES
removeBtn.textContent = 'Remove user';
removeBtn.className = 'remove__btn';
//! USER CARD ATTRIBUTES
userCardContainer.className = 'user__card--container';
userCard.className = 'user__card';

showUserCardBtn.className = 'show__user--btn';
showUserCardBtn.textContent = 'show user info';

//! INPUTS ATTRIBUTES
firstName.id = 'name';
firstName.placeholder = 'name';
surname.id = 'surname';
surname.placeholder = 'surname';
age.id = 'age';
age.placeholder = 'age';
gender.id = 'gender';
checkBox.id = 'checkbox';
checkBox.type = 'checkbox';
