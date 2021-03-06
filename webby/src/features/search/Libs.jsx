import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from '../../utils/GetArticle';

class Libs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ' ',
      url: ' ',
      title: ' ',
      imgUrl: ' ',
      query: this.props.query,
      indic: true

    };
  }
  componentWillReceiveProps() {
    const key = 'AIzaSyBbvk21k9hF6HNwIONXX-zwVw4-xNafNJE'

    console.log('url next');
    console.log(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=b2429b4ec66f52cb6`
    );
    get(
      `https://www.googleapis.com/customsearch/v1?q=${this.props.query}&key=${key}&tbm=nws&cx=b2429b4ec66f52cb6`
    ).then((res) =>
      this.setState({
        data: res.items[0].snippet,
        url: res.items[0].formattedUrl,
        title: res.items[0].title,
        imgUrl: res.items[0].pagemap.cse_thumbnail[0].src,
        indic: false
      })
    );
  }

  render() {
    const { data, url, title,imgUrl,indic } = this.state;
    return (
      <div className="d-flex flex-row text-wrap">
        <p className="text-wrap">
          <b>{indic || 'Liberal article title: '}</b>
          <a href={url}>{ title}</a>
          <br></br>
          
          <br></br>
          <img 
          src={imgUrl}
          />
          <br></br>
          <br></br>
          <b>{indic || 'Liberal article snippet: '}</b> {data}

          <br></br>
          <br></br>


        </p>
      </div>
    );
  }
}

Libs.propTypes = {
  url: PropTypes.string,
};

export default Libs;
