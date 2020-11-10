// https://www.terraform.io/docs/providers/aws/r/msk_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MskClusterConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly enhancedMonitoring?: string;
  readonly kafkaVersion: string;
  readonly numberOfBrokerNodes: number;
  readonly tags?: { [key: string]: string };
  /** broker_node_group_info block */
  readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
  /** client_authentication block */
  readonly clientAuthentication?: MskClusterClientAuthentication[];
  /** configuration_info block */
  readonly configurationInfo?: MskClusterConfigurationInfo[];
  /** encryption_info block */
  readonly encryptionInfo?: MskClusterEncryptionInfo[];
  /** logging_info block */
  readonly loggingInfo?: MskClusterLoggingInfo[];
  /** open_monitoring block */
  readonly openMonitoring?: MskClusterOpenMonitoring[];
}
export interface MskClusterBrokerNodeGroupInfo {
  readonly azDistribution?: string;
  readonly clientSubnets: string[];
  readonly ebsVolumeSize: number;
  readonly instanceType: string;
  readonly securityGroups: string[];
}
export interface MskClusterClientAuthenticationTls {
  readonly certificateAuthorityArns?: string[];
}
export interface MskClusterClientAuthentication {
  /** tls block */
  readonly tls?: MskClusterClientAuthenticationTls[];
}
export interface MskClusterConfigurationInfo {
  readonly arn: string;
  readonly revision: number;
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
  readonly clientBroker?: string;
  readonly inCluster?: boolean;
}
export interface MskClusterEncryptionInfo {
  readonly encryptionAtRestKmsKeyArn?: string;
  /** encryption_in_transit block */
  readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit[];
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
  readonly enabled: boolean;
  readonly logGroup?: string;
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
  readonly deliveryStream?: string;
  readonly enabled: boolean;
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
  readonly bucket?: string;
  readonly enabled: boolean;
  readonly prefix?: string;
}
export interface MskClusterLoggingInfoBrokerLogs {
  /** cloudwatch_logs block */
  readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs[];
  /** firehose block */
  readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose[];
  /** s3 block */
  readonly s3?: MskClusterLoggingInfoBrokerLogsS3[];
}
export interface MskClusterLoggingInfo {
  /** broker_logs block */
  readonly brokerLogs: MskClusterLoggingInfoBrokerLogs[];
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
  readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
  readonly enabledInBroker: boolean;
}
export interface MskClusterOpenMonitoringPrometheus {
  /** jmx_exporter block */
  readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter[];
  /** node_exporter block */
  readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter[];
}
export interface MskClusterOpenMonitoring {
  /** prometheus block */
  readonly prometheus: MskClusterOpenMonitoringPrometheus[];
}

// Resource

export class MskCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._enhancedMonitoring = config.enhancedMonitoring;
    this._kafkaVersion = config.kafkaVersion;
    this._numberOfBrokerNodes = config.numberOfBrokerNodes;
    this._tags = config.tags;
    this._brokerNodeGroupInfo = config.brokerNodeGroupInfo;
    this._clientAuthentication = config.clientAuthentication;
    this._configurationInfo = config.configurationInfo;
    this._encryptionInfo = config.encryptionInfo;
    this._loggingInfo = config.loggingInfo;
    this._openMonitoring = config.openMonitoring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bootstrap_brokers - computed: true, optional: false, required: false
  public get bootstrapBrokers() {
    return this.getStringAttribute('bootstrap_brokers');
  }

  // bootstrap_brokers_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersTls() {
    return this.getStringAttribute('bootstrap_brokers_tls');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string;
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string ) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion: string;
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion
  }

  // number_of_broker_nodes - computed: false, optional: false, required: true
  private _numberOfBrokerNodes: number;
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }
  public set numberOfBrokerNodes(value: number) {
    this._numberOfBrokerNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBrokerNodesInput() {
    return this._numberOfBrokerNodes
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zookeeper_connect_string - computed: true, optional: false, required: false
  public get zookeeperConnectString() {
    return this.getStringAttribute('zookeeper_connect_string');
  }

  // broker_node_group_info - computed: false, optional: false, required: true
  private _brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
  public get brokerNodeGroupInfo() {
    return this.interpolationForAttribute('broker_node_group_info') as any;
  }
  public set brokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo[]) {
    this._brokerNodeGroupInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeGroupInfoInput() {
    return this._brokerNodeGroupInfo
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication?: MskClusterClientAuthentication[];
  public get clientAuthentication() {
    return this.interpolationForAttribute('client_authentication') as any;
  }
  public set clientAuthentication(value: MskClusterClientAuthentication[] ) {
    this._clientAuthentication = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication
  }

  // configuration_info - computed: false, optional: true, required: false
  private _configurationInfo?: MskClusterConfigurationInfo[];
  public get configurationInfo() {
    return this.interpolationForAttribute('configuration_info') as any;
  }
  public set configurationInfo(value: MskClusterConfigurationInfo[] ) {
    this._configurationInfo = value;
  }
  public resetConfigurationInfo() {
    this._configurationInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInfoInput() {
    return this._configurationInfo
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo?: MskClusterEncryptionInfo[];
  public get encryptionInfo() {
    return this.interpolationForAttribute('encryption_info') as any;
  }
  public set encryptionInfo(value: MskClusterEncryptionInfo[] ) {
    this._encryptionInfo = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo?: MskClusterLoggingInfo[];
  public get loggingInfo() {
    return this.interpolationForAttribute('logging_info') as any;
  }
  public set loggingInfo(value: MskClusterLoggingInfo[] ) {
    this._loggingInfo = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo
  }

  // open_monitoring - computed: false, optional: true, required: false
  private _openMonitoring?: MskClusterOpenMonitoring[];
  public get openMonitoring() {
    return this.interpolationForAttribute('open_monitoring') as any;
  }
  public set openMonitoring(value: MskClusterOpenMonitoring[] ) {
    this._openMonitoring = value;
  }
  public resetOpenMonitoring() {
    this._openMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMonitoringInput() {
    return this._openMonitoring
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: this._clusterName,
      enhanced_monitoring: this._enhancedMonitoring,
      kafka_version: this._kafkaVersion,
      number_of_broker_nodes: this._numberOfBrokerNodes,
      tags: this._tags,
      broker_node_group_info: this._brokerNodeGroupInfo,
      client_authentication: this._clientAuthentication,
      configuration_info: this._configurationInfo,
      encryption_info: this._encryptionInfo,
      logging_info: this._loggingInfo,
      open_monitoring: this._openMonitoring,
    };
  }
}
