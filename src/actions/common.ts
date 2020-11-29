import { createAction } from '@reduxjs/toolkit';

export const loading = createAction<boolean>('common/loading');
