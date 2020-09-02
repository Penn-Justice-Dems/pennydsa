import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import BlockBackground from '../components/BlockBackground';
const images = require.context("../res/images/general/");

class GalleryPage extends Component {
    render() {
        const photos = [];
        for (let i = 0; i <= 24; i++) {
            photos.push({
                src: images(`./${i}.jpg`),
                thumbnail: images(`./${i}.jpg`)
            });
        };
        return (
            <div style={{position: "relative", width: "70%", margin: "auto"}}>
                <BlockBackground/>
                <Gallery images={photos}/>
            </div>
            
        )
    }
}


export default GalleryPage;
