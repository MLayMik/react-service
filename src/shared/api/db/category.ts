export type ArrayToUnion<T extends readonly unknown[]> = T[number]

export const Categories = [
  'TIR Сервіс',
  'Віділ запчастин',
  'Мотор сервіс',
  'Турбо сервіс',
  'Металообробка',
  'Мийка, шиномонтаж',
  'Вантажні перевезення',
  'Стоянка TIR',
  'Тех. огляд',
] as const
export type CategoriesType = ArrayToUnion<typeof Categories>
