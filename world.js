document.addEventListener("DOMContentLoaded", () => {
    const lookupCountryButton = document.getElementById("lookup");
    const lookupCitiesButton = document.getElementById("lookup-cities");
    const resultDiv = document.getElementById("result");
    const countryInput = document.getElementById("country");

    // Function to make AJAX request
    const makeRequest = (lookupType) => {
        const country = encodeURIComponent(countryInput.value.trim());
        const xhr = new XMLHttpRequest();
        
        // Send request to world.php 
        xhr.open('GET', `http://127.0.0.1/info2180/info2180-lab5/world.php?country=${country}&lookup=${lookupType}`);
        
        xhr.onload = () => {
            if (xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = '<p>Error: Unable to retrieve data.</p>';
            }
        };
        
        xhr.onerror = () => {
            resultDiv.innerHTML = '<p>Request failed.</p>';
        };
        
        xhr.send();
    };

    // Handle Lookup Country button click
    lookupCountryButton.addEventListener('click', () => {
        makeRequest('country');
    });

    // Handle Lookup Cities button click
    lookupCitiesButton.addEventListener('click', () => {
        makeRequest('cities');
    });
});
