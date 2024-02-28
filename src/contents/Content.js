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
            image: websiteBuilderImage,
            name: 'Builder 1',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            deals: {
                name: 'Best Choice',
                img: Deals1
            },
            ratings: 9.8,
            ratingsName: 'Exceptional'
        },
        {
            image: websiteBuilderImage,
            name: 'Biulder',
            title: 'SiteCraft 68-Inch Ultimate Web Design Studio',
            description: 'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
            highlights: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
            deals: {
                name: 'Best Value',
                img: Deals2
            },
            ratings: 9.5,
            ratingsName: 'Excellent'
        },
        {
            image: websiteBuilderImage,
            name: 'Builder 1',
            title: 'WixPro 72-Inch Responsive Website Builder',
            description: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            highlights: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            ratings: 9.3,
            ratingsName: 'Exceptional'
        }
    ]
}