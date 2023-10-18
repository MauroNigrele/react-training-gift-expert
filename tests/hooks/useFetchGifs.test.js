
import { render, screen, fireEvent, renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
// import { GifGrid } from "../../src/components/GifGrid";

// jest.mock('../../src/hooks/useFetchGifs');

describe('useFetchGifs Tests', () => { 

    const testCategory = 'Anderson Paak';

    test('should retrieve initial State', () => { 
        const { result } = renderHook( () => useFetchGifs(testCategory) );
        const {images, isLoading } = result.current;
        // useFetchGifs();
        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);
    })
    
    test('should retrieve an images Array and', async() => { 
        const { result } = renderHook( () => useFetchGifs(testCategory) );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );
        const {images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy;
     })

 })