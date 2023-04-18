import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../reactRedux/redux';
import '@testing-library/jest-dom'
import Search from './Search';

//checking whether the "Load" text (not tag or component) is drawn in the <Search> component
it('renders without crashing Search', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    const LinkElement = getByText(/Load/i);
    expect(LinkElement).toBeInTheDocument()
});

//checking whether the "Load" text (not tag or component) is drawn in the <Search> component
describe('Search',()=>{
    it('renders Search component', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        expect(screen.getByText(/Load issues/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    });
})