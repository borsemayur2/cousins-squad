// Detailed funny profiles, roasts, stats and superpowers for all 5 cousins!

const COUSINS_DATA = [
  {
    id: "aaditi",
    name: "Aaditi",
    role: "The Supreme Boss & Eldest Sister",
    gender: "F",
    isEldest: true,
    ageRank: "Rank #1 (The Supreme Commander)",
    themeColor: "#FF4081",
    bgColor: "#FFF0F5",
    badge: "👑 BORN FIRST = ALWAYS RIGHT",
    tagline: "Rule maker, snack inspector, and ultimate boss of the living room.",
    quote: "“Because I’m the eldest, that’s why! Now hand over the TV remote.”",
    superpower: "📡 Candy Radar 3000: Can detect chocolate unwrapping from 4 rooms away through closed doors.",
    stats: {
      bossiness: 99,
      remoteControl: 100,
      snackTaxRate: 85,
      patienceForChaos: 12
    },
    bustedFor: "Hiding the secret jar of Nutella behind the encyclopedia set.",
    mostLikelyTo: "Call an emergency family meeting because someone touched her highlighter.",
    secretWeapon: "The Stare of Doom™ that stops running cousins in their tracks.",
    weakness: "Puppy eyes from Ninad and tickles on her feet.",
    funFact: "Has 14 different rules about who gets to sit on which couch cushion.",
    avatarSvgProps: {
      hair: "long-dark-ponytail",
      accessory: "golden-crown",
      glasses: "pink-stylish",
      expression: "bossy-smirk"
    },
    imageFile: "public/avatars/aaditi.jpg"
  },
  {
    id: "tapasya",
    name: "Tapasya",
    role: "The Drama Queen & Popstar Diva",
    gender: "F",
    isEldest: false,
    ageRank: "Rank #2 (The Melody Empress)",
    themeColor: "#9C27B0",
    bgColor: "#F3E5F5",
    badge: "🎭 OSCAR WINNER FOR SIGHING",
    tagline: "Turns a 2-second stubbed toe into a Broadway musical in 4 acts.",
    quote: "“I wasn’t crying! My eyeballs were just sweating with pure passion!”",
    superpower: "🎤 High-Pitch Song-Beam: Can hit notes so high that neighboring dogs start harmonizing.",
    stats: {
      dramaLevel: 98,
      singingVolume: 95,
      mirrorTime: 90,
      cleanupSpeed: 5
    },
    bustedFor: "Using the living room rug as an official VIP red carpet for her plush toys.",
    mostLikelyTo: "Give a tearful 10-minute speech thanking her fans after brushing her teeth.",
    secretWeapon: "The Dramatic Gasp™ that makes everyone think the roof collapsed.",
    weakness: "Being asked to sing the chorus of ANY cartoon song.",
    funFact: "Has claimed at least 6 different hairbrushes as her professional microphone.",
    avatarSvgProps: {
      hair: "sparkly-pigtails",
      accessory: "star-sunglasses",
      glasses: "none",
      expression: "diva-smile"
    },
    imageFile: "public/avatars/tapasya.jpg"
  },
  {
    id: "devansh",
    name: "Devansh",
    role: "The Mad Scientist & LEGO Engineer",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #3 (The Chaos Architect)",
    themeColor: "#FF9800",
    bgColor: "#FFF3E0",
    badge: "🤖 CERTIFIED EXPLOSION EXPERT",
    tagline: "Takes apart clocks, toasters, and pens. Puts them back with 5 spare screws.",
    quote: "“I didn’t break it! I just upgraded it into 47 separate collectible parts!”",
    superpower: "🧱 Invisible LEGO Placement: Can strategically plant 1 sharp brick right where feet tread.",
    stats: {
      inventionsMade: 96,
      thingsAccidentallyDismantled: 100,
      curiosityLevel: 99,
      decibelLevel: 88
    },
    bustedFor: "Trying to build a working laser jetpack out of ceiling fan blades and duct tape.",
    mostLikelyTo: "Turn a cardboard refrigerator box into a time-travel machine by 3 PM.",
    secretWeapon: "The Pocket Magnifying Glass & Screwdriver combo.",
    weakness: "Can never resist pressing any shiny big button labeled 'DO NOT PUSH'.",
    funFact: "Claims his stuffed bear is a licensed co-pilot of his cardboard spaceship.",
    avatarSvgProps: {
      hair: "spiky-messy",
      accessory: "safety-goggles",
      glasses: "goggles-up",
      expression: "goofy-grin"
    },
    imageFile: "public/avatars/devansh.jpg"
  },
  {
    id: "virat",
    name: "Virat",
    role: "The Speed Demon & Cricket Crusader",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #4 (The Turbo Zoomer)",
    themeColor: "#2196F3",
    bgColor: "#E3F2FD",
    badge: "⚡ SPEED: MACH 3 ZOOMIES",
    tagline: "Runs on 100% pure rocket fuel. Has never walked in a straight line ever.",
    quote: "“The ball didn’t break the vase! The vase jumped in front of my world-class sixer!”",
    superpower: "🏏 Infinite Energy Loop: Can play 9 hours of hallway cricket without drinking water once.",
    stats: {
      runningSpeed: 100,
      windowNearMisses: 94,
      cricketPassion: 100,
      sittingStillTime: 0.1
    },
    bustedFor: "Turning the hallway into Lord’s Cricket Ground with a rolled-up sock ball.",
    mostLikelyTo: "Dive across the living room sofa to catch a runaway pillow like a World Cup trophy.",
    secretWeapon: "The Super Slide tackle that accidentally knocks over 3 laundry baskets.",
    weakness: "Freezing in place only when someone says 'STATUE!' for exactly 3 seconds.",
    funFact: "Practices cricket bowling action even while brushing his teeth and walking backwards.",
    avatarSvgProps: {
      hair: "sporty-cap-backwards",
      accessory: "cricket-bat",
      glasses: "sport-shades",
      expression: "turbo-wink"
    },
    imageFile: "public/avatars/virat.jpg"
  },
  {
    id: "ninad",
    name: "Ninad",
    role: "The Stealth Ninja & Cookie Bandit",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #5 (Chief Mischief Officer)",
    themeColor: "#4CAF50",
    bgColor: "#E8F5E9",
    badge: "🥷 0% GUILT, 100% COOKIES",
    tagline: "Smallest cousin with the biggest schemes. Vanishes the second cleanup starts.",
    quote: "“It wasn’t me! It was the invisible monster dog who loves oreos!”",
    superpower: "🍪 Cuteness Cloaking Device: Tilts head 15 degrees, blinks big eyes, and escapes all trouble.",
    stats: {
      stealthLevel: 99,
      cookieHeists: 100,
      blamingOthers: 97,
      bedtimeObedience: 2
    },
    bustedFor: "Caught with chocolate smeared on his nose saying 'I never even heard of cookies.'",
    mostLikelyTo: "Hide inside the kitchen cabinet to eavesdrop on where the ice cream is stored.",
    secretWeapon: "The Ultimate Puppy Dog Pout that melts anyone's resolve in 0.5 seconds.",
    weakness: "Tickle-monster attacks and dinosaur noises.",
    funFact: "Can crawl under a low coffee table at lightning speed without making a single sound.",
    avatarSvgProps: {
      hair: "curly-cute",
      accessory: "ninja-bandana",
      glasses: "none",
      expression: "cheeky-cookie"
    },
    imageFile: "public/avatars/ninad.jpg"
  },
  {
    id: "mayur",
    name: "Mayur Mama",
    role: "The Cool Tech Mama & Software Wizard",
    gender: "M",
    isEldest: false,
    isMama: true,
    ageRank: "Family IT Legend (The WiFi Boss)",
    themeColor: "#673AB7",
    bgColor: "#EDE7F6",
    badge: "💻 CHIEF TECH MAMA & WIFI GOD",
    tagline: "Fixer of laptops, builder of funny websites, and master of the secret WiFi password.",
    quote: "“No, the internet is not broken! You just have 43 Roblox tabs and 12 YouTube videos playing simultaneously!”",
    superpower: "📡 Infinite Bandwidth Boost: Can restart the router from 50 feet away and code an entire app before the pizza arrives.",
    stats: {
      techSavviness: 100,
      wifiFixSpeed: 99,
      codingPassion: 100,
      gadgetCollection: 98
    },
    bustedFor: "Secretly playing video games past bedtime and claiming 'It's a critical software stress test!'",
    mostLikelyTo: "Answer 'Have you tried turning it off and on again?' to every single problem in life.",
    secretWeapon: "The Master Router Admin Password that controls the kids' screen time.",
    weakness: "When all 5 cousins simultaneously yell: 'Mama, can you install Minecraft mods on my tablet?!'",
    funFact: "Actually built this entire website for the cousins because explaining 'The Cloud' was taking too long!",
    avatarSvgProps: {
      hair: "neat-dark-beard",
      accessory: "laptop-glow",
      glasses: "tech-specs",
      expression: "tech-smile"
    },
    imageFile: "public/avatars/mayur.jpg"
  }
];

// Helper to find cousin
function getCousinById(id) {
  return COUSINS_DATA.find(c => c.id === id);
}

// Global window bindings
window.COUSINS_DATA = COUSINS_DATA;
window.getCousinById = getCousinById;

