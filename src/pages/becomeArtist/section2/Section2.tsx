import './section2.scss'
import Art1 from "../../../assets/BecomeArtist/png/art1.png";
import Art2 from "../../../assets/BecomeArtist/png/art2.png";
import Art3 from "../../../assets/BecomeArtist/png/art3.png";

function Section2() {
    return (
        <section className="section2-becomeArtist">
            <div className='section2-becomeArtist-container'>
                <img src={Art1} alt="art"/>
                <div className='section2-becomeArtist-container-texts'>
                    <h1 className='section2-becomeArtist-container-texts__title'>Create your NFT</h1>
                    <p className='section2-becomeArtist-container-texts__description'>Use a program such as Adobe Photoshop, Illustrator, or Procreate to create a digital asset. Make sure the image is in a supported file format (e.g. JPEG, PNG, GIF).</p>
                    <button className='section2-becomeArtist-container-texts__btn'>Explore Now</button>
                </div>
            </div>
            <div className='section2-becomeArtist-container'>
                <div className='section2-becomeArtist-container-texts'>
                    <h1 className='section2-becomeArtist-container-texts__title'>Upload your NFT</h1>
                    <p className='section2-becomeArtist-container-texts__description'>Once you've chosen a marketplace, sign up for an account and upload your NFT. You will likely need to provide a title, description, and tags for your asset, as well as set a price.</p>
                    <button className='section2-becomeArtist-container-texts__btn'>Explore Now</button>
                </div>
                <img src={Art2} alt="art"/>
            </div>
            <div className='section2-becomeArtist-container'>
                <img src={Art3} alt="art"/>
                <div className='section2-becomeArtist-container-texts'>
                    <h1 className='section2-becomeArtist-container-texts__title'>Share your NFT</h1>
                    <p className='section2-becomeArtist-container-texts__description'>After your NFT is uploaded and for sale, share it on social media and other platforms to help promote it and attract buyers.</p>
                    <button className='section2-becomeArtist-container-texts__btn'>Explore Now</button>
                </div>
            </div>
        </section>
    )
}

export default Section2
