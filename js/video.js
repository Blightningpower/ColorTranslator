var video = document.querySelector("#videoElement");

  function open_camera() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
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

  const colorBox = document.getElementById('color-box');
    const colorPicker = document.getElementById('color-picker');

    // Show color picker when color box is clicked
    colorBox.addEventListener('click', () => {
      colorPicker.click();
    });

    // Update color box background color when a color is selected
    colorPicker.addEventListener('input', () => {
      const color = colorPicker.value;
      colorBox.style.backgroundColor = color;
    });