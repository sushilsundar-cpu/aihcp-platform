export type Plan='EXPLORER'|'MEMBER'|'PLUS'|'FOUNDING_PLUS';
const bundles={EXPLORER:new Set(['SAFETY','MUTUAL_MESSAGING','INTRO_RESPOND']),MEMBER:new Set(['SAFETY','MUTUAL_MESSAGING','INTRO_RESPOND','ACTIVE_DISCOVERY']),PLUS:new Set(['SAFETY','MUTUAL_MESSAGING','INTRO_RESPOND','ACTIVE_DISCOVERY','PROACTIVE_INTELLIGENCE'])};
export function effectivePlan(p:Plan){return p==='FOUNDING_PLUS'?'PLUS':p}
export function hasCapability(p:Plan,c:string){return bundles[effectivePlan(p) as keyof typeof bundles].has(c)}