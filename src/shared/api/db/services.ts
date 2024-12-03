import type { z } from 'zod'
import type { PriceSchema, ServiceSchema } from './types'

const description = `Это текст-"рыба", часто используемый
в печати и вэб-дизайне. Lorem Ipsum является`

const full_description = `Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const prices: z.infer<typeof PriceSchema>[] = [
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 1461',
    duration: { min: 2, max: 3 },
    price: 25500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 20500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 10 },
    price: 15500,
  },
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 32500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 5 },
    price: 25500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 65500,
  },
]

const services: z.infer<typeof ServiceSchema>[] = [
  {
    id: 1,
    name: 'Ремонт двигунів',
    category: 'Мотор сервіс',
    image: 'https://www.car-service.in.ua/wp-content/uploads/2020/04/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D0%B4%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 2,
    name: 'Cервис ходовой',
    category: 'Тех. огляд',
    image: 'https://autobooking.com/uploads/elfinder/NewFolder/%D0%A5%D0%BE%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F.png',
    description,
    full_description,
    prices,
  },
  {
    id: 3,
    name: 'Сварочные роботы',
    category: 'Металообробка',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yb_Hhn-r5jrGasfitlum3Eug7ceDIkZDLN-sEwyVebKGLxq4qCI3NA6-mrU3dJk1dbo&usqp=CAU',
    description,
    full_description,
    prices,
  },
  {
    id: 4,
    name: 'Дезинфекция и озонирование автомобилей и автобусов',
    category: 'Мийка, шиномонтаж',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3wsNpq4N5l-puikxIQ3JwgaLHNNmi1Ds0w&s',
    description,
    full_description,
    prices,
  },
  {
    id: 5,
    name: 'Токарные роботы',
    category: 'Металообробка',
    image: 'https://shlyah.in.ua/wp-content/uploads/2021/12/sf0c6vuezfwe39r5zniponvihejn2dgaugu31k0n-big-1024x576.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 6,
    name: 'Ремонт турбин',
    category: 'Турбо сервіс',
    image: 'https://service-auto.kiev.ua/photo/yslygi/tyrbinu/remont-turbin-service-kyiv.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 7,
    name: 'Заміна зношених запчастин',
    category: 'Відділ запчастин',
    image: 'https://www.shutterstock.com/shutterstock/photos/2475608255/display_1500/stock-photo-close-up-of-differentials-autoparts-2475608255.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 8,
    name: 'Перевезення грузів',
    category: 'Вантажні перевезення',
    image: 'https://www.seeds.org.ua/wp-content/uploads/2020/04/%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D1%96%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 9,
    name: 'Стоянка для вантажівок',
    category: 'Стоянка TIR',
    image: 'https://logist.today/wp-content/uploads/2020/06/parking_tir.jpg',
    description,
    full_description,
    prices,
  },
  {
    id: 10,
    name: 'Технічний огляд',
    category: 'Тех. огляд',
    image: 'https://centr-avto.com.ua/wp-content/uploads/sertificatsia.jpg',
    description,
    full_description,
    prices,
  },
]

export default services
