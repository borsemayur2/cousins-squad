// Kids Cartoon Soundboard using Web Audio API
// 100% resilient across Mobile Safari, Chrome, Firefox, and Desktop

class CartoonSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.unlocked = false;

    // Auto-unlock audio on first touch/click anywhere on page
    const unlock = () => {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().then(() => {
          this.unlocked = true;
        });
      } else {
        this.unlocked = true;
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Helper to ensure context is ready
  _ensure() {
    if (this.muted) return false;
    this.init();
    if (!this.ctx) return false;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  // 🎈 Pop Sound
  pop() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      console.warn("Audio pop error:", e);
    }
  }

  // 🦘 Cartoon Boing
  boing() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.22);
      osc.frequency.linearRampToValueAtTime(280, now + 0.42);

      // Add wobble vibrato
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(16, now);
      lfoGain.gain.setValueAtTime(45, now);
      lfo.connect(osc.frequency);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 0.45);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn("Audio boing error:", e);
    }
  }

  // 💨 Silly Whoopee Cushion / Fart
  fart() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(105, now);
      osc.frequency.linearRampToValueAtTime(60, now + 0.2);
      osc.frequency.linearRampToValueAtTime(45, now + 0.38);

      const flutter = ctx.createOscillator();
      const flutterGain = ctx.createGain();
      flutter.frequency.setValueAtTime(30, now);
      flutterGain.gain.setValueAtTime(50, now);
      flutter.connect(osc.frequency);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, now);
      filter.frequency.linearRampToValueAtTime(200, now + 0.38);

      gain.gain.setValueAtTime(0.45, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.22);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      flutter.start(now);
      osc.start(now);
      flutter.stop(now + 0.42);
      osc.stop(now + 0.42);
    } catch (e) {
      console.warn("Audio fart error:", e);
    }
  }

  // 🎺 Clown Horn (Honk Honk!)
  honk() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const playSingleHonk = (startTime, duration) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(370, startTime);
        osc2.frequency.setValueAtTime(466, startTime);

        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(startTime);
        osc2.start(startTime);
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
      };

      const now = ctx.currentTime;
      playSingleHonk(now, 0.15);
      playSingleHonk(now + 0.18, 0.2);
    } catch (e) {
      console.warn("Audio honk error:", e);
    }
  }

  // 🍌 Banana Slip / Slide Whistle
  slideWhistle() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.42);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn("Audio slideWhistle error:", e);
    }
  }

  // 🥁 Ba-Dum-Tss! (Rimshot for jokes)
  rimshot() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      this._playDrum(now, 160, 0.08, 0.35);
      this._playDrum(now + 0.11, 130, 0.09, 0.38);
      this._playCymbal(now + 0.22, 0.4);
    } catch (e) {
      console.warn("Audio rimshot error:", e);
    }
  }

  _playDrum(startTime, freq, duration, vol) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);
    osc.frequency.exponentialRampToValueAtTime(45, startTime + duration);

    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  _playCymbal(startTime, duration) {
    const ctx = this.ctx;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(4000, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  // ✨ Magic Sparkles
  magic() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = now + idx * 0.055;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.22, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.23);
      });
    } catch (e) {
      console.warn("Audio magic error:", e);
    }
  }

  // 🤣 Cartoon Giggle Chirps
  giggle() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = now + i * 0.075;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600 + (i % 2) * 160, t);
        osc.frequency.exponentialRampToValueAtTime(950 + (i % 2) * 160, t + 0.06);

        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.07);
      }
    } catch (e) {
      console.warn("Audio giggle error:", e);
    }
  }

  // 🤖 Tech Computer Power-up (for Mayur Mama!)
  techBeep() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const freqs = [330, 440, 554.37, 659.25, 880]; // E4, A4, C#5, E5, A5 arpeggio

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = now + idx * 0.05;

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.11);
      });
    } catch (e) {
      console.warn("Audio techBeep error:", e);
    }
  }

  // 🎺 Ta-Da Fanfare!
  tada() {
    if (!this._ensure()) return;
    try {
      const ctx = this.ctx;
      const now = ctx.currentTime;

      const chords = [
        { t: 0.0, freqs: [261.63, 329.63, 392.00], dur: 0.12 },
        { t: 0.13, freqs: [293.66, 369.99, 440.00], dur: 0.12 },
        { t: 0.26, freqs: [329.63, 415.30, 493.88], dur: 0.14 },
        { t: 0.42, freqs: [523.25, 659.25, 783.99], dur: 0.55 },
      ];

      chords.forEach(c => {
        c.freqs.forEach(f => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + c.t;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0.18, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + c.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(t);
          osc.stop(t + c.dur);
        });
      });
    } catch (e) {
      console.warn("Audio tada error:", e);
    }
  }
}

// Global sound instance
window.soundFx = new CartoonSoundEngine();
