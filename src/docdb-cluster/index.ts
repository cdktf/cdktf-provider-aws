/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocdbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}
  */
  readonly clusterIdentifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}
  */
  readonly clusterMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}
  */
  readonly dbClusterParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}
  */
  readonly enabledCloudwatchLogsExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#id DocdbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}
  */
  readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}
  */
  readonly masterPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}
  */
  readonly masterPasswordWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#port DocdbCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#region DocdbCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * restore_to_point_in_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_to_point_in_time DocdbCluster#restore_to_point_in_time}
  */
  readonly restoreToPointInTime?: DocdbClusterRestoreToPointInTime;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#timeouts DocdbCluster#timeouts}
  */
  readonly timeouts?: DocdbClusterTimeouts;
}
export interface DocdbClusterMasterUserSecret {
}

export function docdbClusterMasterUserSecretToTerraform(struct?: DocdbClusterMasterUserSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function docdbClusterMasterUserSecretToHclTerraform(struct?: DocdbClusterMasterUserSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocdbClusterMasterUserSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DocdbClusterMasterUserSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocdbClusterMasterUserSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // secret_status - computed: true, optional: false, required: false
  public get secretStatus() {
    return this.getStringAttribute('secret_status');
  }
}

export class DocdbClusterMasterUserSecretList extends cdktf.ComplexList {

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
  public get(index: number): DocdbClusterMasterUserSecretOutputReference {
    return new DocdbClusterMasterUserSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocdbClusterRestoreToPointInTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}
  */
  readonly restoreToTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}
  */
  readonly restoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}
  */
  readonly sourceClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}

export function docdbClusterRestoreToPointInTimeToTerraform(struct?: DocdbClusterRestoreToPointInTimeOutputReference | DocdbClusterRestoreToPointInTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restore_to_time: cdktf.stringToTerraform(struct!.restoreToTime),
    restore_type: cdktf.stringToTerraform(struct!.restoreType),
    source_cluster_identifier: cdktf.stringToTerraform(struct!.sourceClusterIdentifier),
    use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
  }
}


export function docdbClusterRestoreToPointInTimeToHclTerraform(struct?: DocdbClusterRestoreToPointInTimeOutputReference | DocdbClusterRestoreToPointInTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restore_to_time: {
      value: cdktf.stringToHclTerraform(struct!.restoreToTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_type: {
      value: cdktf.stringToHclTerraform(struct!.restoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_latest_restorable_time: {
      value: cdktf.booleanToHclTerraform(struct!.useLatestRestorableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocdbClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocdbClusterRestoreToPointInTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restoreToTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreToTime = this._restoreToTime;
    }
    if (this._restoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreType = this._restoreType;
    }
    if (this._sourceClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceClusterIdentifier = this._sourceClusterIdentifier;
    }
    if (this._useLatestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocdbClusterRestoreToPointInTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restoreToTime = undefined;
      this._restoreType = undefined;
      this._sourceClusterIdentifier = undefined;
      this._useLatestRestorableTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restoreToTime = value.restoreToTime;
      this._restoreType = value.restoreType;
      this._sourceClusterIdentifier = value.sourceClusterIdentifier;
      this._useLatestRestorableTime = value.useLatestRestorableTime;
    }
  }

  // restore_to_time - computed: false, optional: true, required: false
  private _restoreToTime?: string; 
  public get restoreToTime() {
    return this.getStringAttribute('restore_to_time');
  }
  public set restoreToTime(value: string) {
    this._restoreToTime = value;
  }
  public resetRestoreToTime() {
    this._restoreToTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToTimeInput() {
    return this._restoreToTime;
  }

  // restore_type - computed: false, optional: true, required: false
  private _restoreType?: string; 
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }
  public set restoreType(value: string) {
    this._restoreType = value;
  }
  public resetRestoreType() {
    this._restoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTypeInput() {
    return this._restoreType;
  }

  // source_cluster_identifier - computed: false, optional: false, required: true
  private _sourceClusterIdentifier?: string; 
  public get sourceClusterIdentifier() {
    return this.getStringAttribute('source_cluster_identifier');
  }
  public set sourceClusterIdentifier(value: string) {
    this._sourceClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterIdentifierInput() {
    return this._sourceClusterIdentifier;
  }

  // use_latest_restorable_time - computed: false, optional: true, required: false
  private _useLatestRestorableTime?: boolean | cdktf.IResolvable; 
  public get useLatestRestorableTime() {
    return this.getBooleanAttribute('use_latest_restorable_time');
  }
  public set useLatestRestorableTime(value: boolean | cdktf.IResolvable) {
    this._useLatestRestorableTime = value;
  }
  public resetUseLatestRestorableTime() {
    this._useLatestRestorableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestRestorableTimeInput() {
    return this._useLatestRestorableTime;
  }
}
export interface DocdbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#create DocdbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#update DocdbCluster#update}
  */
  readonly update?: string;
}

export function docdbClusterTimeoutsToTerraform(struct?: DocdbClusterTimeouts | cdktf.IResolvable): any {
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


export function docdbClusterTimeoutsToHclTerraform(struct?: DocdbClusterTimeouts | cdktf.IResolvable): any {
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

export class DocdbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DocdbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DocdbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster aws_docdb_cluster}
*/
export class DocdbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_docdb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocdbCluster to import
  * @param importFromId The id of the existing DocdbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocdbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_docdb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster aws_docdb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocdbClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DocdbClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
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
    this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
    this._applyImmediately = config.applyImmediately;
    this._availabilityZones = config.availabilityZones;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
    this._clusterMembers = config.clusterMembers;
    this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deletionProtection = config.deletionProtection;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._manageMasterUserPassword = config.manageMasterUserPassword;
    this._masterPassword = config.masterPassword;
    this._masterPasswordWo = config.masterPasswordWo;
    this._masterPasswordWoVersion = config.masterPasswordWoVersion;
    this._masterUsername = config.masterUsername;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._region = config.region;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_major_version_upgrade - computed: false, optional: true, required: false
  private _allowMajorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get allowMajorVersionUpgrade() {
    return this.getBooleanAttribute('allow_major_version_upgrade');
  }
  public set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._allowMajorVersionUpgrade = value;
  }
  public resetAllowMajorVersionUpgrade() {
    this._allowMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMajorVersionUpgradeInput() {
    return this._allowMajorVersionUpgrade;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // backup_retention_period - computed: false, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // cluster_identifier - computed: true, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // cluster_identifier_prefix - computed: true, optional: true, required: false
  private _clusterIdentifierPrefix?: string; 
  public get clusterIdentifierPrefix() {
    return this.getStringAttribute('cluster_identifier_prefix');
  }
  public set clusterIdentifierPrefix(value: string) {
    this._clusterIdentifierPrefix = value;
  }
  public resetClusterIdentifierPrefix() {
    this._clusterIdentifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierPrefixInput() {
    return this._clusterIdentifierPrefix;
  }

  // cluster_members - computed: true, optional: true, required: false
  private _clusterMembers?: string[]; 
  public get clusterMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_members'));
  }
  public set clusterMembers(value: string[]) {
    this._clusterMembers = value;
  }
  public resetClusterMembers() {
    this._clusterMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMembersInput() {
    return this._clusterMembers;
  }

  // cluster_resource_id - computed: true, optional: false, required: false
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // db_cluster_parameter_group_name - computed: true, optional: true, required: false
  private _dbClusterParameterGroupName?: string; 
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }
  public set dbClusterParameterGroupName(value: string) {
    this._dbClusterParameterGroupName = value;
  }
  public resetDbClusterParameterGroupName() {
    this._dbClusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterParameterGroupNameInput() {
    return this._dbClusterParameterGroupName;
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string; 
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enabledCloudwatchLogsExports?: string[]; 
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }
  public set enabledCloudwatchLogsExports(value: string[]) {
    this._enabledCloudwatchLogsExports = value;
  }
  public resetEnabledCloudwatchLogsExports() {
    this._enabledCloudwatchLogsExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCloudwatchLogsExportsInput() {
    return this._enabledCloudwatchLogsExports;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
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

  // manage_master_user_password - computed: false, optional: true, required: false
  private _manageMasterUserPassword?: boolean | cdktf.IResolvable; 
  public get manageMasterUserPassword() {
    return this.getBooleanAttribute('manage_master_user_password');
  }
  public set manageMasterUserPassword(value: boolean | cdktf.IResolvable) {
    this._manageMasterUserPassword = value;
  }
  public resetManageMasterUserPassword() {
    this._manageMasterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMasterUserPasswordInput() {
    return this._manageMasterUserPassword;
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

  // master_user_secret - computed: true, optional: false, required: false
  private _masterUserSecret = new DocdbClusterMasterUserSecretList(this, "master_user_secret", false);
  public get masterUserSecret() {
    return this._masterUserSecret;
  }

  // master_username - computed: true, optional: true, required: false
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

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string; 
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow;
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

  // reader_endpoint - computed: true, optional: false, required: false
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
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

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable; 
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // restore_to_point_in_time - computed: false, optional: true, required: false
  private _restoreToPointInTime = new DocdbClusterRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time");
  public get restoreToPointInTime() {
    return this._restoreToPointInTime;
  }
  public putRestoreToPointInTime(value: DocdbClusterRestoreToPointInTime) {
    this._restoreToPointInTime.internalValue = value;
  }
  public resetRestoreToPointInTime() {
    this._restoreToPointInTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToPointInTimeInput() {
    return this._restoreToPointInTime.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DocdbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DocdbClusterTimeouts) {
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
      allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
      cluster_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterMembers),
      db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      manage_master_user_password: cdktf.booleanToTerraform(this._manageMasterUserPassword),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_password_wo: cdktf.stringToTerraform(this._masterPasswordWo),
      master_password_wo_version: cdktf.numberToTerraform(this._masterPasswordWoVersion),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      port: cdktf.numberToTerraform(this._port),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      region: cdktf.stringToTerraform(this._region),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      restore_to_point_in_time: docdbClusterRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
      timeouts: docdbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_major_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._allowMajorVersionUpgrade),
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
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_identifier_prefix: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifierPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      db_cluster_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._dbClusterParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_subnet_group_name: {
        value: cdktf.stringToHclTerraform(this._dbSubnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_cloudwatch_logs_exports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledCloudwatchLogsExports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_snapshot_identifier: {
        value: cdktf.stringToHclTerraform(this._finalSnapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._globalClusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      manage_master_user_password: {
        value: cdktf.booleanToHclTerraform(this._manageMasterUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_password: {
        value: cdktf.stringToHclTerraform(this._masterPassword),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_backup_window: {
        value: cdktf.stringToHclTerraform(this._preferredBackupWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_maintenance_window: {
        value: cdktf.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      snapshot_identifier: {
        value: cdktf.stringToHclTerraform(this._snapshotIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_encrypted: {
        value: cdktf.booleanToHclTerraform(this._storageEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      restore_to_point_in_time: {
        value: docdbClusterRestoreToPointInTimeToHclTerraform(this._restoreToPointInTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DocdbClusterRestoreToPointInTimeList",
      },
      timeouts: {
        value: docdbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DocdbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
