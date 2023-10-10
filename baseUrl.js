let baseUrl;

// Parse the string to a boolean
const isProd = process.env.NEXT_PUBLIC_ISPROD === 'true';

const isProduction = isProd; // Use the parsed boolean directly

baseUrl = isProduction
  ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
  : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

const NEXT_PUBLIC_PROD = isProduction;

console.log('Production Environment:', isProduction);
console.log('BASE_URL:', baseUrl);

module.exports = {
  baseUrl,
  NEXT_PUBLIC_PROD,
};
