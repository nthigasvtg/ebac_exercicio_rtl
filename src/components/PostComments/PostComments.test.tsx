import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from './index';

describe('PostComments', () => {
    it('deve inserir dois comentários corretamente', async () => {
        render(<Post />);

        const textarea = screen.getByTestId('comment-textarea');
        const botao = screen.getByTestId('comment-submit-button');

        // primeiro comentário
        await userEvent.type(textarea, 'Primeiro comentário de teste');
        await userEvent.click(botao);

        // segundo comentário
        await userEvent.type(textarea, 'Segundo comentário de teste');
        await userEvent.click(botao);

        const comentarios = screen.getAllByTestId('comment-item');

        expect(comentarios).toHaveLength(2);
        expect(comentarios[0]).toHaveTextContent('Primeiro comentário de teste');
        expect(comentarios[1]).toHaveTextContent('Segundo comentário de teste');
    });
});