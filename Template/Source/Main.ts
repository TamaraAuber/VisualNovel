namespace Novel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory Main.ts starting");


  export let transition = {
    transitionOne: {
      duration: 1,
      alpha: "Transitions/02.jpg",
      edge: 1
    }
  };

  export let location = {
    blackscreen: {
      name: "blackscreen",
      background: "Images/Locations/TestLocation1.png"
    },
    gasthausHauptraum: {
      name: "gasthausHauptraum",
      background: "Images/Locations/TestLocation2.png"
    }
  };

  export let character = {
    narrator: {
      name: ""
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
      { scene: Prolog, name: "Prolog" },
      { scene: Gasthaus, name: "Gasthaus" }
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}