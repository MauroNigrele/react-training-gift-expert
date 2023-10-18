import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('GifExpertApp Tests', () => { 
    test('should match with snapshot', () => {     
        const {container} = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();
    });
 })