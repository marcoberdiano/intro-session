import React from 'react'

import calender from '../images/icon-calendar.svg'
import todo from '../images/icon-todo.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'


const DropMenuFeatures = () => {
    return ( 
        <ul className='dropDown-Content'>
            <li className='dropDow-item'>
            <span><img src={todo} alt={todo}/></span>
            <span>Todo List</span>
            </li>
            <li className='dropDow-item'>
                <span><img src={calender} alt={calender}></img></span>
                <span>Calendar</span>
            </li>
            <li className='dropDow-item'>
                <span><img src={reminders} alt={reminders}></img></span>
                <span>Reminders</span>
            </li>
            <li className='dropDow-item'>
                <span><img src={planning} alt={planning}></img></span>
                <span>Planning</span>
            </li>
        </ul>
     );
}
 
export default DropMenuFeatures;