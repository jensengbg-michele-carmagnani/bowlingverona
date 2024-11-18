import React from "react";

type MenuStatic = {
  text: React.ReactNode;
}[];

export const menuStatic: MenuStatic = [
  {
    text: (
      <>
        <p>
          <strong>
            Scopri il nostro menù selezionato con prelibatezze da gustare!
          </strong>
        </p>
        <p>
          Siamo pronti a deliziarti con una vasta selezione di{" "}
          <strong>focacce</strong> fragranti, <strong>pizze</strong> dalla
          crosta perfetta e ingredienti freschissimi, accompagnate da una
          selezione di <strong>birre bavaresi</strong> artigianali che sapranno
          esaltare ogni morso.
        </p>
        <p>
          Sia che tu stia cercando una pausa golosa o una cena completa,
          troverai sicuramente qualcosa che soddisferà il tuo palato.{" "}
          <strong>Ogni piatto è preparato con passione e qualità</strong>, per
          offrirti un&apos;esperienza unica, che ti farà sentire come se fossi
          nel cuore della tradizione gastronomica italiana e tedesca.
        </p>
        <p>
          Guarda tra le nostre scelte e lasciati tentare da un viaggio di sapori
          indimenticabili! 🍕🍻✨
        </p>
      </>
    ),
  },
];
