'use client';

import { useState } from 'react';

export default function useSheet(state: boolean) {
  const [active, setActive] = useState(state);

  const showSheet = () => {
    setActive(true);
  };

  const hideSheet = () => {
    setActive(false);
  };

  const toggleSheet = () => {
    setActive((prevActive) => !prevActive);
  };

  return {
    active,
    showSheet,
    hideSheet,
    toggleSheet,
  };
}
