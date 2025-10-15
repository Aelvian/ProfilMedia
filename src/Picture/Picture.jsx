import styles from './Picture.module.css'
import picture from '../assets/picture.jpg'
import { BsYoutube } from 'react-icons/bs';

import { BsTiktok } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Button from './Button.jsx'
import Intro from '../Intro/Introduce.jsx'
import History from '../History/History.jsx'

function profil(){
    const styled ={
        listStyleType: "none",
        marginRight: "30px",
        gap:"15px",
        display:"flex",
        flexDirection: "column",
    }

  
   
    return(
        <>
        <div className={styles.mother}>
            <div className={styles.father}>
        <div className={styles.container}>
            <div className={styles.children}>
    <img className={styles.picture} src={picture}></img>
    <p className={styles.info}>My Social Media</p>
        <div className={styles.child}>
        <ul style={styled}>
            <li className={styles.youtube}>
                <a href="https://www.youtube.com/channel/UC3t5GBHryc3JDPyvG-eA6ug" target='_blank'>
                <button className={styles.link}><BsYoutube style={{ fontSize:'14px' }} /> Youtube</button>
                </a>
            </li>
            <li className={styles.donate}>
               <Button/>
            </li>
            <li className={styles.tiktok}>
            <a href="https://www.tiktok.com/@alvinelvian?lang=en" target='_blank'>
                <button className={styles.tiktok}><BsTiktok style={{ fontSize:'14px' }} /> Tiktok</button>
                </a>
            </li>
            <li className={styles.fesbuk}>
            <a href="https://www.facebook.com/alvin.elvian" target='_blank'>
                <button className={styles.fesbuk}><BsFacebook style={{ fontSize:'13px' }} /> Facebook</button>
                </a>
            </li>
            <li className={styles.instagram}>
            <a href="https://www.instagram.com/alvinelvian/" target='_blank'>
                <button className={styles.instagram}><BsInstagram style={{ fontSize:'13px' }} /> Instagram</button>
                </a>
            </li>
        </ul>
        </div>
        </div>
    </div>
    <Intro/>
    </div>
    </div>
        <History/>
    </>
    );
}
export default profil