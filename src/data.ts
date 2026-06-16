import { MenuItem, Review } from './types';

export const CATEGORIES = [
  { id: 'all', label: 'All Specialties', icon: '✨' },
  { id: 'starters', label: 'Starters', icon: '🥟' },
  { id: 'soups', label: 'Divine Soups', icon: '🍲' },
  { id: 'chicken-gravy', label: 'Chicken Gravy', icon: '🌶️' },
  { id: 'prawn-gravy', label: 'Prawn Gravy', icon: '🍤' },
  { id: 'noodles', label: 'Master Noodles', icon: '🥢' },
  { id: 'rice', label: 'Wok Fried Rice', icon: '🍚' },
  { id: 'seafood', label: 'Premium Seafood', icon: '🌊' }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Drum Stick Plate',
    price: 2000,
    description: 'Crispy, premium hand-crafted chicken drumsticks, seasoned with executive Chinese herbs, served with golden plum dipping glaze.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '1 Plate'
  },
  {
    id: 'starter-2',
    name: 'Dhaka Chicken',
    price: 1200,
    description: 'Crisp strips of succulent chicken coated in aromatic sesame seeds and deep-fried to royal golden perfection.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-3',
    name: 'Finger Chicken',
    price: 1200,
    description: 'Delicate fingers of chicken breast, hand-breaded in premium crumbs and golden fried, crisp and melt-in-the-mouth.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-4',
    name: 'Coconut Chicken',
    price: 1200,
    description: 'Tender chicken medallions coated in flaky, sweet coconut flakes and toasted to dynamic crispness.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '8 Pcs'
  },
  {
    id: 'starter-5',
    name: 'Chicken Tanbura',
    price: 1000,
    description: 'Light-as-air crispy-battered tempura-style chicken, served with Chef’s signature soy-ginger dipping glaze.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '8 Pcs'
  },
  {
    id: 'starter-6',
    name: 'Spring Roll',
    price: 1200,
    description: 'Gourmet thin crispy pastry sheets rolled with spiced fresh vegetables and luxurious minced chicken.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '3 Pcs',
    isBestSeller: true
  },
  {
    id: 'starter-7',
    name: 'Chicken Daboo',
    price: 1500,
    description: 'Traditional battered chicken infused with cracked coriander seeds, ginger, and garlic, deep fried Pakistani-Chinese fusion masterpiece.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-8',
    name: 'Chicken Toast',
    price: 800,
    description: 'Toasted brioche crust loaded with seasoned whipped chicken pate and fried to a magnificent crisp crackle.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-9',
    name: 'Chicken Garlic Toast',
    price: 800,
    description: 'Gourmet brioche layers coated with garlic herb butter, premium minced chicken paste, and roasted black sesame.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-10',
    name: 'Prawn Toast',
    price: 1000,
    description: 'Luxury minced ocean prawns on artisanal toast triangles, crusty fried with full sesame coverage.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-11',
    name: 'Prawn Almond Toast',
    price: 1200,
    description: 'Premium prawn paste spread on crispy toast, studded with slivered, roasted luxury almonds for double crunch.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-12',
    name: 'Chicken Almond Toast',
    price: 1000,
    description: 'Classic toasted treats lined with whipped flavorful chicken and toasted rich almond flakes.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-13',
    name: 'Tail Prawn',
    price: 1500,
    description: 'Oceanic king prawns with tails intact, fried in a delicate, crisp modern Chinese bubble batter.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1559737113-b6743977535a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-14',
    name: 'Jamboo Tail Prawn',
    price: 2000,
    description: 'Enormous jumbo-sized wild prawns, tail-on, crispy deep fried and lightly dusted with metallic five-spice blend.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-15',
    name: 'Dhaka Tail Prawn',
    price: 2000,
    description: 'Tail prawns tossed in Dhaka sesame batter, deep fried till fully crackling, served with spiced coriander cream.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1551248429-4043bcdc74fa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-16',
    name: 'Crispy Jamboo Prawn',
    price: 2000,
    description: 'Massive, plump jumbo prawns crisped in dynamic Japanese panko breadcrumbs, unmatched sweet ocean crunch.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534080391095-71b1454447e2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-17',
    name: 'Prawn Chili Dry',
    price: 2000,
    description: 'Succulent prawns dry-tossed with spicy green chilies, golden roasted garlic bulbs, scallion heads, and micro-glaze.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-18',
    name: 'Dhaka Fish',
    price: 1500,
    description: 'Flaky cubes of river fish, hand-battered under gourmet Dhaka spices with roasted sesame coatings.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1535390243057-e097d424164e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'starter-19',
    name: 'Hony Wings',
    price: 1200,
    description: 'Plump premium chicken wings tossed in a sweet, sticky reduction of pure forest honey, garlic juice, and soy.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '12 Pcs'
  },
  {
    id: 'starter-20',
    name: 'Fry Wings',
    price: 1000,
    description: 'Classic crisp wings fried in custom spiced executive light breading. Perfectly crisp on the outside, juicy inside.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '12 Pcs'
  },
  {
    id: 'starter-21',
    name: 'Dhaka Wings',
    price: 1000,
    description: 'Crispiest sesame-dusted Dhaka marinated chicken wings, high-end comfort appetizer.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1527477395767-450af5b306a7?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '12 Pcs'
  },
  {
    id: 'starter-22',
    name: 'Fry Fish',
    price: 1500,
    description: 'Gourmet hand-cut fish fillets crispy fried in spiced Chinese batter, flaky interior, incredibly light crust.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '3 Pcs'
  },

  // --- SOUPS ---
  {
    id: 'soup-1',
    name: 'Special Hinsoy Soup',
    price: 1500,
    halfPrice: 800,
    fullPrice: 1500,
    description: 'Our absolute signature masterpiece soup creamed with thick chicken chunks, ocean prawns, mushrooms, and seasonal bamboo shoots.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600',
    isChefRecommended: true
  },
  {
    id: 'soup-2',
    name: 'Chicken Mushroom Egg Flower Soup',
    price: 1100,
    halfPrice: 550,
    fullPrice: 1100,
    description: 'Velvety light Chinese broth decorated with egg ribbons, shiitake mushrooms, and thin shreds of tender chicken.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-3',
    name: 'Chicken Corn Soup',
    price: 1000,
    halfPrice: 550,
    fullPrice: 1000,
    description: 'Creamy, comforting classic soup loaded with crushed sweet corn kernels and minced organic chicken.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebedd0870b?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'soup-4',
    name: 'Chicken Hot & Sour Soup',
    price: 1000,
    halfPrice: 550,
    fullPrice: 1000,
    description: 'Robust dark broth carrying a tantalizing vinegar tang, white pepper kick, loaded with tofu, mushroom, chicken, and egg drops.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-5',
    name: 'Special Hot & Sour Soup',
    price: 1200,
    halfPrice: 600,
    fullPrice: 1200,
    description: 'An elevated house-special variant of our spicy sour broth containing premium levels of chicken, prawns, and black fungus.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-6',
    name: 'Prawn Hot & Sour Soup',
    price: 1400,
    halfPrice: 750,
    fullPrice: 1400,
    description: 'Fresh succulent ocean prawns swimming in weavable egg flower threads, vinegar spice, and fresh chili extracts.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-7',
    name: '19 B Soup',
    price: 1500,
    halfPrice: 800,
    fullPrice: 1500,
    description: 'The legendary premium thick soup made with shredded chicken, chopped prawns, button mushrooms, and vinegar seasoning.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1607528971874-dc9c490ecfba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-8',
    name: 'Thai Egg Flower Soup',
    price: 1100,
    halfPrice: 600,
    fullPrice: 1100,
    description: 'Lemongrass-hinted aromatic thin broth completed with silky smooth beaten egg nests and bird’s-eye chilis.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-9',
    name: 'Royle Style Soup',
    price: 1200,
    halfPrice: 750,
    fullPrice: 1200,
    description: 'Rich luxurious slow-simmered chicken essence with golden egg shreds and baby spinach greens.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-10',
    name: 'Almond Soup',
    price: 1100,
    halfPrice: 600,
    fullPrice: 1100,
    description: 'Gentle, nourishing broth carrying roasted almond notes alongside thick chicken cubes, warm and elegant.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-11',
    name: 'Vegetable Soup',
    price: 1000,
    halfPrice: 550,
    fullPrice: 1000,
    description: 'A glowing clear vegetable broth cooked with julienned seasonal garden roots, bok choy, and light soy.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-12',
    name: 'Chicken Noodles Soup',
    price: 1000,
    halfPrice: 550,
    fullPrice: 1000,
    description: 'Ultimate comfort bowl packed with hand-pulled soft wheat noodles, tender chicken chunks, and aromatic light broth.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1607528971874-dc9c490ecfba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'soup-13',
    name: 'Seswan Red Soup',
    price: 1200,
    halfPrice: 600,
    fullPrice: 1200,
    description: 'Deep red, highly fiery Szechuan specialty soup studded with garlic oil, chili oil, bamboo shoots, and chicken strips.',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1607528971874-dc9c490ecfba?auto=format&fit=crop&q=80&w=600'
  },

  // --- CHICKEN GRAVY ---
  {
    id: 'chicken-1',
    name: 'Chicken Manchurian',
    price: 1650,
    halfPrice: 1300,
    fullPrice: 1650,
    description: 'The crown gem of Chinese fusion. Juicy chicken droplets in a luxurious, sweet-tangy spicy imperial red glaze.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isChefRecommended: true
  },
  {
    id: 'chicken-2',
    name: 'Chicken Chili Dry',
    price: 1650,
    halfPrice: 1300,
    fullPrice: 1650,
    description: 'Stir-fried ginger-glazed chicken breast strips tossed dry with premium green chilis and caramelized micro onion bulbs.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-3',
    name: 'Garlic Chicken',
    price: 1550,
    halfPrice: 1250,
    fullPrice: 1550,
    description: 'Succulent chicken slices slow-cooked in a silky garlic-infused bone marrow glaze, with sweet chives.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-4',
    name: 'Chicken Shashlik',
    price: 1750,
    halfPrice: 1400,
    fullPrice: 1750,
    description: 'Delicate skewers of grilled marinated chicken, thick onions, and juicy tomatoes, drowned in executive Shashlik sauce, served over Egg Fried Rice.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-5',
    name: 'Szechuan Chicken',
    price: 1650,
    halfPrice: 1300,
    fullPrice: 1650,
    description: 'Authentic pepper-laced hot wok gravy made with dried chilis, roasted peanuts, ginger, and spicy chili sauce.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-6',
    name: 'Black Pepper Chicken',
    price: 1650,
    halfPrice: 1300,
    fullPrice: 1650,
    description: 'Fragrant, earthy, spicy wok gravy containing coarsely cracked black peppercorn, bell peppers, and oyster sauce drops.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-7',
    name: 'Chicken Cashew & Almond',
    price: 1750,
    halfPrice: 1400,
    fullPrice: 1750,
    description: 'Premium light brown oyster glaze studded with freshly toasted crunchy cashews and roasted whole almond nuts.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-8',
    name: 'Ginger Chicken',
    price: 1550,
    halfPrice: 1250,
    fullPrice: 1550,
    description: 'Stir-fried strips of premium white chicken breast saturated with young julienned ginger and standard soy sauces.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'chicken-9',
    name: 'Sweet & Sour Chicken',
    price: 1650,
    halfPrice: 1300,
    fullPrice: 1650,
    description: 'Magnificent sweet glaze of premium pineapple chunks, bell peppers, white vinegar, and glazed crispy breast cubes.',
    category: 'chicken-gravy',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600'
  },

  // --- PRAWN GRAVY ---
  {
    id: 'prawn-gravy-1',
    name: 'Prawns Manchurian',
    price: 2400,
    halfPrice: 1800,
    fullPrice: 2400,
    description: 'Pristine ocean-harvested prawns wrapped in magnificent ginger-garlic Manchurian red glaze, extremely luxurious.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isChefRecommended: true
  },
  {
    id: 'prawn-gravy-2',
    name: 'Prawn Chili Dry',
    price: 2450,
    halfPrice: 1850,
    fullPrice: 2450,
    description: 'Wok-seared prime prawns dry-tossed with raw bird’s-eye chilis, garlic pearls, green onions, and micro reduction.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prawn-gravy-3',
    name: 'Szechuan Prawns',
    price: 2400,
    halfPrice: 1800,
    fullPrice: 2400,
    description: 'Flame-seared fresh prawns glazed heavily with authentic Szechuan broad bean paste, dried peppers, and roasted peanut oil.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prawn-gravy-4',
    name: 'Garlic Prawns',
    price: 2400,
    halfPrice: 1800,
    fullPrice: 2400,
    description: 'Plump premium ocean prawns stewed in high-end garlic-infused butter glaze with fresh spring leaks.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prawn-gravy-5',
    name: 'Sweet & Sour Prawns',
    price: 2400,
    halfPrice: 1800,
    fullPrice: 2400,
    description: 'Magnificent golden battered ocean prawns tossed with sweet glazy reduction carrying pineapple, sweet onions, and crisp peppers.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prawn-gravy-6',
    name: 'Black Pepper Prawns',
    price: 2450,
    halfPrice: 1850,
    fullPrice: 2450,
    description: 'Seared premium prawns coated in rich coarsely-crushed Java black pepper and dark oyster glaze.',
    category: 'prawn-gravy',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600'
  },

  // --- NOODLES ---
  {
    id: 'noodle-1',
    name: 'Special chowmein',
    price: 1550,
    description: 'Imperial wok-tossed long wheat hand-stretched noodles, thick chicken slices, prawns, and premium garden vegetables, seasoned beautifully.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isChefRecommended: true
  },
  {
    id: 'noodle-2',
    name: 'Chicken Chowmin',
    price: 1150,
    description: 'Premium stir-fried noodles tossed with loaded julienned chicken, shredded cabbage, carrots, green onions, and dynamic dark soy glaze.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-3',
    name: 'Vegetables Chowmin',
    price: 900,
    description: 'Healthy and spectacular long wheat noodles cooked deeply with fresh farm bell peppers, sweet peas, and red cabbage blocks.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-4',
    name: 'Chicken Thai Chowmin',
    price: 1280,
    description: 'Spiciness upgrade! Pad-thai styled noodle tosses with sweet-chili paste, crushed roasted peanuts, fresh lime squeeze, and premium chicken.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-5',
    name: 'American Chowpsi',
    price: 1650,
    description: 'Traditional American Chop Suey. Spectacular sweet-and-sour ketchup glazed chicken/prawn base onto a bed of super crispy dry bird-nest fried noodles, crowned with a sunny-side egg.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-6',
    name: 'Chicken Chowpsi',
    price: 1250,
    description: 'Crispy fried noodles served alongside a dynamic thick white sauce stew containing sliced tender chicken breasts and bamboo shoots.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-7',
    name: 'Hinsoy Special Chowpsi',
    price: 1750,
    description: 'Premium signature crispy noodle tower surrounded by a majestic combination of chicken, prawns, black wood-ear mushrooms, and rich brown glaze.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'noodle-8',
    name: 'Vegetables Chowpsi',
    price: 950,
    description: 'Crisp golden noodle nest loaded with seasoned baby corn, broccoli blocks, shiitakes, and premium white vegetable gravy.',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },

  // --- RICE ---
  {
    id: 'rice-1',
    name: 'Hinsoy Special Rice',
    price: 1450,
    halfPrice: 800,
    fullPrice: 1450,
    description: 'The supreme royal grain. Imperial steamed aromatic Basmati seared in wok with chicken cubes, prawns, dynamic fried garlic, and five spices.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rice-2',
    name: 'Chicken Rice',
    price: 1150,
    halfPrice: 650,
    fullPrice: 1150,
    description: 'Classic, delicious long-grain basmati fried rice tossed with glazed diced chicken cubes, sweet peas, and scallion oils.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rice-3',
    name: 'Egg Fried Rice',
    price: 950,
    halfPrice: 550,
    fullPrice: 950,
    description: 'Wok fried rice carrying fluffy golden egg layers, green onion stalks, and micro salt-soy seasoning. Clean and elegant.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rice-4',
    name: 'Vegetables Rice',
    price: 900,
    halfPrice: 500,
    fullPrice: 900,
    description: 'Light steamed basmati wok tossed with finely cubed colorful bell peppers, carrot chips, and fresh spring onions.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rice-5',
    name: 'Chicken Masala Rice',
    price: 1250,
    halfPrice: 700,
    fullPrice: 1250,
    description: 'Exquisite fusion! Wok rice seasoned with hot spices, chili paste, seared minced chicken, and high-end local aromas.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rice-6',
    name: 'Singapori Rice',
    price: 1550,
    halfPrice: 850,
    fullPrice: 1550,
    description: 'Multi-layered gourmet wonder. A foundation of egg fried rice topped with premium noodles, spicy glazed chicken strip, and drizzled with signature creamy garlic red sauce.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isChefRecommended: true
  },
  {
    id: 'rice-7',
    name: 'Prawn Rice',
    price: 1450,
    halfPrice: 800,
    fullPrice: 1450,
    description: 'Plump seared prawns stir fried with premium long grain Basmati, golden garlic, and farm pea stalks.',
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600'
  },

  // --- SEAFOOD CATEGORY OVERLAPS (FOR DEDICATED VIEWING) ---
  {
    id: 'seafood-1',
    name: 'Prawn Spicy Chili Dry',
    price: 2000,
    description: 'Wok-charred jumbo ocean prawns dry tossed in ginger-scallion oils with fiery green chilis, garlic, and golden glaze.',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'seafood-2',
    name: 'Gourmet Dhaka Fish',
    price: 1500,
    description: 'Royal river fish slices dipped in premium spice egg batter and heavily crusted in gold toasted sesame.',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1535390243057-e097d424164e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'seafood-3',
    name: 'Gourmet Fry Fish',
    price: 1500,
    description: 'Three chunky fillets of premium local fish fried crispy in high-end Chinese spice-infused seasoned coatings.',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    quantityInfo: '3 Pcs'
  },
  {
    id: 'seafood-4',
    name: 'Crispy Jumbo Prawns',
    price: 2000,
    description: 'Magnificent super-sized prawns coated in light crispy panko flakes, deep charcoal backdropped serving with premium sauce.',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1534080391095-71b1454447e2?auto=format&fit=crop&q=80&w=600',
    isChefRecommended: true
  }
];

export const BEST_SELLERS = [
  {
    id: 'best-1',
    name: 'Chicken Manchurian',
    category: 'Chicken Gravy',
    price: 'Rs. 1300 / 1650',
    description: 'The golden crown jewel of Chinese fusion. Crispy chicken in deep red, sweet-tangy spicy glaze.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600',
    link: 'Chicken Manchurian'
  },
  {
    id: 'best-2',
    name: 'Special chowmein',
    category: 'Noodles',
    price: 'Rs. 1250 / 1550',
    description: 'Gourmet wheat noodles wok-tossed with loads of chicken, prawns, vegetables, and imperial spices.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600',
    link: 'Special Chowmin'
  },
  {
    id: 'best-3',
    name: 'Spring Roll',
    category: 'Starters',
    price: 'Rs. 1200',
    description: 'Crispiest pastry layers enveloping a masterfully seasoned combination of minced chicken and veggies.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600',
    link: 'Spring Roll'
  },
  {
    id: 'best-4',
    name: 'Chicken Corn Soup',
    category: 'Soups',
    price: 'Rs. 550 / 1000',
    description: 'Comfort broth carrying sweet golden corn shreds, eggs drops, and simmered hand-minced chicken.',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebedd0870b?auto=format&fit=crop&q=80&w=600',
    link: 'Chicken Corn Soup'
  },
  {
    id: 'best-5',
    name: 'Prawns Manchurian',
    category: 'Prawn Gravy',
    price: 'Rs. 1800 / 2400',
    description: 'The oceanic standard of luxury. Stir-fried massive prawns soaked in garlic-loaded ginger Manchurian glaze.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600',
    link: 'Prawns Manchurian'
  },
  {
    id: 'best-6',
    name: 'Singapori Rice',
    category: 'Rice',
    price: 'Rs. 850 / 1550',
    description: 'Wok seared rice, layered with crisp noodles, rich spicy chicken gravy, dressed in absolute premium creamy garlic dressing.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600',
    link: 'Singapori Rice'
  }
];

export const GALLERY_ITEMS = [
  { id: 'gal-1', title: 'Wok Master Noodles', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600', category: 'Noodles' },
  { id: 'gal-2', title: 'Imperial Manchurian Glaze', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600', category: 'Manchurian' },
  { id: 'gal-3', title: 'Velvety Hot & Sour Broth', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600', category: 'Soups' },
  { id: 'gal-4', title: 'Royal Crunchy Spring Rolls', image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600', category: 'Spring Rolls' },
  { id: 'gal-5', title: 'Wok Toss Fried Rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600', category: 'Fried Rice' },
  { id: 'gal-6', title: 'Gourmet King Prawn Batter', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600', category: 'Prawns' },
  { id: 'gal-7', title: 'Plated Dhaka Sea Bass', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600', category: 'Seafood' },
  { id: 'gal-8', title: 'Executive Chef Platters', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600', category: 'Chinese Platters' }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Mian Saad',
    rating: 5,
    comment: 'The best Chinese food experience in Gujranwala. Absolute world-class flavor! The Singapori Rice is a masterpiece.',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 'rev-2',
    name: 'Ayesha Khan',
    rating: 5,
    comment: 'Luxury ambiance, amazing hot & sour soup, and lightning fast delivery service! Highly recommend their Special Hinsoy Soup, it is loaded with value.',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 'rev-3',
    name: 'Chaudhary Ibrahim',
    rating: 5,
    comment: 'Fast service, unforgettable oriental flavors, and majestic black-gold packaging. Finest culinary experience by Picking Chinese Food in Model Town.',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  }
];
