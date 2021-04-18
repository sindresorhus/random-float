import {expectType} from 'tsd';
import randomFloat from './index.js';

expectType<number>(randomFloat());
expectType<number>(randomFloat(5));
expectType<number>(randomFloat(10, 100));
