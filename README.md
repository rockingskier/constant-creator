# Constant Creator

A utility for generating namespaced constant strings.


## Example
```javascript
import ConstantCreator from 'constant-creator';


const projectConstants = new ConstantCreator('PROJECT');

projectConstants.createConstant('LOADING');  // 'PROJECT/LOADING'
projectConstants.createConstant('LOADED');  // 'PROJECT/LOADED'

const authConstants = projectConstants.createChild('AUTH');

authConstants.createConstant('LOGIN');  // 'PROJECT/AUTH/LOGIN'
authConstants.createConstant('LOGOUT');  // 'PROJECT/AUTH/LOGOUT'
```


## API Reference

### `new ConstantCreator(namespace, [options])`  
Create a namespaced constant creator

```javascript
const projectConstants = new ConstantCreator('PROJECT');

// You can set a custom delimiter on instantiation
const projectConstants = new ConstantCreator('PROJECT', { delimiter: '::' });
projectConstants.createConstant('INIT');  // 'PROJECT::INIT'

```

### `ConstantCreator.prototype.createConstant(namespace)`
Define a constant with in the creators namespace

```javascript
const projectConstants = new ConstantCreator('PROJECT');

projectConstants.createConstant('INIT');  // 'PROJECT/INIT'
```

### `ConstantCreator.prototype.createChild(namespace)`
Generate a new constant creator namespaced off it's parent

```javascript
const projectConstants = new ConstantCreator('PROJECT');
const moduleConstants = projectConstants.createChild('MODULE');

moduleConstants.createConstant('INIT');  // 'PROJECT/MODULE/INIT'
```
