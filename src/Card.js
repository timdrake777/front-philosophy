import { render } from '@testing-library/react';
import React,{useState} from 'react'
import { useEffect } from 'react';

function Card(props) {

    var quotes_s = props.quotes;
    console.log(props);

    const [quoteAuthor, setAuthor] = useState(props.quotes[0].author);
    const [quote, setQuote] = useState(props.quotes[0].content);
    const [quoteIndex, setIndex] = useState(1);

    useEffect(() => {
        setAuthor(props.quotes[0].author);
        setIndex(1);
    },[props.quotes[0].author]);

    useEffect(() => {
        setQuote(props.quotes[0].content);
        setIndex(1);
    },[props.quotes[0].content]);

    function nextQuote(quotes_s, quoteIndex){
        if (quoteIndex < quotes_s.length){
            setQuote(quotes_s[quoteIndex].content);
            setAuthor(quotes_s[quoteIndex].author);
            setIndex(quoteIndex + 1);
        }
    }
        
        return (
            <div className="quote-box">
                <h4 className='authorLine'>{quoteAuthor}</h4>
                <h3>{quote}</h3>
                <button className='quote-box_btn' onClick={() => nextQuote(quotes_s, quoteIndex)}><h3>Следующая цитата</h3></button>
            </div>
        )

}

export default Card;