function openPopup(imgElement) {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = imgElement.src;
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }