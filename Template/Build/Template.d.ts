declare namespace Novel {
    function Drachenhort(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Ende(): ƒS.SceneReturn;
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
        transitionThree: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transitionKnockOut: {
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
        feld: {
            name: string;
            background: string;
        };
        wald: {
            name: string;
            background: string;
        };
        waldGespiegelt: {
            name: string;
            background: string;
        };
        waldUpsideDown: {
            name: string;
            background: string;
        };
        drachenHoehleGang: {
            name: string;
            background: string;
        };
        drachenHoehle: {
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
        waldBaeume: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        filterNacht: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        sonnenstrahlen: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        metKrug: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        metKrug2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        metKrug3: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        stone: {
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
        goblinGroup: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                night: string;
                nightUpsideDown: string;
                sleepingNight: string;
                sleepingNightUpsideDown: string;
            };
        };
        goblinLeader: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
    };
    let items: {
        cloak: {
            name: string;
            description: string;
            image: string;
        };
        staff: {
            name: string;
            description: string;
            image: string;
        };
        sword: {
            name: string;
            description: string;
            image: string;
        };
        stone: {
            name: string;
            description: string;
            image: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        drunknessLevel: number;
        neededLongSleep: number;
        ownsPlayerWaepon: boolean;
        givenEnding: string;
    };
    function addDrunknessLevel(): void;
    function removeDrunknessLevel(): void;
    function SetDrunknessSight(): void;
    function fromLeftToRight(startX: number, startY: number, endX: number, endY: number): ƒS.AnimationDefinition;
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
    function Unterwegs1GoblinsAttack(): ƒS.SceneReturn;
}
declare namespace Novel {
    function Unterwegs2Fee(): ƒS.SceneReturn;
}
