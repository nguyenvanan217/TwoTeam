import React from "react";
import './Blog.css';
function BlogItem({ img, title, content }) {
    return (
    <>
        <div className="container">
                <div className="content-left">
                    <img src={img} alt="" />
                </div>
                <div className="content-right">
                    <h2 className="title1"><strong>{title}</strong></h2>
                    <p>{content}</p>
                </div>
        </div>
    </>
    )
}
export default BlogItem;