declare namespace Novel {
    function Drachenhort(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Gasthaus(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Laden(): ƒS.SceneReturn;
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
        transitionTwo: {
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
        menuErklaerung: {
            name: string;
            background: string;
        };
        gasthausHauptraum: {
            name: string;
            background: string;
        };
        gasthausBar: {
            name: string;
            background: string;
        };
        laden: {
            name: string;
            background: string;
        };
    };
    let roomInventory: {
        gasthausBarCounter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        ladenTheke: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
    };
    let character: {
        narrator: {
            name: string;
        };
        dwarf: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                thinking: string;
            };
        };
        tiefling: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                thinking: string;
            };
        };
        dragon: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                sleeping: string;
                angry: string;
                happyWithBaby: string;
            };
        };
        fairy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                grateful: string;
                afraid: string;
            };
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
declare namespace Novel {
    function Unterwegs1Goblins(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Unterwegs2Fee(): ƒS.SceneReturn;
}
