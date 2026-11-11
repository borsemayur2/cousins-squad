// Main Application Controller for Cousins Funhouse!

document.addEventListener("DOMContentLoaded", () => {
  // Initialize State
  let currentJoke = null;
  let isPunchlineVisible = false;
  let activeJokeCategory = "All";
  let dressupCousinId = "aaditi";
  let dressupHat = null;
  let dressupAccessory = null;
  let laughCount = 42;
  let tomatoCount = 3;
  let avatarViewMode = "svg"; // 'svg' or 'image'

  // Initialize Canvas Confetti
  initConfetti();

  // Initialize Cousin Cards Grid
  renderCousinsSquad();

  // Load Initial Joke on Page Reload! (Requirement: "generate random jokes funny homorus on reload")
  loadRandomJoke();

  // Initialize Dress-Up Lab
  setupDressupLab();

  // Initialize Spinner Game
  const spinner = new CousinSpinner("spinner-container");
  const spinBtn = document.getElementById("spinner-btn");
  if (spinBtn) {
    spinBtn.addEventListener("click", () => spinner.spin());
  }

  // Setup Event Listeners
  setupEventListeners();

  // Welcome sound on first user interaction
  document.body.addEventListener("click", () => {
    if (window.soundFx) window.soundFx.init();
  }, { once: true });
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

  if (jokeSetupEl) jokeSetupEl.innerText = currentJoke.setup;
  if (jokeCategoryEl) jokeCategoryEl.innerText = currentJoke.category;
  if (jokeEmojiEl) jokeEmojiEl.innerText = currentJoke.emoji;

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
  if (!('speechSynthesis' in window) || !currentJoke) {
    alert("Speech is not supported in this browser!");
    return;
  }

  window.speechSynthesis.cancel();
  if (window.soundFx) window.soundFx.honk();

  const textToSpeak = isPunchlineVisible 
    ? `${currentJoke.setup} ... ${currentJoke.punchline}`
    : currentJoke.setup;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.pitch = 1.45; // Silly cartoon high pitch
  utterance.rate = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const funVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Junior") || v.name.includes("Child") || v.name.includes("Samantha") || v.name.includes("Victoria")));
  if (funVoice) utterance.voice = funVoice;

  window.speechSynthesis.speak(utterance);
}

// ========================================================
// COUSINS SQUAD CARDS RENDERING
// ========================================================
function renderCousinsSquad() {
  const gridEl = document.getElementById("cousins-grid");
  if (!gridEl || typeof COUSINS_DATA === "undefined") return;

  gridEl.innerHTML = COUSINS_DATA.map(cousin => `
    <div class="cousin-card" id="card-${cousin.id}" style="border-top: 8px solid ${cousin.themeColor}">
      <div class="card-header-banner" style="background: ${cousin.bgColor}">
        ${cousin.isEldest ? '<div class="eldest-crown-tag">👑 ELDEST BOSS</div>' : ''}
        <div class="card-rank-badge">${cousin.ageRank}</div>
        
        <div class="avatar-wrapper" onclick="playCousinVoice('${cousin.id}')" title="Click for ${cousin.name}'s sound!">
          ${window.renderCousinCardAvatar(cousin, avatarViewMode)}
        </div>

        <h3 class="cousin-name" style="color: ${cousin.themeColor}">${cousin.name}</h3>
        <p class="cousin-role">${cousin.role}</p>
        <div class="cousin-quote">${cousin.quote}</div>
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
          🔊 Hear Quirks
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
  const cousin = getCousinById(cousinId);
  if (!cousin) return;

  if (window.soundFx) {
    if (cousinId === "aaditi") window.soundFx.magic();
    else if (cousinId === "tapasya") window.soundFx.giggle();
    else if (cousinId === "devansh") window.soundFx.boing();
    else if (cousinId === "virat") window.soundFx.slideWhistle();
    else if (cousinId === "ninad") window.soundFx.fart();
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(`${cousin.name} says: ${cousin.quote}`);
    utt.pitch = cousin.gender === "F" ? 1.5 : 1.3;
    window.speechSynthesis.speak(utt);
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

  function updatePreview() {
    if (previewEl && window.renderCousinAvatar) {
      previewEl.innerHTML = window.renderCousinAvatar(dressupCousinId, dressupHat, dressupAccessory);
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
      hatPills.forEach(p => p.classList.remove("active"));
      if (dressupHat === pill.dataset.hat) {
        dressupHat = null;
      } else {
        pill.classList.add("active");
        dressupHat = pill.dataset.hat;
      }
      if (window.soundFx) window.soundFx.boing();
      updatePreview();
    });
  });

  accPills.forEach(pill => {
    pill.addEventListener("click", () => {
      accPills.forEach(p => p.classList.remove("active"));
      if (dressupAccessory === pill.dataset.acc) {
        dressupAccessory = null;
      } else {
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
      if (window.triggerConfetti) window.triggerConfetti();
      alert(`📸 CHEESE! ${dressupCousinId.toUpperCase()} looks fantastically hilarious!`);
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
    });
  }

  updatePreview();
}

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

  // Soundboard Buttons
  const soundBtns = document.querySelectorAll(".sound-pad-btn");
  soundBtns.forEach(btn => {
    btn.addEventListener("click", () => {
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
      }
    });
  }

  // Toggle Avatar Style (SVG Vector vs 3D Pixar)
  const avatarModeBtn = document.getElementById("toggle-avatar-mode-btn");
  if (avatarModeBtn) {
    avatarModeBtn.addEventListener("click", () => {
      avatarViewMode = avatarViewMode === "svg" ? "3d" : "svg";
      avatarModeBtn.innerText = avatarViewMode === "svg" 
        ? "✨ Switch to 3D Pixar Avatars" 
        : "🎨 Switch to Cartoon Vector Avatars";
      if (window.soundFx) window.soundFx.magic();
      if (window.triggerConfetti) window.triggerConfetti(60);
      renderCousinsSquad();
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
  tomato.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
  tomato.style.zIndex = "99999";
  document.body.appendChild(tomato);

  requestAnimationFrame(() => {
    tomato.style.transform = "translate(-50%, -50%) scale(2.8) rotate(30deg)";
    setTimeout(() => {
      tomato.innerText = "💥 Splat!";
      tomato.style.fontSize = "3rem";
      tomato.style.opacity = "0";
      setTimeout(() => tomato.remove(), 500);
    }, 450);
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
        x: canvas.width * 0.5 + (Math.random() * 200 - 100),
        y: canvas.height * 0.4 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 14,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        life: 1.0,
        decay: Math.random() * 0.015 + 0.01
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
