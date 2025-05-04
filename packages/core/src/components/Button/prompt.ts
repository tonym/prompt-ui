export const prompt = `
Create a Button component that accepts the following props:
- appearance: 'solid' | 'outline' | 'ghost'
- intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
- size: 'small' | 'medium' | 'large'
- type: 'button' | 'submit' | 'reset'
- disabled: boolean
- fullWidth: boolean

Theme usage instructions:
- Use the provided Theme object.
- Resolve the button background color based on the intent.
- If fullWidth is true, set width to 100%.
- Apply padding and border radius based on theme.spacing and theme.border values.
- If disabled is true, use the theme's disabled background color for the intent.

Instructions:
- Import the generator from './generate'.
- Return a plain object or JSON structure representing the button — NOT JSX.
- Do not assume a rendering library (e.g., React, Vue).
- Ensure button attributes are accessible (e.g., type, disabled).
`;
