import './section1.scss'
import Ex1 from "../../../assets/Upload/png/ex1.png";
import Antonosov from "../../../assets/Upload/svg/antonosov.svg";
import Ethereum from "../../../assets/Upload/svg/ethereum.svg";
import Upload from "../../../assets/Upload/svg/upload.svg"

function Section1() {
    return (
        <section className='section1-upload'>
            <h1 className='section1-upload__title'>Create new NFT</h1>
            <div className='section1-upload-container'>
                <form className='section1-container-form'>
                    <p className='section1-container-form__title'>Upload your NFT</p>
                    <p className='section1-container-form__description'>File types supported: JPG, PNG, GIF, SVG, MP4,</p>
                    <label className='section1-container-form__label'>
                        <img src={Upload} alt='upload'/>
                        <input className='section1-container-form__label-file' type="file" id="file" name="file" placeholder="Upload or drag here"/>
                    </label>
                    <p className='section1-container-form__title'>Name NFT</p>
                    <input className='section1-container-form__inputname' type='text' placeholder='Name NFT'/>
                    <p className='section1-container-form__title'>Description</p>
                    <input className='section1-container-form__input' type='text' placeholder='Description'/>
                    <button className='section1-container-form__btn'>Creat</button>
                </form>
                <div className='section1-block'>
                    <p className='section1-block__title'>Preview</p>
                    <div className='section1-block-card'>
                        <img src={Ex1} alt='ExBoot'/>
                        <div className='section1-block-card-names'>
                            <p className="section1-block-card-names__text">ExBoot #2</p>
                            <p className='section1-block-card-names__bid'>Current Bid</p>
                        </div>
                        <div className='section1-block-card-texts'>
                            <div className="section1-block-card-texts-acount">
                                <img src={Antonosov} alt='Antonson'/>
                                <p className="section1-block-card-texts-acount__text">Antonson</p>
                            </div>
                                <label className='section1-block-card-texts-price'>
                                    <img src={Ethereum} alt='ethereum'/>
                                    <p className='section1-block-card-texts-price__text'>3.421 </p>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1
