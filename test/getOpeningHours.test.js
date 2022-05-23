const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Teste se ao chamar a funcao sem parametros, retorna a agenda de abertura completa', () => {
        const agenda = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 }
        }
        expect(getOpeningHours()).toMatchObject(agenda);
    });

    it('Teste se ao chamar a funcao com os parametros Monday e 09:00-AM, retorna a string "The zoo is closed"', () => {
        expect(getOpeningHours('Monday', '9:00-AM')).toBe('The zoo is closed');
    });

    it('Teste se ao chamar a funcao com os parametros Tuesday e 09:00-AM, retorna a string "The zoo is open"', () => {
        expect(getOpeningHours('Tuesday', '9:00-AM')).toBe('The zoo is open');
    });

    it('Teste se ao chamar a funcao com os parametros Wednesday e 09:00-PM, retorna a string "The zoo is closed"', () => {
        expect(getOpeningHours('Wednesday', '9:00-PM')).toBe('The zoo is closed');
    });

    it('Teste se ao chamar a funcao com os parametros Thu e 09:00-AM, retorna a execao "The day must be valid. Example: Monday"', () => {
        try {
            getOpeningHours('Thu', '09:00-AM')
        } catch (error) {
            expect(error.message).toBe('The day must be valid. Example: Monday');
        }        
    });

    it('Teste se ao chamar a funcao com os parametros Friday e 09:00-ZM, retorna a execao "The abbreviation must be \'AM\' or \'PM\'"', () => {
        try {
            getOpeningHours('Friday', '09:00-ZM')
        } catch (error) {
            expect(error.message).toBe("The abbreviation must be \'AM\' or \'PM\'");
        }        
    });

    it('Teste se ao chamar a funcao com os parametros Saturday e C9:00-AM, retorna a execao "The hour should represent a number"', () => {
        try {
            getOpeningHours('Saturday', 'C9:00-AM')
        } catch (error) {
            expect(error.message).toBe("The hour should represent a number");
        }        
    });

    it('Teste se ao chamar a funcao com os parametros Sunday e 09:c0-AM, retorna a execao "The minutes should represent a number"', () => {
        try {
            getOpeningHours('Sunday', '09:c0-AM')
        } catch (error) {
            expect(error.message).toBe("The minutes should represent a number");
        }        
    });

});
