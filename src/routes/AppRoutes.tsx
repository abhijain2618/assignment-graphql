import React from 'react';
import { Route } from 'react-router-dom';

const Landing = React.lazy(() => import('../pages/Landing'));

const AppRoutes = (
  <React.Fragment>
    {/* Header links  */}
    <Route path="/*" element={<Landing />} />
    <Route path="/home" element={<Landing />} />
  </React.Fragment>
);

export default AppRoutes;
