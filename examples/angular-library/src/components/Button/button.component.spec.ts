import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromptUIButtonComponent } from './button.component';

@Component({
  template: `<promptui-button [intent]="intent" [disabled]="disabled">{{label}}</promptui-button>`,
  standalone: true,
  imports: [PromptUIButtonComponent]
})
class TestHostComponent {
  label = 'Click me';
  intent: 'primary' | 'secondary' = 'primary';
  disabled = false;
}

describe('PromptUIButtonComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
  });

  it('should render label text', () => {
    expect(button.textContent?.trim()).toBe('Click me');
  });

  it('should apply intent classes', () => {
    host.intent = 'secondary';
    fixture.detectChanges();
    expect(button.className).toContain('intent-secondary');
  });

  it('should reflect disabled state', () => {
    expect(button.disabled).toBe(false);
    host.disabled = true;
    fixture.detectChanges();
    expect(button.disabled).toBe(true);
  });
});
