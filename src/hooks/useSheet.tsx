'use client';

import { useState } from 'react';

export default function useSheet(state: false) {
  const [active, setActive] = useState(false);

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
