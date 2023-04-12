import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KlassAddComponent } from './klass-add.component';

describe('Klass/AddComponent', () => {
  let component: KlassAddComponent;
  let fixture: ComponentFixture<KlassAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassAddComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
