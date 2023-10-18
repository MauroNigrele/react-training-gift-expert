import { render, screen, fireEvent } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";


describe('Tests for GifItem Component', () => { 

    const testTitle = 'Google Page';
    const testUrl = 'https://www.google.com/';

    test('should match with snapshot', () => {     
        const {container} = render( <GifItem title={ testTitle } url={ testUrl } /> );
        expect(container).toMatchSnapshot();
    });

    test('should display image url and alt', () => {     
        render( <GifItem title={ testTitle } url={ testUrl } /> );
        // console.log(screen.debug());
        // console.log(screen.getByRole('img').src);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(testUrl);
        expect(alt).toBe(testTitle);
    });
    
    test('should display title', () => {     
        render( <GifItem title={ testTitle } url={ testUrl } /> );
        expect(screen.getByText( testTitle )).toBeTruthy();
    });





    

});
