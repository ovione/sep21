type statusType = 'FUTURE' | 'OPEN' | 'UPCOMING';

export class ObligationData {
    constructor(
        public name: string,        // card name
        public type: string,        // type
        public obligationId: string,        // type
        public deadline: string,    // date below name
        public deadlineId: string,    // salted deadlineId to send to EPLATFORM
        public status: statusType,      // badge text
        public campaign: boolean,   // decides the icon before name, open if campaign then is parent else child
    ) {}
}
