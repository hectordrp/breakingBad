import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SearchPipe } from '../search.pipe';
import { CharacterListComponent } from './character-list.component';

describe('CharacterList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterListComponent,
        SearchPipe
      ],
      imports: [HttpClientModule]
    });
    TestBed.compileComponents();
  });

  it('should create the characterList component',(() => {
    const fixture = TestBed.createComponent(CharacterListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
 