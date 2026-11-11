// Hilarious, kid-friendly jokes database for the Cousins Funhouse!
// Over 65+ jokes spanning funny cousin moments, animal puns, knock-knocks, and food giggles.

const JOKES_DATABASE = [
  {
    id: 1,
    category: "Cousin Chaos",
    setup: "Why did the eldest cousin Aaditi bring a ruler to bed?",
    punchline: "To see how long she could sleep before the little ones woke her up! 📏😴",
    emoji: "👑"
  },
  {
    id: 2,
    category: "Food Fun",
    setup: "Why did the cookie go to the hospital?",
    punchline: "Because Ninad took a huge bite and said it crumbled under pressure! 🍪🚑",
    emoji: "🍪"
  },
  {
    id: 3,
    category: "Animal Giggles",
    setup: "What do you call a sleeping dinosaur?",
    punchline: "A dino-snore! 🦖💤",
    emoji: "🦕"
  },
  {
    id: 4,
    category: "Cousin Chaos",
    setup: "Why does Devansh keep his LEGO bricks in the freezer?",
    punchline: "Because he wanted to build some really cool spaceships! ❄️🚀",
    emoji: "🧱"
  },
  {
    id: 5,
    category: "Music & Drama",
    setup: "Why did Tapasya sing to her vegetables at dinner?",
    punchline: "Because they had great beets! 🎶🥦💃",
    emoji: "🎤"
  },
  {
    id: 6,
    category: "Sports & Speed",
    setup: "Why was Virat running around the dining table 100 times?",
    punchline: "He said he was practicing for the Olympic Nap Championship! 🏃‍♂️💨",
    emoji: "⚡"
  },
  {
    id: 7,
    category: "Animal Giggles",
    setup: "What do you call a cheese that isn't yours?",
    punchline: "Nacho cheese! (Hands off, Ninad!) 🧀🫵",
    emoji: "🧀"
  },
  {
    id: 8,
    category: "School Shenanigans",
    setup: "Why did the math book look so deeply depressed?",
    punchline: "Because it had way too many problems to solve! 📚😭",
    emoji: "📐"
  },
  {
    id: 9,
    category: "Silly Puns",
    setup: "Why can't Elsa have a balloon?",
    punchline: "Because she will LET IT GOOO! 🎈❄️",
    emoji: "❄️"
  },
  {
    id: 10,
    category: "Animal Giggles",
    setup: "What kind of room has no doors and no windows?",
    punchline: "A mushroom! 🍄🚪",
    emoji: "🍄"
  },
  {
    id: 11,
    category: "Cousin Chaos",
    setup: "How do the cousins know Aaditi is coming down the stairs?",
    punchline: "Her crown clinks and all the snacks mysteriously try to hide! 👑🍫",
    emoji: "👀"
  },
  {
    id: 12,
    category: "Tech & Science",
    setup: "Why was the computer cold?",
    punchline: "Because Devansh left all its Windows wide open! 💻🪟🥶",
    emoji: "🤖"
  },
  {
    id: 13,
    category: "Knock-Knock",
    setup: "Knock, knock! Who's there? / Cow says. / Cow says who?",
    punchline: "No silly, cow says MOOOOO! 🐮🤣",
    emoji: "🐮"
  },
  {
    id: 14,
    category: "Animal Giggles",
    setup: "What do you call a bear with zero teeth?",
    punchline: "A gummy bear! 🐻🍬",
    emoji: "🍬"
  },
  {
    id: 15,
    category: "Food Fun",
    setup: "Why did the tomato turn bright red?",
    punchline: "Because it saw the salad dressing! 🍅🫣",
    emoji: "🥗"
  },
  {
    id: 16,
    category: "Cousin Chaos",
    setup: "Why did Ninad swallow his pocket money?",
    punchline: "He told his mom he wanted to put his money where his mouth is! 🪙😋",
    emoji: "💰"
  },
  {
    id: 17,
    category: "Sports & Speed",
    setup: "Why can't you play cricket in the jungle?",
    punchline: "Because there are too many cheetahs! 🐆🏏",
    emoji: "🏏"
  },
  {
    id: 18,
    category: "Music & Drama",
    setup: "What musical instrument do skeletons play best?",
    punchline: "The trom-BONE! 💀🎺",
    emoji: "🦴"
  },
  {
    id: 19,
    category: "Silly Puns",
    setup: "Why do bees have sticky hair?",
    punchline: "Because they always use honeycombs! 🐝🍯",
    emoji: "🐝"
  },
  {
    id: 20,
    category: "School Shenanigans",
    setup: "Teacher: 'Virat, where is your homework?'",
    punchline: "Virat: 'It got so excited to see you that it ran away at Mach 5!' 🏃‍♂️💨📄",
    emoji: "📝"
  },
  {
    id: 21,
    category: "Knock-Knock",
    setup: "Knock, knock! Who's there? / Boo. / Boo who?",
    punchline: "Don't cry Tapasya, it was just a funny joke! 👻😭🎭",
    emoji: "🎭"
  },
  {
    id: 22,
    category: "Animal Giggles",
    setup: "What do you call an alligator wearing a detective vest?",
    punchline: "An INVESTIGATOR! 🐊🕵️‍♂️",
    emoji: "🐊"
  },
  {
    id: 23,
    category: "Food Fun",
    setup: "Why did the banana go to the doctor?",
    punchline: "Because it wasn't peeling very well! 🍌🩺",
    emoji: "🍌"
  },
  {
    id: 24,
    category: "Cousin Chaos",
    setup: "Who is the fastest superhero in the house?",
    punchline: "Ninad when he hears a chocolate wrapper 3 rooms away! 🥷🍫",
    emoji: "⚡"
  },
  {
    id: 25,
    category: "Tech & Science",
    setup: "What did the zero say to the eight?",
    punchline: "'Nice belt you got there, pal!' 0️⃣8️⃣👔",
    emoji: "🎱"
  },
  {
    id: 26,
    category: "Silly Puns",
    setup: "What do sea monsters eat for lunch?",
    punchline: "Fish and ships! 🌊🚢🐟",
    emoji: "🐙"
  },
  {
    id: 27,
    category: "Music & Drama",
    setup: "Why did the singer sit on a ladder during practice?",
    punchline: "Because Tapasya told her to hit the highest notes! 🪜🎶✨",
    emoji: "🎵"
  },
  {
    id: 28,
    category: "Animal Giggles",
    setup: "What do you get if you cross a vampire and a snowman?",
    punchline: "FROSTBITE! 🧛‍♂️⛄❄️",
    emoji: "⛄"
  },
  {
    id: 29,
    category: "Cousin Chaos",
    setup: "Why did Aaditi bring 5 alarm clocks to the family movie night?",
    punchline: "One for each cousin who promises they aren't sleepy! ⏰🍿😴",
    emoji: "🎬"
  },
  {
    id: 30,
    category: "Food Fun",
    setup: "What did baby corn say to mama corn?",
    punchline: "'Where is pop-corn?' 🌽🍿",
    emoji: "🍿"
  },
  {
    id: 31,
    category: "Tech & Science",
    setup: "Why did Devansh attach wheels to his homework notebook?",
    punchline: "Because he wanted fast results! 🏎️📓",
    emoji: "🚀"
  },
  {
    id: 32,
    category: "Knock-Knock",
    setup: "Knock, knock! Who's there? / Lettuce. / Lettuce who?",
    punchline: "Lettuce in, it's freezing out here and we smell pizza! 🥬🍕",
    emoji: "🚪"
  },
  {
    id: 33,
    category: "Sports & Speed",
    setup: "Why was the cricket pitch so warm and cozy?",
    punchline: "Because Virat bowled too much heat! 🏏🔥😎",
    emoji: "🔥"
  },
  {
    id: 34,
    category: "Animal Giggles",
    setup: "What do you call a pig that knows karate?",
    punchline: "A PORK CHOP! 🐷🥋💥",
    emoji: "🥋"
  },
  {
    id: 35,
    category: "Silly Puns",
    setup: "Why did the scarecrow win an awesome gold medal?",
    punchline: "Because he was outstanding in his field! 🌾🥇",
    emoji: "🏆"
  },
  {
    id: 36,
    category: "Cousin Chaos",
    setup: "Where do all missing TV remotes go in the house?",
    punchline: "Into the secret Ninad Bermuda Triangle of Couch Cushions! 🛋️📺",
    emoji: "🕳️"
  },
  {
    id: 37,
    category: "Animal Giggles",
    setup: "What is a cat's favorite color?",
    punchline: "PURR-ple! 🐱💜",
    emoji: "🐾"
  },
  {
    id: 38,
    category: "School Shenanigans",
    setup: "Why did the student eat their homework?",
    punchline: "Because the teacher told them it was a piece of cake! 🍰📝😋",
    emoji: "🎂"
  },
  {
    id: 39,
    category: "Food Fun",
    setup: "What do you call a sad strawberry?",
    punchline: "A blue-berry! 🍓🫐😢",
    emoji: "🍓"
  },
  {
    id: 40,
    category: "Cousin Chaos",
    setup: "What is the official rule when all 5 cousins are in the car?",
    punchline: "'Are we there yet?' must be shouted in 5-part harmony! 🚗💨🗣️",
    emoji: "🚙"
  },
  {
    id: 41,
    category: "Silly Puns",
    setup: "How do you make a tissue dance?",
    punchline: "You put a little BOOGIE in it! 🤧🕺🎶",
    emoji: "🕺"
  },
  {
    id: 42,
    category: "Tech & Science",
    setup: "Why did the phone wear glasses?",
    punchline: "Because it lost all its contacts! 📱👓",
    emoji: "👓"
  },
  {
    id: 43,
    category: "Animal Giggles",
    setup: "What do you call a duck that gets straight A's in school?",
    punchline: "A wise quacker! 🦆🎓",
    emoji: "🦆"
  },
  {
    id: 44,
    category: "Music & Drama",
    setup: "Why did Tapasya bring a mirror to the movie theater?",
    punchline: "To make sure her popcorn-eating expression was Oscar-worthy! 🪞🍿🌟",
    emoji: "🪞"
  },
  {
    id: 45,
    category: "Sports & Speed",
    setup: "Why are basketball courts always so wet?",
    punchline: "Because the players dribble all over them! 🏀💦",
    emoji: "🏀"
  },
  {
    id: 46,
    category: "Cousin Chaos",
    setup: "What happened when Devansh tried to fix the broken toaster?",
    punchline: "It now shoots toast 15 feet in the air right into Virat's backpack! 🍞🚀🎒",
    emoji: "🍞"
  },
  {
    id: 47,
    category: "Knock-Knock",
    setup: "Knock, knock! Who's there? / Orange. / Orange who?",
    punchline: "Orange you glad all 5 cousins are the funniest crew ever?! 🍊🎉",
    emoji: "🍊"
  },
  {
    id: 48,
    category: "Food Fun",
    setup: "Why did the French fry cross the road?",
    punchline: "To get to the ketchup on the other side! 🍟🍅",
    emoji: "🍟"
  },
  {
    id: 49,
    category: "Animal Giggles",
    setup: "What do you call two birds in love?",
    punchline: "Tweet-hearts! 🐦💕",
    emoji: "🦜"
  },
  {
    id: 50,
    category: "Cousin Chaos",
    setup: "Who broke the flower pot in the hallway?",
    punchline: "All 5 cousins simultaneously pointed at the family goldfish! 🐠🏺😂",
    emoji: "🐟"
  },
  {
    id: 51,
    category: "Tech & Science",
    setup: "How do the cousins summon Mayur Mama from across the house in 2 seconds?",
    punchline: "Whisper: 'The WiFi router has a blinking red light!' 🚨📶💨",
    emoji: "💻"
  },
  {
    id: 52,
    category: "Cousin Chaos",
    setup: "Why did Mayur Mama build this entire website for the cousins?",
    punchline: "Because explaining 'The Cloud' using couch cushions was getting too difficult! ☁️🛋️😂",
    emoji: "👨‍💻"
  },
  {
    id: 53,
    category: "Tech & Science",
    setup: "Why did Mayur Mama tell the kids to go outside and touch grass?",
    punchline: "Because he found a brand new 4K 120FPS ultra-realistic lawn simulator app! 🌿📱🎮",
    emoji: "🌱"
  },
  {
    id: 54,
    category: "Tech & Science",
    setup: "What is Mayur Mama's official diagnosis for every tablet problem?",
    punchline: "'Have you tried turning it off, waiting 10 seconds, and giving your Mama a cookie?' 🍪🔄💻",
    emoji: "🔌"
  }
];

// Helper to get random joke
function getRandomJoke(category = "All") {
  const filtered = category === "All" 
    ? JOKES_DATABASE 
    : JOKES_DATABASE.filter(j => j.category === category);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex] || JOKES_DATABASE[0];
}

// Global window bindings
window.JOKES_DATABASE = JOKES_DATABASE;
window.getRandomJoke = getRandomJoke;

