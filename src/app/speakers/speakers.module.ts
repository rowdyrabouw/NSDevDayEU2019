import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersComponent } from "./speakers.component";

import { MenuModule } from "./../menu/menu.module";

@NgModule({
  imports: [NativeScriptCommonModule, SpeakersRoutingModule, MenuModule],
  declarations: [SpeakersComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SpeakersModule {}
