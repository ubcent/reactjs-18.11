import React from 'react';
import { styled } from '@material-ui/core/styles';
import { SnackbarContent } from '@material-ui/core';

export const Message = styled(({ bgColor, ...other }) => <SnackbarContent {...other}/>)({
  backgroundColor: props =>
    props.bgColor
      ? '#3087a8'
      : '#ffc841'
});
