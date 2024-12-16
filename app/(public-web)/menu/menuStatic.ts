interface MenuItemProps {
  title: string;
  items: { name: string; price: string }[];
}

export const caffetteriaItems: MenuItemProps = {
  title: "Caffetteria",
  items: [
    { name: "Caffè", price: "€1.20 (corretto €1.70)" },
    { name: "Ginseng", price: "€2" },
    { name: "Orzo", price: "€2" },
    { name: "Thè caldo", price: "€2.50" },
    { name: "Cioccolata calda", price: "€2" },
  ],
};

export const softDrinkItems: MenuItemProps = {
  title: "Soft Drink",
  items: [
    { name: "Acqua", price: "€1.50" },
    { name: "Bibite", price: "€3" },
    { name: "Succhi", price: "€2.50" },
    { name: "Bibite vetro fino a 200ml", price: "€2.50" },
    { name: "Bibite vetro sopra 200ml", price: "€3" },
    { name: "Red Bull", price: "€3.50" },
    { name: "Monster", price: "€4" },
  ],
};

export const alcoliciECocktailItems: MenuItemProps = {
  title: "Alcolici e Cocktail",
  items: [
    { name: "Bacardi", price: "€3.50" },
    {
      name: "Shot",
      price: "€2.50 (tequila sale-limone €3, tequila Corralejo Reposado €4)",
    },
    { name: "Calice Vino bianco, custoza", price: "€2.50 (bottiglia €15)" },
    {
      name: "Calice Vino rosso, Valpolicella Classico",
      price: "€3 (bottiglia €18)",
    },
    { name: "Birre bottiglia 0.33L", price: "€4" },
    {
      name: "Birre spina piccola 0.2L",
      price: "€3",
    },
    {
      name: "Birre spina media",
      price: " 0.4L (possibili variazioni in base al tipo di birra) 5€",
    },
    { name: "Amari, grappe", price: "€4" },
    { name: "Spritz bianco", price: "€3.50" },
    { name: "Spritz vari e Hugo", price: "€4" },
    { name: "Americano, Campari Lemon e cocktail analcolici", price: "€6" },
    { name: "Negroni", price: "€7 (Negroni sbagliato €6)" },
    { name: "Cocktail base", price: "€7" },
    {
      name: "Cocktail elaborati",
      price:
        "€8 (Long Island, margarita, Angelo azzurro, mojito, japanese ice tea)",
    },
    {
      name: "Gin tonic con gin base",
      price: "€7, con gin premium €9 (con gin Mare €10)",
    },
    { name: "Rum premium", price: "€8 bicchiere" },
    { name: "Whisky premium", price: "€8 (Jack Daniel’s €4)" },
    { name: "Bourbon Woodford", price: "€6 bicchiere" },
  ],
};

export const cibiVariItems: MenuItemProps = {
  title: "Cibi Vari",
  items: [
    { name: "Focaccia (crea a tuo piacimento)", price: "€7" },
    { name: "Toscano (cotto + formaggio + salasa ", price: "€5" },
    { name: "Spianata (crudo + mozzarella + rucola + salsa ", price: "€5" },
    { name: "Pizza Pinza (pomodoro + mozzarella fior di latte)", price: "€6" },
    { name: "Panzerotti", price: "€4" },
    { name: "Patatine", price: "€1.50 (Pringles €2)" },
    { name: "Chupa Chups", price: "€1" },
    { name: "Dolci", price: "€1.50" },
    { name: "Haribo", price: "€2" },
  ],
};
