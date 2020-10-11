function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;
    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/article', {
        method: "POST",
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        document.getElementById("#score").innerHTML = `Polarity: ${res.score_tag}`;
        document.getElementById("#subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("#confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("#irony").innerHTML = `Irony: ${res.irony}`;
    })
}

export { handleSubmit }
