import Exbot1 from '../assets/Layout/png/exbot1.png'
import Acount1 from '../assets/Layout/svg/acount1.svg'
import Art2 from '../assets/Layout/png/art2.png'
import Acount3 from '../assets/Layout/svg/acount3.svg'
import Art3 from '../assets/Layout/png/art3.png'
import Acount4 from '../assets/Layout/svg/acount4.svg'
import Art4 from '../assets/Layout/png/Art4.png'
import Acount5 from '../assets/Layout/svg/acount5.svg'
import Art5 from '../assets/Layout/png/art5.png'
import Art6 from '../assets/Layout/png/art6.png'
import Acount2 from '../assets/Layout/svg/acount2.svg'
import Art7 from '../assets/Layout/png/art7.png'
import Art8 from '../assets/Layout/png/art8.png'
import Art9 from '../assets/Layout/png/art9.png'
import Art10 from '../assets/Layout/png/art10.png'
import Art11 from '../assets/Layout/png/art11.png'
import Art12 from '../assets/Layout/png/art12.png'

 export interface  Cards {
    id: number;
    title: string;
    img: string;
    account: string;
    name: string;
}
const CardData: Cards[] = [
    {
        id:1,
        title: 'ExBoot #1',
        img: Exbot1,
        account: Acount1,
        name: 'Perperzon'

    },
    {
        id:2,
        title: 'Exbot2',
        img: Art2,
        account: Acount3,
        name: 'Antonson'
    },
    {
        id:3,
        title: 'Future of Polygon X',
        img: Art3,
        account: Acount4,
        name: 'Michael'
    },
    {
        id:4,
        title: 'Blue Wave #2',
        img: Art4,
        account: Acount5,
        name: 'Anderson'
    },
    {
        id:5,
        title: 'ExBoot #1',
        img: Art5,
        account: Acount4,
        name: 'Michael'

    },
    {
        id:6,
        title: 'Exbot2',
        img: Art6,
        account: Acount2,
        name: 'Richard '
    },
    {
        id:7,
        title: 'Future of Polygon X',
        img: Art7,
        account: Acount5,
        name: 'Anderson'
    },
    {
        id:8,
        title: 'Blue Wave #2',
        img: Art8,
        account: Acount3,
        name: 'Antonson'
    },
    {
        id:9,
        title: 'ExBoot #1',
        img: Art9,
        account: Acount1,
        name: 'Perperzon'

    },
    {
        id:10,
        title: 'Exbot2',
        img: Art10,
        account: Acount3,
        name: 'Antonson'
    },
    {
        id:11,
        title: 'Future of Polygon X',
        img: Art11,
        account: Acount4,
        name: 'Michael'
    },
    {
        id:12,
        title: 'Blue Wave #2',
        img: Art12,
        account: Acount2,
        name: 'Richard '
    },
]
export default CardData