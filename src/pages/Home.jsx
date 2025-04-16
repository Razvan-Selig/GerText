import "../styles/Home.css"
import hero from "../assets/hero-3.png"
import pers_1 from "../assets/pers-1.jpg"
import pers_2 from "../assets/pers-2.jpg"
import pers_3 from "../assets/pers-3.jpg"
import pers_4 from "../assets/pers-4.jpg"

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
      </main>
    </>
  );
}

export default Home;
