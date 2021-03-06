import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar hola fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );

    });

    test('getSaludo debe retornar hola Carlos si no hay argumento', () => {
        
        const nombre = 'Carlos';

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola ' + nombre );

    });

});