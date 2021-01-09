import React, {useEffect, useState} from 'react';

import PostItem from '../PostItem/PostItem'
import {getQuestionList} from '../../api/api'

// const data = [
//     {id: 1, name: "Leanne Graham"},
//     {id: 2, name: "Ervin Howell"},
//     {id: 3, name: "Clementine Bauch"},
//     {id: 4, name: "Patricia Lebsack"}
// ];

function PostList() {

    const [data, setData] = useState(
        {
            "questions": [
                {
                    "id": "",
                    "title": "",
                    "creationDate": 0
                }
            ]

        });

    useEffect(() => {

        const axiosParams = {
            url: 'http://localhost',
            port: 8081,
        }

        getQuestionList(axiosParams)

            .then(({data}) => {
                    setData({...data})
                    console.log('success')
                }
            ).catch(reason => {
            console.log(reason + ' failure on retrieving question list')
        })

    }, [])


    return (
        <ul>
            {data.questions.map((item) => <PostItem key={item.id} value={item.title}/>)}
        </ul>
    );
}

export default PostList;
