export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  shortName: string
  category: string
  description: string
  use: string
  weights: string[]
  material: string
  price?: string
  specs: ProductSpec[]
  image: string
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: 'wooden-mugdar',
    name: 'Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'Balanced, hand-finished wooden clubbells for controlled swings, shoulder mobility, grip strength, and full-body conditioning.',
    use: 'Gym strength work, shoulder conditioning, grip strength, rotational power',
    weights: ['2 kg', '5 kg', '8 kg', '10 kg', '15 kg'],
    material: 'Seasoned Sheesham wood',
    price: '₹2250 /piece',
    specs: [
      { label: 'Weight', value: ' 15 kg' },
      { label: 'Material', value: 'Seasoned Sheesham wood' },
      { label: 'Club Type', value: 'Set of 4' },
      { label: 'Finish', value: 'Natural wood, hand-polished' },
      { label: 'Length', value: '70 cm' },
      { label: 'Grip Type', value: 'Tapered grip' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar.png',
    featured: true,
  },
  {
    slug: 'wooden-hanuman-gada',
    name: 'Wooden Hanuman Gada',
    shortName: 'Hanuman Gada',
    category: 'Mace training',
    description:
      'A powerful training mace with a comfortable turned handle for overhead movement, core control, and functional strength.',
    use: 'Gym conditioning, wrist strength, core stability, overhead training',
    weights: ['3 kg', '5 kg', '8 kg', '10 kg', '12 kg'],
    material: 'Solid hardwood',
    price: '₹1,150 /piece',
    specs: [
      { label: 'Weight', value: '3 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Length', value: '50 cm' },
      { label: 'Grip Type', value: 'Tapered Grip' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/hanuman.jpg',
    
    featured: true,
  },
  {
    slug: 'Wooden Mugdar',
    name: 'Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A compact, versatile clubbell for building resilient wrists, elbows, shoulders, and upper back across every training setting.',
    use: 'Functional fitness, wrist rotation, joint resilience, strength',
    weights: ['1 kg', '2 kg', '3 kg', '5 kg'],
    material: 'Indian hardwood',
    price: '₹1500 /piece',
    specs: [
      { label: 'Weight', value: '5 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Length', value: '50 cm' },
      { label: 'Grip Type', value: 'Tapered grip' },
      { label: 'Usage', value: 'Home, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/5-kg-wooden-mugdar.jpg',
    featured: true,
  },
  {
    slug: 'wooden-parallettes',
    name: 'Wooden Parallettes',
    shortName: 'Parallettes',
    category: 'Bodyweight training',
    description:
      'Stable low bars with a smooth grip for push-ups, L-sits, handstand work, and calisthenics progressions.',
    use: 'Gym training, calisthenics, balance, bodyweight strength',
    weights: ['Standard pair', 'Heavy-duty pair'],
    material: 'Hardwood with sealed grip',
    price: '₹1,650 /pair',
    specs: [
      { label: 'Set Type', value: 'Pair' },
      { label: 'Material', value: 'Hardwood, sealed grip' },
      { label: 'Height', value: '15 cm / 30 cm options' },
      { label: 'Bar Length', value: '45 cm' },
      { label: 'Load Capacity', value: 'Up to 120 kg' },
      { label: 'Usage', value: 'Gym, Studio, Home' },
      { label: 'Color', value: 'Natural wood' },
    ],
    image: '/products/wooden-club-set.png',
  },
  {
    slug: 'wooden-indian-club',
    name: 'Indian Club',
    shortName: 'Indian Club',
    category: 'Mobility training',
    description:
      'Lightweight clubs for flowing movement patterns, warm-ups, coordination, and precise shoulder mobility work.',
    use: 'Gym warm-up, mobility, rehabilitation, coordination',
    weights: ['500 g', '1 kg', '1.5 kg'],
    material: 'Turned hardwood',
    price: '₹380 /piece',
    specs: [
      { label: 'Weight', value: '500 g – 1.5 kg' },
      { label: 'Material', value: 'Turned hardwood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Length', value: '35 cm' },
      { label: 'Grip Type', value: 'Slim tapered grip' },
      { label: 'Usage', value: 'Home, Gym, Rehab' },
      { label: 'Color', value: 'Light brown' },
    ],
    image: '/products/custom-training-set.png',
  },
  {
    slug: 'wooden-danda',
    name: 'Wooden Danda',
    shortName: 'Danda',
    category: 'Mobility training',
    description:
      'A traditional training staff for mobility drills, posture, stretching, and functional movement practice at home or in the gym.',
    use: 'Mobility, posture, movement flow, warm-up',
    weights: ['1.2 m', '1.5 m', '1.8 m'],
    material: 'Straight-grain wood',
    price: '₹650 /piece',
    specs: [
      { label: 'Length', value: '1.2 – 1.8 m' },
      { label: 'Material', value: 'Straight-grain wood' },
      { label: 'Diameter', value: '2.5 cm' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Grip Type', value: 'Uniform, non-slip' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Natural' },
    ],
    image: '/products/wooden-sumtola.png',
  },
]

export const categories = [
  'All equipment',
  'Clubbells',
  'Mace training',
  'Bodyweight training',
  'Mobility training',
]

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)

export const whatsappUrl = 'https://wa.me/919999999999'
export const phoneNumber = '+91 99999 99999'
export const emailAddress = 'sales@abihasports.com'