import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRootComponent } from './first-root.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FirstIconsComponent } from '../../components/first-icons/first-icons.component';
import { FirstToolbarsComponent } from '../../components/first-toolbars/first-toolbars.component';
import { FirstSpinnersComponent } from '../../components/first-spinners/first-spinners.component';
import { FirstComponent } from '../../components/first/first.component';
import { FirstTabsComponent } from '../../components/first-tabs/first-tabs.component';
import { FirstDialogComponent } from '../../components/first-dialog/first-dialog.component';
import { FirstSnackbarComponent } from '../../components/first-snackbar/first-snackbar.component';

describe('FirstRootComponent', () => {
  let component: FirstRootComponent;
  let fixture: ComponentFixture<FirstRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FirstComponent,
        FirstRootComponent,
        FirstToolbarsComponent,
        FirstIconsComponent,
        FirstSpinnersComponent,
        FirstTabsComponent,
        FirstDialogComponent,
        FirstSnackbarComponent
      ],
      imports: [
        AppMaterialModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
