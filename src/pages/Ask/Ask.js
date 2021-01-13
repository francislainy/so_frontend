import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";

import {port, url} from "../../helpers/Constants";
import {getQuestionItem} from "../../api/api";

function Ask() {

    // const [data, setData] = useState({});
    //
    // useEffect(() => {
    //
    //     const axiosParams = {
    //         url: url,
    //         port: port,
    //
    //     }
    //
    //     getQuestionItem(axiosParams)
    //
    //         .then(({data}) => {
    //
    //                 setData({...data})
    //             }
    //         )
    //
    // }, [])

    return (
        <div className="Ask">
            <h1>
                data.title
            </h1>
            <Button variant="outline-primary" >
                hello from ask
            </Button>
        </div>

    );
}

export default Ask;
