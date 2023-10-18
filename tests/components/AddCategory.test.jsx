import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing AddCategory Component', () => { 
   
    const categoryName = 'Anderson Paak';

    const onNewCategory = jest.fn();

    test('should change the textbox value', () => {     
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: {value: categoryName }} );
        expect( input.value ).toBe(categoryName);
    })
    
    test('should call onNewCategory if it receive a value', () => { 
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 
        fireEvent.input( input, { target: {value: categoryName }} );
        fireEvent.submit( form );
        // Test Input Reseted
        expect(input.value).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toBeCalledWith(categoryName);
     })
    
    test('should avoid call onNewCategory if value is empty', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form'); 
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
     })


 })