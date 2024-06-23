import './App.css'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import '../../components/Carousel/Carousel.css'

const photoUrls = [
  'https://x.yummlystatic.com/web/bubble/cuisine/american.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/kid-friendly.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/italian.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/asian.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/mexican.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/french.png', 
  'https://x.yummlystatic.com/web/bubble/cuisine/southwestern.png', 
  'https://x.yummlystatic.com/web/bubble/cuisine/barbecue-bbq.png', 
  'https://x.yummlystatic.com/web/bubble/cuisine/indian.png', 
  'https://x.yummlystatic.com/web/bubble/cuisine/chinese.png', 
  'https://x.yummlystatic.com/web/bubble/cuisine/mediterranean.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/greek.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/english.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/spanish.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/thai.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/german.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/moroccan.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/irish.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/japanese.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/cuban.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/hawaiian.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/swedish.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/hungarian.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/portuguese.png',
  'https://x.yummlystatic.com/web/bubble/cuisine/brazilian.png',

];

const text=[
  'American',
  'Kid-Friendly',
  'Italian',
  'Asian',
  'Mexican',
  'French',
  'South Western',
  'Barbecue',
  'Indian',
  'Chinese',
  'Cajun & Creole',
  'Mediterrnean',
  'Greek',
  'English',
  'Spanish',
  'Thai',
  'German',
  'Moroccan',
  'Irish',
  'Japanese',
  'Cuban',
  'Hawaiian',
  'Swedish',
  'Hungarian',
  'Portugese',
  'Brazaillian'
]
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel photos={photoUrls}textArray={text}/>
    </div>

  );
}

export default App;
