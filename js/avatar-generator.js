// The Ultimate Cousin Avatar Generator & Chaos Shuffler 3000™
// Millions of customizable combinations: skin, hair, goggles, hanging teeth, props, hoodies & speech!

const AVATAR_OPTIONS = {
  skinTones: [
    { id: "peach", label: "Fair Peach", color: "#FCD8B8" },
    { id: "warm", label: "Warm Honey", color: "#F5CBA7" },
    { id: "bronze", label: "Sun Bronze", color: "#E0AC69" },
    { id: "caramel", label: "Deep Caramel", color: "#C68642" },
    { id: "rich", label: "Rich Cocoa", color: "#8D5524" },
    { id: "alien", label: "Alien Green 👽", color: "#A5D6A7" },
    { id: "smurf", label: "Cyber Blue 🛸", color: "#80DEEA" },
    { id: "pink", label: "Cotton Candy 🌸", color: "#F48FB1" }
  ],

  hairStyles: [
    { id: "spiky", label: "⚡ Spiky Anime" },
    { id: "curly", label: "🐑 Fluffy Curls" },
    { id: "ponytail", label: "👑 High Ponytail" },
    { id: "pigtails", label: "🎤 Diva Pigtails" },
    { id: "cap", label: "🧢 Cap Backwards" },
    { id: "fade", label: "💻 Tech Fade" },
    { id: "afro", label: "🌟 Super Afro" },
    { id: "bald", label: "✨ Shiny Bald" }
  ],

  hairColors: [
    { id: "black", label: "Midnight Black", color: "#212121" },
    { id: "brown", label: "Chocolate Brown", color: "#4E342E" },
    { id: "blonde", label: "Electric Gold", color: "#FFB300" },
    { id: "red", label: "Fire Red", color: "#D50000" },
    { id: "purple", label: "Cyber Purple", color: "#7C4DFF" },
    { id: "cyan", label: "Laser Cyan", color: "#00E5FF" },
    { id: "lime", label: "Toxic Lime", color: "#76FF03" }
  ],

  eyewear: [
    { id: "none", label: "🚫 None" },
    { id: "sportSpecs", label: "👓 Sport Specs (Virat)" },
    { id: "techGlasses", label: "💻 Tech Glasses (Mayur)" },
    { id: "safetyGoggles", label: "🥽 Safety Goggles (Devansh)" },
    { id: "starShades", label: "⭐ Star Sunglasses (Tapasya)" },
    { id: "retro3d", label: "🕶️ 3D Cinema Glasses" },
    { id: "eyepatch", label: "🏴‍☠️ Pirate Eyepatch" },
    { id: "vrVisor", label: "🥽 Cyber VR Visor" }
  ],

  mouthTeeth: [
    { id: "hangingTooth", label: "🦷 1 Loose Tooth (Devansh)" },
    { id: "missingTeeth", label: "🦷 Missing Teeth Gap (Ninad)" },
    { id: "bigSmile", label: "😁 Happy Toothy Smile" },
    { id: "panipuri", label: "🥣 Panipuri Munch (Tapasya)" },
    { id: "bubblegum", label: "🫧 Big Bubblegum" },
    { id: "smirk", label: "😏 Sneaky Boss Smirk" }
  ],

  eyes: [
    { id: "goofy", label: "👀 Excited Goofy" },
    { id: "wink", label: "😉 Turbo Wink" },
    { id: "couch", label: "😴 Couch Potato (Ninad)" },
    { id: "bossy", label: "🤨 Boss Eyebrow (Aaditi)" },
    { id: "stars", label: "🤩 Starstruck Popstar" }
  ],

  props: [
    { id: "none", label: "🚫 None" },
    { id: "badminton", label: "🏸 Badminton Racket & Shuttle" },
    { id: "cricket", label: "🏏 Cricket Bat & Ball" },
    { id: "tablet", label: "📱 Free Fire Gaming Tablet" },
    { id: "panipuri", label: "🥣 Crispy Panipuri Plate" },
    { id: "laptop", label: "💻 Developer Laptop <DEV>" },
    { id: "travel", label: "✈️ Travel Passport & Jet" },
    { id: "pizza", label: "🍕 Pepperoni Pizza Slice" },
    { id: "cookie", label: "🍪 Giant Chocolate Cookie" }
  ],

  hats: [
    { id: "none", label: "🚫 None" },
    { id: "crown", label: "👑 Royal Golden Crown" },
    { id: "party", label: "🥳 Party Cone" },
    { id: "pirate", label: "🏴‍☠️ Pirate Captain Hat" },
    { id: "alien", label: "👽 Alien Antennae" },
    { id: "chef", label: "👨‍🍳 Master Chef Toque" },
    { id: "viking", label: "🪓 Viking Horns" },
    { id: "headset", label: "🎧 Tech Headset" }
  ],

  shirtColors: [
    { id: "orange", color: "#FB8C00", label: "Inventor Orange" },
    { id: "blue", color: "#0288D1", label: "Cricket Blue" },
    { id: "green", color: "#43A047", label: "Couch Green" },
    { id: "pink", color: "#E91E63", label: "Boss Pink" },
    { id: "purple", color: "#8E24AA", label: "Diva Purple" },
    { id: "navy", color: "#1A237E", label: "Tech Navy" },
    { id: "yellow", color: "#FFD600", label: "Sunshine Yellow" },
    { id: "crimson", color: "#D50000", label: "Fire Crimson" }
  ],

  speechBubbles: [
    "None",
    "PAGAL!",
    "I'M ELDEST!",
    "SIXER!",
    "MORE PANIPURI!",
    "WIFI DOWN?!",
    "MY TOOTH!",
    "FREE FIRE!"
  ]
};

const COUSIN_PRESETS = {
  aaditi: {
    skinTone: "#FCD8B8",
    hairStyle: "ponytail",
    hairColor: "#212121",
    eyewear: "none",
    mouthTeeth: "smirk",
    eyes: "bossy",
    prop: "travel",
    hat: "crown",
    shirtColor: "#E91E63",
    speechBubble: "I'M ELDEST!"
  },
  tapasya: {
    skinTone: "#FCD8B8",
    hairStyle: "pigtails",
    hairColor: "#212121",
    eyewear: "starShades",
    mouthTeeth: "panipuri",
    eyes: "stars",
    prop: "panipuri",
    hat: "none",
    shirtColor: "#8E24AA",
    speechBubble: "MORE PANIPURI!"
  },
  devansh: {
    skinTone: "#FCD8B8",
    hairStyle: "spiky",
    hairColor: "#4E342E",
    eyewear: "safetyGoggles",
    mouthTeeth: "hangingTooth",
    eyes: "goofy",
    prop: "badminton",
    hat: "none",
    shirtColor: "#FB8C00",
    speechBubble: "MY TOOTH!"
  },
  virat: {
    skinTone: "#F5CBA7",
    hairStyle: "cap",
    hairColor: "#212121",
    eyewear: "sportSpecs",
    mouthTeeth: "bigSmile",
    eyes: "wink",
    prop: "cricket",
    hat: "none",
    shirtColor: "#0288D1",
    speechBubble: "SIXER!"
  },
  ninad: {
    skinTone: "#FCD8B8",
    hairStyle: "curly",
    hairColor: "#212121",
    eyewear: "none",
    mouthTeeth: "missingTeeth",
    eyes: "couch",
    prop: "tablet",
    hat: "none",
    shirtColor: "#43A047",
    speechBubble: "PAGAL!"
  },
  mayur: {
    skinTone: "#F5CBA7",
    hairStyle: "fade",
    hairColor: "#212121",
    eyewear: "techGlasses",
    mouthTeeth: "bigSmile",
    eyes: "goofy",
    prop: "laptop",
    hat: "headset",
    shirtColor: "#1A237E",
    speechBubble: "WIFI DOWN?!"
  }
};

class ModularAvatarEngine {
  constructor() {
    this.currentConfig = { ...COUSIN_PRESETS.aaditi };
    this.activePreset = "aaditi";
  }

  // Generate pure vector SVG string based on current configuration
  renderSvg(cfg = this.currentConfig) {
    const skin = cfg.skinTone || "#FCD8B8";
    const hairC = cfg.hairColor || "#212121";
    const shirtC = cfg.shirtColor || "#FB8C00";
    const hair = cfg.hairStyle || "spiky";
    const eyes = cfg.eyes || "goofy";
    const glasses = cfg.eyewear || "none";
    const mouth = cfg.mouthTeeth || "bigSmile";
    const prop = cfg.prop || "none";
    const hat = cfg.hat || "none";
    const bubble = cfg.speechBubble && cfg.speechBubble !== "None" ? cfg.speechBubble : null;

    return `
      <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mod-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="100%" stop-color="#E2E8F0" />
          </radialGradient>
        </defs>

        <!-- Background Disc -->
        <circle cx="100" cy="100" r="95" fill="url(#mod-bg)" stroke="#1E293B" stroke-width="4.5" />

        <!-- 1. Back Hair Layer (Ponytail / Pigtails) -->
        ${this._renderBackHair(hair, hairC)}

        <!-- 2. Body / Hoodie Shoulders -->
        <path d="M42 185 C42 142, 66 132, 100 132 C134 132, 158 142, 158 185 Z" fill="${shirtC}" stroke="#1E293B" stroke-width="3" />
        <!-- Hoodie V-Neck & Strings -->
        <path d="M86 132 L100 152 L114 132 Z" fill="#FFFFFF" opacity="0.9" />
        <circle cx="100" cy="162" r="7" fill="#FFD54F" stroke="#FFA000" stroke-width="1.5" />

        <!-- 3. Neck & Head Base -->
        <rect x="91" y="114" width="18" height="24" rx="4" fill="${skin}" stroke="#1E293B" stroke-width="2.5" />
        <ellipse cx="100" cy="92" rx="41" ry="44" fill="${skin}" stroke="#1E293B" stroke-width="3" />

        <!-- 4. Ears -->
        <circle cx="56" cy="94" r="9" fill="${skin}" stroke="#1E293B" stroke-width="2.5" />
        <circle cx="144" cy="94" r="9" fill="${skin}" stroke="#1E293B" stroke-width="2.5" />

        <!-- 5. Cheeks & Nose -->
        <circle cx="68" cy="102" r="7.5" fill="#FF8A80" opacity="0.5" />
        <circle cx="132" cy="102" r="7.5" fill="#FF8A80" opacity="0.5" />
        <path d="M98 94 Q100 97 102 94" stroke="#A1887F" stroke-width="2" stroke-linecap="round" fill="none" />

        <!-- 6. Front Hair -->
        ${this._renderFrontHair(hair, hairC)}

        <!-- 7. Eyes & Eyebrows -->
        ${this._renderEyes(eyes)}

        <!-- 8. Eyewear & Goggles -->
        ${this._renderEyewear(glasses)}

        <!-- 9. Mouth & Teeth -->
        ${this._renderMouth(mouth)}

        <!-- 10. Hat / Headgear -->
        ${this._renderHat(hat)}

        <!-- 11. Handheld Prop -->
        ${this._renderProp(prop)}

        <!-- 12. Optional Speech Bubble -->
        ${bubble ? (() => {
          const textLen = bubble.length;
          const bubbleW = Math.min(135, Math.max(68, textLen * 8.5));
          const bubbleX = Math.max(10, 192 - bubbleW);
          return `
          <g class="animated-float" transform="translate(${bubbleX}, 6)">
            <rect x="0" y="0" width="${bubbleW}" height="28" rx="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
            <polygon points="16,27 8,36 24,27" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
            <polygon points="15.5,25 9,34 23,25" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1" />
            <text x="${bubbleW / 2}" y="18" font-family="'Fredoka', sans-serif" font-size="10.5" font-weight="900" fill="#D32F2F" text-anchor="middle">${bubble}</text>
          </g>`;
        })() : ''}
      </svg>
    `;
  }

  _renderBackHair(style, color) {
    if (style === "ponytail") {
      return `
        <path d="M125 50 C165 40, 185 85, 175 125 C165 110, 145 95, 125 70 Z" fill="${color}" stroke="#1E293B" stroke-width="2" />
        <ellipse cx="130" cy="55" rx="10" ry="12" fill="#FF4081" />
      `;
    }
    if (style === "pigtails") {
      return `
        <circle cx="48" cy="90" r="24" fill="${color}" stroke="#1E293B" stroke-width="2" />
        <circle cx="152" cy="90" r="24" fill="${color}" stroke="#1E293B" stroke-width="2" />
        <path d="M42 70 L54 75 L45 82 Z" fill="#FF4081" />
        <path d="M158 70 L146 75 L155 82 Z" fill="#FF4081" />
      `;
    }
    if (style === "afro") {
      return `
        <circle cx="100" cy="80" r="54" fill="${color}" stroke="#1E293B" stroke-width="3" />
      `;
    }
    return '';
  }

  _renderFrontHair(style, color) {
    switch (style) {
      case "spiky":
        return `
          <path d="M55 70 L45 42 L68 55 L85 28 L105 48 L125 30 L135 55 L155 42 L145 75 Z" fill="${color}" stroke="#1E293B" stroke-width="2.5" />
          <path d="M60 80 C60 48, 140 48, 140 80 C125 65, 110 65, 95 62 C85 62, 72 68, 60 80 Z" fill="${color}" />
        `;
      case "curly":
        return `
          <path d="M56 80 C52 46, 148 46, 144 80 C135 60, 115 54, 100 55 C85 54, 65 60, 56 80 Z" fill="${color}" stroke="#1E293B" stroke-width="2" />
          <circle cx="70" cy="55" r="14" fill="${color}" />
          <circle cx="95" cy="46" r="16" fill="${color}" />
          <circle cx="125" cy="55" r="14" fill="${color}" />
        `;
      case "ponytail":
        return `
          <path d="M58 85 C58 45, 142 45, 142 85 C130 65, 115 60, 100 65 C85 60, 70 65, 58 85 Z" fill="${color}" />
        `;
      case "pigtails":
        return `
          <path d="M60 85 C60 45, 140 45, 140 85 C125 65, 110 65, 100 68 C90 65, 75 65, 60 85 Z" fill="${color}" />
        `;
      case "cap":
        return `
          <path d="M58 80 C56 46, 144 46, 142 80 Z" fill="#01579B" stroke="#1E293B" stroke-width="2" />
          <ellipse cx="100" cy="46" rx="28" ry="8" fill="#FFC107" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="100" cy="44" r="4" fill="#E65100" />
        `;
      case "fade":
        return `
          <path d="M56 80 C54 44, 146 44, 144 80 C135 60, 115 54, 100 55 C85 54, 65 60, 56 80 Z" fill="${color}" stroke="#1E293B" stroke-width="2" />
          <path d="M56 80 Q62 65 72 60 Q65 75 58 88 Z" fill="${color}" opacity="0.8" />
          <path d="M144 80 Q138 65 128 60 Q135 75 142 88 Z" fill="${color}" opacity="0.8" />
        `;
      case "bald":
        return `
          <!-- Shiny Bald Glint -->
          <path d="M75 55 Q90 45 105 48" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.75" />
          <circle cx="115" cy="50" r="2.5" fill="#FFF" opacity="0.8" />
        `;
      default:
        return '';
    }
  }

  _renderEyes(type) {
    switch (type) {
      case "wink":
        return `
          <ellipse cx="80" cy="86" rx="6" ry="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="82" cy="86" r="4.5" fill="#212121" />
          <circle cx="84" cy="84" r="1.5" fill="#FFFFFF" />
          <path d="M112 86 Q120 78 128 86" stroke="#212121" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M72 74 Q82 70 90 73" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
        `;
      case "couch":
        return `
          <!-- Ninad's Arrogant Half-Closed Couch Eyes -->
          <ellipse cx="80" cy="88" rx="8" ry="6.5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="81" cy="88" r="4.5" fill="#212121" />
          <path d="M72 82 Q80 84 88 82" stroke="#1B5E20" stroke-width="3" stroke-linecap="round" />
          <ellipse cx="120" cy="88" rx="8" ry="6.5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="119" cy="88" r="4.5" fill="#212121" />
          <path d="M112 82 Q120 84 128 82" stroke="#1B5E20" stroke-width="3" stroke-linecap="round" />
        `;
      case "bossy":
        return `
          <!-- Aaditi's Stare of Doom / Raised Eyebrow -->
          <path d="M70 70 Q82 62 92 70" stroke="#212121" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M108 74 Q118 70 128 75" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
          <ellipse cx="82" cy="85" rx="6" ry="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="83" cy="85" r="4.5" fill="#3E2723" />
          <circle cx="85" cy="83" r="1.5" fill="#FFFFFF" />
          <ellipse cx="118" cy="85" rx="6" ry="8" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="117" cy="85" r="4.5" fill="#3E2723" />
          <circle cx="119" cy="83" r="1.5" fill="#FFFFFF" />
        `;
      case "stars":
        return `
          <polygon points="80,75 83,82 91,82 85,87 87,95 80,90 73,95 75,87 69,82 77,82" fill="#FFD700" stroke="#FF6F00" stroke-width="1" />
          <polygon points="120,75 123,82 131,82 125,87 127,95 120,90 113,95 115,87 109,82 117,82" fill="#FFD700" stroke="#FF6F00" stroke-width="1" />
        `;
      default: // goofy
        return `
          <ellipse cx="80" cy="85" rx="7" ry="8.5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="82" cy="85" r="4.5" fill="#1B5E20" />
          <circle cx="84" cy="83" r="2" fill="#FFFFFF" />
          <ellipse cx="120" cy="85" rx="7" ry="8.5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.5" />
          <circle cx="118" cy="85" r="4.5" fill="#1B5E20" />
          <circle cx="120" cy="83" r="2" fill="#FFFFFF" />
          <path d="M72 73 Q82 68 90 72" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M110 72 Q118 68 128 73" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
        `;
    }
  }

  _renderEyewear(type) {
    switch (type) {
      case "sportSpecs":
        return `
          <!-- Virat's Cool Sport Specs -->
          <g>
            <rect x="66" y="74" width="30" height="22" rx="6" fill="#E1F5FE" fill-opacity="0.4" stroke="#01579B" stroke-width="3.5" />
            <rect x="104" y="74" width="30" height="22" rx="6" fill="#E1F5FE" fill-opacity="0.4" stroke="#01579B" stroke-width="3.5" />
            <path d="M96 85 L104 85" stroke="#01579B" stroke-width="3.5" />
            <path d="M66 84 L56 82" stroke="#01579B" stroke-width="3" />
            <path d="M134 84 L144 82" stroke="#01579B" stroke-width="3" />
            <line x1="71" y1="78" x2="79" y2="90" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" />
            <line x1="109" y1="78" x2="117" y2="90" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" />
          </g>
        `;
      case "techGlasses":
        return `
          <!-- Mayur Mama's Tech Specs -->
          <g>
            <rect x="68" y="75" width="28" height="20" rx="5" fill="#EDE7F6" fill-opacity="0.3" stroke="#212121" stroke-width="3.5" />
            <rect x="104" y="75" width="28" height="20" rx="5" fill="#EDE7F6" fill-opacity="0.3" stroke="#212121" stroke-width="3.5" />
            <line x1="96" y1="84" x2="104" y2="84" stroke="#212121" stroke-width="3.5" />
            <line x1="72" y1="78" x2="80" y2="90" stroke="#80D8FF" stroke-width="1.8" opacity="0.8" />
            <line x1="108" y1="78" x2="116" y2="90" stroke="#80D8FF" stroke-width="1.8" opacity="0.8" />
          </g>
        `;
      case "safetyGoggles":
        return `
          <!-- Devansh's Yellow Safety Goggles -->
          <g transform="translate(62, 45)">
            <path d="M-10 15 L85 15" stroke="#212121" stroke-width="4" />
            <circle cx="20" cy="14" r="16" fill="#81D4FA" stroke="#FFD600" stroke-width="5" opacity="0.9" />
            <circle cx="55" cy="14" r="16" fill="#81D4FA" stroke="#FFD600" stroke-width="5" opacity="0.9" />
            <rect x="33" y="11" width="10" height="5" fill="#FFD600" />
            <line x1="14" y1="8" x2="22" y2="18" stroke="#FFF" stroke-width="2" />
            <line x1="49" y1="8" x2="57" y2="18" stroke="#FFF" stroke-width="2" />
          </g>
        `;
      case "starShades":
        return `
          <!-- Tapasya's Star Sunglasses -->
          <g transform="translate(68, 48)">
            <polygon points="16,0 21,11 32,11 23,18 26,29 16,22 6,29 9,18 0,11 11,11" fill="#FFD700" stroke="#FF6F00" stroke-width="2" />
            <polygon points="48,0 53,11 64,11 55,18 58,29 48,22 38,29 41,18 32,11 43,11" fill="#FFD700" stroke="#FF6F00" stroke-width="2" />
            <line x1="28" y1="15" x2="36" y2="15" stroke="#FF6F00" stroke-width="3.5" />
          </g>
        `;
      case "retro3d":
        return `
          <g>
            <rect x="66" y="75" width="30" height="20" rx="3" fill="#FF1744" opacity="0.75" stroke="#212121" stroke-width="3" />
            <rect x="104" y="75" width="30" height="20" rx="3" fill="#00E5FF" opacity="0.75" stroke="#212121" stroke-width="3" />
            <rect x="96" y="80" width="8" height="6" fill="#FFFFFF" stroke="#212121" stroke-width="2" />
          </g>
        `;
      case "eyepatch":
        return `
          <g>
            <line x1="50" y1="68" x2="148" y2="98" stroke="#212121" stroke-width="3" />
            <ellipse cx="80" cy="85" rx="14" ry="16" fill="#212121" />
            <circle cx="80" cy="85" r="4" fill="#FFFFFF" />
          </g>
        `;
      case "vrVisor":
        return `
          <g transform="translate(60, 72)">
            <rect x="0" y="0" width="80" height="26" rx="8" fill="#1A237E" stroke="#00E5FF" stroke-width="3" />
            <line x1="8" y1="13" x2="72" y2="13" stroke="#76FF03" stroke-width="3" stroke-linecap="round" />
            <path d="M-8 12 L0 12" stroke="#00E5FF" stroke-width="3" />
            <path d="M80 12 L88 12" stroke="#00E5FF" stroke-width="3" />
          </g>
        `;
      default:
        return '';
    }
  }

  _renderMouth(type) {
    switch (type) {
      case "hangingTooth":
        return `
          <!-- Devansh's 1 Right-Middle Tooth Dangling Loose by a Thread! -->
          <g>
            <path d="M76 104 Q100 126 124 104 Z" fill="#B71C1C" stroke="#1E293B" stroke-width="2" />
            <rect x="83" y="104" width="7" height="6" rx="1" fill="#FFFFFF" />
            <rect x="91" y="104" width="7" height="6" rx="1" fill="#FFFFFF" />
            <!-- The hanging tooth tilted 26 degrees -->
            <g transform="translate(101, 105) rotate(26)">
              <rect x="0" y="0" width="7" height="9" rx="1.5" fill="#FFFDE7" stroke="#FFB300" stroke-width="1" />
              <line x1="0" y1="0" x2="-2" y2="-3" stroke="#E53935" stroke-width="1.2" />
            </g>
            <rect x="111" y="104" width="6" height="5" rx="1" fill="#FFFFFF" />
          </g>
        `;
      case "missingTeeth":
        return `
          <!-- Ninad's Gummy Window Smile with Most Teeth Missing! -->
          <g>
            <path d="M78 104 Q100 126 122 104 Z" fill="#B71C1C" stroke="#1E293B" stroke-width="2" />
            <path d="M84 105 Q100 115 116 105 Z" fill="#3E2723" opacity="0.6" />
            <!-- Lone left tooth -->
            <rect x="83" y="104" width="5" height="5" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
            <!-- Giant gap in middle! -->
            <!-- Lone right tooth -->
            <rect x="112" y="104" width="5" height="4.5" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
            <!-- Lone bottom tooth -->
            <rect x="94" y="115" width="4" height="4" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
            <ellipse cx="104" cy="118" rx="8" ry="4" fill="#FF5252" />
          </g>
        `;
      case "panipuri":
        return `
          <!-- Tapasya Munching Panipuri -->
          <g>
            <ellipse cx="100" cy="110" rx="10" ry="12" fill="#AD1457" stroke="#1E293B" stroke-width="1.5" />
            <ellipse cx="100" cy="114" rx="7" ry="6" fill="#FF80AB" />
            <!-- Crispy Puri right at mouth -->
            <circle cx="112" cy="108" r="8" fill="#FFA726" stroke="#E65100" stroke-width="1.2" />
            <circle cx="112" cy="106" r="3" fill="#43A047" />
          </g>
        `;
      case "bubblegum":
        return `
          <g>
            <path d="M88 110 Q100 120 112 110" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none" />
            <circle cx="100" cy="112" r="16" fill="#F48FB1" stroke="#EC407A" stroke-width="2" opacity="0.9" />
            <ellipse cx="95" cy="107" rx="4" ry="2" fill="#FFFFFF" opacity="0.9" transform="rotate(-30 95 107)" />
          </g>
        `;
      case "smirk":
        return `
          <path d="M86 108 Q100 118 118 107" stroke="#C2185B" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <path d="M116 106 Q121 103 118 112" stroke="#C2185B" stroke-width="2.5" stroke-linecap="round" fill="none" />
        `;
      default: // bigSmile
        return `
          <path d="M82 106 Q100 124 118 106 Z" fill="#D32F2F" stroke="#1E293B" stroke-width="2" />
          <rect x="88" y="106" width="24" height="6" rx="1.5" fill="#FFFFFF" />
        `;
    }
  }

  _renderHat(type) {
    if (!type || type === "none") return '';
    return renderCustomHat(type);
  }

  _renderProp(type) {
    switch (type) {
      case "badminton":
        return `
          <g transform="translate(142, 65) rotate(25)">
            <ellipse cx="10" cy="10" rx="11" ry="15" fill="none" stroke="#2979FF" stroke-width="2.5" />
            <line x1="4" y1="10" x2="16" y2="10" stroke="#90CAF9" stroke-width="1" />
            <line x1="10" y1="2" x2="10" y2="18" stroke="#90CAF9" stroke-width="1" />
            <rect x="9" y="24" width="3" height="36" fill="#424242" />
          </g>
          <g transform="translate(24, 118)">
            <circle cx="14" cy="14" r="14" fill="#FFFFFF" stroke="#212121" stroke-width="2" />
            <polygon points="14,6 19,10 17,16 11,16 9,10" fill="#212121" />
          </g>
        `;
      case "cricket":
        return `
          <g transform="translate(142, 75) rotate(25)">
            <rect x="8" y="0" width="6" height="22" rx="2" fill="#E53935" />
            <path d="M5 22 L17 22 L15 70 L7 70 Z" fill="#D7CCC8" stroke="#8D6E63" stroke-width="1.5" />
            <line x1="11" y1="25" x2="11" y2="65" stroke="#A1887F" stroke-width="1" />
          </g>
          <g class="animated-float" transform="translate(24, 115)">
            <circle cx="12" cy="12" r="12" fill="#C62828" stroke="#8E0000" stroke-width="1.5" />
            <path d="M4 12 Q12 16 20 12" stroke="#FFF" stroke-width="1.5" stroke-dasharray="2,2" fill="none" />
          </g>
        `;
      case "tablet":
        return `
          <g transform="translate(118, 100) rotate(12)">
            <rect x="0" y="0" width="46" height="30" rx="4" fill="#212121" stroke="#FF5722" stroke-width="2" />
            <rect x="3" y="3" width="40" height="24" rx="2" fill="#263238" />
            <text x="23" y="19" font-size="13" text-anchor="middle">🔥🎮</text>
          </g>
        `;
      case "panipuri":
        return `
          <g transform="translate(24, 115)">
            <ellipse cx="16" cy="20" rx="18" ry="7" fill="#B0BEC5" stroke="#78909C" stroke-width="1.5" />
            <circle cx="16" cy="13" r="11" fill="#FFA726" stroke="#E65100" stroke-width="1.5" />
            <circle cx="16" cy="9" r="4.5" fill="#43A047" />
            <text x="28" y="8" font-size="10">🥣</text>
          </g>
        `;
      case "laptop":
        return `
          <g transform="translate(132, 115) rotate(15)">
            <rect x="0" y="0" width="30" height="22" rx="3" fill="#37474F" stroke="#263238" stroke-width="2" />
            <rect x="2" y="2" width="26" height="18" rx="2" fill="#00E5FF" opacity="0.9" />
            <line x1="5" y1="6" x2="18" y2="6" stroke="#004D40" stroke-width="1.5" />
            <line x1="5" y1="10" x2="22" y2="10" stroke="#004D40" stroke-width="1.5" />
          </g>
        `;
      case "travel":
        return `
          <g class="animated-float" transform="translate(142, 38)">
            <text x="0" y="0" font-size="20">✈️</text>
          </g>
          <g transform="translate(25, 120) rotate(-12)">
            <rect x="0" y="0" width="22" height="18" rx="3" fill="#880E4F" stroke="#AD1457" stroke-width="1.5" />
            <rect x="4" y="4" width="14" height="4" fill="#FFD700" />
            <text x="11" y="15" font-size="7" font-weight="bold" fill="#FFF" text-anchor="middle">PASSPORT</text>
          </g>
        `;
      case "pizza":
        return `
          <g transform="translate(24, 115)">
            <polygon points="15,0 32,32 0,30" fill="#FFC107" stroke="#FFA000" stroke-width="2" />
            <circle cx="16" cy="18" r="3.5" fill="#D32F2F" />
            <circle cx="10" cy="24" r="3" fill="#D32F2F" />
            <circle cx="22" cy="22" r="3" fill="#D32F2F" />
          </g>
        `;
      case "cookie":
        return `
          <g transform="translate(24, 115)">
            <circle cx="14" cy="14" r="14" fill="#D7CCC8" stroke="#8D6E63" stroke-width="1.5" />
            <circle cx="9" cy="10" r="2.5" fill="#4E342E" />
            <circle cx="18" cy="12" r="2" fill="#4E342E" />
            <circle cx="12" cy="19" r="2.5" fill="#4E342E" />
          </g>
        `;
      default:
        return '';
    }
  }

  // 🎲 Random Chaos Shuffler!
  shuffleRandom() {
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    this.currentConfig = {
      skinTone: pick(AVATAR_OPTIONS.skinTones).color,
      hairStyle: pick(AVATAR_OPTIONS.hairStyles).id,
      hairColor: pick(AVATAR_OPTIONS.hairColors).color,
      eyewear: pick(AVATAR_OPTIONS.eyewear).id,
      mouthTeeth: pick(AVATAR_OPTIONS.mouthTeeth).id,
      eyes: pick(AVATAR_OPTIONS.eyes).id,
      shirtColor: pick(AVATAR_OPTIONS.shirtColors).color,
      prop: pick(AVATAR_OPTIONS.props).id,
      hat: pick(AVATAR_OPTIONS.hats).id,
      speechBubble: pick(AVATAR_OPTIONS.speechBubbles)
    };

    return this.currentConfig;
  }

  // Load a preset
  loadPreset(presetId) {
    if (COUSIN_PRESETS[presetId]) {
      this.currentConfig = { ...COUSIN_PRESETS[presetId] };
      this.activePreset = presetId;
      return this.currentConfig;
    }
    return null;
  }

  // Update a single property
  setProp(key, value) {
    this.currentConfig[key] = value;
  }

  // Generate a hilarious dynamic title for current avatar
  generateComboTitle() {
    const cfg = this.currentConfig;
    if (this.activePreset && COUSIN_PRESETS[this.activePreset]) {
      const p = this.activePreset;
      if (p === 'aaditi') return "👑 Aaditi • Eldest Boss & Galactic Explorer";
      if (p === 'tapasya') return "🥣 Tapasya • Diva Panipuri Empress";
      if (p === 'devansh') return "🏸 Devansh • 1-Tooth Badminton Rocket";
      if (p === 'virat') return "🏏 Virat • Specs Maestro of Sixes";
      if (p === 'ninad') return "🛋️ Ninad • 'PAGAL!' Couch Potato Free Fire Pro";
      if (p === 'mayur') return "💻 Mayur Mama • Tech Guru & Cookie Fiend";
    }

    const skinNames = {
      "#FCD8B8": "Fair Peach",
      "#F5CBA7": "Warm Honey",
      "#E0AC69": "Sun Bronze",
      "#C68642": "Deep Caramel",
      "#8D5524": "Rich Cocoa",
      "#A5D6A7": "👽 Alien",
      "#80DEEA": "🛸 Cyber Smurf",
      "#F48FB1": "🌸 Cotton Candy"
    };

    const eyeMods = {
      sportSpecs: "Specs",
      techGlasses: "Code-Glasses",
      safetyGoggles: "Goggle",
      starShades: "Star-Diva",
      retro3d: "3D-Vision",
      eyepatch: "Pirate",
      vrVisor: "VR-Matrix"
    };

    const mouthMods = {
      hangingTooth: "Loose-Tooth",
      missingTeeth: "Gap-Tooth 'PAGAL!'",
      panipuri: "Panipuri Muncher",
      bubblegum: "Bubblegum Popper",
      smirk: "Boss-Smirk",
      bigSmile: "Grinning"
    };

    const propMods = {
      badminton: "Badminton Striker 🏸",
      cricket: "Cricket Batter 🏏",
      tablet: "Free Fire Gamer 📱",
      panipuri: "Snack Legend 🥣",
      laptop: "Code Wizard 💻",
      travel: "World Traveler ✈️",
      pizza: "Pizza Crusader 🍕",
      cookie: "Cookie Thief 🍪",
      none: "Chaos Maverick 💥"
    };

    const skinPart = skinNames[cfg.skinTone] || "Turbo";
    const facePart = mouthMods[cfg.mouthTeeth] || eyeMods[cfg.eyewear] || "Silly";
    const propPart = propMods[cfg.prop] || "Legend";

    return `${skinPart} ${facePart} ${propPart}`;
  }

  // Render Preview to container
  renderPreview(containerId = 'generator-preview-box') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = this.renderSvg(this.currentConfig);
    container.classList.remove("pop-in");
    void container.offsetWidth;
    container.classList.add("pop-in");

    const titleEl = document.getElementById("avatar-combo-title");
    if (titleEl) {
      titleEl.innerText = this.generateComboTitle();
    }
  }

  // Synchronize active highlights across all controls
  updateControlsActiveState() {
    const cfg = this.currentConfig;
    const buttons = document.querySelectorAll(".avatar-customizer-panel button[data-type]");
    buttons.forEach(btn => {
      const type = btn.dataset.type;
      const val = btn.dataset.value;
      if (cfg[type] === val) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const presetBtns = document.querySelectorAll(".avatar-preset-btn[data-preset]");
    presetBtns.forEach(btn => {
      if (btn.dataset.preset === this.activePreset) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Download high-resolution PNG using offscreen HTML5 Canvas
  downloadPng(filename = 'my-cousin-avatar.png') {
    try {
      const svgString = this.renderSvg(this.currentConfig);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);
      
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        
        // Draw crisp background circle & avatar
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 600, 600);
        ctx.drawImage(image, 0, 0, 600, 600);
        
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = filename;
        downloadLink.href = pngUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobURL);
        
        this.showToast("Avatar downloaded! Ready for WhatsApp or Profile! 📸🎉");
        if (window.soundFx && typeof window.soundFx.fanfare === "function") window.soundFx.fanfare();
        if (window.triggerConfetti) window.triggerConfetti(60);
      };
      image.onerror = () => {
        this.showToast("Export fallback: Right-click avatar to save! 🎨");
      };
      image.src = blobURL;
    } catch (e) {
      console.warn("Download error:", e);
      this.showToast("Failed to download avatar. Right-click SVG instead! 🎨");
    }
  }

  // Copy raw SVG to clipboard
  copySvg() {
    const svgString = this.renderSvg(this.currentConfig);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(svgString).then(() => {
        this.showToast("Avatar SVG copied to clipboard! 📋✨");
        if (window.soundFx) window.soundFx.pop();
      }).catch(() => {
        this._fallbackCopy(svgString);
      });
    } else {
      this._fallbackCopy(svgString);
    }
  }

  _fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      this.showToast("Avatar SVG copied! 📋✨");
    } catch (err) {
      this.showToast("Could not copy automatically. 😅");
    }
    document.body.removeChild(ta);
  }

  // Speak Catchphrase aloud
  speakCatchphrase() {
    const bubble = this.currentConfig.speechBubble;
    if (!bubble || bubble === "None") {
      this.showToast("No catchphrase chosen! Pick one below 💬");
      return;
    }

    if (bubble.includes("PAGAL") && window.soundFx && typeof window.soundFx.pagal === "function") {
      window.soundFx.pagal();
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = bubble.replace(/[^\w\s!?,]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText || bubble);
      utterance.pitch = 1.3;
      utterance.rate = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  }

  // Display unobtrusive toast badge
  showToast(message) {
    let toast = document.getElementById("avatar-gen-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "avatar-gen-toast";
      toast.className = "avatar-gen-toast";
      document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add("show");
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // Initialize UI interactive controls
  initUI() {
    const previewEl = document.getElementById("generator-preview-box");
    if (!previewEl) return;

    // 1. Populate Skin Swatches
    const skinContainer = document.getElementById("swatches-skin");
    if (skinContainer) {
      skinContainer.innerHTML = AVATAR_OPTIONS.skinTones.map(s => `
        <button class="color-swatch-btn ${this.currentConfig.skinTone === s.color ? 'active' : ''}" 
                data-type="skinTone" data-value="${s.color}" 
                title="${s.label}" 
                style="background: ${s.color};">
        </button>
      `).join('');
    }

    // 2. Populate Eyewear & Goggles Pills
    const eyewearContainer = document.getElementById("pills-eyewear");
    if (eyewearContainer) {
      eyewearContainer.innerHTML = AVATAR_OPTIONS.eyewear.map(e => `
        <button class="prop-pill ${this.currentConfig.eyewear === e.id ? 'active' : ''}" 
                data-type="eyewear" data-value="${e.id}">
          ${e.label}
        </button>
      `).join('');
    }

    // 3. Populate Mouth/Teeth Pills
    const mouthContainer = document.getElementById("pills-mouth");
    if (mouthContainer) {
      mouthContainer.innerHTML = AVATAR_OPTIONS.mouthTeeth.map(m => `
        <button class="prop-pill ${this.currentConfig.mouthTeeth === m.id ? 'active' : ''}" 
                data-type="mouthTeeth" data-value="${m.id}">
          ${m.label}
        </button>
      `).join('');
    }

    // 4. Populate Hair Style Pills
    const hairStyleContainer = document.getElementById("pills-hair-style");
    if (hairStyleContainer) {
      hairStyleContainer.innerHTML = AVATAR_OPTIONS.hairStyles.map(h => `
        <button class="prop-pill ${this.currentConfig.hairStyle === h.id ? 'active' : ''}" 
                data-type="hairStyle" data-value="${h.id}">
          ${h.label}
        </button>
      `).join('');
    }

    // 5. Populate Hair Color Swatches
    const hairColorContainer = document.getElementById("swatches-hair-color");
    if (hairColorContainer) {
      hairColorContainer.innerHTML = AVATAR_OPTIONS.hairColors.map(c => `
        <button class="color-swatch-btn ${this.currentConfig.hairColor === c.color ? 'active' : ''}" 
                data-type="hairColor" data-value="${c.color}" 
                title="${c.label}" 
                style="background: ${c.color};">
        </button>
      `).join('');
    }

    // 6. Populate Eyes Pills
    const eyesContainer = document.getElementById("pills-eyes");
    if (eyesContainer) {
      eyesContainer.innerHTML = AVATAR_OPTIONS.eyes.map(e => `
        <button class="prop-pill ${this.currentConfig.eyes === e.id ? 'active' : ''}" 
                data-type="eyes" data-value="${e.id}">
          ${e.label}
        </button>
      `).join('');
    }

    // 7. Populate Hoodie Swatches
    const shirtContainer = document.getElementById("swatches-shirt");
    if (shirtContainer) {
      shirtContainer.innerHTML = AVATAR_OPTIONS.shirtColors.map(s => `
        <button class="color-swatch-btn ${this.currentConfig.shirtColor === s.color ? 'active' : ''}" 
                data-type="shirtColor" data-value="${s.color}" 
                title="${s.label}" 
                style="background: ${s.color};">
        </button>
      `).join('');
    }

    // 8. Populate Hats Pills
    const hatsContainer = document.getElementById("pills-hats");
    if (hatsContainer) {
      hatsContainer.innerHTML = AVATAR_OPTIONS.hats.map(h => `
        <button class="prop-pill ${this.currentConfig.hat === h.id ? 'active' : ''}" 
                data-type="hat" data-value="${h.id}">
          ${h.label}
        </button>
      `).join('');
    }

    // 9. Populate Props Pills
    const propsContainer = document.getElementById("pills-props");
    if (propsContainer) {
      propsContainer.innerHTML = AVATAR_OPTIONS.props.map(p => `
        <button class="prop-pill ${this.currentConfig.prop === p.id ? 'active' : ''}" 
                data-type="prop" data-value="${p.id}">
          ${p.label}
        </button>
      `).join('');
    }

    // 10. Populate Speech Bubbles Pills
    const speechContainer = document.getElementById("pills-speech");
    if (speechContainer) {
      speechContainer.innerHTML = AVATAR_OPTIONS.speechBubbles.map(b => `
        <button class="prop-pill ${this.currentConfig.speechBubble === b ? 'active' : ''}" 
                data-type="speechBubble" data-value="${b}">
          ${b === 'None' ? '🚫 None' : b}
        </button>
      `).join('');
    }

    // Customizer Panel Delegated Click Handler
    const customizerPanel = document.querySelector(".avatar-customizer-panel");
    if (customizerPanel) {
      customizerPanel.addEventListener("click", (e) => {
        const target = e.target.closest("button[data-type]");
        if (!target) return;
        const type = target.dataset.type;
        const val = target.dataset.value;
        this.activePreset = null;
        this.setProp(type, val);
        this.renderPreview();
        this.updateControlsActiveState();
        if (window.soundFx) {
          if (val === "PAGAL! 🛋️" || val === "missingTeeth") {
            window.soundFx.pagal();
          } else {
            window.soundFx.pop();
          }
        }
      });
    }

    // Quick Preset Buttons
    const presetBtns = document.querySelectorAll(".avatar-preset-btn[data-preset]");
    presetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        presetBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const presetId = btn.dataset.preset;
        this.loadPreset(presetId);
        this.renderPreview();
        this.updateControlsActiveState();
        if (window.soundFx) {
          if (presetId === "ninad") {
            window.soundFx.pagal();
          } else {
            window.soundFx.boing();
          }
        }
        if (window.triggerConfetti) window.triggerConfetti(40);
      });
    });

    // Chaos Shuffler Button
    const shuffleBtn = document.getElementById("generator-shuffle-btn");
    const chaosPresetBtn = document.getElementById("avatar-chaos-btn");
    const doShuffle = () => {
      this.activePreset = null;
      presetBtns.forEach(b => b.classList.remove("active"));
      if (chaosPresetBtn) chaosPresetBtn.classList.add("active");
      this.shuffleRandom();
      this.renderPreview();
      this.updateControlsActiveState();
      if (window.soundFx) window.soundFx.boing();
      if (window.triggerConfetti) window.triggerConfetti(70);
    };

    if (shuffleBtn) shuffleBtn.addEventListener("click", doShuffle);
    if (chaosPresetBtn) chaosPresetBtn.addEventListener("click", doShuffle);

    // Download Button
    const downloadBtn = document.getElementById("generator-download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        const name = (this.activePreset || "squad-chaos") + "-avatar.png";
        this.downloadPng(name);
      });
    }

    // Say Catchphrase Button
    const sayBtn = document.getElementById("generator-say-btn");
    if (sayBtn) {
      sayBtn.addEventListener("click", () => this.speakCatchphrase());
    }

    // Copy SVG Button
    const copyBtn = document.getElementById("generator-copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copySvg());
    }

    // Initial render & active states
    this.renderPreview();
    this.updateControlsActiveState();
  }
}

// Global Avatar Generator Engine instance
window.avatarEngine = new ModularAvatarEngine();
window.AVATAR_OPTIONS = AVATAR_OPTIONS;
window.COUSIN_PRESETS = COUSIN_PRESETS;
