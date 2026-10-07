import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tasks } from './tasks';
import { TaskModule } from './task.module';

describe('Tasks', () => {
  let component: Tasks;
  let fixture: ComponentFixture<Tasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Tasks);
    component = fixture.componentInstance;
    component.userId = 'u1';
    component.name = 'Test';
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
