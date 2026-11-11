// Detailed funny profiles, roasts, stats, and authentic quirks for all 6 squad members!

const COUSINS_DATA = [
  {
    id: "aaditi",
    name: "Aaditi",
    role: "The Supreme Boss & World Traveller",
    gender: "F",
    isEldest: true,
    ageRank: "Rank #1 (The Eldest Boss)",
    bdayStr: "September 2",
    bdayMonth: 9,
    bdayDay: 2,
    themeColor: "#FF4081",
    bgColor: "#FFF0F5",
    badge: "👑 BORN FIRST = ETERNAL DICTATOR",
    loves: ["✈️ Travelling & Exploring", "👑 Bossing Younger Cousins", "📺 Holding TV Remote Hostage"],
    tagline: "Suitcase perpetually packed. Passport ready. Rules strictly enforced.",
    quote: "“Because I’m the eldest sister and I said so! Now pack your bags, we have places to conquer!”",
    superpower: "✈️ Travel Radar 5000: Can spot airport snacks, boarding gates, and lost cousins from 500 meters away.",
    stats: {
      bossiness: 99,
      travelWanderlust: 100,
      snackTaxRate: 85,
      patienceForYoungerCousins: 14
    },
    bustedFor: "Attempting to issue official boarding passes and luggage weight limits for entering the living room.",
    mostLikelyTo: "Plan a 14-day international holiday itinerary before anyone has even brushed their teeth.",
    secretWeapon: "The Big Sister Eyebrow Raise™ that halts all living-room chaos instantly.",
    weakness: "Duty-free airport shopping and cute travel souvenirs.",
    funFact: "Has visited more cities than the other cousins have lost socks, and keeps all their travel snacks in her backpack!",
    avatarSvgProps: {
      hair: "long-dark-ponytail",
      accessory: "airplane-passport",
      glasses: "pink-stylish",
      expression: "bossy-smirk"
    },
    imageFile: "public/avatars/aaditi.jpg"
  },
  {
    id: "tapasya",
    name: "Tapasya",
    role: "The Panipuri Empress & Popstar Diva",
    gender: "F",
    isEldest: false,
    ageRank: "Rank #2 (The Melody Empress)",
    bdayStr: "August 24",
    bdayMonth: 8,
    bdayDay: 24,
    themeColor: "#9C27B0",
    bgColor: "#F3E5F5",
    badge: "🥣 PANIPURI CHAMPION OF THE UNIVERSE",
    loves: ["🥣 Unlimited Panipuri (Spicy & Sweet)", "🎤 High-Pitch Drama Singing", "💅 Broadway Dramatic Entrances"],
    tagline: "Can devour 30 spicy panipuris in 2 minutes without shedding a single tear (except for dramatic effect).",
    quote: "“The street vendor ran out of spicy teekha pani! THIS IS THE GREATEST TRAGEDY IN WORLD HISTORY!”",
    superpower: "🥣 Panipuri Vacuum: Inhales entire plates of panipuri before the server even puts down the spoon.",
    stats: {
      panipuriCapacity: 100,
      dramaDecibels: 98,
      singingVolume: 95,
      cleanupSpeed: 4
    },
    bustedFor: "Bribing the panipuri wala for extra crispy puris using her theatrical singing charm.",
    mostLikelyTo: "Turn a slight spice kick into a Grammy-winning operatic solo in the middle of dinner.",
    secretWeapon: "The Dramatic Tear-Duct Squeeze™ that wins her the last crunchy puri every time.",
    weakness: "The irresistible sound of a panipuri shell cracking open with spicy potato filling.",
    funFact: "Her personal record is 42 panipuris in one sitting, followed immediately by singing a 5-minute encore!",
    avatarSvgProps: {
      hair: "sparkly-pigtails",
      accessory: "panipuri-bowl",
      glasses: "star-sunglasses",
      expression: "diva-panipuri-smile"
    },
    imageFile: "public/avatars/tapasya.jpg"
  },
  {
    id: "devansh",
    name: "Devansh",
    role: "The Super Athlete & Loose-Tooth Legend",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #3 (The Sports Dynamo)",
    bdayStr: "July 18",
    bdayMonth: 7,
    bdayDay: 18,
    themeColor: "#FF9800",
    bgColor: "#FFF3E0",
    badge: "🦷 1 TOOTH HANGING BY A THREAD!",
    loves: ["🏸 Badminton Smashes", "⚽ Football Bicycle Kicks", "🦷 Wiggling His Right-Middle Tooth"],
    tagline: "Unstoppable athlete on the field, but currently fighting his toughest opponent: a very stubborn loose tooth.",
    quote: "“Watch my badminton smash! And don’t touch my right middle tooth—it’s hanging by a microscopic thread!”",
    superpower: "🏸 Super Badminton Smash: Can hit the shuttlecock so hard it lands in another zip code.",
    stats: {
      athleticEnergy: 100,
      footballSkills: 97,
      toothWobbleAngle: 89,
      fearOfApples: 95
    },
    bustedFor: "Attempting a football bicycle kick inside the hallway and nearly volleying his loose tooth into the ceiling fan.",
    mostLikelyTo: "Wiggle his hanging front tooth 400 times a minute while explaining offside football rules.",
    secretWeapon: "The Sudden Tooth-Wiggle Display™ that grossed out Ninad enough to drop the ball.",
    weakness: "Crunchy hard apples, carrots, and anyone shouting 'I have dental floss!'",
    funFact: "Plays 90 minutes of football without breaking a sweat, but checks the mirror every 3 minutes to see if his right tooth fell out yet!",
    avatarSvgProps: {
      hair: "spiky-messy",
      accessory: "badminton-racket",
      glasses: "sports-headband",
      expression: "hanging-tooth-grin"
    },
    imageFile: "public/avatars/devansh.jpg"
  },
  {
    id: "virat",
    name: "Virat",
    role: "The Cricket King with Cool Specs",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #4 (The Turbo Zoomer)",
    bdayStr: "January 7",
    bdayMonth: 1,
    bdayDay: 7,
    themeColor: "#2196F3",
    bgColor: "#E3F2FD",
    badge: "👓 CRICKET PRO WITH COOL SPECS ⚡",
    loves: ["🏏 Cricket 24/7", "👓 Sporty High-Speed Specs", "⚡ Running at Mach 5 Zoomies"],
    tagline: "Adjusts his cool glasses, stares down the bowler, and smashes hallway lamps for sixers.",
    quote: "“Hold my glasses, I’m about to hit this sock-ball completely out of the apartment complex!”",
    superpower: "🏏 360° Specs Vision: Can track a cricket ball traveling at lightspeed while simultaneously doing zoomies.",
    stats: {
      cricketPassion: 100,
      specsCoolness: 99,
      runningSpeed: 100,
      sittingStillMinutes: 0.05
    },
    bustedFor: "Using the living room couch as cricket slip cordon and Mayur Mama’s laptop box as the wicket stumps.",
    mostLikelyTo: "Slide his cool glasses up his nose like an anime cricket captain before hitting a boundary.",
    secretWeapon: "The Turbo Sprint & Dive that saves the match (and knocks over three laundry baskets).",
    weakness: "Fingerprints on his specs lenses and being forced to watch a movie without a cricket bat in his hands.",
    funFact: "Sleeps wearing his cricket wristband and cleans his cool glasses with his jersey collar at least 80 times a day!",
    avatarSvgProps: {
      hair: "sporty-cap-backwards",
      accessory: "cricket-bat",
      glasses: "cool-sport-specs",
      expression: "specs-wink"
    },
    imageFile: "public/avatars/virat.jpg"
  },
  {
    id: "ninad",
    name: "Ninad",
    role: "The Free Fire King & Sofa Potato Supreme",
    gender: "M",
    isEldest: false,
    ageRank: "Rank #5 (Lord of the Couch)",
    bdayStr: "March 25",
    bdayMonth: 3,
    bdayDay: 25,
    themeColor: "#4CAF50",
    bgColor: "#E8F5E9",
    badge: "🛋️ 100% HORIZONTAL ON SOFA • FREE FIRE PRO",
    loves: ["🎮 Free Fire Mobile Gaming", "🍕 Non-stop Food & Snacks", "🛋️ Never Leaving the Couch"],
    tagline: "Permanently fused with the sofa cushions. Feared in Free Fire lobbies. Demands room service from his sisters.",
    quote: "“Don’t block my WiFi! I’m in the final Free Fire safe zone and someone bring me chips right now!”",
    superpower: "🛋️ Gravitational Sofa Bonding: Can remain completely horizontal on the sofa for 18 consecutive hours without losing muscle tone.",
    stats: {
      freeFireKills: 100,
      sofaAdhesion: 100,
      appetiteForSnacks: 99,
      desireToWalk: 0.01
    },
    bustedFor: "Using his toes to pull the snack bowl closer because getting up off the sofa was 'statistically inefficient'.",
    mostLikelyTo: "Clutch a 1v4 victory in Free Fire while completely surrounded by 6 empty chip packets on the couch.",
    secretWeapon: "The Arrogant Tablet Glare™ that silences anyone trying to make him go outside and touch grass.",
    weakness: "A flat 1% battery warning on his tablet and someone stepping between him and the router.",
    funFact: "Has developed a specialized telepathic voice to order food from whoever is walking past the sofa without pausing his game!",
    avatarSvgProps: {
      hair: "curly-messy",
      accessory: "gaming-tablet-fire",
      glasses: "none",
      expression: "arrogant-couch-smirk"
    },
    imageFile: "public/avatars/ninad.jpg"
  },
  {
    id: "mayur",
    name: "Mayur Mama",
    role: "The Tech Legend, Software Wizard & Globetrotter",
    gender: "M",
    isEldest: false,
    isMama: true,
    ageRank: "Family IT Legend & Travel Pro",
    bdayStr: "October 20",
    bdayMonth: 10,
    bdayDay: 20,
    themeColor: "#673AB7",
    bgColor: "#EDE7F6",
    badge: "💻 SOFTWARE GURU • SPECS • TRAVEL ADDICT",
    loves: ["💻 Coding Apps & Softwares", "👓 High-Tech Glasses", "✈️ World Travel & Road Trips"],
    tagline: "Codes websites in his sleep, sports stylish specs, travels the globe, and keeps the cousins from destroying the WiFi.",
    quote: "“I just deployed a new feature while sipping coffee in another timezone. Also, Ninad, GET OFF THE SOFA!”",
    superpower: "💻 Full-Stack Miracles: Can fix bugs, book flight tickets, adjust cool specs, and deploy family apps in 3 terminal commands.",
    stats: {
      codingProwess: 100,
      specsStyle: 98,
      travelMiles: 99,
      wifiPatience: 88
    },
    bustedFor: "Writing python automation scripts to determine which cousin stole the last slice of chocolate cake.",
    mostLikelyTo: "Wear his sleek tech specs at the beach while fixing an AWS cloud server from his mobile phone.",
    secretWeapon: "The Master WiFi Killswitch™ that brings instant peace and quiet to the living room.",
    weakness: "When the cousins beg: 'Mayur Mama, can you hack Free Fire to give Ninad infinite diamonds?!'",
    funFact: "Built this entire website for his favorite chaos squad, equipped with an Excuse Generator and Birthday Cannon!",
    avatarSvgProps: {
      hair: "neat-dark-beard",
      accessory: "laptop-travel-globe",
      glasses: "tech-specs-sleek",
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
