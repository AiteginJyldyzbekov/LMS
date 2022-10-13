import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import './i18n/i18next';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from "react-router-dom";

const AllTheProviders: FC<{ children: React.ReactElement }> = ({
  children,
}) => <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
