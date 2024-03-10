export type TTask={

    name: string,
    id : number,
    isDone: boolean,
}


export type TTodoList={
name : string,
task : TTask[],

}