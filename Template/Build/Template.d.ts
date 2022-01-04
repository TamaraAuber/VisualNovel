declare namespace Novel {
    function Gasthaus(): ƒS.SceneReturn;
}
declare namespace Novel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        transitionOne: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let location: {
        blackscreen: {
            name: string;
            background: string;
        };
        gasthausHauptraum: {
            name: string;
            background: string;
        };
    };
    let character: {
        narrator: {
            name: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Novel {
    function Prolog(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Scene(): ƒS.SceneReturn;
}
