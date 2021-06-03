import {Link} from "react-router-dom";
import React from "react";
import {Button, Result} from "antd";


const NotFound=()=>{
    return(
        <>
            <Result className='flex'
                    status="404"
                    title="404"
                    subTitle="К сожалению, посещенная вами страница не существует."
                    extra={<Link to={'/'}><Button type="primary">Вернуться домой</Button></Link>}/>
            </>
    )
}


export default NotFound;
