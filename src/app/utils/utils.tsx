import * as THREE from "three";

export const GenerateInitMaterial = () => {
  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });

  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    metalness: 1,
    roughness: 1,
    transparent: false,
    opacity: 1,
  });

  const falloutBoyTexture = new THREE.TextureLoader().load("FalloutBoy.png");
  falloutBoyTexture.flipY = false;

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0.5,
    envMapIntensity: 1,
    transparent: true,
    map: falloutBoyTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};

export const GenerateAnimations = (scene: any, colors: any, cristalMaterial: any, sodaMaterial: any, brandMaterial: any, textures: any) => {
  const Animations = [
    // Pagina 0 - Inicia animación
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 0,
      animationProperties: {
        x: 0,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 0,
      animationProperties: {
        y: 0,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 0,
      animationProperties: {
        cristal: "#8c8c8c",
        soda: "#000",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 1,
      animationProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["FalloutBoy"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 0.1,
      animationProperties: {
        background: "#000000",
      },
    },
    // Pagina 1 - Nuke Cola
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 2,
      animationProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 2,
      animationProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 2,
      animationProperties: {
        cristal: "#555555",
        soda: "#000",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 3,
      animationProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Classic"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Classic_Card"),
      pointTime: 2.5,
      animationProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 2.1,
      animationProperties: {
        background: "#F37070",
      },
    },
    // Pagina 2 - Quantum Cola
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 4,
      animationProperties: {
        x: -1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 4,
      animationProperties: {
        y: -Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 4,
      animationProperties: {
        cristal: "#108587",
        soda: "#D0FFFF",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 5,
      animationProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Quantum"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Quantum_Card"),
      pointTime: 4.5,
      animationProperties: {
        opacity: 1,
        left: "65%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Classic_Card"),
      pointTime: 4.5,
      animationProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 4.1,
      animationProperties: {
        background: "#71C4F4",
      },
    },
    // Pagina 3 - Sunset Cola
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 6,
      animationProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 6,
      animationProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 6,
      animationProperties: {
        cristal: "#7E3810",
        soda: "#602A0C",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 7,
      animationProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Sunset"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Sunset_Card"),
      pointTime: 6.5,
      animationProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Quantum_Card"),
      pointTime: 6.5,
      animationProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 6.1,
      animationProperties: {
        background: "#F5C771",
      },
    },
  ];

  return Animations;
};

export const LoadTextures = (imagePaths: any[]) => {
  const textureLoader = new THREE.TextureLoader();
  const textures: any = {};

  imagePaths.forEach((img) => {
    const path = `/${img}.png`;
    const texture = textureLoader.load(path);

    texture.flipY = false;
    textures[img] = texture;
  });

  return textures;
}
