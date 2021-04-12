import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from "../../CounterApp";


describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    // se ejecuta antes de cada prueba
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('should ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el valor de 100 ', () => {
       
        const wrapper = shallow( <CounterApp value={ 100 }/> )
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');
    });

    test('debe de incrementar el contador', () => {
       
        const btnAdd = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    });

    test('debe de reducir el contador', () => {
       
        const btnSubstract = wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    });

    test('debe de restablecer el contador', () => {
       
        const wrapper = shallow( <CounterApp value={ 120 } /> );
        const btnReset = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('120');
    });
    
});