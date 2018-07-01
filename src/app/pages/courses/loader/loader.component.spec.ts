import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let buttonDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    buttonDe = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected course when event load trigger (triggerEventHandler)', () => {
    expect(component.loading).toEqual(false);
    buttonDe.triggerEventHandler('click', null);
    expect(component.loading).toEqual(true);
  });
});
