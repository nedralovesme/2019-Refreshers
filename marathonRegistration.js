let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runnerAge = 18;

if (runnerAge > 18 && regEarly === true){
  raceNumber += 1000;
};
console.log(raceNumber);

if (runnerAge > 18 && regEarly === true){
  console.log(`Runner number ${raceNumber}, your race begins at 9:30am.`);
}
else if (runnerAge > 18 && regEarly === false){
  console.log(`Runner number ${raceNumber}, your race begins at 11:00am.`);
}
else if (runnerAge < 18){
  console.log(`Runner number ${raceNumber}, your race beings at 12:30am.`);
}
else {
  console.log("See registration desk for more information about your totally unique situation lol welcome to being 18")
};
