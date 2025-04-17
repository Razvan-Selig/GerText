import "../styles/Home.css"
import hero from "../assets/hero-3.png"
import pers_1 from "../assets/pers-1.jpg"
import pers_2 from "../assets/pers-2.jpg"
import pers_3 from "../assets/pers-3.jpg"
import pers_4 from "../assets/pers-4.jpg"
import logo from "../assets/logo-4.png"

import { Link } from "react-router-dom"

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
                <p className="text-2">What do  <span>WE</span> offer <span>YOU</span> ?</p>
                
            </div>

            <div className="cards">
                <div className="card card-1">
                    <p className="card-title">Immersion Without Travel</p>
                    <p className="card-content">Access authentic German content from anywhere, accelerating fluency through real-world exposure.</p>
                </div>
                <div className="card card-2">
                    <p className="card-title">Structured Progress</p>
                    <p className="card-content">Graded texts (A1-C2) allow learners to advance systematically with level-appropriate material.</p>
                </div>
                <div className="card card-3">
                    <p className="card-title">Contextual Vocabulary</p>
                    <p className="card-content">Learn words within meaningful contexts rather than isolated lists (e.g., "der Umweltschutz" in an eco-article).</p>
                </div>
                <div className="card card-4">
                    <p className="card-title">Grammar in Action</p>
                    <p className="card-content">See complex grammar (cases, adjective endings) applied naturally in sentences</p>
                </div>
                <div className="card card-5">
                    <p className="card-title">Cultural Nuance </p>
                    <p className="card-content">Regional dialects, idioms, and cultural references</p>
                </div>
            </div>

        </div>


        <div className="testimonials">

            <div className="testimonials-text">
                <p>You don't believe us? Maybe you will believe <span>THEM</span>.</p>

            </div>

            <div className="testimonials-container">
                <div className="testimonial">
                    <div className="test-l">
                        <img src={pers_1} alt="" />
                    </div>

                    <div className="test-r">
                        <p className="t-level">A2</p>
                        <p className="t-text">"As an A2 learner, I struggled with finding engaging material at my level. The texts on this site helped me go from hesitant to confident in just 3 months.</p>
                        <p className="t-name">David K. | Language Student | Dublin, Ireland</p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="test-l">
                        <img src={pers_2} alt="" />
                    </div>

                    <div className="test-r">
                        <p className="t-level">B1</p>
                        <p className="t-text">The 'Office Conversations' texts helped me navigate my transfer to our Munich branch. Real-world scenarios, zero textbook fluff."</p>
                        <p className="t-name">Jake K. | Financial Analyst | Chicago, USA</p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="test-l">
                        <img src={pers_3} alt="" />
                    </div>

                    <div className="test-r">
                        <p className="t-level">B1</p>
                        <p className="t-text">"I've taught German for 12 years, and this is the first resource where I've seen entire classes excited about homework. The cultural notes and discussion questions make lesson planning effortless."</p>
                        <p className="t-name">Emma R. | High School Teacher | Berlin, Germany</p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="test-l">
                        <img src={pers_4} alt="" />
                    </div>

                    <div className="test-r">
                        <p className="t-level">B2</p>
                        <p className="t-text">"After plateauing with novels, these curated essays on German history and philosophy reignited my progress."</p>
                        <p className="t-name">Sofia L. | PhD Candidate | Vienna, Austria</p>
                    </div>
                </div>
            </div>
            

        </div>
      </main>

      <footer>
        <div className="footer-left">
            <img src={logo} alt="" />
            <p>Try <span>GerText</span> today. The power is in <span>YOUR</span> finger, just one click away!</p>
        </div>
        <div className="footer-right">
            <p>Follow us</p>
            <div className="footer-links">
                <Link to={""}></Link>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
