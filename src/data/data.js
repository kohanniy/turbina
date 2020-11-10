import grandson from '../music.mp3';
import music2 from '../music2.mp3';
import music3 from '../music3.mp3';
import music4 from '../music4.mp3';
import cover1 from '../images/cover1.jpg';
import cover2 from '../images/cover2.jpg';
import cover3 from '../images/cover3.jpg';
import cover4 from '../images/cover4.jpg';

export const data = {
  "mainData": {
    "logoImage": 'src/images/logo.svg',
    "linksData": [{
      "linkText": 'Яндекс.Музыка ↗',
      "link": 'https://music.yandex.ru/'
    },{
      "linkText": 'Spotify ↗',
      "link": 'https://www.spotify.com/ru-ru/'
    },{
      "linkText": 'Apple Music ↗',
      "link": 'https://music.apple.com/us/browse'
    },{
      "linkText": 'VK Music ↗',
      "link": 'https://vk.com'
    }],
  },
  "footerData": {
    "footerLeftText": '© Маршак, 2020.',
    "footerRightText": 'Сделано студентами ',
    "footerRightLink": 'Яндекс.Практикум'
  }
}


export const initialSongs = [{
  id: '001',
  author: 'Данил Шпилин',
  originalAuthor: 'Василиса Премудрая',
  title: 'Как хорошо на свете жить',
  song: grandson,
  text: 'We\'ll never get free\n Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n' +
    'Is your son and your daughter\n What you gon\' do\n When there\'s blood in the water\n \n Look me in my eyes\n' +
    'Tell me everything\'s not fine\n Or the people ain\'t happy\n And the river has run dry\n You thought you could go free\n' +
    'But the system is done for\n If you listen here closely\n There\'s a knock at your front door\n \n We\'ll never get free\n' +
    'Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the\n When there\'s blood in the\n' +
    '\n Beg me for mercy\n Admit you were toxic\n You poisoned me just for\n Another dollar in your pocket\n Now I am the violence\n' +
    'I am the sickness\n Won\'t accept your silence\n Beg me for forgiveness\n \n We\'ll never get free\n Lamb to the slaughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the water\n When there\'s blood in the\n' +
    '\n I am the people\n I am the storm\n I am the riot\n I am the swarm\n When the last tree\'s fallen\n The animal can\'t hide\n' +
    'Money won\'t solve it\n What\'s your alibi?\n What\'s your alibi?\n What\'s your alibi?\n' +
    '\n What you gon\' do when there\'s blood in the, blood in the water?\n When there\'s blood in the water\n' +
    'When there\'s blood in the\n When there\'s blood in the water\n',
  link: 'https://www.youtube.com/watch?v=fk-iwTgg_JU',
  cover: cover1
},
{
  id: '002',
  author: 'Света Кока',
  originalAuthor: 'Иван-Дурак',
  title: 'По щучьему велению',
  song: music2,
  text: 'Я хочу закрыть глаза\n' +
  'Ты мое бинго, мой флеш-рояль\n' +
  'Я не хочу назад\n' +
  'Он был репетицией до тебя\n' +
  'Твое тело — живая сталь\n' +
  'Но эта химия не потому\n' +
  'Ты нашу формулу не сдавай\n' +
  'Никому\n' +
  '\n Мы электричество\n' +
  'Чувствуешь между нами ток\n' +
  'Мы анатомически знаем друг друга как никто\n' +
  'А ты меня вычислил\n' +
  'Ты так легко взломал мой код\n' +
  'Мы электричество\n' +
  'Мы любовь\n' +
  'Мы любовь\n',
  link: '',
  cover: cover2
},
{
  id: '003',
  author: 'Dacota',
  originalAuthor: 'Цветик-Семицветик',
  title: 'Любовь-морковь',
  song: music3,
  text: 'We\'ll never get free\n Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n' +
    'Is your son and your daughter\n What you gon\' do\n When there\'s blood in the water\n \n Look me in my eyes\n' +
    'Tell me everything\'s not fine\n Or the people ain\'t happy\n And the river has run dry\n You thought you could go free\n' +
    'But the system is done for\n If you listen here closely\n There\'s a knock at your front door\n \n We\'ll never get free\n' +
    'Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the\n When there\'s blood in the\n' +
    '\n Beg me for mercy\n Admit you were toxic\n You poisoned me just for\n Another dollar in your pocket\n Now I am the violence\n' +
    'I am the sickness\n Won\'t accept your silence\n Beg me for forgiveness\n \n We\'ll never get free\n Lamb to the slaughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the water\n When there\'s blood in the\n' +
    '\n I am the people\n I am the storm\n I am the riot\n I am the swarm\n When the last tree\'s fallen\n The animal can\'t hide\n' +
    'Money won\'t solve it\n What\'s your alibi?\n What\'s your alibi?\n What\'s your alibi?\n' +
    '\n What you gon\' do when there\'s blood in the, blood in the water?\n When there\'s blood in the water\n' +
    'When there\'s blood in the\n When there\'s blood in the water\n',
  link: 'https://www.youtube.com/watch?v=fk-iwTgg_JU',
  cover: cover3
},
{
  id: '004',
  author: 'Prodigy',
  originalAuthor: 'Емеля',
  title: 'Раз-два-три',
  song: music4,
  text: 'Я хочу закрыть глаза\n' +
  'Ты мое бинго, мой флеш-рояль\n' +
  'Я не хочу назад\n' +
  'Он был репетицией до тебя\n' +
  'Твое тело — живая сталь\n' +
  'Но эта химия не потому\n' +
  'Ты нашу формулу не сдавай\n' +
  'Никому\n' +
  '\n Мы электричество\n' +
  'Чувствуешь между нами ток\n' +
  'Мы анатомически знаем друг друга как никто\n' +
  'А ты меня вычислил\n' +
  'Ты так легко взломал мой код\n' +
  'Мы электричество\n' +
  'Мы любовь\n' +
  'Мы любовь\n',
  link: 'https://www.youtube.com/watch?v=dnx89KStOjA',
  cover: cover4
},];
