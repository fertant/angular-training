import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HTMLElement, HTMLInputElement } from '@angular/core';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for text', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    const searchButton: HTMLElement = hostElement.querySelector('button');

    // simulate user entering a new search phrase into the input box
    nameInput.value = 'search element';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchInput).toBe('search element');
    expect(component.searchStart).toBe(false);
    searchButton.click();
    fixture.detectChanges();
    expect(component.searchInput).toBe('search element');
    expect(component.searchStart).toBe(true);
  });
});
