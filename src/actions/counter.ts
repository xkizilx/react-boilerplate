import { createAction } from '@reduxjs/toolkit';

export const add = createAction<number>('counter/add');
export const addAsync = createAction<number>('counter/addAsync');
