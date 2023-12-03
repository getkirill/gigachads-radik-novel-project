class Processor<I, O> {
    constructor(public process: (i: I) => O) {}

    use<NO>(processor: Processor<O, NO>): Processor<I, NO> {
        return new Processor(i => processor.process(this.process(i)))
    }
}

function processor<I, O>(process: (i: I) => O) {
    return new Processor<I, O>(process)
}
// const stringifier = new Processor<any, string>(i => ""+i)
// const funnifier = new Processor<string, string>(i => i+" haha funny")
// stringifier.use(funnifier).process(123)