import cold_jpg from './image/cold.jpg';
import netral_jpg from './image/netral.jpg';
import warm_jpg from './image/warm.jpg';
import hold1 from './image/interier/3-1.jpg'
import hold2 from './image/interier/3-2.jpg'
import hold3 from './image/interier/3-3.jpg'
import nitral1 from './image/interier/2-1.jpg'
import nitral2 from './image/interier/2-2.jpg'
import nitral3 from './image/interier/2-3.jpg'
import warm1 from './image/interier/1-1.jpg'
import warm2 from './image/interier/1-2.jpg'
import warm3 from './image/interier/1-3.jpg'

export const lightOptions = [
    {
        image: cold_jpg,
        title: 'Холодный'
    },
    {
        image: netral_jpg,
        title: 'Нейтральный'
    },
    {
        image: warm_jpg,
        title: 'Теплый'
    },
]

export const oneDetail = {
    'Класс': 'Standart',
    'Потребляемая мощность': '59 Вт.',
    'Сила света': '435345 Люмен = 10ламп накаливания по 40 Вт.',
    'Гарантия': '3 года',
    'Монтаж': 'Да',
    'Итого сумма': '2594 рублей',
}

export const photo = [
    [
        hold1, hold2, hold3
    ],
    [
        nitral1, nitral2, nitral3
    ],
    [
        warm1, warm2, warm3
    ]
]

export const bottomData = [
    'Вариант кухни',
    'Размеры',
    'Сенсор',
    'Питающий кабель',
    'Блок Питания',
    'Цвет свечения',
    'Монтаж',
    'Корзина'
]