import React, {useEffect, useState} from 'react';

import {port, url, userId} from "../../helpers/Constants";
import {getQuestionItem} from "../../api/api";
import Ask from "../../components/Ask/Ask";

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
            id: match.params.id,
            userId: userId
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
            <h3>
                {data.description}
            </h3>
            <Ask onClick={handleClick}/>
        </div>

    );
}

export default Post;
