import React, {useEffect, useState} from 'react';
import {port, url} from "../../helpers/Constants";
import {getQuestionItem} from "../../api/api";

function Post({match}) {

    const [data, setData] = useState(
        {
            id: "",
            title: "",
            totalDownVotes: 0,
            totalUpVotes: 1,
            totalVotes: 1
        });

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

    }, [])

    return (
        <div className="App">
            {data.title !== '' && <div>
                Hi from post detail {data.title}
            </div>}
        </div>

    );
}

export default Post;
