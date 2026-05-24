const SCENE = {
  width: 941,
  height: 1672,
};

function asset(path) {
  const explicitBase = document.querySelector("base")?.href;

  if (explicitBase) {
    return new URL(path, explicitBase).href;
  }

  if (window.location.protocol === "file:") {
    return new URL(path, document.baseURI).href;
  }

  return new URL(path, `${window.location.origin}/`).href;
}

const ASSETS = {
  home: asset("./assets/bg-home.png"),
  character: {
    yeonwoo: asset("./assets/bg-character-yeonwoo.png"),
    yeonhee: asset("./assets/bg-character-yeonhee.png"),
  },
  stage1Intro: asset("./assets/bg-stage1-intro.png"),
  stage1Conversation: {
    yeonwoo: asset("./assets/bg-stage1-yeonwoo.png"),
    yeonhee: asset("./assets/bg-stage1-yeonhee.png"),
  },
  stage1Memory: {
    yeonwoo: asset("./assets/bg-stage1-memory-yeonwoo.png"),
    yeonhee: asset("./assets/bg-stage1-memory-yeonhee.png"),
  },
  stage2Intro: asset("./assets/bg-stage2-intro.png"),
  stage2Entry: asset("./assets/bg-stage2-play.png"),
  stage3Intro: asset("./assets/bg-stage3-intro.png"),
  stage3Play: asset("./assets/bg-stage3-play.png"),
  stage2: {
    waterBottle: asset("./assets/stage2/water-bottle.png"),
    sun: asset("./assets/stage2/sun.png"),
    healEffect: asset("./assets/stage2/heal-plus10.png"),
    damageEffect: asset("./assets/stage2/damage-minus5.png"),
    yeonwooMove: Array.from({ length: 10 }, (_, index) =>
      asset(`./assets/stage2/yeonwoo-move-${String(index + 1).padStart(2, "0")}.png`),
    ),
    yeonheeMove: Array.from({ length: 10 }, (_, index) =>
      asset(`./assets/stage2/yeonhee-move-${String(index + 1).padStart(2, "0")}.png`),
    ),
    yeonwooTiredMove: Array.from({ length: 9 }, (_, index) =>
      asset(`./assets/stage2/yeonwoo-tired-move-${String(index + 1).padStart(2, "0")}.png`),
    ),
    yeonheeTiredMove: Array.from({ length: 10 }, (_, index) =>
      asset(`./assets/stage2/yeonhee-tired-move-${String(index + 1).padStart(2, "0")}.png`),
    ),
  },
  stage3: {
    clapNote: asset("./assets/stage3/clap-note.png"),
    chantNote: asset("./assets/stage3/chant-note.png"),
    music: asset("./assets/stage3/wonsirim.mp3"),
  },
  audio: {
    menuBgm: asset("./assets/audio/festival-pixel-bgm.wav"),
  },
  stage1: {
    choice: [
      asset("./assets/stage1/choice-1.png"),
      asset("./assets/stage1/choice-2.png"),
      asset("./assets/stage1/choice-3.png"),
      asset("./assets/stage1/choice-4.png"),
    ],
    choiceHover: asset("./assets/stage1/choice-hover.png"),
    choicePressed: [
      asset("./assets/stage1/choice-pressed-1.png"),
      asset("./assets/stage1/choice-pressed-2.png"),
      asset("./assets/stage1/choice-pressed-3.png"),
      asset("./assets/stage1/choice-pressed-4.png"),
    ],
    choiceCorrect: [
      asset("./assets/stage1/choice-correct-1.png"),
      asset("./assets/stage1/choice-correct-2.png"),
      asset("./assets/stage1/choice-correct-3.png"),
      asset("./assets/stage1/choice-correct-4.png"),
    ],
    choiceWrong: [
      asset("./assets/stage1/choice-wrong-1.png"),
      asset("./assets/stage1/choice-wrong-2.png"),
      asset("./assets/stage1/choice-wrong-3.png"),
      asset("./assets/stage1/choice-wrong-4.png"),
    ],
    badges: [
      asset("./assets/stage1/badge-1.png"),
      asset("./assets/stage1/badge-2.png"),
      asset("./assets/stage1/badge-3.png"),
      asset("./assets/stage1/badge-4.png"),
    ],
    progress: {
      active: [
        asset("./assets/stage1/progress-1-active.png"),
        asset("./assets/stage1/progress-2-active.png"),
        asset("./assets/stage1/progress-3-active.png"),
        asset("./assets/stage1/progress-4-active.png"),
      ],
      inactive: [
        asset("./assets/stage1/progress-1-active.png"),
        asset("./assets/stage1/progress-2.png"),
        asset("./assets/stage1/progress-3.png"),
        asset("./assets/stage1/progress-4.png"),
      ],
    },
    scorePopup: {
      150: asset("./assets/stage1/score-plus150.png"),
      90: asset("./assets/stage1/score-plus90.png"),
      30: asset("./assets/stage1/score-plus30.png"),
      0: asset("./assets/stage1/score-plus0.png"),
    },
    questionBox: asset("./assets/stage1/question-box.png"),
    nameplateLeft: asset("./assets/stage1/nameplate-left.png"),
    nameplateRight: asset("./assets/stage1/nameplate-right.png"),
    speechBubble: asset("./assets/stage1/speech-bubble.png"),
    nextButton: asset("./assets/stage1/button.png"),
  },
  expressions: {
    yeonwoo: {
      150: asset("./assets/characters/yeonwoo-활기참.png"),
      90: asset("./assets/characters/yeonwoo-미소.png"),
      30: asset("./assets/characters/yeonwoo-걱정.png"),
      0: asset("./assets/characters/yeonwoo-좌절.png"),
    },
    yeonhee: {
      150: asset("./assets/characters/yeonhee-활기참.png"),
      90: asset("./assets/characters/yeonhee-미소.png"),
      30: asset("./assets/characters/yeonhee-걱정.png"),
      0: asset("./assets/characters/yeonhee-좌절.png"),
    },
  },
};

const CHARACTERS = {
  yeonwoo: "연우",
  yeonhee: "연희",
};

const scorePopupSizes = {
  150: { w: 229, h: 100 },
  90: { w: 208, h: 100 },
  30: { w: 206, h: 100 },
  0: { w: 190, h: 100 },
};

const storageKey = "akaraka.selectedCharacter";
const feedbackDelay = 950;
const stage2Player = {
  width: 280,
  height: 390,
  top: 855,
  tiredScale: 0.9,
  minX: 170,
  maxX: 771,
  speed: 330,
  tiredSpeed: 210,
  frameMs: 86,
  tiredAt: 20,
};

const stage2Rules = {
  maxStamina: 50,
  minuteMs: 1000,
  staminaDrainMs: 500,
  difficultyStartMs: 30000,
  difficultyStepMs: 10000,
  baseSpawnMs: 1300,
  spawnStepMs: 230,
  minSpawnMs: 360,
  baseFallSpeed: 290,
  fallSpeedStep: 105,
  easySunsPerWater: 3,
  hardSunsPerWater: 5,
  waterHeal: 10,
  sunDamage: 5,
  fallStartY: 214,
  fallEndY: 1240,
  fallMinX: 88,
  fallMaxX: 853,
};

const stage2ObjectSpecs = {
  water: { w: 74, h: 126 },
  sun: { w: 108, h: 108 },
};

const stage2EffectSpecs = {
  water: { w: 170, h: 91 },
  sun: { w: 132, h: 94 },
};

const stage3Rules = {
  durationMs: 90000,
  noteTravelMs: 2350,
  inputFeedbackMs: 190,
  hitEffectMs: 560,
  hitX: 268,
  spawnX: 840,
  missWindowMs: 250,
  goodWindowMs: 170,
  perfectWindowMs: 86,
  noteSize: 92,
  lanes: {
    clap: { y: 1215, asset: "clapNote", label: "박수" },
    chant: { y: 1468, asset: "chantNote", label: "함성" },
  },
};

const stage3LyricCaptions = [
  { startMs: 16000, endMs: 22000, text: "저 멀리서 들려오는 북소리" },
  { startMs: 22000, endMs: 29000, text: "고릴라는 가슴치며 춤춘다" },
  { startMs: 29000, endMs: 35000, text: "식인종의 가마솥은 끓는데" },
  { startMs: 35000, endMs: 41000, text: "타잔 녀석 지금쯤은 졸거다" },
  { startMs: 41000, endMs: 55000, text: "일어나 이제는 응원을 해야지" },
  { startMs: 55000, endMs: 62000, text: "앉고 서고 Stop 뛰고 뛰고 뛰고 뛰고" },
  { startMs: 62000, endMs: 69000, text: "앉고 서고 Stop 뛰고 뛰고 뛰고 뛰고" },
  { startMs: 69000, endMs: 85000, text: "소리치며 다시 한 번 힘을 내서 뛰어라" },
];

function stage3Phrase(startMs, offsets, pattern) {
  return offsets.map((offset, index) => ({
    timeMs: startMs + offset,
    lane: pattern[index % pattern.length],
  }));
}

function stage3Grid(startMs, count, stepMs, pattern) {
  return Array.from({ length: count }, (_, index) => ({
    timeMs: startMs + index * stepMs,
    lane: pattern[index % pattern.length],
  }));
}

const stage3ChartNotes = [
  ...stage3Grid(2600, 13, 1000, ["clap", "chant", "clap", "clap"]),
  ...stage3Phrase(15280, [0, 720], ["both", "chant"]),
  ...stage3Phrase(16000, [0, 760, 1500, 2240, 3000, 3760, 4520, 5280], ["chant", "clap", "clap", "chant", "clap", "clap", "chant", "clap"]),
  ...stage3Phrase(22000, [0, 700, 1400, 2120, 2840, 3560, 4280, 5000, 5720, 6440], ["clap", "clap", "chant", "clap", "chant", "clap", "clap", "chant", "clap", "clap"]),
  ...stage3Phrase(29000, [0, 760, 1520, 2280, 3040, 3800, 4560, 5320], ["chant", "clap", "chant", "clap", "clap", "chant", "clap", "clap"]),
  ...stage3Phrase(35000, [0, 740, 1480, 2220, 2960, 3700, 4440, 5180], ["clap", "chant", "clap", "chant", "clap", "clap", "chant", "clap"]),
  ...stage3Phrase(41000, [0, 720, 1440, 2160, 2880, 3600, 4320, 5040, 5760, 6480, 7200, 7920, 8640, 9360, 10080, 10800, 11520, 12240, 12960], ["both", "clap", "chant", "clap", "chant", "clap", "clap", "chant"]),
  ...stage3Phrase(55000, [0, 500, 1000, 1500, 2050, 2500, 2950, 3400, 3850, 4300, 4750, 5200, 5650, 6100], ["clap", "chant", "clap", "both", "chant", "clap", "clap", "clap", "chant", "clap", "clap", "clap", "both", "clap"]),
  ...stage3Phrase(62000, [0, 500, 1000, 1500, 2050, 2500, 2950, 3400, 3850, 4300, 4750, 5200, 5650, 6100], ["clap", "chant", "clap", "both", "chant", "clap", "clap", "clap", "chant", "clap", "clap", "clap", "both", "clap"]),
  ...stage3Grid(69000, 16, 500, ["chant", "clap", "chant", "clap", "both", "clap", "chant", "clap"]),
  ...stage3Grid(77000, 18, 430, ["chant", "clap", "both", "clap", "chant", "clap"]),
  ...stage3Phrase(85000, [0, 520, 1040, 1560, 2080, 2600, 3120, 3640, 4160], ["both", "clap", "chant", "clap", "both", "clap", "chant", "clap", "both"]),
];

function createStage3Beatmap() {
  return stage3ChartNotes
    .flatMap(({ timeMs, lane }) => {
      if (lane === "both") {
        return [
          { timeMs, lane: "clap" },
          { timeMs: timeMs + 84, lane: "chant" },
        ];
      }

      return [{ timeMs, lane }];
    })
    .filter((note) => note.timeMs < stage3Rules.durationMs)
    .sort((a, b) => a.timeMs - b.timeMs);
}

const stage3Beatmap = createStage3Beatmap();

const conversationRounds = [
  {
    title: "첫 만남",
    juniorLine: "선배 혹시 몇 학번이세요?\n아, 이런 거 물어봐도 돼요?\n약간 실례인가?",
    choices: [
      { text: "괜찮아ㅋㅋ 나도 아직 학교 적응 중이야. 그냥 편하게 말해도 돼.", score: 150 },
      { text: "나 22학번이야. 너는 26학번?", score: 90 },
      { text: "나 때는 학번 물어보는 게 기본 예의였는데...", score: 30 },
      { text: "그걸 왜 물어봐?", score: 0 },
    ],
  },
  {
    title: "축제 메이트",
    juniorLine: "저 사실 이번 축제 때\n같이 다닐 사람이 아직 없어요.\n다들 인스타 스토리 올리면서 만나던데,\n선배도 그런 거 잘 하세요?",
    choices: [
      { text: "나도 화려하진 않은데 같이 다니면 되지. 사진은 천천히 찍자.", score: 150 },
      { text: "인스타는 가끔만 해. 대신 연락 잘 보면 되지.", score: 90 },
      { text: "요즘은 다 스토리로 모이는구나... 좀 어렵네.", score: 30 },
      { text: "난 그런 거 안 해. 알아서 합류해야지.", score: 0 },
    ],
  },
  {
    title: "응원가 걱정",
    juniorLine: "응원가 연습 영상 봤는데\n다들 너무 잘하더라고요...\n저 박수 타이밍 틀리면 어떡하죠?",
    choices: [
      { text: "처음이면 틀려도 괜찮아. 옆에서 같이 맞춰주면 돼.", score: 150 },
      { text: "박수랑 함성만 먼저 익혀도 충분해.", score: 90 },
      { text: "응원가 정도는 미리 외워와야 하는 거 아냐?", score: 30 },
      { text: "그건 네가 알아서 해야지.", score: 0 },
    ],
  },
  {
    title: "공연 후 동선",
    juniorLine: "공연 끝나고 저\n연세우유 크림빵이랑 닭강정 먹으려고 했는데,\n줄 너무 길면 그냥 포기할까 고민돼요.",
    choices: [
      { text: "그럼 동선 잘 짜보자. 너무 길면 다른 부스부터 보고 나중에 다시 가도 돼.", score: 150 },
      { text: "닭강정은 인기 많지. 일단 먹고 싶은 거 하나는 꼭 먹자.", score: 90 },
      { text: "축제는 원래 줄 서는 맛이야. 무조건 버텨.", score: 30 },
      { text: "줄 길면 그냥 아무 데나 먹어.", score: 0 },
    ],
  },
];

const memoryQuizzes = [
  {
    question: "후배의 학번은 무엇이었을까요?",
    choices: ["20학번", "22학번", "24학번", "26학번"],
    answerIndex: 3,
  },
  {
    question: "후배가 응원가에서 가장 걱정한 것은 무엇이었을까요?",
    choices: ["공연 시작 시간을 모르는 것", "박수 타이밍을 틀리는 것", "축제 장소를 못 찾는 것", "응원가 가사를 전혀 모르는 것"],
    answerIndex: 1,
  },
  {
    question: "후배가 공연 후 먹고 싶다고 한 것은 무엇이었을까요?",
    choices: ["떡볶이와 솜사탕", "연세우유 크림빵과 닭강정", "핫도그와 콜라", "피자와 맥주"],
    answerIndex: 1,
  },
];

function loadSelectedCharacter() {
  try {
    return localStorage.getItem(storageKey) || "yeonwoo";
  } catch {
    return "yeonwoo";
  }
}

function saveSelectedCharacter(character) {
  try {
    localStorage.setItem(storageKey, character);
  } catch {
    // File previews can block storage in some browsers; gameplay still works in memory.
  }
}

function saveStage1Score(stage1State) {
  const stage1RawScore = stage1State.conversationScore + stage1State.memoryScore;
  const stage1Score = Math.round((stage1RawScore / 1050) * 1000);

  try {
    localStorage.setItem("stage1RawScore", String(stage1RawScore));
    localStorage.setItem("stage1Score", String(stage1Score));
    localStorage.setItem("stage1ConversationScore", String(stage1State.conversationScore));
    localStorage.setItem("stage1MemoryScore", String(stage1State.memoryScore));
  } catch {
    // The score is still available in runtime state if storage is unavailable.
  }

  return { stage1RawScore, stage1Score };
}

function saveStage2Score(stage2State) {
  const stage2SurvivalSeconds = Math.floor(stage2State.survivalMs / 1000);
  const stage2Score = Math.min(1000, Math.round((stage2SurvivalSeconds / 60) * 1000));

  try {
    localStorage.setItem("stage2SurvivalMs", String(stage2State.survivalMs));
    localStorage.setItem("stage2SurvivalMinutes", String(stage2State.finalSurvivalMinutes ?? stage2State.survivalMinutes));
    localStorage.setItem("stage2SurvivalSeconds", String(stage2SurvivalSeconds));
    localStorage.setItem("stage2Score", String(stage2Score));
  } catch {
    // Runtime state still keeps the result if localStorage is unavailable.
  }

  return { stage2SurvivalSeconds, stage2Score };
}

function saveStage3Score(stage3State) {
  const stage3Score = Math.max(0, Math.min(1000, Math.round(stage3State.score)));
  const totalNotes = stage3State.hitCount + stage3State.missCount;
  const stage3Accuracy = totalNotes > 0 ? Math.round((stage3State.hitCount / totalNotes) * 100) : 0;

  try {
    localStorage.setItem("stage3Score", String(stage3Score));
    localStorage.setItem("stage3MaxCombo", String(stage3State.maxCombo));
    localStorage.setItem("stage3HitCount", String(stage3State.hitCount));
    localStorage.setItem("stage3MissCount", String(stage3State.missCount));
    localStorage.setItem("stage3Accuracy", String(stage3Accuracy));
  } catch {
    // Runtime state still keeps the result if localStorage is unavailable.
  }

  return { stage3Score, stage3Accuracy };
}

function createStage1State() {
  return {
    phase: "conversation",
    conversationRound: 0,
    memoryRound: 0,
    totalRawScore: 0,
    conversationScore: 0,
    memoryScore: 0,
    selectedChoiceIndex: null,
    isTransitioning: false,
    feedback: null,
    finalScore: null,
  };
}

function createStage2State() {
  return {
    playerX: SCENE.width / 2,
    survivalMs: 0,
    survivalMinutes: 0,
    stamina: stage2Rules.maxStamina,
    staminaDrainElapsed: 0,
    isTired: false,
    wasTired: false,
    direction: 0,
    facingDirection: 1,
    difficultyLevel: 1,
    spawnElapsed: 0,
    nextObjectId: 1,
    fallingObjects: [],
    feedbackEffects: [],
    isGameOver: false,
    finalSurvivalMinutes: null,
    finalScore: null,
    frameIndex: 0,
    lastTickAt: 0,
    frameElapsed: 0,
  };
}

function createStage3State() {
  return {
    elapsedMs: 0,
    remainingSeconds: Math.ceil(stage3Rules.durationMs / 1000),
    score: 0,
    combo: 0,
    maxCombo: 0,
    hitCount: 0,
    missCount: 0,
    nextNoteIndex: 0,
    nextNoteId: 1,
    notes: [],
    hitEffects: [],
    nextEffectId: 1,
    inputFeedback: {
      clap: 0,
      chant: 0,
    },
    audioSync: false,
    audioStarted: false,
    feedback: null,
    feedbackTtl: 0,
    isComplete: false,
    finalScore: null,
    lastTickAt: 0,
  };
}

const startsAtStage1 = /\/stage1(?:\/|$)/.test(window.location.pathname);
const startsAtStage2 = /\/stage2(?:\/|$)/.test(window.location.pathname);
const startsAtStage3 = /\/stage3(?:\/|$)/.test(window.location.pathname);

const gameState = {
  screen: startsAtStage3 ? "stage3Intro" : startsAtStage2 ? "stage2Intro" : startsAtStage1 ? "stage1" : "home",
  selectedCharacter: loadSelectedCharacter(),
  stage1: createStage1State(),
  stage2: createStage2State(),
  stage3: createStage3State(),
};

const sceneImage = document.querySelector("#sceneImage");
const hotspots = document.querySelector("#hotspots");
const gameScreen = document.querySelector("#gameScreen");
const stage2Input = {
  left: false,
  right: false,
};
const stage2Elements = {
  player: null,
  objectsLayer: null,
  effectsLayer: null,
  timeTop: null,
  timeBottom: null,
  staminaNumber: null,
  staminaFill: null,
};
const stage3Elements = {
  notesLayer: null,
  effectsLayer: null,
  time: null,
  score: null,
  caption: null,
  combo: null,
  feedback: null,
  expression: null,
  input: {
    clap: null,
    chant: null,
  },
};

const stage3Audio = typeof Audio === "undefined" ? null : new Audio(ASSETS.stage3.music);
if (stage3Audio) {
  stage3Audio.preload = "auto";
  stage3Audio.volume = 0.34;
}

const menuBgmAudio = typeof Audio === "undefined" ? null : new Audio(ASSETS.audio.menuBgm);
if (menuBgmAudio) {
  menuBgmAudio.loop = true;
  menuBgmAudio.preload = "auto";
  menuBgmAudio.volume = 0.14;
}

let audioGestureReady = false;

const hitboxes = {
  home: [
    {
      label: "시작하기",
      x: 18.3,
      y: 85.9,
      w: 63.5,
      h: 9.8,
      action: () => goTo("character"),
    },
  ],
  character: [
    {
      label: "연우 선택",
      x: 4.8,
      y: 16.5,
      w: 44.8,
      h: 52.8,
      action: () => selectCharacter("yeonwoo"),
    },
    {
      label: "연희 선택",
      x: 50.6,
      y: 16.5,
      w: 44.8,
      h: 52.8,
      action: () => selectCharacter("yeonhee"),
    },
    {
      label: "선택한 캐릭터로 시작하기",
      x: 6.2,
      y: 90.8,
      w: 87.5,
      h: 7.8,
      action: () => goTo("stage1Intro"),
    },
  ],
  stage1Intro: [
    {
      label: "친화력 훈련 시작",
      x: 11.5,
      y: 88.0,
      w: 77.0,
      h: 7.7,
      action: () => goTo("stage1"),
    },
  ],
  stage2Intro: [
    {
      label: "지구력 훈련 시작",
      x: 11.5,
      y: 90.0,
      w: 77.0,
      h: 7.6,
      action: () => goTo("stage2Entry"),
    },
  ],
  stage2Entry: [],
  stage3Intro: [
    {
      label: "응원가 훈련 시작",
      x: 11.5,
      y: 90.0,
      w: 77.0,
      h: 7.6,
      action: () => goTo("stage3Play"),
    },
  ],
};

function getRoles() {
  const seniorCharacter = gameState.selectedCharacter;
  const juniorCharacter = seniorCharacter === "yeonwoo" ? "yeonhee" : "yeonwoo";

  return {
    seniorCharacter,
    juniorCharacter,
    seniorName: CHARACTERS[seniorCharacter],
    juniorName: CHARACTERS[juniorCharacter],
    seniorLabel: `${CHARACTERS[seniorCharacter]}(24)`,
    juniorLabel: `${CHARACTERS[juniorCharacter]}(20)`,
  };
}

function getSceneSource() {
  if (gameState.screen === "character") {
    return ASSETS.character[gameState.selectedCharacter];
  }

  if (gameState.screen === "stage1Intro") {
    return ASSETS.stage1Intro;
  }

  if (gameState.screen === "stage1") {
    if (gameState.stage1.phase === "memory" || gameState.stage1.phase === "complete") {
      return ASSETS.stage1Memory[gameState.selectedCharacter];
    }

    return ASSETS.stage1Conversation[gameState.selectedCharacter];
  }

  if (gameState.screen === "stage1End") {
    return ASSETS.stage1Memory[gameState.selectedCharacter];
  }

  if (gameState.screen === "stage2Intro") {
    return ASSETS.stage2Intro;
  }

  if (gameState.screen === "stage2Entry") {
    return ASSETS.stage2Entry;
  }

  if (gameState.screen === "stage2End") {
    return ASSETS.stage2Entry;
  }

  if (gameState.screen === "stage3Intro") {
    return ASSETS.stage3Intro;
  }

  if (gameState.screen === "stage3Play") {
    return ASSETS.stage3Play;
  }

  if (gameState.screen === "stage3End" || gameState.screen === "result") {
    return ASSETS.stage3Play;
  }

  return ASSETS.home;
}

function getSceneLabel() {
  if (gameState.screen === "character") {
    return `캐릭터 선택 화면, 현재 ${CHARACTERS[gameState.selectedCharacter]} 선택`;
  }

  if (gameState.screen === "stage1Intro") {
    return `스테이지1 친화력 훈련 설명, ${CHARACTERS[gameState.selectedCharacter]} 선택`;
  }

  if (gameState.screen === "stage1") {
    return `스테이지1 친화력 훈련 플레이, ${CHARACTERS[gameState.selectedCharacter]} 선택`;
  }

  if (gameState.screen === "stage1End") {
    return "스테이지1 종료 화면";
  }

  if (gameState.screen === "stage2Intro") {
    return "스테이지2 지구력 훈련 설명";
  }

  if (gameState.screen === "stage2Entry") {
    return "스테이지2 지구력 훈련 진입 화면";
  }

  if (gameState.screen === "stage2End") {
    return "스테이지2 종료 화면";
  }

  if (gameState.screen === "stage3Intro") {
    return "스테이지3 응원가 훈련 설명";
  }

  if (gameState.screen === "stage3Play") {
    return "스테이지3 응원가 훈련 플레이";
  }

  if (gameState.screen === "stage3End") {
    return "스테이지3 종료 화면";
  }

  if (gameState.screen === "result") {
    return "훈련 총점 화면";
  }

  return "홈 화면";
}

function render() {
  const nextSource = getSceneSource();
  gameScreen.dataset.screen = gameState.screen;
  gameScreen.dataset.character = gameState.selectedCharacter;

  if (sceneImage.getAttribute("src") !== nextSource) {
    sceneImage.classList.add("is-changing");
    sceneImage.src = nextSource;
    window.setTimeout(() => sceneImage.classList.remove("is-changing"), 120);
  }

  sceneImage.alt = getSceneLabel();
  hotspots.replaceChildren();

  if (gameState.screen === "stage1") {
    renderStage1();
    return;
  }

  if (gameState.screen === "stage1End") {
    renderStageEndScreen("stage1");
    return;
  }

  if (gameState.screen === "stage2Entry") {
    renderStage2();
    return;
  }

  if (gameState.screen === "stage2End") {
    renderStageEndScreen("stage2");
    return;
  }

  if (gameState.screen === "stage3Play") {
    renderStage3();
    return;
  }

  if (gameState.screen === "stage3End") {
    renderStageEndScreen("stage3");
    return;
  }

  if (gameState.screen === "result") {
    renderResultScreen();
    return;
  }

  hotspots.replaceChildren(...(hitboxes[gameState.screen] || []).map(createHotspot));
}

function createHotspot(hitbox) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "hotspot";
  button.style.setProperty("--x", hitbox.x);
  button.style.setProperty("--y", hitbox.y);
  button.style.setProperty("--w", hitbox.w);
  button.style.setProperty("--h", hitbox.h);
  button.setAttribute("aria-label", hitbox.label);
  button.addEventListener("click", hitbox.action);
  return button;
}

function createPxButton(label, rect, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "stage1-hit-area";
  button.style.left = `${rect.x}px`;
  button.style.top = `${rect.y}px`;
  button.style.width = `${rect.w}px`;
  button.style.height = `${rect.h}px`;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", onClick);
  return button;
}

function makeDiv(className, text, rect) {
  const div = document.createElement("div");
  div.className = className;
  if (text !== undefined) {
    div.textContent = text;
  }
  if (rect) {
    Object.assign(div.style, {
      left: `${rect.x}px`,
      top: `${rect.y}px`,
      width: `${rect.w}px`,
      height: `${rect.h}px`,
    });
  }
  return div;
}

function makeImg(className, src, rect, alt = "") {
  const img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = alt;
  img.draggable = false;
  Object.assign(img.style, {
    left: `${rect.x}px`,
    top: `${rect.y}px`,
    width: `${rect.w}px`,
    height: `${rect.h}px`,
  });
  return img;
}

function renderStage2() {
  const layer = makeDiv("stage2-layer");
  hotspots.append(layer);

  const objectsLayer = makeDiv("stage2-objects-layer");
  const effectsLayer = makeDiv("stage2-effects-layer");
  stage2Elements.objectsLayer = objectsLayer;
  stage2Elements.effectsLayer = effectsLayer;
  layer.append(objectsLayer);

  renderStage2Hud(layer);

  const player = makeImg(
    "stage2-player",
    getStage2FrameSrc(),
    getStage2PlayerRect(),
    getStage2PlayerLabel(),
  );
  stage2Elements.player = player;
  layer.append(player);
  layer.append(effectsLayer);

  layer.append(createStage2MoveButton("왼쪽으로 이동", { x: 58, y: 1412, w: 210, h: 210 }, "left"));
  layer.append(createStage2MoveButton("오른쪽으로 이동", { x: 673, y: 1412, w: 210, h: 210 }, "right"));

  updateStage2ObjectElements();
  updateStage2FeedbackElements();

  if (gameState.stage2.isGameOver) {
    renderStage2GameOver(layer);
  }
}

function renderStage2Hud(layer) {
  const timeTop = makeDiv("stage2-time-value", "", { x: 58, y: 107, w: 132, h: 72 });
  const staminaNumber = makeDiv("stage2-stamina-number", "", { x: 804, y: 77, w: 42, h: 44 });
  const staminaFill = makeDiv("stage2-stamina-fill", "", { x: 754, y: 138, w: 145, h: 17 });
  const timeBottom = makeDiv("stage2-bottom-time", "", { x: 506, y: 1280, w: 100, h: 76 });

  stage2Elements.timeTop = timeTop;
  stage2Elements.staminaNumber = staminaNumber;
  stage2Elements.staminaFill = staminaFill;
  stage2Elements.timeBottom = timeBottom;

  layer.append(timeTop, staminaNumber, staminaFill, timeBottom);
  updateStage2HudElements();
}

function getStage2FrameSrc() {
  const frames = getStage2MoveFrames();
  const frameIndex = gameState.stage2.frameIndex % frames.length;
  return frames[frameIndex] || frames[0];
}

function getStage2MoveFrames() {
  const tiredSuffix = isStage2Tired() ? "TiredMove" : "Move";
  return ASSETS.stage2[`${gameState.selectedCharacter}${tiredSuffix}`] || ASSETS.stage2.yeonwooMove;
}

function isStage2Tired() {
  return gameState.stage2.isTired || gameState.stage2.stamina < stage2Player.tiredAt;
}

function getStage2PlayerLabel() {
  const characterName = CHARACTERS[gameState.selectedCharacter] || CHARACTERS.yeonwoo;
  return `${isStage2Tired() ? "지친 " : ""}${characterName} 이동 캐릭터`;
}

function getStage2PlayerRect() {
  const tired = isStage2Tired();
  const width = Math.round(stage2Player.width * (tired ? stage2Player.tiredScale : 1));
  const height = Math.round(stage2Player.height * (tired ? stage2Player.tiredScale : 1));
  const bottom = stage2Player.top + stage2Player.height;

  return {
    x: gameState.stage2.playerX - width / 2,
    y: bottom - height,
    w: width,
    h: height,
  };
}

function getStage2TiredFacingScale() {
  const directionScale = gameState.stage2.facingDirection < 0 ? -1 : 1;
  const characterScale = gameState.selectedCharacter === "yeonwoo" ? -1 : 1;
  return directionScale * characterScale;
}

function createStage2MoveButton(label, rect, side) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "stage2-hit-area";
  button.style.left = `${rect.x}px`;
  button.style.top = `${rect.y}px`;
  button.style.width = `${rect.w}px`;
  button.style.height = `${rect.h}px`;
  button.setAttribute("aria-label", label);

  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture?.(event.pointerId);
    setStage2Input(side, true);
  });
  button.addEventListener("pointerup", (event) => {
    event.preventDefault();
    button.releasePointerCapture?.(event.pointerId);
    setStage2Input(side, false);
  });
  button.addEventListener("pointercancel", () => setStage2Input(side, false));
  button.addEventListener("pointerleave", () => setStage2Input(side, false));

  return button;
}

function renderStage3() {
  const layer = makeDiv("stage3-layer");
  const notesLayer = makeDiv("stage3-notes-layer");
  const effectsLayer = makeDiv("stage3-effects-layer");
  stage3Elements.notesLayer = notesLayer;
  stage3Elements.effectsLayer = effectsLayer;
  hotspots.append(layer);
  layer.append(notesLayer, effectsLayer);

  stage3Elements.time = makeDiv("stage3-time-value", "", { x: 72, y: 106, w: 112, h: 70 });
  stage3Elements.score = makeDiv("stage3-score-value", "", { x: 670, y: 122, w: 154, h: 58 });
  stage3Elements.caption = makeDiv("stage3-caption", "", { x: 252, y: 274, w: 438, h: 118 });
  stage3Elements.combo = makeDiv("stage3-combo", "", { x: 596, y: 476, w: 258, h: 132 });
  stage3Elements.feedback = makeDiv("stage3-feedback", "", { x: 120, y: 452, w: 268, h: 150 });
  stage3Elements.expression = makeImg(
    "stage3-judgement-expression",
    ASSETS.expressions[gameState.selectedCharacter]?.[90] || "",
    { x: 392, y: 426, w: 132, h: 158 },
    "판정 표정",
  );
  stage3Elements.input.clap = makeDiv("stage3-input-indicator clap", "", { x: 34, y: 1110, w: 178, h: 218 });
  stage3Elements.input.chant = makeDiv("stage3-input-indicator chant", "", { x: 34, y: 1364, w: 178, h: 218 });

  layer.append(stage3Elements.time, stage3Elements.score, stage3Elements.caption, stage3Elements.combo, stage3Elements.feedback);
  layer.append(stage3Elements.expression);
  layer.append(stage3Elements.input.clap, stage3Elements.input.chant);
  layer.append(createStage3HitButton("박수", { x: 34, y: 1110, w: 178, h: 218 }, "clap"));
  layer.append(createStage3HitButton("함성", { x: 34, y: 1364, w: 178, h: 218 }, "chant"));

  updateStage3Elements();

  if (gameState.stage3.isComplete) {
    renderStage3Complete(layer);
  }
}

function createStage3HitButton(label, rect, lane) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `stage3-hit-area ${lane}`;
  button.style.left = `${rect.x}px`;
  button.style.top = `${rect.y}px`;
  button.style.width = `${rect.w}px`;
  button.style.height = `${rect.h}px`;
  button.setAttribute("aria-label", `${label} 입력`);
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    handleStage3Input(lane);
  });
  return button;
}

function spawnStage3Note(lane, targetAt) {
  const stage3 = gameState.stage3;
  stage3.notes.push({
    id: stage3.nextNoteId,
    lane,
    targetAt,
    judged: false,
  });
  stage3.nextNoteId += 1;
}

function spawnStage3Notes() {
  const stage3 = gameState.stage3;
  while (
    stage3.nextNoteIndex < stage3Beatmap.length &&
    stage3Beatmap[stage3.nextNoteIndex].timeMs - stage3.elapsedMs <= stage3Rules.noteTravelMs
  ) {
    const chartNote = stage3Beatmap[stage3.nextNoteIndex];
    spawnStage3Note(chartNote.lane, chartNote.timeMs);
    stage3.nextNoteIndex += 1;
  }
}

function getStage3NoteX(note) {
  const timeUntilHit = note.targetAt - gameState.stage3.elapsedMs;
  const progress = 1 - timeUntilHit / stage3Rules.noteTravelMs;
  return stage3Rules.spawnX - (stage3Rules.spawnX - stage3Rules.hitX) * progress;
}

function getStage3Judgement(delta) {
  const absDelta = Math.abs(delta);
  if (absDelta <= stage3Rules.perfectWindowMs) return "perfect";
  if (absDelta <= stage3Rules.goodWindowMs) return "good";
  if (absDelta <= stage3Rules.missWindowMs) return "ok";
  return null;
}

function getStage3JudgementLabel(judgement) {
  if (judgement === "perfect") return "PERFECT!";
  if (judgement === "good") return "GOOD!";
  if (judgement === "ok") return "OK!";
  return "MISS";
}

function getStage3ExpressionScore(judgement) {
  if (judgement === "perfect") return 150;
  if (judgement === "good") return 90;
  if (judgement === "ok") return 30;
  if (judgement === "miss") return 0;
  return null;
}

function getStage3Caption() {
  const elapsed = gameState.stage3.elapsedMs;
  const caption = stage3LyricCaptions.find((item) => elapsed >= item.startMs && elapsed < item.endMs);
  return caption?.text || "";
}

function getStage3ScoreForJudgement(judgement, combo) {
  const baseScore = 1000 / Math.max(1, stage3Beatmap.length);
  const comboBoost = 1 + Math.min(0.08, Math.floor(combo / 20) * 0.01);

  if (judgement === "perfect") return baseScore * comboBoost;
  if (judgement === "good") return baseScore * 0.72 * comboBoost;
  if (judgement === "ok") return baseScore * 0.45 * comboBoost;
  return 0;
}

function addStage3HitEffect(note, judgement) {
  const lane = stage3Rules.lanes[note.lane];
  const x = getStage3NoteX(note);
  const y = lane.y;

  gameState.stage3.hitEffects.push({
    id: gameState.stage3.nextEffectId,
    lane: note.lane,
    judgement,
    x,
    y,
    ttl: stage3Rules.hitEffectMs,
  });
  gameState.stage3.nextEffectId += 1;
}

function setStage3Feedback(judgement) {
  gameState.stage3.feedback = judgement;
  gameState.stage3.feedbackTtl = 760;
}

function handleStage3Input(lane) {
  const stage3 = gameState.stage3;
  if (gameState.screen !== "stage3Play" || stage3.isComplete) return;

  stage3.inputFeedback[lane] = stage3Rules.inputFeedbackMs;

  const candidates = stage3.notes
    .filter((note) => !note.judged && note.lane === lane)
    .map((note) => ({ note, delta: stage3.elapsedMs - note.targetAt }))
    .filter(({ delta }) => Math.abs(delta) <= stage3Rules.missWindowMs)
    .sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta));

  const best = candidates[0];
  if (!best) {
    stage3.combo = 0;
    setStage3Feedback("miss");
    updateStage3Elements();
    return;
  }

  const judgement = getStage3Judgement(best.delta);
  addStage3HitEffect(best.note, judgement);
  best.note.judged = true;
  best.note.judgement = judgement;
  best.note.removeAt = stage3.elapsedMs + 180;
  stage3.combo += 1;
  stage3.maxCombo = Math.max(stage3.maxCombo, stage3.combo);
  stage3.hitCount += 1;
  stage3.score = Math.min(1000, stage3.score + getStage3ScoreForJudgement(judgement, stage3.combo));
  setStage3Feedback(judgement);
  updateStage3Elements();
}

function updateStage3Misses() {
  const stage3 = gameState.stage3;
  stage3.notes.forEach((note) => {
    if (!note.judged && stage3.elapsedMs - note.targetAt > stage3Rules.missWindowMs) {
      note.judged = true;
      note.judgement = "miss";
      note.removeAt = stage3.elapsedMs + 260;
      stage3.combo = 0;
      stage3.missCount += 1;
      setStage3Feedback("miss");
    }
  });

  stage3.notes = stage3.notes.filter((note) => !note.removeAt || note.removeAt > stage3.elapsedMs);
}

function updateStage3TimedEffects(deltaMs) {
  const stage3 = gameState.stage3;
  stage3.inputFeedback.clap = Math.max(0, stage3.inputFeedback.clap - deltaMs);
  stage3.inputFeedback.chant = Math.max(0, stage3.inputFeedback.chant - deltaMs);
  stage3.hitEffects = stage3.hitEffects
    .map((effect) => ({ ...effect, ttl: effect.ttl - deltaMs }))
    .filter((effect) => effect.ttl > 0);
}

function updateStage3Elements() {
  const stage3 = gameState.stage3;
  if (stage3Elements.time) {
    stage3Elements.time.textContent = String(stage3.remainingSeconds);
  }

  if (stage3Elements.score) {
    stage3Elements.score.textContent = String(Math.round(stage3.score));
  }

  if (stage3Elements.caption) {
    stage3Elements.caption.textContent = getStage3Caption();
  }

  if (stage3Elements.combo) {
    stage3Elements.combo.innerHTML = stage3.combo > 0 ? `<strong>${stage3.combo}</strong><span>COMBO</span>` : "";
  }

  if (stage3Elements.feedback) {
    const label = stage3.feedback ? getStage3JudgementLabel(stage3.feedback) : "";
    stage3Elements.feedback.textContent = label;
    stage3Elements.feedback.dataset.judgement = stage3.feedback || "";
  }

  if (stage3Elements.expression) {
    const expressionScore = getStage3ExpressionScore(stage3.feedback);
    const expressionSrc = expressionScore === null
      ? ""
      : ASSETS.expressions[gameState.selectedCharacter]?.[expressionScore];

    if (expressionSrc) {
      if (stage3Elements.expression.getAttribute("src") !== expressionSrc) {
        stage3Elements.expression.src = expressionSrc;
      }
      stage3Elements.expression.alt = `${CHARACTERS[gameState.selectedCharacter]} ${getStage3JudgementLabel(stage3.feedback)} 표정`;
      stage3Elements.expression.dataset.judgement = stage3.feedback || "";
      stage3Elements.expression.style.opacity = "1";
    } else {
      stage3Elements.expression.dataset.judgement = "";
      stage3Elements.expression.style.opacity = "0";
    }
  }

  Object.entries(stage3Elements.input).forEach(([lane, element]) => {
    if (!element) return;
    element.dataset.active = stage3.inputFeedback[lane] > 0 ? "true" : "false";
  });

  updateStage3NoteElements();
  updateStage3EffectElements();
}

function updateStage3NoteElements() {
  const layer = stage3Elements.notesLayer;
  if (!layer) return;

  const noteElements = gameState.stage3.notes.map((note) => {
    const lane = stage3Rules.lanes[note.lane];
    const src = ASSETS.stage3[lane.asset];
    const x = getStage3NoteX(note);
    const img = makeImg(
      `stage3-note ${note.lane} ${note.judged ? `is-${note.judgement}` : ""}`,
      src,
      {
        x: x - stage3Rules.noteSize / 2,
        y: lane.y - stage3Rules.noteSize / 2,
        w: stage3Rules.noteSize,
        h: stage3Rules.noteSize,
      },
      `${lane.label} 노트`,
    );
    return img;
  });

  layer.replaceChildren(...noteElements);
}

function updateStage3EffectElements() {
  const layer = stage3Elements.effectsLayer;
  if (!layer) return;

  const effectElements = gameState.stage3.hitEffects.map((effect) => {
    const progress = 1 - effect.ttl / stage3Rules.hitEffectMs;
    const burst = makeDiv(
      `stage3-hit-burst ${effect.lane} is-${effect.judgement}`,
      getStage3JudgementLabel(effect.judgement),
      {
        x: effect.x - 104,
        y: effect.y - 62,
        w: 208,
        h: 124,
      },
    );
    burst.style.opacity = String(Math.max(0, 1 - progress * 0.95));
    burst.style.transform = `scale(${1 + progress * 0.42})`;
    return burst;
  });

  layer.replaceChildren(...effectElements);
}

function completeStage3() {
  const stage3 = gameState.stage3;
  if (stage3.isComplete) return;

  stage3.isComplete = true;
  stage3.remainingSeconds = 0;
  stage3.finalScore = saveStage3Score(stage3);
  stopStage3Audio(true);
  gameState.screen = "stage3End";
  render();
}

function renderStageEndScreen(stage) {
  const layer = makeDiv("stage-end-layer");
  hotspots.append(layer);

  const stageData = {
    stage1: {
      title: "Stage 1 종료",
      scoreLabel: `친화력 점수 ${gameState.stage1.finalScore?.stage1Score ?? getStoredNumber("stage1Score")} / 1000`,
      detail: `Raw Score ${gameState.stage1.finalScore?.stage1RawScore ?? getStoredNumber("stage1RawScore")} / 1050`,
      nextLabel: "다음으로",
      nextAction: () => goTo("stage2Intro"),
    },
    stage2: {
      title: "Stage 2 종료",
      scoreLabel: `지구력 점수 ${gameState.stage2.finalScore?.stage2Score ?? getStoredNumber("stage2Score")} / 1000`,
      detail: `${gameState.stage2.finalScore?.stage2SurvivalSeconds ?? getStoredNumber("stage2SurvivalSeconds")}초 버텼어요`,
      nextLabel: "다음으로",
      nextAction: () => goTo("stage3Intro"),
    },
    stage3: {
      title: "Stage 3 종료",
      scoreLabel: `응원가 점수 ${gameState.stage3.finalScore?.stage3Score ?? getStoredNumber("stage3Score")} / 1000`,
      detail: `최대 콤보 ${getStoredNumber("stage3MaxCombo")} · 정확도 ${gameState.stage3.finalScore?.stage3Accuracy ?? getStoredNumber("stage3Accuracy")}%`,
      nextLabel: "점수 확인",
      nextAction: () => goTo("result"),
    },
  }[stage];

  const panel = makeDiv("stage-end-panel", "", { x: 94, y: 520, w: 754, h: 390 });
  panel.innerHTML = `
    <strong>${stageData.title}</strong>
    <span>${stageData.scoreLabel}</span>
    <small>${stageData.detail}</small>
  `;

  const nextButton = makeDiv("stage-end-button", stageData.nextLabel, { x: 262, y: 952, w: 418, h: 98 });
  const nextHit = createPxButton(stageData.nextLabel, { x: 262, y: 952, w: 418, h: 98 }, stageData.nextAction);

  layer.append(panel, nextButton, nextHit);
}

function renderResultScreen() {
  const layer = makeDiv("stage-end-layer result-layer");
  hotspots.append(layer);

  const stage1Score = getStoredNumber("stage1Score");
  const stage2Score = getStoredNumber("stage2Score");
  const stage3Score = getStoredNumber("stage3Score");
  const totalScore = stage1Score + stage2Score + stage3Score;

  const panel = makeDiv("stage-end-panel result-panel", "", { x: 80, y: 456, w: 782, h: 520 });
  panel.innerHTML = `
    <strong>훈련 총점</strong>
    <span>${totalScore} / 3000</span>
    <small>친화력 ${stage1Score} · 지구력 ${stage2Score} · 응원가 ${stage3Score}</small>
    <em>훈련 결과 및 유형 화면은 다음 작업에서 확장할 수 있게 연결해뒀어요.</em>
  `;

  const homeButton = makeDiv("stage-end-button", "처음으로", { x: 262, y: 1020, w: 418, h: 98 });
  const homeHit = createPxButton("처음으로", { x: 262, y: 1020, w: 418, h: 98 }, () => goTo("home"));

  layer.append(panel, homeButton, homeHit);
}

function renderStage3Complete(layer) {
  const result = gameState.stage3.finalScore || saveStage3Score(gameState.stage3);
  gameState.stage3.finalScore = result;

  const panel = makeDiv("stage3-complete-panel", "", { x: 104, y: 514, w: 732, h: 360 });
  panel.innerHTML = `
    <strong>Stage 3 종료!</strong>
    <span>응원가 점수: ${result.stage3Score} / 1000</span>
    <small>최대 콤보 ${gameState.stage3.maxCombo} · 정확도 ${result.stage3Accuracy}%</small>
  `;

  const retry = makeDiv("stage3-complete-button secondary", "다시 도전", { x: 148, y: 798, w: 286, h: 86 });
  const next = makeDiv("stage3-complete-button", "결과 보기", { x: 506, y: 798, w: 286, h: 86 });
  const retryHit = createPxButton("스테이지3 다시 도전", { x: 148, y: 798, w: 286, h: 86 }, () => goTo("stage3Play"));
  const nextHit = createPxButton("결과 보기", { x: 506, y: 798, w: 286, h: 86 }, () => console.log("Result screen is not implemented yet."));

  layer.append(panel, retry, next, retryHit, nextHit);
}

function renderStage1() {
  const layer = makeDiv("stage1-layer");
  hotspots.append(layer);
  renderStage1Top(layer);

  if (gameState.stage1.phase === "conversation") {
    renderConversation(layer);
  } else if (gameState.stage1.phase === "memory") {
    renderMemory(layer);
  } else {
    renderComplete(layer);
  }

  if (gameState.stage1.feedback) {
    renderFeedbackPopup(layer, gameState.stage1.feedback.score);
  }
}

function renderStage1Top(layer) {
  const { phase, conversationRound, memoryRound, totalRawScore } = gameState.stage1;
  const left = makeDiv("stage1-top-box stage1-top-left");
  const right = makeDiv("stage1-top-box stage1-top-right");

  if (phase === "conversation") {
    const round = conversationRounds[conversationRound];
    left.innerHTML = `<span>${conversationRound + 1} / 4</span><strong>${round.title}</strong>`;
  } else if (phase === "memory") {
    left.innerHTML = `<span>기억 테스트</span><strong>${memoryRound + 1} / 3</strong>`;
  } else {
    left.innerHTML = `<span>Stage 1</span><strong>완료</strong>`;
  }

  right.innerHTML = `<span>현재 점수</span><strong>${totalRawScore}점</strong>`;
  layer.append(left, right);
}

function renderConversation(layer) {
  const roundIndex = gameState.stage1.conversationRound;
  const round = conversationRounds[roundIndex];

  renderConversationProgress(layer, roundIndex + 1);

  const dialogue = makeDiv("stage1-dialogue-text", round.juniorLine, { x: 430, y: 334, w: 420, h: 145 });
  layer.append(dialogue);

  renderChoices(layer, round.choices, "conversation", handleConversationChoice);
}

function renderConversationProgress(layer, currentRound) {
  const stepSize = 74;
  const stepY = 190;
  const lineY = 223;
  const iconRects = [231, 368, 505, 642].map((x) => ({ x, y: stepY, w: stepSize, h: stepSize }));
  const lineRects = [
    { x: 305, y: lineY, w: 63, h: 10 },
    { x: 442, y: lineY, w: 63, h: 10 },
    { x: 579, y: lineY, w: 63, h: 10 },
  ];

  lineRects.forEach((rect, index) => {
    const line = makeDiv(`stage1-progress-line ${index < currentRound - 1 ? "is-active" : ""}`, "", rect);
    layer.append(line);
  });

  iconRects.forEach((rect, index) => {
    const stepNumber = index + 1;
    const active = stepNumber <= currentRound;
    const current = stepNumber === currentRound;
    layer.append(
      makeDiv(
        `stage1-progress-step ${active ? "is-active" : "is-inactive"} ${current ? "is-current" : ""}`,
        String(stepNumber),
        rect,
      ),
    );
  });
}

function renderMemory(layer) {
  const quizIndex = gameState.stage1.memoryRound;
  const quiz = memoryQuizzes[quizIndex];

  renderMemoryProgress(layer, quizIndex + 1);

  if (gameState.selectedCharacter === "yeonhee") {
    layer.append(makeDiv("stage1-memory-prompt", "방금 대화 내용을\n기억하고 있나요?", { x: 145, y: 306, w: 650, h: 92 }));
  }

  layer.append(makeImg("stage1-question-box", ASSETS.stage1.questionBox, { x: 44, y: 1002, w: 854, h: 116 }));
  layer.append(makeDiv("stage1-question-text", `Q${quizIndex + 1}. ${quiz.question}`, { x: 74, y: 1020, w: 794, h: 78 }));

  renderChoices(
    layer,
    quiz.choices.map((text) => ({ text, score: 0 })),
    "memory",
    handleMemoryChoice,
  );
}

function renderMemoryProgress(layer, currentRound) {
  const stepSize = 74;
  const stepY = 190;
  const lineY = 223;
  const iconRects = [300, 434, 568].map((x) => ({ x, y: stepY, w: stepSize, h: stepSize }));
  const lineRects = [
    { x: 374, y: lineY, w: 60, h: 10 },
    { x: 508, y: lineY, w: 60, h: 10 },
  ];

  lineRects.forEach((rect, index) => {
    const line = makeDiv(`stage1-progress-line ${index < currentRound - 1 ? "is-active" : ""}`, "", rect);
    layer.append(line);
  });

  iconRects.forEach((rect, index) => {
    const stepNumber = index + 1;
    const active = stepNumber <= currentRound;
    const current = stepNumber === currentRound;
    layer.append(
      makeDiv(
        `stage1-progress-step ${active ? "is-active" : "is-inactive"} ${current ? "is-current" : ""}`,
        String(stepNumber),
        rect,
      ),
    );
  });
}

function renderChoices(layer, choices, type, onSelect) {
  const yPositions = type === "memory" ? [1138, 1268, 1398, 1528] : [1062, 1198, 1334, 1470];
  const selected = gameState.stage1.selectedChoiceIndex;
  const feedback = gameState.stage1.feedback;

  choices.forEach((choice, index) => {
    const rect = { x: 44, y: yPositions[index], w: 854, h: index < 2 ? 120 : 119 };
    let src = ASSETS.stage1.choice[index];

    if (selected === index && gameState.stage1.isTransitioning) {
      if (type === "memory") {
        src = feedback?.correct ? ASSETS.stage1.choiceCorrect[index] : ASSETS.stage1.choiceWrong[index];
      } else {
        src = ASSETS.stage1.choicePressed[index];
      }
    }

    layer.append(makeImg(`stage1-choice-box ${type}`, src, rect));
    layer.append(makeDiv(`stage1-choice-text ${type}`, choice.text, { x: 170, y: rect.y + 12, w: 680, h: 96 }));

    const button = createPxButton(`${index + 1}번 선택지`, rect, () => onSelect(index));
    button.disabled = gameState.stage1.isTransitioning;
    layer.append(button);
  });
}

function renderFeedbackPopup(layer, score) {
  const { juniorCharacter } = getRoles();
  const expressionSrc = ASSETS.expressions[juniorCharacter]?.[score];
  const scoreSrc = ASSETS.stage1.scorePopup[score];
  const scoreSize = scorePopupSizes[score];
  if (!expressionSrc || !scoreSrc || !scoreSize) return;

  const isMemory = gameState.stage1.phase === "memory";
  const expressionSize = { w: 118, h: 142 };
  const gap = 18;
  const totalWidth = scoreSize.w + gap + expressionSize.w;
  const scoreX = Math.round((SCENE.width - totalWidth) / 2);
  const scoreY = isMemory ? 866 : 922;
  const expressionX = scoreX + scoreSize.w + gap;
  const expressionY = scoreY - 24;

  const popup = makeImg("stage1-score-popup", scoreSrc, {
    x: scoreX,
    y: scoreY,
    w: scoreSize.w,
    h: scoreSize.h,
  });
  const expression = makeImg("stage1-junior-expression", expressionSrc, {
    x: expressionX,
    y: expressionY,
    w: expressionSize.w,
    h: expressionSize.h,
  }, "상대 캐릭터 표정");

  layer.append(popup, expression);
}

function renderComplete(layer) {
  const result = gameState.stage1.finalScore || saveStage1Score(gameState.stage1);
  gameState.stage1.finalScore = result;

  const panel = makeDiv("stage1-complete-panel", "", { x: 78, y: 1048, w: 785, h: 290 });
  panel.innerHTML = `
    <strong>Stage 1 완료!</strong>
    <span>친화력 점수: ${result.stage1Score} / 1000</span>
    <small>Raw Score: ${result.stage1RawScore} / 1050</small>
  `;

  const button = makeImg("stage1-next-button-image", ASSETS.stage1.nextButton, { x: 196, y: 1408, w: 548, h: 153 });
  const buttonText = makeDiv("stage1-next-button-text", "다음 스테이지로", { x: 196, y: 1448, w: 548, h: 72 });
  const hit = createPxButton("다음 스테이지로", { x: 196, y: 1408, w: 548, h: 153 }, () => goTo("stage2Intro"));

  layer.append(panel, button, buttonText, hit);
}

function handleConversationChoice(choiceIndex) {
  const stage1 = gameState.stage1;
  if (stage1.isTransitioning || stage1.phase !== "conversation") return;

  const score = conversationRounds[stage1.conversationRound].choices[choiceIndex].score;
  stage1.selectedChoiceIndex = choiceIndex;
  stage1.isTransitioning = true;
  stage1.feedback = { score, correct: score === 150 };
  stage1.conversationScore += score;
  stage1.totalRawScore += score;
  render();

  window.setTimeout(() => {
    if (stage1.conversationRound < conversationRounds.length - 1) {
      stage1.conversationRound += 1;
    } else {
      stage1.phase = "memory";
      stage1.memoryRound = 0;
    }

    stage1.selectedChoiceIndex = null;
    stage1.isTransitioning = false;
    stage1.feedback = null;
    render();
  }, feedbackDelay);
}

function handleMemoryChoice(choiceIndex) {
  const stage1 = gameState.stage1;
  if (stage1.isTransitioning || stage1.phase !== "memory") return;

  const quiz = memoryQuizzes[stage1.memoryRound];
  const correct = choiceIndex === quiz.answerIndex;
  const score = correct ? 150 : 0;

  stage1.selectedChoiceIndex = choiceIndex;
  stage1.isTransitioning = true;
  stage1.feedback = { score, correct };
  stage1.memoryScore += score;
  stage1.totalRawScore += score;
  render();

  window.setTimeout(() => {
    let nextScreen = null;

    if (stage1.memoryRound < memoryQuizzes.length - 1) {
      stage1.memoryRound += 1;
    } else {
      stage1.phase = "complete";
      stage1.finalScore = saveStage1Score(stage1);
      nextScreen = "stage1End";
    }

    stage1.selectedChoiceIndex = null;
    stage1.isTransitioning = false;
    stage1.feedback = null;

    if (nextScreen) {
      goTo(nextScreen);
    } else {
      render();
    }
  }, feedbackDelay);
}

function selectCharacter(character) {
  if (!ASSETS.character[character]) {
    return;
  }

  gameState.selectedCharacter = character;
  saveSelectedCharacter(character);
  render();
}

function startStage3Audio() {
  const stage3 = gameState.stage3;
  stage3.audioSync = false;
  stage3.audioStarted = false;

  if (!stage3Audio) return;

  stopMenuBgm();
  stage3Audio.pause();
  stage3Audio.currentTime = 0;
  stage3Audio.volume = 0.34;
  const playPromise = stage3Audio.play();
  stage3.audioStarted = true;

  if (playPromise && typeof playPromise.then === "function") {
    playPromise
      .then(() => {
        stage3.audioSync = true;
      })
      .catch(() => {
        stage3.audioSync = false;
      });
  } else {
    stage3.audioSync = true;
  }
}

function stopStage3Audio(reset = false) {
  if (!stage3Audio) return;
  stage3Audio.pause();
  if (reset) {
    stage3Audio.currentTime = 0;
  }
}

function shouldPlayMenuBgm(screen = gameState.screen) {
  return screen !== "stage3Play";
}

function startMenuBgm() {
  if (!menuBgmAudio || !audioGestureReady || !shouldPlayMenuBgm()) return;
  menuBgmAudio.volume = 0.14;
  const playPromise = menuBgmAudio.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // The next user gesture will try again.
    });
  }
}

function stopMenuBgm() {
  if (!menuBgmAudio) return;
  menuBgmAudio.pause();
}

function syncScreenAudio() {
  if (shouldPlayMenuBgm()) {
    stopStage3Audio(false);
    startMenuBgm();
  } else {
    stopMenuBgm();
  }
}

function markAudioGestureReady() {
  audioGestureReady = true;
  syncScreenAudio();
}

function getStoredNumber(key) {
  try {
    const value = Number(localStorage.getItem(key));
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function goTo(screen) {
  const previousScreen = gameState.screen;

  if (previousScreen === "stage3Play" && screen !== "stage3Play") {
    stopStage3Audio(true);
  }

  gameState.screen = screen;

  if (screen === "stage1") {
    gameState.stage1 = createStage1State();
  }

  if (screen === "stage2Entry") {
    gameState.stage2 = createStage2State();
    clearStage2Input();
  } else if (screen === "stage3Play") {
    gameState.stage3 = createStage3State();
    clearStage2Input();
    startStage3Audio();
  } else {
    clearStage2Input();
  }

  render();
  syncScreenAudio();
}

function setStage2Input(side, active) {
  if (gameState.stage2.isGameOver) {
    stage2Input[side] = false;
    updateStage2Direction();
    return;
  }

  stage2Input[side] = active;
  updateStage2Direction();
}

function clearStage2Input() {
  stage2Input.left = false;
  stage2Input.right = false;
  updateStage2Direction();
}

function updateStage2Direction() {
  if (!gameState.stage2) return;
  gameState.stage2.direction = (stage2Input.right ? 1 : 0) - (stage2Input.left ? 1 : 0);
  if (gameState.stage2.direction !== 0) {
    gameState.stage2.facingDirection = gameState.stage2.direction;
  }
}

function getStage2DifficultyLevel() {
  const stage2 = gameState.stage2;
  if (stage2.survivalMs < stage2Rules.difficultyStartMs) {
    return 1;
  }

  return Math.floor((stage2.survivalMs - stage2Rules.difficultyStartMs) / stage2Rules.difficultyStepMs) + 2;
}

function getStage2DifficultyRamp() {
  return Math.max(0, gameState.stage2.difficultyLevel - 1);
}

function getStage2SpawnInterval() {
  return Math.max(
    stage2Rules.minSpawnMs,
    stage2Rules.baseSpawnMs - getStage2DifficultyRamp() * stage2Rules.spawnStepMs,
  );
}

function getStage2FallSpeed() {
  return stage2Rules.baseFallSpeed + getStage2DifficultyRamp() * stage2Rules.fallSpeedStep;
}

function getStage2ExpectedSunsPerWater() {
  return Math.min(
    stage2Rules.hardSunsPerWater,
    stage2Rules.easySunsPerWater + getStage2DifficultyRamp(),
  );
}

function getStage2WaterChance() {
  return 1 / (getStage2ExpectedSunsPerWater() + 1);
}

function getRandomRange(min, max) {
  return min + Math.random() * (max - min);
}

function spawnStage2Object(forcedType, forcedX, options = {}) {
  const stage2 = gameState.stage2;
  if (stage2.isGameOver) return null;

  const type = forcedType === "water" || forcedType === "sun"
    ? forcedType
    : Math.random() < getStage2WaterChance() ? "water" : "sun";
  const spec = stage2ObjectSpecs[type];
  const x = Number.isFinite(forcedX)
    ? Math.max(stage2Rules.fallMinX, Math.min(stage2Rules.fallMaxX, forcedX))
    : getRandomRange(stage2Rules.fallMinX, stage2Rules.fallMaxX);
  const speedJitter = getRandomRange(0.9, 1.16);
  const rotationSpeed = type === "sun" ? getRandomRange(-14, 14) : getRandomRange(-7, 7);
  const object = {
    id: stage2.nextObjectId,
    type,
    x,
    y: options.y ?? stage2Rules.fallStartY,
    w: spec.w,
    h: spec.h,
    speed: getStage2FallSpeed() * speedJitter * (options.speedMultiplier ?? 1),
    rotation: getRandomRange(-5, 5),
    rotationSpeed,
  };

  stage2.nextObjectId += 1;
  stage2.fallingObjects.push(object);
  updateStage2ObjectElements();
  return object;
}

function spawnStage2SunAt(x, index = 0) {
  return spawnStage2Object("sun", x, {
    y: stage2Rules.fallStartY - index * 54,
    speedMultiplier: 1 + index * 0.045,
  });
}

function spawnStage2SunPattern() {
  const stage2 = gameState.stage2;
  const ramp = getStage2DifficultyRamp();
  const roll = Math.random();
  const center = getRandomRange(stage2Rules.fallMinX + 120, stage2Rules.fallMaxX - 120);

  if (stage2.survivalMs < stage2Rules.difficultyStartMs) {
    spawnStage2Object("sun");
    return;
  }

  if (ramp >= 4 && roll < 0.22) {
    const gapCenter = getRandomRange(stage2Rules.fallMinX + 190, stage2Rules.fallMaxX - 190);
    [-260, -130, 130, 260].forEach((offset, index) => {
      spawnStage2SunAt(gapCenter + offset, index);
    });
    return;
  }

  if (ramp >= 2 && roll < 0.52) {
    [-170, 0, 170].forEach((offset, index) => {
      spawnStage2SunAt(center + offset, index);
    });
    return;
  }

  if (roll < 0.82) {
    const spacing = getRandomRange(120, 165);
    [-spacing, spacing].forEach((offset, index) => {
      spawnStage2SunAt(center + offset, index);
    });
    return;
  }

  spawnStage2Object("sun");
}

function spawnStage2Wave() {
  if (Math.random() < getStage2WaterChance()) {
    spawnStage2Object("water");
    return;
  }

  spawnStage2SunPattern();
}

function getStage2PlayerHitbox() {
  const rect = getStage2PlayerRect();

  return {
    x: rect.x + rect.w * 0.24,
    y: rect.y + rect.h * 0.21,
    w: rect.w * 0.52,
    h: rect.h * 0.65,
  };
}

function getStage2ObjectHitbox(object) {
  const left = object.x - object.w / 2;
  const shrinkX = object.type === "water" ? object.w * 0.2 : object.w * 0.16;
  const shrinkY = object.type === "water" ? object.h * 0.1 : object.h * 0.16;

  return {
    x: left + shrinkX,
    y: object.y + shrinkY,
    w: object.w - shrinkX * 2,
    h: object.h - shrinkY * 2,
  };
}

function doRectsIntersect(a, b) {
  return (
    a.x < b.x + b.w
    && a.x + a.w > b.x
    && a.y < b.y + b.h
    && a.y + a.h > b.y
  );
}

function adjustStage2Stamina(delta) {
  const stage2 = gameState.stage2;
  if (stage2.isGameOver) return;

  const wasTired = isStage2Tired();
  const nextStamina = Math.max(0, Math.min(stage2Rules.maxStamina, stage2.stamina + delta));
  stage2.stamina = nextStamina;
  syncStage2TiredTransition(wasTired);

  if (stage2.stamina <= 0) {
    finishStage2();
  }

  updateStage2PlayerElement();
  updateStage2HudElements();
}

function addStage2FeedbackEffect(type, x, y) {
  const label = type === "water" ? "체력 회복" : "체력 감소";
  gameState.stage2.feedbackEffects.push({
    id: `${Date.now()}-${Math.random()}`,
    type,
    label,
    x,
    y,
    ttl: 760,
  });
  updateStage2FeedbackElements();
}

function applyStage2ObjectEffect(object) {
  if (object.type === "water") {
    adjustStage2Stamina(stage2Rules.waterHeal);
  } else {
    adjustStage2Stamina(-stage2Rules.sunDamage);
  }

  addStage2FeedbackEffect(object.type, object.x, object.y + object.h * 0.32);
}

function updateStage2FallingObjects(deltaMs) {
  const stage2 = gameState.stage2;
  if (stage2.isGameOver) return;

  stage2.difficultyLevel = getStage2DifficultyLevel();
  stage2.spawnElapsed += deltaMs;

  const spawnInterval = getStage2SpawnInterval();
  while (stage2.spawnElapsed >= spawnInterval) {
    stage2.spawnElapsed -= spawnInterval;
    spawnStage2Wave();
  }

  const playerHitbox = getStage2PlayerHitbox();
  const remainingObjects = [];

  stage2.fallingObjects.forEach((object) => {
    object.y += object.speed * (deltaMs / 1000);
    object.rotation += object.rotationSpeed * (deltaMs / 1000);

    if (doRectsIntersect(playerHitbox, getStage2ObjectHitbox(object))) {
      applyStage2ObjectEffect(object);
      return;
    }

    if (object.y < stage2Rules.fallEndY) {
      remainingObjects.push(object);
    }
  });

  stage2.fallingObjects = remainingObjects;
  updateStage2ObjectElements();
}

function updateStage2FeedbackEffects(deltaMs) {
  const stage2 = gameState.stage2;
  stage2.feedbackEffects = stage2.feedbackEffects
    .map((effect) => ({ ...effect, ttl: effect.ttl - deltaMs, y: effect.y - deltaMs * 0.055 }))
    .filter((effect) => effect.ttl > 0);
  updateStage2FeedbackElements();
}

function updateStage2ObjectElements() {
  const layer = stage2Elements.objectsLayer;
  if (!layer) return;

  const objects = gameState.stage2.fallingObjects.map((object) => {
    const src = object.type === "water" ? ASSETS.stage2.waterBottle : ASSETS.stage2.sun;
    const img = makeImg(
      `stage2-falling-object ${object.type}`,
      src,
      {
        x: object.x - object.w / 2,
        y: object.y,
        w: object.w,
        h: object.h,
      },
      object.type === "water" ? "떨어지는 물병" : "떨어지는 햇빛",
    );
    img.style.transform = `rotate(${object.rotation}deg)`;
    return img;
  });

  layer.replaceChildren(...objects);
}

function updateStage2FeedbackElements() {
  const layer = stage2Elements.effectsLayer;
  if (!layer) return;

  const effects = gameState.stage2.feedbackEffects.map((effect) => {
    const src = effect.type === "water" ? ASSETS.stage2.healEffect : ASSETS.stage2.damageEffect;
    const spec = stage2EffectSpecs[effect.type];
    const effectElement = makeImg(
      `stage2-feedback-effect ${effect.type}`,
      src,
      {
        x: effect.x - spec.w / 2,
        y: effect.y - spec.h / 2,
        w: spec.w,
        h: spec.h,
      },
      effect.label,
    );
    effectElement.setAttribute("aria-label", effect.label);
    return effectElement;
  });

  layer.replaceChildren(...effects);
}

function finishStage2() {
  const stage2 = gameState.stage2;
  if (stage2.isGameOver) return;

  stage2.isGameOver = true;
  stage2.finalSurvivalMinutes = stage2.survivalMinutes;
  stage2.stamina = 0;
  clearStage2Input();

  try {
    localStorage.setItem("stage2SurvivalMs", String(stage2.survivalMs));
    localStorage.setItem("stage2SurvivalMinutes", String(stage2.finalSurvivalMinutes));
  } catch {
    // Runtime state still keeps the result if localStorage is unavailable.
  }

  stage2.finalScore = saveStage2Score(stage2);
  gameState.screen = "stage2End";
  render();
}

function renderStage2GameOver(layer) {
  const minutes = gameState.stage2.finalSurvivalMinutes ?? gameState.stage2.survivalMinutes;
  const result = gameState.stage2.finalScore || saveStage2Score(gameState.stage2);
  gameState.stage2.finalScore = result;

  const panel = makeDiv("stage2-game-over-panel", "", { x: 104, y: 486, w: 732, h: 382 });
  panel.innerHTML = `
    <strong>훈련 종료</strong>
    <span>${minutes}분 버텼어요</span>
    <small>지구력 점수: ${result.stage2Score} / 1000</small>
  `;

  const retry = makeDiv("stage2-game-over-button secondary", "다시 도전", { x: 148, y: 790, w: 286, h: 86 });
  const next = makeDiv("stage2-game-over-button", "다음 훈련", { x: 506, y: 790, w: 286, h: 86 });
  const retryHit = createPxButton("스테이지2 다시 도전", { x: 148, y: 790, w: 286, h: 86 }, () => goTo("stage2Entry"));
  const nextHit = createPxButton("스테이지3로 이동", { x: 506, y: 790, w: 286, h: 86 }, () => goTo("stage3Intro"));

  layer.append(panel, retry, next, retryHit, nextHit);
}

function updateStage2PlayerElement() {
  if (!stage2Elements.player) return;
  const rect = getStage2PlayerRect();
  stage2Elements.player.style.left = `${rect.x}px`;
  stage2Elements.player.style.top = `${rect.y}px`;
  stage2Elements.player.style.width = `${rect.w}px`;
  stage2Elements.player.style.height = `${rect.h}px`;
  const frameSrc = getStage2FrameSrc();
  if (stage2Elements.player.getAttribute("src") !== frameSrc) {
    stage2Elements.player.src = frameSrc;
  }
  stage2Elements.player.style.transform = isStage2Tired()
    ? `scaleX(${getStage2TiredFacingScale()})`
    : "";
  stage2Elements.player.alt = getStage2PlayerLabel();
}

function updateStage2HudElements() {
  const stage2 = gameState.stage2;
  const staminaRatio = Math.max(0, Math.min(1, stage2.stamina / stage2Rules.maxStamina));
  const staminaText = String(Math.round(stage2.stamina));
  const timeText = String(stage2.survivalMinutes);
  const tired = isStage2Tired();

  gameScreen.dataset.stage2Status = tired ? "tired" : "normal";

  if (stage2Elements.timeTop) {
    stage2Elements.timeTop.textContent = timeText;
  }

  if (stage2Elements.timeBottom) {
    stage2Elements.timeBottom.textContent = timeText;
  }

  if (stage2Elements.staminaNumber) {
    stage2Elements.staminaNumber.textContent = staminaText;
  }

  if (stage2Elements.staminaFill) {
    stage2Elements.staminaFill.style.setProperty("--health-scale", String(staminaRatio));
    stage2Elements.staminaFill.setAttribute("aria-label", `체력 ${staminaText} / ${stage2Rules.maxStamina}`);
  }
}

function updateStage2Meters(deltaMs) {
  const stage2 = gameState.stage2;
  if (stage2.isGameOver) return;

  const wasTired = isStage2Tired();

  stage2.survivalMs += deltaMs;
  stage2.survivalMinutes = Math.floor(stage2.survivalMs / stage2Rules.minuteMs);
  stage2.difficultyLevel = getStage2DifficultyLevel();

  if (stage2.stamina > 0) {
    stage2.staminaDrainElapsed += deltaMs;
    let drainAmount = 0;

    while (stage2.staminaDrainElapsed >= stage2Rules.staminaDrainMs && stage2.stamina > 0) {
      stage2.staminaDrainElapsed -= stage2Rules.staminaDrainMs;
      drainAmount += 1;
    }

    if (drainAmount > 0) {
      adjustStage2Stamina(-drainAmount);
    }
  }

  if (stage2.stamina <= 0) {
    finishStage2();
    return;
  }

  syncStage2TiredTransition(wasTired);
  updateStage2HudElements();
}

function syncStage2TiredTransition(wasTired) {
  const stage2 = gameState.stage2;
  const tired = isStage2Tired();

  if (tired !== wasTired || tired !== stage2.wasTired) {
    stage2.wasTired = tired;
    stage2.frameIndex = 0;
    stage2.frameElapsed = 0;
  }
}

function getStage2MoveSpeed() {
  return isStage2Tired() ? stage2Player.tiredSpeed : stage2Player.speed;
}

function tickStage2(now) {
  const stage2 = gameState.stage2;

  if (gameState.screen === "stage2Entry") {
    if (!stage2.lastTickAt) {
      stage2.lastTickAt = now;
    }

    const deltaMs = Math.min(now - stage2.lastTickAt, 48);
    stage2.lastTickAt = now;

    if (!stage2.isGameOver) {
      updateStage2Meters(deltaMs);

      if (!stage2.isGameOver) {
        if (stage2.direction !== 0) {
          const nextX = stage2.playerX + stage2.direction * getStage2MoveSpeed() * (deltaMs / 1000);
          stage2.playerX = Math.max(stage2Player.minX, Math.min(stage2Player.maxX, nextX));
          stage2.frameElapsed += deltaMs;

          while (stage2.frameElapsed >= stage2Player.frameMs) {
            stage2.frameElapsed -= stage2Player.frameMs;
            stage2.frameIndex = (stage2.frameIndex + 1) % getStage2MoveFrames().length;
          }
        } else {
          stage2.frameIndex = 0;
          stage2.frameElapsed = 0;
        }

        updateStage2FallingObjects(deltaMs);
      }
    }

    updateStage2FeedbackEffects(deltaMs);
    updateStage2PlayerElement();
    updateStage2ObjectElements();
    updateStage2HudElements();
  } else {
    stage2.lastTickAt = 0;
    stage2Elements.player = null;
    stage2Elements.objectsLayer = null;
    stage2Elements.effectsLayer = null;
    stage2Elements.timeTop = null;
    stage2Elements.timeBottom = null;
    stage2Elements.staminaNumber = null;
    stage2Elements.staminaFill = null;
  }

  tickStage3(now);
  window.requestAnimationFrame(tickStage2);
}

function tickStage3(now) {
  const stage3 = gameState.stage3;

  if (gameState.screen === "stage3Play") {
    if (!stage3.lastTickAt) {
      stage3.lastTickAt = now;
    }

    const frameDeltaMs = Math.min(now - stage3.lastTickAt, 48);
    let deltaMs = frameDeltaMs;
    stage3.lastTickAt = now;

    if (!stage3.isComplete) {
      if (stage3.audioSync && stage3Audio && !stage3Audio.paused) {
        const audioElapsedMs = Math.min(stage3Rules.durationMs, stage3Audio.currentTime * 1000);
        deltaMs = Math.max(0, audioElapsedMs - stage3.elapsedMs);
        stage3.elapsedMs = audioElapsedMs;
      } else {
        stage3.elapsedMs = Math.min(stage3Rules.durationMs, stage3.elapsedMs + deltaMs);
      }

      stage3.remainingSeconds = Math.ceil((stage3Rules.durationMs - stage3.elapsedMs) / 1000);
      spawnStage3Notes();
      updateStage3Misses();
      updateStage3TimedEffects(deltaMs);

      if (stage3.feedbackTtl > 0) {
        stage3.feedbackTtl = Math.max(0, stage3.feedbackTtl - deltaMs);
        if (stage3.feedbackTtl === 0) {
          stage3.feedback = null;
        }
      }

      if (stage3.elapsedMs >= stage3Rules.durationMs) {
        completeStage3();
        return;
      }
    }

    updateStage3Elements();
  } else {
    stage3.lastTickAt = 0;
    stage3Elements.notesLayer = null;
    stage3Elements.effectsLayer = null;
    stage3Elements.time = null;
    stage3Elements.score = null;
    stage3Elements.caption = null;
    stage3Elements.combo = null;
    stage3Elements.feedback = null;
    stage3Elements.expression = null;
    stage3Elements.input.clap = null;
    stage3Elements.input.chant = null;
  }
}

function handleStage2KeyDown(event) {
  if (gameState.screen === "stage3Play") {
    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      event.preventDefault();
      handleStage3Input("clap");
    } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "l") {
      event.preventDefault();
      handleStage3Input("chant");
    }
    return;
  }

  if (gameState.screen !== "stage2Entry") return;
  if (gameState.stage2.isGameOver) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setStage2Input("left", true);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    setStage2Input("right", true);
  }
}

function handleStage2KeyUp(event) {
  if (event.key === "ArrowLeft") {
    setStage2Input("left", false);
  } else if (event.key === "ArrowRight") {
    setStage2Input("right", false);
  }
}

function setStage2Tired(isTired) {
  gameState.stage2.isTired = Boolean(isTired);
  gameState.stage2.wasTired = isStage2Tired();
  gameState.stage2.frameIndex = 0;
  gameState.stage2.frameElapsed = 0;
  updateStage2PlayerElement();
  updateStage2HudElements();
}

function setStage2Stamina(stamina) {
  const nextStamina = Number(stamina);
  if (!Number.isFinite(nextStamina)) return;
  const wasTired = isStage2Tired();
  gameState.stage2.stamina = Math.max(0, Math.min(stage2Rules.maxStamina, nextStamina));
  gameState.stage2.frameIndex = 0;
  gameState.stage2.frameElapsed = 0;
  syncStage2TiredTransition(wasTired);

  if (gameState.stage2.stamina <= 0) {
    finishStage2();
    return;
  }

  updateStage2PlayerElement();
  updateStage2HudElements();
}

function updateScale() {
  const scale = Math.min(window.innerWidth / SCENE.width, window.innerHeight / SCENE.height, 1);
  document.documentElement.style.setProperty("--game-scale", String(scale));
}

window.addEventListener("resize", updateScale);
window.addEventListener("orientationchange", updateScale);
window.addEventListener("pointerdown", markAudioGestureReady, { capture: true });
window.addEventListener("touchstart", markAudioGestureReady, { capture: true });
window.addEventListener("keydown", markAudioGestureReady, { capture: true });
window.addEventListener("keydown", handleStage2KeyDown);
window.addEventListener("keyup", handleStage2KeyUp);

window.AkarakaGame = {
  getState: () => ({
    screen: gameState.screen,
    selectedCharacter: gameState.selectedCharacter,
    stage1: { ...gameState.stage1 },
    stage2: { ...gameState.stage2 },
    stage3: { ...gameState.stage3 },
    roles: getRoles(),
  }),
  goTo,
  selectCharacter,
  setStage2Stamina,
  setStage2Tired,
  spawnStage2Object,
  handleStage3Input,
};

updateScale();
render();
window.requestAnimationFrame(tickStage2);
