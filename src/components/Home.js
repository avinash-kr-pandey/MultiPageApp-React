import './Home.css'




const Home = ()=>{
    return(
       <div>
            
    <nav class="navbar background">
        <ul class="nav-list">
            <div class="logo">
                <img src="https://media.istockphoto.com/vectors/the-boy-writes-vector-id1208080665?s=612x612"/>
            </div>
            <li><a href="#web">About</a></li>
            <li><a href="#program">qualification</a></li>
        </ul>
    </nav>
 
    <section class="firstsection">
        <div class="box-main">
            <div class="firstHalf">
                <h1 class="text-big" id="web">
                About Me
                </h1>
                 
                <p class="text-small">
                        My name is Avinash kumar pandey.
                        I am from Jamui(bihar). i'm 21 year old.
                        i've recently completed BCA from national business college, Patna, Under maulana majrul haque arbic and pharsian univercity, Patna
                        I completed intermediate in +2 daabaich patna bihar,
                        I am good in C, C++, Java and I am very good in Html, CSS, JavaScript,react,Bootstrap.
                        I am recently completed internship as a full-stack developer under hoping minds.
                        I done more then three projects like Web resume, Food-grocery-website and instagram-clone, 
                        using technologys React,javasript,bootstrap,MangoDB,html,CSS etc.
                        My strangth is i am hard working, motivating and decipline person.
                        my hobbies are play cricket, lisning music and free time Surfing Internet.
                </p>
 
 
            </div>
        </div>
    </section>
 
    <section class="secondsection">
        <div class="box-main">
            <div class="secondHalf">
                <h1 class="text-big" id="program">
                Qualification
                </h1>
                <p class="text-small">
                    I've recently completed BCA from national business college, Patna, Under maulana majrul haque arbic and pharsian univercity, Patna
                    I completed intermediate in +2 daabaich patna bihar,
                    I am good in C, C++, Java and I am very good in Html, CSS, JavaScript,react,Bootstrap.
                    I am recently completed internship as a full-stack developer under hoping minds.
                    I done more then three projects like Web resume, Food-grocery-website and instagram-clone, 
                    using technologys React,javasript,bootstrap,MangoDB,html,CSS etc.
                </p>
 
 
            </div>
        </div>
    </section>
 
    <footer class="background">
        <p class="text-footer">
           @Avinash kumar
        </p>
 
 
    </footer>
       </div>
    )
}
export default Home;