import "../styles/Home.css"
import hero from "../assets/hero-2.png"

function Home() {
  return (
    <>
      <main>
        <div className="hero">
            <img src={hero} alt="" />
        </div>
        <div className="info">

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
                <div className="card card-6">
                    <p>Motivational Boost</p>
                </div>
            </div>

        </div>
      </main>
    </>
  );
}

export default Home;
