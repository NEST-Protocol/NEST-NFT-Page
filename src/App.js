import './App.css';
import logo from "./assets/nest.svg"
import _4nft from "./assets/nft04@2x.png"
import nft1 from "./assets/nft1@2x.png"
import nft2 from "./assets/nft2@2x.png"
import nft3 from "./assets/nft3@2x.png"
import nft4 from "./assets/nft4@2x.png"
import nestfi from "./assets/nestfi@2x.png"
import element from "./assets/element@2x.png"
import peardao from "./assets/peardao@2x.png"
import point from "./assets/point@2x.png"

function App() {
  // pc or mobile phone
  const isPc = window.innerWidth > 768;
  
  return (
      <div style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "url(bg.jpg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}>
        <a href={"https://nestprotocol.org/"} target={"_blank"} rel={"noreferrer"}>
          <img src={logo} alt={"NEST"} style={{height: "20px", width: "64px", paddingTop: "34px"}}/>
        </a>
        
        <div style={{paddingTop: "96px"}}>
          <h1>Cyber Ink</h1>
          <p style={{marginTop: '15px'}}>is a collection of 10,000 NFTs on the blockchain.<br/>
            What's more, each Cyber Ink can unlock the <br/>NEST Fi membership and additional benefits.</p>
        </div>
  
        { isPc ? (
            <img src={_4nft} alt={'4nft'} style={{height: "465px", marginTop: "67px"}}/>
        ) : (
            <img src={_4nft} alt={'4nft'} style={{height: "465px", width: "300px", objectFit: "cover", overflow: "hidden", marginTop: "67px"}}/>
        ) }
        
        <div style={{width: "100%", background: "rgba(255, 255, 255, 0.6)"}}>
          <div style={{paddingTop: "126px"}}>
            <h1>Cyber Ink world view</h1>
          </div>
          
          <div style={{marginTop: "44px"}}>
            <h2>The story of Six People Club</h2>
            <p style={{marginTop: "22px"}}>The overall setting is in the year 3241, when the galactic horizon has been
              opened<br/>
              and humanity has long past the Earth Age and entered the Interstellar Age.<br/>
              In such a milieu, the idea of life, mind, and race have evolved radically, and the signals</p>
            <br/>
            <p>The story begins with the secret landing of<br/>
              the Six People Club on Planet X.</p>
          </div>
          
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "104px"}}>
            <div style={{width: "230px", height: "260px", marginBottom: "24px"}}>
              <img src={nft1} alt={'nft1'} style={{width: "100%", height: "100%"}}/>
            </div>
            <h2 style={{marginTop: "44px", marginBottom: "24px"}}>Six People Club</h2>
            <p>An inorganic entity that differs from AI, animals, and humans but has comparable<br/>
              constructions to Earth species has lately surfaced on Earth. However,<br/>
              none of these structures are made up of proteins. These animals are<br/>
              highly dangerous, impossible to eliminate with human force,<br/>
              and have recently appeared around the Arctic Circle. Surprisingly, they<br/>
              lack the ability to reproduce, which is fortunate for the Earth.<br/>
              Given the creature’s extraordinary abilities, humanity fears catastrophic<br/>
              damage to Earth and hence prepares to land on Planet X to discover the<br/>
              creature’s secrets; it is in this context that the Six<br/>
              People Club was chosen. </p>
          </div>
          
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "104px"}}>
            <div style={{width: "271px", height: "265px", marginBottom: "24px"}}>
              <img src={nft2} alt={'nft2'} style={{width: "100%", height: "100%"}}/>
            </div>
            <h2 style={{marginTop: "44px", marginBottom: "24px"}}>The story of Earth</h2>
            <p>Some people chose to merge with AI once AI surpassed humans. Their<br/>
              consciousness separated from their bodies and evolved into a new form, <br/>
              parasitic on the AI’s algorithm, existing as a kind of metacontrol<br/>
              over the AI’s program, known as a Soul Chip. AI has perfected<br/>
              the utilization of information, algorithms, arithmetic, and energy and is no longer <br/>
              content engaging with the traditional human environment on Earth.<br/>
              They created anti-gravity ships around the year 2500, sailed into space,<br/>
              and landed up nowhere. Some of the remaining populations, unable<br/>
              to adapt, remained on Earth. They attempted to continue <br/>
              developing and utilizing artificial intelligence, energy, and information in <br/>
              ways that humans could control. However, the difficulties of human nature make it <br/>
              impossible for Earth to survive.
            </p>
          </div>
          
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "104px"}}>
            <div style={{width: "265px", height: "229px", marginBottom: "24px"}}>
              <img src={nft3} alt={'nft3'} style={{width: "100%", height: "100%"}}/>
            </div>
            <h2 style={{marginTop: "44px", marginBottom: "24px"}}>The story of Planet X</h2>
            <p>The ai probe "Turing" discovered it around the year 2900, with cosmic coordinates <br/>
              (1.27.33.189.7). The planet has a vast number of living organisms that are similar to those<br/>
              vast number of living organisms that are similar to those found on Earth. Surprisingly, <br/>
              a new material has emerged on the planet: Substance Consciousness.<br/>
              Any organism that is exposed to this chemical gains consciousness and<br/>
              the ability to think. Humans were ecstatic when they<br/>
              learned about Planet X through Galaxy Z insiders. </p>
          </div>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "104px",
            paddingBottom: "120px"
          }}>
            <div style={{width: "271px", height: "230px", marginBottom: "24px"}}>
              <img src={nft4} alt={'nft4'} style={{width: "100%", height: "100%"}}/>
            </div>
            <h2 style={{marginTop: "44px", marginBottom: "24px"}}>The story of Galaxy Z</h2>
            <p>After around 200 years, the AI arrived in a galaxy most suited for massenergy<br/>
              conversion. There were 100 billion planets in the galaxy. The AI immediately released the<br/>
              300,000 stored algorithms and built bases to reproduce the 100 billion <br/>
              AIs that inhabited each of the 100 billion worlds. A Soul Chip, based on its attachment to the
              Earth, <br/>
              returned the galaxy addresses and accompanying experiences to the Earth<br/>
              some 100 years later, coded to reestablish communication with the human species. <br/>
              Humans have gradually impacted more than 3000 Soul Chips in the AI system via a<br/>
              glitch known as the "core of compassion." The Planet Gamma’s Story: It was discovered<br/>
              around the year 3100 by the AI probe "Moss." The probe and its core AI, however, <br/>
              were annihilated when it collided with the planet because to an anomalous<br/>
              curvature storm, which shocked Galaxy Z. The nano-ai spread over the world<br/>
              searched the entire planet and discovered something horrifying: on the planet, a<br/>
              particular form of "monster" existed that practically mirrored Earth beings with transistors, <br/>
              nuclear, and even nanomaterials. The creature’s circulatory system can be<br/>
              substituted with any natural or synthetic fluid, and mental transmission can be performed by<br/>
              either electromagnetic forces or some kind of weak force, resulting in a completely <br/>
              different path of intelligence than that of Galaxy Z’s AI. What’s more terrifying<br/>
              is that the creature’s intelligence is comparable to that of humans… </p>
          </div>
        </div>
        
        <div style={{
          height: "580px",
          marginTop: '138px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "white",
          width: "100%",
          alignItems: "center"
        }}>
          <h1>NFT Shop</h1>
          <div style={{display: "flex", marginTop: "78px"}}>
            <div style={{marginRight: "200px"}}>
              {/*<a href={"https://finance.nestprotocol.org/"} target={"_blank"}>*/}
                <img src={nestfi} alt={'nestfi'} style={{width: "94px", height: "94px", marginBottom: "24px"}}/>
              {/*</a>*/}
              <p>NEST Fi</p>
            </div>
            <div style={{marginRight: "200px"}}>
              {/*<a href={"https://www.element.market/"} target={"_blank"}>*/}
                <img src={element} alt={'element'} style={{width: "94px", height: "94px", marginBottom: "24px"}}/>
              {/*</a>*/}
              <p>element</p>
            </div>
            <div>
              {/*<a href={"https://peardao.io/"} target={"_blank"}>*/}
                <img src={peardao} alt={'peardao'} style={{width: "94px", height: "94px", marginBottom: "24px"}}/>
              {/*</a>*/}
              <p>PearDAO</p>
            </div>
          </div>
        </div>
        
        <div style={{paddingTop: "138px", paddingBottom: "138px",}}>
          <h1>Road map</h1>
          <div style={{
            width: "1px",
            height: "1100px",
            background: "#C9C9C9",
            position: "absolute",
            left: "50%",
            marginTop: "40px"
          }}/>
          <div>
            <div style={{display: "flex", marginTop: '68px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>2022 Nov</p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>The first round of sale Offer 3,200 NFTs (BNB Chain) for sale<br/>
                </p>
                <p style={{fontWeight: "normal"}}>
                  1. 1,920 Mystery Box sell on NESTFi;<br/>
                  2. 240 NFTs INO on Element;<br/>
                  3. 240 NFTs INO on PearDAO;<br/>
                  4. 800 Whitelist (Buy any NFTs with a 30% discount)
                </p>
              </div>
            </div>
            
            <div style={{display: "flex", marginTop: '70px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>Start after 80% of the NFTs
                in the first round are sold</p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>The second round sale</p>
                <p style={{fontWeight: "normal"}}>
                  1. Offer 3,200 NFTs (BNB Chain) for sale
                  Independent Community<br/>
                  2. Start collaborative storytelling in the community<br/>
                  3. Community mystery box airdrop
                </p>
              </div>
            </div>
            
            <div style={{display: "flex", marginTop: '70px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>After 100% of the NFTs in the first round are sold
               </p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>NFT Utility</p>
                <p style={{fontWeight: "normal"}}>
                  1. Activate the rights and benefits of "holding NFT" in NEST Fi, the rights and benefits vary according to the rarity.
                  2. Hold NFT to get extra token rewards
                </p>
              </div>
            </div>
            
            <div style={{display: "flex", marginTop: '70px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>After 80% of the NFTs in the second round are sold</p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>The third round sale</p>
                <p style={{fontWeight: "normal"}}>
                  1. Offer 3,200 NFTs (Ethereum) for sale Brand collaboration exclusive NFT on sale<br/>
                  2. 600 exclusive NFTs in collaboration with brands available in mystery boxes Surrounding rights unlocked<br/>
                  3. The rights are unlocked and limited surrounding products are given away
                </p>
              </div>
            </div>
            
            <div style={{display: "flex", marginTop: '70px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>After 80% of all the NFTs are sold the second round is sold</p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>Cross Platform</p>
                <p style={{fontWeight: "normal"}}>
                  1. Announcement of off-chain benefits for brand partnerships
                </p>
              </div>
            </div>
            
            <div style={{display: "flex", marginTop: '70px'}}>
              <p style={{fontSize: "25px", fontWeight: "bold", width: "450px", textAlign: "right"}}>After 100% of all the NFTs are sold</p>
              <div style={{marginLeft: "40px", marginRight: "40px", height: "24px", width: "36px"}}>
                <img src={point} alt={'point'} style={{width: "100%", height: "100%"}}/>
              </div>
              <div style={{textAlign: "start", width: "450px"}}>
                <p>P2E (Gamefi)</p>
                <p style={{fontWeight: "normal"}}>
                  1. The adoption of collaborative story creation will be included in the game bonus program<br/>
                  2. Hold NFT will be included in the game bonus program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
