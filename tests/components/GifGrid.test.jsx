
import { render, screen, fireEvent } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid Compoenent Tests', () => { 
    
    const testCategory = 'Anderson Paak';

    test('should Display Loading', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={ testCategory } />);
        expect(screen.getByText('Loading . . .'));
        expect(screen.getByText( testCategory ));
    });
    
    test('should Display Items', () => { 
        
        const mockGifs = [
            {
                id: 'qwe',
                title: 'Lalala',
                url: 'https://google.com'
            },
            {
                id: 'asd',
                title: 'pindongo',
                url: 'https://apple.com'
            },
        ]; 

        useFetchGifs.mockReturnValue({
            images: mockGifs,
            isLoading: false,
        });

        render(<GifGrid category={ testCategory } />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

     })

 })