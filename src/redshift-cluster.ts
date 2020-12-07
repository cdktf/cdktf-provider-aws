// https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
  readonly allowVersionUpgrade?: boolean;
  readonly automatedSnapshotRetentionPeriod?: number;
  readonly availabilityZone?: string;
  readonly bucketName?: string;
  readonly clusterIdentifier: string;
  readonly clusterParameterGroupName?: string;
  readonly clusterPublicKey?: string;
  readonly clusterRevisionNumber?: string;
  readonly clusterSecurityGroups?: string[];
  readonly clusterSubnetGroupName?: string;
  readonly clusterType?: string;
  readonly clusterVersion?: string;
  readonly databaseName?: string;
  readonly elasticIp?: string;
  readonly enableLogging?: boolean;
  readonly encrypted?: boolean;
  readonly endpoint?: string;
  readonly enhancedVpcRouting?: boolean;
  readonly finalSnapshotIdentifier?: string;
  readonly iamRoles?: string[];
  readonly kmsKeyId?: string;
  readonly masterPassword?: string;
  readonly masterUsername?: string;
  readonly nodeType: string;
  readonly numberOfNodes?: number;
  readonly ownerAccount?: string;
  readonly port?: number;
  readonly preferredMaintenanceWindow?: string;
  readonly publiclyAccessible?: boolean;
  readonly s3KeyPrefix?: string;
  readonly skipFinalSnapshot?: boolean;
  readonly snapshotClusterIdentifier?: string;
  readonly snapshotIdentifier?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** logging block */
  readonly logging?: RedshiftClusterLogging[];
  /** snapshot_copy block */
  readonly snapshotCopy?: RedshiftClusterSnapshotCopy[];
  /** timeouts block */
  readonly timeouts?: RedshiftClusterTimeouts;
}
export interface RedshiftClusterLogging {
  readonly bucketName?: string;
  readonly enable: boolean;
  readonly s3KeyPrefix?: string;
}

function redshiftClusterLoggingToTerraform(struct?: RedshiftClusterLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    enable: cdktf.booleanToTerraform(struct!.enable),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export interface RedshiftClusterSnapshotCopy {
  readonly destinationRegion: string;
  readonly grantName?: string;
  readonly retentionPeriod?: number;
}

function redshiftClusterSnapshotCopyToTerraform(struct?: RedshiftClusterSnapshotCopy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    grant_name: cdktf.stringToTerraform(struct!.grantName),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
  }
}

export interface RedshiftClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function redshiftClusterTimeoutsToTerraform(struct?: RedshiftClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RedshiftCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowVersionUpgrade = config.allowVersionUpgrade;
    this._automatedSnapshotRetentionPeriod = config.automatedSnapshotRetentionPeriod;
    this._availabilityZone = config.availabilityZone;
    this._bucketName = config.bucketName;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterParameterGroupName = config.clusterParameterGroupName;
    this._clusterPublicKey = config.clusterPublicKey;
    this._clusterRevisionNumber = config.clusterRevisionNumber;
    this._clusterSecurityGroups = config.clusterSecurityGroups;
    this._clusterSubnetGroupName = config.clusterSubnetGroupName;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._databaseName = config.databaseName;
    this._elasticIp = config.elasticIp;
    this._enableLogging = config.enableLogging;
    this._encrypted = config.encrypted;
    this._endpoint = config.endpoint;
    this._enhancedVpcRouting = config.enhancedVpcRouting;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._iamRoles = config.iamRoles;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._nodeType = config.nodeType;
    this._numberOfNodes = config.numberOfNodes;
    this._ownerAccount = config.ownerAccount;
    this._port = config.port;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._logging = config.logging;
    this._snapshotCopy = config.snapshotCopy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_version_upgrade - computed: false, optional: true, required: false
  private _allowVersionUpgrade?: boolean;
  public get allowVersionUpgrade() {
    return this.getBooleanAttribute('allow_version_upgrade');
  }
  public set allowVersionUpgrade(value: boolean ) {
    this._allowVersionUpgrade = value;
  }
  public resetAllowVersionUpgrade() {
    this._allowVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVersionUpgradeInput() {
    return this._allowVersionUpgrade
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automated_snapshot_retention_period - computed: false, optional: true, required: false
  private _automatedSnapshotRetentionPeriod?: number;
  public get automatedSnapshotRetentionPeriod() {
    return this.getNumberAttribute('automated_snapshot_retention_period');
  }
  public set automatedSnapshotRetentionPeriod(value: number ) {
    this._automatedSnapshotRetentionPeriod = value;
  }
  public resetAutomatedSnapshotRetentionPeriod() {
    this._automatedSnapshotRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotRetentionPeriodInput() {
    return this._automatedSnapshotRetentionPeriod
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // cluster_parameter_group_name - computed: true, optional: true, required: false
  private _clusterParameterGroupName?: string;
  public get clusterParameterGroupName() {
    return this.getStringAttribute('cluster_parameter_group_name');
  }
  public set clusterParameterGroupName(value: string) {
    this._clusterParameterGroupName = value;
  }
  public resetClusterParameterGroupName() {
    this._clusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterParameterGroupNameInput() {
    return this._clusterParameterGroupName
  }

  // cluster_public_key - computed: true, optional: true, required: false
  private _clusterPublicKey?: string;
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }
  public set clusterPublicKey(value: string) {
    this._clusterPublicKey = value;
  }
  public resetClusterPublicKey() {
    this._clusterPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPublicKeyInput() {
    return this._clusterPublicKey
  }

  // cluster_revision_number - computed: true, optional: true, required: false
  private _clusterRevisionNumber?: string;
  public get clusterRevisionNumber() {
    return this.getStringAttribute('cluster_revision_number');
  }
  public set clusterRevisionNumber(value: string) {
    this._clusterRevisionNumber = value;
  }
  public resetClusterRevisionNumber() {
    this._clusterRevisionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRevisionNumberInput() {
    return this._clusterRevisionNumber
  }

  // cluster_security_groups - computed: true, optional: true, required: false
  private _clusterSecurityGroups?: string[];
  public get clusterSecurityGroups() {
    return this.getListAttribute('cluster_security_groups');
  }
  public set clusterSecurityGroups(value: string[]) {
    this._clusterSecurityGroups = value;
  }
  public resetClusterSecurityGroups() {
    this._clusterSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecurityGroupsInput() {
    return this._clusterSecurityGroups
  }

  // cluster_subnet_group_name - computed: true, optional: true, required: false
  private _clusterSubnetGroupName?: string;
  public get clusterSubnetGroupName() {
    return this.getStringAttribute('cluster_subnet_group_name');
  }
  public set clusterSubnetGroupName(value: string) {
    this._clusterSubnetGroupName = value;
  }
  public resetClusterSubnetGroupName() {
    this._clusterSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSubnetGroupNameInput() {
    return this._clusterSubnetGroupName
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string;
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string;
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string ) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string;
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string ) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean ) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string;
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // enhanced_vpc_routing - computed: true, optional: true, required: false
  private _enhancedVpcRouting?: boolean;
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
  }
  public set enhancedVpcRouting(value: boolean) {
    this._enhancedVpcRouting = value;
  }
  public resetEnhancedVpcRouting() {
    this._enhancedVpcRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedVpcRoutingInput() {
    return this._enhancedVpcRouting
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string;
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string ) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier
  }

  // iam_roles - computed: true, optional: true, required: false
  private _iamRoles?: string[];
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
  }
  public set iamRoles(value: string[]) {
    this._iamRoles = value;
  }
  public resetIamRoles() {
    this._iamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRolesInput() {
    return this._iamRoles
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string;
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string ) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword
  }

  // master_username - computed: false, optional: true, required: false
  private _masterUsername?: string;
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string ) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType: string;
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number;
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number ) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes
  }

  // owner_account - computed: false, optional: true, required: false
  private _ownerAccount?: string;
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }
  public set ownerAccount(value: string ) {
    this._ownerAccount = value;
  }
  public resetOwnerAccount() {
    this._ownerAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountInput() {
    return this._ownerAccount
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean ) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // s3_key_prefix - computed: true, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean;
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean ) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot
  }

  // snapshot_cluster_identifier - computed: false, optional: true, required: false
  private _snapshotClusterIdentifier?: string;
  public get snapshotClusterIdentifier() {
    return this.getStringAttribute('snapshot_cluster_identifier');
  }
  public set snapshotClusterIdentifier(value: string ) {
    this._snapshotClusterIdentifier = value;
  }
  public resetSnapshotClusterIdentifier() {
    this._snapshotClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotClusterIdentifierInput() {
    return this._snapshotClusterIdentifier
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string ) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier
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

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: RedshiftClusterLogging[];
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: RedshiftClusterLogging[] ) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // snapshot_copy - computed: false, optional: true, required: false
  private _snapshotCopy?: RedshiftClusterSnapshotCopy[];
  public get snapshotCopy() {
    return this.interpolationForAttribute('snapshot_copy') as any;
  }
  public set snapshotCopy(value: RedshiftClusterSnapshotCopy[] ) {
    this._snapshotCopy = value;
  }
  public resetSnapshotCopy() {
    this._snapshotCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCopyInput() {
    return this._snapshotCopy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedshiftClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedshiftClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_version_upgrade: cdktf.booleanToTerraform(this._allowVersionUpgrade),
      automated_snapshot_retention_period: cdktf.numberToTerraform(this._automatedSnapshotRetentionPeriod),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_parameter_group_name: cdktf.stringToTerraform(this._clusterParameterGroupName),
      cluster_public_key: cdktf.stringToTerraform(this._clusterPublicKey),
      cluster_revision_number: cdktf.stringToTerraform(this._clusterRevisionNumber),
      cluster_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterSecurityGroups),
      cluster_subnet_group_name: cdktf.stringToTerraform(this._clusterSubnetGroupName),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      database_name: cdktf.stringToTerraform(this._databaseName),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      enhanced_vpc_routing: cdktf.booleanToTerraform(this._enhancedVpcRouting),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      node_type: cdktf.stringToTerraform(this._nodeType),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      owner_account: cdktf.stringToTerraform(this._ownerAccount),
      port: cdktf.numberToTerraform(this._port),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_cluster_identifier: cdktf.stringToTerraform(this._snapshotClusterIdentifier),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      logging: cdktf.listMapper(redshiftClusterLoggingToTerraform)(this._logging),
      snapshot_copy: cdktf.listMapper(redshiftClusterSnapshotCopyToTerraform)(this._snapshotCopy),
      timeouts: redshiftClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
