import React from 'react';
import { render } from '@testing-library/react';
import ValidateEmail from './ValidateEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidateEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidateEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Verifica se o texto é verde se email estiver correto', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidateEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid.style.color).toMatch('green');
})

test('Verifica se o texto é vermelho se email estiver incorreto', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidateEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid.style.color).toMatch('red');
})