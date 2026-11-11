export type ConfigClass='FOUNDER_SAFE'|'PROTECTED';
export interface ConfigRecord<T=unknown>{key:string;value:T;class:ConfigClass;version:number}
export function updateConfig<T>(record:ConfigRecord<T>,value:T,actorRole:'ADMIN',reason:string){if(!reason)throw new Error('reason required');return {...record,value,version:record.version+1}}