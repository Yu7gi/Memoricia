// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "jquery";
import "popper.js";
import "bootstrap";
import "../stylesheets/application"; 


Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuContent = document.getElementById("menuContent");

  if (menuToggle && menuContent) {
    // 既存のイベントリスナーを削除して登録し直す
    menuToggle.removeEventListener("click", toggleMenu);
    document.removeEventListener("click", closeMenu);

    // 新しくイベントリスナーを登録
    menuToggle.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
  }

  function toggleMenu() {
    menuContent.classList.toggle("show");
    menuToggle.classList.toggle("open");
  }

  function closeMenu(event) {
    if (!menuToggle.contains(event.target) && !menuContent.contains(event.target)) {
      menuContent.classList.remove("show");
      menuToggle.classList.remove("open");
    }
  }
});