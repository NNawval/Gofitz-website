import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



describe('fetchLapangan', () => {
    test('render calendar', async () => {

      expect(screen.getByText('Pilih tanggal reservasi')).toBeInTheDocument();
    });

    test('render calendar satuan', async () => {


        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render deskripsi lapangan', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 

      });

      test('render detail pesanan', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render dropdrown item', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render footer', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render form reservasi', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render konfirmasi reservasi', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('list reservasi', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render navbar', async () => {

        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });
      test('render pilih lapangan', async () => {
        // Panggil fungsi fetchLapangan
        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });
      test('render pilih waktu', async () => {
        // Panggil fungsi fetchLapangan
        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render tanggal', async () => {
        // Panggil fungsi fetchLapangan
        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });

      test('render waktu ketersediaan', async () => {
        // Panggil fungsi fetchLapangan
        const Element = screen.getAllByTestId("")
        expect(Element).toBeDefined() 
      });
  });
