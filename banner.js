window.onload = rotate;
var theAd = 0;
var adImages = new 
Array("superhero-banners/superhero1.png", "superhero-banners/superhero2.png", "superhero-banners/superhero3.png", "superhero-banners/superhero4.png", "superhero-banners/superhero5.png", "superhero-banners/superhero6.png",
);
function rotate() {
theAd++;
if (theAd == adImages.length) {
theAd = 0;
}
document.getElementById("adBanner").src = adImages[theAd];
setTimeout(rotate, 3 * 1000);
}