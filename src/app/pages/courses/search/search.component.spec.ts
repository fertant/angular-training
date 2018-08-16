import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
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
    fixture.detectChanges();
    expect(component.searchStart).toBe(false);

    // simulate user entering a new too short phrase.
    component.searchInput.setValue('s', {
      onlySelf: false,
      emitEvent: true,
      emitModelToViewChange: true,
      emitViewToModelChange: true
    });

    fixture.detectChanges();
    expect(component.searchStart).toBe(false);

    // simulate user entering a new search phrase into the input box
    component.searchInput.setValue('search element', {
      onlySelf: false,
      emitEvent: true,
      emitModelToViewChange: true,
      emitViewToModelChange: true
    });

    fixture.detectChanges();
    expect(component.searchStart).toBe(true);
  });
});
