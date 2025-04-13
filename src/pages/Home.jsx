import "../styles/Home.css"
import hero from "../assets/hero-2.png"
import pers_1 from "../assets/pers-1.jpg"
import pers_2 from "../assets/pers-2.jpg"
import pers_3 from "../assets/pers-3.jpg"

function Home() {
  return (
    <>
      <main>
        <div className="hero">
            <img src={hero} alt="" />
        </div>
        <div className="info">
            <div className="content">

                <p className="text-1">Empower Your <span>Future</span>. Learn Anywhere. Build Everywhere For <span>A Bright Career</span></p>
                <p className="text-2">What do  <span>WE</span> offer you?</p>
                
            </div>

            <div className="cards">
                <div className="card card-1">
                    <p>Personalized Learning Experience</p>
                </div>
                <div className="card card-2">
                    <p>Improved Retention & Spaced Repetition</p>
                </div>
                <div className="card card-3">
                    <p>Convenient Access Across Devices</p>
                </div>
                <div className="card card-4">
                    <p>Encourages Active Engagement</p>
                </div>
                <div className="card card-5">
                    <p>Prepares for Real-Life Usage</p>
                </div>
            </div>

        </div>
        <div className="testimonials">

            <div className="testimonial testimonial-1">
                <img src={pers_1} alt="" />
                <p className="name">Sophie L.</p>
                <p className="level">B1-B2</p>
                <p className="text">"As a doctor I need technical German. This website helped me read medical articles!"</p>
            </div>

            <div className="testimonial testimonial-2">
                <img src={pers_2} alt="" />
                <p className="name">Yuki S.</p>
                <p className="level">A2-B1</p>
                <p className="text">"Not just language – I also learned German culture through texts about traditions."</p>
            </div>

            <div className="testimonial testimonial-3">
                <img src={pers_3} alt="" />
                <p className="name">Marco T</p>
                <p className="level">B2-C1</p>
                <p className="text">"Thanks to the business texts, I can now negotiate with German clients easily."</p>
            </div>

        </div>
      </main>
    </>
  );
}

export default Home;
