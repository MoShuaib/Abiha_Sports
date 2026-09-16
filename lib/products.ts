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
  // ---------- CLUBBELLS (Wooden Mugdar) ----------
  {
    slug: 'wooden-mugdar-4kg',
    name: '4 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A lighter pair of hand-turned wooden clubbells, ideal for building shoulder mobility, grip strength, and controlled swinging technique.',
    use: 'Shoulder conditioning, grip strength, mobility, beginner clubbell training',
    weights: ['4 kg'],
    material: 'Seasoned wood',
    price: '₹800 /piece',
    specs: [
      { label: 'Weight', value: '4 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-4kg.png',
    featured: true,
  },
  {
    slug: 'wooden-mugdar-5kg',
    name: '5 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A versatile mid-weight clubbell pair for building resilient wrists, elbows, shoulders, and upper back across every training setting.',
    use: 'Functional fitness, wrist rotation, joint resilience, strength',
    weights: ['5 kg'],
    material: 'Seasoned wood',
    price: '₹1,500 /piece',
    specs: [
      { label: 'Weight', value: '5 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-5kg.jpg',
  },
  {
    slug: 'wooden-mugdar-6-5kg',
    name: '6.5 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A balanced pair of clubbells for controlled swings and progressive overload between the 5 kg and 8 kg ranges.',
    use: 'Gym strength work, shoulder conditioning, rotational power',
    weights: ['6.5 kg'],
    material: 'Seasoned wood',
    price: '₹1,050 /piece',
    specs: [
      { label: 'Weight', value: '6.5 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-6-5kg.jpg',
  },
  {
    slug: 'wooden-mugdar-8kg',
    name: '8 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A heavier set of three clubbells for serious grip strength, rotational power, and full-body conditioning work.',
    use: 'Gym strength work, shoulder conditioning, grip strength, rotational power',
    weights: ['8 kg'],
    material: 'Seasoned wood',
    price: '₹1,200 /piece',
    specs: [
      { label: 'Weight', value: '8 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 3' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-8kg.jpg',
  },
  {
    slug: 'wooden-mugdar-10kg',
    name: '10 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A heavy-duty pair built for advanced clubbell training, deep shoulder conditioning, and grip endurance.',
    use: 'Advanced strength work, grip endurance, shoulder conditioning',
    weights: ['10 kg'],
    material: 'Seasoned wood',
    price: '₹1,500 /piece',
    specs: [
      { label: 'Weight', value: '10 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 2' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-10kg.jpg',
  },
  {
    slug: 'wooden-mugdar-12kg',
    name: '12 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'A single heavy clubbell for experienced athletes looking to push grip strength and rotational power further.',
    use: 'Advanced strength work, grip endurance, akhada training',
    weights: ['12 kg'],
    material: 'Seasoned wood',
    price: '₹1,799 /piece',
    specs: [
      { label: 'Weight', value: '12 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-12kg.jpg',
  },
  {
    slug: 'wooden-mugdar-15kg',
    name: '15 kg Wooden Mugdar',
    shortName: 'Mugdar',
    category: 'Clubbells',
    description:
      'Our flagship set of four balanced, hand-finished wooden clubbells for controlled swings, shoulder mobility, grip strength, and full-body conditioning.',
    use: 'Gym strength work, shoulder conditioning, grip strength, rotational power',
    weights: ['15 kg'],
    material: 'Seasoned wood',
    price: '₹2,250 /piece',
    specs: [
      { label: 'Weight', value: '15 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Set of 4' },
      { label: 'Finish', value: 'Natural wood, hand-polished' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
      { label: 'Color', value: 'Brown' },
    ],
    image: '/products/wooden-mugdar-15kg.jpg',
    featured: true,
  },
  {
    slug: 'wooden-mugdar-15kg-oval',
    name: '15 kg Oval Shaped Wooden Mugdar',
    shortName: 'Oval Mugdar',
    category: 'Clubbells',
    description:
      'A single oval-profile mugdar at 15 kg, shaped for a different swing balance and grip feel than the standard club.',
    use: 'Advanced akhada training, rotational power, grip strength',
    weights: ['15 kg'],
    material: 'Seasoned wood',
    price: '₹2,400 /piece',
    specs: [
      { label: 'Weight', value: '15 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Shape', value: 'Oval' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Gym, Akhada' },
    ],
    image: '/products/wooden-mugdar-15kg-oval.jpg',
  },
  {
    slug: 'karla-katai',
    name: 'Karla Katai',
    shortName: 'Karla Katai',
    category: 'Clubbells',
    description:
      'Traditional wooden Karla Katai club designed for specialized strength and mobility training. Available in custom weights.',
    use: 'Shoulder conditioning, mobility, grip strength',
    weights: ['Custom'],
    material: 'Wood',
    price: '₹170 /kg',
    specs: [
      { label: 'Weight', value: 'Custom' },
      { label: 'Material', value: 'Wood' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Gym, Akhada' },
    ],
    image: '/products/Karlakatai.png',
  },

  // ---------- MACE TRAINING (Wooden Hanuman Gada) ----------
  {
    slug: 'wooden-hanuman-gada-3kg',
    name: '3 kg Wooden Hanuman Gada',
    shortName: 'Hanuman Gada',
    category: 'Mace Training',
    description:
      'An entry-level training mace with a comfortable turned handle for overhead movement, core control, and functional strength.',
    use: 'Gym conditioning, wrist strength, core stability, overhead training',
    weights: ['3 kg'],
    material: 'Wood',
    price: '₹990 /piece',
    specs: [
      { label: 'Weight', value: '3 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Gym, Akhada' },
    ],
    image: '/products/hanuman.jpg',
    featured: true,
  },
  {
    slug: 'wooden-hanuman-gada-6kg',
    name: '6 kg Wooden Hanuman Gada',
    shortName: 'Hanuman Gada',
    category: 'Mace Training',
    description:
      'A mid-weight mace for progressing overhead strength, rotational core work, and grinding strength patterns.',
    use: 'Core stability, overhead training, rotational strength',
    weights: ['6 kg'],
    material: 'Wood',
    price: '₹1,600 /piece',
    specs: [
      { label: 'Weight', value: '6 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Gym, Akhada' },
    ],
    image: '/products/wooden-hanuman-gada-6kg.jpg',
  },
  {
    slug: 'wooden-hanuman-gada-10kg',
    name: '10 kg Wooden Hanuman Gada',
    shortName: 'Hanuman Gada',
    category: 'Mace Training',
    description:
      'A heavy traditional gada for advanced strength and conditioning, built for serious overhead and rotational work.',
    use: 'Advanced strength, wrist and shoulder conditioning, akhada training',
    weights: ['10 kg'],
    material: 'Wood',
    price: '₹2,500 /piece',
    specs: [
      { label: 'Weight', value: '10 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Gym, Akhada' },
    ],
    image: '/products/wooden-hanuman-gada-10kg.jpg',
  },
  {
    slug: 'wooden-hanuman-gada-20kg',
    name: '20 kg Wooden Hanuman Gadha',
    shortName: 'Hanuman Gada',
    category: 'Mace Training',
    description:
      'Our heaviest single-piece gada, built for elite akhada wrestlers and strength athletes training maximal grip and shoulder endurance.',
    use: 'Elite strength training, akhada wrestling conditioning',
    weights: ['20 kg'],
    material: 'Wood',
    price: '₹4,999 /piece',
    specs: [
      { label: 'Weight', value: '20 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Akhada' },
    ],
    image: '/products/wooden-hanuman-gada-20kg.jpg',
  },


  // ---------- Samtola & SAMTOLA ----------
  {
    slug: 'wooden-samtola-4kg',
    name: '4 kg Wooden Samtola',
    shortName: 'Samtola',
    category: 'Samtola & Samtola',
    description:
      'Traditional Indian wooden training equipment designed for strength, balance, coordination, and functional fitness.',
    use: 'Grip strength, arm and shoulder strength, coordination, balance, body control',
    weights: ['4 kg'],
    material: 'Wood',
    price: '₹1,200 /piece',
    specs: [
      { label: 'Weight', value: '4 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Home, Akhada' },
    ],
    image: '/products/wooden-samtola-4kg.jpg',
  },
  {
    slug: 'wooden-Samtola-15kg',
    name: '15 kg Wooden Samtola',
    shortName: 'Samtola',
    category: 'Samtola & Samtola',
    description:
      'A mid-weight Samtola for building balance, coordination, and functional strength in traditional akhada training.',
    use: 'Balance training, functional strength, akhada conditioning',
    weights: ['15 kg'],
    material: 'Wood',
    price: '₹3,450 /piece',
    specs: [
      { label: 'Weight', value: '15 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Akhada' },
    ],
    image: '/products/Samtola2.png',
  },
  {
    slug: 'wooden-Samtola-16kg',
    name: '16 kg Wooden Samtola',
    shortName: 'Samtola',
    category: 'Samtola & Samtola',
    description:
      'A heavier Samtola for advanced balance and strength training, built for serious akhada practitioners.',
    use: 'Advanced balance training, functional strength, akhada conditioning',
    weights: ['16 kg'],
    material: 'Wood',
    price: '₹4,500 /piece',
    specs: [
      { label: 'Weight', value: '16 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Akhada' },
    ],
    image: '/products/Samtola.jpeg',
  },
  {
    slug: 'wooden-Samtola-18kg',
    name: '18 kg Wooden Samtola',
    shortName: 'Samtola',
    category: 'Samtola & Samtola',
    description:
      'A heavy-duty Samtola built for experienced athletes progressing their strength and balance training further.',
    use: 'Advanced balance training, functional strength, akhada conditioning',
    weights: ['18 kg'],
    material: 'Wood',
    price: '₹4,400 /piece',
    specs: [
      { label: 'Weight', value: '18 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Akhada' },
    ],
    image: '/products/wooden-samtola-18kg.jpg',
  },
  {
    slug: 'wooden-Samtola-22kg',
    name: '22 kg Wooden Samtola',
    shortName: 'Samtola',
    category: 'Samtola & Samtola',
    description:
      'Our heaviest Samtola, built for elite akhada wrestlers and advanced strength and balance training.',
    use: 'Elite strength and balance training, akhada wrestling conditioning',
    weights: ['22 kg'],
    material: 'Wood',
    price: '₹6,500 /piece',
    specs: [
      { label: 'Weight', value: '22 kg' },
      { label: 'Material', value: 'Wood' },
      { label: 'Club Type', value: 'Single Club' },
      { label: 'Finish', value: 'Natural wood' },
      { label: 'Usage', value: 'Akhada' },
    ],
    image: '/products/wooden-samtola-22kg.jpg',
  },

  // ---------- BODYWEIGHT TRAINING ----------
  {
    slug: 'wooden-parallettes-pushup-bars',
    name: 'Wooden Parallettes Push Up Bars',
    shortName: 'Push-Up Bars',
    category: 'Bodyweight Training',
    description:
      'A sturdy pair of hardwood push-up bars/parallettes with a natural grip, built to handle serious bodyweight training loads.',
    use: 'Push-ups, L-sits, wrist relief, calisthenics conditioning',
    weights: [],
    material: 'Hardwood',
    price: '₹500 /piece',
    specs: [
      { label: 'Push Up Bar Type', value: 'Parallel Bar Set' },
      { label: 'Weight Capacity', value: '150 kg' },
      { label: 'Grip Material', value: 'Natural' },
      { label: 'Material', value: 'Hardwood' },
      { label: 'Usage', value: 'Gym, Home Use' },
    ],
    image: '/products/pushupbar.jpeg',
  },

  // ---------- GYMNASTICS EQUIPMENT ----------
  {
    slug: 'wooden-swedish-ladder-1-35m',
    name: '1.35 M Wooden Swedish Ladder',
    shortName: 'Swedish Ladder',
    category: 'Gymnastics Equipment',
    description:
      'A wall-mounted wooden Swedish ladder for stretching, calisthenics, gymnastics training, and rehabilitation exercises.',
    use: 'Stretching, calisthenics, gymnastics training, rehabilitation',
    weights: [],
    material: 'Wood',
    price: '₹20,000 /piece',
    specs: [
      { label: 'Height', value: '1.35 m' },
      { label: 'Material', value: 'Wood' },
      { label: 'Mounting', value: 'Wall-mounted' },
      { label: 'Usage', value: 'Gym, Studio, Rehab Centre' },
    ],
    image: '/products/wooden-swedish-ladder.jpg',
    featured: true,
  },
  {
    slug: 'spring-board',
    name: 'Gymnastics Spring Board',
    shortName: 'Spring Board',
    category: 'Gymnastics Equipment',
    description:
      'A durable and responsive wooden spring board designed for vaulting and acrobatic training, offering excellent rebound.',
    use: 'Gymnastics, Vaulting, Acrobatic training',
    weights: [],
    material: 'Wood & Steel Springs',
    price: '₹9,000 /piece',
    specs: [
      { label: 'Equipment Type', value: 'Spring Board' },
      { label: 'Material', value: 'Wood, Steel Springs' },
      { label: 'Usage', value: 'Gymnastics Training' },
    ],
    image: '/products/spring-board.jpg',
  },

  // ---------- WOODEN POLE ----------
  {
    slug: 'wood-mallakhamb-pole-2-6m',
    name: '2.6 M Wood Mallakhamb Pole',
    shortName: 'Mallakhamb Pole',
    category: 'Wooden Poles',
    description:
      'A traditional wooden Mallakhamb pole for practicing this classical Indian sport combining gymnastics, wrestling, and yoga.',
    use: 'Mallakhamb training, gymnastics, core and grip strength',
    weights: [],
    material: 'Wood',
    price: '₹14,000 /piece',
    specs: [
      { label: 'Length', value: '2.6 m' },
      { label: 'Material', value: 'Wood' },
      { label: 'Finish', value: 'Natural wood, polished' },
      { label: 'Usage', value: 'Akhada, Gymnastics Training' },
    ],
    image: '/products/wood-mallakhamb-pole.jpg',
    featured: true,
  },
]

export const categories = [
  'All equipment',
  ...Array.from(new Set(products.map((p) => p.shortName))),
]

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)

export const whatsappUrl = 'https://wa.me/message/YOUR_SHORTLINK_HERE'
export const emailAddress = 'abihasportsindustries@gmail.com'