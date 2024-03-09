import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import { BarDirective } from '../bar.directive';
import { BarMockDirective } from '../bar.mock-directive';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooComponent]
    })
    .compileComponents();

    TestBed.overrideComponent(FooComponent, {
      remove: { imports: [BarDirective] },
      add: { imports: [BarMockDirective] },
    });

    fixture = TestBed.createComponent(FooComponent);
    fixture.componentRef.setInput('foo', 1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 1', () => {
    expect(component.foo()).toBe(1);
  });
});
