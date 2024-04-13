import avatar from './assets/avatar.jpg'
import './App.css'
import { Picture } from './components/picture'
import { CenterMode } from './components/carousel'

const comp = [{
  id: 0,
  text: 'Базово C++, C#, Python'
}, {
  id: 1,
  text: 'Знание SQL и работа с MSSQL и PostgreSQL'
}, {
  id: 2,
  text: 'Знание основ проектирования АСОиУ'
}, {
  id: 3,
  text: 'Понимание ООП'
}
]
const tostusy = [
  {
    id: 0,
    text: 'React'
  }, {
    id: 1,
    text: 'Концепция Чистого код'
  }, {
    id: 2,
    text: 'Python-фреймоворк Flask'
  }, {
    id: 3,
    text: 'Любую NoSQL базу данных'
  }, {
    id: 4,
    text: 'Основы тестирования приложения(написание тестов)'
  }, {
    id: 5,
    text: 'Работа с Docker'
  }, {
    id: 6,
    text: 'Основы дизайна веб-приложений'
  }
]
function App() {
  return (
    <>
      <div>
        <Picture src={avatar} className="logo" alt="avatar" />
        <p>Ворошнин Виталий ака <span className='tag'>slpg_teine</span></p>
      </div>
      <div>
        <p className='compet'>Компетенции</p>
        <CenterMode cards={comp} />
      </div>
      <div>
        <p className='compet'>Хочу изучить</p>
        <CenterMode cards={tostusy} />
      </div>
    </>
  )
}

export default App
