import React from 'react';
import { render } from '../../test-utils';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage tests', () => {
  it('should contains the heading and description', () => {
    const component = render(<NotFoundPage />);
    expect(
      component.getByText('Извините, страница не найдена!')
    ).toBeInTheDocument();
    expect(
      component.getByText(
        'Извините, мы не смогли найти страницу, которую вы ищете. Возможно, вы ошиблись URL адресом? Обязательно проверьте правописание.'
      )
    ).toBeInTheDocument();
  });
});
