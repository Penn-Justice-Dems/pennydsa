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
            <div className="gallery-page">
                <h2 className="title">Photo Gallery</h2>
                <BlockBackground/>
                <Gallery
                    className="photo-grid"
                    images={photos}
                    margin={5}/>
            </div>
        )
    }
}

export default GalleryPage;
