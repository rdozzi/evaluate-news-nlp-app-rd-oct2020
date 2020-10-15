function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value;
    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/article', {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "text/plain"
        },

    })
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        document.getElementById("score").innerHTML = `Polarity: ${scoreConverter(res.score_tag).toUpperCase()}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
}

function scoreConverter(score_tag) {
    if(score_tag === "P+"){
        return "Strongly Positive";
    } else if (score_tag === "P"){
        return "Positive";
    } else if (score_tag === "NEU"){
        return "Neutral";
    } else if (score_tag === "N"){
        return "Negative";
    } else if (score_tag === "N+"){
        return "Strongly Negative";
    } else{
        return "Without Sentiment";
    }
}

export { handleSubmit, scoreConverter }
