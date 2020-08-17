import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TodoIconsComponent } from './layout/components/todo-icons/todo-icons.component';
import { MachinesIconsComponent } from './layout/components/machines-icons/machines-icons.component';
import { SecondComponent } from './second/second.component';
import { TeamsComponent } from './teams/teams.component';
import { AppMaterialModule } from './app-material.module';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MachinesIconsComponent,
        TodoIconsComponent,
        SecondComponent,
        TeamsComponent
      ],
      imports: [
        LayoutModule,
        AppMaterialModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular01'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular01');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular01 app is running!');
  // });
});
