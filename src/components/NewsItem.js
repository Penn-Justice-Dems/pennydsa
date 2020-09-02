import React, { Component } from 'react';
const images = require.context("../res/images/news/");

class NewsItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="news-item">
                <div className="info">
                    <h2 className="item-title">
                        { item.title }
                    </h2>
                    <div style={{position: "absolute", bottom: 15}}>
                        <p className="meta"> { item.source } </p>
                        <p className="meta"> { item.date } </p>
                        <a className="article-link" href={ item.link } target="_blank" rel="noopener noreferrer">
                            Read the full article
                        </a>
                    </div>
                    
                </div>
                <img className="image" src={images(`./${item.image}`)} alt={"Penn Justice Dems : " + item.source}/>
            </div>
        )
    }
}

export default NewsItem;
