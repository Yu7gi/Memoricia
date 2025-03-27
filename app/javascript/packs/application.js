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
import "./character";


Rails.start()
Turbolinks.start()
ActiveStorage.start()

// ハンバーガーメニューのアニメーション
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

// top画面文章切り替えアニメーション
document.addEventListener("turbolinks:load", function () {
  let arrow = document.getElementById("arrow");
  let content1 = document.getElementById("content1");
  let content2 = document.getElementById("content2");

  if (arrow) { 
    arrow.addEventListener("click", function () {
      content1.classList.remove("show");
      content2.classList.add("show");
    });
  } else {
    console.error("Element with id 'arrow' not found.");
  }
});
