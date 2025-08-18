import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromptUIButtonComponent } from './button.component';

@Component({
  template: `<promptui-button [appearance]="appearance" [intent]="intent" [disabled]="disabled">{{ label }}</promptui-button>`,
  standalone: true,
  imports: [PromptUIButtonComponent]
})
class TestHostComponent {
  label = 'Label';
  appearance: 'solid' | 'outline' | 'ghost' = 'solid';
  intent: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' = 'primary';
  disabled = false;
}

describe('PromptUIButtonComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should render label text', () => {
    const text = 'Click me';
    fixture.componentInstance.label = text;
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain(text);
  });

  it('should apply intent class for secondary variant', () => {
    fixture.componentInstance.intent = 'secondary';
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('intent-secondary');
  });

  it('should reflect disabled attribute', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(button.disabled).toBe(true);

    fixture.componentInstance.disabled = false;
    fixture.detectChanges();
    expect(button.disabled).toBe(false);
  });
});

