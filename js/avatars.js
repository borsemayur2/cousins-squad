// Interactive Avatars Engine: Scalable Vector Graphics (SVG) + 3D Generated Portraits + Silly Dress-Up Overlays

const AVATAR_SVGS = {
  aaditi: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-aaditi" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E1" />
          <stop offset="100%" stop-color="#FF69B4" />
        </radialGradient>
        <linearGradient id="hair-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#212121" />
          <stop offset="100%" stop-color="#111111" />
        </linearGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-aaditi)" stroke="#FF1493" stroke-width="5" />
      
      <!-- High Ponytail Hair (Back) -->
      <path d="M125 50 C165 40, 185 85, 175 125 C165 110, 145 95, 125 70 Z" fill="url(#hair-dark)" />
      <!-- Ponytail Scrunchie -->
      <ellipse cx="130" cy="55" rx="10" ry="12" fill="#FF1493" />
      
      <!-- Body / Shoulders (Pink Royal Hoodie) -->
      <path d="M40 185 C40 145, 65 135, 100 135 C135 135, 160 145, 160 185 Z" fill="#E91E63" />
      <!-- Collar & Gold Medal -->
      <path d="M85 135 L100 155 L115 135 Z" fill="#FFE4E1" />
      <circle cx="100" cy="165" r="14" fill="#FFD700" stroke="#FFA000" stroke-width="2" />
      <text x="100" y="170" font-size="11" font-weight="bold" fill="#B71C1C" text-anchor="middle">#1</text>

      <!-- Head & Neck -->
      <rect x="90" y="115" width="20" height="25" rx="5" fill="#FCD8B8" />
      <ellipse cx="100" cy="90" rx="42" ry="46" fill="#FCD8B8" />

      <!-- Ears -->
      <circle cx="56" cy="92" r="10" fill="#FCD8B8" />
      <circle cx="144" cy="92" r="10" fill="#FCD8B8" />
      <circle cx="56" cy="97" r="3" fill="#FFD700" />
      <circle cx="144" cy="97" r="3" fill="#FFD700" />

      <!-- Hair Front / Bangs -->
      <path d="M58 85 C58 45, 142 45, 142 85 C130 65, 115 60, 100 65 C85 60, 70 65, 58 85 Z" fill="url(#hair-dark)" />
      <path d="M58 85 Q75 110 70 120 Q62 105 58 85 Z" fill="url(#hair-dark)" />
      <path d="M142 85 Q125 110 130 120 Q138 105 142 85 Z" fill="url(#hair-dark)" />

      <!-- Eyes & Brows -->
      <path d="M72 74 Q83 67 92 73" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M108 72 Q117 66 128 73" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
      <ellipse cx="82" cy="85" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="83" cy="85" r="4" fill="#3E2723" />
      <circle cx="85" cy="83" r="1.5" fill="#FFFFFF" />
      <ellipse cx="118" cy="85" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="117" cy="85" r="4" fill="#3E2723" />
      <circle cx="119" cy="83" r="1.5" fill="#FFFFFF" />

      <!-- Stylish Pink Glasses -->
      <rect x="70" y="76" width="24" height="18" rx="6" fill="none" stroke="#FF1493" stroke-width="3.5" />
      <rect x="106" y="76" width="24" height="18" rx="6" fill="none" stroke="#FF1493" stroke-width="3.5" />
      <path d="M94 85 L106 85" stroke="#FF1493" stroke-width="3.5" />

      <!-- Rosy Cheeks & Nose -->
      <circle cx="70" cy="98" r="7" fill="#FF80AB" opacity="0.5" />
      <circle cx="130" cy="98" r="7" fill="#FF80AB" opacity="0.5" />
      <path d="M98 90 Q100 95 102 90" stroke="#E0A985" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Boss Smirk -->
      <path d="M88 108 Q100 118 116 109" stroke="#C2185B" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M114 107 Q119 105 116 112" stroke="#C2185B" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Default Tiara Crown -->
      ${customHat ? renderCustomHat(customHat) : `
        <g class="animated-float">
          <path d="M78 48 L86 28 L100 40 L114 28 L122 48 Z" fill="#FFD700" stroke="#FF8F00" stroke-width="2" />
          <circle cx="86" cy="28" r="3" fill="#E91E63" />
          <circle cx="100" cy="40" r="3" fill="#00E676" />
          <circle cx="114" cy="28" r="3" fill="#2979FF" />
          <path d="M135 25 L138 33 L146 36 L138 39 L135 47 L132 39 L124 36 L132 33 Z" fill="#FFF" opacity="0.8" />
        </g>
      `}
      <!-- Aaditi Loves Travelling: Jet & Passport -->
      <g class="animated-float" transform="translate(142, 38)">
        <text x="0" y="0" font-size="20">✈️</text>
      </g>
      <g transform="translate(25, 120) rotate(-12)">
        <rect x="0" y="0" width="22" height="18" rx="3" fill="#880E4F" stroke="#AD1457" stroke-width="1.5" />
        <rect x="4" y="4" width="14" height="4" fill="#FFD700" />
        <text x="11" y="15" font-size="7" font-weight="bold" fill="#FFF" text-anchor="middle">PASSPORT</text>
      </g>
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `,

  tapasya: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-tapasya" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F3E5F5" />
          <stop offset="100%" stop-color="#CE93D8" />
        </radialGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-tapasya)" stroke="#9C27B0" stroke-width="5" />

      <!-- Curly Pigtails Hair -->
      <circle cx="48" cy="90" r="24" fill="#212121" />
      <circle cx="152" cy="90" r="24" fill="#212121" />
      <path d="M42 70 L54 75 L45 82 Z" fill="#FF4081" />
      <path d="M158 70 L146 75 L155 82 Z" fill="#FF4081" />

      <!-- Body / Purple Hoodie -->
      <path d="M45 185 C45 145, 68 135, 100 135 C132 135, 155 145, 155 185 Z" fill="#8E24AA" />
      <path d="M100 152 L103 160 L112 160 L105 165 L108 173 L100 168 L92 173 L95 165 L88 160 L97 160 Z" fill="#FFEB3B" />

      <!-- Head & Neck -->
      <rect x="91" y="115" width="18" height="25" rx="5" fill="#FCD8B8" />
      <ellipse cx="100" cy="92" rx="40" ry="44" fill="#FCD8B8" />

      <!-- Ears -->
      <circle cx="58" cy="94" r="9" fill="#FCD8B8" />
      <circle cx="142" cy="94" r="9" fill="#FCD8B8" />

      <!-- Hair Front -->
      <path d="M60 85 C60 45, 140 45, 140 85 C125 65, 110 65, 100 68 C90 65, 75 65, 60 85 Z" fill="#212121" />

      <!-- Big Expressive Singing Eyes -->
      <ellipse cx="80" cy="85" rx="7" ry="9" fill="#FFFFFF" />
      <circle cx="81" cy="85" r="5" fill="#4A148C" />
      <circle cx="83" cy="82" r="2" fill="#FFFFFF" />
      <ellipse cx="120" cy="85" rx="7" ry="9" fill="#FFFFFF" />
      <circle cx="119" cy="85" r="5" fill="#4A148C" />
      <circle cx="121" cy="82" r="2" fill="#FFFFFF" />

      <!-- Cheeks & Singing Mouth -->
      <circle cx="70" cy="100" r="8" fill="#FF4081" opacity="0.6" />
      <circle cx="130" cy="100" r="8" fill="#FF4081" opacity="0.6" />
      <ellipse cx="100" cy="110" rx="10" ry="12" fill="#AD1457" />
      <ellipse cx="100" cy="114" rx="7" ry="6" fill="#FF80AB" />

      <!-- Popstar Microphone -->
      <g transform="translate(136, 110) rotate(-20)">
        <rect x="0" y="15" width="7" height="26" rx="2" fill="#424242" />
        <circle cx="3.5" cy="10" r="9" fill="#E0E0E0" stroke="#757575" stroke-width="1.5" />
      </g>

      <!-- Tapasya Loves Panipuri! Golden Puri with spicy mint splash -->
      <g transform="translate(24, 115)">
        <ellipse cx="16" cy="20" rx="18" ry="7" fill="#B0BEC5" stroke="#78909C" stroke-width="1.5" />
        <circle cx="16" cy="13" r="11" fill="#FFA726" stroke="#E65100" stroke-width="1.5" />
        <circle cx="16" cy="9" r="4.5" fill="#43A047" />
        <text x="28" y="8" font-size="10">🥣</text>
      </g>

      <!-- Floating Musical Notes -->
      <g class="animated-float">
        <text x="35" y="55" font-size="22" fill="#E91E63">♪</text>
        <text x="145" y="45" font-size="26" fill="#9C27B0">♫</text>
      </g>

      <!-- Default Star Glasses on Head -->
      ${customHat ? renderCustomHat(customHat) : `
        <g transform="translate(68, 48)">
          <polygon points="16,0 21,11 32,11 23,18 26,29 16,22 6,29 9,18 0,11 11,11" fill="#FFD700" stroke="#FF6F00" stroke-width="1.5" />
          <polygon points="48,0 53,11 64,11 55,18 58,29 48,22 38,29 41,18 32,11 43,11" fill="#FFD700" stroke="#FF6F00" stroke-width="1.5" />
          <line x1="28" y1="15" x2="36" y2="15" stroke="#FF6F00" stroke-width="3" />
        </g>
      `}
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `,

  devansh: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-devansh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF3E0" />
          <stop offset="100%" stop-color="#FFB74D" />
        </radialGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-devansh)" stroke="#F57C00" stroke-width="5" />

      <!-- Spiky Wild Athletic Hair -->
      <path d="M55 70 L45 45 L70 55 L85 30 L105 50 L125 32 L135 55 L155 45 L145 75 Z" fill="#3E2723" />

      <!-- Body / Orange Sports Hoodie -->
      <path d="M45 185 C45 145, 68 135, 100 135 C132 135, 155 145, 155 185 Z" fill="#FB8C00" />
      <circle cx="100" cy="162" r="12" fill="#FFF" />
      <!-- Sports Shuttlecock Logo -->
      <text x="100" y="166" font-size="11" text-anchor="middle">🏸</text>

      <!-- Head & Neck -->
      <rect x="91" y="115" width="18" height="25" rx="5" fill="#FCD8B8" />
      <ellipse cx="100" cy="92" rx="41" ry="44" fill="#FCD8B8" />

      <!-- Band-aid on cheek (Athlete battle scar) -->
      <rect x="68" y="98" width="16" height="7" rx="2" fill="#D7CCC8" transform="rotate(15, 68, 98)" />
      <circle cx="75" cy="100" r="1.5" fill="#A1887F" />

      <!-- Ears & Cowlick Hair -->
      <circle cx="57" cy="93" r="9" fill="#FCD8B8" />
      <circle cx="143" cy="93" r="9" fill="#FCD8B8" />
      <path d="M60 80 C60 48, 140 48, 140 80 C125 65, 110 65, 95 62 C85 62, 72 68, 60 80 Z" fill="#3E2723" />

      <!-- Goofy Excited Athletic Eyes -->
      <ellipse cx="80" cy="85" rx="7" ry="8" fill="#FFFFFF" />
      <circle cx="82" cy="85" r="4.5" fill="#1B5E20" />
      <circle cx="84" cy="83" r="2" fill="#FFFFFF" />
      <ellipse cx="120" cy="85" rx="7" ry="8" fill="#FFFFFF" />
      <circle cx="118" cy="85" r="4.5" fill="#1B5E20" />
      <circle cx="120" cy="83" r="2" fill="#FFFFFF" />

      <!-- Big Toothy Goofy Grin with 1 RIGHT-MIDDLE TOOTH HANGING LOOSE! -->
      <path d="M76 104 Q100 126 124 104 Z" fill="#B71C1C" />
      <!-- Solid left teeth -->
      <rect x="83" y="104" width="7" height="6" rx="1" fill="#FFFFFF" />
      <rect x="91" y="104" width="7" height="6" rx="1" fill="#FFFFFF" />
      
      <!-- THE FAMOUS RIGHT MIDDLE TOOTH: Dangler hanging by a thread! -->
      <g transform="translate(101, 105) rotate(26)">
        <rect x="0" y="0" width="7" height="9" rx="1.5" fill="#FFFDE7" stroke="#FFB300" stroke-width="1" />
        <!-- tiny gum thread -->
        <line x1="0" y1="0" x2="-2" y2="-3" stroke="#E53935" stroke-width="1.2" />
      </g>
      <!-- Far right tooth -->
      <rect x="111" y="104" width="6" height="5" rx="1" fill="#FFFFFF" />

      <!-- Badminton Racket in Hand -->
      <g transform="translate(142, 65) rotate(25)">
        <ellipse cx="10" cy="10" rx="11" ry="15" fill="none" stroke="#2979FF" stroke-width="2.5" />
        <line x1="4" y1="10" x2="16" y2="10" stroke="#90CAF9" stroke-width="1" />
        <line x1="10" y1="2" x2="10" y2="18" stroke="#90CAF9" stroke-width="1" />
        <rect x="9" y="24" width="3" height="36" fill="#424242" />
      </g>

      <!-- Mini Football on Left -->
      <g transform="translate(24, 118)">
        <circle cx="14" cy="14" r="14" fill="#FFFFFF" stroke="#212121" stroke-width="2" />
        <polygon points="14,6 19,10 17,16 11,16 9,10" fill="#212121" />
        <line x1="14" y1="6" x2="14" y2="0" stroke="#212121" stroke-width="1.2" />
        <line x1="19" y1="10" x2="26" y2="8" stroke="#212121" stroke-width="1.2" />
      </g>

      <!-- Sports Sweatband -->
      ${customHat ? renderCustomHat(customHat) : `
        <g>
          <rect x="56" y="60" width="88" height="12" rx="3" fill="#D50000" />
          <line x1="56" y1="66" x2="144" y2="66" stroke="#FFF" stroke-width="2" />
        </g>
      `}
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `,

  virat: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-virat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E1F5FE" />
          <stop offset="100%" stop-color="#81D4FA" />
        </radialGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-virat)" stroke="#0288D1" stroke-width="5" />

      <!-- Speed Wind Lines -->
      <path d="M15 80 L35 80" stroke="#0288D1" stroke-width="3" stroke-linecap="round" opacity="0.6" />
      <path d="M20 95 L40 95" stroke="#0288D1" stroke-width="4" stroke-linecap="round" opacity="0.7" />
      <path d="M12 110 L30 110" stroke="#0288D1" stroke-width="2.5" stroke-linecap="round" opacity="0.5" />

      <!-- Body / Blue Sports Jersey -->
      <path d="M45 185 C45 145, 68 135, 100 135 C132 135, 155 145, 155 185 Z" fill="#0288D1" />
      <path d="M85 135 L95 185" stroke="#FFF" stroke-width="3" />
      <path d="M115 135 L105 185" stroke="#FFF" stroke-width="3" />
      <text x="100" y="165" font-size="14" font-weight="bold" fill="#FFEB3B" text-anchor="middle">⚡</text>

      <!-- Head & Neck -->
      <rect x="91" y="115" width="18" height="25" rx="5" fill="#FCD8B8" />
      <ellipse cx="100" cy="92" rx="40" ry="44" fill="#FCD8B8" />

      <!-- Ears -->
      <circle cx="58" cy="94" r="9" fill="#FCD8B8" />
      <circle cx="142" cy="94" r="9" fill="#FCD8B8" />

      <!-- Eyes Behind Specs -->
      <ellipse cx="80" cy="86" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="82" cy="86" r="4.5" fill="#212121" />
      <circle cx="84" cy="84" r="1.5" fill="#FFFFFF" />
      <ellipse cx="120" cy="86" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="118" cy="86" r="4.5" fill="#212121" />
      <circle cx="120" cy="84" r="1.5" fill="#FFFFFF" />

      <!-- VIRAT'S COOL SIGNATURE SPECS! -->
      <g>
        <!-- Left Frame -->
        <rect x="66" y="74" width="30" height="22" rx="6" fill="#E1F5FE" fill-opacity="0.45" stroke="#01579B" stroke-width="3.5" />
        <!-- Right Frame -->
        <rect x="104" y="74" width="30" height="22" rx="6" fill="#E1F5FE" fill-opacity="0.45" stroke="#01579B" stroke-width="3.5" />
        <!-- Bridge -->
        <path d="M96 85 L104 85" stroke="#01579B" stroke-width="3.5" />
        <!-- Ear Temples -->
        <path d="M66 84 L56 82" stroke="#01579B" stroke-width="3" />
        <path d="M134 84 L144 82" stroke="#01579B" stroke-width="3" />
        <!-- Shiny Glint on Glasses -->
        <line x1="71" y1="78" x2="79" y2="90" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" />
        <line x1="109" y1="78" x2="117" y2="90" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- Champion Grin -->
      <path d="M84 108 Q100 122 118 108" stroke="#D32F2F" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M96 114 Q100 120 104 114 Z" fill="#FF5252" />

      <!-- Mini Cricket Bat -->
      <g transform="translate(142, 75) rotate(25)">
        <rect x="8" y="0" width="6" height="22" rx="2" fill="#E53935" />
        <path d="M5 22 L17 22 L15 70 L7 70 Z" fill="#D7CCC8" stroke="#8D6E63" stroke-width="1.5" />
        <line x1="11" y1="25" x2="11" y2="65" stroke="#A1887F" stroke-width="1" />
      </g>

      <!-- Red Cricket Leather Ball Floating -->
      <g class="animated-float" transform="translate(24, 115)">
        <circle cx="12" cy="12" r="12" fill="#C62828" stroke="#8E0000" stroke-width="1.5" />
        <path d="M4 12 Q12 16 20 12" stroke="#FFF" stroke-width="1.5" stroke-dasharray="2,2" fill="none" />
      </g>

      <!-- Sporty Cap Backwards -->
      ${customHat ? renderCustomHat(customHat) : `
        <g>
          <path d="M58 80 C56 46, 144 46, 142 80 Z" fill="#01579B" />
          <ellipse cx="100" cy="46" rx="28" ry="8" fill="#FFC107" />
          <circle cx="100" cy="44" r="4" fill="#E65100" />
        </g>
      `}
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `,

  ninad: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-ninad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E8F5E9" />
          <stop offset="100%" stop-color="#A5D6A7" />
        </radialGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-ninad)" stroke="#2E7D32" stroke-width="5" />

      <!-- Body / Green Couch-Potato Hoodie -->
      <path d="M48 185 C48 145, 70 135, 100 135 C130 135, 152 145, 152 185 Z" fill="#43A047" />
      <polygon points="100,135 94,124 100,126 106,124" fill="#FFEB3B" />
      
      <!-- Head & Neck -->
      <rect x="91" y="115" width="18" height="25" rx="5" fill="#FCD8B8" />
      <ellipse cx="100" cy="94" rx="42" ry="42" fill="#FCD8B8" />

      <!-- Chubby Cheeks & Snack Crumbs -->
      <circle cx="68" cy="102" r="10" fill="#FF8A80" opacity="0.7" />
      <circle cx="132" cy="102" r="10" fill="#FF8A80" opacity="0.7" />
      <circle cx="126" cy="108" r="2" fill="#6D4C41" />
      <circle cx="133" cy="112" r="1.5" fill="#6D4C41" />

      <!-- Ears -->
      <circle cx="56" cy="95" r="9" fill="#FCD8B8" />
      <circle cx="144" cy="95" r="9" fill="#FCD8B8" />

      <!-- Ninad: Arrogant Half-Closed Couch Eyes -->
      <ellipse cx="80" cy="88" rx="8" ry="6.5" fill="#FFFFFF" />
      <circle cx="81" cy="88" r="4.5" fill="#212121" />
      <path d="M72 82 Q80 84 88 82" stroke="#1B5E20" stroke-width="2.5" />
      <ellipse cx="120" cy="88" rx="8" ry="6.5" fill="#FFFFFF" />
      <circle cx="119" cy="88" r="4.5" fill="#212121" />
      <path d="M112 82 Q120 84 128 82" stroke="#1B5E20" stroke-width="2.5" />

      <!-- Ninad: Big Cheeky Grin with MOST TEETH MISSING! (Window Gummy Smile) -->
      <path d="M78 104 Q100 126 122 104 Z" fill="#B71C1C" stroke="#880E4F" stroke-width="1.5" />
      <!-- Empty Dark Gap in middle (missing teeth) -->
      <path d="M84 105 Q100 115 116 105 Z" fill="#3E2723" opacity="0.6" />
      <!-- Only 1 tiny tooth on far left top -->
      <rect x="83" y="104" width="5" height="5" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
      <!-- HUGE EMPTY SPACE IN THE MIDDLE (No teeth!) -->
      <!-- Only 1 tiny tooth on far right top -->
      <rect x="112" y="104" width="5" height="4.5" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
      <!-- Bottom gum: 1 tiny lonely tooth in center-left -->
      <rect x="94" y="115" width="4" height="4" rx="1" fill="#FFFDE7" stroke="#FFD54F" stroke-width="0.8" />
      <!-- Red Tongue in bottom -->
      <ellipse cx="104" cy="118" rx="8" ry="4" fill="#FF5252" />

      <!-- Cheeky Arrogant Smirk Accent -->
      <path d="M76 104 Q73 100 78 98" stroke="#2E7D32" stroke-width="2" stroke-linecap="round" fill="none" />
      <path d="M122 104 Q126 100 123 97" stroke="#2E7D32" stroke-width="2" stroke-linecap="round" fill="none" />

      <!-- Ninad's Gaming Tablet with Free Fire Flames! -->
      <g transform="translate(118, 100) rotate(12)">
        <rect x="0" y="0" width="46" height="30" rx="4" fill="#212121" stroke="#FF5722" stroke-width="2" />
        <rect x="3" y="3" width="40" height="24" rx="2" fill="#263238" />
        <text x="23" y="19" font-size="13" text-anchor="middle">🔥🎮</text>
      </g>

      <!-- Comic Speech Bubble: "PAGAL!" (Confused 24/7) -->
      <g class="animated-float" transform="translate(130, 22)">
        <polygon points="12,24 8,30 18,25" fill="#FFF" stroke="#212121" stroke-width="1.5" />
        <rect x="0" y="0" width="56" height="24" rx="6" fill="#FFF" stroke="#212121" stroke-width="2" />
        <text x="28" y="17" font-family="'Fredoka', sans-serif" font-size="11" font-weight="900" fill="#D32F2F" text-anchor="middle">PAGAL!</text>
      </g>

      <!-- Soft Green Sofa Cushion & Pizza Snack -->
      <g transform="translate(20, 114)">
        <rect x="0" y="0" width="36" height="26" rx="8" fill="#81C784" stroke="#388E3C" stroke-width="1.8" />
        <text x="18" y="18" font-size="14" text-anchor="middle">🍕</text>
      </g>

      <!-- Red Ninja Headband -->
      ${customHat ? renderCustomHat(customHat) : `
        <g>
          <path d="M58 68 C58 48, 142 48, 142 68 Z" fill="#212121" />
          <rect x="56" y="65" width="88" height="14" rx="3" fill="#E53935" />
          <circle cx="100" cy="72" r="5" fill="#FFEB3B" />
          <path d="M142 70 Q160 62 170 75 Q155 78 142 76 Z" fill="#E53935" />
        </g>
      `}
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `,

  mayur: (customHat = null, customAccessory = null) => `
    <svg viewBox="0 0 200 200" class="avatar-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-mayur" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#EDE7F6" />
          <stop offset="100%" stop-color="#B39DDB" />
        </radialGradient>
        <linearGradient id="hoodie-tech" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3F51B5" />
          <stop offset="100%" stop-color="#283593" />
        </linearGradient>
      </defs>
      <!-- Background Circle -->
      <circle cx="100" cy="100" r="95" fill="url(#bg-mayur)" stroke="#512DA8" stroke-width="5" />

      <!-- Floating Tech Code, WiFi Signals & Travel Globe -->
      <g class="animated-float" opacity="0.85">
        <text x="20" y="52" font-family="monospace" font-size="13" font-weight="bold" fill="#311B92">&lt;/&gt;</text>
        <text x="148" y="48" font-size="16">✈️</text>
        <text x="24" y="112" font-size="14">🌍</text>
        <text x="150" y="80" font-family="monospace" font-size="12" fill="#00E5FF">📶</text>
      </g>

      <!-- Body / Navy Tech Hoodie -->
      <path d="M42 185 C42 142, 66 132, 100 132 C134 132, 158 142, 158 185 Z" fill="url(#hoodie-tech)" />
      
      <!-- Glowing Code Bracket on chest -->
      <rect x="85" y="152" width="30" height="22" rx="4" fill="#1A237E" stroke="#00E5FF" stroke-width="1.5" />
      <text x="100" y="168" font-family="monospace" font-size="12" font-weight="bold" fill="#76FF03" text-anchor="middle">&lt;DEV&gt;</text>

      <!-- Head & Neck -->
      <rect x="90" y="112" width="20" height="26" rx="5" fill="#F5CBA7" />
      <ellipse cx="100" cy="90" rx="42" ry="46" fill="#F5CBA7" />

      <!-- Ears -->
      <circle cx="56" cy="92" r="10" fill="#F5CBA7" />
      <circle cx="144" cy="92" r="10" fill="#F5CBA7" />

      <!-- Short Neat Tech Haircut -->
      <path d="M56 80 C54 44, 146 44, 144 80 C135 60, 115 54, 100 55 C85 54, 65 60, 56 80 Z" fill="#212121" />
      <path d="M56 80 Q62 65 72 60 Q65 75 58 88 Z" fill="#212121" />
      <path d="M144 80 Q138 65 128 60 Q135 75 142 88 Z" fill="#212121" />

      <!-- Friendly Trim Beard / Stubble -->
      <path d="M68 96 C72 125, 128 125, 132 96 C126 120, 74 120, 68 96 Z" fill="#3E2723" opacity="0.6" />
      <path d="M85 116 Q100 125 115 116 Q100 128 85 116 Z" fill="#212121" />

      <!-- Warm Friendly Tech Eyes & Brows -->
      <path d="M72 74 Q83 69 92 73" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M108 73 Q117 69 128 74" stroke="#212121" stroke-width="3" stroke-linecap="round" fill="none" />
      
      <ellipse cx="82" cy="85" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="83" cy="85" r="4.5" fill="#212121" />
      <circle cx="85" cy="83" r="1.5" fill="#FFFFFF" />

      <ellipse cx="118" cy="85" rx="6" ry="8" fill="#FFFFFF" />
      <circle cx="117" cy="85" r="4.5" fill="#212121" />
      <circle cx="119" cy="83" r="1.5" fill="#FFFFFF" />

      <!-- Modern Rectangular Tech Glasses / Specs -->
      <rect x="68" y="75" width="28" height="20" rx="5" fill="#EDE7F6" fill-opacity="0.3" stroke="#212121" stroke-width="3.5" />
      <rect x="104" y="75" width="28" height="20" rx="5" fill="#EDE7F6" fill-opacity="0.3" stroke="#212121" stroke-width="3.5" />
      <line x1="96" y1="84" x2="104" y2="84" stroke="#212121" stroke-width="3.5" />
      <!-- Subtle Blue Light Lens Glint -->
      <line x1="72" y1="78" x2="80" y2="90" stroke="#80D8FF" stroke-width="1.8" opacity="0.8" />
      <line x1="108" y1="78" x2="116" y2="90" stroke="#80D8FF" stroke-width="1.8" opacity="0.8" />

      <!-- Cheerful Smile -->
      <path d="M86 106 Q100 118 114 106" stroke="#D32F2F" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M92 107 Q100 114 108 107" fill="#FFFFFF" />

      <!-- Glowing Mini Laptop / Tablet in Hand -->
      <g transform="translate(132, 115) rotate(15)">
        <rect x="0" y="0" width="30" height="22" rx="3" fill="#37474F" stroke="#263238" stroke-width="2" />
        <rect x="2" y="2" width="26" height="18" rx="2" fill="#00E5FF" opacity="0.9" />
        <line x1="5" y1="6" x2="18" y2="6" stroke="#004D40" stroke-width="1.5" />
        <line x1="5" y1="10" x2="22" y2="10" stroke="#004D40" stroke-width="1.5" />
        <line x1="5" y1="14" x2="14" y2="14" stroke="#004D40" stroke-width="1.5" />
      </g>

      <!-- Headgear (Default: Cool Wireless Developer Headset) -->
      ${customHat ? renderCustomHat(customHat) : `
        <g>
          <path d="M54 90 C50 35, 150 35, 146 90" stroke="#424242" stroke-width="4.5" fill="none" />
          <rect x="46" y="80" width="10" height="20" rx="4" fill="#00E5FF" stroke="#0097A7" stroke-width="1.5" />
          <rect x="144" y="80" width="10" height="20" rx="4" fill="#00E5FF" stroke="#0097A7" stroke-width="1.5" />
        </g>
      `}
      ${customAccessory ? renderCustomAccessory(customAccessory) : ''}
    </svg>
  `
};

// Silly Hats and Accessories
function renderCustomHat(hatType) {
  switch (hatType) {
    case 'pirate':
      return `
        <g transform="translate(60, 20)">
          <path d="M0 40 Q40 5 80 40 Q40 30 0 40 Z" fill="#212121" stroke="#FFD700" stroke-width="2" />
          <circle cx="40" cy="28" r="7" fill="#FFFFFF" />
          <circle cx="38" cy="27" r="1.5" fill="#000" />
          <circle cx="42" cy="27" r="1.5" fill="#000" />
          <line x1="33" y1="36" x2="47" y2="36" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;
    case 'party':
      return `
        <g transform="translate(80, 5)">
          <polygon points="20,0 0,55 40,55" fill="#FF1744" stroke="#FFD600" stroke-width="2" />
          <circle cx="20" cy="0" r="6" fill="#FFEB3B" />
          <circle cx="10" cy="30" r="3" fill="#00E676" />
          <circle cx="28" cy="40" r="3" fill="#2979FF" />
        </g>
      `;
    case 'alien':
      return `
        <g transform="translate(68, 15)">
          <path d="M20 40 Q10 15 5 10" stroke="#76FF03" stroke-width="4" fill="none" stroke-linecap="round" />
          <circle cx="5" cy="8" r="7" fill="#76FF03" stroke="#33691E" stroke-width="1.5" />
          <path d="M45 40 Q55 15 60 10" stroke="#76FF03" stroke-width="4" fill="none" stroke-linecap="round" />
          <circle cx="60" cy="8" r="7" fill="#76FF03" stroke="#33691E" stroke-width="1.5" />
        </g>
      `;
    case 'chef':
      return `
        <g transform="translate(65, 12)">
          <ellipse cx="35" cy="32" rx="35" ry="20" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2" />
          <rect x="15" y="38" width="40" height="15" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2" />
        </g>
      `;
    case 'viking':
      return `
        <g transform="translate(58, 25)">
          <path d="M12 35 C12 15, 72 15, 72 35 Z" fill="#90A4AE" stroke="#455A64" stroke-width="2" />
          <path d="M12 30 Q-10 15 -10 -5 Q5 12 18 24 Z" fill="#FFF9C4" stroke="#F57F17" stroke-width="1.5" />
          <path d="M72 30 Q94 15 94 -5 Q79 12 66 24 Z" fill="#FFF9C4" stroke="#F57F17" stroke-width="1.5" />
        </g>
      `;
    default:
      return '';
  }
}

function renderCustomAccessory(accessoryType) {
  switch (accessoryType) {
    case 'mustache':
      return `
        <g transform="translate(75, 100)">
          <path d="M25 6 C15 0, 0 14, -5 20 C10 18, 20 12, 25 10 C30 12, 40 18, 55 20 C50 14, 35 0, 25 6 Z" fill="#212121" />
        </g>
      `;
    case 'clown-nose':
      return `
        <circle cx="100" cy="94" r="11" fill="#FF1744" stroke="#B71C1C" stroke-width="1.5" />
        <circle cx="97" cy="91" r="3" fill="#FFFFFF" opacity="0.8" />
      `;
    case 'bubblegum':
      return `
        <circle cx="100" cy="112" r="16" fill="#F48FB1" stroke="#EC407A" stroke-width="2" opacity="0.85" />
        <ellipse cx="95" cy="107" rx="4" ry="2" fill="#FFFFFF" opacity="0.9" transform="rotate(-30 95 107)" />
      `;
    case 'cool-shades':
      return `
        <g transform="translate(68, 76)">
          <polygon points="0,0 28,0 24,18 4,18" fill="#212121" stroke="#FFD600" stroke-width="2" />
          <polygon points="36,0 64,0 60,18 40,18" fill="#212121" stroke="#FFD600" stroke-width="2" />
          <line x1="28" y1="5" x2="36" y2="5" stroke="#FFD600" stroke-width="3" />
          <line x1="4" y1="3" x2="16" y2="15" stroke="#FFF" stroke-width="1.5" opacity="0.5" />
          <line x1="40" y1="3" x2="52" y2="15" stroke="#FFF" stroke-width="1.5" opacity="0.5" />
        </g>
      `;
    default:
      return '';
  }
}

// Global Avatar Render helper
window.renderCousinAvatar = function(cousinId, customHat = null, customAccessory = null) {
  const renderer = AVATAR_SVGS[cousinId];
  if (!renderer) return '<div class="avatar-placeholder">🧒</div>';
  return renderer(customHat, customAccessory);
};

// Global Card Avatar Renderer with fail-safe SVG fallback
window.renderCousinCardAvatar = function(cousin, mode = '3d') {
  if (mode === '3d' && cousin.imageFile) {
    return `
      <div class="avatar-3d-frame">
        <img src="${cousin.imageFile}" alt="${cousin.name}" class="avatar-3d-img"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div class="avatar-svg-fallback" style="display:none; width:100%; height:100%;">
          ${window.renderCousinAvatar(cousin.id)}
        </div>
      </div>
    `;
  }
  return window.renderCousinAvatar(cousin.id);
};
