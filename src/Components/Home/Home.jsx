
import './Home.css'

const Home = () => {

    return (

        <>
            <div className="home_section" id="home">
                <div className="gimage">
                    <img src="/aware.svg" alt="awarelogo" />
                </div>
                <div className="mainintro">
                    <span className="stroketext_intro">Aware</span>
                    <span>the only discord bot you will ever need.</span>
                    <div className="linkbuttons">
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => {e.preventDefault(); window.location.href = window.location.href+'invite'}}>Invite Me</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => {e.preventDefault(); window.location.href = window.location.href+"support"}}>Support Server</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home;
