

import bckg from "../Asset/img/background.jpg";
import Footer from './footer.js';


function Main() {
    return(

        <main>
        <header className="main-header">
            <img src={bckg}></img>
        </header>

        <form action="search">
            <div>
            <label>
                <input type="search" placeholder="Que recherchez-vous ?"></input>
                </label>

            <label>
                <input className="button" type="submit"></input>
            </label>
            </div>
        </form>

        <section>

<h2>Notre solution en 3 points</h2>

<article>
    <h3><i class="fa-solid fa-gear"></i>Configuration</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
</article>

<article>
    <h3><i class="fa-solid fa-clipboard"></i>Monitoring</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia nulla totam aliquid blanditiis
        excepturi veritatis veniam deleniti. Corporis sint aspernatur aut consequatur dolores nobis.</p>
</article>

<article>
    <h3><i class="fa-solid fa-server"></i>Sauvegarde</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia nulla totam aliquid blanditiis
        excepturi veritatis veniam deleniti. Corporis sint aspernatur aut consequatur dolores nobis.</p>
</article>


</section>

<section>

<h2>Choississez votre style d'hébergement</h2>

<article>
    <h3><i class="fa-solid fa-user-group"></i>Serveur Mutualisé</h3>
    <h4>19.90€ /mois</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
</article>

<article>
    <h3><i class="fa-solid fa-user"></i>Serveur Dédié</h3>
    <h4>39€ /mois</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
</article>

<article>
    <h3><i class="fa-solid fa-cloud"></i>Serveur Cloud</h3>
    <h4>49€ /mois</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis deserunt iste fugit
        velit, accusantium dolore cupiditate quas unde placeat adipisci deleniti eligendi rem soluta.</p>
</article>
</section>

<Footer/>

        </main>

    )
}


export default Main