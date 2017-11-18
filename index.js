const { startStream } = require('./src/streams');
const { shuffleArray } = require('./src/array-helpers');
const { sendSMS } = require('./src/sms');

const peopleArray = [];

function lineReader(line) {
  peopleArray.push(line);
}

function finishReader() {
  const shuffledArray = shuffleArray(peopleArray);
  pairPeople(shuffledArray);
}

function pairPeople(shuffledArray) {
  shuffledArray.forEach((giver, index) => {
    let gifted;
    if (index < (shuffledArray.length - 1)) {
      gifted = shuffledArray[index + 1];
    } else {
      gifted = shuffledArray[0];
    }
    handleGifters(giver, gifted);
  });
}

function handleGifters(giver, gifted) {
  const message = getMessage(giver, gifted);
  sendSMS(message, giver[1]);
}

function getMessage(giver, gifted) {
  return `${giver[0]} voce tirou: ${gifted[0]}! Presente: ${gifted[2]}`;
}


startStream(lineReader, finishReader);