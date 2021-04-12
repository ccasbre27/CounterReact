
describe('Pruebas en el archivo demo.js', () => {

    test('debe de ser true', () => {
    
        // Assert
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
    
        expect( mensaje ).toBe( mensaje2 );
    
    });

});

