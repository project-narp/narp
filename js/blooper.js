var blooperReel = [

  {
    title: 'For Loop',
    explanation: ' A for loop is a type of loop that executes over  a given range and performs given actions over the course of that range.',
    example: `var lifespan = 80
    living = false;
    memories = [];
    for (year = 0; year < lifespan; year ++){
    living = true;  
    memories.push(year);
    }
    living = false;
    memories = [];
    `,
    question: 'Usain Bolt is fast. We already know that.  But he also loves the thrill of winning a race in a dramatic fashion, running just fast enough to beat you closely. Since i\'m slow, he\'s agreed to run a much further distance than me, to give me a chance... Usain has the following formula up in his head to help figure out how fast he should run. Answer with a boolean true or false... will Bolt inevitably win?',
    problem: `
  var BoltWillWin = false;
  var howFastShouldUsainBoltRunToBeatMe = 1.1;
  var meRunningTime = function (){
  var timeIveTakenRunning = 0;
  var distanceToRun = 100;
  for (distanceToRun; distanceToRun > 0; distanceToRun --){
    timeIveTakenRunning ++;
  }
  console.log(timeIveTakenRunning, 'time i take');
  return timeIveTakenRunning;
  };
  var usainBoltRunninTime = function (){
  var timeHesTakenRunning = 0;
  var distanceToRun = 160;
  for (distanceToRun; distanceToRun >= 0; distanceToRun = distanceToRun - howFastShouldUsainBoltRunToBeatMe){
    timeHesTakenRunning ++;
  }
  console.log(timeHesTakenRunning, 'time he takes');
  return timeHesTakenRunning;
  };
  var BoltWantsToWinAndMakeItCLose = function (){
  if (usainBoltRunninTime() > meRunningTime()){
    howFastShouldUsainBoltRunToBeatMe = howFastShouldUsainBoltRunToBeatMe + .1;
  }
  else if (usainBoltRunninTime() < meRunningTime()){
    BoltWillWin = true;
  }
  else {
    console.log('tie!');
  }
  };
  while (BoltWillWin === false){
  BoltWantsToWinAndMakeItCLose();
  console.log('Bolt wins!');
  }
  `,
    solution: 'true',
    solved: false,
    group: 1
  },
  {
    title: 'While Loop',
    explanation: 'A while loop will continue to perform an action so long as a given condition is met',
    example:
  `var food = [
  'boiled buns',
  'goose flesh',
  'orange peel pie',
  'cobbled cream',
  'horse sized snickers',
  'buckets of brie',
  'popping corn',
  'mushed potatoes',
  'milkshake buffet'
];
var stomach = [];
var hungry = true;
var checkHunger = function(){
  if(stomach.length >= 5){
    hungry = false;
  }
};
var eat = function (){
  checkHunger();
  var eating = food[Math.floor(Math.random() * food.length)];
  var eaten = food.splice(eating, 1);
  var digestion = stomach.push(eating);
};
while(hungry === true){
  eat();
}`,
    question: 'What sequence of events takes place? Enter a boolean true or false on whether you get pulled over or not',
    problem: `
var speed = 45;
var speedlimit = 60;
var distraction = false;
var fun = false;

var accelerate = function(){
  speed++;
};
var brake = function(){
  speed --;
};
while (speed < speedlimit && distraction === false){
  accelerate();
}
while (speed > speedlimit && distraction === false){
  brake();
}
var airDrummingToASongYouLove = function (){
  fun = true;
  distraction = true;
};
airDrummingToASongYouLove();
var copWillPullYouOver = 65;
while(distraction === true){
  accelerate();
  if (speed > copWillPullYouOver){
    distraction = false;
    while (speed > 0){
      brake();
      if (speed === 0){
        console.log('you got pulled over and this cop looks like he is in a ticket writing mood!');
      }
    }
  }
}`,
    solution: 'true',
    solved: false,
    group: 1,
  },

];
