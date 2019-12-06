import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {
  AccordionModule,
  AutoCompleteModule,
  ButtonModule,
  CalendarModule, CardModule,
  MenubarModule,
  MessageModule, SidebarModule,
  SlideMenuModule, TabMenuModule, TabViewModule,
  TieredMenuModule, ToggleButtonModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';



@NgModule({
    imports: [
    CommonModule,
    ToastModule,
    MenubarModule,
    SlideMenuModule,
    TieredMenuModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    MessageModule,
    SidebarModule,
    TabMenuModule,
    AutoCompleteModule,
    CardModule,
    AccordionModule,
    TabViewModule,
    ToggleButtonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    ToastModule,
    MenubarModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    MessageModule,
    SidebarModule,
    SlideMenuModule,
    TieredMenuModule,
    TabMenuModule,
    AutoCompleteModule,
    CardModule,
    AccordionModule,
    TabViewModule,
    ToggleButtonModule
  ],
  providers: []
})
export class PrimengModule { }