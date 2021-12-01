namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transitions
  export let transitions = {
    clock: {
      duration: 1,
      alpha: "../Transitions/puzzle.png",
      edge: 1                                   //Härtegrad der Transition
    }
  };

  export let sound = {
    // music, am besten mp3, weil es am besten unterstützt wird, aber theorethisch egal
    backgroundTheme: "",
    mainTheme: ""
  };

  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/....."
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
    }
  }


  export let dataForSave = {
    
  };



  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      //Szenenstruktur -> Reihenfolge hier bestimmt Ablaufreihenfolge der Szenen
      { scene: Scene, name: "Scene" }
    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}