import {Component, inject} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {
    LayoutCoordinatorLeftTreeCenterCarouselComponent
} from "../../core/layouts/coordinators/layout-coordinator-left-tree-center-carousel/layout-coordinator-left-tree-center-carousel.component";
import {
    LayoutContentLeftTreeEuiTreeComponent
} from "../../core/layouts/content/layout-content-left-tree-eui-tree/layout-content-left-tree-eui-tree.component";
import {CarouselAsCardComponent} from "../../core/components/carousel/carousel-as-card/carousel-as-card.component";
import {ObligationDeadlineComponent} from "../obligations/carousel/obligation-deadline/obligation-deadline.component";
import {MainNoticeComponent} from "./main-notice/main-notice.component";
import {ConfigCarouselInput} from "../../core/components/carousel/model/config-carousel-input.model";
import {ConfigTreeInput} from "../../core/layouts/content/layout-content-left-tree/model/config-tree-input.model";
import {
    ConfigLeftColumn
} from "../../core/layouts/templates/layout-template-left-center/model/config-left-column.model";
import {LayoutConfiguratorForHomeService} from "./layout/configuration/layout-configurator-for-home.service";

@Component({
    templateUrl: './home.component.html',
    imports: [
        TranslateModule,
        LayoutCoordinatorLeftTreeCenterCarouselComponent,
        ///LayoutCoordinatorLeftTreeCenterAnyComponent,
        LayoutContentLeftTreeEuiTreeComponent,
        CarouselAsCardComponent,
        ObligationDeadlineComponent,
        MainNoticeComponent,
    ],
})
export class HomeComponent {
    configLeftColumnHome: ConfigLeftColumn;
    configLeftContentHome: ConfigTreeInput;
    configRightContentHome: ConfigCarouselInput;
    private layoutConfiguratorForHomeService = inject(LayoutConfiguratorForHomeService);

    ngOnInit() {
        this.configureNewLayout();
    }

    private configureNewLayout() {
        this.configLeftColumnHome = this.layoutConfiguratorForHomeService.getConfigLeftColumn();
        this.configLeftContentHome = this.layoutConfiguratorForHomeService.getConfigTreeInput();
        this.configRightContentHome = this.layoutConfiguratorForHomeService.getConfigCarouselInput();
    }
}
