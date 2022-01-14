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
      background: "Images/Locations/TestLocation2.png"
    },
    gasthausBar: {
      name: "gasthausBar",
      background: "Images/Tavern/Bar_Background.png"
    },
    laden: {
      name: "Laden",
      background: "Images/Shop/Shop_Background2.png"
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
        sleeping: "",
        angry: "Images/Dragon/D_Angry.png",
        happyWithBaby: "Images/Dragon/D_WithBaby.png"
      }
    },
    fairy: {
      name: "",
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
    nameProtagonist: ""
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



  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    let scenes: ƒS.Scenes = [
      //{ scene: Prolog, name: "Prolog" },
      //{ scene: Gasthaus, name: "Gasthaus" },
      //{ scene: Laden, name: "Laden"},
      //{ scene: Drachenhort, name: "Drachenhort"},
      { scene: Unterwegs2Fee, name: "Unterwegs2Fee"}
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}