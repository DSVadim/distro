import './section1.scss'
import DetailData from "../../../data/detailData.ts";
import type {Details} from "../../../data/detailData.ts";
import Wallet from "../../../assets/Layout/svg/wallet.svg";

function Section1() {
    return (
        <>
            {DetailData.map((detail: Details )=>(
                <section  className='section1-detail'>
                    <img src={detail.img}/>
                    <div key={detail.id} className='container'>
                        <div className='container-block1'>
                            <p className='container-block1__title'>{detail.title}</p>
                            <p className='container-block1__title'>{detail.subtitle}</p>
                        </div>
                        <div className='container-block2'>
                            <div className='container-block2-box1'>
                                <p className='container-block2-box1__txt'>Collection</p>
                                <div className='container-block2-box1-acount'>
                                    <img src={detail.account}/>
                                    <p className='container-block2-box1-acount__name'>{detail.name}</p>
                                </div>
                            </div>
                            <div className='container-block2-box2'>
                                <p className='container-block2-box2__txt'>Creator</p>
                                <div className='container-block2-box2-acount'>
                                    <img src={detail.account2}/>
                                    <p className='container-block2-box2-acount__name'>{detail.name2}</p>
                                </div>
                            </div>
                        </div>
                        <div className='container-block3'>
                            <p className='container-block3__txt'>Description</p>
                            <p className='container-block3__description'>{detail.description}</p>
                        </div>
                        <div className='container-block4'>
                            <div className='container-block4-box1'>
                                <p className='container-block4-box1__txt'>Current Bid</p>
                                <div className='container-block4-box1-bid'>

                                    <p className='container-block4-box1-bid__price'>3.421</p>
                                </div>
                            </div>
                            <div className='container-block4-box2'>
                                <p className='container-block4-box2__txt'>End in</p>
                                <p className='container-block4-box2__timer'>1h 12m 14s</p>
                            </div>
                            <button className='container__btn'><img src={Wallet} alt='wallet'/> Place Bid</button>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Section1
