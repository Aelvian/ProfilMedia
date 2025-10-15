import style from './history.module.css'
import img from '../img/html.jpg'
import css from '../img/css.jpg'
import js from '../img/js.jpg'

function History(){
    return(
        <>
        <div className={style.judul}>
           <h4>Hal-hal dasar yang harus dipelajari ketika membuat web</h4>
        </div>
       <div className={style.mother}>
            <div className={style.father}>
                <div className={style.child}>
                    <img className={style.img} src={img}></img>
                   <div className={style.text}>
                        <p className={style.block}>Html salah satu hal bagian yang penting dari sebuah website , dan ini adalah kerangka dari web</p>
                            <a href="https://www.w3schools.com/html/" target='_blank'>
                                <button className={style.html}>Pelajari html</button>
                            </a>
                   </div>
                </div>
                <div className={style.child}>
                    <img className={style.img} src={css}></img>
                   <div className={style.text}>
                        <p className={style.block}>Css , Adalah bagian dimana sebuah style yang memperbagus dari website yang dibuat </p>
                            <a href="https://www.w3schools.com/Css/" target="_blank">
                                <button className={style.css}>Pelajari Css</button>
                            </a>
                   </div>
                </div>
                <div className={style.child}>
                    <img className={style.img} src={js}></img>
                   <div className={style.text}>
                        <p className={style.block}>JavaScript, adalah sebuah bahasa pemrograman yang membuat website kita menjadi interaktif</p>
                            <a href="https://www.w3schools.com/Js/" target="_blank">
                                <button className={style.js}>Pelajari JavaScript</button>
                            </a>
                   </div>
                </div>
            </div>
       </div>
        </>
    );
}
export default History