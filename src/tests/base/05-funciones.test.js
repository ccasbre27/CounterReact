import { getUser, getActiveUser } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
   test('getUser debe retornar un usuario ', () => {
       const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
   })

   test('getUsuarioActivo debe retornar usuario especificado', () => {
        const name = 'Carlos';
            
        const user = getActiveUser( name );

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: name
        });
    })
    
});
