import * as React from 'react';
import './index.css';
const Talker = ({children,nickName,me,...props}:{children:React.ReactDOM,nickName:string,me:boolean,props:any}) => {
    return (
        <div className="talker">
            <div className="nickName">{nickName}</div>
            <div className={me ? 'rightContent' : 'leftContent'}>{children}</div>
        </div>
    )
}

export default Talker;