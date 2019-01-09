'use strict';
//dependency modules
let chai = require('chai');
const main = require('./main');

describe('main.majorityElementTests', function () {

  it('Input: [3,2,3]...Output: 3',  async function () {
    let input = [3, 2, 3];
    let result = main.majorityElement(input);
    chai.expect(result).equal(3);

  });

  it('Input: [2,2,1,1,1,2,2]...Output: 2',  async function () {
    let input = [2,2,1,1,1,2,2];
    let result = main.majorityElement(input);
    chai.expect(result).equal(2);

  });

});