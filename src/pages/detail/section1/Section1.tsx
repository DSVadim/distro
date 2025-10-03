import { useParams } from "react-router-dom";
import DetailData, { type Details } from "../../../data/detailData.ts";
import Wallet from "../../../assets/Layout/svg/wallet.svg";
import Ethereum from "../../../assets/Layout/svg/ethereum.svg";
import './section1.scss';

function Section1() {
    const { id } = useParams();
    const detail: Details | undefined = DetailData.find(
        (d) => d.id === Number(id)
    );

    if (!detail) {
        return <p>Detail not found</p>;
    }

    return (
        <section className='section1-detail'>
            <img src={detail.img} alt={detail.title}/>
            <div className='container'>
                <div className='container-block1'>
                    <p className='container-block1__title'>{detail.title}</p>
                    <p className='container-block1__subtitle'>{detail.subtitle}</p>
                </div>
                <div className='container-block2'>
                    <div className='container-block2-box1'>
                        <p className='container-block2-box1__txt'>Collection</p>
                        <div className='container-block2-box1-acount'>
                            <img src={detail.account} alt="account"/>
                            <p className='container-block2-box1-acount__name'>{detail.name}</p>
                        </div>
                    </div>
                    <div className='container-block2-box2'>
                        <p className='container-block2-box2__txt'>Creator</p>
                        <div className='container-block2-box2-acount'>
                            <img src={detail.account2} alt="creator"/>
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
                            <img className='container-block4-box1-bid__img' src={Ethereum} alt="eth"/>
                            <p className='container-block4-box1-bid__price'>3.421</p>
                        </div>
                    </div>
                    <div className='container-block4-box2'>
                        <p className='container-block4-box2__txt'>End in</p>
                        <p className='container-block4-box2__timer'>1h 12m 14s</p>
                    </div>
                </div>
                <button className='container__btn'>
                    <img src={Wallet} alt='wallet'/> Place Bid
                </button>
            </div>
        </section>
    );
}

export default Section1;
