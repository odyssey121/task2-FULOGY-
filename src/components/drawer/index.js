import React from 'react';
import './drawer.css';

export const Drawer = ({ setShift, shift }) => (
    <div className='drawer'>
        <button onClick={() => setShift(!shift)}>
            Вернуться
                    </button>
        <div>
            Дизайн выполнен в стиле современной классики. Декор из прозрачного резного стекла и хрусталя.<br />
            Невероятная игра света. Высокие параметры освещенности. Качественное исполнение всех элементов. Крепление к потолку на крючок.<br />
            Стилевые решения интерьера<br /><br />
            Освещение в классических и современных интерьерах, выполненных в стилях эклектики, фьюжен, современной классики.<br />Технология производства<br /><br />
            Основание выполнено из сплава металла и гальванизировано в цвет французского золота. Рожки светильника выполнены из стекла гутным способом.<br />
            Сверху арматура декорирована прозрачным хрустальным стеклом с градуированной огранкой. Светильник декорирован бусами из хрусталя и хрустальными подвесками 4-х видов огранки.<br />
            Тип помещения<br /><br />Зональное освещение в городской квартире, а также в интерьерах современных отелей, гостиниц, ресторанов.<br />

        </div>

    </div>
)