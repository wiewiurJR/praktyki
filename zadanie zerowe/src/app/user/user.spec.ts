import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from './user';
import { AppModule } from '../app.module';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    component.user = { id: 'u1', name: 'Test', avatar: 'user-1.jpg' };
    component.selected = false;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
