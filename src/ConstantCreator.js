export default class ConstantCreator {
  constructor(namespace, options = {}) {
    if (!namespace && process.env.NODE_ENV !== 'production') {
      throw new Error('ConstantCreator: Creation requires a namespace');
    }
    const { delimiter = '/' } = options;

    this.namespaces = [].concat(namespace);
    this.delimiter = delimiter;
  }

  createChild(namespace) {
    const childNamespaces = this.namespaces.concat(namespace);
    return new ConstantCreator(childNamespaces, this.delimiter);
  }

  createConstant(constant) {
    if (!constant && process.env.NODE_ENV !== 'production') {
      throw new Error('ConstantCreator: Constants requires a value');
    }
    return this.namespaces.concat(constant).join(this.delimiter);
  }
}
