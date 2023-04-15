import React, { useState, useEffect } from "react";
import Nav from '../components/Nav_nothome'
import defpp from '../components/defpp.jpg'
import "./Community.css"

const Community = () => {

    const [showForm, setShowForm] = useState(false);
    const [suberr, setSubErr] = useState(false);
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const [cmtpg, setCPGbg] = useState('cmnitypage');
    const handleShareClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/newpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, story }),
        })
            .then((response) => {
                response.json()
                console.log(response)
                if (response.status === 200) {
                    setName("")
                    setStory("")
                    handleCloseForm();
                    FetchPosts()

                } else {

                    setSubErr(true)
                }
            })
            .then((data) => {
                console.log(data);
                // do something with the response data


            })
            .catch((error) => {
                console.error('Error:', error);
                setSubErr(true)

            });

    };


    const handleCloseForm = () => {
        setName("")
        setStory("")
        setShowForm(false);
        setSubErr(false)
    };


    setInterval(() => {
        setCPGbg("cmnitypage linearbgcmitypg")
    }, 2000);

    const [allposts, setAllPosts] = useState([])

    const FetchPosts = async () => {
        try {
            const resFromBack = await fetch('http://localhost:5000/allposts', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })

            const data = await resFromBack.json()
            setAllPosts(data)
            console.log(data)

            if (resFromBack.status !== 200 || !data) {
                console.log("Not logged in")
                window.alert("Error")
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        FetchPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Nav />
            <div className="CMT">
                <div className={cmtpg}>

                    <header>We believe that by sharing our experiences, we can help others feel less alone and inspire them to seek the help they need. Join us in creating a supportive and inclusive space where everyone's voice is heard.</header>

                    <h1 className="head_st">
                        Stories of People
                    </h1>

                    <div className="allposts">

                        {/* ////////////////// */}
                        {/* <div className="post">
        <div className="posthead">
            <img src={defpp} alt="" />
            <p className="name">Anonymous</p>
        </div>

        <div className="post_content">
            <p className="post_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita quisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
            </p>

        </div>
    </div> */}

                        {allposts.map((val) => {
                            return <>
                                <div className="post">
                                    <div className="posthead">
                                        <img src={defpp} alt="" />
                                        <p className="name">{"User" + Math.floor(Math.random() * 1000000)}</p>
                                    </div>

                                    <div className="post_content">
                                        <p className="post_text">
                                            {val.story}
                                        </p>

                                    </div>
                                </div>
                            </>
                        })}
                        {/* ////////////////// */}


                    </div>



                    <div className="sharesection">
                        <button className="share_btn" onClick={handleShareClick}>
                            Share your story
                        </button>
                    </div>


                    {showForm && (
                        <div className="form-popup">
                            <form onSubmit={handleSubmit}>

                                <h3>Share Your Story</h3>
                                <label htmlFor="name">Name: <span>(Your name will be hidden)</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="story">Your Story:</label>
                                <textarea
                                    rows={10}
                                    name="story"
                                    value={story}
                                    onChange={(e) => setStory(e.target.value)}
                                />
                                {suberr ? <span className="errormessage"> *Error Posting the story</span> : <></>}
                                <div className="form-buttons">
                                    <button type="submit" className="submitbtn" >Submit</button>
                                    <button className="closebtn" type="button" onClick={handleCloseForm}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Community