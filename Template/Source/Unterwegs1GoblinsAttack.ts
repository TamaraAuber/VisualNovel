namespace Novel {
    export async function Unterwegs1GoblinsAttack(): ƒS.SceneReturn {
      console.log("Szene: Unterwegs1GoblinsAttack");

      let text = {
        narrator: {
            N000: "Du ziehst deine Waffe und mit viel Geschick (und vielleicht auch viel Glück) schaffst du es die Goblins zu besiegen!",
            N001: "Voller Selbstvertrauen und fest entschlossen, alle zu besiegen, begibst du dich in den Kampf."
        }
    };

      if (dataForSave.ownsPlayerWaepon) {
        //Protagonist hat Waffe mit der er Goblins besiegen kann

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        await ƒS.Character.hide(character.goblinLeader);
        return "Unterwegs2Fee";

      } else {
        //Protagonist hat keine Waffe und wird von Goblins besiegt

        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.hide(character.goblinLeader);
        return "EndingBadGoblins";
      }

      
    }
  }