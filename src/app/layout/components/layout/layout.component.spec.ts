import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MachinesIconsComponent } from '../machines-icons/machines-icons.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent, ToolbarComponent ],
      imports: [
        AppMaterialModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
