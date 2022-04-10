import React,{useState} from 'react'

function Card() {
    
    const quotes = [
        {
            id: 1,
            author: 'Аристотель',
            text: 'Будучи вне дома, держите себя так, словно принимаете почетных гостей. Пользуясь услугами людей, ведите себя так, словно свершаете торжественный обряд. Не делайте другим того, чего себе не пожелаете. Тогда ни в государстве, ни в семье не будет недовольства'
        },
        {
            id: 2,
            author: 'Сократ',
            text: 'Счастье — это когда тебя понимают, большое счастье — это когда тебя любят, настоящее счастье — это когда любишь ты.'
        },
        {
            id: 3,
            author: 'Гипократ',
            text: 'Сергей'
        },
        {
            id: 4,
            author: 'Аристарх',
            text: 'Сергей идет плавать, секси шмекси'
        },
        {
            id: 5,
            author: 'Монгольский хан',
            text: 'Сергей попей чайку и выкинь сижку'
        },
        {
            id: 6,
            author: 'Мать сыра земля',
            text: 'Сергей угости запеканкой'
        },
    ];



    const [quoteAuthor, setAuthor] = useState(quotes[0].author);
    const [quote, setQuote] = useState(quotes[0].text);
    const [quoteIndex, setIndex] = useState(1);

    function nextQuote(quotes, quoteIndex){
        if (quoteIndex < quotes.length){
            setQuote(quotes[quoteIndex].text);
            setAuthor(quotes[quoteIndex].author);
            setIndex(quoteIndex + 1);
        }
        console.log(quoteIndex);
    }

    return (
        <div className="quote-box">
            <h4 className='authorLine'>{quoteAuthor}</h4>
            <h3>{quote}</h3>
            <button className='quote-box_btn' onClick={() => nextQuote(quotes, quoteIndex)}><h3>Следующая цитата</h3></button>
        </div>
    )
}

export default Card;