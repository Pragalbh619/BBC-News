import React from 'react'
import Navbar from './components/Navbar'
import LiveNews from './components/LiveNews'
import { BbcImage } from '../../ImagesCall/Img'
import GreatReads from './components/GreatReads'
import MustWatch from './components/MustWatch'
import NewsVideo from './components/NewsVideo'
import Business from './components/Business'
import Culture from './components/Culture'
import Slides from './components/Slides'
import WordNews from './components/WordNews'
import Technology from './components/Technology'
import Footer from './components/Footer'


const Home = () => {
    return (
        <>
            <Navbar />
            <LiveNews data={[{img: BbcImage.Netanyahu,title:'Netanyahu vows to follow through with Rafah attack', description:'The Israeli prime minister says the invasion will proceed "with or without" a truce with Hamas.',time: '14 hrs ago', area:'Middle East'},{img: BbcImage.Economy,title:"India's economy: The good, bad and ugly in six charts", description:"India has one of the world's fastest growing economies but the benefits are yet to fully reach the poorest.",time: '7 hrs ago', area:'India'}]}

            item={[{title:"Trump trial shown expletive-laden texts on Daniels deal", description:"A lawyer testified about a deal to pay for Ms Daniels' silence about allegedly having sex with Mr Trump.",time: '9 hrs ago', area:'Us & canada'},{title:"Boy, 14, killed in sword attack", description:"The teenager died after a man armed with a sword went on the rampage in Hainault.",time: '10 hrs ago', area:'London'},{title:"Chinese women are partnering with strangers to save money", description:"They are finding new ways to cut back on household spending as China’s economy loses steam.",time: '6 hrs ago', area:'china'},{title:"Scientists work to make healthier white bread", description:"The research aimed at lovers of white bread has been funded by the government to improve the health benefits of UK food.",time: '7 hrs ago', area:'Health'}]} />

            <GreatReads data={[{img: BbcImage.gr1, title: 'Crackdown or compromise? A tale of two US campus protests', description: 'One sent in the police, the other struck a deal with students. But why have responses been so wildly different?',time: '6 hrs ago', area:'us & canada'},{img: BbcImage.gr2, title: 'Why living with strangers can make us happier', description: 'As the cost of living rises and loneliness becomes a global concern, communal living is an increasingly popular choice. We meet "intentional community" members to explore further.',time: '22 hrs ago', area:'culture'}]}/>

            <MustWatch/>

            <NewsVideo data={[{img:BbcImage.PlayButton,title: 'Police raid Columbia over Gaza protest... in 58 seconds',time: '4 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'The moment police climb into occupied Columbia building',time: '6 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'How Gaza campus protests spread across the US',time: '7 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Trump threatened with jail time in hush-money trial',time: '10 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Canada opposition leader ejected from House of Commons',time: '10 hrs ago', area:'us & canada'}]}/>

            <Business data={[{title: "Line of Duty actor Brian McCardie dies at 59",time: '20 hrs ago', area:'Scotland'},{title: "Harry Potter fan named Britain's biggest collector",time: '16 hrs ago', area:'Wales'},{title: "Conan O'Brien goes full Irish for soap opera",time: '22 hrs ago', area:'Europe'},{title: "Taylor Swift college class for parents taking Swifties to Eras tour",time: '23 hrs ago', area:'Scottland'},{title: "Depardieu to be tried over sexual assault allegations",time: '7 hrs ago', area:'Europe'}]} />

            <Culture data={[{title: "Gosling and Blunt on sarcasm, stunts and singing at the Oscars",time: '12 hrs ago', area:'Scotland'},{title: "FKA Twigs uses AI to create deepfake of herself",time: '16 hrs ago', area:'Wales'},{title: "Harry Potter fan named Britain's biggest collector",time: '22 hrs ago', area:'Europe'},{title: "Line of Duty actor Brian McCardie dies at 59",time: '23 hrs ago', area:'Scottland'},{title: "Why living with strangers can make us happier",time: '7 hrs ago', area:'Europe'}]} />

            <Slides data={[{img: BbcImage.pic1,title:'Why is only 10 percent of the population left-handed?', description:'A new study reveals the role of rare gene variants and randomness in determining left-handedness.',time: '14 hrs ago', area:'Middle East'},{img: BbcImage.pic2,title:"Alaska's melting glaciers that rip homes apart", description:"IQasa Alom meets a team conducting research on Alaska's changing environment.",time: '7 hrs ago', area:'India'},{img: BbcImage.pic3,title:"Cape Verde's stunning salt mines", description:"An intriguing mix of cultures await travellers who are prepared to explore beyond the beaches.",time: '7 hrs ago', area:'India'},{img: BbcImage.pic4,title:"Slovenia's remote bedroom on top of a snowy mountain", description:"Eva Zu Beck heads to the Slovenian mountains where she vists the country's remote refuges.",time: '7 hrs ago', area:'India'},{img: BbcImage.pic5,title:"Slovenia's spectacular snow sculptures", description:"Eva Zu Beck heads to the Slovenian mountains and puts her skills to the test in a snow-castle competition..",time: '7 hrs ago', area:'India'}]}/>

            <WordNews data={[{img:BbcImage.PlayButton,title: 'Police raid Columbia over Gaza protest... in 58 seconds',time: '4 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'The moment police climb into occupied Columbia building',time: '6 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'How Gaza campus protests spread across the US',time: '7 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Trump threatened with jail time in hush-money trial',time: '10 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Canada opposition leader ejected from House of Commons',time: '10 hrs ago', area:'us & canada'}]}/>
            <Technology data={[{img:BbcImage.PlayButton,title: 'Police raid Columbia over Gaza protest... in 58 seconds',time: '4 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'The moment police climb into occupied Columbia building',time: '6 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'How Gaza campus protests spread across the US',time: '7 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Trump threatened with jail time in hush-money trial',time: '10 hrs ago', area:'us & canada'},{img:BbcImage.PlayButton,title: 'Canada opposition leader ejected from House of Commons',time: '10 hrs ago', area:'us & canada'}]}/>

            <Footer/>        
        </>


    )
}

export default Home