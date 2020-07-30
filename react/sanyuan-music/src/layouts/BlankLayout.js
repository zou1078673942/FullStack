import React from 'react';
import { renderRoutes } from "react-router-config";

const BlankLayout = ({ route }) => <>{renderRoutes(route.routes)}</>

export default BlankLayout; 