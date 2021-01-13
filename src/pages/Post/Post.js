import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";

import {port, url} from "../../helpers/Constants";
import {getQuestionItem} from "../../api/api";

const {useHistory} = require('react-router-dom')

function Post({match}) {

    let history = useHistory();

    const handleClick = () => {
        history.push(`/post/ask`);
    }

    const [data, setData] = useState({});

    useEffect(() => {

        const axiosParams = {
            url: url,
            port: port,
            id: match.params.id
        }

        getQuestionItem(axiosParams)

            .then(({data}) => {

                    setData({...data})
                }
            )

    }, [match.params.id])

    return (
        <div className="App">
             <h1>
                 {data.title}
            </h1>
            <Button variant="outline-primary" onClick={handleClick} >
                Ask Question
            </Button>
        </div>

    );
}

export default Post;
