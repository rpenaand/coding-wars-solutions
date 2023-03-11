// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmiVal = weight / height ** 2;
  if (bmiVal <= 18.5) return 'Underweight';
  else if (bmiVal <= 25.0) return 'Normal';
  else if (bmiVal <= 30.0) return 'Overwieght';
  else return 'Obese';
}

console.log(bmi(80, 1.8));
