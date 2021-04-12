import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('pruebas en funciones de heroes', () => {
    
    test('debe de retornar un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

        console.log(heroe);

    })

    test('debe de retornar undefined si héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toBe( undefined );
    })
    
    test('debe de retornar los héroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );
        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
    })
    
    test('debe de retornar los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );
        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
        expect( heroe.length ).toBe( 2 );
    })

})
