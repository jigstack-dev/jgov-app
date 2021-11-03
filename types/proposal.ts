export interface IProposal {
    number: number;
    title: string;
    description: string;
    timestamp: number;
    percentage: {
        yes: number;
        no: number;
    };
}
