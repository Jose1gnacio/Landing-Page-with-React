import React from "react";
import Card from './card.jsx';
import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';


//create your first component
const infocards = {titulo:'Dragon Ball Z', parrafo:'Dragon Ball (ドラゴンボール lit. Bola de dragón/Esfera del dragón?) es un manga escrito e ilustrado por Akira Toriyama. Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufbreFLuI_xJG8rdRW2RCCEg2h4YNZvOOtQ&usqp=CAU', trailer:'https://www.youtube.com/embed/eqedd5NTbRg', boton:'Dragon Ball Z'};
const Home = () => {
	return (
		
		<div className="text-center" style={{ "background-color":"#660708"}}>
			<Navbar/>
			<Jumbotron/>
			<div className= 'container-fluid' style={{ "background-color":"#660708"}}>

				<div className="row ms-5 me-5 mt-3 mb-3" >
					<div className='col-md-3 col-12'><Card id='a'titulo = {infocards.titulo} parrafo ={infocards.parrafo} img = {infocards.img} trailer={infocards.trailer} boton={infocards.boton}/></div>
					<div className='col-md-3 col-12'><Card id='b'titulo ='Steins;Gate' parrafo ='Steins;Gate es una novela visual japonesa desarrollada por 5pb. y Nitroplus y lanzada el 15 de octubre de 2009 para Xbox 360.' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5HO4EELu_p-HFqmaC-lr7WJ2D8l0HnlASg&usqp=CAU' trailer='https://www.youtube.com/embed/5kqrktJa53w' boton='Steins;Gate'/></div>
					<div className='col-md-3 col-12'><Card id='c'titulo ='Kimetsu no Yaiba' parrafo ='Kimetsu no Yaiba, también conocida bajo su nombre en inglés Demon Slayer, es una serie de manga escrita e ilustrada por Koyoharu Gotōge, cuya publicación comenzó el 15 de febrero de 2016 en la revista semanal Shūkan Shōnen Jump.' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOza2di5JRyo5_Sq-dMCmzDmeUH21zWh1Mw&usqp=CAU' trailer='https://www.youtube.com/embed/t6MXHczeEqc' boton='Kimetsu no Yaiba'/></div>
					<div className='col-md-3 col-12'><Card id='d'titulo ='Shingeki no Kyojin' parrafo ='Shingeki no Kyojin, también conocida en países de habla hispana como Ataque a los titanes y Ataque de los titanes, ​es una serie de manga japonesa escrita e ilustrada por Hajime Isayama' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhhvUQ2VBZYXG8IE1LWS0f00JGD8nE_z2vA&usqp=CAU' trailer='https://www.youtube.com/embed/FRn6xXXF-7s' boton='Shingeki no Kyojin'/></div>
				</div>




			</div>			

			
		</div>
		
	);
};

export default Home;
