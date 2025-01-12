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
    { name: "Cioccolata calda", price: "€2,5" },
  ],
};

export const softDrinkItems: MenuItemProps = {
  title: "Soft Drink",
  items: [
    { name: "Acqua", price: "€1.50" },
    { name: "Bibite", price: "€3" },
    { name: "Succhi", price: "€3" },
    { name: "Red Bull", price: "€4" },
    { name: "Monster", price: "€4" },
  ],
};

export const alcoliciECocktailItems: MenuItemProps = {
  title: "Alcolici e Cocktail",
  items: [
    {
      name: "Shot",
      price: "€2.50 (tequila sale-limone €3, tequila Corralejo Reposado €4)",
    },
    { name: "Calice Vino bianco, custoza", price: "€2.50 (bottiglia €15)" },
    {
      name: "Calice Vino rosso, Valpolicella Classico",
      price: "€3",
    },
    {
      name: "Calice prosecco brut",
      price: "€3 (bottiglia €20)",
    },
    { name: "Birre bottiglia 0.33L", price: "€4" },
    {
      name: "Birre spina piccola 0.2L",
      price: "€3",
    },
    {
      name: "Birre spina media pils",
      price: " 0.4L 5€",
    },
    {
      name: "Birre spina media non filtrata",
      price: " 0.4L 6€",
    },
    { name: "Amari, grappe", price: "€4" },
    { name: "Spritz bianco", price: "€3.50" },
    { name: "Spritz Aperol-Campari", price: "€4" },
    { name: "Americano, Campari Lemon e cocktail analcolici", price: "€6" },
    { name: "Negroni", price: "€7 (Negroni sbagliato €6)" },
    { name: "Cocktail base", price: "€7" },
    {
      name: "Cocktail elaborati",
      price: "€8 ",
    },
    {
      name: "Long Island",
      price: "€8 ",
    },
    {
      name: "Margarita",
      price: "€8 ",
    },
    {
      name: "Angelo azzurro",
      price: "€8 ",
    },
    {
      name: "Mojito",
      price: "€8 ",
    },
    {
      name: "Japanese ice tea",
      price: "€8 ",
    },
    {
      name: "Cuba libre",
      price: "€8 ",
    },
    {
      name: "Caipirinha",
      price: "€8 ",
    },
    {
      name: "Gin tonic base",
      price: "€7,",
    },
    {
      name: "Gin tonic premium",
      price: "€10, ",
    },
    { name: "Rum premium", price: "€8" },

    { name: "Rum premium", price: "€8" },
    { name: "Whisky premium", price: "€8 " },
  ],
};

export const cibiVariItems: MenuItemProps = {
  title: "Cibi Vari",
  items: [
    { name: "Focaccia (crea a tuo piacimento)", price: "€7" },
    { name: "Toscano (cotto + formaggio + salasa ", price: "€6" },
    { name: "Spianata (crudo + mozzarella + rucola + salsa ", price: "€6" },
    { name: "Pizza Pinza (pomodoro + mozzarella fior di latte)", price: "€6" },
    { name: "Panzerotti", price: "€4" },
    { name: "Patatine", price: "€1.50 (Pringles €2)" },
    { name: "Chupa Chups", price: "€1" },
    { name: "Dolci", price: "€1.50" },
    { name: "Haribo", price: "€2" },
  ],
};
