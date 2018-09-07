"use strict";

// Función para encontrar porcentaje
function percentage(a, b) {
  return a / b * 100 > 100 ? 100 : a / b * 100;
}

window.onload = function() {


  var User = {
    name: "Donaciones",
    donationCollect: 2420,
    donationGoal: 15000
  };


  var donationUser = document.getElementById("donation--user"),
    donationProgress = document.getElementById("donation--progress"),
    donationNumber = document.getElementById("donation--number"),
    donationGoal = document.getElementById("donation--goal"),
    donationStatus = document.getElementById("donation--status"),
    donationAmount = document.getElementById("donation--amount"),
    donate = document.getElementById("donate");

 // Porcentaje para alcanzar el objetivo
  var percent = percentage(User.donationCollect, User.donationGoal);
  // Lo que tenemos hasta ahora para alcanzar el objetivo
  donationProgress.setAttribute("aria-valuenow", User.donationCollect);
  // MEta
  donationProgress.setAttribute("aria-valuemax", User.donationGoal);

  // Datos Default
  donationUser.innerHTML = "Progreso de  <span class='green'>" + User.name + "<span>";
  donationProgress.setAttribute("style", "width:" + percent + "%");
  donationNumber.setAttribute("style", "left:" + percent + "%");
  donationNumber.innerHTML = "$" + User.donationCollect;
  donationGoal.innerHTML = "Meta<br>$" + User.donationGoal;
  donationStatus.innerHTML = "<i class='fa fa-window-close red'></i> Faltan <span class='red'>$" + (User.donationGoal - User.donationCollect) + "</span> para alcanzar la meta";

  //Eventos

  //Validacion de números positivos en la Donación
  donationAmount.onkeydown = function(e) {
    if (!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode === 8)) {
      return false;
    }
  };

  // Onclick event para el boton de donar
  donate.onclick = function(e) {
    e.preventDefault();
    var newDonationCollect = (+User.donationCollect) + (+donationAmount.value);
    var newPercent = percentage(newDonationCollect, User.donationGoal);
    var newDonationNumber = User.donationCollect != User.donationGoal ? (+User.donationCollect) + (+donationAmount.value) : User.donationGoal;
    User.donationCollect = newDonationNumber;
    donationNumber.innerHTML = "$" + newDonationNumber;
    donationProgress.setAttribute("style", "width:" + newPercent + "%");
    donationNumber.setAttribute("style", "left:" + newPercent + "%");
    donationStatus.innerHTML = User.donationGoal - newDonationNumber > 0 ? "<i class='fa fa-window-close red'></i> Faltan <span class='red'>$" + (User.donationGoal - newDonationNumber) + "</span> para alcanzar la meta" : "<i class='fa fa-exclamation-circle green'></i> Haz alcanzado la meta";

  };

};