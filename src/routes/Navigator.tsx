import React, { useState } from 'react';
// import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import { PublicRoutes } from './PublicRoutes/PublicRoutes';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
// Imports End

export default function Navigator() {
  const [ user, setUser ] = useState(false)

  return user ? <PrivateRoutes /> : <PublicRoutes />;
}