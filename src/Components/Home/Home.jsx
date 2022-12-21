import Gateway_main from "../../asserts/gateway.png"
import './Home.css'

const Home = () => {

    return (

        <>
            <div className="home_section" id="home">
                <div className="gimage">
                    <img src={Gateway_main} alt="null" />
                </div>
                <div className="mainintro">
                    <span className="stroketext_intro">Gateway</span>
                    <span>the only discord bot you will ever need.</span>
                    <div className="linkbuttons">
                <button type="button" className="btn btn-outline-secondary">Invite Me</button>
                <button type="button" className="btn btn-outline-secondary">Support Server</button>
                </div>
                </div>
               
            </div>
        </>

    )
}

export default Home;
