import React, { Component } from 'react'

class PageFour extends Component {
    render() {
        return (
            <div className='four'>
                <div className='fourUp'>
                    <p>Помните: <br/>
                        Именно Вы достойны самых лучших<br/>
                        в мире отношений!
                    </p>
                    <p>Почему?</p>
                </div>
                <div className='fourDown'>
                    <div>
                    <p>Потому что жизнь пролетает так <br/>
                        стремительно…</p>
                    <p>А закаты намного прекраснее, когда <br/>
                        провожаешь их вдвоем...</p>
                    </div>

                    <form action="URL">
                        <input type="text"  placeholder="Введите Ваш Е-майл"/>
                        <div>
                            <input className="checkbox" type="checkbox"  checked/>
                            <label for="checkbox">никакого спама, гарантируем</label>
                        </div>
                        <button><input value="Записаться" type="submit"/></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PageFour;