// https://www.terraform.io/docs/providers/aws/r/msk_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
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

function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    az_distribution: cdktf.stringToTerraform(struct!.azDistribution),
    client_subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientSubnets),
    ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
  }
}

export interface MskClusterClientAuthenticationTls {
  readonly certificateAuthorityArns?: string[];
}

function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface MskClusterClientAuthentication {
  /** tls block */
  readonly tls?: MskClusterClientAuthenticationTls[];
}

function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(mskClusterClientAuthenticationTlsToTerraform)(struct!.tls),
  }
}

export interface MskClusterConfigurationInfo {
  readonly arn: string;
  readonly revision: number;
}

function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export interface MskClusterEncryptionInfoEncryptionInTransit {
  readonly clientBroker?: string;
  readonly inCluster?: boolean;
}

function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_broker: cdktf.stringToTerraform(struct!.clientBroker),
    in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
  }
}

export interface MskClusterEncryptionInfo {
  readonly encryptionAtRestKmsKeyArn?: string;
  /** encryption_in_transit block */
  readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit[];
}

function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_at_rest_kms_key_arn: cdktf.stringToTerraform(struct!.encryptionAtRestKmsKeyArn),
    encryption_in_transit: cdktf.listMapper(mskClusterEncryptionInfoEncryptionInTransitToTerraform)(struct!.encryptionInTransit),
  }
}

export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
  readonly enabled: boolean;
  readonly logGroup?: string;
}

function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}

export interface MskClusterLoggingInfoBrokerLogsFirehose {
  readonly deliveryStream?: string;
  readonly enabled: boolean;
}

function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface MskClusterLoggingInfoBrokerLogsS3 {
  readonly bucket?: string;
  readonly enabled: boolean;
  readonly prefix?: string;
}

function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface MskClusterLoggingInfoBrokerLogs {
  /** cloudwatch_logs block */
  readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs[];
  /** firehose block */
  readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose[];
  /** s3 block */
  readonly s3?: MskClusterLoggingInfoBrokerLogsS3[];
}

function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform)(struct!.cloudwatchLogs),
    firehose: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsFirehoseToTerraform)(struct!.firehose),
    s3: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsS3ToTerraform)(struct!.s3),
  }
}

export interface MskClusterLoggingInfo {
  /** broker_logs block */
  readonly brokerLogs: MskClusterLoggingInfoBrokerLogs[];
}

function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    broker_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsToTerraform)(struct!.brokerLogs),
  }
}

export interface MskClusterOpenMonitoringPrometheusJmxExporter {
  readonly enabledInBroker: boolean;
}

function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}

export interface MskClusterOpenMonitoringPrometheusNodeExporter {
  readonly enabledInBroker: boolean;
}

function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}

export interface MskClusterOpenMonitoringPrometheus {
  /** jmx_exporter block */
  readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter[];
  /** node_exporter block */
  readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter[];
}

function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    jmx_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusJmxExporterToTerraform)(struct!.jmxExporter),
    node_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusNodeExporterToTerraform)(struct!.nodeExporter),
  }
}

export interface MskClusterOpenMonitoring {
  /** prometheus block */
  readonly prometheus: MskClusterOpenMonitoringPrometheus[];
}

function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoring): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prometheus: cdktf.listMapper(mskClusterOpenMonitoringPrometheusToTerraform)(struct!.prometheus),
  }
}


// Resource

export class MskCluster extends cdktf.TerraformResource {

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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      enhanced_monitoring: cdktf.stringToTerraform(this._enhancedMonitoring),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      number_of_broker_nodes: cdktf.numberToTerraform(this._numberOfBrokerNodes),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      broker_node_group_info: cdktf.listMapper(mskClusterBrokerNodeGroupInfoToTerraform)(this._brokerNodeGroupInfo),
      client_authentication: cdktf.listMapper(mskClusterClientAuthenticationToTerraform)(this._clientAuthentication),
      configuration_info: cdktf.listMapper(mskClusterConfigurationInfoToTerraform)(this._configurationInfo),
      encryption_info: cdktf.listMapper(mskClusterEncryptionInfoToTerraform)(this._encryptionInfo),
      logging_info: cdktf.listMapper(mskClusterLoggingInfoToTerraform)(this._loggingInfo),
      open_monitoring: cdktf.listMapper(mskClusterOpenMonitoringToTerraform)(this._openMonitoring),
    };
  }
}
