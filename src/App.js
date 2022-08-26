import './App.css';
import SwiperCarousel from './components/SwiperCarousel/SwiperCarousel';
import ShapeOne from "./components/ShapeOne/ShapeOne";
import ShapeTwo from "./components/ShapeTwo/ShapeTwo";

function App() {
  const data = [
    {id:1, name:"Mustafa", age:20},
    {id:2, name:"Hamada", age:17},
    {id:3, name:"Hamoksha", age:11},
  ]
  return ( 
    <>
      <SwiperCarousel items={data}>
        <ShapeOne/>
      </SwiperCarousel>
      <SwiperCarousel items={data} slidesPerView={2} spaceBetween = {0}>
        <ShapeTwo/>
      </SwiperCarousel>
    </>
  );
}

export default App;
