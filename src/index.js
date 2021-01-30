import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useState } from 'react';
import React from 'react';




function None() {



    const [Data, setData] = useState([])

    console.log("jkshfka" + Data)

    const posts = (e) => {
        e.preventDefault()


        var name = document.getElementById("name").value;
        var text = document.getElementById('text').value;
        var image = document.getElementById('imgUrl').value;
        var date = new Date().toLocaleTimeString
        console.log(name, text, image, date)
        let newData = {
            name: name,
            text: text,
            image: image,
            date: date,
        }

        console.log(newData)

        setData((previousValue) => {
            return previousValue.concat([newData]);
        })
    }

    return (
        <div>
            <h1>Hello world</h1>
            <form onSubmit={posts}>
                <p>Name</p>
                <input type="text" id="name" />
                <p>Text</p>
                <input type="text" id="text" />
                <p>Image Url</p>
                <input type="text" id="imgUrl" />
                <button type="submit">Post</button>
            </form>

            {Data.map((EachPost, i) => {

                return (
                    <div key={i } className="post">
                        <div className="userInfo">
                            <div className="profilePic">
                                <img className="userPic" src={EachPost.image} />
                            </div>
                            <div className="userName">
                                <h3>{EachPost.name}</h3>
                                <p>{EachPost.date}</p>
                            </div>
                        </div>
                        <div className="postText">
                            <p>{EachPost.text}</p>
                        </div>
                        <div >
                            <img className="image" src={EachPost.image} />
                        </div>

                    </div>

                )

            })}

        </div>


    )
}




ReactDOM.render(<None />, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
