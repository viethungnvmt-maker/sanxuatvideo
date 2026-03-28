const steps = [
  { label: "Cấu hình", description: "Cấu hình dự án", icon: "&#9881;" },
  { label: "Kịch bản", description: "Tạo lời dẫn", icon: "&#9998;" },
  { label: "Nhân vật", description: "Khóa nhân vật", icon: "&#128100;" },
  { label: "Phân cảnh", description: "Tách cảnh quay", icon: "&#127909;" },
  { label: "Prompts", description: "Đồng bộ prompt", icon: "&#10024;" },
  { label: "Sản xuất", description: "Xuất bàn giao", icon: "&#128230;" },
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

const visualStyleOptions = [
  "Hoạt hình 3D Pixar",
  "Motion graphics giáo dục",
  "Cinematic classroom",
  "2D giáo dục hiện đại",
  "Realistic classroom",
];

const toneOptions = [
  "Vượt khó và bền bỉ",
  "Truyền cảm hứng",
  "Gần gũi, đồng hành",
  "Nghiêm túc, học thuật",
];

const formatOptions = ["YouTube (16:9)", "TikTok / Reel (9:16)", "Vuông (1:1)"];

const narrationModeOptions = ["Tường thuật", "Kể chuyện", "Giải thích bài học", "Đối thoại"];

const voiceRegionPresets = [
  {
    value: "Miền Bắc",
    summary: "Chuẩn mực, rõ tiếng, hợp với giảng giải và video cần chất học thuật.",
    color: "#6ea8ff",
  },
  {
    value: "Miền Trung",
    summary: "Âm sắc mềm, cân bằng, hợp nội dung gần gũi và tình huống đời thường.",
    color: "#b278ff",
  },
  {
    value: "Miền Nam",
    summary: "Thân thiện, dễ nghe, hợp video truyền cảm hứng và CTA tự nhiên.",
    color: "#ff7a86",
  },
];

const videoPlatforms = [
  {
    id: "veo3",
    name: "Veo3",
    subtitle: "Clip 8 giây",
    summary: "Tốt cho đối thoại, cinematic và prompt cần bố cục rõ.",
    color: "#8b3dff",
  },
  {
    id: "sora2",
    name: "Sora 2",
    subtitle: "Cảnh AI",
    summary: "Linh hoạt khi cần mô tả cảnh dài và nhiều chi tiết bối cảnh.",
    color: "#52e1a1",
  },
  {
    id: "seedance2",
    name: "Seedance 2.0",
    subtitle: "Khóa khung",
    summary: "Mạnh về giữ bố cục, layout và nhạc nhịp chuyển cảnh.",
    color: "#ff924a",
  },
  {
    id: "grok-imagine",
    name: "Grok Imagine",
    subtitle: "Nháp nhanh",
    summary: "Nhanh cho việc test ý tưởng, concept hình ảnh và phiên bản nháp.",
    color: "#c58eff",
  },
];

const characterPresets = [
  {
    id: "teacher",
    name: "Thầy cô truyền cảm hứng",
    role: "người hướng dẫn giáo dục",
    appearance: "ngoại hình thanh lịch, thần thái điềm đạm, ánh mắt ấm áp và tập trung",
    outfit: "áo sơ mi sáng màu, blazer tối giản, tài liệu học tập trên tay",
    personality: "ấm áp, rõ ràng, tạo niềm tin",
    voiceStyle: "điềm đạm, hướng dẫn, dễ nghe",
    summary: "Phù hợp video bài giảng ngắn, tổng hợp kiến thức và motivator cho học sinh.",
  },
  {
    id: "student",
    name: "Học sinh vượt khó",
    role: "học sinh đang nỗ lực thay đổi",
    appearance: "gương mặt trẻ, mắt sáng, điệu bộ có chút hồi hộp nhưng kiên định",
    outfit: "đồng phục học sinh gọn gàng, ba lô, sách vở và bút ghi chú",
    personality: "chăm chỉ, kiên trì, dễ đồng cảm",
    voiceStyle: "chân thật, gần gũi, tạo động lực",
    summary: "Tốt cho storytelling hành trình học tập, kỷ luật và đạt mục tiêu.",
  },
  {
    id: "mentor",
    name: "Người cố vấn",
    role: "cố vấn đồng hành",
    appearance: "trung niên, nét mặt thông thái, nhìn chuyên nghiệp và tin cậy",
    outfit: "áo polo tối giản, đồng hồ, bảng ghi chú hoặc tablet",
    personality: "bình tĩnh, logic, truyền lửa",
    voiceStyle: "điềm tĩnh, thông thái, có sức nâng đỡ",
    summary: "Hợp với video định hướng, kỹ năng sống, rèn kỷ luật học tập.",
  },
  {
    id: "mc",
    name: "MC giáo dục",
    role: "người dẫn chương trình",
    appearance: "trẻ trung, biểu cảm rõ, gương mặt sáng sân và gần ống kính",
    outfit: "áo khoác smart-casual, tông màu hiện đại, tai nghe mini",
    personality: "nhiệt huyết, nhanh gọn, cuốn hút",
    voiceStyle: "năng lượng, nhịp nhanh, rõ từng cụm ý",
    summary: "Tốt cho short-form, video mang tính lan truyền, tổng hợp thông tin nhanh.",
  },
];

const projectPresets = {
  story: {
    topic:
      "Hành trình học tập chăm chỉ của một bạn học sinh gặp khó khăn nhưng vẫn kiên trì và đạt thành công, truyền cảm hứng cho học sinh THPT.",
    audience: "THPT",
    duration: "60s",
    objective: "Tạo động lực học tập và rèn kỷ luật bản thân",
    tone: "Truyền cảm hứng",
    visualStyle: "Cinematic classroom",
    voice: "Miền Bắc",
    format: "YouTube (16:9)",
    narrationMode: "Kể chuyện",
    videoPlatform: "veo3",
  },
  lesson: {
    topic:
      "Tóm tắt một bài học ngắn gọn, rõ ràng, dễ nhớ, có ví dụ thực tế và kết thúc bằng 3 ý chính cần nhớ.",
    audience: "THCS",
    duration: "45s",
    objective: "Giúp học sinh nắm nhanh ý chính",
    tone: "Nghiêm túc, học thuật",
    visualStyle: "Motion graphics giáo dục",
    voice: "Miền Bắc",
    format: "YouTube (16:9)",
    narrationMode: "Giải thích bài học",
    videoPlatform: "seedance2",
  },
  cta: {
    topic:
      "Video kêu gọi học sinh bắt đầu hành động nhỏ ngay hôm nay để cải thiện kết quả học tập trong 30 ngày tới.",
    audience: "THPT",
    duration: "30s",
    objective: "Kêu gọi hành động ngay lập tức",
    tone: "Vượt khó và bền bỉ",
    visualStyle: "Hoạt hình 3D Pixar",
    voice: "Miền Nam",
    format: "TikTok / Reel (9:16)",
    narrationMode: "Tường thuật",
    videoPlatform: "sora2",
  },
};

const storageKey = "edu-video-factory-state-v1";

const defaultState = {
  currentStep: 0,
  savedAt: null,
  project: {
    apiKey: "",
    topic: "",
    audience: "THCS",
    duration: "60s",
    voice: "Miền Bắc",
    objective: "",
    visualStyle: "Hoạt hình 3D Pixar",
    tone: "Vượt khó và bền bỉ",
    format: "YouTube (16:9)",
    narrationMode: "Tường thuật",
    videoPlatform: "veo3",
    scriptUploadName: "",
    referenceUploadName: "",
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
  wizardDock: document.querySelector(".wizard-dock"),
  heroHeadline: document.getElementById("heroHeadline"),
  heroDescription: document.getElementById("heroDescription"),
  heroAudience: document.getElementById("heroAudience"),
  heroDuration: document.getElementById("heroDuration"),
  heroVoice: document.getElementById("heroVoice"),
  heroPlatform: document.getElementById("heroPlatform"),
  footerPlatform: document.getElementById("footerPlatform"),
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
  voiceRegionGrid: document.getElementById("voiceRegionGrid"),
  visualStyleInput: document.getElementById("visualStyleInput"),
  formatInput: document.getElementById("formatInput"),
  narrationModeInput: document.getElementById("narrationModeInput"),
  platformGrid: document.getElementById("platformGrid"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  uploadScriptButton: document.getElementById("uploadScriptButton"),
  scriptUploadInput: document.getElementById("scriptUploadInput"),
  scriptUploadStatus: document.getElementById("scriptUploadStatus"),
  uploadReferenceButton: document.getElementById("uploadReferenceButton"),
  referenceUploadInput: document.getElementById("referenceUploadInput"),
  referenceUploadStatus: document.getElementById("referenceUploadStatus"),
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
  bindSelectInput(elements.formatInput, ["project", "format"]);
  bindSelectInput(elements.narrationModeInput, ["project", "narrationMode"]);
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

  elements.voiceRegionGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-voice-value]");
    if (!button) {
      return;
    }
    state.project.voice = button.dataset.voiceValue;
    elements.voiceInput.value = state.project.voice;
    scheduleSave();
    renderGlobalSummary();
    renderStepper();
    renderVoiceRegionCards();
    renderPublishPanel();
  });

  elements.platformGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-platform-id]");
    if (!button) {
      return;
    }
    state.project.videoPlatform = button.dataset.platformId;
    scheduleSave();
    renderGlobalSummary();
    renderStepper();
    renderPlatformCards();
    renderPublishPanel();
  });

  elements.uploadScriptButton?.addEventListener("click", () => {
    elements.scriptUploadInput?.click();
  });

  elements.uploadReferenceButton?.addEventListener("click", () => {
    elements.referenceUploadInput?.click();
  });

  elements.scriptUploadInput?.addEventListener("change", handleScriptUpload);
  elements.referenceUploadInput?.addEventListener("change", handleReferenceUpload);

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
      copyText(buildMasterCharacterPrompt(), "Đã sao chép prompt nhân vật.")
    );
  document.getElementById("exportJsonButton").addEventListener("click", exportJson);
  document.getElementById("exportMarkdownButton").addEventListener("click", exportMarkdown);
  document
    .getElementById("copyBriefButton")
    .addEventListener("click", () =>
      copyText(buildMarkdownExport(), "Đã sao chép brief sản xuất.")
    );
  document.getElementById("refreshBriefButton").addEventListener("click", () => {
    renderPublishPanel();
    showToast("Đã làm mới preview xuất bản.");
  });

  elements.prevStepButton.addEventListener("click", () => {
    setStep(Math.max(0, state.currentStep - 1));
  });
  elements.nextStepButton.addEventListener("click", () => {
    if (state.currentStep === steps.length - 1) {
      renderPublishPanel();
      showToast("Gói sản xuất đã sẵn sàng để bạn xuất file.");
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
  renderVoiceRegionCards();
  renderPlatformCards();
  renderUploadStatuses();
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
  elements.formatInput.value = state.project.format;
  elements.narrationModeInput.value = state.project.narrationMode;
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
    state.currentStep === 0
      ? "Tiếp theo: Tạo kịch bản"
      : state.currentStep === steps.length - 1
        ? "Hoàn tất"
        : "Tiếp tục";
  elements.dockStatus.textContent = `${state.currentStep + 1}/6 | ${steps[state.currentStep].description}`;
  elements.wizardDock.classList.toggle("is-first-step", state.currentStep === 0);
}

function renderStepper() {
  const completion = getCompletionStatus();
  elements.stepper.innerHTML = steps
    .map((step, index) => {
      const isActive = index === state.currentStep;
      const isComplete = completion[index];
      const bullet = isComplete ? "&#10003;" : step.icon;
      return `
        <button
          class="step-item ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}"
          type="button"
          data-step-index="${index}"
          title="${step.description}"
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
  elements.heroHeadline.textContent = topic
    ? `Brief: ${truncateText(topic, 72)}`
    : "Brief: Chưa nhập chủ đề";
  elements.heroDescription.textContent = [
    state.project.visualStyle,
    state.project.tone,
    state.project.format,
    state.project.narrationMode,
  ].join(" | ");
  elements.heroAudience.textContent = state.project.audience;
  elements.heroDuration.textContent = state.project.duration;
  elements.heroVoice.textContent = state.project.voice;
  elements.heroPlatform.textContent = getPlatformLabel(state.project.videoPlatform);
  elements.footerPlatform.textContent = getPlatformLabel(state.project.videoPlatform);
  elements.heroScenes.textContent = String(state.scenes.length);
}

function renderVoiceRegionCards() {
  elements.voiceRegionGrid.innerHTML = voiceRegionPresets
    .map((preset) => {
      const selected = preset.value === state.project.voice;
      return `
        <button
          class="voice-card ${selected ? "is-selected" : ""}"
          type="button"
          data-voice-value="${preset.value}"
        >
          <div class="voice-card-head">
            <strong>${preset.value}</strong>
            <span class="voice-card-dot" style="background:${preset.color};"></span>
          </div>
          <p>${preset.summary}</p>
        </button>
      `;
    })
    .join("");
}

function renderPlatformCards() {
  elements.platformGrid.innerHTML = videoPlatforms
    .map((platform) => {
      const selected = platform.id === state.project.videoPlatform;
      return `
        <button
          class="platform-card ${selected ? "is-selected" : ""}"
          type="button"
          data-platform-id="${platform.id}"
        >
          <div class="platform-card-head">
            <strong>${platform.name}</strong>
            <span class="platform-card-dot" style="background:${platform.color};"></span>
          </div>
          <p>${platform.summary}</p>
          <span class="platform-card-badge">${platform.subtitle}</span>
        </button>
      `;
    })
    .join("");
}

function renderUploadStatuses() {
  elements.scriptUploadStatus.textContent = state.project.scriptUploadName
    ? `Đã chọn: ${state.project.scriptUploadName}`
    : "Chưa chọn file.";
  elements.referenceUploadStatus.textContent = state.project.referenceUploadName
    ? `Đã chọn: ${state.project.referenceUploadName}`
    : "Chưa chọn tài liệu.";
}

function renderScriptOutline() {
  const paragraphs = splitParagraphs(state.script.content);
  if (!paragraphs.length) {
    elements.scriptOutline.innerHTML = `
      <div class="empty-state">
        Kịch bản chưa có nội dung. Bạn có thể tạo kịch bản mẫu từ brief ở bước 1.
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
    `Phong cách hình ảnh: ${state.project.visualStyle}.`,
    `Khóa nhân vật: ${profile.name}, ${profile.role}, ${profile.appearance}.`,
    `Trang phục và đạo cụ: ${profile.outfit}.`,
    `Cảm xúc và phong thái: ${profile.personality}, chất giọng ${profile.voiceStyle}.`,
    `Giữ cùng một gương mặt, trang phục và tỷ lệ cơ thể xuyên suốt mọi cảnh.`,
  ].join(" ");
}

function renderSceneStats() {
  const targetDuration = getDurationSeconds(state.project.duration);
  const currentDuration = state.scenes.reduce((sum, scene) => sum + Number(scene.duration || 0), 0);
  const statusText =
    state.scenes.length === 0
      ? "Chưa có cảnh"
      : currentDuration === targetDuration
        ? "Đã khớp thời lượng"
        : currentDuration > targetDuration
          ? "Vượt thời lượng"
          : "Còn thiếu thời lượng";

  elements.sceneStats.innerHTML = `
    <article class="stat-pill">
      <span>Cảnh hiện tại</span>
      <strong>${state.scenes.length}</strong>
    </article>
    <article class="stat-pill">
      <span>Thời lượng mục tiêu</span>
      <strong>${targetDuration}s</strong>
    </article>
    <article class="stat-pill">
      <span>Cộng dồn cảnh</span>
      <strong>${currentDuration}s</strong>
    </article>
    <article class="stat-pill">
      <span>Trạng thái</span>
      <strong>${statusText}</strong>
    </article>
  `;
}

function renderSceneList() {
  if (!state.scenes.length) {
    elements.sceneList.innerHTML = `
      <div class="empty-state">
        Chưa có phân cảnh. Hãy tạo kịch bản trước, sau đó bấm "Tách cảnh tự động".
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
              <p>Cảnh ${index + 1}</p>
              <h3>${escapeHtml(scene.title || `Cảnh ${index + 1}`)}</h3>
            </div>
            <button class="remove-button" type="button" data-remove-scene="${scene.id}">
              Xóa
            </button>
          </div>

          <div class="grid-layout two-columns">
            <label class="field">
              <span>Tiêu đề cảnh</span>
              <input data-scene-input="title" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.title
              )}" />
            </label>

            <label class="field">
              <span>Trọng tâm thị giác</span>
              <input data-scene-input="visual" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.visual
              )}" />
            </label>
          </div>

          <label class="field">
            <span>Lời thoại / nội dung cảnh</span>
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
              <span>Chuyển cảnh</span>
              <input data-scene-input="transition" data-scene-id="${scene.id}" value="${escapeAttribute(
                scene.transition
              )}" />
            </label>

            <label class="field">
              <span>Thời lượng (s)</span>
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
        Chưa có prompt. Sau khi đã có phân cảnh, hãy bấm "Tạo prompt cho tất cả cảnh".
      </div>
    `;
    return;
  }

  elements.promptList.innerHTML = state.prompts
    .map((prompt, index) => {
      const scene = state.scenes.find((item) => item.id === prompt.sceneId);
      const sceneTitle = scene ? scene.title : `Cảnh ${index + 1}`;
      return `
        <article class="prompt-card">
          <div class="prompt-card-head">
            <div>
              <p>Gói prompt ${index + 1}</p>
              <h3>${escapeHtml(sceneTitle)}</h3>
            </div>
          </div>

          <label class="field">
            <span>Prompt ảnh / video</span>
            <textarea data-prompt-input="image" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
              prompt.image
            )}</textarea>
          </label>

          <label class="field">
            <span>Prompt chuyển động</span>
            <textarea data-prompt-input="motion" data-scene-id="${prompt.sceneId}" rows="3">${escapeHtml(
              prompt.motion
            )}</textarea>
          </label>

          <div class="grid-layout two-columns">
            <label class="field">
              <span>Prompt lời thoại</span>
              <textarea data-prompt-input="voice" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
                prompt.voice
              )}</textarea>
            </label>

            <label class="field">
              <span>Gợi ý phụ đề</span>
              <textarea data-prompt-input="subtitle" data-scene-id="${prompt.sceneId}" rows="4">${escapeHtml(
                prompt.subtitle
              )}</textarea>
            </label>
          </div>

          <label class="field">
            <span>Prompt loại trừ</span>
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
      title: "Cấu hình dự án",
      ready: Boolean(
        state.project.topic.trim() &&
          state.project.audience.trim() &&
          state.project.duration.trim() &&
          state.project.videoPlatform
      ),
      description: "Đã có chủ đề, đối tượng, thời lượng và nền tảng tạo video.",
    },
    {
      title: "Kịch bản",
      ready: Boolean(state.script.content.trim()),
      description: "Đã có lời dẫn để chuyển sang phân cảnh.",
    },
    {
      title: "Nhân vật",
      ready: Boolean(getCharacterProfile().name && getCharacterProfile().appearance),
      description: "Đã khóa hồ sơ nhân vật và phong thái.",
    },
    {
      title: "Phân cảnh",
      ready: state.scenes.length > 0,
      description: "Đã có danh sách cảnh kèm thời lượng và bối cảnh.",
    },
    {
      title: "Gói prompt",
      ready: state.prompts.length > 0 && state.prompts.length === state.scenes.length,
      description: "Đã có prompt hình ảnh, chuyển động, giọng đọc và phụ đề.",
    },
  ];

  const readyCount = checklist.filter((item) => item.ready).length;
  const percentage = Math.round((readyCount / checklist.length) * 100);
  elements.readinessBar.style.width = `${percentage}%`;
  elements.readinessCopy.textContent = `${readyCount}/${checklist.length} hạng mục đã sẵn sàng. ${productionMessage(
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

async function handleScriptUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  state.project.scriptUploadName = file.name;

  if (isPlainTextFile(file.name)) {
    try {
      const importedText = String(await file.text()).replace(/\r\n/g, "\n").trim();
      if (importedText) {
        state.script.title = stripFileExtension(file.name);
        state.script.content = importedText;
        state.scenes = [];
        state.prompts = [];
        if (!state.project.topic.trim()) {
          state.project.topic = truncateText(importedText.replace(/\s+/g, " "), 180);
        }
      }
      showToast("Đã nạp nội dung văn bản vào bước Kịch bản.");
    } catch (error) {
      showToast("Không đọc được file này. Bạn có thể dán nội dung thủ công.");
    }
  } else {
    showToast("Đã ghi nhận file tham chiếu. Định dạng này hiện chưa được trích text tự động.");
  }

  scheduleSave();
  renderAll({ syncInputs: true });
  event.target.value = "";
}

function handleReferenceUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  state.project.referenceUploadName = file.name;
  scheduleSave();
  renderUploadStatuses();
  renderPublishPanel();
  showToast("Đã cập nhật tài liệu tham khảo cho dự án.");
  event.target.value = "";
}

function generateScriptDraft() {
  if (!state.project.topic.trim()) {
    showToast("Hãy nhập chủ đề trước khi tạo kịch bản.");
    setStep(0);
    elements.topicInput.focus();
    return;
  }

  const beatCount = durationSceneCountMap[state.project.duration] || 6;
  const topic = cleanupSentence(state.project.topic);
  const objective = cleanupSentence(state.project.objective || "truyền cảm hứng và tạo hành động cụ thể");
  const audience = state.project.audience.toLowerCase();
  const tone = state.project.tone.toLowerCase();

  const beatBank = [
    `Mở đầu bằng một câu hỏi hoặc một tình huống sát với ${audience}: ${topic}.`,
    `Nhân vật trung tâm xuất hiện trong bối cảnh học tập quen thuộc, mang theo một nỗi lo rất đời thường nhưng cũng rất dễ đồng cảm.`,
    `Câu chuyện đẩy nhanh vào thử thách chính. Những lúc muốn bỏ cuộc, nhân vật vẫn chọn tiếp tục và giữ kỷ luật mỗi ngày.`,
    `Mỗi nỗ lực nhỏ được tích lũy thành thay đổi rõ ràng. Nhân vật biết tìm sự hỗ trợ, tự điều chỉnh cách học và nhìn lại mục tiêu.`,
    `Khoảnh khắc bứt phá đến khi kết quả đầu tiên xuất hiện: sự tự tin, sự tiến bộ và niềm tin rằng cố gắng đúng cách sẽ tạo kết quả.`,
    `Thông điệp giáo dục được chạm lại: ${objective}. Nội dung được giữ chất giọng ${tone} và dễ nhớ.`,
    `Kết lại bằng một lời kêu gọi hành động ngắn gọn, rõ ràng, phù hợp với ${audience}.`,
  ];

  const selectedBeats = beatBank.slice(0, Math.max(4, Math.min(beatCount, beatBank.length)));
  state.script.title = buildSuggestedTitle(topic);
  state.script.content = selectedBeats.join("\n\n");
  state.scenes = [];
  state.prompts = [];
  scheduleSave();
  renderAll({ syncInputs: true });
  setStep(1);
  showToast("Đã tạo kịch bản mẫu từ brief hiện tại.");
}

function refineScriptForVoice() {
  if (!state.script.content.trim()) {
    showToast("Chưa có kịch bản để chuẩn hóa.");
    return;
  }

  const sentences = splitIntoSentences(state.script.content);
  state.script.content = sentences.map((sentence) => sentence.trim()).join("\n\n");
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Đã chuẩn hóa kịch bản thành nhịp đọc dễ nghe hơn.");
}

function clearScript() {
  state.script = { title: "", content: "" };
  state.scenes = [];
  state.prompts = [];
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Đã xóa kịch bản và các dữ liệu phụ thuộc.");
}

function generateScenesFromScript() {
  if (!state.script.content.trim()) {
    showToast("Hãy tạo kịch bản trước khi phân tách cảnh.");
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
      visual: `${profile.name}, ${profile.role}, ${state.project.visualStyle}, bối cảnh liên quan ${keywords || "chủ đề chính"}`,
      camera: cameraPresets[index % cameraPresets.length],
      transition: transitionPresets[index % transitionPresets.length],
      duration: durations[index],
    };
  });
  state.prompts = [];
  scheduleSave();
  renderAll();
  setStep(3);
  showToast("Đã tách kịch bản thành các cảnh có thời lượng.");
}

function rebalanceScenes() {
  if (!state.scenes.length) {
    showToast("Chưa có cảnh để cân bằng thời lượng.");
    return;
  }

  const durations = buildSceneDurations(state.scenes.length, getDurationSeconds(state.project.duration));
  state.scenes = state.scenes.map((scene, index) => ({ ...scene, duration: durations[index] }));
  scheduleSave();
  renderSceneStats();
  renderSceneList();
  renderPublishPanel();
  showToast("Đã cân lại thời lượng tất cả cảnh.");
}

function addScene() {
  const profile = getCharacterProfile();
  state.scenes.push({
    id: createId("scene"),
    title: `Cảnh ${state.scenes.length + 1}`,
    narration: "Bổ sung lời thoại hoặc mô tả nội dung cảnh tại đây.",
    visual: `${profile.name}, ${state.project.visualStyle}, bối cảnh giáo dục`,
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
  showToast("Đã thêm một cảnh mới.");
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
  showToast("Đã xóa cảnh.");
}

function generatePromptPack() {
  if (!state.scenes.length) {
    showToast("Hãy tạo phân cảnh trước khi tạo prompt.");
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
  showToast("Đã tạo gói prompt cho toàn bộ phân cảnh.");
}

function exportJson() {
  const payload = buildExportPayload();
  downloadFile("video-ai-production.json", JSON.stringify(payload, null, 2), "application/json");
  showToast("Đã tải gói JSON.");
}

function exportMarkdown() {
  downloadFile("video-ai-production.md", buildMarkdownExport(), "text/markdown");
  showToast("Đã tải file Markdown.");
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
            `### Cảnh ${index + 1}: ${scene.title}`,
            `- Thời lượng: ${scene.duration}s`,
            `- Hình ảnh: ${scene.visual}`,
            `- Camera: ${scene.camera}`,
            `- Chuyển cảnh: ${scene.transition}`,
            `- Lời dẫn: ${scene.narration}`,
          ].join("\n");
        })
        .join("\n\n")
    : "_Chưa có phân cảnh_";

  const promptBlock = state.prompts.length
    ? state.prompts
        .map((prompt, index) => {
          return [
            `### Prompt ${index + 1}`,
            `- Hình ảnh: ${prompt.image}`,
            `- Chuyển động: ${prompt.motion}`,
            `- Giọng đọc: ${prompt.voice}`,
            `- Phụ đề: ${prompt.subtitle}`,
            `- Negative prompt: ${prompt.negative}`,
          ].join("\n");
        })
        .join("\n\n")
    : "_Chưa có gói prompt_";

  return [
    `# ${state.script.title.trim() || "Brief Sản Xuất Video Giáo Dục AI"}`,
    "",
    "## 1. Cấu hình dự án",
    `- Chủ đề: ${safeProject.topic || "_"}`,
    `- Đối tượng: ${safeProject.audience}`,
    `- Thời lượng: ${safeProject.duration}`,
    `- Giọng đọc: ${safeProject.voice}`,
    `- Mục tiêu: ${safeProject.objective || "_"}`,
    `- Tông nội dung: ${safeProject.tone}`,
    `- Phong cách hình ảnh: ${safeProject.visualStyle}`,
    `- Định dạng video: ${safeProject.format}`,
    `- Ngôi kể: ${safeProject.narrationMode}`,
    `- Nền tảng tạo video: ${getPlatformLabel(safeProject.videoPlatform)}`,
    `- File kịch bản: ${safeProject.scriptUploadName || "Không có"}`,
    `- Tài liệu tham khảo: ${safeProject.referenceUploadName || "Không có"}`,
    `- API key: ${safeProject.apiKey}`,
    "",
    "## 2. Kịch bản",
    state.script.content.trim() || "_Chưa có kịch bản_",
    "",
    "## 3. Nhân vật",
    `- Tên: ${profile.name}`,
    `- Vai trò: ${profile.role}`,
    `- Ngoại hình: ${profile.appearance}`,
    `- Trang phục: ${profile.outfit}`,
    `- Tính cách: ${profile.personality}`,
    `- Giọng nói: ${profile.voiceStyle}`,
    "",
    "## 4. Phân cảnh",
    sceneBlock,
    "",
    "## 5. Gói prompt",
    promptBlock,
    "",
    "## 6. Ghi chú xuất bản",
    "- Gói này sẵn sàng để đưa sang công cụ tạo hình, video, lồng tiếng hoặc bàn giao cho biên tập viên.",
    "- Nếu sửa kịch bản hoặc phân cảnh, nên tạo lại gói prompt để đồng bộ.",
  ].join("\n");
}

function buildMasterCharacterPrompt() {
  const profile = getCharacterProfile();
  return [
    `${profile.name}, ${profile.role}.`,
    `Ngoại hình: ${profile.appearance}.`,
    `Trang phục và đạo cụ: ${profile.outfit}.`,
    `Tính cách: ${profile.personality}.`,
    `Chất giọng và phong thái thể hiện: ${profile.voiceStyle}.`,
    `Phong cách hình ảnh: ${state.project.visualStyle}.`,
    `Giữ cùng một gương mặt, tỷ lệ cơ thể, trang phục và nhận diện ở mọi cảnh.`,
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
  state.project = normalizeProjectState({
    ...state.project,
    ...preset,
  });
  scheduleSave();
  renderAll({ syncInputs: true });
  showToast("Đã nạp nhanh một preset dự án.");
}

function resetProject() {
  const confirmed = window.confirm("Bạn muốn xóa toàn bộ dữ liệu dự án hiện tại?");
  if (!confirmed) {
    return;
  }
  state = cloneState(defaultState);
  saveNow();
  renderAll({ syncInputs: true });
  showToast("Đã làm mới dự án.");
}

function setStep(index) {
  state.currentStep = clampNumber(index, 0, steps.length - 1);
  scheduleSave();
  renderPanels();
  renderStepper();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scheduleSave() {
  updateSaveBadge("Đang lưu...");
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
    elements.saveBadge.textContent = "Chưa lưu";
    return;
  }
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  elements.saveBadge.textContent = `Đã lưu lúc ${formatter.format(state.savedAt)}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return cloneState(defaultState);
    }
    const parsed = JSON.parse(raw);
    const project = normalizeProjectState({
      ...defaultState.project,
      ...(parsed.project || {}),
    });
    return {
      currentStep: clampNumber(parsed.currentStep, 0, steps.length - 1),
      savedAt: parsed.savedAt || null,
      project,
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
    Boolean(
      state.project.topic.trim() &&
        state.project.audience.trim() &&
        state.project.duration.trim() &&
        state.project.videoPlatform
    ),
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
    return "Cần bổ sung thêm để brief được đầy đủ.";
  }
  if (readyCount <= 3) {
    return "Đang ở mức có thể lên bản nháp nhanh, nhưng chưa nên bàn giao.";
  }
  if (readyCount === 4) {
    return "Chỉ còn gói prompt là có thể đưa sang pipeline sản xuất.";
  }
  return "Sẵn sàng bàn giao cho khâu render và dựng video.";
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
  const labels = ["Hook", "Bối cảnh", "Thử thách", "Nỗ lực", "Bứt phá", "Bài học", "CTA"];
  if (index < labels.length) {
    return labels[index];
  }
  return `Phần ${index + 1}/${total}`;
}

function inferSceneTitle(chunk, index) {
  const baseLabels = ["Mở cảnh", "Bối cảnh", "Xung đột", "Nỗ lực", "Chuyển biến", "Bứt phá", "Thông điệp", "Kết"];
  const keywords = extractKeywords(chunk).slice(0, 2).join(" | ");
  return keywords ? `${baseLabels[index] || `Cảnh ${index + 1}`}: ${keywords}` : baseLabels[index] || `Cảnh ${index + 1}`;
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
    result.push("Thêm một nhịp chuyển cảnh ngắn để nhấn mạnh thông điệp chính.");
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
    return "Không có";
  }
  return `${secret.slice(0, 4)}********${secret.slice(-2)}`;
}

function normalizeProjectState(project) {
  return {
    ...project,
    audience: normalizeAudienceValue(project.audience),
    voice: normalizeVoiceValue(project.voice),
    visualStyle: normalizeVisualStyleValue(project.visualStyle),
    tone: normalizeToneValue(project.tone),
    format: normalizeFormatValue(project.format),
    narrationMode: normalizeNarrationModeValue(project.narrationMode),
    videoPlatform: ensureAllowedValue(
      project.videoPlatform,
      videoPlatforms.map((item) => item.id),
      defaultState.project.videoPlatform
    ),
    scriptUploadName: String(project.scriptUploadName || ""),
    referenceUploadName: String(project.referenceUploadName || ""),
  };
}

function normalizeAudienceValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("tieu hoc")) {
    return "Tiểu học";
  }
  if (normalized.includes("sinh vien")) {
    return "Sinh viên";
  }
  if (normalized.includes("giao vien")) {
    return "Giáo viên";
  }
  if (normalized.includes("doanh nghiep")) {
    return "Doanh nghiệp";
  }
  if (normalized.includes("thpt")) {
    return "THPT";
  }
  return "THCS";
}

function normalizeVoiceValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("trung tinh") || normalized.includes("tre trung")) {
    return "Trung tính";
  }
  if (normalized.includes("mien trung") || normalized.includes("trung")) {
    return "Miền Trung";
  }
  if (normalized.includes("mien nam") || normalized.includes("nam")) {
    return "Miền Nam";
  }
  if (normalized.includes("mien bac") || normalized.includes("bac")) {
    return "Miền Bắc";
  }
  return defaultState.project.voice;
}

function normalizeVisualStyleValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("pixar")) {
    return "Hoạt hình 3D Pixar";
  }
  if (normalized.includes("motion graphics")) {
    return "Motion graphics giáo dục";
  }
  if (normalized.includes("cinematic")) {
    return "Cinematic classroom";
  }
  if (normalized.includes("2d")) {
    return "2D giáo dục hiện đại";
  }
  if (normalized.includes("realistic")) {
    return "Realistic classroom";
  }
  return defaultState.project.visualStyle;
}

function normalizeToneValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("vuot kho")) {
    return "Vượt khó và bền bỉ";
  }
  if (normalized.includes("truyen cam hung")) {
    return "Truyền cảm hứng";
  }
  if (normalized.includes("gan gui")) {
    return "Gần gũi, đồng hành";
  }
  if (normalized.includes("nghiem tuc")) {
    return "Nghiêm túc, học thuật";
  }
  return defaultState.project.tone;
}

function normalizeFormatValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("tiktok") || normalized.includes("reel")) {
    return "TikTok / Reel (9:16)";
  }
  if (normalized.includes("square") || normalized.includes("vuong")) {
    return "Vuông (1:1)";
  }
  return "YouTube (16:9)";
}

function normalizeNarrationModeValue(value) {
  const normalized = toAsciiSearchText(value);
  if (normalized.includes("ke chuyen")) {
    return "Kể chuyện";
  }
  if (normalized.includes("giai thich")) {
    return "Giải thích bài học";
  }
  if (normalized.includes("doi thoai")) {
    return "Đối thoại";
  }
  return "Tường thuật";
}

function ensureAllowedValue(value, allowedValues, fallback) {
  return allowedValues.includes(value) ? value : fallback;
}

function getPlatformLabel(platformId) {
  const platform = videoPlatforms.find((item) => item.id === platformId);
  return platform ? platform.name : "Veo3";
}

function isPlainTextFile(filename) {
  return /\.(txt|md)$/i.test(filename);
}

function stripFileExtension(filename) {
  return filename.replace(/\.[^.]+$/, "");
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
