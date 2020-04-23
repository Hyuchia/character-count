# Character Count
Counting characters in a string seems like a trivial thing until emojis get involved. This simple function will allow you to count emojis in a string as a single character each.

## Installation
This library is provided as an UMD module that can be installed by adding the files manually to your project or via a package manager.

**Yarn**
```
yarn add @blac-sheep/character-count
```

**NPM**
```
npm install @blac-sheep/character-count
```

**Adding it manually**
```html
<script src="character-count.min.js"></script>
```

## Usage

**NodeJS**
```javascript
const characterCount = require('@blac-sheep/character-count').default;
```

**ES6**
```javascript
import characterCount from '@blac-sheep/character-count';
```

**Browser**
```javascript
const characterCount = CharacterCount.default;
```

## Examples

```javascript
countCharacters('Hi there! 👩🏿‍🦽'); // returns: 11
countCharacters('🤲🏿'); // returns: 1
countCharacters('👩‍👧‍👧'); // returns: 1
countCharacters('👩‍👧‍👧👩‍👧‍👧'); // returns: 2
countCharacters('👩‍👧‍👧👩‍👧‍👧👩‍👧‍👧'); // returns: 3
countCharacters('😀'); // returns: 1
```

## License
This library is released under the [MIT license](LICENSE.md).