import React from 'react';
import PropTypes from 'prop-types';

class YandexShare extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
  }

  componentWillMount() {
    if ((typeof window === 'object') && (!('Ya' in window) || (typeof window.Ya.share2 !== 'function'))) {
      const script = document.createElement("script");
      script.src = "https://yastatic.net/share2/share.js";
      script.async = true;
      script.onload = () => this.componentDidMount();

      document.body.appendChild(script);
    }
  }

  componentDidMount() {
    if (this.containerRef.current && (typeof window === 'object') && ('Ya' in window) && (typeof window.Ya.share2 === 'function')) {
      window.Ya.share2(this.containerRef.current, this.props);
    }
  }

  render() {
    return (
      <div ref={this.containerRef} />
    );
  }
}

YandexShare.propTypes = {
  content: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),

  contentByService: PropTypes.object,

  theme: PropTypes.shape({
    bare: PropTypes.bool,
    copy: PropTypes.oneOf([ 'last', 'first', 'hidden' ]),
    counter: PropTypes.bool,
    direction: PropTypes.oneOf([ 'horizontal', 'vertical' ]),
    lang: PropTypes.oneOf([ 'az', 'be', 'en', 'hy', 'ka', 'kk', 'ro', 'ru', 'tr', 'tt', 'uk' ]),
    limit: PropTypes.number,
    nonce: PropTypes.string,
    popupDirection: PropTypes.oneOf([ 'bottom', 'top' ]),
    popupPosition: PropTypes.oneOf([ 'inner', 'outer' ]),
    services: PropTypes.string,
    size: PropTypes.oneOf([ 'm', 's' ]),
  }),

  hooks: PropTypes.shape({
    onready: PropTypes.func,
    onshare: PropTypes.func,
  }),
};

export default YandexShare;