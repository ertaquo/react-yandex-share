## Yandex.Share for React

Simple Yandex.Share component for React

### Installation
`npm install --save react-yandex-share`
or
`yarn add react-yandex-share`

### Usage
`<YandexShare />`

Warning: it appends additional `script` tag into document body, for load Yandex.Share library.

### Props
`content`, `contentByService`, `theme`, `hooks` - read [official Yandex.Share API documentation](https://yandex.ru/dev/share/doc/dg/api-docpage/) for details.

### Example
```jsx
import React from 'react';
import YandexShare from 'react-yandex-share';

class App extends React.Component {
  render() {
    return (
      <div>
        <YandexShare
          content={{ title: 'My page' }}
          theme={{ lang: 'en', services: 'vkontakte,facebook,twitter' }}
        />
      </div>
    );
  }
}
```
