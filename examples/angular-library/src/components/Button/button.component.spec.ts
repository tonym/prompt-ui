describe('PromptUIButtonComponent', () => {
  let PromptUIButtonComponent: any;

  beforeEach(() => {
    jest.resetModules();
    jest.mock(
      '@angular/core',
      () => ({
        Component: () => (target: unknown) => target,
        Input: () => () => {}
      }),
      { virtual: true }
    );
    PromptUIButtonComponent = require('./button.component').PromptUIButtonComponent;
  });

  it('includes the default appearance class', () => {
    const component = new PromptUIButtonComponent();
    expect(component.classList).toContain('appearance-solid');
  });

  it('includes the default intent class', () => {
    const component = new PromptUIButtonComponent();
    expect(component.classList).toContain('intent-primary');
  });
});
