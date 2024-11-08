import type { z } from 'zod'

import type {
  BaseProductSchema,
  ProductSchema,
  SpecsSchema,
} from './types'

const specs: z.infer<typeof SpecsSchema> = [
  { name: 'Товщина', value: '1/2: 45/131 мм' },
  { name: 'Внешний калибр', value: '429 мм' },
  { name: 'Резьба диска', value: 'M16 x 1,5' },
  { name: 'Поверхность', value: 'Промасленная' },
  { name: 'Тип', value: 'Вентилируемый' },
  { name: 'Масса нетто', value: '30,14 кг' },
  { name: 'Товщина', value: '1/2: 45/131 мм' },
  { name: 'Внешний калибр', value: '429 мм' },
  { name: 'Резьба диска', value: 'M16 x 1,5' },
  { name: 'Товщина', value: '1/2: 45/131 мм' },
  { name: 'Внешний калибр', value: '429 мм' },
  { name: 'Резьба диска', value: 'M16 x 1,5' },
  { name: 'Поверхность', value: 'Промасленная' },
  { name: 'Тип', value: 'Вентилируемый' },
  { name: 'Масса нетто', value: '30,14 кг' },
]

const full_description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`

const baseProducts: z.infer<typeof BaseProductSchema>[] = [
  {
    code: 63558726,
    name: 'Распредвал для Scania',
    description: 'Распредвал для Scania – высококачественная деталь, обеспечивающая эффективную работу двигателя. Изготовлен из прочного материала, обладает долгим сроком службы и отличной производительностью. Подходит для различных моделей Scania, обеспечивая надежность и высокий уровень производительности.',
    discount: true,
    image: 'https://images.prom.ua/4665477938_w640_h640_raspredval-scania-1270.jpg',
    price: 2200,
    rate: {
      quantity: 127,
      rate: 4.8,
    },
    price_with_discount: 2000,
    specs,
  },
  {
    code: 24547962,
    name: 'Тормозные колодки Bosch',
    description: 'Оптимальное решение для надежного торможения – тормозные колодки Bosch. Изготовлены из высококачественных материалов, обеспечивают отличное сцепление с тормозным диском. Продукция Bosch известна своей надежностью и долговечностью. Совместимы с различными марками и моделями автомобилей.',
    discount: false,
    image: 'https://content2.rozetka.com.ua/goods/images/big/366742979.jpg',
    price: 1200,
    rate: {
      quantity: 95,
      rate: 4.5,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 24243803,
    name: 'Фильтр масляный Mann-Filter',
    description: 'Обеспечьте оптимальное функционирование двигателя с фильтром масляным Mann-Filter. Эффективно задерживает твердые частицы и загрязнения, предотвращая износ деталей. Произведен с применением современных технологий для обеспечения максимальной производительности и долговечности вашего автомобиля.',
    discount: true,
    image: 'https://agrosoyuz.ua/2638-large_default/filtr-maslyanyj-w920-21-mann-vysokij.jpg',
    price: 800,
    rate: {
      quantity: 80,
      rate: 4.7,
    },
    price_with_discount: 750,
    specs,
  },
  {
    code: 23513099,
    name: 'Свечи зажигания NGK',
    description: 'Свечи зажигания NGK – надежное решение для эффективного сгорания топлива в цилиндрах. Обеспечивают стабильную и мощную работу двигателя. Изготовлены из высококачественных материалов, обладают высокой степенью надежности. Подходят для широкого спектра автомобилей различных марок.',
    discount: true,
    image: 'https://motostyle.ua/image/cache/data/motostyle/product/32219/svecha-zazhiganiya-ngk-2087-bkr5eya-450x450.jpeg',
    price: 1500,
    rate: {
      quantity: 110,
      rate: 4.9,
    },
    price_with_discount: 1300,
    specs,
  },
  {
    code: 78311815,
    name: 'Амортизаторы Monroe',
    description: 'Обеспечьте комфорт и безопасность во время движения с амортизаторами Monroe. Изготовлены с использованием передовых технологий, обеспечивают отличную амортизацию и стабильность на дороге. Подходят для различных марок автомобилей, гарантируя надежную работу под любыми условиями.',
    discount: false,
    image: 'data:image/jpeg;base64,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',
    price: 1800,
    rate: {
      quantity: 92,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 26845045,
    name: 'Ремень генератора Gates',
    description: 'Ремень генератора Gates – надежное решение для обеспечения бесперебойной работы системы зарядки. Изготовлен из прочных материалов, обеспечивает отличное сцепление и долгий срок службы. Подходит для различных моделей автомобилей, гарантируя эффективную передачу энергии от двигателя к генератору.',
    discount: true,
    image: 'https://mir-auto.org/wp-content/uploads/2019/11/S113701315Gates.jpg',
    price: 600,
    rate: {
      quantity: 78,
      rate: 4.5,
    },
    price_with_discount: 550,
    specs,
  },
  {
    code: 24356884,
    name: 'Топливный насос Bosch',
    description: 'Обеспечьте надежную подачу топлива в систему впрыска с топливным насосом Bosch. Изготовлен с использованием передовых технологий, обеспечивает стабильное топливоподачу для эффективной работы двигателя. Подходит для различных марок автомобилей, обеспечивая высокий уровень производительности.',
    discount: false,
    image: 'https://ucar.net.ua/images/20210615/Toplivnyj-nasos-Bosch-0580454094-front-800x800-1623705668.jpg',
    price: 1400,
    rate: {
      quantity: 85,
      rate: 4.7,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 80663404,
    name: 'Термостат Behr',
    description: 'Термостат Behr - важная деталь системы охлаждения вашего автомобиля. Обеспечивает оптимальную температуру работы двигателя, предотвращая перегрев или недогрев. Изготовлен из высококачественных материалов, обеспечивая долгий срок службы. Совместим с различными моделями автомобилей.',
    discount: true,
    image: 'https://a.allegroimg.com/original/03ba7d/e24db84648e2ac0942ce9f4db282/TERMOSTAT-BEHR-MAHLE-FIAT-GRANDE-PUNTO-1-2-1-4',
    price: 950,
    rate: {
      quantity: 102,
      rate: 4.6,
    },
    price_with_discount: 900,
    specs,
  },
  {
    code: 88393813,
    name: 'Радиатор охлаждения Nissens',
    description: 'Радиатор охлаждения Nissens - ключевая деталь системы охлаждения. Обеспечивает эффективное охлаждение двигателя, предотвращая перегрев в условиях высоких температур. Изготовлен из высококачественных материалов, обеспечивая надежность и долгий срок службы.',
    discount: true,
    image: 'https://images2.exist.ua/media/images/products/2023/07/2023-22-07_21-36-24_14711888.jpg',
    price: 1600,
    rate: {
      quantity: 95,
      rate: 4.7,
    },
    price_with_discount: 1500,
    specs,
  },
  {
    code: 79697822,
    name: 'Тормозные диски Zimmermann',
    description: 'Тормозные диски Zimmermann - высококачественные компоненты тормозной системы. Обеспечивают эффективное и безопасное торможение. Изготовлены из прочного сплава, обладают отличной теплоотводящей способностью. Совместимы с различными марками автомобилей.',
    discount: false,
    image: 'https://www.otto-zimmermann.de/site/assets/files/1042/150-2908-70_1-formulaz.390x0.jpg',
    price: 1800,
    rate: {
      quantity: 110,
      rate: 4.8,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 4786181,
    name: 'Датчик кислорода Denso',
    description: 'Датчик кислорода Denso - важная компонента системы управления двигателем. Обеспечивает точное измерение содержания кислорода в отработанных газах, оптимизируя смесь воздуха и топлива для эффективной работы двигателя. Совместим с различными моделями автомобилей.',
    discount: true,
    image: 'https://zenit-auto.com.ua/imgs/denso/dox0150_2.jpg',
    price: 900,
    rate: {
      quantity: 75,
      rate: 4.5,
    },
    price_with_discount: 850,
    specs,
  },
  {
    code: 34274091,
    name: 'Рулевая рейка TRW',
    description: 'Рулевая рейка TRW - надежное решение для стабильного и легкого управления автомобилем. Изготовлена с использованием высококачественных материалов, обеспечивает точное и плавное вращение рулевого колеса. Подходит для различных марок и моделей автомобилей.',
    discount: false,
    image: 'https://dok.ua/images/ppc_images/286_ads_image.jpg',
    price: 1300,
    rate: {
      quantity: 98,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 8078128,
    name: 'Масляный насос Aisin',
    description: 'Масляный насос Aisin - ключевой элемент системы смазки двигателя. Обеспечивает постоянный поток масла для смазывания двигателя и его компонентов. Изготовлен с применением передовых технологий, обеспечивает надежность и долгий срок службы.',
    discount: true,
    image: 'https://digital-assets.tecalliance.services/images/400/93692c0aa2c1cb0e7e5a7f63d1fbc9c416ab8002.jpg',
    price: 1100,
    rate: {
      quantity: 85,
      rate: 4.8,
    },
    price_with_discount: 1000,
    specs,
  },
  {
    code: 3012590,
    name: 'Комплект сцепления Exedy',
    description: 'Комплект сцепления Exedy - высококачественное решение для надежной передачи мощности от двигателя к трансмиссии. Идеально подходит для замены изношенных деталей, обеспечивая отличную сцепляемость и долгий срок эксплуатации.',
    discount: false,
    image: 'https://media.autoersatzteile.de/360_photos/7813914/preview.jpg',
    price: 1600,
    rate: {
      quantity: 92,
      rate: 4.7,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 3441987,
    name: 'Сальник коленвала Corteco',
    description: 'Сальник коленвала Corteco - эффективная защита от утечек масла в районе коленвала. Изготовлен из высококачественных материалов, обеспечивает надежное уплотнение и предотвращение проникновения вредных веществ в двигатель. Совместим с различными автомобилями.',
    discount: true,
    image: 'https://images.prom.ua/2833687174_w600_h600_2833687174.jpg',
    price: 750,
    rate: {
      quantity: 80,
      rate: 4.5,
    },
    price_with_discount: 700,
    specs,
  },
  {
    code: 6844543,
    name: 'Термостатический корпус Wahler',
    description: 'Термостатический корпус Wahler - важная деталь системы охлаждения. Обеспечивает оптимальную температуру работы двигателя, регулируя поток охлаждающей жидкости. Изготовлен из прочного материала, обеспечивает стабильную работу.',
    discount: false,
    image: 'https://i.avto.pro/img/pi/WAHLER/310987D/wahler-310987d-bp191c32.jpg',
    price: 500,
    rate: {
      quantity: 75,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 2164729,
    name: 'Шаровая опора Lemforder',
    description: 'Обеспечьте надежность и устойчивость ходовой части с шаровой опорой Lemforder. Изготовлена из прочных материалов, обеспечивает отличное сцепление с дорогой. Подходит для различных марок автомобилей.',
    discount: true,
    image: 'https://images.prom.ua/4497658039_w640_h640_sharovaya-opora-lemforder.jpg',
    price: 800,
    rate: {
      quantity: 90,
      rate: 4.7,
    },
    price_with_discount: 750,
    specs,
  },
  {
    code: 6398727,
    name: 'Сальник коленвала Corteco',
    description: 'Сальник коленвала Corteco - надежное уплотнение для вашего двигателя. Предотвращает утечку масла и обеспечивает надежную работу. Изготовлен из высококачественных материалов для долговечности.',
    discount: false,
    image: 'https://bazza.com.ua/imgs/corteco/salnik-kolenvala-peredniy-corteco-20037126b.jpg',
    price: 600,
    rate: {
      quantity: 85,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 5350624,
    name: 'Пружина подвески H&R',
    description: 'Повысьте уровень комфорта и управляемости с пружиной подвески H&R. Изготовлена из высококачественных материалов, обеспечивает стабильность на дороге. Подходит для тюнинга и повышения производительности автомобиля.',
    discount: true,
    image: 'https://cdn.autoersatzteile.de/thumb?id=15743761&m=0&n=0&lng=ru&rev=94077853',
    price: 1200,
    rate: {
      quantity: 95,
      rate: 4.8,
    },
    price_with_discount: 1100,
    specs,
  },
  {
    code: 4289142,
    name: 'Термостойкий антифриз Zerex',
    description: 'Обеспечьте оптимальную температуру охлаждения с термостойким антифризом Zerex. Защищает систему охлаждения от замерзания и перегрева. Подходит для широкого спектра автомобилей.',
    discount: false,
    image: 'https://i5.walmartimages.com/seo/Zerex-G05-Phosphate-Free-Antifreeze-Coolant-Concentrate-1-GA_b292dae7-4596-49c9-9e31-543d5a465a5f.d7fcf0e9b9e9eaae751c4e3bbb0686ef.png',
    price: 15,
    rate: {
      quantity: 70,
      rate: 4.5,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 6302835,
    name: 'Топливный фильтр Mann-Filter',
    description: 'Гарантируйте чистоту топлива с топливным фильтром Mann-Filter. Эффективно задерживает загрязнения и обеспечивает бесперебойную подачу топлива в систему впрыска. Произведен из высококачественных материалов для долговечности и надежности.',
    discount: true,
    image: 'https://images2.exist.ua/media/images/products/2021/10/2021-17-10_17-01-06_9361303.jpg',
    price: 300,
    rate: {
      quantity: 80,
      rate: 4.7,
    },
    price_with_discount: 280,
    specs,
  },
  {
    code: 4793538,
    name: 'Трос ручника Febi Bilstein',
    description: 'Обеспечьте надежное удержание автомобиля на месте с тросом ручника Febi Bilstein. Изготовлен из прочных материалов, обеспечивает надежную фиксацию тормозов. Совместим с различными марками и моделями автомобилей.',
    discount: false,
    image: 'https://bipauto.com.ua/imgs/013/435/921/13435921.jpg',
    price: 40,
    rate: {
      quantity: 60,
      rate: 4.5,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 8598190,
    name: 'Топливный фильтр Mann-Filter',
    description: 'Гарантируйте чистоту топлива с топливным фильтром Mann-Filter. Эффективно задерживает загрязнения и обеспечивает бесперебойную подачу топлива в систему впрыска. Произведен из высококачественных материалов для долговечности и надежности.',
    discount: true,
    image: 'https://bezdor4x4.com.ua/uploads/content/2019/01/17/source/snorkel-jeep-wrangler-yj-1987-1996-1-28046x.jpg',
    price: 300,
    rate: {
      quantity: 80,
      rate: 4.7,
    },
    price_with_discount: 280,
    specs,
  },
  {
    code: 7557058,
    name: 'Ремкомплект генератора Valeo',
    description: 'Обеспечьте бесперебойную работу генератора с ремкомплектом генератора Valeo. Включает в себя все необходимые детали для эффективного обслуживания и восстановления генератора. Изготовлен из качественных материалов.',
    discount: true,
    image: 'https://a.allegroimg.com/original/036647/0547a9794112852bd35eb6560e7f/Zestaw-naprawczy-alternatora-VALEO-BMW-E60-E63',
    price: 150,
    rate: {
      quantity: 75,
      rate: 4.8,
    },
    price_with_discount: 130,
    specs,
  },
  {
    code: 56208109,
    name: 'Фильтр салона MANN-FILTER',
    description: 'Обеспечьте свежий воздух в салоне вашего автомобиля с фильтром салона MANN-FILTER. Эффективно задерживает пыль, грязь и неприятные запахи. Произведен из высококачественных материалов.',
    discount: false,
    image: 'https://images2.exist.ua/media/images/products/2020/10/45__MuMve3N.jpg',
    price: 25,
    rate: {
      quantity: 90,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 89147221,
    name: 'Ремень ГРМ ContiTech',
    description: 'Обеспечьте точное взаимодействие двигательных компонентов с ремнем ГРМ ContiTech. Изготовлен из прочных материалов, обеспечивает долгий срок службы и надежную передачу момента. Подходит для различных моделей автомобилей.',
    discount: true,
    image: 'https://images.prom.ua/3789431101_w600_h600_3789431101.jpg',
    price: 350,
    rate: {
      quantity: 100,
      rate: 4.9,
    },
    price_with_discount: 320,
    specs,
  },
  {
    code: 70812778,
    name: 'Сайлентблоки Lemforder',
    description: 'Обеспечьте стабильность и комфорт в управлении с сайлентблоками Lemforder. Изготовлены из высококачественных материалов, обеспечивают надежное крепление подвески. Подходят для различных марок и моделей автомобилей.',
    discount: false,
    image: 'https://content1.rozetka.com.ua/goods/images/big/365562656.jpg',
    price: 70,
    rate: {
      quantity: 85,
      rate: 4.7,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 70879715,
    name: 'Топливный фильтр Hengst',
    description: 'Обеспечьте чистоту топлива с топливным фильтром Hengst. Эффективно задерживает загрязнения и обеспечивает бесперебойную подачу топлива в систему впрыска. Произведен из высококачественных материалов.',
    discount: true,
    image: 'https://images2.exist.ua/media/images/products/2022/05/2022-06-05_23-00-48_13293062.jpg',
    price: 280,
    rate: {
      quantity: 75,
      rate: 4.8,
    },
    price_with_discount: 260,
    specs,
  },
  {
    code: 34295303,
    name: 'Стартер Bosch',
    description: 'Гарантируйте надежный пуск вашего двигателя с стартером Bosch. Изготовлен из высококачественных материалов, обеспечивает стабильную работу. Подходит для широкого спектра автомобилей.',
    discount: false,
    image: 'https://images2.exist.ua/media/images/products/2023/09/2023-05-09_18-42-19_15336291.jpg',
    price: 400,
    rate: {
      quantity: 90,
      rate: 4.6,
    },
    price_with_discount: null,
    specs,
  },
  {
    code: 38026109,
    name: 'Масляный насос Febi Bilstein',
    description: 'Обеспечьте надежное смазывание двигателя с масляным насосом Febi Bilstein. Изготовлен из прочных материалов, обеспечивает стабильный масляный поток. Подходит для различных марок и моделей автомобилей.',
    discount: true,
    image: 'https://romario-auto.com/imgbank/Image/webp/1315639_101086.webp',
    price: 180,
    rate: {
      quantity: 80,
      rate: 4.7,
    },
    price_with_discount: 160,
    specs,
  },
  {
    code: 85136784,
    name: 'Подшипники колеса SKF',
    description: 'Обеспечьте плавное вращение колес с подшипниками колеса SKF. Изготовлены из высококачественных материалов, обеспечивают надежность и долгий срок службы. Подходят для различных марок автомобилей.',
    discount: false,
    image: 'https://scooter-boom.com.ua/1248-large_default/podshipnik-kolesa-minarelli-skf-6203-2rsh.jpg',
    price: 120,
    rate: {
      quantity: 95,
      rate: 4.8,
    },
    price_with_discount: null,
    specs,
  },
]

function generateProducts(
  productsArray: z.infer<typeof BaseProductSchema>[],
): z.infer<typeof ProductSchema>[] {
  return productsArray.map(product => ({
    ...product,
    full_description,
    reviews: Array.from(
      { length: Math.floor(Math.random() * 6) + 3 },
    ),
    quantity: Math.floor(Math.random() * 11),
    images: Array.from({ length: 6 }, () => product.image),
    similar_products: baseProducts
      .filter(p => p.code !== product.code)
      .slice(0, 7),
  }))
}

const products: z.infer<typeof ProductSchema>[] = generateProducts(baseProducts)

export default products
