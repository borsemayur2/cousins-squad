// "Who is Most Likely To...?" Interactive Cousin Wheel / Roulette

const SCENARIOS = [
  {
    question: "Who is most likely to eat the frosting off all the cupcakes and blame the family dog?",
    cousinId: "ninad",
    reason: "Because Ninad believes frosting is a public service and cupcake bottoms are optional! 🧁🕵️‍♂️"
  },
  {
    question: "Who is most likely to call an emergency council meeting because someone sat on their favorite couch cushion?",
    cousinId: "aaditi",
    reason: "Aaditi's sovereignty over Couch Cushion #2 is protected by Cousin Federal Law! 👑🛋️"
  },
  {
    question: "Who is most likely to break into a dramatic theatrical weeping monologue over finishing their ice cream?",
    cousinId: "tapasya",
    reason: "Tapasya's mourning for melted chocolate won Best Original Screenplay! 🍦🎭😭"
  },
  {
    question: "Who is most likely to try and build a working jetpack using mom's hairdryer and masking tape?",
    cousinId: "devansh",
    reason: "Devansh is currently patenting the Hairdryer-3000 Rocket Booster in his closet! 🚀💨"
  },
  {
    question: "Who is most likely to run 47 laps around the dining table while eating a slice of pizza?",
    cousinId: "virat",
    reason: "Virat considers standing still to be a temporary system glitch! ⚡🍕🏃‍♂️"
  },
  {
    question: "Who is most likely to maintain innocent eye contact while chocolate is dripping down their chin?",
    cousinId: "ninad",
    reason: "Ninad: 'Chocolate? Never heard of her. Must be ghosts.' 🍫👻"
  },
  {
    question: "Who is most likely to confiscate your snacks for 'official safety inspection' and eat them all?",
    cousinId: "aaditi",
    reason: "As eldest, snack safety testing is Aaditi's solemn constitutional duty! 🍭🔍"
  },
  {
    question: "Who is most likely to sing the chorus of a cartoon theme song 86 times without taking a breath?",
    cousinId: "tapasya",
    reason: "Her vocal cords are made of pure titanium and glitter! 🎤✨🎶"
  },
  {
    question: "Who is most likely to hide a secret trapdoor underneath their bed filled with dismantled gadgets?",
    cousinId: "devansh",
    reason: "Every dismantled clock is just an unfinished time machine waiting to happen! 🕰️🤖"
  },
  {
    question: "Who is most likely to turn a rolled-up magazine and an apple into an intense cricket World Cup final?",
    cousinId: "virat",
    reason: "Six runs into the laundry basket! Commentary provided live by Virat himself! 🏏🏆"
  },
  {
    question: "Who is most likely to win an argument simply by saying: 'Because I was born first'?",
    cousinId: "aaditi",
    reason: "The calendar doesn't lie, and neither does Aaditi! 📜👑"
  },
  {
    question: "Who is most likely to build a fortress out of sofa cushions and declare independence?",
    cousinId: "ninad",
    reason: "Passports are required to enter Fort Ninad (Toll fee: 2 gummy bears). 🏰🧸"
  }
];

class CousinSpinner {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isSpinning = false;
    this.currentScenarioIndex = 0;
    this.initDefault();
  }

  initDefault() {
    const questionEl = document.getElementById("spinner-question");
    const resultAvatarEl = document.getElementById("spinner-avatar");
    const resultNameEl = document.getElementById("spinner-name");
    const resultReasonEl = document.getElementById("spinner-reason");

    const scenario = SCENARIOS[0];
    const cousin = getCousinById ? getCousinById(scenario.cousinId) : null;

    if (questionEl) questionEl.innerText = `"${scenario.question}"`;
    if (resultNameEl && cousin) resultNameEl.innerText = `🎯 IT'S ${cousin.name.toUpperCase()}!`;
    if (resultReasonEl) resultReasonEl.innerText = scenario.reason;
    if (resultAvatarEl && window.renderCousinAvatar && cousin) {
      resultAvatarEl.innerHTML = window.renderCousinAvatar(cousin.id);
    }
  }

  spin() {
    if (this.isSpinning) return;
    this.isSpinning = true;

    if (window.soundFx) {
      window.soundFx.boing();
    }

    const questionEl = document.getElementById("spinner-question");
    const resultCardEl = document.getElementById("spinner-result");
    const resultAvatarEl = document.getElementById("spinner-avatar");
    const resultNameEl = document.getElementById("spinner-name");
    const resultReasonEl = document.getElementById("spinner-reason");
    const spinBtn = document.getElementById("spinner-btn");

    if (spinBtn) {
      spinBtn.disabled = true;
      spinBtn.classList.add("spinning-btn");
      spinBtn.innerText = "🌀 SPINNING...";
    }

    // Pick next scenario (randomized)
    const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
    const scenario = SCENARIOS[randomIndex];
    const cousin = getCousinById(scenario.cousinId);

    // Drumroll / flicker effect
    let counter = 0;
    const cousinIds = ["aaditi", "tapasya", "devansh", "virat", "ninad"];
    
    const interval = setInterval(() => {
      counter++;
      const randomCousinId = cousinIds[Math.floor(Math.random() * cousinIds.length)];
      const randomCousin = getCousinById(randomCousinId);

      if (resultNameEl && randomCousin) {
        resultNameEl.innerText = `🎲 Drumroll... ${randomCousin.name}?`;
      }
      if (resultAvatarEl && randomCousin && window.renderCousinAvatar) {
        resultAvatarEl.innerHTML = window.renderCousinAvatar(randomCousin.id);
      }
      if (window.soundFx && counter % 2 === 0) window.soundFx.pop();

      if (counter > 14) {
        clearInterval(interval);
        this.isSpinning = false;

        if (spinBtn) {
          spinBtn.disabled = false;
          spinBtn.classList.remove("spinning-btn");
          spinBtn.innerText = "🎲 SPIN AGAIN!";
        }

        // Show final result
        if (questionEl) questionEl.innerText = `"${scenario.question}"`;
        if (resultNameEl && cousin) resultNameEl.innerText = `🎯 IT'S ${cousin.name.toUpperCase()}!`;
        if (resultReasonEl) resultReasonEl.innerText = scenario.reason;
        
        if (resultAvatarEl && cousin && window.renderCousinAvatar) {
          resultAvatarEl.innerHTML = window.renderCousinAvatar(cousin.id);
        }

        if (resultCardEl && cousin) {
          resultCardEl.style.borderColor = cousin.themeColor;
          resultCardEl.classList.remove("pop-in");
          void resultCardEl.offsetWidth; // trigger reflow
          resultCardEl.classList.add("pop-in");
        }

        // Celebration Sound & Confetti
        if (window.soundFx) {
          window.soundFx.tada();
        }
        if (window.triggerConfetti) {
          window.triggerConfetti(90);
        }
      }
    }, 110);
  }
}

window.CousinSpinner = CousinSpinner;
