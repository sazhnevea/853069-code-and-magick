// Файл setup.js
'use strict';

var WIZARDS_COUNTER = 4;

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}
function getRandomElement(array) {
  var length = array.length;
  var randomIndex = getRandomNumber(length - 1);

  return array[randomIndex];
}

var getSimilarWizard = function (name, colorOne, colorTwo) {
  var similarWizard = {};
  similarWizard.name = getRandomElement(firstNames) + ' ' + getRandomElement(secondNames);
  similarWizard.coatColor = colorOne[getRandomElement(colorOne)];
  similarWizard.eyesColor = colorTwo[getRandomElement(colorTwo)];
  return similarWizard;
};

// функция создания массива объектов волшебников
var getSimilarWizards = function (counter) {
  var similarWizards = [];
  for (var i = 0; i < counter; i++) {
    similarWizards[i] = getSimilarWizard(firstNames, coatColor, eyesColor);
  }
  return similarWizards;
};

// массив объектов волшебников
var similarWizards = getSimilarWizards(WIZARDS_COUNTER);

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
                            .content
                            .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar')
.classList
.remove('hidden');
