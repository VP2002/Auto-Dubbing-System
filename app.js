// Function to start the dubbing process
function startDubbing() {
    // Get the file input element
    const fileInput = document.getElementById('file');


    // Check if no file is selected
    if (!fileInput.files.length) {
        // Display an alert and exit the function if no file is selected
        alert('Please Upload Video');
        return;
    }


    // Create FormData object from the upload form
    const formData = new FormData(document.getElementById('uploadForm'));


    // Display loading spinner or progress bar
    document.getElementById('uploadPage').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('processingInfo').style.display = 'block';


    // Simulate a delay (replace with actual dubbing process)
    setTimeout(() => {
        // Hide loading spinner or progress bar after the simulated delay
        document.getElementById('loading').style.display = 'none';
        document.getElementById('processingInfo').style.display = 'none';


        // Display results page
        document.getElementById('resultsPage').style.display = 'block';


        // Display links or previews of dubbed videos (replace with actual content)
        const videoLinksContainer = document.getElementById('videoLinks');
        videoLinksContainer.innerHTML = `
            <p>Links or previews of dubbed videos:</p>
            <ul>
                <li><a href="#">English Dubbed Video</a></li>
                <li><a href="#">Spanish Dubbed Video</a></li>
                <li><a href="#">French Dubbed Video</a></li>
                <li><a href="#">German Dubbed Video</a></li>
            </ul>
        `;
    }, 3000); // Simulated 3-second delay (adjust as needed)
}


// Function to download a zipped file containing all dubbed videos
function downloadZip() {
    // Perform the logic to create and download the zipped file (replace with actual content)
    alert('Downloading zipped file containing all dubbed videos.');


    // Use the Fetch API to request the server to create and send the zipped file.
    // Example:
    // fetch('/download-zip', {
    //     method: 'GET',
    // })
    // .then(response => response.blob())
    // .then(blob => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'dubbed_videos.zip';
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     window.URL.revokeObjectURL(url);
    // })
    // .catch(error => console.error('Error:', error));
}


