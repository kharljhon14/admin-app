'use client';

import { useState } from 'react';

export default function useDialog(state: boolean) {
  const [active, setActive] = useState(state);

  const showDialog = () => {
    setActive(true);
  };

  const hideDialog = () => {
    setActive(false);
  };

  const toggleDialog = () => {
    setActive((prevActive) => !prevActive);
  };

  return {
    active,
    showDialog,
    hideDialog,
    toggleDialog,
  };
}
