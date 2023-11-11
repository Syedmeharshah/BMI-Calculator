window.calculateBMI = function calculateBMI() {
    let feet = document.querySelector("#heightFeet").value;
    let inch = document.querySelector("#heightInch").value;

    let weight = document.querySelector("#weightKg").value;

    feet = +feet;
    inch = +inch;

    inch += feet * 12;

    let meter = (inch * 2.54) / 100;

    let meterSquare = meter * meter;

    let bodyMass = weight / meterSquare;

    let idealWeight = 22 * meterSquare;

    let weightLose = (weight - idealWeight).toFixed(2);
    let weightGain = (idealWeight - weight).toFixed(2);

    let result = "Your BMI indicates: ";

    if (bodyMass > 30) {
        result += `Obesity - You should aim to lose ${weightLose}kg to reach a healthier range.`;
    } else if (bodyMass > 25) {
        result += `Overweight - You should aim to lose ${weightLose}kg to achieve a healthier range.`;

    } else if (bodyMass > 18.5) {
        if (bodyMass > 22) {
            result += `Within Normal Range - Consider losing ${weightLose}kg for an ideal fitness level.`;
            ;
        } else if (parseInt(bodyMass) === 22) {
            result += `Perfectly Fit - You are within the optimal range for your height and weight`;
        } else {
            result += `Within Normal Range - Consider gaining ${weightGain}kg for an ideal fitness level.`;
        }
    } else {
        result += `Underweight - Aim to gain ${weightGain}kg to reach a healthier range.`;
    }
    document.querySelector("#output").innerHTML = `Ideal weight: ${idealWeight.toFixed(2)}kg`;
    document.querySelector("#result").innerHTML = result;
}
