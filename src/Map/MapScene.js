import Phaser from "phaser";

const chapterElemets = [
  {
    id: "intro",
    ko: "소개",
    en: "INTRODUCTION",
    fr: "le camp de geoje",
  },
  {
    id: "ch1",
    ko: "거제 포로수용소",
    en: "the geoje pow camp",
    fr: "le camp de geoje",
  },
  {
    id: "ch2",
    ko: "수용소에서 역사공원까지",
    en: "from the camp to the historical park",
    fr: "du camp au parc historique",
  },
  {
    id: "ch3",
    ko: "귀 기울인 과거",
    en: "a listening past",
    fr: "un passé écouté",
  },
];

function renderUpperCase(comp) {
  let currentLang = localStorage.getItem("i18nextLng") || "en";
  let outputText = chapterElemets.find(chapter => chapter.id === comp)[currentLang];
  if (typeof outputText === 'string') {
    return outputText.toUpperCase();
  }
}

const mapElementsData = [
  {
    id: "intro",
    x: 0.49,
    y: 0.85,
    name: renderUpperCase("intro"),
    asset: "introBefore",
    targetWidth: 300,
    hover: { asset: "introAfter", alpha: 0.7, yOffset: -5, scaleFactor: 0.4, tint: 0xffefc4 },
    out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff },
  },
  {
    id: "ch1",
    x: 0.5,
    y: 0.5,
    name: renderUpperCase("ch1"),
    asset: "chapter1Before",
    sound: "ch1Hover",
    targetWidth: 300,
    path: "/view/ch1",
    hover: { asset: "chapter1After", alpha: 0.7, yOffset: -8, scaleFactor: 1.2, tint: 0xddeeff },
    out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff },
  },
  {
    id: "ch2",
    x: 0.25,
    y: 0.5,
    name: renderUpperCase("ch2"),
    asset: "chapter2Before",
    sound: "ch2Hover",
    targetWidth: 400,
    path: "/view/ch2",
    hover: { asset: "chapter2After", alpha: 0.7, yOffset: -8, scaleFactor: 1, tint: 0xddeeff },
    out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff },
  },
  {
    id: "ch3",
    x: 0.8,
    y: 0.5,
    asset: "chapter3Before",
    name: renderUpperCase("ch3"),
    sound: "ch3Hover",
    targetWidth: 300,
    path: "/view/ch3",
    hover: { asset: "chapter3After", alpha: 0.7, yOffset: -8, scaleFactor: 1.2, tint: 0xddeeff },
    out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff },
  },
];

export class MapScene extends Phaser.Scene {
  constructor() {
    super({ key: "MapScene" });
    this.interactiveElements = [];
    this.elementsById = {};
    this.infoText = null;
    this.currentHoverSound = null;
  }

  // FIX: Merged the two preload functions into one.
  preload() {
    // === IMAGE ASSETS ===
    this.load.image("mapBackground", "/assets/img/background.png");
    this.load.image("introBefore", "/assets/img/introBefore.png");
    this.load.image("introAfter", "/assets/img/introAfter.png");
    this.load.image("chapter1Before", "/assets/img/ch1Before.png");
    this.load.image("chapter1After", "/assets/img/ch1After.png");
    this.load.image("chapter2Before", "/assets/img/ch2Before.png");
    this.load.image("chapter2After", "/assets/img/ch2After.png");
    this.load.image("chapter3Before", "/assets/img/ch3Before.png");
    this.load.image("chapter3After", "/assets/img/ch3After.png");

    // === AUDIO ASSETS ===
    // Using local assets as discussed to avoid CORS issues during development.
    this.load.audio("ch1Hover", "/assets/audio/Chant.m4a");
    this.load.audio("ch2Hover", "/assets/audio/battle.m4a");
    this.load.audio("ch3Hover", "/assets/audio/lively_classroom.mp3");
  }

  create() {
    const { width: gameWidth, height: gameHeight } = this.scale;

    // Add and scale background image
    const mapBackground = this.add.image(gameWidth / 2, gameHeight / 2, "mapBackground");
    const bgTexture = this.textures.get("mapBackground");
    const imageRatio = bgTexture.getSourceImage().width / bgTexture.getSourceImage().height;
    const gameRatio = gameWidth / gameHeight;

    if (gameRatio > imageRatio) {
      mapBackground.setScale(gameWidth / bgTexture.getSourceImage().width);
    } else {
      mapBackground.setScale(gameHeight / bgTexture.getSourceImage().height);
    }

    // Iterate over the data to create each map element
    mapElementsData.forEach((data) => {
      let element;
      let baseScale = 1;

      // ENHANCEMENT: Calculate absolute X and Y based on game dimensions
      const elementX = gameWidth * data.x;
      const elementY = gameHeight * data.y;

      element = this.add.sprite(elementX, elementY, data.asset).setInteractive();
      element.originalTint = element.tintTopLeft;
      element.originalY = elementY; // Store original Y for yOffset transitions

      if (data.targetWidth && element.texture && element.texture.key !== "__MISSING") {
        const textureWidth = element.texture.getSourceImage().width;
        if (textureWidth > 0) {
          baseScale = data.targetWidth / textureWidth;
        } else {
          console.warn(`Texture width for asset "${data.asset}" is 0. Cannot apply targetWidth.`);
          baseScale = 1;
        }
      } else if (data.initialScale) {
        baseScale = data.initialScale;
      }
      element.setScale(baseScale);

      element.setData("info", data);
      this.interactiveElements.push(element);
      this.elementsById[data.id] = element;

      this.setupElementTransitions(element, data, baseScale);
    });

    this.infoText = this.add
      .text(10, 10, "Hover over a building", {
        font: "16px Arial",
        fill: "#ffffff",
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: { x: 8, y: 5 },
      })
      .setDepth(100)
      .setVisible(false);
  }

  setupElementTransitions(element, config, currentBaseScale) {
    const restingScale = currentBaseScale;
    const hoverProps = config.hover || {};

    element.restingTexture = config.asset;
    if (hoverProps.asset) element.hoverTexture = hoverProps.asset;

    element.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";

      // --- Sound effect logic ---
      if (this.currentHoverSound && this.currentHoverSound.isPlaying) {
        this.currentHoverSound.stop();
      }
      if (config.sound) {
        this.currentHoverSound = this.sound.add(config.sound);
        this.currentHoverSound.play();
      }
      // --- End sound logic ---

      const infoTextY = element.y - element.displayHeight / 2 - 10;
      this.infoText
        .setText(config.name || config.id)
        .setPosition(element.x, infoTextY)
        .setOrigin(0.5, 1)
        .setVisible(true);

      const tweenConfig = {};
      let applyTween = false;

      if (hoverProps.scaleFactor !== undefined) {
        tweenConfig.scale = restingScale * hoverProps.scaleFactor;
        applyTween = true;
      }
      if (hoverProps.alpha !== undefined) {
        tweenConfig.alpha = hoverProps.alpha;
        applyTween = true;
      }
      if (hoverProps.yOffset !== undefined) {
        tweenConfig.y = element.originalY + hoverProps.yOffset;
        applyTween = true;
      }
      if (hoverProps.tint !== undefined) {
        element.setTint(hoverProps.tint);
      }

      if (applyTween) {
        this.tweens.add({
          targets: element,
          duration: 200,
          ease: "Power1",
          ...tweenConfig,
        });
      }

      if (element.hoverTexture) element.setTexture(element.hoverTexture);
    });

    element.on("pointerout", () => {
      // --- Sound effect logic ---
      if (this.currentHoverSound && this.currentHoverSound.isPlaying) {
        this.currentHoverSound.stop();
      }
      // --- End sound logic ---

      this.game.canvas.style.cursor = "default";
      this.infoText.setVisible(false);

      const outProps = config.out || {};
      const tweenConfig = {};
      let applyTween = false;

      tweenConfig.scale = restingScale * (outProps.scaleFactor !== undefined ? outProps.scaleFactor : 1);
      applyTween = true;

      if (outProps.alpha !== undefined) {
        tweenConfig.alpha = outProps.alpha;
      } else if (config.hover && config.hover.alpha !== undefined) {
        tweenConfig.alpha = 1;
      }

      if (config.hover && config.hover.yOffset !== undefined) {
        tweenConfig.y = element.originalY + (outProps.yOffset || 0);
      }

      if (outProps.tint !== undefined) {
        element.setTint(outProps.tint);
      } else if (config.hover && config.hover.tint !== undefined) {
        element.clearTint();
      }

      if (applyTween) {
        this.tweens.add({
          targets: element,
          duration: 150,
          ease: "Power1",
          ...tweenConfig,
        });
      }

      element.setTexture(element.restingTexture);
    });

    element.on("pointerdown", () => {
      console.log(
        `Phaser: Clicked on "${config.name || config.id}". Path: "${config.path}"`
      );
      if (config.path) {
        this.game.events.emit("navigateToPage", config.path);
      } else {
        console.warn(`Phaser: No navigation path defined for element ID "${config.id}"`);
      }
    });
  }

  update() {}
}