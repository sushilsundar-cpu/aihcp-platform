export type Environment='DEV'|'STAGING'|'PROD';
export type Role='MEMBER'|'ADMIN';
export type Plan='EXPLORER'|'MEMBER'|'PLUS'|'FOUNDING_PLUS';
export type Intent='SERIOUS_RELATIONSHIP'|'FRIENDSHIP'|'SHARED_INTERESTS_ACTIVITIES'|'MENTORSHIP'|'PROFESSIONAL_CONNECTION';
export type IntentMaturity='AVAILABLE_FOR_INTEREST'|'SEEDING'|'BETA'|'ACTIVE';
export interface AuditEvent{actorId:string;action:string;reason:string;before?:unknown;after?:unknown;at:string}