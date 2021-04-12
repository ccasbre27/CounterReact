import React from 'react';
import PrimeraApp from '../../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
   
    /*
    test('debe mostrar el mensaje "Hola, soy Gokú" ', () => {
       
        const saludo = 'Hola, soy Gokú';
        const { getByText } = render(<PrimeraApp saludo={ saludo }/>)

        expect( getByText( saludo ) ).toBeInTheDocument();

    });
    */

    test('debe de mostrar <PrimeraApp /> correctament', () => {
       
        const saludo = 'Hola, soy Gokú';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot()

    });
    
    

});
