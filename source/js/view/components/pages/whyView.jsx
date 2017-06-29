import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";

class WhyView extends TransitionView {
    getInner() {
        return (
            <div className='four'>
                <div className='fourUp'>
                    <p>Помните: <br/>
                        Именно Вы достойны самых лучших<br/>
                        в мире отношений!
                    </p>
                    <p>Почему?</p>
                </div>
            </div>
        )
    }
}

export default WhyView;