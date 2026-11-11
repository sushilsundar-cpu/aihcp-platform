import fs from 'fs';
const must=['apps/api/src/auth.ts','packages/entitlements/src/index.ts','packages/config/src/index.ts','packages/audit/src/index.ts','supabase/migrations/0001_build0_foundation.sql','.env.example'];
for(const f of must){if(!fs.existsSync(new URL(f,import.meta.url))) throw new Error('missing '+f)}
const auth=fs.readFileSync(new URL('apps/api/src/auth.ts',import.meta.url),'utf8');if(!auth.includes("mfa!==true")||!auth.includes('403'))throw new Error('admin MFA/RBAC negative path missing');
const ent=fs.readFileSync(new URL('packages/entitlements/src/index.ts',import.meta.url),'utf8');if(!ent.includes("FOUNDING_PLUS")||!ent.includes("MUTUAL_MESSAGING"))throw new Error('entitlement invariants missing');
const mig=fs.readFileSync(new URL('supabase/migrations/0001_build0_foundation.sql',import.meta.url),'utf8');if(!mig.includes('audit_event'))throw new Error('audit migration missing');
console.log('BUILD0_LOCAL_CHECKS_PASS',must.length);