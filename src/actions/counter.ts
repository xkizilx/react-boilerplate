import { createAction } from '@reduxjs/toolkit';

export const counterAdd = createAction<number>('counter/add');
export const counterAddAsync = createAction<number>('counter/addAsync');
