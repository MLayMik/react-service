import type { z } from 'zod'
import type {
  ArticleSchema,
  BaseArticleSchema,
  ParagraphSchema,
} from './types'

const paragraphs: z.infer<typeof ParagraphSchema>[] = [
  {
    image: 'https://assets-global.website-files.com/6148fa2c46804b7d3fa1746d/6317aef176b9a869666b221c_The%20Ultimate%20Guide%20to%20Choosing%20the%20Right%20Truck%20Repair%20Shop.jpg',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.',
      'Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit',
    ],
  },
  {
    image: 'https://assets-global.website-files.com/6148fa2c46804b7d3fa1746d/6317aef176b9a869666b221c_The%20Ultimate%20Guide%20to%20Choosing%20the%20Right%20Truck%20Repair%20Shop.jpg',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.',
      'Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat. Lorem ipsum dolor sit',
    ],
  },
]

const articles: z.infer<typeof BaseArticleSchema>[] = [
  {
    id: 1,
    name: 'Ремонт двигателя',
    description: 'Мелкая проверка и ремонт двигателя',
    date: '2024-04-04',
    preview_image: 'https://heartautocare.com/wp-content/uploads/2023/05/How-to-Diagnose-and-Fix-Common-Engine-Problems-scaled.jpg',
    paragraphs,
  },
  {
    id: 2,
    name: 'Замена масла',
    description: 'Замена масла в двигателе',
    date: '2024-04-05',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeWlfRz-SuEYYShC9XAuDqw8KCgbCTQKcMZPWMZfxXQ&s',
    paragraphs,
  },
  {
    id: 3,
    name: 'Чистка',
    description: 'Чистка салона и кузова',
    date: '2024-04-06',
    preview_image: 'https://i-car.kh.ua/assets/blog/chistka-salona-mashiny.jpg',
    paragraphs,
  },
  {
    id: 4,
    name: 'Мойка',
    description: 'Мойка автомобиля',
    date: '2024-04-07',
    preview_image: 'https://auto-dor.com.ua/wp-content/uploads/2019/09/mojka-mashiny.jpg',
    paragraphs,
  },
  {
    id: 5,
    name: 'Замена тормозных колодок',
    description: 'Замена старых тормозных колодок на новые',
    date: '2024-04-08',
    preview_image: 'https://allzap.ua/all/b12/kak_zamenit_tormoznye_kolodki_svoimi_rukami_ztnpcg6g8d.jpg',
    paragraphs,
  },
  {
    id: 6,
    name: 'Проведение техосмотра',
    description: 'Проверка автомобиля в соответствии с требованиями техосмотра',
    date: '2024-04-09',
    preview_image: 'https://otk.in.ua/wp-content/uploads/2022/09/protokol-otk-scaled.jpg',
    paragraphs,
  },
  {
    id: 7,
    name: 'Замена фильтра воздушного очистителя',
    description: 'Замена фильтра для повышения эффективности воздушной очистки',
    date: '2024-04-10',
    preview_image: 'https://fortunaavto.com.ua/all/image/zamena_vozdushnogo_filtra.jpg',
    paragraphs,
  },
  {
    id: 8,
    name: 'Проверка системы охлаждения',
    description: 'Диагностика и проверка системы охлаждения двигателя',
    date: '2024-04-11',
    preview_image: 'https://ak039.ru/wp-content/uploads/2020/04/Screenshot_9-600x276.jpg',
    paragraphs,
  },
  {
    id: 9,
    name: 'Регулировка тормозов',
    description: 'Регулировка тормозной системы для обеспечения безопасности',
    date: '2024-04-12',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr1i7wVNpTu5KIMO2vUXx0N6cagqUp2KXKQSPY1b4fQ&s',
    paragraphs,
  },
  {
    id: 10,
    name: 'Замена ремня ГРМ',
    description: 'Замена ремня газораспределительного механизма',
    date: '2024-04-13',
    preview_image: 'https://dukatoil.com/wp-content/uploads/2021/08/zamena-remnya-grm.jpg',
    paragraphs,
  },
  {
    id: 11,
    name: 'Обслуживание системы подвески',
    description: 'Техническое обслуживание системы подвески',
    date: '2024-04-14',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThUHdtBB7y3GjwX4hd22mM8ezmKjtWoAidJtQOiFaXw&s',
    paragraphs,
  },
  {
    id: 12,
    name: 'Замена аккумулятора',
    description: 'Замена старого аккумулятора на новый',
    date: '2024-04-15',
    preview_image: 'https://www.servavto.ru/wp-content/uploads/2020/07/zamena-akb.jpg',
    paragraphs,
  },
  {
    id: 13,
    name: 'Ремонт трансмиссии',
    description: 'Капитальный ремонт трансмиссионной системы',
    date: '2024-04-16',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWnD_8C50IPlc_6PjzMhySaxV15Siu-FCgNiYpH3lSA&s',
    paragraphs,
  },
  {
    id: 14,
    name: 'Установка дополнительного оборудования',
    description: 'Установка дополнительного оборудования на фургон',
    date: '2024-04-17',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedyjgkAJn7Peyr1iBHStb0LPtk9B4d2UiTlKVAyjexw&s',
    paragraphs,
  },
  {
    id: 15,
    name: 'Проверка электрической системы',
    description: 'Диагностика и проверка электрической системы',
    date: '2024-04-18',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK399pe7a268I01uLkxrnkm8GMtWJ1aZmKoH_gmO8Er1gSzBMaZS7GMufg_kHTDNm5x0&usqp=CAU',
    paragraphs,
  },
  {
    id: 16,
    name: 'Уход за шасси',
    description: 'Уход за шасси и рамой фургона',
    date: '2024-04-19',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu82cmsBDGQSaPpNje32mjNNjE1j9NOHJl6sprIAII_ajFqNQbO_E5gvJNdcEgNHg1tQ8&usqp=CAU',
    paragraphs,
  },
  {
    id: 17,
    name: 'Регулировка клапанов',
    description: 'Регулировка зазоров клапанов двигателя',
    date: '2024-04-20',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60gQernbNsTZeastIWVenIGWiyfLbbeuOhKcN6kwgVQ&s',
    paragraphs,
  },
  {
    id: 18,
    name: 'Устранение течи масла',
    description: 'Поиск и устранение утечки масла',
    date: '2024-04-21',
    preview_image: 'https://mytechlife.ru/wp-content/uploads/germetik-i-ochistka-pomogut-pri-poverhnostnoj-razgermetizacii-dvs.jpg',
    paragraphs,
  },
  {
    id: 19,
    name: 'Ремонт грузового отсека',
    description: 'Ремонт грузового отсека фургона',
    date: '2024-04-22',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOpl7gqq8M448wdKC1ywjZ9CtHC6_Mn9NttV5fKPJFw&s',
    paragraphs,
  },
  {
    id: 20,
    name: 'Подготовка к зимнему сезону',
    description: 'Подготовка фургона к эксплуатации в зимние условия',
    date: '2024-04-23',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQxDXLZnVMOJL-hayR9deVNz3lRv827Z7z-7973-USA&s',
    paragraphs,
  },
  {
    id: 21,
    name: 'Обновление световой сигнализации',
    description: 'Обновление световой сигнализации и маркировки',
    date: '2024-04-24',
    preview_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfeCEz85-30YKYS_ysYmFxXdSUvsMzV4Vm7Q49aFtcA&s',
    paragraphs,
  },
]

// function generateArticles(
//   articlesArray: z.infer<typeof BaseArticleSchema>[],
// ): z.infer<typeof ArticleSchema>[] {
//   return articlesArray.map(article => ({
//     ...article,
//     similar_articles: articles
//       .filter(a => a.id !== article.id)
//       .slice(0, 5),
//   }))
// }

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function generateArticles(
  articlesArray: z.infer<typeof BaseArticleSchema>[],
): z.infer<typeof ArticleSchema>[] {
  return shuffleArray(articlesArray.map(article => ({
    ...article,
    similar_articles: shuffleArray(
      articlesArray.filter(a => a.id !== article.id),
    ).slice(0, 5),
  })))
}

const articlesWithSimilar: z.infer<typeof ArticleSchema>[] = generateArticles(articles)

export default articlesWithSimilar
