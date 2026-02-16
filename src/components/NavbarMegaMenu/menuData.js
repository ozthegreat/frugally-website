export const productMenuData = {
  columns: [
    {
      id: 'guard',
      title: 'Guard',
      subtitle: 'Infrastructure Governance & Cost Attribution',
      items: [
        { label: 'Project Governance', to: '/product/guard#governance' },
        { label: 'Budget Management', to: '/product/guard#budgets' },
        { label: 'Policy & Compliance', to: '/product/guard#compliance' },
        { label: 'Cost Attribution', to: '/product/guard#attribution' },
        { label: 'FinOps Maturity', to: '/product/guard#maturity' },
      ],
    },
    {
      id: 'automate',
      title: 'Automate',
      subtitle: 'Cost Scheduling & Resource Management',
      items: [
        { label: 'Resource Scheduling', to: '/product/automate#scheduling' },
        { label: 'Ad-hoc Actions', to: '/product/automate#adhoc' },
        { label: 'Execution Analytics', to: '/product/automate#analytics' },
        { label: 'Savings Tracking', to: '/product/automate#savings' },
        { label: 'Target Onboarding', to: '/product/automate#onboarding' },
      ],
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      subtitle: 'AI-Powered Cost Analytics',
      items: [
        { label: 'AI Insights', to: '/product/intelligence#ai' },
        { label: 'Cost Explorer', to: '/product/intelligence#explorer' },
        { label: 'Commitment Utilisation', to: '/product/intelligence#commitments' },
        { label: 'Anomaly Detection', to: '/product/intelligence#anomalies' },
        { label: 'Baseline Monitoring', to: '/product/intelligence#monitoring' },
      ],
    },
  ],
  footer: [
    { label: 'SSO & SCIM', to: '/product/platform#sso-scim', badge: 'Enterprise' },
    { label: 'Audit Logs', to: '/product/platform#audit-logs' },
    { label: 'GitHub & IaC', to: '/product/platform#github-iac' },
    { label: 'Groups & RBAC', to: '/product/platform#groups-rbac' },
    { label: 'Notifications', to: '/product/platform#notifications' },
  ],
};
