const expect = require('chai').expect;
const starwarsNames = require('.');

describe('starwars-names', function () {
  it('should have a list of all available names', function () {
    expect(isArrayOfStrings(starwarsNames.all)).to.be.true;
  });

  it('should allow me to get a random name from the list', function () {
    expect(starwarsNames.random()).to.satisfy(isIncludedIn(starwarsNames.all));
  });
});

function isArrayOfStrings(arr) {
  return arr.every((item) => typeof item === 'string');
}

function isIncludedIn(arr) {
  return function (item) {
    return arr.indexOf(item) !== -1;
  };
}
