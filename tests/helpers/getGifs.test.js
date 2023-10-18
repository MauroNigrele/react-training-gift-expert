import { render, screen, fireEvent } from "@testing-library/react"
import { getGifs } from "../../src/helpers/getGifs";

describe('Tests for getGifs Helper', () => { 

    test('should return an array of gifs', async() => {     
        const gifs = await getGifs('anderson paak');
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            url: expect.any( String ),
            title: expect.any( String ),
        });
    });

});
