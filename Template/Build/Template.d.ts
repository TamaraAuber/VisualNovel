declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        mainTheme: string;
    };
    let locations: {
        beach: {
            name: string;
            background: string;
        };
        beach2: {
            name: string;
            background: string;
        };
        beach3: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                happy: string;
                angry: string;
            };
        };
        Stickman: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                meh: string;
                happy: string;
                thinking: string;
                dancing: string;
            };
        };
    };
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        points: number;
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
}
declare namespace Template {
    function Practice(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
