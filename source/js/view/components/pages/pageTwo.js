import React, { Component } from 'react'

class PageTwo extends Component {
  render() {
    return (
      <div className='two'>
        <div className="twoUp">
          <iframe width="450" height="300" src="https://www.youtube.com/embed/xFa2_PVMeDQ" frameborder="0" allowfullscreen></iframe>
          <div className="twoUp-right">
            <p>Все люди на земле, хотят, чтобы их <br/>
              любили. Даже те, кто яростно это<br/>
              отрицает.
            </p>
            <p>Но большинство - одиноки или мучаются<br/>
              оттого, что, по идее, должно радовать.
            </p>
            <p>Почему так происходит и как понять,<br/>
              какой любви и отношений желает<br/>
              именно Ваша душа - обо всем этом на<br/>
              бесплатном курсе.
            </p>
          </div>
        </div>
        <div className="twoDown">
          <div>
            <p>День 1 <br/>
            Знакомства</p>
            <div className="day"></div>
          </div>
          <div>
            <p>День 2 <br/>
              Свидания</p>
            <div className="day"></div>
          </div>
          <div>
            <p>День 3 <br/>
              Сексуальность</p>
            <div className="day"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTwo;