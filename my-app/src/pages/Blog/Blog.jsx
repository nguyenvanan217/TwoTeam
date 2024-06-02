import React from 'react'
import { GrNext } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import BlogItem from './Blogitems'
import ListBlog from '../../components/Categories/db/db_blog'
import Navbar from '../../components/header/Navbar'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Footer from '../../components/footer/footer'
import './Blog.css'
function Blog() {
    return (
        <>
            <Navbar />
            <div className="full-contents">
                <div className="menu">
                    <Link to="/">Trang Chủ /</Link>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </div>
                <h1 className="BLOG">BLOG</h1>
                <div className="blog-list">
                    {
                        ListBlog.map((item, index) => {
                            return <BlogItem key={index} img={item.img} title={item.title} content={item.content} />
                        })
                    }
                </div>
                <div className="page-number">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>...</li>
                        <li>5</li>
                        <li><GrNext /></li>
                    </ul>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Blog;
