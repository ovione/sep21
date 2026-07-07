import {Injectable} from '@angular/core';
import {
    ConfigLeftColumn
} from "../../../../core/layouts/templates/layout-template-left-center/model/config-left-column.model";
import {LayoutDesign} from "../../../../core/layouts/model/design/layout-design.model";
import {ConfigCarouselInput} from "../../../../core/components/carousel/model/config-carousel-input.model";
import {CarouselDesign} from "../../../../core/components/carousel/model/carousel-design.model";
import {CarouselDesignCards} from "../../../../core/components/carousel/model/carousel-design-cards.model";
import {LayoutDesignRGBA} from "../../../../core/layouts/model/layout-design-rgba.model";
import {ConfigTreeInput} from "../../../../core/layouts/content/layout-content-left-tree/model/config-tree-input.model";
import {
    ConfigTreeEuiTreeInput
} from "../../../../core/layouts/content/layout-content-left-tree-eui-tree/model/config-tree-eui-tree-input.model";
import {
    LeftTreeToEuiTreeConverter
} from "../../../../core/layouts/converters/left-tree-converters/left-tree-to-eui-tree-converter";

@Injectable({
  providedIn: 'root'
})
export class LayoutConfiguratorForHomeService {

    getConfigLeftColumn(): ConfigLeftColumn {
        return new ConfigLeftColumn({
            columnLabel: 'Report Navigation',
            layoutDesign: new LayoutDesign({
                layoutDesignRGBA: new LayoutDesignRGBA({
                    red: 255,
                    green: 255,
                    blue: 255,
                    opacity: 1
                }),
            })
        });
    }

    getConfigTreeInput(): ConfigTreeInput {
        return new ConfigTreeInput({
            url: 'restapi/protected/ePlatform/reportENER/obligations/hierarchy',
            configTreeImplementation: new ConfigTreeEuiTreeInput({
                searchPlaceHolder: 'Search from tree list items'
            }),
            converter: new LeftTreeToEuiTreeConverter()
        });
    }

    getConfigCarouselInput(): ConfigCarouselInput {
        return new ConfigCarouselInput({
            url: 'restapi/protected/ePlatform/reportENER/obligations/deadline',
            paginationMode: true,
            carouselDesign: new CarouselDesign({
                backgroundRGBAPaginator: new LayoutDesignRGBA({
                    red: 255,
                    green: 255,
                    blue: 255,
                    opacity: 1,
                }),
                backgroundRGBA: new LayoutDesignRGBA({
                    red: 168,
                    green: 203,
                    blue: 228,
                    opacity: 0.5,
                }),
                cardsDesign: new CarouselDesignCards({
                    titleTextColor: '#303030',
                    titleFontWeight: 700
                })
            })
        });
    }
}
