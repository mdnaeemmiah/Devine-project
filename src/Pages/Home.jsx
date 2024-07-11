import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className="flex flex-col relative justify-center items-center min-h-[calc(100vh-116px)]">
            <Hero></Hero>
            
                <img className="absolute w-full bottom-0" src={wave} alt="" />
            
        </div>
           
           
       
    );
};

export default Home;