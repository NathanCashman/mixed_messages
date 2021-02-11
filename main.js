/*
The Mixed Messages application generates a random message to the user each time it is run.
The messages are all taken from a pool that is static, but potentially there is room to
make this dynamic in the future, via use of APIs which would allow the application to
update its pool of messages from 3rd party sources.
*/

// Store message components

const message = [['Money', 'Happiness', 'Love'], ['is', 'will always be', 'makes'], ['life', 'everything', 'what you make it']];

// Generate random message

const generateMessage = () => {
    const mPart1 = message[0][Math.floor(Math.random() * 3)];
    const mPart2 = message[1][Math.floor(Math.random() * 3)];
    const mPart3 = message[2][Math.floor(Math.random() * 3)];

    return `Today's message is: ${mPart1} ${mPart2} ${mPart3}. Run again to generate a new message!`;
}

// Test message generation

console.log(generateMessage());