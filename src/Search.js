import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Card from './Card';
import axios from 'axios';


function Search (){

    var searchItems = [];
    var testStr = 'Любовь';
    var indexItems = [];
    const[transf,isTransf] = useState(false);
    const axios = require('axios');

    async function makeGetRequest() {
        axios.post('https://reqres.in/api/users', {
            name: 'morpheus',
            job: 'leader'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
      

    function checkCategory(search, searchItems){
        for (let i = 0; i < searchItems.length; i++){
                var tempStr = searchItems[i];
                if (tempStr.length > search.length){
                    for (let g = 0; g < search.length; g++){
                        if (tempStr[g].toLowerCase() === testStr[g].toLowerCase()){
                            indexItems[i] += 1;
                        }
                    }
                }
                else {
                    for (let z = 0; z < tempStr.length; z++){
                        if (testStr[z].toLowerCase() === tempStr[z].toLowerCase()){
                            indexItems[i] += 1;
                        }
                    }
                }
        }
        console.log(indexItems);
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
        makeGetRequest();
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
                for (let i = 0; i < searchItems.length; i++){
                    indexItems[i] = 0;
                }
                checkCategory(testStr, searchItems);
            }
        }
    }


    return (
        <div className="search-logo-box" id='search-logo-box'>
            <Logo change={transf.toString()}></Logo>
            <div className="text-field__icon text-field__icon_search" id='search' style={{display: 'flex'}}>
                <input type="text" className='text_field-input' id='input' placeholder='Введите ваш вопрос здесь' maxLength={50} onKeyDown={onKeyDown} />
            </div>
            <Card ></Card>
        </div>
    )
}

export default Search;