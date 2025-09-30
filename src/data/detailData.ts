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

export interface  Details {
    id: number;
    title: string;
    img: string;
    account: string;
    account2: string;
    name: string;
    name2: string;
    description: string;
    subtitle:string;
}
const DetailData: Details[] = [
    {
        id:1,
        title: 'ExBoot #1',
        img: Exbot1,
        account: Acount1,
        account2: Acount5,
        name: 'Perperzon',
        name2: 'Anderson',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 11, 2022'
    },
    {
        id:2,
        title: 'Exbot2',
        img: Art2,
        account: Acount3,
        account2: Acount2,
        name: 'Antonson',
        name2: 'Richard ',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 15, 2022'
    },
    {
        id:3,
        title: 'Future of Polygon X',
        img: Art3,
        account: Acount4,
        account2: Acount1,
        name: 'Michael',
        name2:'Perperzon',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 18, 2022'
    },
    {
        id:4,
        title: 'Blue Wave #2',
        img: Art4,
        account: Acount5,
        account2: Acount3,
        name: 'Anderson',
        name2:'Antonson',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 21, 2022'
    },
    {
        id:5,
        title: 'ExBoot #1',
        img: Art5,
        account: Acount4,
        account2: Acount2,
        name: 'Michael',
        name2: 'Richard ',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 25, 2022'
    },
    {
        id:6,
        title: 'Exbot2',
        img: Art6,
        account: Acount2,
        account2: Acount5,
        name: 'Richard ',
        name2: 'Anderson',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 1, 2022'
    },
    {
        id:7,
        title: 'Future of Polygon X',
        img: Art7,
        account: Acount5,
        account2: Acount4,
        name: 'Anderson',
        name2: 'Michael',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 3, 2022'
    },
    {
        id:8,
        title: 'Blue Wave #2',
        img: Art8,
        account: Acount3,
        account2: Acount1,
        name: 'Antonson',
        name2:'Perperzon',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 7, 2022'
    },
    {
        id:9,
        title: 'ExBoot #1',
        img: Art9,
        account: Acount1,
        account2: Acount2,
        name: 'Perperzon',
        name2: 'Richard ',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 30, 2022'
    },
    {
        id:10,
        title: 'Exbot2',
        img: Art10,
        account: Acount3,
        account2: Acount4,
        name: 'Antonson',
        name2: 'Michael',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 23, 2022'
    },
    {
        id:11,
        title: 'Future of Polygon X',
        img: Art11,
        account: Acount4,
        account2: Acount5,
        name: 'Michael',
        name2: 'Anderson',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 3, 2022'
    },
    {
        id:12,
        title: 'Blue Wave #2',
        img: Art12,
        account: Acount2,
        account2: Acount1,
        name: 'Richard ',
        name2:'Perperzon',
        description: "We would like to present you The Exboot 3D - Watching you~ a digital collectible that utilizes blockchain technology to prove authenticity and scarcity. A must-have for any futuristic art enthusiast.",
        subtitle: 'Minted on Dec 31, 2022'
    },
]

export default DetailData