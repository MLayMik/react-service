export interface ArticleType {
  id: number
  img: string
  date: string
  title: string
  body: string
}

const articlesId: ArticleType[] = [
  {
    id: 1,
    img: '/src/assets/articles/ArticleImage1.png',
    date: '1 Вересня 2023',
    title: 'Як відбувається ремонт двигунів?',
    body: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
  },
  {
    id: 2,
    img: '/src/assets/articles/ArticleImage2.png',
    date: '1 Вересня 2023',
    title: 'Чому потрібно робити ТО раз в півроку?',
    body: 'Mental models are simple expressions of complex processes or relationships.',
  },
  {
    id: 3,
    img: '/src/assets/articles/ArticleImage3.png',
    date: '1 Вересня 2023',
    title: '10 лайфхаків при мийці автомобіля',
    body: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
  },
]

export default articlesId
