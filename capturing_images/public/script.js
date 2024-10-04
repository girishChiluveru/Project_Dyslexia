const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Start the webcam stream
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam:", error);
    });

// Capture a screenshot every 5 seconds and send to server
setInterval(() => {
    captureImage();
}, 5000);

function captureImage() {
    // Set the canvas size to the video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data as a base64 encoded string
    const imageData = canvas.toDataURL('image/png');

    // Send the image to the server
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Image saved:', data);
    })
    .catch(error => {
        console.error('Error saving image:', error);
    });
}
