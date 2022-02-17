namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory Main.ts starting");


  export let transition = {
    transitionOne: {
      duration: 1,
      alpha: "Transitions/04.png",
      edge: 0.4
    }, 
    transitionTwo: {
      duration: 1,
      alpha: "Transitions/05.png",
      edge: 1
    },
    transitionThree: {
      duration: 1,
      alpha: "Transitions/02.png",
      edge: 1
    },
    transitionKnockOut: {
      duration: 0.05,
      alpha: "Transitions/01.png",
      edge: 1
    }
  };

  export let location = {
    blackscreen: {
      name: "blackscreen",
      background: "Images/Locations/blackscreen.png"
    },
    gasthausHauptraum: {
      name: "gasthausHauptraum",
      background: "Images/Tavern/Tavern_Entrance1.png"
    },
    gasthausBar: {
      name: "gasthausBar",
      background: "Images/Tavern/Bar_Background.png"
    },
    laden: {
      name: "Laden",
      background: "Images/Shop/Shop_Background2.png"
    },
    feld: {
      name: "feld",
      background: "Images/OnTheRoad/Field1.png"
    },
    wald: {
      name: "wald",
      background: "Images/OnTheRoad/Forrest_Background1.png"
    },
    waldGespiegelt: {
      name: "waldGespiegelt",
      background: "Images/OnTheRoad/Forrest_Background_mirrored.png"
    },
    waldUpsideDown: {
      name: "waldUpsideDown",
      background: "Images/OnTheRoad/Forrest_Background_UpsideDown.png"
    },
    drachenHoehleGang: {
      name: "drachenhoehleGang",
      background: "Images/DragonCave/DragonCave1.1.png"
    },
    drachenHoehle: {
      name: "drachenhoehle",
      background: "Images/DragonCave/DragonCave2.1.png"
    },
    drachenHoehleEingang: {
      name: "drachenHoehleEingang",
      background: "Images/DragonCave/CaveEntrance1.png"
    },
    talGutesWetter: {
      name: "talGutesWetter",
      background: "Images/OnTheRoad/ValleyGoodWeather1.png"
    },
    talSchlechtesWetter: {
      name: "talSchlechtesWetter",
      background: "Images/OnTheRoad/ValleyBadWeather1.png"
    }
  };

  export let roomInventory = {
    gasthausBarCounter: {
      name: "gasthausBarCounter",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Tavern/Bar_BarCounter.png"
      }
    },
    ladenTheke: {
      name: "ladenTheke",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Shop/Shop_ShopCounter2.png"
      }
    },
    waldBaeume: {
      name: "waldBaeume",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/OnTheRoad/Forrest_Trees1.png"
      }
    },
    filterNacht: {
      name: "filterNacht",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Filter/Filter_Night1.png"
      }
    },
    filterLicht: {
      name: "filterLicht",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Filter/LightFilter1.png"
      }
    },
    sonnenstrahlen: {
      name: "sonnenstrahlen",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/DragonCave/DragonCave_Sunlight1.png"
      }
    },
    metKrug: {
      name: "MetKrug",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Items/Item_MeadMug1.png"
      }
    },
    metKrug2: {
      name: "MetKrug2",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Items/Item_MeadMug2.png"
      }
    },
    metKrug3: {
      name: "MetKrug3",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Items/Item_MeadMug3.png"
      }
    },
    stone: {
      name: "Stein",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Items/Item_DragonEgg1.png",
      }
    },
    blitze: {
      name: "blitze",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/OnTheRoad/Lightning1.png",
      }
    },
  }

  export let character = {
    narrator: {
      name: ""
    },
    dwarf: {
      name: "Andvari",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Dwarf/DP1.png",
        thinking: "Images/Dwarf/DP2.png"
      }
    },
    tiefling: {
      name: "Ruby",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Tiefling/TP1.png",
        thinking: "Images/Tiefling/TP2.png"
      }
    },
    dragon: {
      name: "Drache",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        sleeping: "Images/Dragon/Dragon_Sleeping.png",
        angry: "Images/Dragon/D_Angry.png",
        happyWithBaby: "Images/Dragon/D_WithBaby.png"
      }
    },
    fairy: {
      name: "fairy",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Fairy/Fairy_P3.png",
        grateful: "Images/Fairy/Fairy_P1.png",
        afraid: "Images/Fairy/Fairy_P2_2.png"
      }
    },
    goblinGroup: {
      name: "goblinGroup",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Goblin/Goblin_GoblinGroup1.png",
        night: "Images/Goblin/Goblin_GoblinGroup_Night1.png",
        nightUpsideDown: "Images/Goblin/Goblin_GoblinGroup_Night_UpsideDown.png",
        sleepingNight: "Images/Goblin/Goblin_GoblinGroupSleeping_Night1.png",
        sleepingNightUpsideDown: "Images/Goblin/Goblin_GoblinGroupSleeping_Night_UpsideDown.png"
      }
    },
    goblinLeader: {
      name: "goblinLeader",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "Images/Goblin/Goblin_Leader1.png"
      }
    }
  }


  //ToDO:sound

  export let items = {
    cloak: {
      name: "Umhang",
      description: "„Er schützt dich vor nichts (abgesehen von dem Wetter vielleicht), er hilft dir nicht im Kampf, aber du siehst einfach fabelhaft aus!“",
      image: "Images/Items/Item_Cloak1.png"
    },
    staff: {
      name: "Stab",
      description: "„Macht nicht viel her, kann aber durchaus effektiv sein, wenn es in die richtigen Hände fällt“",
      image: "Images/Items/Item_Staff1.png"
    },
    sword: {
      name: "Schwert",
      description: "„Eine schmuckvoll verzierte Waffe, die schon viele Besitzer und noch mehr Kämpfe erlebt hat“",
      image: "Images/Items/Item_Sword1.png"
    },
    stone: {
      name: "Stone",
      description: "Mysteriöser Stein",
      image: "Images/Items/Item_DragonEgg1.png"
    }
  };


  export let dataForSave = {
    drunknessLevel: 0,
    neededLongSleep: false,         //false Player wakes up early; true Player slept until afternoon
    ownsPlayerWaepon: true,
    longTimeWithGoblins: true,
    badDragonEndingNo: 0        
  }

  //Menü
  let inGameMenu = {
   //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
   credits: "Credits",
   save: "Save",
   load: "Load",
   close: "Close"
  }

  let gameMenu: ƒS.Menu;

  //gibt an, ob menü offen ist oder geschlossen
  let menu: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
        case inGameMenu.credits:
          showCredits();
          break;
    }
  }

  //Shortcuts für's Menü
  document.addEventListener("keydown", handleKeyPress);
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    //_event.code gibt an, welche Taste gedrückt wurde
    switch(_event.code) {
      //kann sein, dass x und y vertauscht, weil englische Tastatur
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
      case ƒ.KEYBOARD_CODE.M:
        console.log("Open/Close");
        if(menu) {
          console.log("Close");
          await gameMenu.close();
          menu = false;
        } else {
          console.log("Open");
          await gameMenu.open();
          menu = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.C:
        showCredits();
          break;
    }
  }

  export function showCredits() {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hier könnten jetzt Credits stehen.");
  }

  export function addDrunknessLevel() {
    console.log("Old DrunknessLevel " + dataForSave.drunknessLevel);
    dataForSave.drunknessLevel = dataForSave.drunknessLevel + 1;
    console.log("New DrunknessLevel " + dataForSave.drunknessLevel);
    SetDrunknessSight();

    if (dataForSave.drunknessLevel == 3) {
      dataForSave.neededLongSleep = true;
    }
    console.log("did Player need long sleep? " + dataForSave.neededLongSleep);
  }

  export function removeDrunknessLevel() {
    console.log("Old DrunknessLevel " + dataForSave.drunknessLevel);
    dataForSave.drunknessLevel = 0;
    console.log("New DrunknessLevel " + dataForSave.drunknessLevel);
    SetDrunknessSight();
  }

  export function SetDrunknessSight() {

    //andere Bilder + andere Größe bei den Bildern
    switch(dataForSave.drunknessLevel) {
      case 0:
        document.getElementById("drunknessSight").setAttribute("style", "background-image: none;");
        break;
      case 1: 
      document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter1.png');");
        break;
      case 2:
        document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter2.png');");
        break;
      case 3:
        document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter3.png');");
        break;
    }
  }


//------Animations------

  export function fromLeftToRight(startX: number, startY: number, endX: number, endY: number): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(startX, startY) },
      end: { translation: ƒS.positionPercent(endX, endY) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

//----------------------

  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    let scenes: ƒS.Scenes = [
      //{ scene: Prolog, name: "Prolog" },
      //{ scene: Gasthaus, name: "Gasthaus" },
      //{id: "Laden", scene: Laden, name: "Laden"},
      {scene: Unterwegs1Goblins, name: "Unterwegs1Goblins"},
      {id: "Unterwegs1GoblinsAttack", scene: Unterwegs1GoblinsAttack, name: "Unterwegs1GoblinsAttack"},
      {id: "Unterwegs2Fee", scene: Unterwegs2Fee, name: "Unterwegs2Fee"},
      { scene: Drachenhort, name: "Drachenhort"},
      {id: "EndingHappyDragon", scene: EndingHappyDragon, name: "EndingHappyDragon"},
      {id: "EndingSadDragon", scene: EndingSadDragon, name: "EndingSadDragon"},
      {id: "EndingBadDragon", scene: EndingBadDragon, name: "EndingBadDragon"},
      {id: "EndingBadGoblins", scene: EndingBadGoblins, name: "EndingBadGoblins"},
      {id: "Epilog", scene: Epilog, name: "Epilog"}
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}