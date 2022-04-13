import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Card from './Card';
import axios from 'axios';


function Search (){

    const quotes_s = [
        {
            id: 1,
            author: 'Аристотель',
            content: 'Будучи вне дома, держите себя так, словно принимаете почетных гостей. Пользуясь услугами людей, ведите себя так, словно свершаете торжественный обряд. Не делайте другим того, чего себе не пожелаете. Тогда ни в государстве, ни в семье не будет недовольства'
        },
        {
            id: 2,
            author: 'Сократ',
            content: 'Счастье — это когда тебя понимают, большое счастье — это когда тебя любят, настоящее счастье — это когда любишь ты.'
        },
        {
            id: 3,
            author: 'Гипократ',
            content: 'Сергей'
        }
    ];

    var searchItems = [];
    var itemsToSort = [];
    var testMas = ['Любовь','Жизнь','Жить','Смысл жизни','Труд','Общество','Бытие','Память','Боль','Родина','Интеллект','Прошлое', 'Мораль', 'Ложь'];
    const[transf,isTransf] = useState(false);
    const axios = require('axios');
    const [quotes, setQuotes] = useState(quotes_s);
      

    async function makeGetRequest(request) {
        axios.post('https://localhost:44381/api/index', {
            type: request
          })
          .then(function (response) {
            console.log(response);
            setQuotes(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    function maxElement(itemsToSort){
        let sumOfElements = [];
        for (let q = 0; q < itemsToSort.length; q++){
            sumOfElements[q] = 0;
        } 
        for (let i = 0; i < itemsToSort.length; i++){
            for(let j = 0; j < itemsToSort[i].length; j++){
                sumOfElements[i] += itemsToSort[i][j];
            }
        }
        let max = sumOfElements[0];
        let index = 0;
        for (let z = 0; z < sumOfElements.length; z++){
            if (max < sumOfElements[z]){
                max = sumOfElements[z];
                index = z;
            }
        }
        return index;
    }

    function checkCategory(searchItems, testMas){
        let indexItems = [];
        for (let q = 0; q < testMas.length; q++){
            for (let i = 0; i < searchItems.length; i++){
                indexItems[i] = 0;
            }
            for (let i = 0; i < searchItems.length; i++){
                    var tempStr = searchItems[i];
                    var tempStr2 = testMas[q];
                    if (tempStr.length > tempStr2.length){
                        for (let g = 0; g < tempStr2.length; g++){
                            if (tempStr[g].toLowerCase() === tempStr2[g].toLowerCase()){
                                indexItems[i] += 1;
                            }
                        }
                    }
                    else {
                        for (let z = 0; z < tempStr.length; z++){
                            if (tempStr2[z].toLowerCase() === tempStr[z].toLowerCase()){
                                indexItems[i] += 1;
                            }
                        }
                    }
            }
            itemsToSort[q] = indexItems;
            indexItems = [];
        }
        console.log(itemsToSort);
        var request = testMas[maxElement(itemsToSort)];
        console.log(request);
        return request;
    }

    function transformSearch (){
        let searchStr = document.querySelector('input').value;
        searchItems = searchStr.split(' ');
        console.log(searchItems.length);
        let searchBar = document.getElementById('search');
        let inputBar = document.getElementById('search-logo-box');
        let changeInput = document.getElementById('input');
        searchBar.style.transform = 'scale(0.7)';
        inputBar.style.padding = '1%';
        changeInput.style.margin = '0px auto 15px auto';
    }

    const onKeyDown = e =>{
        if (e.key === 'Enter'){
            if (document.querySelector('input').value === "") {
            	document.querySelector('input').placeholder = 'Нельзя отправлять пустой запрос';
            }
            else {
                transformSearch();
                if (transf === false){
                    isTransf(true);
                }
                makeGetRequest(checkCategory(searchItems, testMas));
            }
        }
    }


    return (
        <div className="search-logo-box" id='search-logo-box'>
            <Logo change={transf.toString()}></Logo>
            <div className="text-field__icon text-field__icon_search" id='search' style={{display: 'flex'}}>
                <input type="text" className='text_field-input' id='input' placeholder='Введите ваш вопрос здесь' maxLength={50} onKeyDown={onKeyDown} />
            </div>
            <Card quotes={quotes}></Card>
        </div>
    )
}

export default Search;