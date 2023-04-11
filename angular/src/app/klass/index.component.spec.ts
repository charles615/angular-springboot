import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { Klass } from '../norm/entity/klass';
import { Teacher } from '../norm/entity/teacher';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [HttpClientTestingModule, FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
    const req = httpTestingController.expectOne('http://localhost:8080/Klass?name=');
    const klasses = [
         new Klass(1, 'class1', new Teacher(1, 'charles', '123')),
         new Klass(2, 'class2', new Teacher(2, 'charles2', '123')),
       ];
       req.flush(klasses);
       fixture.detectChanges();
       fixture.whenStable().then(() => {
        const debugElement = fixture.debugElement;
        const tableElement = debugElement.query(By.css('table'));
        const nameInput: HTMLTableElement = tableElement.nativeElement;
        expect(nameInput.rows.length).toBe(3);
        expect(nameInput.rows.item(1)?.cells.item(1)?.innerText).toBe('class1');
        expect(nameInput.rows.item(1)?.cells.item(2)?.innerText).toBe('123');
       })
  });


  it('测试V层的交互操纵', () => {
    expect(component).toBeTruthy();
    component.params.name = 'test';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugElement = fixture.debugElement;
      const nameInputElement = debugElement.query(By.css('input[name="name"]'));
      const nameInput: HTMLInputElement = nameInputElement.nativeElement;
      expect(nameInput.value).toBe('test');

  });
  });

  fit('测试查询按钮', () => { 
    expect(component).toBeTruthy(); 
    const name = 'hello'; 
    component.params.name = name; 
    fixture.detectChanges();  
    fixture.whenStable().then(() => {
      const queryButton: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement; 
      queryButton.click(); 
      const req = httpTestingController.expectOne(`http://localhost:8080/Klass?name=${name}`); 
      req.flush([ 
        new Klass(1, 'hello班', new Teacher(1, 'zhagnsan', '张三'))
      ]);
      fixture.detectChanges(); 
      fixture.whenStable().then(() => { 
        const debugElement: DebugElement = fixture.debugElement; 
        const tableElement = debugElement.query(By.css('table')); 
        const tableHtml: HTMLTableElement = tableElement.nativeElement; 
        expect(tableHtml.rows.length).toBe(2); 
      });
    });
  });






});
