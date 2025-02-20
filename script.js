// Random message generator - conspiracy theory edition

// Different parts of the messages to be used:
const start = [
    "They don't want you to know this, but",
    "Wake up, sheeple! The truth is",
    "Hidden in plain sight is the fact that",
    "Ever wondered why nobody talks about how",
    "The government has been covering this up for years,",
    "It's all connected: the pyramids, the moon, and",
    "What if I told you",
    "The so-called 'scientists' don't want you asking questions about",
    "The truth is out there, and it's worse than you think:",
    "History books erased the fact that"
];
const middle = [
    "pigeons are actually government surveillance drones.",
    "the moon is just a giant screensaver controlled by NASA.",
    "all coffee shops are secretly collectin fingerprints for the Illuminati.",
    "lizard people run all major fast food chains.",
    "the internet was actually invented in ancient Egypt.",
    "your phone listens to you even when it's turned off, especially when it's off.",
    "all pineapples used to be carnivorous until they were genetically modified.",
    "cheese was originally an alien technology before it was stolen by humans.",
    "octopuses are proof that aliens exist, they have three hearts and blue blood!",
    "the number 7 doesn't actually exist, and we just pretend it does.",
    "WiFi signals are actually a government mind-control experiment.",
    "sharks don't attack people randomly, they are programmed to take out specific targets.",
    "airplane mode doesn't actually turn off anything, it just makes you feel safe.",
    "every time you blink, the simulation resets a little bit.",
    "the dinosaurs never went extinct, they just moved underground."
];
const end = [
    "Wake up, sheeple!",
    "The truth is out there, but they don't want you to see it.",
    "Do your own research before it's too late!",
    "Start questioning everything... except this message.",
    "Spread the word before they take this down!",
    "Trust no one. Especially your toaster.",
    "Once you know this, there's no turning back.",
    "They are already watching you, act normal.",
    "Protect yourself with aluminium foil. Lots of it.",
    "Only those who can see the patterns will survive."
];


function generateMessage() {
    const randStart = Math.floor((Math.random() * start.length) - 1);
    const randMiddle = Math.floor((Math.random() * middle.length) - 1);
    const randEnd = Math.floor((Math.random() * end.length) - 1);

    return `${start[randStart]} ${middle[randMiddle]}` + "\n" + `${end[randEnd]}`;
}

console.log(generateMessage());