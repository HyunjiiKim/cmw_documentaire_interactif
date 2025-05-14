import Phaser from "phaser";

const mapElementsData = [
    {
        id: "intro",
        x: 300,
        y: 200,
        asset: "buildingElement",
        name: "intro",
        targetWidth: 200,
        path: "/view/intro",
        hover: { alpha: 0.7, yOffset: -5, scaleFactor: 1.15, tint: 0xffefc4 }, 
        out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff }
    },
    {
        id: "ch1",
        x: 550,
        y: 300,
        asset: "buildingElement",
        name: "ch1",
        targetWidth: 200,
        path: "/view/ch1",
        hover: { alpha: 0.7, yOffset: -8, scaleFactor: 1.2, tint: 0xddeeff },
        out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff }
    },
    {
        id: "ch2",
        x: 320, 
        y: 500,
        asset: "buildingElement",
        name: "ch2",
        targetWidth: 200,
        path: "/view/ch2",
        hover: { alpha: 0.7, yOffset: -8, scaleFactor: 1.2, tint: 0xddeeff },
        out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff }
    },    {
        id: "ch3",
        x: 780,
        y: 600,
        asset: "buildingElement",
        name: "ch3",
        targetWidth: 200,
        path: "/view/ch3",
        hover: { alpha: 0.7, yOffset: -8, scaleFactor: 1.2, tint: 0xddeeff },
        out: { alpha: 1, yOffset: 0, scaleFactor: 1, tint: 0xffffff }
    },
];

export class MapScene extends Phaser.Scene {
    constructor() {
        super({ key: "MapScene" }); 
        this.interactiveElements = [];
        this.elementsById = {};
        this.infoText = null;
    }

    preload() {
        this.load.image("mapBackground", "/assets/img/mapBg.png");
        this.load.image("buildingElement", "/assets/img/Building.png");
    }

    create() {
        // Add background image, centered
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "mapBackground");

        // Iterate over the data to create each map element (building)
        mapElementsData.forEach(data => {
            let element;
            let baseScale = 1; // Default scale if targetWidth isn"t applicable

            // Create sprite for the building
            element = this.add.sprite(data.x, data.y, data.asset).setInteractive();
            element.originalTint = element.tintTopLeft; // Store original tint (usually 0xffffff for no tint)
            element.originalY = data.y; // Store original Y for yOffset transitions

            // Apply targetWidth for initial sizing, maintaining aspect ratio
            if (data.targetWidth && element.texture && element.texture.key !== "__MISSING") {
                const textureWidth = element.texture.getSourceImage().width;
                if (textureWidth > 0) {
                    baseScale = data.targetWidth / textureWidth; // Calculate uniform scale factor
                } else {
                    console.warn(`Texture width for asset "${data.asset}" is 0. Cannot apply targetWidth.`);
                    baseScale = 1; // Fallback to avoid division by zero
                }
            } else if (data.initialScale) { // Fallback to initialScale if targetWidth not specified or applicable
                baseScale = data.initialScale;
            }
            element.setScale(baseScale); // Apply the calculated or default scale

            element.setData("info", data); // Store the configuration data on the Phaser game object
            this.interactiveElements.push(element);
            this.elementsById[data.id] = element; // Store element by its ID for easy access

            // Set up hover, out, and click interactivity for this element
            this.setupElementTransitions(element, data, baseScale);
        });

        // Create a text object for displaying information on hover
        this.infoText = this.add.text(10, 10, "Hover over a building", {
            font: "16px Arial",
            fill: "#ffffff", // White text
            backgroundColor: "rgba(0,0,0,0.7)", // Semi-transparent black background
            padding: { x: 8, y: 5 }, // Padding around the text
            // borderRadius: 4, // If you have a Phaser version that supports this for text bg
        }).setDepth(100); // Ensure infoText is on top of other elements
        this.infoText.setVisible(false); // Initially hidden
    }

    setupElementTransitions(element, config, currentBaseScale) {
        // currentBaseScale is the scale applied in create() (derived from targetWidth or initialScale)
        const restingScale = currentBaseScale;

        element.on("pointerover", () => {
            this.game.canvas.style.cursor = "pointer";
            // Show and update info text
            // Adjust info text Y position based on the element"s current scale to avoid overlap
            const infoTextY = element.y - (element.displayHeight / 2) - 10; // Position above the element
            this.infoText.setText(config.name || config.id).setPosition(element.x, infoTextY).setOrigin(0.5, 1).setVisible(true);


            const hoverProps = config.hover || {};
            const tweenConfig = {}; // Properties to tween will be added here
            let applyTween = false;

            // Apply hover effects defined in config
            if (hoverProps.scaleFactor !== undefined) {
                tweenConfig.scale = restingScale * hoverProps.scaleFactor;
                applyTween = true;
            }
            if (hoverProps.alpha !== undefined) {
                tweenConfig.alpha = hoverProps.alpha;
                applyTween = true;
            }
            if (hoverProps.yOffset !== undefined) {
                // Ensure yOffset is relative to the originalY, not the currently tweened Y
                tweenConfig.y = element.originalY + hoverProps.yOffset;
                applyTween = true;
            }
            if (hoverProps.tint !== undefined) {
                element.setTint(hoverProps.tint); // Tint is usually an immediate effect
            }

            // Add the tween if there are properties to animate
            if (applyTween) {
                this.tweens.add({
                    targets: element,
                    duration: 200, // Duration of hover animation in ms
                    ease: "Power1", // Easing function for the animation
                    ...tweenConfig    // Spread the properties to tween (scale, alpha, y)
                });
            }
        });

        element.on("pointerout", () => {
            this.game.canvas.style.cursor = "default";
            // Hide info text
            this.infoText.setVisible(false);

            const outProps = config.out || {};
            const tweenConfig = {}; // Properties to tween back
            let applyTween = false;

            // Revert to restingScale multiplied by out.scaleFactor (usually 1 for original size)
            tweenConfig.scale = restingScale * (outProps.scaleFactor !== undefined ? outProps.scaleFactor : 1);
            applyTween = true; // Always tween scale back

            if (outProps.alpha !== undefined) {
                tweenConfig.alpha = outProps.alpha;
            } else if (config.hover && config.hover.alpha !== undefined) {
                // If hover changed alpha and out doesn"t specify, revert to default (usually 1)
                tweenConfig.alpha = 1;
            }

            if (config.hover && config.hover.yOffset !== undefined) {
                // If yOffset was applied on hover, revert to originalY plus any "out" yOffset
                tweenConfig.y = element.originalY + (outProps.yOffset || 0);
            }

            // Handle tint reset
            if (outProps.tint !== undefined) {
                element.setTint(outProps.tint);
            } else if (config.hover && config.hover.tint !== undefined) {
                // If hover applied a tint and "out" doesn"t specify one, clear it
                element.clearTint(); // Or setTint(element.originalTint)
            }

            if (applyTween) {
                this.tweens.add({
                    targets: element,
                    duration: 150, // Duration of mouse out animation
                    ease: "Power1",
                    ...tweenConfig
                });
            }
        });

        // Handle click (pointerdown) event for navigation
        element.on("pointerdown", () => {
            console.log(`Phaser: Clicked on "${config.name || config.id}". Path: "${config.path}"`);
            if (config.path) {
                // Emit a custom event that the React component (PhaserMap.jsx) will listen for
                this.game.events.emit("navigateToPage", config.path);
            } else {
                console.warn(`Phaser: No navigation path defined for element ID "${config.id}"`);
            }
        });
    }

    update() {
    }
}