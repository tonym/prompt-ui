import { execSync } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync } from 'fs';

// Paths
const inputPath = './packages/tokens/src/tokens/tokens.json';
const tempOutputPath = './packages/tokens/src/tokens/transformed.json';
const outputTsPath = './packages/tokens/src/tokens/tokens.ts';
const outputIndexPath = './packages/tokens/src/tokens/index.ts';

function unwrapValues(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  // If the object has only "value" and "type", unwrap it
  if ('value' in obj && Object.keys(obj).length === 2 && 'type' in obj) {
    return unwrapValues(obj.value);
  }

  const result = {};
  for (const key in obj) {
    result[key] = unwrapValues(obj[key]);
  }
  return result;
}

try {
  // Transform with token-transformer (output to temp file)
  execSync(`npx token-transformer ${inputPath} ${tempOutputPath}`);
  console.log(`✅ Token-transformer wrote: ${tempOutputPath}`);

  // Read transformed JSON
  const transformed = JSON.parse(readFileSync(tempOutputPath, 'utf8'));

  // Write to tokens.ts
  const unwrapped = unwrapValues(transformed);
  const tsOutput = `export const tokens = ${JSON.stringify(unwrapped, null, 2)};\n`;
  writeFileSync(outputTsPath, tsOutput);
  console.log(`✅ tokens.ts written to ${outputTsPath}`);

  // Write index.ts to re-export
  const indexOutput = `export { tokens } from './tokens';\n`;
  writeFileSync(outputIndexPath, indexOutput);
  console.log(`✅ index.ts written to ${outputIndexPath}`);

  // Clean up
  unlinkSync(tempOutputPath);
  console.log('🧹 Temporary file removed');
  console.log('🎉 Token transformation complete.');
} catch (err) {
  console.error('❌ Error during token transformation:', err);
  process.exit(1);
}
