import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '€51',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '€53',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '€40',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '€28',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '€24',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '€18',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '€14',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '€9',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€28',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€25',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: "Michelin Guide hails Grenat's 'exceptionally good value cooking': a Parisian treat that delights both palate and wallet.",
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: "Our culinary flame ignites the scene, lauded as a 'Rising Star' with innovative spirit and bold flavors.",
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: "AA Hospitality crowns Grenat the jewel of Parisian service, our warmth and attentiveness exceeding every expectation.",
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: "Masterful artistry takes center stage as our Chef clinches 'Outstanding Chef', weaving culinary magic on every plate.",
  },
];

export default { wines, cocktails, awards };
