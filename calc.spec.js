const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});

lab.test('retorno da soma de 11 e 3 deve ser 14', (done) => {

    Code.expect(soma(11, 3)).to.equal(14);
    done();
});

lab.test('retorno da soma de 8 e 25 deve ser 33', (done) => {

    Code.expect(soma(8, 25)).to.equal(33);
    done();
});

lab.test('the return of eigthy plus two hundred should be equal to two hundred and eigthy', (done) => {

    Code.expect(soma(80, 200)).to.equal(280);
    done();
});

lab.test('do seventy times seventy, using only plus operations.', (done) => {

    Code.expect(soma(2450, 2450)).to.equal(4900);
    done();
});
