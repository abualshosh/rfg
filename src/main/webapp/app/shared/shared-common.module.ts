import { NgModule } from '@angular/core';

import { RfnclubSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RfnclubSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RfnclubSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RfnclubSharedCommonModule {}
