'use strict';

(function () {
  var pinMain = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormElements = adForm.querySelectorAll('fieldset');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');
  var address = document.querySelector('#address');

  for (var i = 0; i < adFormElements.length; i++) {
    adFormElements[i].disabled = true;
  }

  address.value = pinMain.offsetLeft + ', ' + pinMain.offsetTop;

  var validateRoomCapacity = function () {
    if (capacity.value <= roomNumber.value) {
      capacity.setCustomValidity('');
    } else {
      capacity.setCustomValidity('Количество комнат не соответствует Количество мест!');
    }

    adForm.reportValidity();
  };


  capacity.addEventListener('change', validateRoomCapacity);
  roomNumber.addEventListener('change', validateRoomCapacity);

})();

