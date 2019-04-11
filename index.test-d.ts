import {expectType} from 'tsd';
import randomFloat = require('.');

expectType<number>(randomFloat());
expectType<number>(randomFloat(5));
expectType<number>(randomFloat(10, 100));
