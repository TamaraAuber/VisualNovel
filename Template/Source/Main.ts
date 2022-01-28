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
    }
  };

  export let location = {
    //ToDo: schauen ob überhaupt benötigt wird
    blackscreen: {
      name: "blackscreen",
      background: "Images/Locations/blackscreen.png"
    },
    menuErklaerung: {
      name: "menuErklaerung",
      background: "Images/Locations/TestLocation1.png"
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
    drachenHoehleGang: {
      name: "drachenhoehleGang",
      background: "Images/DragonCave/DragonCave1.1.png"
    },
    drachenHoehle: {
      name: "drachenhoehle",
      background: "Images/DragonCave/DragonCave2.1.png"
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
    }
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
        afraid: "Images/Fairy/Fairy_P2.png"
      }
    }
  }


  //ToDO:item

  //ToDO:sound


  export let dataForSave = {
    nameProtagonist: "",
    drunknessLevel: 0,
    neededLongSleep: 0,   //0 Player wakes up early; 1 Player slept until afternoon
    givenEnding: ""
  }

  //Menü
  let inGameMenu = {
   //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
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
    }
  }

  export function addDrunknessLevel() {
    console.log("Old DrunknessLevel " + dataForSave.drunknessLevel);
    dataForSave.drunknessLevel = dataForSave.drunknessLevel + 1;
    console.log("New DrunknessLevel " + dataForSave.drunknessLevel);
    SetDrunknessSight();

    if (dataForSave.drunknessLevel == 3) {
      dataForSave.neededLongSleep = 1;
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
    switch(dataForSave.drunknessLevel) {
      case 0:
        document.getElementById("drunknessSight").setAttribute("style", "background-image: none;");
        break;
      case 1: 
      document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/Filter_Night1.png');");
        break;
      case 2:
        document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/Filter_Night1.png');");
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
      { scene: Gasthaus, name: "Gasthaus" },
      {id: "Laden", scene: Laden, name: "Laden"},
      //{ scene: Unterwegs2Fee, name: "Unterwegs2Fee"},
      //{ scene: Drachenhort, name: "Drachenhort"},
      //{id: "End", scene: Ende, name: "Ende"}
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}