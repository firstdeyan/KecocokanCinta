function calculateCompatibility() {
    var q1Value = document.querySelector('input[name="q1"]:checked').value;
    var q2Value = document.querySelector('input[name="q2"]:checked').value;
    var q3Value = document.querySelector('input[name="q3"]:checked').value;
    var q4Value = document.querySelector('input[name="q4"]:checked').value;
    var q5Value = document.querySelector('input[name="q5"]:checked').value;
    var q6Value = document.querySelector('input[name="q6"]:checked').value;
    var q7Value = document.querySelector('input[name="q7"]:checked').value;
    var q8Value = document.querySelector('input[name="q8"]:checked').value;
    var q9Value = document.querySelector('input[name="q9"]:checked').value;
    var q10Value = document.querySelector('input[name="q10"]:checked').value;

    var compatibilityScore =
        (parseInt(q1Value) +
            parseInt(q2Value) +
            parseInt(q3Value) +
            parseInt(q4Value) +
            parseInt(q5Value) +
            parseInt(q6Value) +
            parseInt(q7Value) +
            parseInt(q8Value) +
            parseInt(q9Value) +
            parseInt(q10Value)) *
        100 /
        10;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Persentase Kecocokan: " + compatibilityScore.toFixed(2) + "%";

    var interpretationDiv = document.getElementById("interpretation");
    if (compatibilityScore >= 70) {
        interpretationDiv.innerHTML = "Kamu cocok banget sama aku. Hubungan kita punya potensi yang kuat";
    } else if (compatibilityScore >= 40 && compatibilityScore < 70) {
        interpretationDiv.innerHTML = "Kamu punya beberapa kecocokan, tetapi juga tantangan yang perlu diatasi dalam hubungan.";
    } else {
        interpretationDiv.innerHTML = "Perbedaan bisa jadi hal baik. Jangan menyerah!";
    }
}
