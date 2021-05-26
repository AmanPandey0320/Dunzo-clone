import sc01 from '../images/scrl1.png'
import sc02 from '../images/scrl2.png'
import sc03 from '../images/scrl3.jpg'
import sc04 from '../images/scrl4.png'
import sc05 from '../images/scrl5.jpg'
import sc06 from '../images/scrl6.jpg'
import sc07 from '../images/scrl7.jpg'
import sc08 from '../images/scrl8.jpg'
import paan from '../images/paan.png'
import pet from '../images/pet.jpg'
import meat from '../images/meat.jpg'
import gift from '../images/gift.jpg'

export const mainScroll = [
    {
        id:1,
        image:sc01,
        path:'/groceries-and-essentials'
    },
    {
        id:2,
        image:sc02,
        path:'/pickup-and-drop'
    },
    {
        id:3,
        image:sc03,
        path:'/resturants'
    },
    {
        id:4,
        image:sc04,
        path:'/fruits-and-vegetables'
    }
]

export const topPicks = [
    {
        id:1,
        image:sc05
    },
    {
        id:2,
        image:sc06
    },
    {
        id:3,
        image:sc07
    },
    {
        id:4,
        image:sc08
    }
]

export const daily = [
    {
        id:1,
        image:meat,
        text:'Meat and fish',
        path:'/meat-and-fish'
    },
    {
        id:2,
        image:pet,
        text:'Pet Supplies',
        path:'/pet-supplies'
    },
    {
        id:3,
        image:paan,
        text:'Pan Shop',
        path:'/pan-shop'
    },
    {
        id:4,
        image:gift,
        text:'Gifts and Lifestyle',
        path:'/gift-and-lifestyle'
    }
]

export const footerList={
    dunzo:[
        {
            id:1,
            text:'About',
            path:'/about'
        },
        {
            id:2,
            text:'Jobs',
            path:'/jobs'
        },
        {
            id:3,
            text:'Contact',
            path:'/contact'
        },
        {
            id:4,
            text:'Terms & Conditions',
            path:'/terms-and-condition'
        },
        {
            id:5,
            text:'Privacy Policy',
            path:'/privacy-policy'
        },
        {
            id:6,
            text:'Dunzo for partner',
            path:'/dunzo-for-partners'
        },
        {
            id:7,
            text:'Dunzo for business',
            path:'/dunzo-for-business'
        }
    ],
    cities:[
        {
            id:1,
            text:'Bangalore',
            path:'/city/bangalore'
        },
        {
            id:2,
            text:'Chennai',
            path:'/city/chennai'
        },
        {
            id:3,
            text:'Pune',
            path:'/city/pune'
        },
        {
            id:4,
            text:'Gurgaon',
            path:'/city/gurgaon'
        },
        {
            id:5,
            text:'Hyderabad',
            path:'/city/hyderabad'
        },
        {
            id:6,
            text:'New Delhi',
            path:'/city/newdelhi'
        },
        {
            id:7,
            text:'Mumbai',
            path:'/city/mumbai'
        }
    ],
    getTouch:[
        {
            id:1,
            text:'Email',
            path:'/email'
        },
        {
            id:2,
            text:'Facebook',
            path:'/facebook'
        },
        {
            id:3,
            text:'Twitter',
            path:'/twitter'
        },
        {
            id:4,
            text:'Instagram',
            path:'/instagram'
        },
        {
            id:5,
            text:'LinkedIn',
            path:'/linkedin'
        }
    ]
}