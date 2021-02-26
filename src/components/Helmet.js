import React, { useEffect } from 'react';
import { useLocation } from 'umi';
import { flatRoutesWithTitleList } from '../layouts/config';

export default function Helmet() {
  const { pathname } = useLocation();

  useEffect(() => {let r = flatRoutesWithTitleList
    const { title } = r.find(({ key }) => key === pathname) ?? {};
    document.title = title ? `${title}-frontend` : 'frontend';
  }, [pathname]);

  return null;
}