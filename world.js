document.addEventListener('DOMContentLoaded', () => {
    const lookupButton = document.getElementById('lookup');
    const resultDiv = document.getElementById('result');
    const countryInput = document.getElementById('country');

    lookupButton.addEventListener('click', () => {
        const country = countryInput.value.trim();

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://127.0.0.1/info2180/info2180-lab5/world.php?country=${encodeURIComponent(country)}`, true);

        xhr.onload = () => {
            if (xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = "<p>Error fetching data from the server.</p>";
            }
        };

        xhr.onerror = () => {
            resultDiv.innerHTML = "<p>Request failed. Please try again.</p>";
        };

        // Send the AJAX request
        xhr.send();
    });
});
