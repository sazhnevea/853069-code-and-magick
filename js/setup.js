// Файл setup.js
'use strict';

var WIZARDS_COUNTER = 4;

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBallColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
  similarWizard.coatColor = getRandomElement(colorOne);
  similarWizard.eyesColor = getRandomElement(colorTwo);
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
similarWizards.forEach(function (wizard) {
  var wizardElement = renderWizard(wizard);
  fragment.appendChild(wizardElement);
});
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar')
          .classList
          .remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var popup = document.querySelector('.setup');
var openPopupButton = document.querySelector('.setup-open');
var closePopupButton = popup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target.tagName === 'INPUT') {
      return;
    }
    else {
      closePopup();
    }
  }
};
var openPopup = function () {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
var closePopup = function () {
  popup.classList.add('hidden');
};

openPopupButton.addEventListener('click', function () {
  openPopup();
});

openPopupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

closePopupButton.addEventListener('click', function () {
  closePopup();
});

closePopupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


// && evt.target.tagName === !'input'

// задание3
var setupWizard = document.querySelector('.setup-wizard');
setupWizard.querySelector('.wizard-coat').addEventListener('click', function () {
  setupWizard.querySelector('.wizard-coat').style.fill = getRandomElement(coatColor);
});

setupWizard.querySelector('.wizard-eyes').addEventListener('click', function () {
  setupWizard.querySelector('.wizard-eyes').style.fill = getRandomElement(eyesColor);
});

var fareball = document.querySelector('.setup-fireball-wrap');
fareball.addEventListener('click', function () {
  var currentFireBallColor = getRandomElement(fireBallColor);
  fareball.style.background = currentFireBallColor;
  fareball.querySelector('input').value = currentFireBallColor;
});
