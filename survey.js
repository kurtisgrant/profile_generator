const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which mealtime is your favourite? ', (answer4) => {
        rl.question(`What's your favourite thing to eat for ${answer4}? `, (answer5) => {
          rl.question('Which sport is your favourite? ', (answer6) => {
            rl.question('What is your superpower? ', (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, eating ${answer5} for ${answer4}, prefers ${answer6} over any other sport and is amazing at ${answer7}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
