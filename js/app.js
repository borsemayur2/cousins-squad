// Main Application Controller for Cousins Funhouse!

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentJoke = null;
  let isPunchlineVisible = false;
  let activeJokeCategory = "All";
  let dressupCousinId = "aaditi";
  let dressupHat = null;
  let dressupAccessory = null;
  let laughCount = 42;
  let tomatoCount = 3;
  let avatarViewMode = "3d"; // Default to generated 3D Pixar avatars!
  let availableVoices = [];

  // Pre-load speech synthesis voices
  if ('speechSynthesis' in window) {
    const loadVoices = () => {
      availableVoices = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Initialize Canvas Confetti
  initConfetti();

  // Initialize Cousin Cards Grid
  renderCousinsSquad();

  // Load Initial Joke on Page Reload! (Requirement: "generate random jokes funny homorus on reload")
  loadRandomJoke();

  // Initialize Dress-Up Lab
  setupDressupLab();

  // Initialize Spinner Game
  let spinner = null;
  if (typeof CousinSpinner !== "undefined") {
    spinner = new CousinSpinner("spinner-container");
    const spinBtn = document.getElementById("spinner-btn");
    if (spinBtn) {
      spinBtn.addEventListener("click", () => spinner.spin());
    }
  }

  // Setup Event Listeners
  setupEventListeners();

  // Global AudioContext unlocking on first interaction
  const unlockAudio = () => {
    if (window.soundFx) window.soundFx.init();
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("touchstart", unlockAudio);
    window.removeEventListener("click", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio, { passive: true });
  window.addEventListener("touchstart", unlockAudio, { passive: true });
  window.addEventListener("click", unlockAudio, { passive: true });

  // Expose global helpers
  window.appState = {
    getMode: () => avatarViewMode,
    setMode: (m) => { avatarViewMode = m; renderCousinsSquad(); }
  };
});

// ========================================================
// JOKE MACHINE LOGIC
// ========================================================
function loadRandomJoke() {
  if (typeof getRandomJoke !== "function") return;
  
  currentJoke = getRandomJoke(window.activeJokeCategory || "All");
  isPunchlineVisible = false;

  const jokeSetupEl = document.getElementById("joke-setup");
  const punchlineBoxEl = document.getElementById("punchline-box");
  const jokeCategoryEl = document.getElementById("joke-category-badge");
  const jokeEmojiEl = document.getElementById("joke-emoji");
  const voiceBtn = document.getElementById("voice-joke-btn");

  if (jokeSetupEl) jokeSetupEl.innerText = currentJoke.setup;
  if (jokeCategoryEl) jokeCategoryEl.innerText = currentJoke.category;
  if (jokeEmojiEl) jokeEmojiEl.innerText = currentJoke.emoji;
  if (voiceBtn) voiceBtn.innerText = "🗣️ Read Aloud";

  if (punchlineBoxEl) {
    punchlineBoxEl.innerHTML = `
      <button id="reveal-btn" class="reveal-punchline-btn">
        🥁 Reveal Silly Punchline!
      </button>
    `;
    const revealBtn = document.getElementById("reveal-btn");
    if (revealBtn) {
      revealBtn.addEventListener("click", revealPunchline);
    }
  }
}

function revealPunchline() {
  if (!currentJoke || isPunchlineVisible) return;
  isPunchlineVisible = true;

  if (window.soundFx) {
    window.soundFx.rimshot();
  }
  if (window.triggerConfetti) {
    window.triggerConfetti(60);
  }

  const punchlineBoxEl = document.getElementById("punchline-box");
  if (punchlineBoxEl) {
    punchlineBoxEl.innerHTML = `
      <div class="punchline-text">
        ${currentJoke.punchline}
      </div>
    `;
  }
}

// Speak Joke aloud with Cartoon voice via SpeechSynthesis
function speakJoke() {
  if (!currentJoke) return;
  const voiceBtn = document.getElementById("voice-joke-btn");

  if (!('speechSynthesis' in window)) {
    showToast("⚠️ Speech is not supported in this browser, but the jokes are still hilarious!");
    return;
  }

  window.speechSynthesis.cancel();
  if (window.soundFx) window.soundFx.honk();

  const textToSpeak = isPunchlineVisible 
    ? `${currentJoke.setup} ... ${currentJoke.punchline}`
    : currentJoke.setup;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.pitch = 1.35; // Fun high pitch
  utterance.rate = 1.0;

  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const funVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Junior") || v.name.includes("Child") || v.name.includes("Samantha") || v.name.includes("Victoria") || v.name.includes("Google")));
    if (funVoice) utterance.voice = funVoice;
  }

  if (voiceBtn) {
    voiceBtn.innerText = "🔊 Reading...";
    voiceBtn.classList.add("reading-active");
  }

  utterance.onend = () => {
    if (voiceBtn) {
      voiceBtn.innerText = "🗣️ Read Aloud";
      voiceBtn.classList.remove("reading-active");
    }
  };

  utterance.onerror = () => {
    if (voiceBtn) {
      voiceBtn.innerText = "🗣️ Read Aloud";
      voiceBtn.classList.remove("reading-active");
    }
  };

  window.speechSynthesis.speak(utterance);
}

// ========================================================
// COUSINS SQUAD CARDS RENDERING
// ========================================================
function renderCousinsSquad() {
  const gridEl = document.getElementById("cousins-grid");
  if (!gridEl || typeof COUSINS_DATA === "undefined") return;

  const mode = window.appState ? window.appState.getMode() : "3d";

  gridEl.innerHTML = COUSINS_DATA.map(cousin => `
    <div class="cousin-card" id="card-${cousin.id}" style="border-top: 8px solid ${cousin.themeColor}">
      <div class="card-header-banner" style="background: ${cousin.bgColor}">
        ${cousin.isEldest ? '<div class="eldest-crown-tag">👑 ELDEST BOSS</div>' : ''}
        <div class="card-rank-badge">${cousin.ageRank}</div>
        
        <div class="avatar-wrapper" onclick="playCousinVoice('${cousin.id}')" title="Click for ${cousin.name}'s sound!">
          ${window.renderCousinCardAvatar ? window.renderCousinCardAvatar(cousin, mode) : window.renderCousinAvatar(cousin.id)}
        </div>

        <h3 class="cousin-name" style="color: ${cousin.themeColor}">${cousin.name}</h3>
        <p class="cousin-role">${cousin.role}</p>
        <div class="cousin-quote" id="quote-${cousin.id}">${cousin.quote}</div>
      </div>

      <div class="card-body">
        <div class="feature-box">
          <div class="feature-label">⚡ Superpower</div>
          <div class="feature-value">${cousin.superpower}</div>
        </div>

        <div class="feature-box">
          <div class="feature-label">🚨 Most Likely Busted For</div>
          <div class="feature-value">${cousin.bustedFor}</div>
        </div>

        <div class="feature-box">
          <div class="feature-label">🎯 Secret Weapon</div>
          <div class="feature-value">${cousin.secretWeapon}</div>
        </div>

        <div class="stats-container">
          ${renderStatsBars(cousin)}
        </div>
      </div>

      <div class="card-footer">
        <button class="card-action-btn" onclick="dressupThisCousin('${cousin.id}')">
          🎨 Silly Dress-Up
        </button>
        <button class="card-action-btn" onclick="playCousinVoice('${cousin.id}')">
          🔊 Hear Voice
        </button>
      </div>
    </div>
  `).join("");
}

function renderStatsBars(cousin) {
  const statLabels = Object.keys(cousin.stats);
  return statLabels.map(key => {
    const val = cousin.stats[key];
    const friendlyName = formatStatName(key);
    return `
      <div class="stat-row">
        <span>${friendlyName}</span>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width: ${Math.min(val, 100)}%; background: ${cousin.themeColor}"></div>
        </div>
      </div>
    `;
  }).join("");
}

function formatStatName(camelStr) {
  const map = {
    bossiness: "Bossiness Level",
    remoteControl: "TV Remote Ownership",
    snackTaxRate: "Snack Tax Rate",
    patienceForChaos: "Patience For Chaos",
    dramaLevel: "Dramatic Flair",
    singingVolume: "Singing Volume",
    mirrorTime: "Mirror Practice",
    cleanupSpeed: "Cleanup Speed",
    inventionsMade: "Inventions Built",
    thingsAccidentallyDismantled: "Things Dismantled",
    curiosityLevel: "Curiosity",
    decibelLevel: "Decibel Level",
    runningSpeed: "Zoomie Speed",
    windowNearMisses: "Window Near Misses",
    cricketPassion: "Cricket Passion",
    sittingStillTime: "Sitting Still Time",
    stealthLevel: "Stealth Ninja Level",
    cookieHeists: "Cookie Heists",
    blamingOthers: "Blaming Others",
    bedtimeObedience: "Bedtime Obedience"
  };
  return map[camelStr] || camelStr;
}

// Fun reaction sound and quote for each cousin
window.playCousinVoice = function(cousinId) {
  const cousin = getCousinById ? getCousinById(cousinId) : null;
  if (!cousin) return;

  // 1. Play characteristic sound effect
  if (window.soundFx) {
    if (cousinId === "aaditi") window.soundFx.magic();
    else if (cousinId === "tapasya") window.soundFx.giggle();
    else if (cousinId === "devansh") window.soundFx.boing();
    else if (cousinId === "virat") window.soundFx.slideWhistle();
    else if (cousinId === "ninad") window.soundFx.fart();
  }

  // 2. Animate quote box
  const quoteEl = document.getElementById(`quote-${cousinId}`);
  if (quoteEl) {
    quoteEl.classList.remove("pop-in");
    void quoteEl.offsetWidth;
    quoteEl.classList.add("pop-in");
  }

  // 3. Play voice speech 250ms after sound effect
  if ('speechSynthesis' in window) {
    setTimeout(() => {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(`${cousin.name} says: ${cousin.quote}`);
      utt.pitch = cousin.gender === "F" ? 1.4 : 1.25;
      utt.rate = 1.02;
      window.speechSynthesis.speak(utt);
    }, 250);
  }
};

window.dressupThisCousin = function(cousinId) {
  const target = document.getElementById("dressup-lab-section");
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    const pill = document.querySelector(`.cousin-select-pill[data-cousin="${cousinId}"]`);
    if (pill) pill.click();
  }
};

// ========================================================
// DRESS-UP LAB LOGIC
// ========================================================
function setupDressupLab() {
  const previewEl = document.getElementById("dressup-preview-avatar");
  const cousinPills = document.querySelectorAll(".cousin-select-pill");
  const hatPills = document.querySelectorAll(".hat-pill");
  const accPills = document.querySelectorAll(".acc-pill");

  let dressupCousinId = "aaditi";
  let dressupHat = null;
  let dressupAccessory = null;

  function updatePreview() {
    if (previewEl && window.renderCousinAvatar) {
      previewEl.innerHTML = window.renderCousinAvatar(dressupCousinId, dressupHat, dressupAccessory);
      previewEl.classList.remove("pop-in");
      void previewEl.offsetWidth;
      previewEl.classList.add("pop-in");
    }
  }

  cousinPills.forEach(pill => {
    pill.addEventListener("click", () => {
      cousinPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      dressupCousinId = pill.dataset.cousin;
      if (window.soundFx) window.soundFx.pop();
      updatePreview();
    });
  });

  hatPills.forEach(pill => {
    pill.addEventListener("click", () => {
      if (dressupHat === pill.dataset.hat) {
        dressupHat = null;
        pill.classList.remove("active");
      } else {
        hatPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        dressupHat = pill.dataset.hat;
      }
      if (window.soundFx) window.soundFx.boing();
      updatePreview();
    });
  });

  accPills.forEach(pill => {
    pill.addEventListener("click", () => {
      if (dressupAccessory === pill.dataset.acc) {
        dressupAccessory = null;
        pill.classList.remove("active");
      } else {
        accPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        dressupAccessory = pill.dataset.acc;
      }
      if (window.soundFx) window.soundFx.honk();
      updatePreview();
    });
  });

  const snapBtn = document.getElementById("snap-photo-btn");
  if (snapBtn) {
    snapBtn.addEventListener("click", () => {
      if (window.soundFx) window.soundFx.tada();
      if (window.triggerConfetti) window.triggerConfetti(100);
      showToast(`📸 CHEESE! ${dressupCousinId.toUpperCase()} looks fantastically hilarious!`);
    });
  }

  const resetBtn = document.getElementById("reset-dressup-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      dressupHat = null;
      dressupAccessory = null;
      hatPills.forEach(p => p.classList.remove("active"));
      accPills.forEach(p => p.classList.remove("active"));
      if (window.soundFx) window.soundFx.slideWhistle();
      updatePreview();
      showToast("🔄 Avatar reset back to original look!");
    });
  }

  updatePreview();
}

// ========================================================
// TOAST NOTIFICATION (Replaces blocking native alert)
// ========================================================
function showToast(message) {
  let toast = document.getElementById("kid-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "kid-toast";
    toast.className = "kid-toast-banner";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toast.hideTimeout);
  toast.hideTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
window.showToast = showToast;

// ========================================================
// EVENT LISTENERS & SOUNDBOARD
// ========================================================
function setupEventListeners() {
  // New Joke Button
  const newJokeBtn = document.getElementById("new-joke-btn");
  if (newJokeBtn) {
    newJokeBtn.addEventListener("click", () => {
      if (window.soundFx) window.soundFx.pop();
      loadRandomJoke();
    });
  }

  // Voice Read Joke
  const voiceJokeBtn = document.getElementById("voice-joke-btn");
  if (voiceJokeBtn) {
    voiceJokeBtn.addEventListener("click", speakJoke);
  }

  // Category Filter Chips
  const categoryChips = document.querySelectorAll(".category-chip");
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      window.activeJokeCategory = chip.dataset.category;
      if (window.soundFx) window.soundFx.pop();
      loadRandomJoke();
    });
  });

  // Joke Reaction Buttons
  const laughBtn = document.getElementById("react-laugh-btn");
  let laughCount = 42;
  if (laughBtn) {
    laughBtn.addEventListener("click", () => {
      laughCount += 1;
      const countEl = document.getElementById("laugh-counter");
      if (countEl) countEl.innerText = laughCount;
      if (window.soundFx) window.soundFx.giggle();
      if (window.triggerConfetti) window.triggerConfetti(50);
    });
  }

  const tomatoBtn = document.getElementById("react-tomato-btn");
  let tomatoCount = 3;
  if (tomatoBtn) {
    tomatoBtn.addEventListener("click", () => {
      tomatoCount += 1;
      const countEl = document.getElementById("tomato-counter");
      if (countEl) countEl.innerText = tomatoCount;
      if (window.soundFx) window.soundFx.slideWhistle();
      spawnFlyingTomato();
    });
  }

  // Party / Disco Mode Toggle
  const partyToggleBtn = document.getElementById("party-toggle-btn");
  if (partyToggleBtn) {
    partyToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("party-mode");
      const isParty = document.body.classList.contains("party-mode");
      partyToggleBtn.innerText = isParty ? "🛑 Chill Out" : "🎉 Disco Party!";
      if (window.soundFx) {
        if (isParty) window.soundFx.tada();
        else window.soundFx.slideWhistle();
      }
      if (isParty && window.triggerConfetti) {
        window.triggerConfetti(150);
      }
    });
  }

  // Soundboard Buttons with visual press feedback
  const soundBtns = document.querySelectorAll(".sound-pad-btn");
  soundBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("sound-active");
      setTimeout(() => btn.classList.remove("sound-active"), 280);

      const soundType = btn.dataset.sound;
      if (window.soundFx && typeof window.soundFx[soundType] === "function") {
        window.soundFx[soundType]();
      }
    });
  });

  // Mute Toggle Button
  const muteBtn = document.getElementById("mute-toggle-btn");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      if (window.soundFx) {
        const isMuted = window.soundFx.toggleMute();
        muteBtn.innerText = isMuted ? "🔇 Unmute" : "🔊 Sound On";
        showToast(isMuted ? "🔇 Sound is Muted" : "🔊 Sound is Unmuted!");
      }
    });
  }

  // Toggle Avatar Style (3D Pixar vs SVG Vector)
  const avatarModeBtn = document.getElementById("toggle-avatar-mode-btn");
  if (avatarModeBtn) {
    avatarModeBtn.addEventListener("click", () => {
      const current = window.appState.getMode();
      const newMode = current === "3d" ? "svg" : "3d";
      window.appState.setMode(newMode);
      avatarModeBtn.innerText = newMode === "3d" 
        ? "🎨 Switch to Cartoon Vector Avatars" 
        : "✨ Switch to 3D Pixar Avatars";
      if (window.soundFx) window.soundFx.magic();
      if (window.triggerConfetti) window.triggerConfetti(60);
      showToast(newMode === "3d" ? "✨ 3D Pixar Avatars Active!" : "🎨 Cartoon Vector Avatars Active!");
    });
  }
}

// Flying Cartoon Tomato Effect
function spawnFlyingTomato() {
  const tomato = document.createElement("div");
  tomato.innerText = "🍅";
  tomato.style.position = "fixed";
  tomato.style.fontSize = "4rem";
  tomato.style.left = "50%";
  tomato.style.top = "50%";
  tomato.style.transform = "translate(-50%, -50%) scale(0.2)";
  tomato.style.transition = "transform 0.45s ease-out, opacity 0.45s ease-out";
  tomato.style.zIndex = "99999";
  document.body.appendChild(tomato);

  requestAnimationFrame(() => {
    tomato.style.transform = "translate(-50%, -50%) scale(2.6) rotate(35deg)";
    setTimeout(() => {
      tomato.innerText = "💥 Splat!";
      tomato.style.fontSize = "2.8rem";
      tomato.style.opacity = "0";
      setTimeout(() => tomato.remove(), 450);
    }, 400);
  });
}

// ========================================================
// CONFETTI CANNON (PURE CANVAS IMPLEMENTATION)
// ========================================================
function initConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  const colors = ["#FF4081", "#FFD600", "#00E5FF", "#76FF03", "#9C27B0", "#FF6D00"];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  window.triggerConfetti = function(count = 80) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() * 240 - 120),
        y: canvas.height * 0.38 + (Math.random() * 120 - 60),
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 1.25) * 15,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 14,
        life: 1.0,
        decay: Math.random() * 0.016 + 0.01
      });
    }
  };

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vr;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > canvas.height) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
