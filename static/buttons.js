function buttonClick(number) {

  var artistsContent = document.getElementById("artists-ranking-content");
  var tracksContent = document.getElementById("tracks-ranking-content");

  if (number == 1) {
    artistsContent.style.display = "block";
    tracksContent.style.display = "none";
  }

  if (number == 2) {
    tracksContent.style.display = "block";
    artistsContent.style.display = "none";
  }
}