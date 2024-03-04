'use client';

import React from 'react';
import { Button } from '@mui/material';

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Btn(props: Props) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}
