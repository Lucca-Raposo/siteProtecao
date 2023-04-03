import './Banner.css'

function Banner(){
    return(
        <div className="banner-container">
            <div className="banner-buttons-container">
                <button className="banner-button">Rua Oratório, 2825 Pq. Novo Oratório Santo André - SP</button>
                <button className="banner-button" id="button-number"> 11 4479-2210</button>
            </div>
            <div className="banner-image-container">
                <img className="homedog" src="../../../images/homedog.png" alt="homedog"></img>
            </div>
        </div>
    )
}
export default Banner