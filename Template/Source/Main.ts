namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transitions
  export let transitions = {
    clock: {
      duration: 1,
      alpha: "Transitions/testTransition.jpg",
      edge: 1                                   //Härtegrad der Transition
    }
  };

  export let sound = {
    // music, am besten mp3, weil es am besten unterstützt wird, aber theorethisch egal
    backgroundTheme: "",
    mainTheme: ""
  };

  export let locations = {
    beach: {
      name: "Beach",
      background: "Images/Strand.png"
    },
    beach2: {
      name: "Beach2",
      background: "Images/Strand2.jpg"
    },
    beach3: {
      name: "Beach3",
      background: "Images/Strand3.jpg"
    }
  }

  export let characters = {
    narrator: {
      name: "Bob",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: ".Images/Character/...",
        happy: "",
        angry: ""
      }
    },
    Stickman: {
      name: "Stickman",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        meh: "Images/Stickman/Stickmen_Meh.png",
        happy: "Images/Stickman/Stickmen_Happy.png",
        thinking: "Images/Stickman/Stickmen_Thinking.png",
        dancing: "Images/Stickman/Stickmen_Dancing.png"
      }
    }
  }


  //Items
  export let items = {
    pen: {
      name: "roter Buntstift",
      description: "a red pen",
      image: "./Images/Items/redPen"
    } 
  }


  //alle Sachen, die gespeichert werden sollen, um evtl. später weiter zu spielen
  export let dataForSave = {
    nameProtagonist: "",
    //kann man nutzen um zu entscvheiden zu welcher nächsten Szene der Nutzer kommt
    points: 1
  };


  //Menü

  let inGameMenu  = {
    //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
    save: "Save",
    load: "Load",
    close: "Close",
    //open: "Open"
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
      /*case inGameMenu.open:
        gameMenu.open();
        menu = true;
        break;*/
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


  function jirkaAnimation(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0)},
      end: {translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red", 0)},
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    }
  };

  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100) },
      end: { translation: ƒS.positionPercent(200, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenuCSSClass");

    let scenes: ƒS.Scenes = [
      //Szenenstruktur -> Reihenfolge hier bestimmt Ablaufreihenfolge der Szenen
      //hier: linear
      //{ scene: Scene, name: "Scene" }
      { scene: Practice, name: "Practice"}

      //man kann Szenen auch ids geben und sie somit aufrufen: mit return End;
      //{id: "End", scene: End, name: "End"}
      //man kann eine Szene auch mit einer 2. id belegen; und auch direkt in der Szene die nächste angeben
      //{id: "EndNummero2", scene: End, name: "End", next: "Ende"}
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}