import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './styles';

export default function PageHeader({ title }) {
  return (
    <Header>
      <h2>{title}</h2>
    </Header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
