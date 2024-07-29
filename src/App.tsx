import './App.css'
import drive from "./assets/drive.png"
import look from "./assets/look-up.png"
import blade from "./assets/blades.png"
import cook from "./assets/cook.png"
import meditate from "./assets/meditate.png"
import tg from "./assets/tg.png"
import x from "./assets/medium.png"
import medium from "./assets/x.png"
import pfp from "./assets/pfp.jpg"

function App() {

  return (
    <div>
      <header>
        <div className="logo">$BRUH</div>
        <div className="navlinks">
          <a href="#story">Story</a>
          <a href="#team">The Team</a>
          <a href="#treasury">Treasury</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#tokenomics">Tokenomics</a>
        </div>
      </header>
      <div className="hero">
        <div className="hero-txt">
          <h1>Yo, What's up <br /> <span>BRUH?</span></h1>
          <div className="hero-p">
            <p>Start your journey to the Sonic Boom, experience the new <br className='break'/> Ecosystem built for noobs and pros!
            </p>
          </div>
          <button>Jump In</button>
        </div>
        <div className="hero-img">
          <img src={drive} alt="drive png" />
        </div>
      </div>
      <section id='story'>
      <div className="story">
        <h1>The Story</h1>
        <div className="story-p">
          <p>In the Age of Mass Adoption, in the time of Sonic, BRUH was created to prove that the Blockchain can be a tool for Mass Transformation. Noob or Pro, the BRUH Code is a symbol of togetherness for the benefit of all members of the Community. We stand firm in our ability to make the Blockchain easy for everyone to navigate.</p>
        </div>
        <img src={look} alt="look up" />
      </div>
      </section>
      <div className="treasury">
        <h1>Join the sonic boom with BRUH</h1>
        <img src={blade} alt="blades png" />
        <div className="tra">
          <p className='left'>Are you a bruh?</p>
          <p className='right'>Bruhs are not lazy</p>
        </div>
        <div className="treasury-p">
          <p>BRUHs are known for resilience and their ability contribute value to their Community. BRUHs do not ask “when marketing”. A BRUH focuses on onboarding other people into the community for the benefit of spreading value and opportunities.
          </p>
        </div>
        <p className='t-d-p'>BRUHs are active learners, continuously growing and spread the word about Web3</p>
      </div>
      <div className="bro">
        <h1>Become bro-tastic!</h1>
        <p>Become an active member of your community and start your to become a BRUH.</p>
        <p className="join">Join the community</p>
        <button>Jump In</button>
      </div>
      <section id='treasury'>
      <div className="treasure">
        <h1>The BRUH Treasury</h1>
        <p>The Treasury will used to facilitate strategic partnerships and run giveaways for our BRUH Holders.</p>
        <img src={cook} alt="cook" />
        <p>On the Technical side, the treasury will also be used to build a significant position in $EQUAL, increasing the influence of the community and strongly contributing to the Sonic Ecosystem.</p>
        <div className="treasure-p">
          <p>The Treasury will also be utilized to attract newcomers to the Sonic Ecosystem, through airdrops in both $BRUH $FTM and $S tokens. Notably, $BRUH tokens for airdrops will be bought back from the Market avoid big negative price fluctuations.</p>
        </div>
      </div>
      </section>
      <div className="academy">
        <h1>BRUH Sonic Academy</h1>
        <div className="academy-p">
          <p>New users coming to Web3 need a place to learn and grow. We will be building a Web3 Learning platform where content is going to be hosted. Holders of BRUH will be able to access these courses at any given point.
          </p>
        </div>
      </div>
      <section id="tokenomics">
      <div className="tokenomics">
        <h1>Tokenomics</h1>
        <div className="tokeno">
          <p>LP: 900,000,000</p>
          <p>Fair Launch (No Presale)</p>
          <p>Total Supply: 1,000,000,000</p>
          <p>Team/Marketing/Partnerships: 100,000,000</p>
        </div>
      </div>
      </section>
      <div className="vesting">
        <h1>Team vesting and liquidity burn</h1>
        <p>The Teams allocation will be vested for a 180day period while the Liquidity Pool will be locked for 180days from Listing.</p>
        <img src={meditate} alt="meditate" />
        <div className="vesting-p">
          <p>Upon Migration to Sonic, the LP will be burnt to solidify our community.</p>
        </div>
      </div>
      <section id="roadmap">
      <div className="roadmap">
        <h1>Roadmap</h1>
        <div className="map">
          <p>Smart contract development and auditing</p>
          <p>Token Launch</p>
          <p>Listing on equalizer (DEX)</p>
          <p>Liquidity Improvemnt</p>
          <p>Migration to sonic</p>
          <p>LP burn</p>
          <p>Start treasury developement</p>
          <p>Launch of bruhsonic academy</p>
          <p>First strategic partnership with Fantom Foundation</p>
          <p>Bruh Airdrop Season 1 (Community round)</p>
          <p>Bruh Airdrop season 2 (Onboarding)</p>
          <p>Second Strategic partnership with KOLs</p>
          <p>Exchange Listing</p>
        </div>
      </div>
      </section>
      <section id="team">
      <div className="team">
        <h1>The Team</h1>
        <div className="twitter">
          <img src={pfp} alt="pfp" />
          <h2>BRUH!!!</h2>
          <p>@sonicbruhs</p>
        </div>
        <div className="socials">
          <a href="https://t.me/theSonicBRUH"><img src={tg} alt="tg" /></a>
          <a href="https://x.com/sonicbruhs"><img src={x} alt="x" /></a>
          <a href="https://medium.com/@SonicBruh"><img src={medium} alt="medium" /></a>
        </div>
      </div>
      </section>
    </div>
  )
}

export default App
