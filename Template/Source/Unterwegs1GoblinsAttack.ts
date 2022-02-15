namespace Novel {
    export async function Unterwegs1GoblinsAttack(): ƒS.SceneReturn {
      console.log("Szene: Unterwegs1GoblinsAttack");


      await ƒS.Speech.tell(character.narrator, "Goblins bemerken deinen Angriff");

      if (dataForSave.ownsPlayerWaepon) {
        //Protagonist hat Waffe mit der er Goblins besiegen kann

        await ƒS.Speech.tell(character.narrator, "Du ziehst deine Waffe und besiegst Goblins");

        await ƒS.Character.hide(character.goblinLeader);
        return "Unterwegs2Fee";

      } else {
        //Protagonist hat keine Waffe und wird von Goblins besiegt

        await ƒS.Speech.tell(character.narrator, "You die");

        await ƒS.Character.hide(character.goblinLeader);
        return "Ende";
      }

      
    }
  }