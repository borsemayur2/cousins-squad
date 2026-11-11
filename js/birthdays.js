// The Chaos Birthday Countdown Cannon 🎂🎉
// Tracks birthdays, ticks live countdowns, plays birthday tunes, and fires the party cannon!

const DEFAULT_BIRTHDAYS = [
  {
    id: "devansh",
    name: "Devansh",
    role: "The Mad Scientist",
    icon: "🤖",
    // Set near the current date (Nov 28) so the countdown is excitingly close!
    month: 11, // November (1-indexed)
    day: 28,
    birthYear: 2017,
    themeColor: "#FF9800",
    sillyDemands: "A 50,000-piece LEGO fortress, laser safety goggles, and 12 battery packs.",
    funQuote: "“Every birthday is just a software upgrade into a taller chaos machine!”"
  },
  {
    id: "virat",
    name: "Virat",
    role: "Speed Demon",
    icon: "⚡",
    month: 1, // January
    day: 18,
    birthYear: 2019,
    themeColor: "#2196F3",
    sillyDemands: "A golden cricket bat, Mach-5 sneakers, and an all-you-can-eat pizza stadium.",
    funQuote: "“I promise to sit still on my birthday for exactly 1.5 seconds!”"
  },
  {
    id: "ninad",
    name: "Ninad",
    role: "Cookie Bandit",
    icon: "🍪",
    month: 3, // March
    day: 14,
    birthYear: 2021,
    themeColor: "#4CAF50",
    sillyDemands: "A chocolate chip cookie the size of a car wheel, and immunity from bedtime.",
    funQuote: "“On my birthday, the invisible ghost dog is officially not allowed to eat my cake!”"
  },
  {
    id: "tapasya",
    name: "Tapasya",
    role: "Popstar Diva",
    icon: "🎤",
    month: 5, // May
    day: 22,
    birthYear: 2016,
    themeColor: "#9C27B0",
    sillyDemands: "A glittery diamond microphone, purple carpet entryway, and 5 encore songs.",
    funQuote: "“My birthday cake must be greeted with a 15-minute standing ovation!”"
  },
  {
    id: "aaditi",
    name: "Aaditi",
    role: "The Eldest Boss",
    icon: "👑",
    month: 8, // August
    day: 10,
    birthYear: 2014,
    themeColor: "#FF4081",
    sillyDemands: "First slice of all cakes, sovereign control over the TV remote, and complete peace.",
    funQuote: "“I was born first, which means my birthday has historical seniority!”"
  },
  {
    id: "mayur",
    name: "Mayur Mama",
    role: "Chief Tech Wizard",
    icon: "💻",
    month: 10, // October
    day: 5,
    birthYear: 1995,
    themeColor: "#673AB7",
    sillyDemands: "10 Gbps fiber internet, a mechanical keyboard with RGB lights, and hot coffee.",
    funQuote: "“May your ping be low, your FPS be high, and your birthday cake bug-free!”"
  }
];

class BirthdayCannonManager {
  constructor() {
    this.members = this.loadMembers();
    this.activeMember = null;
    this.timerInterval = null;
  }

  loadMembers() {
    const saved = localStorage.getItem("chaos_cousins_birthdays");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with defaults to keep colors and quotes
        return DEFAULT_BIRTHDAYS.map(d => {
          const match = parsed.find(p => p.id === d.id);
          return match ? { ...d, month: match.month, day: match.day } : d;
        });
      } catch (e) {
        console.warn("Could not parse saved birthdays:", e);
      }
    }
    return DEFAULT_BIRTHDAYS;
  }

  saveMembers() {
    const toSave = this.members.map(m => ({ id: m.id, month: m.month, day: m.day }));
    localStorage.setItem("chaos_cousins_birthdays", JSON.stringify(toSave));
  }

  updateMemberBirthday(id, month, day) {
    const member = this.members.find(m => m.id === id);
    if (member) {
      member.month = parseInt(month, 10);
      member.day = parseInt(day, 10);
      this.saveMembers();
      this.refreshUI();
    }
  }

  // Calculate days, hours, mins, secs until next birthday
  getNextBirthdayInfo(member, fromDate = new Date()) {
    const currentYear = fromDate.getFullYear();
    let nextBday = new Date(currentYear, member.month - 1, member.day, 0, 0, 0);

    // If already passed this year, it's next year
    if (nextBday < fromDate) {
      nextBday = new Date(currentYear + 1, member.month - 1, member.day, 0, 0, 0);
    }

    const diffMs = nextBday - fromDate;
    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const turningAge = member.birthYear ? (nextBday.getFullYear() - member.birthYear) : null;

    return {
      targetDate: nextBday,
      diffMs,
      days,
      hours,
      minutes,
      seconds,
      turningAge,
      isToday: (days === 0 && fromDate.getMonth() === (member.month - 1) && fromDate.getDate() === member.day)
    };
  }

  // Find who has the closest upcoming birthday
  findNextUpcoming() {
    const now = new Date();
    let closestMember = this.members[0];
    let minDiff = Infinity;

    this.members.forEach(m => {
      const info = this.getNextBirthdayInfo(m, now);
      if (info.diffMs < minDiff) {
        minDiff = info.diffMs;
        closestMember = m;
      }
    });

    return closestMember;
  }

  init() {
    this.activeMember = this.findNextUpcoming();
    this.renderSquadSelector();
    this.refreshUI();

    // Start live clock ticking every second
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.updateCountdownDisplay();
    }, 1000);
  }

  selectMember(id) {
    const member = this.members.find(m => m.id === id);
    if (member) {
      this.activeMember = member;
      if (window.soundFx) window.soundFx.pop();
      this.refreshUI();
    }
  }

  renderSquadSelector() {
    const selectorEl = document.getElementById("bday-squad-selector");
    if (!selectorEl) return;

    selectorEl.innerHTML = this.members.map(m => `
      <button class="bday-select-pill ${m.id === this.activeMember.id ? 'active' : ''}" 
              data-member="${m.id}" 
              onclick="window.bdayManager.selectMember('${m.id}')"
              style="--pill-color: ${m.themeColor}">
        <span>${m.icon}</span>
        <span>${m.name}</span>
      </button>
    `).join("");
  }

  refreshUI() {
    if (!this.activeMember) return;
    const member = this.activeMember;
    const info = this.getNextBirthdayInfo(member);

    // Update active pill
    document.querySelectorAll(".bday-select-pill").forEach(p => {
      p.classList.toggle("active", p.dataset.member === member.id);
    });

    // Update Banner Info
    const nameEl = document.getElementById("bday-target-name");
    const roleEl = document.getElementById("bday-target-role");
    const dateStrEl = document.getElementById("bday-target-date");
    const avatarEl = document.getElementById("bday-target-avatar");
    const quoteEl = document.getElementById("bday-target-quote");
    const demandsEl = document.getElementById("bday-target-demands");
    const ageEl = document.getElementById("bday-target-age");

    if (nameEl) nameEl.innerText = member.name;
    if (roleEl) roleEl.innerText = member.role;
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (dateStrEl) dateStrEl.innerText = `🎂 Birthday: ${monthNames[member.month - 1]} ${member.day}`;
    
    if (ageEl && info.turningAge) {
      ageEl.innerText = `Turning Level ${info.turningAge}!`;
    }

    if (quoteEl) quoteEl.innerText = member.funQuote;
    if (demandsEl) demandsEl.innerText = member.sillyDemands;

    if (avatarEl && window.renderCousinCardAvatar) {
      avatarEl.innerHTML = window.renderCousinCardAvatar(member, window.appState ? window.appState.getMode() : "3d");
    }

    this.updateCountdownDisplay();
  }

  updateCountdownDisplay() {
    if (!this.activeMember) return;
    const info = this.getNextBirthdayInfo(this.activeMember);

    const daysEl = document.getElementById("bday-days");
    const hoursEl = document.getElementById("bday-hours");
    const minsEl = document.getElementById("bday-mins");
    const secsEl = document.getElementById("bday-secs");

    if (daysEl) daysEl.innerText = String(info.days).padStart(2, "0");
    if (hoursEl) hoursEl.innerText = String(info.hours).padStart(2, "0");
    if (minsEl) minsEl.innerText = String(info.minutes).padStart(2, "0");
    if (secsEl) secsEl.innerText = String(info.seconds).padStart(2, "0");

    const statusBanner = document.getElementById("bday-status-banner");
    if (statusBanner) {
      if (info.isToday) {
        statusBanner.innerHTML = `🎉 <strong>IT'S TODAY! HAPPY BIRTHDAY ${this.activeMember.name.toUpperCase()}!</strong> 🎂🎈`;
        statusBanner.style.background = "#FFD700";
      } else if (info.days <= 14) {
        statusBanner.innerHTML = `⚡ <strong>ALMOST PARTY TIME!</strong> Only ${info.days} days left until cake time!`;
        statusBanner.style.background = "#E0F2FE";
      } else {
        statusBanner.innerHTML = `⏳ Counting down the seconds until ${this.activeMember.name}'s epic celebration!`;
        statusBanner.style.background = "#F1F5F9";
      }
    }
  }

  // 💥 FIRE THE BIRTHDAY CANNON!
  fireCannon() {
    const cannonEl = document.getElementById("birthday-cannon-graphic");
    const fireBtn = document.getElementById("fire-cannon-btn");

    if (fireBtn) fireBtn.disabled = true;

    // 1. Sizzle sound
    if (window.soundFx) window.soundFx.magic();

    if (cannonEl) {
      cannonEl.classList.remove("cannon-recoil");
      cannonEl.classList.add("cannon-sizzle");
    }

    // 2. Blast after 400ms
    setTimeout(() => {
      if (cannonEl) {
        cannonEl.classList.remove("cannon-sizzle");
        cannonEl.classList.add("cannon-recoil");
      }

      // Sounds: Horn + Rimshot + Tada!
      if (window.soundFx) {
        window.soundFx.honk();
        setTimeout(() => window.soundFx.tada(), 200);
      }

      // Massive Multi-wave Confetti Explosion!
      if (window.triggerConfetti) {
        window.triggerConfetti(150);
        setTimeout(() => window.triggerConfetti(120), 250);
        setTimeout(() => window.triggerConfetti(100), 500);
      }

      // Spawn flying cake & balloon emojis
      this.spawnFloatingPartyItems();

      if (window.showToast) {
        window.showToast(`💥 BOOM! Birthday Cannon launched for ${this.activeMember.name}! 🎂🎈🎁`);
      }

      setTimeout(() => {
        if (cannonEl) cannonEl.classList.remove("cannon-recoil");
        if (fireBtn) fireBtn.disabled = false;
      }, 1200);
    }, 450);
  }

  spawnFloatingPartyItems() {
    const items = ["🎂", "🎈", "🎁", "🎉", "🍰", "🍭", "✨", "👑"];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement("div");
      el.className = "floating-party-item";
      el.innerText = items[Math.floor(Math.random() * items.length)];
      el.style.left = `${Math.random() * 85 + 5}%`;
      el.style.top = "70%";
      el.style.fontSize = `${Math.random() * 2 + 2}rem`;
      el.style.setProperty("--vx", `${(Math.random() - 0.5) * 200}px`);
      el.style.setProperty("--vy", `${-(Math.random() * 350 + 200)}px`);
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 2500);
    }
  }

  // 🎶 Synthesizes "Happy Birthday to You" tune using Web Audio API
  playBirthdayTune() {
    if (!window.soundFx || !window.soundFx._ensure()) return;
    const ctx = window.soundFx.ctx;
    const now = ctx.currentTime;

    // Happy Birthday notes & durations
    // C4, C4, D4, C4, F4, E4 ...
    const melody = [
      { note: 261.63, dur: 0.25, pause: 0.05 }, // Hap-
      { note: 261.63, dur: 0.25, pause: 0.05 }, // py
      { note: 293.66, dur: 0.45, pause: 0.05 }, // Birth-
      { note: 261.63, dur: 0.45, pause: 0.05 }, // day
      { note: 349.23, dur: 0.45, pause: 0.05 }, // to
      { note: 329.63, dur: 0.85, pause: 0.15 }, // you!

      { note: 261.63, dur: 0.25, pause: 0.05 }, // Hap-
      { note: 261.63, dur: 0.25, pause: 0.05 }, // py
      { note: 293.66, dur: 0.45, pause: 0.05 }, // Birth-
      { note: 261.63, dur: 0.45, pause: 0.05 }, // day
      { note: 392.00, dur: 0.45, pause: 0.05 }, // to
      { note: 349.23, dur: 0.85, pause: 0.15 }, // you!

      { note: 261.63, dur: 0.25, pause: 0.05 }, // Hap-
      { note: 261.63, dur: 0.25, pause: 0.05 }, // py
      { note: 523.25, dur: 0.45, pause: 0.05 }, // Birth-
      { note: 440.00, dur: 0.45, pause: 0.05 }, // day
      { note: 349.23, dur: 0.45, pause: 0.05 }, // dear
      { note: 329.63, dur: 0.45, pause: 0.05 }, // Cou-
      { note: 293.66, dur: 0.85, pause: 0.15 }, // sin!

      { note: 466.16, dur: 0.25, pause: 0.05 }, // Hap-
      { note: 466.16, dur: 0.25, pause: 0.05 }, // py
      { note: 440.00, dur: 0.45, pause: 0.05 }, // Birth-
      { note: 349.23, dur: 0.45, pause: 0.05 }, // day
      { note: 392.00, dur: 0.45, pause: 0.05 }, // to
      { note: 349.23, dur: 1.10, pause: 0.20 }, // YOU! 🎂
    ];

    let t = now;
    melody.forEach(item => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.note, t);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + item.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + item.dur);

      t += item.dur + item.pause;
    });

    if (window.showToast) {
      window.showToast(`🎶 Playing Birthday Song for ${this.activeMember.name}! 🎂`);
    }
  }
}

// Global instance
window.bdayManager = new BirthdayCannonManager();
