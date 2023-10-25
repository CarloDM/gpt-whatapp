import {reactive} from 'vue';
import key from './key';
export const store = reactive ({
  gptApiKey : key.gptKey,
})