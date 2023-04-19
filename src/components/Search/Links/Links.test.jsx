import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../../reactRedux/redux';
import '@testing-library/jest-dom'
import Links from './Links';

it('renders without crashing CardsIssues', () => {
    const owner = 'facebook'
    const repo = 'react'
    const { getByText } = render(
        <Provider store={store}>
            <Links owner={owner} repo={repo} />
        </Provider>
    );
    const LinkElement = getByText('facebook');
    expect(LinkElement).toBeInTheDocument()
    const LinkElement2 = getByText('react');
    expect(LinkElement2).toBeInTheDocument()
    const LinkElement3 = getByText('>');
    expect(LinkElement3).toBeInTheDocument()
    
});