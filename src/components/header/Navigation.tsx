'use client';

import React, { useMemo, useState } from 'react';
import { Box, Tab, Tabs, setRef } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { findLastIndex } from 'lodash';
import navItems from './navItems';

type Props = {};

export default function Navigation({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const tabValue = useMemo(
    // Check if the router is available and only then set the tab value
    () => findLastIndex(navItems, (nav) => pathname.startsWith(nav.href)) ?? 0,
    [pathname]
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: number) =>
    router.push(navItems[newValue].href);

  return (
    <Tabs value={tabValue} onChange={handleChange}>
      {navItems.map((nav, i) => (
        <Tab label={nav.name} key={i} />
      ))}
    </Tabs>
  );
}
