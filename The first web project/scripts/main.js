let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\aduiduidui1.png.jpg') {
      myImage.setAttribute('src', 'images\aduiduidui2.png.jpg');
    } else {
      myImage.setAttribute('src', 'images\aduiduidui1.png.jpg');
    }
}
