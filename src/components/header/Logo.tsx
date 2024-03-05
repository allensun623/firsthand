import React from 'react';
import routes from '@/constants/routes';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={routes.HOME}>
      <Image height={60} src={logo} alt='Logo' />
    </Link>
  );
}
