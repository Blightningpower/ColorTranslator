var video = document.querySelector("#videoElement");

  function open_camera() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) { // true or false 0 of 1
      navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
  }

  function handleVideo(stream) {
    video.srcObject = stream;
    video.play();
  }

  function videoError(e) {
    alert("OOPS, there's an error");
  }