/*
Array of chunck data to be shown in the carousel per showing. This data has to be shown in rows: numberOfCardsPerRow.
i.e: if cards contains 6 items and numberOfCardsPerRow:2 then
this data has to be shown in 2 rows of 3 in each row.
 */
export class CarouselCardsPerShowing {
    constructor(public cards: Array<any>, public numberOfCardsPerRow: number) {}
}
