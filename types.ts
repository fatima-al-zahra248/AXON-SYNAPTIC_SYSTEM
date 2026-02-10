
export enum Severity {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export interface AttackVector {
  vectorName: string;
  riskExplanation: string;
  mitigationSteps: string[];
  severity: Severity;
}

export interface SecurityAnalysis {
  summary: string;
  attackerPerspective: string;
  vectors: AttackVector[];
}
