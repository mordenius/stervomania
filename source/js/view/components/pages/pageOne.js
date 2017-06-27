import React, { Component } from 'react'

class PageOne extends Component {
  render() {
    return (
      <div className='one'>
        <h1>Отношения в удовольствие</h1>

        <p>О сокровенном без стеснения</p>
        <p>3 дня мы с Вами будем говорить о том, чего желают<br/>
          миллионы людей по всему миру. Но получают далеко не все.</p>

        <form action="URL">
          <input type="text"  placeholder="Введите Ваш Е-майл"/>
          <div>
            <input className="checkbox" type="checkbox"  checked/>
            <label for="checkbox">никакого спама, гарантируем</label>
          </div>
          <button><input value="Записаться" type="submit"/></button>
        </form>
      </div>
    )
  }
}

export default PageOne;