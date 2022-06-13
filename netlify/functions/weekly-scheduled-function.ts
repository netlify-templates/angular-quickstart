import { Handler, schedule } from '@netlify/functions';
import fetch from 'node-fetch';

const rebuildFunc = async () => {
  await fetch('https://api.netlify.com/build_hooks/62a7543223b63b6636736af4', {
    method: 'POST',
  });

  return {
    statusCode: 200,
    body: 'Weekly build triggered.',
  }
}

export const handler = schedule('@hourly', rebuildFunc);