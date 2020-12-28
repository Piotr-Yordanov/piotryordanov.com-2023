
const platforms = [{
    name: "Tradingview",
    media: [{
        img: '/platforms/TV/3 in a row.png',
        title: "3 in a row"
    }, {
        img: '/platforms/TV/RSI On Chart.png',
        title: "RSI On Chart"
    }, {
        img: '/platforms/TV/3 in a row.png',
        title: "3 in a row"
    }, {
        img: '/platforms/TV/3 in a row.png',
        title: "3 in a row"
    }]
}, {
    name: "MT4",
    media: [{
        videoId: 'kYugZ0hIczU',
        title: "Live NQ Trading",
        author: "Piotr Yordanov"
    }, {
        videoId: 'kYugZ0hIczU',
        title: "Live NQ Trading",
        author: "Piotr Yordanov"
    }]
}, {
    name: "cTrader",
    media: [{
        img: 'data:image/png;base64,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',
        title: "Live NQ Trading",
        author: "Piotr Yordanov"
    }]
}, {
    name: "PRT",
    media: [{
        videoId: 'kYugZ0hIczU',
        title: "Live NQ Trading",
        author: "Piotr Yordanov"
    }]
}]


export default platforms