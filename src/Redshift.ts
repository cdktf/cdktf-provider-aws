// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Redshift
*/
export namespace Redshift {
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
    readonly logging?: RedshiftClusterLogging;
    /**
    * snapshot_copy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_copy RedshiftCluster#snapshot_copy}
    */
    readonly snapshotCopy?: RedshiftClusterSnapshotCopy;
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

  function redshiftClusterLoggingToTerraform(struct?: RedshiftClusterLoggingOutputReference | RedshiftClusterLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      enable: cdktf.booleanToTerraform(struct!.enable),
      s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    }
  }

  export class RedshiftClusterLoggingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string | undefined; 
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string | undefined) {
      this._bucketName = value;
    }
    public resetBucketName() {
      this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
      return this._bucketName
    }

    // enable - computed: false, optional: false, required: true
    private _enable?: boolean | cdktf.IResolvable; 
    public get enable() {
      return this.getBooleanAttribute('enable') as any;
    }
    public set enable(value: boolean | cdktf.IResolvable) {
      this._enable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
      return this._enable
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string | undefined; 
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string | undefined) {
      this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
      this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
      return this._s3KeyPrefix
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

  function redshiftClusterSnapshotCopyToTerraform(struct?: RedshiftClusterSnapshotCopyOutputReference | RedshiftClusterSnapshotCopy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
      grant_name: cdktf.stringToTerraform(struct!.grantName),
      retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
    }
  }

  export class RedshiftClusterSnapshotCopyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // destination_region - computed: false, optional: false, required: true
    private _destinationRegion?: string; 
    public get destinationRegion() {
      return this.getStringAttribute('destination_region');
    }
    public set destinationRegion(value: string) {
      this._destinationRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationRegionInput() {
      return this._destinationRegion
    }

    // grant_name - computed: false, optional: true, required: false
    private _grantName?: string | undefined; 
    public get grantName() {
      return this.getStringAttribute('grant_name');
    }
    public set grantName(value: string | undefined) {
      this._grantName = value;
    }
    public resetGrantName() {
      this._grantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantNameInput() {
      return this._grantName
    }

    // retention_period - computed: false, optional: true, required: false
    private _retentionPeriod?: number | undefined; 
    public get retentionPeriod() {
      return this.getNumberAttribute('retention_period');
    }
    public set retentionPeriod(value: number | undefined) {
      this._retentionPeriod = value;
    }
    public resetRetentionPeriod() {
      this._retentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
      return this._retentionPeriod
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

  function redshiftClusterTimeoutsToTerraform(struct?: RedshiftClusterTimeoutsOutputReference | RedshiftClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class RedshiftClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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
    private _allowVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get allowVersionUpgrade() {
      return this.getBooleanAttribute('allow_version_upgrade') as any;
    }
    public set allowVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
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
    private _automatedSnapshotRetentionPeriod?: number | undefined; 
    public get automatedSnapshotRetentionPeriod() {
      return this.getNumberAttribute('automated_snapshot_retention_period');
    }
    public set automatedSnapshotRetentionPeriod(value: number | undefined) {
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
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
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
    private _clusterIdentifier?: string; 
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
    private _clusterParameterGroupName?: string | undefined; 
    public get clusterParameterGroupName() {
      return this.getStringAttribute('cluster_parameter_group_name');
    }
    public set clusterParameterGroupName(value: string | undefined) {
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
    private _clusterPublicKey?: string | undefined; 
    public get clusterPublicKey() {
      return this.getStringAttribute('cluster_public_key');
    }
    public set clusterPublicKey(value: string | undefined) {
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
    private _clusterRevisionNumber?: string | undefined; 
    public get clusterRevisionNumber() {
      return this.getStringAttribute('cluster_revision_number');
    }
    public set clusterRevisionNumber(value: string | undefined) {
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
    private _clusterSecurityGroups?: string[] | undefined; 
    public get clusterSecurityGroups() {
      return this.getListAttribute('cluster_security_groups');
    }
    public set clusterSecurityGroups(value: string[] | undefined) {
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
    private _clusterSubnetGroupName?: string | undefined; 
    public get clusterSubnetGroupName() {
      return this.getStringAttribute('cluster_subnet_group_name');
    }
    public set clusterSubnetGroupName(value: string | undefined) {
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
    private _clusterType?: string | undefined; 
    public get clusterType() {
      return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string | undefined) {
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
    private _clusterVersion?: string | undefined; 
    public get clusterVersion() {
      return this.getStringAttribute('cluster_version');
    }
    public set clusterVersion(value: string | undefined) {
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
    private _databaseName?: string | undefined; 
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string | undefined) {
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
    private _elasticIp?: string | undefined; 
    public get elasticIp() {
      return this.getStringAttribute('elastic_ip');
    }
    public set elasticIp(value: string | undefined) {
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
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
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
    private _endpoint?: string | undefined; 
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string | undefined) {
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
    private _enhancedVpcRouting?: boolean | cdktf.IResolvable | undefined; 
    public get enhancedVpcRouting() {
      return this.getBooleanAttribute('enhanced_vpc_routing') as any;
    }
    public set enhancedVpcRouting(value: boolean | cdktf.IResolvable | undefined) {
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
    private _finalSnapshotIdentifier?: string | undefined; 
    public get finalSnapshotIdentifier() {
      return this.getStringAttribute('final_snapshot_identifier');
    }
    public set finalSnapshotIdentifier(value: string | undefined) {
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
    private _iamRoles?: string[] | undefined; 
    public get iamRoles() {
      return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[] | undefined) {
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
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
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
    private _masterPassword?: string | undefined; 
    public get masterPassword() {
      return this.getStringAttribute('master_password');
    }
    public set masterPassword(value: string | undefined) {
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
    private _masterUsername?: string | undefined; 
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string | undefined) {
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
    private _nodeType?: string; 
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
    private _numberOfNodes?: number | undefined; 
    public get numberOfNodes() {
      return this.getNumberAttribute('number_of_nodes');
    }
    public set numberOfNodes(value: number | undefined) {
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
    private _ownerAccount?: string | undefined; 
    public get ownerAccount() {
      return this.getStringAttribute('owner_account');
    }
    public set ownerAccount(value: string | undefined) {
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
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
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
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
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
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
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
    private _skipFinalSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get skipFinalSnapshot() {
      return this.getBooleanAttribute('skip_final_snapshot') as any;
    }
    public set skipFinalSnapshot(value: boolean | cdktf.IResolvable | undefined) {
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
    private _snapshotClusterIdentifier?: string | undefined; 
    public get snapshotClusterIdentifier() {
      return this.getStringAttribute('snapshot_cluster_identifier');
    }
    public set snapshotClusterIdentifier(value: string | undefined) {
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
    private _snapshotIdentifier?: string | undefined; 
    public get snapshotIdentifier() {
      return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
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
    private _logging?: RedshiftClusterLogging | undefined; 
    private __loggingOutput = new RedshiftClusterLoggingOutputReference(this as any, "logging", true);
    public get logging() {
      return this.__loggingOutput;
    }
    public putLogging(value: RedshiftClusterLogging | undefined) {
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
    private _snapshotCopy?: RedshiftClusterSnapshotCopy | undefined; 
    private __snapshotCopyOutput = new RedshiftClusterSnapshotCopyOutputReference(this as any, "snapshot_copy", true);
    public get snapshotCopy() {
      return this.__snapshotCopyOutput;
    }
    public putSnapshotCopy(value: RedshiftClusterSnapshotCopy | undefined) {
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
    private _timeouts?: RedshiftClusterTimeouts | undefined; 
    private __timeoutsOutput = new RedshiftClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RedshiftClusterTimeouts | undefined) {
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
        logging: redshiftClusterLoggingToTerraform(this._logging),
        snapshot_copy: redshiftClusterSnapshotCopyToTerraform(this._snapshotCopy),
        timeouts: redshiftClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RedshiftEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#enabled RedshiftEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#event_categories RedshiftEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#name RedshiftEventSubscription#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#severity RedshiftEventSubscription#severity}
    */
    readonly severity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#source_ids RedshiftEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#source_type RedshiftEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#tags RedshiftEventSubscription#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#tags_all RedshiftEventSubscription#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#timeouts RedshiftEventSubscription#timeouts}
    */
    readonly timeouts?: RedshiftEventSubscriptionTimeouts;
  }
  export interface RedshiftEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#create RedshiftEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#delete RedshiftEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html#update RedshiftEventSubscription#update}
    */
    readonly update?: string;
  }

  function redshiftEventSubscriptionTimeoutsToTerraform(struct?: RedshiftEventSubscriptionTimeoutsOutputReference | RedshiftEventSubscriptionTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class RedshiftEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html aws_redshift_event_subscription}
  */
  export class RedshiftEventSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_event_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html aws_redshift_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftEventSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftEventSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_event_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
      this._eventCategories = config.eventCategories;
      this._name = config.name;
      this._severity = config.severity;
      this._snsTopicArn = config.snsTopicArn;
      this._sourceIds = config.sourceIds;
      this._sourceType = config.sourceType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // customer_aws_id - computed: true, optional: false, required: false
    public get customerAwsId() {
      return this.getStringAttribute('customer_aws_id');
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // event_categories - computed: false, optional: true, required: false
    private _eventCategories?: string[] | undefined; 
    public get eventCategories() {
      return this.getListAttribute('event_categories');
    }
    public set eventCategories(value: string[] | undefined) {
      this._eventCategories = value;
    }
    public resetEventCategories() {
      this._eventCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventCategoriesInput() {
      return this._eventCategories
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // severity - computed: false, optional: true, required: false
    private _severity?: string | undefined; 
    public get severity() {
      return this.getStringAttribute('severity');
    }
    public set severity(value: string | undefined) {
      this._severity = value;
    }
    public resetSeverity() {
      this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
      return this._severity
    }

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
      this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // source_ids - computed: false, optional: true, required: false
    private _sourceIds?: string[] | undefined; 
    public get sourceIds() {
      return this.getListAttribute('source_ids');
    }
    public set sourceIds(value: string[] | undefined) {
      this._sourceIds = value;
    }
    public resetSourceIds() {
      this._sourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdsInput() {
      return this._sourceIds
    }

    // source_type - computed: false, optional: true, required: false
    private _sourceType?: string | undefined; 
    public get sourceType() {
      return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string | undefined) {
      this._sourceType = value;
    }
    public resetSourceType() {
      this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
      return this._sourceType
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RedshiftEventSubscriptionTimeouts | undefined; 
    private __timeoutsOutput = new RedshiftEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RedshiftEventSubscriptionTimeouts | undefined) {
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
        enabled: cdktf.booleanToTerraform(this._enabled),
        event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
        name: cdktf.stringToTerraform(this._name),
        severity: cdktf.stringToTerraform(this._severity),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
        source_type: cdktf.stringToTerraform(this._sourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: redshiftEventSubscriptionTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RedshiftParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#description RedshiftParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#family RedshiftParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#name RedshiftParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#tags RedshiftParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#tags_all RedshiftParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#parameter RedshiftParameterGroup#parameter}
    */
    readonly parameter?: RedshiftParameterGroupParameter[];
  }
  export interface RedshiftParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#name RedshiftParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#value RedshiftParameterGroup#value}
    */
    readonly value: string;
  }

  function redshiftParameterGroupParameterToTerraform(struct?: RedshiftParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html aws_redshift_parameter_group}
  */
  export class RedshiftParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html aws_redshift_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._family = config.family;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // family - computed: false, optional: false, required: true
    private _family?: string; 
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: RedshiftParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: RedshiftParameterGroupParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        family: cdktf.stringToTerraform(this._family),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        parameter: cdktf.listMapper(redshiftParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface RedshiftScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#description RedshiftScheduledAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#enable RedshiftScheduledAction#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#end_time RedshiftScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#iam_role RedshiftScheduledAction#iam_role}
    */
    readonly iamRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#name RedshiftScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#schedule RedshiftScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#start_time RedshiftScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * target_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#target_action RedshiftScheduledAction#target_action}
    */
    readonly targetAction: RedshiftScheduledActionTargetAction;
  }
  export interface RedshiftScheduledActionTargetActionPauseCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
  }

  function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct?: RedshiftScheduledActionTargetActionPauseClusterOutputReference | RedshiftScheduledActionTargetActionPauseCluster): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    }
  }

  export class RedshiftScheduledActionTargetActionPauseClusterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
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
  }
  export interface RedshiftScheduledActionTargetActionResizeCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#classic RedshiftScheduledAction#classic}
    */
    readonly classic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_type RedshiftScheduledAction#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#node_type RedshiftScheduledAction#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#number_of_nodes RedshiftScheduledAction#number_of_nodes}
    */
    readonly numberOfNodes?: number;
  }

  function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResizeClusterOutputReference | RedshiftScheduledActionTargetActionResizeCluster): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      classic: cdktf.booleanToTerraform(struct!.classic),
      cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
      cluster_type: cdktf.stringToTerraform(struct!.clusterType),
      node_type: cdktf.stringToTerraform(struct!.nodeType),
      number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    }
  }

  export class RedshiftScheduledActionTargetActionResizeClusterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // classic - computed: false, optional: true, required: false
    private _classic?: boolean | cdktf.IResolvable | undefined; 
    public get classic() {
      return this.getBooleanAttribute('classic') as any;
    }
    public set classic(value: boolean | cdktf.IResolvable | undefined) {
      this._classic = value;
    }
    public resetClassic() {
      this._classic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicInput() {
      return this._classic
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
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

    // cluster_type - computed: false, optional: true, required: false
    private _clusterType?: string | undefined; 
    public get clusterType() {
      return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string | undefined) {
      this._clusterType = value;
    }
    public resetClusterType() {
      this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterTypeInput() {
      return this._clusterType
    }

    // node_type - computed: false, optional: true, required: false
    private _nodeType?: string | undefined; 
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string | undefined) {
      this._nodeType = value;
    }
    public resetNodeType() {
      this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
      return this._nodeType
    }

    // number_of_nodes - computed: false, optional: true, required: false
    private _numberOfNodes?: number | undefined; 
    public get numberOfNodes() {
      return this.getNumberAttribute('number_of_nodes');
    }
    public set numberOfNodes(value: number | undefined) {
      this._numberOfNodes = value;
    }
    public resetNumberOfNodes() {
      this._numberOfNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNodesInput() {
      return this._numberOfNodes
    }
  }
  export interface RedshiftScheduledActionTargetActionResumeCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
  }

  function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResumeClusterOutputReference | RedshiftScheduledActionTargetActionResumeCluster): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    }
  }

  export class RedshiftScheduledActionTargetActionResumeClusterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
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
  }
  export interface RedshiftScheduledActionTargetAction {
    /**
    * pause_cluster block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#pause_cluster RedshiftScheduledAction#pause_cluster}
    */
    readonly pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster;
    /**
    * resize_cluster block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resize_cluster RedshiftScheduledAction#resize_cluster}
    */
    readonly resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster;
    /**
    * resume_cluster block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resume_cluster RedshiftScheduledAction#resume_cluster}
    */
    readonly resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster;
  }

  function redshiftScheduledActionTargetActionToTerraform(struct?: RedshiftScheduledActionTargetActionOutputReference | RedshiftScheduledActionTargetAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      pause_cluster: redshiftScheduledActionTargetActionPauseClusterToTerraform(struct!.pauseCluster),
      resize_cluster: redshiftScheduledActionTargetActionResizeClusterToTerraform(struct!.resizeCluster),
      resume_cluster: redshiftScheduledActionTargetActionResumeClusterToTerraform(struct!.resumeCluster),
    }
  }

  export class RedshiftScheduledActionTargetActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // pause_cluster - computed: false, optional: true, required: false
    private _pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster | undefined; 
    private __pauseClusterOutput = new RedshiftScheduledActionTargetActionPauseClusterOutputReference(this as any, "pause_cluster", true);
    public get pauseCluster() {
      return this.__pauseClusterOutput;
    }
    public putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster | undefined) {
      this._pauseCluster = value;
    }
    public resetPauseCluster() {
      this._pauseCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pauseClusterInput() {
      return this._pauseCluster
    }

    // resize_cluster - computed: false, optional: true, required: false
    private _resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster | undefined; 
    private __resizeClusterOutput = new RedshiftScheduledActionTargetActionResizeClusterOutputReference(this as any, "resize_cluster", true);
    public get resizeCluster() {
      return this.__resizeClusterOutput;
    }
    public putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster | undefined) {
      this._resizeCluster = value;
    }
    public resetResizeCluster() {
      this._resizeCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resizeClusterInput() {
      return this._resizeCluster
    }

    // resume_cluster - computed: false, optional: true, required: false
    private _resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster | undefined; 
    private __resumeClusterOutput = new RedshiftScheduledActionTargetActionResumeClusterOutputReference(this as any, "resume_cluster", true);
    public get resumeCluster() {
      return this.__resumeClusterOutput;
    }
    public putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster | undefined) {
      this._resumeCluster = value;
    }
    public resetResumeCluster() {
      this._resumeCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resumeClusterInput() {
      return this._resumeCluster
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}
  */
  export class RedshiftScheduledAction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_scheduled_action";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftScheduledActionConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftScheduledActionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_scheduled_action',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._enable = config.enable;
      this._endTime = config.endTime;
      this._iamRole = config.iamRole;
      this._name = config.name;
      this._schedule = config.schedule;
      this._startTime = config.startTime;
      this._targetAction = config.targetAction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enable - computed: false, optional: true, required: false
    private _enable?: boolean | cdktf.IResolvable | undefined; 
    public get enable() {
      return this.getBooleanAttribute('enable') as any;
    }
    public set enable(value: boolean | cdktf.IResolvable | undefined) {
      this._enable = value;
    }
    public resetEnable() {
      this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
      return this._enable
    }

    // end_time - computed: false, optional: true, required: false
    private _endTime?: string | undefined; 
    public get endTime() {
      return this.getStringAttribute('end_time');
    }
    public set endTime(value: string | undefined) {
      this._endTime = value;
    }
    public resetEndTime() {
      this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
      return this._endTime
    }

    // iam_role - computed: false, optional: false, required: true
    private _iamRole?: string; 
    public get iamRole() {
      return this.getStringAttribute('iam_role');
    }
    public set iamRole(value: string) {
      this._iamRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleInput() {
      return this._iamRole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule?: string; 
    public get schedule() {
      return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // start_time - computed: false, optional: true, required: false
    private _startTime?: string | undefined; 
    public get startTime() {
      return this.getStringAttribute('start_time');
    }
    public set startTime(value: string | undefined) {
      this._startTime = value;
    }
    public resetStartTime() {
      this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
      return this._startTime
    }

    // target_action - computed: false, optional: false, required: true
    private _targetAction?: RedshiftScheduledActionTargetAction; 
    private __targetActionOutput = new RedshiftScheduledActionTargetActionOutputReference(this as any, "target_action", true);
    public get targetAction() {
      return this.__targetActionOutput;
    }
    public putTargetAction(value: RedshiftScheduledActionTargetAction) {
      this._targetAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetActionInput() {
      return this._targetAction
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        enable: cdktf.booleanToTerraform(this._enable),
        end_time: cdktf.stringToTerraform(this._endTime),
        iam_role: cdktf.stringToTerraform(this._iamRole),
        name: cdktf.stringToTerraform(this._name),
        schedule: cdktf.stringToTerraform(this._schedule),
        start_time: cdktf.stringToTerraform(this._startTime),
        target_action: redshiftScheduledActionTargetActionToTerraform(this._targetAction),
      };
    }
  }
  export interface RedshiftSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#description RedshiftSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#name RedshiftSecurityGroup#name}
    */
    readonly name: string;
    /**
    * ingress block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#ingress RedshiftSecurityGroup#ingress}
    */
    readonly ingress: RedshiftSecurityGroupIngress[];
  }
  export interface RedshiftSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#cidr RedshiftSecurityGroup#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#security_group_name RedshiftSecurityGroup#security_group_name}
    */
    readonly securityGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#security_group_owner_id RedshiftSecurityGroup#security_group_owner_id}
    */
    readonly securityGroupOwnerId?: string;
  }

  function redshiftSecurityGroupIngressToTerraform(struct?: RedshiftSecurityGroupIngress): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr: cdktf.stringToTerraform(struct!.cidr),
      security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
      security_group_owner_id: cdktf.stringToTerraform(struct!.securityGroupOwnerId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group}
  */
  export class RedshiftSecurityGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSecurityGroupConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftSecurityGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_security_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._ingress = config.ingress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // ingress - computed: false, optional: false, required: true
    private _ingress?: RedshiftSecurityGroupIngress[]; 
    public get ingress() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ingress') as any;
    }
    public set ingress(value: RedshiftSecurityGroupIngress[]) {
      this._ingress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressInput() {
      return this._ingress
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        ingress: cdktf.listMapper(redshiftSecurityGroupIngressToTerraform)(this._ingress),
      };
    }
  }
  export interface RedshiftSnapshotCopyGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}
    */
    readonly snapshotCopyGrantName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#tags RedshiftSnapshotCopyGrant#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#tags_all RedshiftSnapshotCopyGrant#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant}
  */
  export class RedshiftSnapshotCopyGrant extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_snapshot_copy_grant";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotCopyGrantConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyGrantConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_snapshot_copy_grant',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._kmsKeyId = config.kmsKeyId;
      this._snapshotCopyGrantName = config.snapshotCopyGrantName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // snapshot_copy_grant_name - computed: false, optional: false, required: true
    private _snapshotCopyGrantName?: string; 
    public get snapshotCopyGrantName() {
      return this.getStringAttribute('snapshot_copy_grant_name');
    }
    public set snapshotCopyGrantName(value: string) {
      this._snapshotCopyGrantName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotCopyGrantNameInput() {
      return this._snapshotCopyGrantName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        snapshot_copy_grant_name: cdktf.stringToTerraform(this._snapshotCopyGrantName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface RedshiftSnapshotScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#definitions RedshiftSnapshotSchedule#definitions}
    */
    readonly definitions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#description RedshiftSnapshotSchedule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#force_destroy RedshiftSnapshotSchedule#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#identifier RedshiftSnapshotSchedule#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#identifier_prefix RedshiftSnapshotSchedule#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#tags RedshiftSnapshotSchedule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#tags_all RedshiftSnapshotSchedule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule}
  */
  export class RedshiftSnapshotSchedule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_snapshot_schedule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotScheduleConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_snapshot_schedule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._definitions = config.definitions;
      this._description = config.description;
      this._forceDestroy = config.forceDestroy;
      this._identifier = config.identifier;
      this._identifierPrefix = config.identifierPrefix;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // definitions - computed: false, optional: false, required: true
    private _definitions?: string[]; 
    public get definitions() {
      return this.getListAttribute('definitions');
    }
    public set definitions(value: string[]) {
      this._definitions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionsInput() {
      return this._definitions
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string | undefined; 
    public get identifier() {
      return this.getStringAttribute('identifier');
    }
    public set identifier(value: string | undefined) {
      this._identifier = value;
    }
    public resetIdentifier() {
      this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
      return this._identifier
    }

    // identifier_prefix - computed: true, optional: true, required: false
    private _identifierPrefix?: string | undefined; 
    public get identifierPrefix() {
      return this.getStringAttribute('identifier_prefix');
    }
    public set identifierPrefix(value: string | undefined) {
      this._identifierPrefix = value;
    }
    public resetIdentifierPrefix() {
      this._identifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierPrefixInput() {
      return this._identifierPrefix
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        definitions: cdktf.listMapper(cdktf.stringToTerraform)(this._definitions),
        description: cdktf.stringToTerraform(this._description),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        identifier: cdktf.stringToTerraform(this._identifier),
        identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface RedshiftSnapshotScheduleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}
    */
    readonly scheduleIdentifier: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association}
  */
  export class RedshiftSnapshotScheduleAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_snapshot_schedule_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotScheduleAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_snapshot_schedule_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterIdentifier = config.clusterIdentifier;
      this._scheduleIdentifier = config.scheduleIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // schedule_identifier - computed: false, optional: false, required: true
    private _scheduleIdentifier?: string; 
    public get scheduleIdentifier() {
      return this.getStringAttribute('schedule_identifier');
    }
    public set scheduleIdentifier(value: string) {
      this._scheduleIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleIdentifierInput() {
      return this._scheduleIdentifier
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        schedule_identifier: cdktf.stringToTerraform(this._scheduleIdentifier),
      };
    }
  }
  export interface RedshiftSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html#description RedshiftSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html#name RedshiftSubnetGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html#subnet_ids RedshiftSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html#tags RedshiftSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html#tags_all RedshiftSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html aws_redshift_subnet_group}
  */
  export class RedshiftSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html aws_redshift_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: RedshiftSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_subnet_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsRedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#tags DataAwsRedshiftCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster}
  */
  export class DataAwsRedshiftCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig) {
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
      this._clusterIdentifier = config.clusterIdentifier;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_version_upgrade - computed: true, optional: false, required: false
    public get allowVersionUpgrade() {
      return this.getBooleanAttribute('allow_version_upgrade') as any;
    }

    // automated_snapshot_retention_period - computed: true, optional: false, required: false
    public get automatedSnapshotRetentionPeriod() {
      return this.getNumberAttribute('automated_snapshot_retention_period');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // bucket_name - computed: true, optional: false, required: false
    public get bucketName() {
      return this.getStringAttribute('bucket_name');
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
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

    // cluster_parameter_group_name - computed: true, optional: false, required: false
    public get clusterParameterGroupName() {
      return this.getStringAttribute('cluster_parameter_group_name');
    }

    // cluster_public_key - computed: true, optional: false, required: false
    public get clusterPublicKey() {
      return this.getStringAttribute('cluster_public_key');
    }

    // cluster_revision_number - computed: true, optional: false, required: false
    public get clusterRevisionNumber() {
      return this.getStringAttribute('cluster_revision_number');
    }

    // cluster_security_groups - computed: true, optional: false, required: false
    public get clusterSecurityGroups() {
      return this.getListAttribute('cluster_security_groups');
    }

    // cluster_subnet_group_name - computed: true, optional: false, required: false
    public get clusterSubnetGroupName() {
      return this.getStringAttribute('cluster_subnet_group_name');
    }

    // cluster_type - computed: true, optional: false, required: false
    public get clusterType() {
      return this.getStringAttribute('cluster_type');
    }

    // cluster_version - computed: true, optional: false, required: false
    public get clusterVersion() {
      return this.getStringAttribute('cluster_version');
    }

    // database_name - computed: true, optional: false, required: false
    public get databaseName() {
      return this.getStringAttribute('database_name');
    }

    // elastic_ip - computed: true, optional: false, required: false
    public get elasticIp() {
      return this.getStringAttribute('elastic_ip');
    }

    // enable_logging - computed: true, optional: false, required: false
    public get enableLogging() {
      return this.getBooleanAttribute('enable_logging') as any;
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // enhanced_vpc_routing - computed: true, optional: false, required: false
    public get enhancedVpcRouting() {
      return this.getBooleanAttribute('enhanced_vpc_routing') as any;
    }

    // iam_roles - computed: true, optional: false, required: false
    public get iamRoles() {
      return this.getListAttribute('iam_roles');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // master_username - computed: true, optional: false, required: false
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }

    // node_type - computed: true, optional: false, required: false
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }

    // number_of_nodes - computed: true, optional: false, required: false
    public get numberOfNodes() {
      return this.getNumberAttribute('number_of_nodes');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preferred_maintenance_window - computed: true, optional: false, required: false
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }

    // s3_key_prefix - computed: true, optional: false, required: false
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsRedshiftOrderableClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}
    */
    readonly clusterVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#node_type DataAwsRedshiftOrderableCluster#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}
    */
    readonly preferredNodeTypes?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}
  */
  export class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_orderable_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftOrderableClusterConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRedshiftOrderableClusterConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_orderable_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterType = config.clusterType;
      this._clusterVersion = config.clusterVersion;
      this._nodeType = config.nodeType;
      this._preferredNodeTypes = config.preferredNodeTypes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // cluster_type - computed: true, optional: true, required: false
    private _clusterType?: string | undefined; 
    public get clusterType() {
      return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string | undefined) {
      this._clusterType = value;
    }
    public resetClusterType() {
      this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterTypeInput() {
      return this._clusterType
    }

    // cluster_version - computed: true, optional: true, required: false
    private _clusterVersion?: string | undefined; 
    public get clusterVersion() {
      return this.getStringAttribute('cluster_version');
    }
    public set clusterVersion(value: string | undefined) {
      this._clusterVersion = value;
    }
    public resetClusterVersion() {
      this._clusterVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterVersionInput() {
      return this._clusterVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // node_type - computed: true, optional: true, required: false
    private _nodeType?: string | undefined; 
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string | undefined) {
      this._nodeType = value;
    }
    public resetNodeType() {
      this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
      return this._nodeType
    }

    // preferred_node_types - computed: false, optional: true, required: false
    private _preferredNodeTypes?: string[] | undefined; 
    public get preferredNodeTypes() {
      return this.getListAttribute('preferred_node_types');
    }
    public set preferredNodeTypes(value: string[] | undefined) {
      this._preferredNodeTypes = value;
    }
    public resetPreferredNodeTypes() {
      this._preferredNodeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredNodeTypesInput() {
      return this._preferredNodeTypes
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_type: cdktf.stringToTerraform(this._clusterType),
        cluster_version: cdktf.stringToTerraform(this._clusterVersion),
        node_type: cdktf.stringToTerraform(this._nodeType),
        preferred_node_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredNodeTypes),
      };
    }
  }
  export interface DataAwsRedshiftServiceAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_service_account.html#region DataAwsRedshiftServiceAccount#region}
    */
    readonly region?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_service_account.html aws_redshift_service_account}
  */
  export class DataAwsRedshiftServiceAccount extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_redshift_service_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_service_account.html aws_redshift_service_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftServiceAccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsRedshiftServiceAccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_redshift_service_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._region = config.region;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        region: cdktf.stringToTerraform(this._region),
      };
    }
  }
}
