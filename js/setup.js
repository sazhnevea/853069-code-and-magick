// Файл setup.js
'use strict';

var WIZARDS_COUNTER = 4;

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomNumber = function (array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return randomNumber;
};

var getSimularWizard = function (name, colorOne, colorTwo) {
  var simularWizard = {};
  simularWizard.name = firstNames[getRandomNumber(name)] + ' ' + secondNames[getRandomNumber(name)];
  simularWizard.coatColor = colorOne[getRandomNumber(colorOne)];
  simularWizard.eyesColor = colorTwo[getRandomNumber(colorTwo)];
  return simularWizard;
};

// функция создания массива объектов волшебников
var getSimularWizards = function (counter) {
  var simularWizards = [];
  for (var i = 1 - 1; i <= counter - 1; i++) {
    simularWizards[i] = getSimularWizard(firstNames, coatColor, eyesColor);
  }
  return simularWizards;
};

// массив объектов волшебников
var simularWizards = getSimularWizards(WIZARDS_COUNTER);

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < simularWizards.length; i++) {
  fragment.appendChild(renderWizard(simularWizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
