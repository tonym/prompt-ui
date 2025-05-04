import { Component } from '@angular/core';
import { Button, provideTheme, provideTokens } from '@prompt-ui/core';
import { tokens } from '@prompt-ui/tokens';

provideTokens(tokens.core);
provideTheme();

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding: 2rem;">
      <h1>Hello, PromptUI!</h1>
      <Button appearance="ghost" intent="primary" size="medium"> Click Me </Button>
    </div>
  `
})
export class AppComponent {}
