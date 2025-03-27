document.addEventListener("DOMContentLoaded", function() {
  const bgColorInput = document.getElementById("character_background_color");
  const formColorInput = document.getElementById("character_form_color");
  const textColorInput = document.getElementById("character_text_color");
  const bgImageInput = document.getElementById("character_background_image");
  const resetBgButton = document.getElementById("reset_background");
  const previewContainer = document.getElementById("character_preview_container");
  const previewForm = document.querySelector(".character-container");

  // 背景色の変更
  if (bgColorInput && previewContainer) {
    bgColorInput.addEventListener("input", function(event) {
      if (!previewContainer.style.backgroundImage) {
        previewContainer.style.backgroundColor = event.target.value;
      }
    });
  }

  // フォーム色の変更
  if (formColorInput && previewForm) {
    formColorInput.addEventListener("input", function(event) {
      previewForm.style.backgroundColor = event.target.value;
    });
  }

  // 文字色の変更
  if (textColorInput && previewForm) {
    textColorInput.addEventListener("input", function(event) {
      previewForm.style.color = event.target.value;
    });
  }

  // 背景画像の変更
  if (bgImageInput && previewContainer) {
    bgImageInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          previewContainer.style.backgroundImage = `url('${e.target.result}')`;
          previewContainer.style.backgroundSize = "cover";
          previewContainer.style.backgroundPosition = "center";
          previewContainer.style.backgroundColor = "transparent"; // 背景色を無効化
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 背景画像の削除
  if (resetBgButton && previewContainer) {
    resetBgButton.addEventListener("click", function() {
      previewContainer.style.backgroundImage = ""; // 背景画像を削除
      previewContainer.style.backgroundColor = bgColorInput.value || "#ffffff"; // 背景色を適用
      bgImageInput.value = ""; // ファイル選択をリセット
    });
  }
});