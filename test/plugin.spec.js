import BabelRootImportPlugin from '../plugin';

describe('Babel Root Import', () => {
  let babelRootImportPlugin, plugin;

  beforeEach(() => {
    babelRootImportPlugin = BabelRootImportPlugin();
    plugin = new babelRootImportPlugin();
  });

  describe('Vars', () => {
    it('returns the root path', () => {
      const rootByProcess = process.cwd();
      expect(plugin.root).to.equal(rootByProcess);
    });
  });

  describe('transformRelativeToRootImport', () => {
    it('returns a string', () => {
      const func = plugin.transformRelativeToRootImport();
      expect(func).to.be.a('string');
    });
  });

  describe('hasTildeInString', () => {
    it('returns a boolean', () => {
      const func = plugin.hasTildeInString();
      expect(func).to.be.a('boolean');
    });

    it('check if a "~/" is at the beginning of the string', () => {
      const withoutTilde = plugin.hasTildeInString('some/path');
      const withTilde = plugin.hasTildeInString('~/some/path');
      expect(withoutTilde).to.be.false;
      expect(withTilde).to.be.true;
    });

    it('returns false if no string is passed', () => {
      const nothingPassed = plugin.hasTildeInString();
      const wrongTypePassed = plugin.hasTildeInString([]);
      expect(nothingPassed).to.be.false;
      expect(wrongTypePassed).to.be.false;
    });
  });
});