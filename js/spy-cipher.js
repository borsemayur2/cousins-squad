// Top-Secret Cousin Spy Cipher & Decoder Machine (Cousin Secret Intelligence - CIS)
// 100% Humor, Interactive Decoding, Custom Ciphers, and Voice Scrambler!

const SPY_MESSAGES = [
  {
    id: "TX-701",
    agent: "devansh",
    agentCode: "AGENT 00-TOOTH 🦷",
    agentName: "Devansh (Loose-Tooth Operative)",
    missionName: "OPERATION TOOTH FAIRY SHAKEDOWN",
    clearance: "LEVEL 5 TOP SECRET",
    location: "Under The Pillow (Sector 4)",
    plainText: "Devansh's right-middle tooth is currently dangling at an 89-degree angle. When biting into an apple at lunchtime, the tooth is scheduled to detach. The undercover Tooth Fairy has been briefed to swap it for a ₹500 note before midnight. If Mom asks who shook the table: Blame Ninad!",
    directive: "Do NOT sneeze near the ceiling fan while the tooth is loose.",
    punishment: "Sentenced to 3 days of eating unsalted boiled pumpkin."
  },
  {
    id: "TX-702",
    agent: "ninad",
    agentCode: "AGENT 00-COUCH 🛋️",
    agentName: "Ninad (Couch Potato Master)",
    missionName: "OPERATION DEEP SOFA FUSION",
    clearance: "MAXIMUM COMFORT CLEARANCE",
    location: "Living Room Sofa, Coordinate 0-0-Zero",
    plainText: "Ninad has completed 18 consecutive hours fused with the sofa cushions. Free Fire ranking has reached God-level. In the event of confusion or an incoming homework ambush, deploy standard tactical defense: Shout 'PAGAL!' at 115 decibels and pretend the tablet battery just died.",
    directive: "Guard the TV remote with your life. Do not let Aaditi touch it.",
    punishment: "Forced to walk 10 paces outdoors in the fresh air."
  },
  {
    id: "TX-703",
    agent: "tapasya",
    agentCode: "AGENT 00-PANIPURI 🥣",
    agentName: "Tapasya (Chaat Infiltrator)",
    missionName: "OPERATION CRISPY PURIS HEIST",
    clearance: "ULTRA SPICY CLASSIFIED",
    location: "Roadside Secret Chaat Base",
    plainText: "Operative Tapasya has infiltrated the kitchen disguised as a singing popstar diva. Objective: Ingest 15 spicy panipuris before anyone notices the sweet chutney is completely depleted. If confronted by adults, unleash high-pitch pop diva high-note to break glass and create a smoke screen.",
    directive: "Never accept soggy puris under any circumstances.",
    punishment: "Must sing the nursery rhyme 'Twinkle Twinkle' in slow motion."
  },
  {
    id: "TX-704",
    agent: "virat",
    agentCode: "AGENT 00-SIXER 🏏",
    agentName: "Virat (Ballistic Spec Agent)",
    missionName: "OPERATION OVER-THE-BALCONY SIX",
    clearance: "RADAR SPEC CLEARANCE",
    location: "Mrs. Sharma's Neighboring Balcony",
    plainText: "Virat has calibrated his spectacles to maximum aerodynamic curvature. The red tennis ball was struck for six and has landed in Mrs. Sharma's prized rose bushes. Covert retrieval mission commences at 1700 hours. Operatives will wear dark socks and crawl like hungry geckos under the gate.",
    directive: "If dog barks, drop flat and pretend to be a cricket wicket.",
    punishment: "Bowling 50 practice deliveries to grown-ups in the sun."
  },
  {
    id: "TX-705",
    agent: "aaditi",
    agentCode: "AGENT 00-ELDEST 👑",
    agentName: "Aaditi (Supreme Commander)",
    missionName: "OPERATION ROYAL BIRTHRIGHT MANDATE",
    clearance: "SUPREME DICTATOR LEVEL",
    location: "The Master Recliner Chair",
    plainText: "Aaditi has issued Imperial Decree #44: Because she was born first, all shotgun car seats, the biggest slice of pizza, and the right to choose the movie belong to her for all eternity. Any cousin disputing this decree shall be sentenced to cleaning the Lego blocks off the carpet.",
    directive: "Remind everyone every 15 minutes that you are the eldest.",
    punishment: "Allowing the younger cousins to speak first for 5 whole minutes."
  },
  {
    id: "TX-706",
    agent: "mayur",
    agentCode: "AGENT 00-ROOT 💻",
    agentName: "Mayur Mama (Chief Tech Overseer)",
    missionName: "OPERATION COOKIE JAR FIREWALL",
    clearance: "KERNEL-LEVEL ROOT ACCESS",
    location: "Tech Mama Server Room / Balcony",
    plainText: "Mayur Mama has detected unauthorized packet sniffing around the chocolate chip cache. Five cousin operatives are attempting an automated cookie DDoS attack. Defense protocol: Throttle WiFi speeds down to 12 kbps until all school backpacks are packed and teeth are brushed.",
    directive: "Deploy software bug fix disguised as a fun coding lesson.",
    punishment: "Explaining how the internet works to all 5 cousins simultaneously."
  },
  {
    id: "TX-707",
    agent: "ninad",
    agentCode: "AGENT 00-GAP 🦷",
    agentName: "Ninad (Missing Teeth Legend)",
    missionName: "OPERATION GUMMY WINDOW ESCAPE",
    clearance: "DENTAL EXEMPTION STATUS",
    location: "The Dining Table (Vegetable Zone)",
    plainText: "Ninad has declared chewing green peas is medically prohibited due to missing 72% of front teeth. Strategic intelligence suggests he can still somehow consume giant chocolate brownies and crunchy nachos without any difficulty whatsoever. Science is currently investigating this medical miracle.",
    directive: "When asked to explain, roll eyes, say 'PAGAL!' and open Free Fire.",
    punishment: "Being forced to eat a whole raw carrot."
  },
  {
    id: "TX-708",
    agent: "devansh",
    agentCode: "AGENT 00-ROCKET 🏸",
    agentName: "Devansh (Speed Demon)",
    missionName: "OPERATION SHUTTLECOCK CHANDELIER",
    clearance: "TOP CEILING VELOCITY",
    location: "Living Room High Altitude Sector",
    plainText: "A high-speed badminton smash by Devansh has lodged the feather shuttlecock directly into the ceiling fan blades. When the fan is turned on, the shuttlecock will launch at Mach 2 towards whoever is sitting on the sofa. Ninad is directly in the line of fire. Do not warn him.",
    directive: "Pretend the shuttlecock was blown up there by an indoor gust of wind.",
    punishment: "Fetching 100 missed football shots from the bushes."
  },
  {
    id: "TX-709",
    agent: "squad",
    agentCode: "CHAOS SQUAD ALL-HANDS 🚨",
    agentName: "All Cousins Joint Taskforce",
    missionName: "OPERATION FROSTING FINGERPRINT COVERUP",
    clearance: "CRIME SCENE CLASSIFIED",
    location: "The Kitchen Counter (Birthday Cake Zone)",
    plainText: "A mysterious finger trench has been excavated along the chocolate edge of the birthday cake. Forensic dusting reveals fingerprints belonging to all five cousins at the exact same location. The official consensus: The family golden retriever climbed a ladder, opened the cake box, and ate only the frosting.",
    directive: "Wipe chocolate off lips before making contact with parents.",
    punishment: "Standing in the corner singing the alphabet backwards."
  },
  {
    id: "TX-710",
    agent: "squad",
    agentCode: "CHAOS SQUAD ALERT ⚠️",
    agentName: "Tactical Defense Squadron",
    missionName: "OPERATION MATH HOMEWORK EVACUATION",
    clearance: "RED ALERT LEVEL 1",
    location: "Study Table Perimeter",
    plainText: "A parent carrying a 200-page mathematics workbook and a freshly sharpened pencil has been sighted advancing at 3 o'clock! CODE RED! Immediate tactical dispersals: Devansh run to badminton court, Virat check cricket pitch, Tapasya pretend to have singing practice, Ninad feign instant deep coma on sofa!",
    directive: "Leave no trace of fun video games on computer screens.",
    punishment: "Solving 25 long division word problems with fractions."
  },
  {
    id: "TX-711",
    agent: "virat",
    agentCode: "AGENT 00-SPECS 👓",
    agentName: "Virat (Vision Commander)",
    missionName: "OPERATION CHOCOLATE RADAR",
    clearance: "OPTICAL NIGHT-VISION CLASS",
    location: "Top Kitchen Cupboard (Behind Oats)",
    plainText: "Virat's tactical eyewear has successfully calibrated the exact coordinates of the Cadbury Dairy Milk bar hidden behind the Quaker Oats. Intel confirms parents believe nobody looks behind healthy breakfast food. Tactical air strike scheduled for 1645 hours while grown-ups are making tea.",
    directive: "Leave the oats untouched so the concealment remains unbroken.",
    punishment: "Eating oatmeal for dinner with zero honey."
  },
  {
    id: "TX-712",
    agent: "tapasya",
    agentCode: "AGENT 00-DIVA 🎤",
    agentName: "Tapasya (Decibel Queen)",
    missionName: "OPERATION SHAMPOO BOTTLE AUDITION",
    clearance: "ACOUSTIC EXPLOSION CLEARANCE",
    location: "The Master Bathroom Mirror",
    plainText: "Acoustic seismographs have recorded an 8.4 magnitude earthquake centered around Tapasya's bathroom singing session. She is currently belting Bollywood melodies into a bottle of Sunsilk conditioner with dramatic choreography. Neighbors have called inquiring if a family of parakeets is in distress.",
    directive: "Maintain the dramatic popstar bow until the imaginary crowd roars.",
    punishment: "Listening to Dad's 1980s retro playlist for one hour."
  }
];

// Cipher Encoders
const CIPHER_ENGINES = {
  // 1. Emoji Secret Cipher
  emoji: (text) => {
    const map = {
      'a': '🍎', 'b': '🏸', 'c': '🏏', 'd': '🐶', 'e': '⚡',
      'f': '🔥', 'g': '👓', 'h': '🎩', 'i': '🍦', 'j': '🕹️',
      'k': '🔑', 'l': '🦁', 'm': '🌙', 'n': '🥣', 'o': '🛋️',
      'p': '🍕', 'q': '👑', 'r': '🚀', 's': '⭐', 't': '🦷',
      'u': '🛸', 'v': '✌️', 'w': '🌊', 'x': '❌', 'y': '🧁',
      'z': '⚡', '0': '⓪', '1': '①', '2': '②', '3': '③',
      '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
    };
    return text.split('').map(ch => {
      const lower = ch.toLowerCase();
      return map[lower] || ch;
    }).join('');
  },

  // 2. Alien Matrix Glitch Runes
  alien: (text) => {
    const glyphs = ['Ж', '☲', '⌁', '§', 'Ø', '∆', '‡', '◈', '⎈', '⌬', '⍟', '⌘', '∑', 'Ω', 'Ψ', 'ϟ', '⊛', '⨀', '░', '▓'];
    return text.split('').map(ch => {
      if (ch === ' ' || ch === '\n') return ch;
      if (/[.,!?:;'"-]/.test(ch)) return '▪';
      const code = ch.charCodeAt(0);
      return glyphs[code % glyphs.length];
    }).join('');
  },

  // 3. Secret Agent Number Code (A=01, B=02...)
  numbers: (text) => {
    return text.split('').map(ch => {
      const code = ch.toUpperCase().charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const num = code - 64;
        return (num < 10 ? '0' + num : '' + num) + '-';
      }
      if (ch === ' ') return ' / ';
      return ch;
    }).join('').replace(/- /g, ' ').replace(/-$/g, '');
  },

  // 4. Classical Caesar Shift (+3)
  caesar: (text) => {
    return text.split('').map(ch => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 3) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 3) % 26) + 97);
      }
      return ch;
    }).join('');
  },

  // 5. Scrambled Anagram Chaos
  anagram: (text) => {
    return text.split(' ').map(word => {
      if (word.length <= 3) return word;
      const letters = word.slice(1, -1).split('');
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return word[0] + letters.join('') + word[word.length - 1];
    }).join(' ');
  }
};

class SpyCipherStation {
  constructor() {
    this.currentMessageIndex = 0;
    this.currentCipherType = 'emoji';
    this.isRevealed = false;
    this.activeAgentFilter = 'all';
    this.isDecrypting = false;
  }

  getCurrentMessage() {
    const filtered = this.getFilteredMessages();
    if (filtered.length === 0) return SPY_MESSAGES[0];
    return filtered[this.currentMessageIndex % filtered.length];
  }

  getFilteredMessages() {
    if (this.activeAgentFilter === 'all') return SPY_MESSAGES;
    return SPY_MESSAGES.filter(m => m.agent === this.activeAgentFilter || m.agent === 'squad');
  }

  getEncryptedText(plainText, cipherType = this.currentCipherType) {
    const encoder = CIPHER_ENGINES[cipherType] || CIPHER_ENGINES.emoji;
    return encoder(plainText);
  }

  initUI() {
    const container = document.getElementById("spy-cipher-section");
    if (!container) return;

    this.renderStation();
    this.attachEvents();
  }

  renderStation() {
    const msg = this.getCurrentMessage();
    const cipherBox = document.getElementById("spy-terminal-text");
    const idBadge = document.getElementById("spy-transmission-id");
    const agentBadge = document.getElementById("spy-agent-badge");
    const missionBadge = document.getElementById("spy-mission-badge");
    const clearanceBadge = document.getElementById("spy-clearance-badge");
    const stampEl = document.getElementById("spy-rubber-stamp");
    const revealedDetailsEl = document.getElementById("spy-revealed-details");
    const revealBtn = document.getElementById("spy-reveal-btn");

    if (idBadge) idBadge.innerText = msg.id;
    if (agentBadge) agentBadge.innerText = msg.agentCode;
    if (missionBadge) missionBadge.innerText = msg.missionName;
    if (clearanceBadge) clearanceBadge.innerText = msg.clearance;

    if (this.isRevealed) {
      if (cipherBox) {
        cipherBox.innerHTML = `
          <div class="decoded-plain-text">
            <span class="decoded-sparkle">🔓 INTEL DECLASSIFIED:</span>
            <p class="decoded-body">${msg.plainText}</p>
          </div>
        `;
      }
      if (stampEl) {
        stampEl.className = "spy-stamp-classified stamp-slammed";
        stampEl.innerText = "DECLASSIFIED // APPROVED";
      }
      if (revealedDetailsEl) {
        revealedDetailsEl.style.display = "block";
        revealedDetailsEl.innerHTML = `
          <div class="intel-briefing-box">
            <div class="intel-item">
              <span class="intel-label">📍 Target Sector:</span>
              <span class="intel-value">${msg.location}</span>
            </div>
            <div class="intel-item">
              <span class="intel-label">⚠️ Top Directive:</span>
              <span class="intel-value">${msg.directive}</span>
            </div>
            <div class="intel-item">
              <span class="intel-label">🥦 Punishment If Caught:</span>
              <span class="intel-value">${msg.punishment}</span>
            </div>
          </div>
        `;
      }
      if (revealBtn) {
        revealBtn.innerHTML = "🔒 ENCRYPT & CONCEAL INTEL";
        revealBtn.classList.add("conceal-mode");
      }
    } else {
      const encrypted = this.getEncryptedText(msg.plainText, this.currentCipherType);
      if (cipherBox) {
        cipherBox.innerHTML = `
          <div class="scrambled-cipher-text">
            <span class="cipher-scan-line"></span>
            <div class="cipher-chars">${this._formatCipherDisplay(encrypted)}</div>
          </div>
        `;
      }
      if (stampEl) {
        stampEl.className = "spy-stamp-classified stamp-top-secret";
        stampEl.innerText = "TOP SECRET // LEVEL 5";
      }
      if (revealedDetailsEl) {
        revealedDetailsEl.style.display = "none";
      }
      if (revealBtn) {
        revealBtn.innerHTML = "🔍 DECRYPT & REVEAL SECRET INTEL!";
        revealBtn.classList.remove("conceal-mode");
      }
    }
  }

  _formatCipherDisplay(text) {
    return text.replace(/\n/g, '<br>');
  }

  // Animated Hacker Decryption Transition
  triggerDecryptAnimation() {
    if (this.isDecrypting) return;
    this.isDecrypting = true;

    const cipherBox = document.getElementById("spy-terminal-text");
    const revealBtn = document.getElementById("spy-reveal-btn");
    const msg = this.getCurrentMessage();

    if (revealBtn) {
      revealBtn.disabled = true;
      revealBtn.innerText = "⚡ RUNNING QUANTUM DECRYPTION...";
    }

    if (window.soundFx && typeof window.soundFx.spyDecode === "function") {
      window.soundFx.spyDecode();
    }

    const glyphs = "Ж☲⌁§Ø∆‡◈⎈⌬⍟⌘∑ΩΨϟ░▒▓@#$%&*?!";
    let steps = 0;
    const maxSteps = 12;

    const interval = setInterval(() => {
      steps++;
      if (cipherBox) {
        const dummyScramble = msg.plainText.split('').map(ch => {
          if (ch === ' ' || ch === '\n') return ch;
          if (Math.random() < (steps / maxSteps)) {
            return ch; // Gradually reveal true letters!
          }
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');

        cipherBox.innerHTML = `
          <div class="scrambled-cipher-text hacking-glitch">
            <div class="cipher-chars">${dummyScramble}</div>
          </div>
        `;
      }

      if (steps >= maxSteps) {
        clearInterval(interval);
        this.isDecrypting = false;
        this.isRevealed = true;
        if (revealBtn) revealBtn.disabled = false;
        
        if (window.soundFx && typeof window.soundFx.stampSlam === "function") {
          window.soundFx.stampSlam();
        }
        if (window.triggerConfetti) {
          window.triggerConfetti(65);
        }

        this.renderStation();

        // If Ninad, play signature confused PAGAL sound effect!
        if (msg.agent === "ninad" && window.soundFx && typeof window.soundFx.pagal === "function") {
          setTimeout(() => window.soundFx.pagal(), 400);
        }
      }
    }, 55);
  }

  attachEvents() {
    // Reveal / Decrypt button
    const revealBtn = document.getElementById("spy-reveal-btn");
    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        if (this.isRevealed) {
          this.isRevealed = false;
          if (window.soundFx && typeof window.soundFx.pop === "function") window.soundFx.pop();
          this.renderStation();
        } else {
          this.triggerDecryptAnimation();
        }
      });
    }

    // Intercept New Transmission (Random/Next)
    const nextBtn = document.getElementById("spy-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const filtered = this.getFilteredMessages();
        this.currentMessageIndex = (this.currentMessageIndex + 1) % filtered.length;
        this.isRevealed = false;
        if (window.soundFx && typeof window.soundFx.spyMorse === "function") {
          window.soundFx.spyMorse();
        }
        this.renderStation();
        this._showToast("📡 Intercepted New Satellite Transmission!");
      });
    }

    // Cipher Type Selector Buttons
    const cipherPills = document.querySelectorAll(".cipher-type-pill");
    cipherPills.forEach(pill => {
      pill.addEventListener("click", () => {
        cipherPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentCipherType = pill.dataset.cipher;
        this.isRevealed = false; // Re-lock into new cipher format!
        if (window.soundFx && typeof window.soundFx.pop === "function") window.soundFx.pop();
        this.renderStation();
      });
    });

    // Agent Filter Pills
    const agentPills = document.querySelectorAll(".spy-agent-pill");
    agentPills.forEach(pill => {
      pill.addEventListener("click", () => {
        agentPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeAgentFilter = pill.dataset.agent;
        this.currentMessageIndex = 0;
        this.isRevealed = false;
        if (window.soundFx && typeof window.soundFx.boing === "function") window.soundFx.boing();
        this.renderStation();
      });
    });

    // Voice Scrambler Speech Synthesis
    const speechBtn = document.getElementById("spy-voice-btn");
    if (speechBtn) {
      speechBtn.addEventListener("click", () => {
        this.speakDecrypted();
      });
    }

    // Copy Cipher Text Button
    const copyCipherBtn = document.getElementById("spy-copy-cipher-btn");
    if (copyCipherBtn) {
      copyCipherBtn.addEventListener("click", () => {
        const msg = this.getCurrentMessage();
        const textToCopy = this.isRevealed 
          ? `[COUSIN SPY INTEL] ${msg.missionName}: ${msg.plainText}`
          : `[COUSIN CIPHER (${this.currentCipherType.toUpperCase()})] ${this.getEncryptedText(msg.plainText, this.currentCipherType)}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          this._showToast("📋 Transmission copied to clipboard!");
          if (window.soundFx) window.soundFx.pop();
        }).catch(() => {
          this._showToast("Transmission copied!");
        });
      });
    }

    // Custom Spy Message Generator / Encoder
    this.initCustomEncoder();
  }

  // Speak decrypted text with robotic / spy pitch
  speakDecrypted() {
    if (!('speechSynthesis' in window)) {
      this._showToast("Speech synthesis not supported on this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const msg = this.getCurrentMessage();
    const textToSpeak = `Top Secret Directive for ${msg.agentName}. ${msg.missionName}. ${msg.plainText}`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.pitch = 0.82; // Deep agent pitch
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
    this._showToast("🗣️ Playing scrambled spy briefing...");
  }

  // Custom Spy Encoder Tools
  initCustomEncoder() {
    const inputEl = document.getElementById("custom-spy-input");
    const outputEl = document.getElementById("custom-spy-output");
    const modeSelect = document.getElementById("custom-cipher-mode");
    const copyCustomBtn = document.getElementById("custom-spy-copy");
    const injectBtn = document.getElementById("custom-spy-inject");

    if (!inputEl || !outputEl) return;

    const updateCustomOutput = () => {
      const val = inputEl.value.trim();
      const mode = modeSelect ? modeSelect.value : "emoji";
      if (!val) {
        outputEl.innerText = "Encoded spy message will appear here in real-time...";
        return;
      }
      const encoded = this.getEncryptedText(val, mode);
      outputEl.innerText = encoded;
    };

    inputEl.addEventListener("input", updateCustomOutput);
    if (modeSelect) {
      modeSelect.addEventListener("change", () => {
        if (window.soundFx) window.soundFx.pop();
        updateCustomOutput();
      });
    }

    if (copyCustomBtn) {
      copyCustomBtn.addEventListener("click", () => {
        const text = outputEl.innerText;
        if (!text || text.startsWith("Encoded")) return;
        navigator.clipboard.writeText(text).then(() => {
          this._showToast("📋 Secret cipher copied! Send it on WhatsApp!");
          if (window.soundFx) window.soundFx.fanfare();
        });
      });
    }

    if (injectBtn) {
      injectBtn.addEventListener("click", () => {
        const val = inputEl.value.trim();
        if (!val) return;
        // Inject into main station as custom mission!
        const customMission = {
          id: "TX-CUSTOM",
          agent: "custom",
          agentCode: "SECRET AGENT GUEST 🕵️",
          agentName: "Special Undercover Agent",
          missionName: "CLASSIFIED COVERT DISPATCH",
          clearance: "TOP SECRET // EYES ONLY",
          location: "Classified Coordinates",
          plainText: val,
          directive: "Destroy this phone after reading.",
          punishment: "Tickled until crying by all cousins."
        };
        SPY_MESSAGES.unshift(customMission);
        this.currentMessageIndex = 0;
        this.isRevealed = false;
        this.renderStation();
        this._showToast("📡 Custom message loaded into decoder!");
        if (window.soundFx) window.soundFx.spyMorse();
        window.location.hash = "#spy-cipher-section";
      });
    }
  }

  _showToast(msg) {
    if (typeof window.showToast === "function") {
      window.showToast(msg);
      return;
    }
    let toast = document.getElementById("avatar-gen-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "avatar-gen-toast";
      toast.className = "avatar-gen-toast";
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }
}

// Global instance
window.spyStation = new SpyCipherStation();
window.CIPHER_ENGINES = CIPHER_ENGINES;
window.SPY_MESSAGES = SPY_MESSAGES;
