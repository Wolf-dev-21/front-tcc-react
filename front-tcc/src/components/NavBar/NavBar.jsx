import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './NavBar.module.css'

import Container from '../Container/Container'

export default function NavBar() {
    return(
        <div>
            <Container>

                <ul className={styles.list}>
                    

                    

                    <li className={styles.item}>
                        <Link to='/Linguagem'>Linguagens</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Teoria'>Teorias</Link>
                    </li>
                    <li className={styles.item}>

                    </li>
                </ul>
            </Container>
            <Outlet/>
        </div>
    )
}