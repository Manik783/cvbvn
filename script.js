const staticImage = document.getElementById('static-image');
const modelViewer = document.getElementById('model-viewer');

// Load the 3D model viewer
function load3D() {
    staticImage.style.display = 'none'; // Hide the static image
    modelViewer.style.display = 'block'; // Show the model viewer
}

// Activate AR mode
function loadAR() {
    load3D(); // Load the 3D model first
    if (modelViewer.activateAR) {
        modelViewer.activateAR(); // Trigger AR mode
    } else {
        alert('AR is not supported on this device.');
    }
}
