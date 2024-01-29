import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://www.instagram.com/m4rc3l0_h3nr1qu3/" target='_blank'><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/marcelo-henrique-0a299019a/" target='_blank'><FaLinkedin /></a></li>
                <li><a href="https://github.com/Marcelo-Henrique-dev" target='_blank'><FaGithub /></a></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer