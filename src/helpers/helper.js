import React from 'react';
import history from '../config/history';

export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} >&nbsp;</h3>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export const browserRedirect = location => {
  history.push(location);
}

export const parseJwt = token => {
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  return null;
};

export const checkAuthorization = () => {
  const storedToken = localStorage.getItem('token');

  if (storedToken) {
    const tokenPayload = parseJwt(storedToken);

    const expiration = new Date(tokenPayload.exp * 1000).getTime();
    const current = new Date().getTime();

    if (current > expiration) return false;

    return true;
  }

  return false;
};