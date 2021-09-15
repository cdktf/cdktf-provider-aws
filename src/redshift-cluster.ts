// https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#allow_version_upgrade RedshiftCluster#allow_version_upgrade}
  */
  readonly allowVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}
  */
  readonly automatedSnapshotRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#availability_zone RedshiftCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_identifier RedshiftCluster#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}
  */
  readonly clusterParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_public_key RedshiftCluster#cluster_public_key}
  */
  readonly clusterPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_revision_number RedshiftCluster#cluster_revision_number}
  */
  readonly clusterRevisionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_security_groups RedshiftCluster#cluster_security_groups}
  */
  readonly clusterSecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}
  */
  readonly clusterSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_type RedshiftCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_version RedshiftCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#database_name RedshiftCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#elastic_ip RedshiftCluster#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#encrypted RedshiftCluster#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#endpoint RedshiftCluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}
  */
  readonly enhancedVpcRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#iam_roles RedshiftCluster#iam_roles}
  */
  readonly iamRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#kms_key_id RedshiftCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_password RedshiftCluster#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_username RedshiftCluster#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#node_type RedshiftCluster#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#number_of_nodes RedshiftCluster#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#owner_account RedshiftCluster#owner_account}
  */
  readonly ownerAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#port RedshiftCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#publicly_accessible RedshiftCluster#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#skip_final_snapshot RedshiftCluster#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}
  */
  readonly snapshotClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_identifier RedshiftCluster#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags RedshiftCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags_all RedshiftCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#logging RedshiftCluster#logging}
  */
  readonly logging?: RedshiftClusterLogging[];
  /**
  * snapshot_copy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_copy RedshiftCluster#snapshot_copy}
  */
  readonly snapshotCopy?: RedshiftClusterSnapshotCopy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#timeouts RedshiftCluster#timeouts}
  */
  readonly timeouts?: RedshiftClusterTimeouts;
}
export class RedshiftClusterClusterNodes extends cdktf.ComplexComputedList {

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
}
export interface RedshiftClusterLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#bucket_name RedshiftCluster#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enable RedshiftCluster#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#s3_key_prefix RedshiftCluster#s3_key_prefix}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#destination_region RedshiftCluster#destination_region}
  */
  readonly destinationRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#grant_name RedshiftCluster#grant_name}
  */
  readonly grantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#retention_period RedshiftCluster#retention_period}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#create RedshiftCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#delete RedshiftCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#update RedshiftCluster#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster}
*/
export class RedshiftCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftClusterConfig
  */
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
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._logging = config.logging;
    this._snapshotCopy = config.snapshotCopy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_version_upgrade - computed: false, optional: true, required: false
  private _allowVersionUpgrade?: boolean | cdktf.IResolvable;
  public get allowVersionUpgrade() {
    return this.getBooleanAttribute('allow_version_upgrade');
  }
  public set allowVersionUpgrade(value: boolean | cdktf.IResolvable ) {
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

  // cluster_nodes - computed: true, optional: false, required: false
  public clusterNodes(index: string) {
    return new RedshiftClusterClusterNodes(this, 'cluster_nodes', index);
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

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable ) {
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
  private _enhancedVpcRouting?: boolean | cdktf.IResolvable;
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
  }
  public set enhancedVpcRouting(value: boolean | cdktf.IResolvable) {
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
  private _publiclyAccessible?: boolean | cdktf.IResolvable;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable ) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable;
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_cluster_identifier: cdktf.stringToTerraform(this._snapshotClusterIdentifier),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      logging: cdktf.listMapper(redshiftClusterLoggingToTerraform)(this._logging),
      snapshot_copy: cdktf.listMapper(redshiftClusterSnapshotCopyToTerraform)(this._snapshotCopy),
      timeouts: redshiftClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
