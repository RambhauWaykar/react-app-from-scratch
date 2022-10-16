import React from 'react';
import { createRoot } from 'react-dom/client';

import { Welcome } from './app';
import './index.css';

const container: any = document.getElementById('root');
const root: any = createRoot(container);

root.render(<Welcome />);
