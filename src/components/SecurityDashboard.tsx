import React, { useState } from 'react';
import { FaShieldAlt, FaFirewall, FaSearch, FaGlobe, FaDesktop, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import SecurityCard from './SecurityCard';
import SecurityChart from './SecurityChart';

const SecurityDashboard: React.FC = () => {
  const [securityData] = useState({
    antivirus: {
      status: 'Protected',
      threats: 0,
      lastScan: '2023-10-20 14:30',
      updates: 'Up to date'
    },
    firewall: {
      status: 'Active',
      blockedConnections: 152,
      activeRules: 45,
      lastUpdate: '2023-10-20'
    },
    ids: {
      status: 'Monitoring',
      alerts: 3,
      falsePositives: 1,
      activeRules: 128
    },
    waf: {
      status: 'Active',
      blockedRequests: 87,
      suspiciousIPs: 12,
      ssl: 'Valid'
    },
    edr: {
      status: 'Running',
      endpoints: 25,
      incidents: 2,
      quarantined: 1
    },
    networkAnalysis: {
      status: 'Analyzing',
      bandwidth: '2.5 GB/s',
      anomalies: 1,
      protocols: 8
    },
    siem: {
      status: 'Collecting',
      events: 15243,
      correlations: 5,
      retention: '30 days'
    }
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SecurityCard
          title="Antivirus"
          icon={<FaShieldAlt />}
          status={securityData.antivirus.status}
          details={[
            `Threats: ${securityData.antivirus.threats}`,
            `Last Scan: ${securityData.antivirus.lastScan}`,
            `Updates: ${securityData.antivirus.updates}`
          ]}
        />
        <SecurityCard
          title="Firewall"
          icon={<FaFirewall />}
          status={securityData.firewall.status}
          details={[
            `Blocked: ${securityData.firewall.blockedConnections}`,
            `Active Rules: ${securityData.firewall.activeRules}`,
            `Updated: ${securityData.firewall.lastUpdate}`
          ]}
        />
        <SecurityCard
          title="IDS/IPS"
          icon={<FaSearch />}
          status={securityData.ids.status}
          details={[
            `Alerts: ${securityData.ids.alerts}`,
            `False Positives: ${securityData.ids.falsePositives}`,
            `Rules: ${securityData.ids.activeRules}`
          ]}
        />
        <SecurityCard
          title="WAF"
          icon={<FaGlobe />}
          status={securityData.waf.status}
          details={[
            `Blocked: ${securityData.waf.blockedRequests}`,
            `Suspicious IPs: ${securityData.waf.suspiciousIPs}`,
            `SSL: ${securityData.waf.ssl}`
          ]}
        />
        <SecurityCard
          title="EDR"
          icon={<FaDesktop />}
          status={securityData.edr.status}
          details={[
            `Endpoints: ${securityData.edr.endpoints}`,
            `Incidents: ${securityData.edr.incidents}`,
            `Quarantined: ${securityData.edr.quarantined}`
          ]}
        />
        <SecurityCard
          title="Network Analysis"
          icon={<FaNetworkWired />}
          status={securityData.networkAnalysis.status}
          details={[
            `Bandwidth: ${securityData.networkAnalysis.bandwidth}`,
            `Anomalies: ${securityData.networkAnalysis.anomalies}`,
            `Protocols: ${securityData.networkAnalysis.protocols}`
          ]}
        />
        <SecurityCard
          title="SIEM"
          icon={<FaDatabase />}
          status={securityData.siem.status}
          details={[
            `Events: ${securityData.siem.events}`,
            `Correlations: ${securityData.siem.correlations}`,
            `Retention: ${securityData.siem.retention}`
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SecurityChart />
      </div>
    </div>
  );
};

export default SecurityDashboard;