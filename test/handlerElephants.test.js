const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Teste se ao informar um parametro diferente de string emite uma mensagem de erro "Parâmetro inválido, é necessário uma string"', () => {
        expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string')
    });
    it('Teste se nao informar um parametro retorna undefined.', () => {
        expect(handlerElephants()).toBeUndefined();
    });
    it('Teste se ao passar o parametro "averageAge" retorna 10.5', () => {
        expect(handlerElephants('averageAge')).toBe(10.5);
    });
    it('Teste se ao passar o parametro "names" retorna um array com o nome de todos os Elefantes', () => {
        expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
    });
    it('Teste se ao passar o parametro "count" retorna a quantidade de elefantes', () => {
        expect(handlerElephants('count')).toEqual(4);
    });
    it('Teste se ao passar o parametro "location" retorna a localizacao geografica', () => {
        expect(handlerElephants('location')).toEqual('NW');
    });
    it('Teste se ao passar o parametro "popularity" retorna a nota de popularidade dos elefantes.', () => {
        expect(handlerElephants('popularity')).toEqual(5);
    });
    it('Teste se ao passar o parametro "availability" retorna um array com os dias disponiveis para visitacao aos elefantes.', () => {
        expect(handlerElephants('availability')).toEqual([ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ]);
    });
    it('Teste se ao passar uma string como parametro diferente das mencionadas anteriormente retona null.', () => {
        expect(handlerElephants('resid')).toBeNull();
    });
});
