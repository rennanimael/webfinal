import './index.scss';
import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className = "navbar">
            <Link href ="/">
            <h1 className = "page-title">Filmes</h1>
            </Link>

            <Link href ="/pages/Sobre">
            <p className='about-page'>About us</p>  
            </Link>       
                          
        </nav>
    )
}