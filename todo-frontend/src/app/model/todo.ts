/**
 * Todo class.
 */
export class Todo {

    constructor( 
        public id: number, public description: string, 
        public isCompleted: boolean, public targetDate: Date
    ) {}
}
