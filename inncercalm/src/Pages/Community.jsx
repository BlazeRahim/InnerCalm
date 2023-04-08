import React, { useState } from "react";
import Nav from '../components/Nav_nothome'
import defpp from '../components/defpp.jpg'
import "./Community.css"

const Community = () => {

    const [showForm, setShowForm] = useState(false);

    const handleShareClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };



    return (
        <>
            <Nav />
            <div className="cmnitypage">

                <header>We believe that by sharing our experiences, we can help others feel less alone and inspire them to seek the help they need. Join us in creating a supportive and inclusive space where everyone's voice is heard.</header>

                <h1 className="head_st">
                    Inspiring Stories of People
                </h1>

                <div className="allposts">
                    <div className="post">
                        <div className="posthead">
                            <img src={defpp} alt="" />
                            <p className="name">Anonymous</p>
                        </div>

                        <div className="post_content">
                            <p className="post_text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita quisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
                            </p>

                        </div>
                    </div>
                    <div className="post">
                        <div className="posthead">
                            <img src={defpp} alt="" />
                            <p className="name">Anonymous</p>
                        </div>

                        <div className="post_content">
                            <p className="post_text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita quisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
                            </p>

                        </div>
                    </div>
                    <div className="post">
                        <div className="posthead">
                            <img src={defpp} alt="" />
                            <p className="name">Anonymous</p>
                        </div>

                        <div className="post_content">
                            <p className="post_text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita quisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
                            </p>

                        </div>
                    </div>
                    <div className="post">
                        <div className="posthead">
                            <img src={defpp} alt="" />
                            <p className="name">Anonymous</p>
                        </div>

                        <div className="post_content">
                            <p className="post_text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita squisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="sharesection">
                    <button className="share_btn" onClick={handleShareClick}>
                        Share your story
                    </button>
                </div>


                {showForm && (
                    <div className="form-popup">
                        <form>
                            <h3>Share Your Story</h3>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" />
                            <label htmlFor="story">Your Story:</label>
                            <textarea name="story" />
                            <div className="form-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={handleCloseForm}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default Community