    //achei no stack overfloww isso é só pra pegar a img 
    //https://stackoverflow.com/questions/12024770/access-camera-from-a-browser

    var front = false;
    var video = document.querySelector('video');
    document.getElementById('flipCamera').onclick = function () { front = !front; };
    var constraints = { video: { facingMode: (front ? "user" : "environment"), width: 900, height: 500 } };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); })