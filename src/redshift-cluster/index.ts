/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}
  */
  readonly allowVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}
  */
  readonly aquaConfigurationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}
  */
  readonly automatedSnapshotRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}
  */
  readonly availabilityZoneRelocationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}
  */
  readonly clusterParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}
  */
  readonly clusterSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#database_name RedshiftCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}
  */
  readonly defaultIamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}
  */
  readonly enhancedVpcRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}
  */
  readonly iamRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#id RedshiftCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}
  */
  readonly maintenanceTrackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}
  */
  readonly manageMasterPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}
  */
  readonly manualSnapshotRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password RedshiftCluster#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}
  */
  readonly masterPasswordSecretKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo RedshiftCluster#master_password_wo}
  */
  readonly masterPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_password_wo_version RedshiftCluster#master_password_wo_version}
  */
  readonly masterPasswordWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}
  */
  readonly ownerAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#port RedshiftCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#region RedshiftCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_arn RedshiftCluster#snapshot_arn}
  */
  readonly snapshotArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}
  */
  readonly snapshotClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#tags_all RedshiftCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#timeouts RedshiftCluster#timeouts}
  */
  readonly timeouts?: RedshiftClusterTimeouts;
}
export interface RedshiftClusterClusterNodes {
}

export function redshiftClusterClusterNodesToTerraform(struct?: RedshiftClusterClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redshiftClusterClusterNodesToHclTerraform(struct?: RedshiftClusterClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedshiftClusterClusterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedshiftClusterClusterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftClusterClusterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class RedshiftClusterClusterNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedshiftClusterClusterNodesOutputReference {
    return new RedshiftClusterClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#create RedshiftCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#delete RedshiftCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#update RedshiftCluster#update}
  */
  readonly update?: string;
}

export function redshiftClusterTimeoutsToTerraform(struct?: RedshiftClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function redshiftClusterTimeoutsToHclTerraform(struct?: RedshiftClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedshiftClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster aws_redshift_cluster}
*/
export class RedshiftCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftCluster to import
  * @param importFromId The id of the existing RedshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/redshift_cluster aws_redshift_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowVersionUpgrade = config.allowVersionUpgrade;
    this._applyImmediately = config.applyImmediately;
    this._aquaConfigurationStatus = config.aquaConfigurationStatus;
    this._automatedSnapshotRetentionPeriod = config.automatedSnapshotRetentionPeriod;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneRelocationEnabled = config.availabilityZoneRelocationEnabled;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterParameterGroupName = config.clusterParameterGroupName;
    this._clusterSubnetGroupName = config.clusterSubnetGroupName;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._databaseName = config.databaseName;
    this._defaultIamRoleArn = config.defaultIamRoleArn;
    this._elasticIp = config.elasticIp;
    this._encrypted = config.encrypted;
    this._enhancedVpcRouting = config.enhancedVpcRouting;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._iamRoles = config.iamRoles;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._maintenanceTrackName = config.maintenanceTrackName;
    this._manageMasterPassword = config.manageMasterPassword;
    this._manualSnapshotRetentionPeriod = config.manualSnapshotRetentionPeriod;
    this._masterPassword = config.masterPassword;
    this._masterPasswordSecretKmsKeyId = config.masterPasswordSecretKmsKeyId;
    this._masterPasswordWo = config.masterPasswordWo;
    this._masterPasswordWoVersion = config.masterPasswordWoVersion;
    this._masterUsername = config.masterUsername;
    this._multiAz = config.multiAz;
    this._nodeType = config.nodeType;
    this._numberOfNodes = config.numberOfNodes;
    this._ownerAccount = config.ownerAccount;
    this._port = config.port;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._region = config.region;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotArn = config.snapshotArn;
    this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_version_upgrade - computed: false, optional: true, required: false
  private _allowVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get allowVersionUpgrade() {
    return this.getBooleanAttribute('allow_version_upgrade');
  }
  public set allowVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._allowVersionUpgrade = value;
  }
  public resetAllowVersionUpgrade() {
    this._allowVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVersionUpgradeInput() {
    return this._allowVersionUpgrade;
  }

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable; 
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
  }

  // aqua_configuration_status - computed: true, optional: true, required: false
  private _aquaConfigurationStatus?: string; 
  public get aquaConfigurationStatus() {
    return this.getStringAttribute('aqua_configuration_status');
  }
  public set aquaConfigurationStatus(value: string) {
    this._aquaConfigurationStatus = value;
  }
  public resetAquaConfigurationStatus() {
    this._aquaConfigurationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aquaConfigurationStatusInput() {
    return this._aquaConfigurationStatus;
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
  public set automatedSnapshotRetentionPeriod(value: number) {
    this._automatedSnapshotRetentionPeriod = value;
  }
  public resetAutomatedSnapshotRetentionPeriod() {
    this._automatedSnapshotRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotRetentionPeriodInput() {
    return this._automatedSnapshotRetentionPeriod;
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
    return this._availabilityZone;
  }

  // availability_zone_relocation_enabled - computed: false, optional: true, required: false
  private _availabilityZoneRelocationEnabled?: boolean | cdktf.IResolvable; 
  public get availabilityZoneRelocationEnabled() {
    return this.getBooleanAttribute('availability_zone_relocation_enabled');
  }
  public set availabilityZoneRelocationEnabled(value: boolean | cdktf.IResolvable) {
    this._availabilityZoneRelocationEnabled = value;
  }
  public resetAvailabilityZoneRelocationEnabled() {
    this._availabilityZoneRelocationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneRelocationEnabledInput() {
    return this._availabilityZoneRelocationEnabled;
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
    return this._clusterIdentifier;
  }

  // cluster_namespace_arn - computed: true, optional: false, required: false
  public get clusterNamespaceArn() {
    return this.getStringAttribute('cluster_namespace_arn');
  }

  // cluster_nodes - computed: true, optional: false, required: false
  private _clusterNodes = new RedshiftClusterClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
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
    return this._clusterParameterGroupName;
  }

  // cluster_public_key - computed: true, optional: false, required: false
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }

  // cluster_revision_number - computed: true, optional: false, required: false
  public get clusterRevisionNumber() {
    return this.getStringAttribute('cluster_revision_number');
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
    return this._clusterSubnetGroupName;
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
    return this._clusterType;
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
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
    return this._databaseName;
  }

  // default_iam_role_arn - computed: true, optional: true, required: false
  private _defaultIamRoleArn?: string; 
  public get defaultIamRoleArn() {
    return this.getStringAttribute('default_iam_role_arn');
  }
  public set defaultIamRoleArn(value: string) {
    this._defaultIamRoleArn = value;
  }
  public resetDefaultIamRoleArn() {
    this._defaultIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIamRoleArnInput() {
    return this._defaultIamRoleArn;
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
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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
    return this._enhancedVpcRouting;
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string; 
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier;
  }

  // iam_roles - computed: true, optional: true, required: false
  private _iamRoles?: string[]; 
  public get iamRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_roles'));
  }
  public set iamRoles(value: string[]) {
    this._iamRoles = value;
  }
  public resetIamRoles() {
    this._iamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRolesInput() {
    return this._iamRoles;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._kmsKeyId;
  }

  // maintenance_track_name - computed: false, optional: true, required: false
  private _maintenanceTrackName?: string; 
  public get maintenanceTrackName() {
    return this.getStringAttribute('maintenance_track_name');
  }
  public set maintenanceTrackName(value: string) {
    this._maintenanceTrackName = value;
  }
  public resetMaintenanceTrackName() {
    this._maintenanceTrackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTrackNameInput() {
    return this._maintenanceTrackName;
  }

  // manage_master_password - computed: false, optional: true, required: false
  private _manageMasterPassword?: boolean | cdktf.IResolvable; 
  public get manageMasterPassword() {
    return this.getBooleanAttribute('manage_master_password');
  }
  public set manageMasterPassword(value: boolean | cdktf.IResolvable) {
    this._manageMasterPassword = value;
  }
  public resetManageMasterPassword() {
    this._manageMasterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMasterPasswordInput() {
    return this._manageMasterPassword;
  }

  // manual_snapshot_retention_period - computed: false, optional: true, required: false
  private _manualSnapshotRetentionPeriod?: number; 
  public get manualSnapshotRetentionPeriod() {
    return this.getNumberAttribute('manual_snapshot_retention_period');
  }
  public set manualSnapshotRetentionPeriod(value: number) {
    this._manualSnapshotRetentionPeriod = value;
  }
  public resetManualSnapshotRetentionPeriod() {
    this._manualSnapshotRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSnapshotRetentionPeriodInput() {
    return this._manualSnapshotRetentionPeriod;
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string; 
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword;
  }

  // master_password_secret_arn - computed: true, optional: false, required: false
  public get masterPasswordSecretArn() {
    return this.getStringAttribute('master_password_secret_arn');
  }

  // master_password_secret_kms_key_id - computed: true, optional: true, required: false
  private _masterPasswordSecretKmsKeyId?: string; 
  public get masterPasswordSecretKmsKeyId() {
    return this.getStringAttribute('master_password_secret_kms_key_id');
  }
  public set masterPasswordSecretKmsKeyId(value: string) {
    this._masterPasswordSecretKmsKeyId = value;
  }
  public resetMasterPasswordSecretKmsKeyId() {
    this._masterPasswordSecretKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordSecretKmsKeyIdInput() {
    return this._masterPasswordSecretKmsKeyId;
  }

  // master_password_wo - computed: false, optional: true, required: false
  private _masterPasswordWo?: string; 
  public get masterPasswordWo() {
    return this.getStringAttribute('master_password_wo');
  }
  public set masterPasswordWo(value: string) {
    this._masterPasswordWo = value;
  }
  public resetMasterPasswordWo() {
    this._masterPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordWoInput() {
    return this._masterPasswordWo;
  }

  // master_password_wo_version - computed: false, optional: true, required: false
  private _masterPasswordWoVersion?: number; 
  public get masterPasswordWoVersion() {
    return this.getNumberAttribute('master_password_wo_version');
  }
  public set masterPasswordWoVersion(value: number) {
    this._masterPasswordWoVersion = value;
  }
  public resetMasterPasswordWoVersion() {
    this._masterPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordWoVersionInput() {
    return this._masterPasswordWoVersion;
  }

  // master_username - computed: false, optional: true, required: false
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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
    return this._nodeType;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // owner_account - computed: false, optional: true, required: false
  private _ownerAccount?: string; 
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }
  public set ownerAccount(value: string) {
    this._ownerAccount = value;
  }
  public resetOwnerAccount() {
    this._ownerAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountInput() {
    return this._ownerAccount;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
    return this._preferredMaintenanceWindow;
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable; 
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot;
  }

  // snapshot_arn - computed: false, optional: true, required: false
  private _snapshotArn?: string; 
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }
  public set snapshotArn(value: string) {
    this._snapshotArn = value;
  }
  public resetSnapshotArn() {
    this._snapshotArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnInput() {
    return this._snapshotArn;
  }

  // snapshot_cluster_identifier - computed: false, optional: true, required: false
  private _snapshotClusterIdentifier?: string; 
  public get snapshotClusterIdentifier() {
    return this.getStringAttribute('snapshot_cluster_identifier');
  }
  public set snapshotClusterIdentifier(value: string) {
    this._snapshotClusterIdentifier = value;
  }
  public resetSnapshotClusterIdentifier() {
    this._snapshotClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotClusterIdentifierInput() {
    return this._snapshotClusterIdentifier;
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string; 
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedshiftClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedshiftClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_version_upgrade: cdktf.booleanToTerraform(this._allowVersionUpgrade),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      aqua_configuration_status: cdktf.stringToTerraform(this._aquaConfigurationStatus),
      automated_snapshot_retention_period: cdktf.numberToTerraform(this._automatedSnapshotRetentionPeriod),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_relocation_enabled: cdktf.booleanToTerraform(this._availabilityZoneRelocationEnabled),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_parameter_group_name: cdktf.stringToTerraform(this._clusterParameterGroupName),
      cluster_subnet_group_name: cdktf.stringToTerraform(this._clusterSubnetGroupName),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      database_name: cdktf.stringToTerraform(this._databaseName),
      default_iam_role_arn: cdktf.stringToTerraform(this._defaultIamRoleArn),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      encrypted: cdktf.stringToTerraform(this._encrypted),
      enhanced_vpc_routing: cdktf.booleanToTerraform(this._enhancedVpcRouting),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamRoles),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      maintenance_track_name: cdktf.stringToTerraform(this._maintenanceTrackName),
      manage_master_password: cdktf.booleanToTerraform(this._manageMasterPassword),
      manual_snapshot_retention_period: cdktf.numberToTerraform(this._manualSnapshotRetentionPeriod),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_password_secret_kms_key_id: cdktf.stringToTerraform(this._masterPasswordSecretKmsKeyId),
      master_password_wo: cdktf.stringToTerraform(this._masterPasswordWo),
      master_password_wo_version: cdktf.numberToTerraform(this._masterPasswordWoVersion),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      node_type: cdktf.stringToTerraform(this._nodeType),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      owner_account: cdktf.stringToTerraform(this._ownerAccount),
      port: cdktf.numberToTerraform(this._port),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      region: cdktf.stringToTerraform(this._region),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_arn: cdktf.stringToTerraform(this._snapshotArn),
      snapshot_cluster_identifier: cdktf.stringToTerraform(this._snapshotClusterIdentifier),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      timeouts: redshiftClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._allowVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apply_immediately: {
        value: cdktf.booleanToHclTerraform(this._applyImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aqua_configuration_status: {
        value: cdktf.stringToHclTerraform(this._aquaConfigurationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_snapshot_retention_period: {
        value: cdktf.numberToHclTerraform(this._automatedSnapshotRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_relocation_enabled: {
        value: cdktf.booleanToHclTerraform(this._availabilityZoneRelocationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._clusterParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._clusterSubnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._defaultIamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_ip: {
        value: cdktf.stringToHclTerraform(this._elasticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.stringToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_vpc_routing: {
        value: cdktf.booleanToHclTerraform(this._enhancedVpcRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      final_snapshot_identifier: {
        value: cdktf.stringToHclTerraform(this._finalSnapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_track_name: {
        value: cdktf.stringToHclTerraform(this._maintenanceTrackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_master_password: {
        value: cdktf.booleanToHclTerraform(this._manageMasterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manual_snapshot_retention_period: {
        value: cdktf.numberToHclTerraform(this._manualSnapshotRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password: {
        value: cdktf.stringToHclTerraform(this._masterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password_secret_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._masterPasswordSecretKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password_wo: {
        value: cdktf.stringToHclTerraform(this._masterPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password_wo_version: {
        value: cdktf.numberToHclTerraform(this._masterPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_username: {
        value: cdktf.stringToHclTerraform(this._masterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_nodes: {
        value: cdktf.numberToHclTerraform(this._numberOfNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owner_account: {
        value: cdktf.stringToHclTerraform(this._ownerAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_maintenance_window: {
        value: cdktf.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_final_snapshot: {
        value: cdktf.booleanToHclTerraform(this._skipFinalSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_arn: {
        value: cdktf.stringToHclTerraform(this._snapshotArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._snapshotClusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_identifier: {
        value: cdktf.stringToHclTerraform(this._snapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: redshiftClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedshiftClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
