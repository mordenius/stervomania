import React, { Component } from 'react'

class PageSix extends Component {
    render() {
        return (
            <div className='six'>
                <p>Отношения должны приносить удовольствие и радость! <br/>
                    Иначе, зачем они?</p>
                <p>Если думаете так же - <br/>
                    записывайтесь на интенсив!</p>
                
                <form action="URL">
                    <input type="text"  placeholder="Введите Ваш Е-майл"/>
                    <div>
                        <input className="checkbox" type="checkbox"  checked/>
                        <label for="checkbox">никакого спама, гарантируем</label>
                    </div>
                    <button><input value="Записаться" type="submit"/></button>
                </form>

                <img src="./build/img/logo.png" alt=""/>
            </div>
        )
    }
}

export default PageSix;