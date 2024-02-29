import { Disclosure, Updated, websiteBuilderImage, Deals1, Deals2 } from '../assets'

export const content = {
    heading: {
        lastUpdated: {
            name: "Febrary 22 2020",
            image: Updated
        },
        disclosure: {
            name: "Advertising Disclosure",
            image: Disclosure
        },
        relevant: [
            {
                name: 'Top Relevant',
                value: 'toprelevant'
            },
            {
                name: 'abc',
                value: 'abc'
            }
        ],
        subHeading: [
            {
                name: 'Tools',
                links: '#'
            },
            {
                name: 'AWS Builder',
                links: '#'
            },
            {
                name: 'Start Build',
                links: '#'
            },
            {
                name: 'Build Supplies',
                links: '#'
            },
            {
                name: 'Tooling',
                links: '#'
            },
            {
                name: 'BlueHosting',
                links: '#'
            }
        ],
        breadCrumbs: [
            {
                name: 'Home',
                links: '#'
            },
            {
                name: 'Hosting for all',
                links: '#'
            },
            {
                name: 'Hosting',
                links: '#'
            },
            {
                name: 'Hosting6',
                links: '#'
            },
            {
                name: 'Hosting5',
                links: '#'
            }
        ]
    },


    websiteBuilder: [
        {
            id: 1,
            image: websiteBuilderImage,
            name: 'Builder 1',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            deals: {
                name: 'Best Choice',
                img: Deals1
            },
            stars: 5,
            ratings: 9.8,
            ratingsName: 'Exceptional'
        },
        {
            id: 2,
            image: websiteBuilderImage,
            name: 'Biulder',
            title: 'SiteCraft 68-Inch Ultimate Web Design Studio',
            description: 'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
            highlights: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
            deals: {
                name: 'Best Value',
                img: Deals2
            },
            stars: 4.5,
            ratings: 9.5,
            ratingsName: 'Excellent'
        },
        {
            id: 3,
            image: websiteBuilderImage,
            name: 'Builder 1',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            stars: 5,
            ratings: 9.3,
            ratingsName: 'Exceptional'
        },
    ],


    responsiveWebsiteBuilder: [
        {
            id: 4,
            image: websiteBuilderImage,
            name: 'CDK',
            title: 'CDK Resposive Builder',
            description: 'An extensive library of widgets and apps, and detailed step-by-step guides',
            discount: '26% off',
            highlightsNumber: {
                highlight1: 9.9,
                highlight2: 8.9,
                highlight3: 8.9
            },
            highlightText: {
                highlightText1: 'Building responsive',
                highlightText2: 'Cool',
                highlightText3: 'Docs'
            },
            loveit: {
                like1: 'Documentation',
                like2: 'Easy Use',
                like3: 'Out of box'
            },
            stars: 4,
            ratings: 9.1,
            ratingsName: 'Very Good'
        },
    ],


    relatedDeals: [
        {
            id: 1,
            image: websiteBuilderImage,
            name: 'Webbuilder 1',
            description: 'Computer  Modern clasic with wix support',
            oldPrice: '39.96',
            newPrice: '49.96',
            discount: '20',
            deals: 'Limited time'
        },
        {
            id: 2,
            image: websiteBuilderImage,
            name: 'Webbuilder 1',
            description: 'Computer  Modern clasic with wix support',
            oldPrice: '39.96',
            newPrice: '49.96',
            discount: '20',
            deals: 'Limited time'
        },
        {
            id: 3,
            image: websiteBuilderImage,
            name: 'Webbuilder 1',
            description: 'Computer  Modern clasic with wix support',
            oldPrice: '39.96',
            newPrice: '49.96',
            discount: '20',
            deals: 'Limited time'
        }
    ]
}