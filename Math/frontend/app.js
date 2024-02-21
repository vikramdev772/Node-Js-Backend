const fact = document.querySelector("#f");
const sum = document.querySelector("#s");
const input = document.querySelector("#inputNumber");
const op = document.getElementById("output");
op.style.color = " rgb(55, 238, 23)";





function processData(response) {
    // Check if the response status is OK (200)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON and log it
    response.text().then((data) => {
        console.log("\n\t output : " + data);
        op.innerHTML = `<h5>${data}</h5>`;

    });
}

let requestOptions = {
    method: "GET"
};

function factorial() {
    const n = input.value;
    fetch(`http://localhost:4200/fact?value=${n}`, requestOptions)
        .then(processData)
        .catch((error) => {
            console.error("Error occurred:", error);
        });
}
function sumofn() {
    const n = input.value;
    fetch(`http://localhost:4200/sum`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: n }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Directly parse the response body as JSON
    })
    .then(data => {
        console.log(data);
        const numericSum = Number(data.sum); // Ensure numeric conversion
        op.innerHTML = `<h6 style="font-size: 1.5em; font-weight: 900;">sum : ${numericSum}</h6>`;
    })
    .catch(error => console.error('Error:', error));
}
