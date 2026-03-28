const steps = [
  { label: "Cau hinh", description: "Brief, audience, duration" },
  { label: "Kich ban", description: "Narration draft" },
  { label: "Nhan vat", description: "Character lock" },
  { label: "Phan canh", description: "Scene planning" },
  { label: "Prompts", description: "Visual and voice pack" },
  { label: "Xuat ban", description: "Delivery brief" },
];

const durationSecondsMap = {
  "30s": 30,
  "45s": 45,
  "60s": 60,
  "90s": 90,
  "120s": 120,
};

const durationSceneCountMap = {
  "30s": 4,
  "45s": 5,
  "60s": 6,
  "90s": 8,
  "120s": 10,
};

const characterPresets = [
  {
    id: "teacher",
    name: "Thay co truyen cam hung",
    role: "nguoi huong dan giao duc",
    appearance: "ngoai hinh thanh lich, than thai dien dam, anh mat am ap va tap trung",
    outfit: "ao so mi sang mau, blazer toi gian, tai lieu hoc tap tren tay",
    personality: "am ap, ro rang, tao niem tin",
    voiceStyle: "dien dam, huong dan, de nghe",
    summary: "Phu hop video bai giang ngan, tong hop kien thuc va motivator cho hoc sinh.",
  },
  {
    id: "student",
    name: "Hoc sinh vuot kho",
    role: "hoc sinh dang no luc thay doi",
    appearance: "guong mat tre, mat sang, dieu bo co chut hoi hop nhung kien dinh",
    outfit: "dong phuc hoc sinh gon gang, ba lo, sach vo va but ghi chu",
    personality: "cham chi, kien tri, de dong cam",
    voiceStyle: "chan that, gan gui, tao dong luc",
    summary: "Tot cho storytelling hanh trinh hoc tap, ky luat va dat muc tieu.",
  },
  {
    id: "mentor",
    name: "Nguoi co van",
    role: "mentor dong hanh",
    appearance: "trung nien, net mat thong thai, nhin chuyen nghiep va tin cay",
    outfit: "ao polo toi gian, dong ho, bang ghi chu hoac tablet",
    personality: "binh tinh, logic, truyen lua",
    voiceStyle: "diem tinh, thong thai, co suc nang do",
    summary: "Hop voi video dinh huong, ky nang song, ren ky luat hoc tap.",
  },
  {
    id: "mc",
    name: "MC giao duc",
    role: "nguoi dan chuong trinh",
    appearance: "tre trung, bieu cam ro, guong mat sang san va gan ong kinh",
    outfit: "ao khoac smart-casual, tone mau hien dai, tai nghe mini",
    personality: "nhiet huyet, nhanh gon, cuon hut",
    voiceStyle: "nang luong, nhip nhanh, ro tung cum y",
    summary: "Tot cho short-form, video mang tinh lan truyen, tong hop thong tin nhanh.",
  },
];

const projectPresets = {
  story: {
    topic:
      "Hanh trinh hoc tap cham chi cua mot ban hoc sinh gap kho khan nhung van kien tri va dat thanh cong, truyen cam hung cho hoc sinh THPT.",
    audience: "THPT",
    duration: "60s",
    objective: "Tao dong luc hoc tap va ren ky luat ban than",
    tone: "Truyen cam hung",
    visualStyle: "Cinematic 3D",
    voice: "Giong nam mien Bac",
  },
  lesson: {
    topic:
      "Tom tat mot bai hoc ngan gon, ro rang, de nho, co vi du thuc te va ket thuc bang 3 y chinh can nho.",
    audience: "THCS",
    duration: "45s",
    objective: "Giup hoc sinh nam nhanh y chinh",
    tone: "Nghiem tuc, hoc thuat",
    visualStyle: "Motion graphics infographic",
    voice: "Giong nu mien Bac",
  },
  cta: {
    topic:
      "Video keu goi hoc sinh bat dau hanh dong nho ngay hom nay de cai thien ket qua hoc tap trong 30 ngay toi.",
    audience: "THPT",
    duration: "30s",
    objective: "Keu goi hanh dong ngay lap tuc",
    tone: "Day nang luong",
    visualStyle: "Anime truyen cam hung",
    voice: "Tre trung, nhanh gon",
  },
};

const storageKey = "edu-video-factory-state-v1";

const defaultState = {
  currentStep: 0,
  savedAt: null,
  project: {
    apiKey: "",
    topic: "",
    audience: "THPT",
    duration: "30s",
    voice: "Giong nam mien Bac",
    objective: "",
    visualStyle: "Cinematic 3D",
    tone: "Truyen cam hung",
  },
  script: {
    title: "",
    content: "",
  },
  character: {
    presetId: "teacher",
    name: "",
    role: "",
    appearance: "",
    outfit: "",
    personality: "",
    voiceStyle: "",
  },
  scenes: [],
  prompts: [],
};

let state = loadState();
let saveTimer = null;

const elements = {
  saveBadge: document.getElementById("saveBadge"),
  stepper: document.getElementById("stepper"),
  heroHeadline: document.getElementById("heroHeadline"),
  heroDescription: document.getElementById("heroDescription"),
  heroAudience: document.getElementById("heroAudience"),
  heroDuration: document.getElementById("heroDuration"),
  heroScenes: document.getElementById("heroScenes"),
  panels: Array.from(document.querySelectorAll(".step-panel")),
  dockStatus: document.getElementById("dockStatus"),
  prevStepButton: document.getElementById("prevStepButton"),
  nextStepButton: document.getElementById("nextStepButton"),
  topicInput: document.getElementById("topicInput"),
  audienceInput: document.getElementById("audienceInput"),
  durationInput: document.getElementById("durationInput"),
  objectiveInput: document.getElementById("objectiveInput"),
  toneInput: document.getElementById("toneInput"),
  voiceInput: document.getElementById("voiceInput"),
  visualStyleInput: document.getElementById("visualStyleInput"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  scriptTitleInput: document.getElementById("scriptTitleInput"),
  scriptContentInput: document.getElementById("scriptContentInput"),
  scriptOutline: document.getElementById("scriptOutline"),
  characterPresetGrid: document.getElementById("characterPresetGrid"),
  characterNameInput: document.getElementById("characterNameInput"),
  characterRoleInput: document.getElementById("characterRoleInput"),
  characterAppearanceInput: document.getElementById("characterAppearanceInput"),
  characterOutfitInput: document.getElementById("characterOutfitInput"),
  characterPersonalityInput: document.getElementById("characterPersonalityInput"),
  characterVoiceStyleInput: document.getElementById("characterVoiceStyleInput"),
  characterPromptPreview: document.getElementById("characterPromptPreview"),
  sceneStats: document.getElementById("sceneStats"),
  sceneList: document.getElementById("sceneList"),
  masterPromptPreview: document.getElementById("masterPromptPreview"),
  promptList: document.getElementById("promptList"),
  readinessBar: document.getElementById("readinessBar"),
  readinessCopy: document.getElementById("readinessCopy"),
  readinessChecklist: document.getElementById("readinessChecklist"),
  publishPreview: document.getElementById("publishPreview"),
  toastRack: document.getElementById("toastRack"),
};

wireStaticInputs();
wireActions();
renderAll({ syncInputs: true });

function wireStaticInputs() {
  bindTextInput(elements.apiKeyInput, ["project", "apiKey"]);
  bindTextInput(elements.topicInput, ["project", "topic"]);
  bindSelectInput(elements.audienceInput, ["project", "audience"]);
  bindSelectInput(elements.durationInput, ["project", "duration"], () => {
    renderSceneStats();
    renderPublishPanel();
  });
  bindTextInput(elements.objectiveInput, ["project", "objective"]);
  bindSelectInput(elements.toneInput, ["project", "tone"]);
  bindSelectInput(elements.voiceInput, ["project", "voice"]);
  bindSelectInput(elements.visualStyleInput, ["project", "visualStyle"]);
  bindTextInput(elements.scriptTitleInput, ["script", "title"]);
  bindTextInput(elements.scriptContentInput, ["script", "content"], renderScriptOutline);
  bindTextInput(elements.characterNameInput, ["character", "name"], renderCharacterPreviews);
  bindTextInput(elements.characterRoleInput, ["character", "role"], renderCharacterPreviews);
  bindTextInput(
    elements.characterAppearanceInput,
    ["character", "appearance"],
    renderCharacterPreviews
  );
  bindTextInput(elements.characterOutfitInput, ["character", "outfit"], renderCharacterPreviews);
  bindTextInput(
    elements.characterPersonalityInput,
    ["character", "personality"],
    renderCharacterPreviews
  );
  bindTextInput(
    elements.characterVoiceStyleInput,
    ["character", "voiceStyle"],
    renderCharacterPreviews
  );
}

function wireActions() {
  elements.stepper.addEventListener("click", (event) => {
    const target = event.target.closest("[data-step-index]");
    if (!target) {
      return;
    }
    setStep(Number(target.dataset.stepIndex));
  });

  document.querySelectorAll("[data-project-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      applyProjectPreset(button.dataset.projectPreset);
    });
  });

  document.getElementById("generateScriptButton").addEventListener("click", generateScriptDraft);
  document.getElementById("refineScriptButton").addEventListener("click", refineScriptForVoice);
  document.getElementById("clearScriptButton").addEventListener("click", clearScript);
  document.getElementById("splitScenesButton").addEventListener("click", generateScenesFromScript);
  document.getElementById("rebalanceScenesButton").addEventListener("click", rebalanceScenes);
  document.getElementById("addSceneButton").addEventListener("click", addScene);
  document.getElementById("generatePromptsButton").addEventListener("click", generatePromptPack);
  document
    .getElementById("copyMasterPromptButton")
    .addEventListener("click", () =>
      copyText(buildMasterCharacterPrompt(), "Da sao chep prompt nhan vat.")
    );
  document.getElementById("exportJsonButton").addEventListener("click", exportJson);
  document.getElementById("exportMarkdownButton").addEventListener("click", exportMarkdown);
  document
    .getElementById("copyBriefButton")
    .addEventListener("click", () =>
      copyText(buildMarkdownExport(), "Da sao chep production brief.")
    );
  document.getElementById("refreshBriefButton").addEventListener("click", () => {
    renderPublishPanel();
    showToast("Da lam moi preview xuat ban.");
  });

  elements.prevStepButton.addEventListener("click", () => {
    setStep(Math.max(0, state.currentStep - 1));
  });
  elements.nextStepButton.addEventListener("click", () => {
    if (state.currentStep === steps.length - 1) {
      renderPublishPanel();
      showToast("Goi san xuat da san sang de ban xuat file.");
      return;
    }
    setStep(Math.min(steps.length - 1, state.currentStep + 1));
  });

  document.getElementById("resetProjectButton").addEventListener("click", resetProject);

  elements.characterPresetGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-character-preset]");
    if (!button) {
      return;
    }
    state.character.presetId = button.dataset.characterPreset;
    scheduleSave();
    renderCharacterPreviews();
    renderStepper();
    renderPublishPanel();
  });

  elements.sceneList.addEventListener("input", (event) => {
    const field = event.target.dataset.sceneInput;
    const sceneId = event.target.dataset.sceneId;
    if (!field || !sceneId) {
      return;
    }
    const scene = state.scenes.find((item) => item.id === sceneId);
    if (!scene) {
      return;
    }
    scene[field] = field === "duration" ? clampNumber(event.target.value, 1, 180) : event.target.value;
    scheduleSave();
    renderSceneStats();
    renderPublishPanel();
  });

  elements.sceneList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-scene]");
    if (!button) {
      return;
    }
    removeScene(button.dataset.removeScene);
  });

  elements.promptList.addEventListener("input", (event) => {
    const field = event.target.dataset.promptInput;
    const sceneId = event.target.dataset.sceneId;
    if (!field || !sceneId) {
      return;
    }
    const prompt = state.prompts.find((item) => item.sceneId === sceneId);
    if (!prompt) {
      return;
    }
    prompt[field] = event.target.value;
    scheduleSave();
    renderPublishPanel();
  });
}

function bindTextInput(element, path, callback) {
  element.addEventListener("input", () => {
    setNestedValue(path, element.value);
    scheduleSave();
    renderGlobalSummary();
    renderStepper();
    renderPublishPanel();
    if (callback) {
      callback();
    }
  });
}

function bindSelectInput(element, path, callback) {
  element.addEventListener("change", () => {
    setNestedValue(path, element.value);
    scheduleSave();
    renderGlobalSummary();
    renderStepper();
    renderPublishPanel();
    if (callback) {
      callback();
    }
  });
}

function renderAll({ syncInputs = false } = {}) {
  if (syncInputs) {
    syncStaticInputs();
  }
  renderPanels();
  renderStepper();
  renderGlobalSummary();
  renderScriptOutline();
  renderCharacterPreviews();
  renderSceneStats();
  renderSceneList();
  renderPromptList();
  renderPublishPanel();
  updateSaveBadge();
}

function syncStaticInputs() {
  elements.apiKeyInput.value = state.project.apiKey;
  elements.topicInput.value = state.project.topic;
  elements.audienceInput.value = state.project.audience;
  elements.durationInput.value = state.project.duration;
  elements.objectiveInput.value = state.project.objective;
  elements.toneInput.value = state.project.tone;
  elements.voiceInput.value = state.project.voice;
  elements.visualStyleInput.value = state.project.visualStyle;
  elements.scriptTitleInput.value = state.script.title;
  elements.scriptContentInput.value = state.script.content;
  elements.characterNameInput.value = state.character.name;
  elements.characterRoleInput.value = state.character.role;
  elements.characterAppearanceInput.value = state.character.appearance;
  elements.characterOutfitInput.value = state.character.outfit;
  elements.characterPersonalityInput.value = state.character.personality;
  elements.characterVoiceStyleInput.value = state.character.voiceStyle;
}

function renderPanels() {
  elements.panels.forEach((panel) => {
    panel.classList.toggle("is-active", Number(panel.dataset.step) === state.currentStep);
  });
  elements.prevStepButton.disabled = state.currentStep === 0;
  elements.nextStepButton.textContent =
    state.currentStep === steps.length - 1 ? "Hoan tat" : "Tiep tuc";
  elements.dockStatus.textContent = `${state.currentStep + 1}/6 | ${steps[state.currentStep].description}`;
}

function renderStepper() {
  const completion = getCompletionStatus();
  elements.stepper.innerHTML = steps
    .map((step, index) => {
      const isActive = index === state.currentStep;
      const isComplete = completion[index];
      const bullet = isComplete ? "OK" : String(index + 1).padStart(2, "0");
      return `
        <button
          class="step-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}"
          type="button"
          data-step-index="${index}"
        >
          <span class="step-bullet">${bullet}</span>
          <div>
            <p class="step-name">${step.label}</p>
            <p class="step-meta">${step.description}</p>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderGlobalSummary() {
  const topic = state.project.topic.trim();
  elements.heroHeadline.textContent =
    state.script.title.trim() || (topic ? truncateText(topic, 64) : "Xuong san xuat video giao duc");
  elements.heroDescription.textContent = topic
    ? truncateText(topic, 160)
    : "Cau hinh de bai, tao kich ban, chon nhan vat, tach canh, tao prompts va xuat goi san xuat trong mot man hinh.";
  elements.heroAudience.textContent = state.project.audience;
  elements.heroDuration.textContent = state.project.duration;
  elements.heroScenes.textContent = String(state.scenes.length);
}

function renderScriptOutline() {
  const paragraphs = splitParagraphs(state.script.content);
  if (!paragraphs.length) {
    elements.scriptOutline.innerHTML = `
      <div class="empty-state">
        Kich ban chua co noi dung. Ban co the tao kich ban mau tu brief o buoc 1.
      </div>
    `;
    return;
  }

  elements.scriptOutline.innerHTML = paragraphs
    .map((paragraph, index) => {
      const label = outlineLabel(index, paragraphs.length);
      return `
        <article class="outline-card">
          <strong>${label}</strong>
          <p>${escapeHtml(paragraph)}</p>
        </article>
      `;
    })
    .join("");
}

function renderCharacterPreviews() {
  const profile = getCharacterProfile();
  elements.characterPresetGrid.innerHTML = characterPresets
    .map((preset) => {
      const selected = preset.id === state.character.presetId;
      return `
        <button
          class="character-option ${selected ? "is-selected" : ""}"
          type="button"
          data-character-preset="${preset.id}"
        >
          <h4>${preset.name}</h4>
          <p>${preset.summary}</p>
        </button>
      `;
    })
    .join("");

  elements.characterPromptPreview.textContent = buildMasterCharacterPrompt();
  elements.masterPromptPreview.textContent = [
    `Visual style: ${state.project.visualStyle}.`,
    `Character lock: ${profile.name}, ${profile.role}, ${profile.appearance}.`,
    `Wardrobe and props: ${profile.outfit}.`,
    `Mood and performance: ${profile.personality}, voice vibe ${profile.voiceStyle}.`,
    `Use the same face, costume and proportions consistently across every scene.`,
  ].join(" ");
}

function renderSceneStats() {
  const targetDuration = getDurationSeconds(state.project.duration);
  const currentDuration = state.scenes.reduce((sum, scene) => sum + Number(scene.duration || 0), 0);
  const statusText =
    state.scenes.length === 0
      ? "Chua co canh"
      : currentDuration === targetDuration
        ? "Da khop thoi luong"
        : currentDuration > targetDuration
          ? "Vuot thoi luong"
          : "Con thieu thoi luong";

  elements.sceneStats.innerHTML = `
    <article class="stat-pill">
      <span>Canh hien tai</span>
      <strong>${state.scenes.length}</strong>
    </article>
    <article class="stat-pill">
      <span>Thoi luong muc tieu</span>
      <strong>${targetDuration}s</strong>
    </article>
    <article class="stat-pill">
      <span>Cong don canh</span>
      <strong>${currentDuration}s</strong>
    </article>
    <article class="stat-pill">
      <span>Trang thai</span>
      <strong>${statusText}</strong>
    </article>
  `;
}

function renderSceneList() {
  if (!state.scenes.length) {
    elements.sceneList.innerHTML = `
      <div class="empty-state">
        Chua co phan canh. Hay tao kich ban truoc, sau do bam "Tach canh tu dong".
      </div>
    `;
    return;
  }

  elements.sceneList.innerHTML = state.scenes
    .map((scene, index) => {
      return `
        <article class="scene-card">
          <div class="scene-card-head">
            <div>
              <p>Canh ${index + 1}</p>
              <h3>${escapeHtml(scene.title || `Canh ${index + 1}`)}</h3>
            </div>
            <button class="remove-button" type="button" data-remove-scene="${scene.id}">
              Xoa
            </button>
          </div>

          <div class="grid-layout two-columns">
            <label class="field">
              <span>Tieu de canh</span>
              <input data-scene-input="title" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.title
              )}" />
            </label>

            <label class="field">
              <span>Trong tam thi giac</span>
              <input data-scene-input="visual" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.visual
              )}" />
            </label>
          </div>

          <label class="field">
            <span>Loi thoai / noi dung canh</span>
            <textarea data-scene-input="narration" data-scene-id="${scene.id}" rows="4">${escapeHtml(
              scene.narration
            )}</textarea>
          </label>

          <div class="grid-layout three-columns">
            <label class="field">
              <span>Camera</span>
              <input data-scene-input="camera" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.camera
              )}" />
            </label>

            <label class="field">
              <span>Transition</span>
              <input data-scene-input="transition" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.transition
              )}" />
            </label>

            <label class="field">
              <span>Thoi luong (s)</span>
              <input
                data-scene-input="duration"
                data-scene-id="${scene.id}"
                type="number"
                min="1"
                max="180"
                value="${Number(scene.duration || 0)}"
              />
            </label>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPromptList() {
  if (!state.prompts.length) {
    elements.promptList.innerHTML = `
      <div class="empty-state">
        Chua co prompt. Sau khi da co phan canh, hay bam "Tao prompts cho tat ca canh".
      </div>
    `;
    return;
  }

  elements.promptList.innerHTML = state.prompts
    .map((prompt, index) => {
      const scene = state.scenes.find((item) => item.id === prompt.sceneId);
      const sceneTitle = scene ? scene.title : `Canh ${index + 1}`;
      return `
        <article class="prompt-card">
          <div class="prompt-card-head">
            <div>
              <p>Prompt pack ${index + 1}</p>
              <h3>${escapeHtml(sceneTitle)}</h3>
            </div>
          </div>

          <label class="field">
            <span>Image / video prompt</span>
            <textarea data-prompt-input="image" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
              prompt.image
            )}</textarea>
          </label>

          <label class="field">
            <span>Motion prompt</span>
            <textarea data-prompt-input="motion" data-scene-id="${prompt.sceneId}" rows="3">${escapeHtml(
              prompt.motion
            )}</textarea>
          </label>

          <div class="grid-layout two-columns">
            <label class="field">
              <span>Voice-over prompt</span>
              <textarea data-prompt-input="voice" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
                prompt.voice
              )}</textarea>
            </label>

            <label class="field">
              <span>Subtitle cue</span>
              <textarea data-prompt-input="subtitle" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
                prompt.subtitle
              )}</textarea>
            </label>
          </div>

          <label class="field">
            <span>Negative prompt</span>
            <textarea data-prompt-input="negative" data-scene-id="${prompt.sceneId}" rows="3">${escapeHtml(
              prompt.negative
            )}</textarea>
          </label>
        </article>
      `;
    })
    .join("");
}

function renderPublishPanel() {
  const checklist = [
    {
      title: "Cau hinh du an",
      ready: Boolean(
        state.project.topic.trim() && state.project.audience.trim() && state.project.duration.trim()
      ),
      description: "Da co chu de, doi tuong va thoi luong muc tieu.",
    },
    {
      title: "Kich ban",
      ready: Boolean(state.script.content.trim()),
      description: "Da co narration de chuyen sang phan canh.",
    },
    {
      title: "Nhan vat",
      ready: Boolean(getCharacterProfile().name && getCharacterProfile().appearance),
      description: "Da khoa profile nhan vat va phong thai.",
    },
    {
      title: "Phan canh",
      ready: state.scenes.length > 0,
      description: "Da co danh sach canh kem thoi luong va bo canh.",
    },
    {
      title: "Prompt pack",
      ready: state.prompts.length > 0 && state.prompts.length === state.scenes.length,
      description: "Da co prompt hinh anh, motion, voice va subtitle.",
    },
  ];

  const readyCount = checklist.filter((item) => item.ready).length;
  const percentage = Math.round((readyCount / checklist.length) * 100);
  elements.readinessBar.style.width = `${percentage}%`;
  elements.readinessCopy.textContent = `${readyCount}/${checklist.length} hang muc da san sang. ${productionMessage(
    readyCount
  )}`;
  elements.readinessChecklist.innerHTML = checklist
    .map((item) => {
      return `
        <article class="check-item ${item.ready ? "is-ready" : "is-missing"}">
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </article>
      `;
    })
    .join("");
  elements.publishPreview.value = buildMarkdownExport();
}

function generateScriptDraft() {
  if (!state.project.topic.trim()) {
    showToast("Hay nhap chu de truoc khi tao kich ban.");
    setStep(0);
    elements.topicInput.focus();
    return;
  }

  const beatCount = durationSceneCountMap[state.project.duration] || 6;
  const topic = cleanupSentence(state.project.topic);
  const objective = cleanupSentence(state.project.objective || "truyen cam hung va tao hanh dong cu the");
  const audience = state.project.audience.toLowerCase();
  const tone = state.project.tone.toLowerCase();

  const beatBank = [
    `Mo dau bang mot cau hoi hoac mot tinh huong sat voi ${audience}: ${topic}.`,
    `Nhan vat trung tam xuat hien trong boi canh hoc tap quen thuoc, mang theo mot noi lo rat doi thuong nhung cung rat de dong cam.`,
    `Cau chuyen day nhanh vao thu thach chinh. Nhung luc muon bo cuoc, nhan vat van chon tiep tuc va giu ky luat moi ngay.`,
    `Moi no luc nho duoc tich luy thanh thay doi ro rang. Nhan vat biet tim su ho tro, tu dieu chinh cach hoc va nhin lai muc tieu.`,
    `Khoanh khac but pha den khi ket qua dau tien xuat hien: su tu tin, su tien bo va niem tin rang co gang dung cach se tao ket qua.`,
    `Thong diep giao duc duoc cham lai: ${objective}. Noi dung duoc giu chat giong ${tone} va de nho.`,
    `Ket lai bang mot loi keu goi hanh dong ngan gon, ro rang, phu hop voi ${audience}.`,
  ];

  const selectedBeats = beatBank.slice(0, Math.max(4, Math.min(beatCount, beatBank.length)));
  state.script.title = buildSuggestedTitle(topic);
  state.script.content = selectedBeats.join("\n\n");
  state.scenes = [];
  state.prompts = [];
  scheduleSave();
  renderAll({ syncInputs: true });
  setStep(1);
  showToast("Da tao kich ban mau tu brief hien tai.");
}

function refineScriptForVoice() {
  if (!state.script.content.trim()) {
    showToast("Chua co kich ban de chuan hoa.");
    return;
  }

  const sentences = splitIntoSentences(state.script.content);
  state.script.content = sentences.map((sentence) => sentence.trim()).join("\n\n");
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Da chuan hoa kich ban thanh nhip doc de nghe hon.");
}

function clearScript() {
  state.script = { title: "", content: "" };
  state.scenes = [];
  state.prompts = [];
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Da xoa kich ban va cac du lieu phu thuoc.");
}

function generateScenesFromScript() {
  if (!state.script.content.trim()) {
    showToast("Hay tao kich ban truoc khi phan tach canh.");
    setStep(1);
    return;
  }

  const profile = getCharacterProfile();
  const target = durationSceneCountMap[state.project.duration] || 6;
  const sentences = expandToTarget(splitIntoSentences(state.script.content), target);
  const groups = groupToTarget(sentences, target);
  const durations = buildSceneDurations(groups.length, getDurationSeconds(state.project.duration));
  const cameraPresets = [
    "Wide establishing shot",
    "Medium shot",
    "Close-up",
    "Tracking shot",
    "Over-shoulder shot",
  ];
  const transitionPresets = ["Fade", "Cut", "Speed ramp", "Light wipe", "Soft zoom transition"];

  state.scenes = groups.map((chunk, index) => {
    const keywords = extractKeywords(chunk).join(", ");
    return {
      id: createId("scene"),
      title: inferSceneTitle(chunk, index),
      narration: chunk,
      visual: `${profile.name}, ${profile.role}, ${state.project.visualStyle}, boi canh lien quan ${keywords || "chu de chinh"}`,
      camera: cameraPresets[index % cameraPresets.length],
      transition: transitionPresets[index % transitionPresets.length],
      duration: durations[index],
    };
  });
  state.prompts = [];
  scheduleSave();
  renderAll();
  setStep(3);
  showToast("Da tach kich ban thanh cac canh co thoi luong.");
}

function rebalanceScenes() {
  if (!state.scenes.length) {
    showToast("Chua co canh de can bang thoi luong.");
    return;
  }

  const durations = buildSceneDurations(state.scenes.length, getDurationSeconds(state.project.duration));
  state.scenes = state.scenes.map((scene, index) => ({ ...scene, duration: durations[index] }));
  scheduleSave();
  renderSceneStats();
  renderSceneList();
  renderPublishPanel();
  showToast("Da can lai thoi luong tat ca canh.");
}

function addScene() {
  const profile = getCharacterProfile();
  state.scenes.push({
    id: createId("scene"),
    title: `Canh ${state.scenes.length + 1}`,
    narration: "Bo sung loi thoai hoac mo ta noi dung canh tai day.",
    visual: `${profile.name}, ${state.project.visualStyle}, boi canh giao duc`,
    camera: "Medium shot",
    transition: "Cut",
    duration: 5,
  });
  reconcilePrompts();
  scheduleSave();
  renderSceneStats();
  renderSceneList();
  renderPromptList();
  renderPublishPanel();
  showToast("Da them mot canh moi.");
}

function removeScene(sceneId) {
  state.scenes = state.scenes.filter((scene) => scene.id !== sceneId);
  reconcilePrompts();
  scheduleSave();
  renderSceneStats();
  renderSceneList();
  renderPromptList();
  renderStepper();
  renderPublishPanel();
  showToast("Da xoa canh.");
}

function generatePromptPack() {
  if (!state.scenes.length) {
    showToast("Hay tao phan canh truoc khi tao prompts.");
    setStep(3);
    return;
  }

  const profile = getCharacterProfile();
  state.prompts = state.scenes.map((scene) => {
    const visualKeywords = extractKeywords(scene.narration).join(", ");
    return {
      sceneId: scene.id,
      image: [
        `${state.project.visualStyle}, educational video frame, consistent character design.`,
        `${profile.name}, ${profile.role}, ${profile.appearance}.`,
        `Outfit and props: ${profile.outfit}.`,
        `Scene intent: ${scene.visual}.`,
        `Mood: ${profile.personality}. Camera: ${scene.camera}.`,
        `Keywords: ${visualKeywords || "learning, motivation, classroom"}.`,
        `High detail, clean composition, no text overlay, no watermark.`,
      ].join(" "),
      motion: [
        `${scene.camera}.`,
        `Duration around ${scene.duration}s.`,
        `Transition using ${scene.transition}.`,
        `Keep the same character proportions, face and wardrobe across the sequence.`,
        `Emphasize ${visualKeywords || "the core learning moment"}.`,
      ].join(" "),
      voice: [
        `Vietnamese voice-over, ${state.project.voice}.`,
        `Delivery style: ${state.project.tone.toLowerCase()}.`,
        `Read naturally with educational pacing: "${scene.narration}"`,
      ].join(" "),
      subtitle: buildSubtitle(scene.narration),
      negative:
        "blurry, low detail, extra fingers, duplicate face, bad anatomy, broken hands, text, watermark, logo, distorted eyes",
    };
  });

  scheduleSave();
  renderPromptList();
  renderStepper();
  renderPublishPanel();
  setStep(4);
  showToast("Da tao prompt pack cho toan bo phan canh.");
}

function exportJson() {
  const payload = buildExportPayload();
  downloadFile("video-ai-production.json", JSON.stringify(payload, null, 2), "application/json");
  showToast("Da tai goi JSON.");
}

function exportMarkdown() {
  downloadFile("video-ai-production.md", buildMarkdownExport(), "text/markdown");
  showToast("Da tai file Markdown.");
}

function buildExportPayload() {
  return {
    ...state,
    project: {
      ...state.project,
      apiKey: redactSecret(state.project.apiKey),
    },
  };
}

function buildMarkdownExport() {
  const profile = getCharacterProfile();
  const safeProject = {
    ...state.project,
    apiKey: redactSecret(state.project.apiKey),
  };

  const sceneBlock = state.scenes.length
    ? state.scenes
        .map((scene, index) => {
          return [
            `### Canh ${index + 1}: ${scene.title}`,
            `- Thoi luong: ${scene.duration}s`,
            `- Visual: ${scene.visual}`,
            `- Camera: ${scene.camera}`,
            `- Transition: ${scene.transition}`,
            `- Narration: ${scene.narration}`,
          ].join("\n");
        })
        .join("\n\n")
    : "_Chua co phan canh_";

  const promptBlock = state.prompts.length
    ? state.prompts
        .map((prompt, index) => {
          return [
            `### Prompt ${index + 1}`,
            `- Image: ${prompt.image}`,
            `- Motion: ${prompt.motion}`,
            `- Voice: ${prompt.voice}`,
            `- Subtitle: ${prompt.subtitle}`,
            `- Negative: ${prompt.negative}`,
          ].join("\n");
        })
        .join("\n\n")
    : "_Chua co prompt pack_";

  return [
    `# ${state.script.title.trim() || "Production Brief Video Giao Duc AI"}`,
    "",
    "## 1. Cau hinh du an",
    `- Chu de: ${safeProject.topic || "_"}`,
    `- Doi tuong: ${safeProject.audience}`,
    `- Thoi luong: ${safeProject.duration}`,
    `- Giong doc: ${safeProject.voice}`,
    `- Muc tieu: ${safeProject.objective || "_"}`,
    `- Tong noi dung: ${safeProject.tone}`,
    `- Phong cach hinh anh: ${safeProject.visualStyle}`,
    `- API key: ${safeProject.apiKey}`,
    "",
    "## 2. Kich ban",
    state.script.content.trim() || "_Chua co kich ban_",
    "",
    "## 3. Nhan vat",
    `- Ten: ${profile.name}`,
    `- Vai tro: ${profile.role}`,
    `- Ngoai hinh: ${profile.appearance}`,
    `- Trang phuc: ${profile.outfit}`,
    `- Tinh cach: ${profile.personality}`,
    `- Giong noi: ${profile.voiceStyle}`,
    "",
    "## 4. Phan canh",
    sceneBlock,
    "",
    "## 5. Prompt pack",
    promptBlock,
    "",
    "## 6. Ghi chu xuat ban",
    "- Goi nay san sang de dua sang tool tao hinh, video, voice-over hoac handoff cho editor.",
    "- Neu sua kich ban hoac phan canh, nen tao lai prompt pack de dong bo.",
  ].join("\n");
}

function buildMasterCharacterPrompt() {
  const profile = getCharacterProfile();
  return [
    `${profile.name}, ${profile.role}.`,
    `Appearance: ${profile.appearance}.`,
    `Outfit and props: ${profile.outfit}.`,
    `Personality: ${profile.personality}.`,
    `Voice and performance vibe: ${profile.voiceStyle}.`,
    `Visual style: ${state.project.visualStyle}.`,
    `Keep the same face, proportions, costume and identity in every scene.`,
  ].join(" ");
}

function getCharacterProfile() {
  const preset = characterPresets.find((item) => item.id === state.character.presetId) || characterPresets[0];
  return {
    name: state.character.name.trim() || preset.name,
    role: state.character.role.trim() || preset.role,
    appearance: state.character.appearance.trim() || preset.appearance,
    outfit: state.character.outfit.trim() || preset.outfit,
    personality: state.character.personality.trim() || preset.personality,
    voiceStyle: state.character.voiceStyle.trim() || preset.voiceStyle,
  };
}

function reconcilePrompts() {
  const sceneIds = new Set(state.scenes.map((scene) => scene.id));
  state.prompts = state.prompts.filter((prompt) => sceneIds.has(prompt.sceneId));
}

function applyProjectPreset(presetId) {
  const preset = projectPresets[presetId];
  if (!preset) {
    return;
  }
  state.project = {
    ...state.project,
    ...preset,
  };
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Da nap nhanh mot preset du an.");
}

function resetProject() {
  const confirmed = window.confirm("Ban muon xoa toan bo du lieu du an hien tai?");
  if (!confirmed) {
    return;
  }
  state = cloneState(defaultState);
  saveNow();
  renderAll({ syncInputs: true });
  showToast("Da lam moi du an.");
}

function setStep(index) {
  state.currentStep = clampNumber(index, 0, steps.length - 1);
  scheduleSave();
  renderPanels();
  renderStepper();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scheduleSave() {
  updateSaveBadge("Dang luu...");
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveNow, 220);
}

function saveNow() {
  state.savedAt = Date.now();
  localStorage.setItem(storageKey, JSON.stringify(state));
  updateSaveBadge();
}

function updateSaveBadge(overrideText) {
  if (overrideText) {
    elements.saveBadge.textContent = overrideText;
    return;
  }
  if (!state.savedAt) {
    elements.saveBadge.textContent = "Chua luu";
    return;
  }
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  elements.saveBadge.textContent = `Da luu luc ${formatter.format(state.savedAt)}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return cloneState(defaultState);
    }
    const parsed = JSON.parse(raw);
    return {
      currentStep: clampNumber(parsed.currentStep, 0, steps.length - 1),
      savedAt: parsed.savedAt || null,
      project: {
        ...defaultState.project,
        ...(parsed.project || {}),
      },
      script: {
        ...defaultState.script,
        ...(parsed.script || {}),
      },
      character: {
        ...defaultState.character,
        ...(parsed.character || {}),
      },
      scenes: Array.isArray(parsed.scenes) ? parsed.scenes.map(normalizeScene).filter(Boolean) : [],
      prompts: Array.isArray(parsed.prompts) ? parsed.prompts.map(normalizePrompt).filter(Boolean) : [],
    };
  } catch (error) {
    return cloneState(defaultState);
  }
}

function normalizeScene(scene) {
  if (!scene || typeof scene !== "object") {
    return null;
  }
  return {
    id: scene.id || createId("scene"),
    title: String(scene.title || ""),
    narration: String(scene.narration || ""),
    visual: String(scene.visual || ""),
    camera: String(scene.camera || ""),
    transition: String(scene.transition || ""),
    duration: clampNumber(scene.duration, 1, 180),
  };
}

function normalizePrompt(prompt) {
  if (!prompt || typeof prompt !== "object") {
    return null;
  }
  return {
    sceneId: String(prompt.sceneId || ""),
    image: String(prompt.image || ""),
    motion: String(prompt.motion || ""),
    voice: String(prompt.voice || ""),
    subtitle: String(prompt.subtitle || ""),
    negative: String(prompt.negative || ""),
  };
}

function setNestedValue(path, value) {
  if (path.length !== 2) {
    return;
  }
  state[path[0]][path[1]] = value;
}

function getCompletionStatus() {
  const profile = getCharacterProfile();
  const promptReady = state.prompts.length > 0 && state.prompts.length === state.scenes.length;
  const base = [
    Boolean(state.project.topic.trim() && state.project.audience.trim() && state.project.duration.trim()),
    Boolean(state.script.content.trim()),
    Boolean(profile.name && profile.appearance),
    Boolean(state.scenes.length),
    promptReady,
  ];
  base.push(base.every(Boolean));
  return base;
}

function productionMessage(readyCount) {
  if (readyCount <= 1) {
    return "Can bo sung them de brief duoc day du.";
  }
  if (readyCount <= 3) {
    return "Dang o muc co the draft nhanh, nhung chua nen handoff.";
  }
  if (readyCount === 4) {
    return "Chi con prompt pack la co the dua sang pipeline san xuat.";
  }
  return "San sang ban giao cho khau render va dung video.";
}

function buildSuggestedTitle(topic) {
  const cleaned = topic.replace(/[.!?]/g, "");
  return truncateText(cleaned.charAt(0).toUpperCase() + cleaned.slice(1), 72);
}

function buildSceneDurations(count, totalDuration) {
  const base = Math.floor(totalDuration / count);
  const remainder = totalDuration % count;
  return Array.from({ length: count }, (_, index) => base + (index < remainder ? 1 : 0));
}

function outlineLabel(index, total) {
  const labels = ["Hook", "Boi canh", "Thu thach", "No luc", "But pha", "Bai hoc", "CTA"];
  if (index < labels.length) {
    return labels[index];
  }
  return `Phan ${index + 1}/${total}`;
}

function inferSceneTitle(chunk, index) {
  const baseLabels = ["Mo canh", "Boi canh", "Xung dot", "No luc", "Chuyen bien", "But pha", "Thong diep", "Ket"];
  const keywords = extractKeywords(chunk).slice(0, 2).join(" | ");
  return keywords ? `${baseLabels[index] || `Canh ${index + 1}`}: ${keywords}` : baseLabels[index] || `Canh ${index + 1}`;
}

function splitParagraphs(text) {
  return String(text)
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitIntoSentences(text) {
  const normalized = String(text).replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [];
  }
  return (normalized.match(/[^.!?]+[.!?]?/g) || [normalized])
    .map((item) => cleanupSentence(item))
    .filter(Boolean);
}

function expandToTarget(items, target) {
  let result = [...items];
  while (result.length < target) {
    const index = longestTextIndex(result);
    const parts = splitChunk(result[index]);
    if (parts.length < 2) {
      break;
    }
    result.splice(index, 1, ...parts);
  }
  while (result.length < target) {
    result.push("Them mot nhip chuyen canh ngan de nhan manh thong diep chinh.");
  }
  return result;
}

function groupToTarget(items, target) {
  if (items.length <= target) {
    return items;
  }
  const groups = Array.from({ length: target }, () => []);
  items.forEach((item, index) => {
    const groupIndex = Math.min(target - 1, Math.floor((index * target) / items.length));
    groups[groupIndex].push(item);
  });
  return groups.map((group) => group.join(" ")).filter(Boolean);
}

function splitChunk(text) {
  const regexSeparators = [
    /\s+(?:va|v\u00E0)\s+/i,
    /\s+(?:nhung|nh\u01B0ng)\s+/i,
    /\s+(?:sau do|sau \u0111\u00F3)\s+/i,
  ];
  for (const separator of regexSeparators) {
    const parts = text
      .split(separator)
      .map((item) => cleanupSentence(item))
      .filter(Boolean);
    if (parts.length >= 2) {
      return [parts[0], parts.slice(1).join(", ")];
    }
  }
  const separators = [",", ";"];
  for (const separator of separators) {
    const parts = text
      .split(separator)
      .map((item) => cleanupSentence(item))
      .filter(Boolean);
    if (parts.length >= 2) {
      return [parts[0], parts.slice(1).join(", ")];
    }
  }
  if (text.length < 40) {
    return [text];
  }
  const mid = Math.floor(text.length / 2);
  let splitAt = text.indexOf(" ", mid);
  if (splitAt === -1) {
    splitAt = mid;
  }
  return [cleanupSentence(text.slice(0, splitAt)), cleanupSentence(text.slice(splitAt))].filter(Boolean);
}

function longestTextIndex(items) {
  return items.reduce((bestIndex, item, index) => {
    return item.length > items[bestIndex].length ? index : bestIndex;
  }, 0);
}

function extractKeywords(text) {
  const stopwords = new Set([
    "mot",
    "nhung",
    "va",
    "cua",
    "trong",
    "cho",
    "voi",
    "the",
    "hay",
    "sau",
    "khi",
    "la",
    "de",
    "ban",
    "noi",
    "dung",
    "video",
    "giao",
    "duc",
    "duoc",
    "dang",
    "nhan",
    "vat",
  ]);
  const words = toAsciiSearchText(text)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 4 && !stopwords.has(word));
  return [...new Set(words)].slice(0, 4);
}

function buildSubtitle(text) {
  const sentences = splitIntoSentences(text).slice(0, 2);
  return sentences.join(" / ");
}

function getDurationSeconds(durationPreset) {
  return durationSecondsMap[durationPreset] || 30;
}

function cleanupSentence(text) {
  return String(text).replace(/\s+/g, " ").trim();
}

function toAsciiSearchText(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("\u0111", "d")
    .replaceAll("\u0110", "D")
    .toLowerCase();
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function redactSecret(secret) {
  if (!secret) {
    return "Khong co";
  }
  return `${secret.slice(0, 4)}********${secret.slice(-2)}`;
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function clampNumber(value, min, max) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return min;
  }
  return Math.min(max, Math.max(min, numeric));
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showToast(successMessage);
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastRack.append(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}
