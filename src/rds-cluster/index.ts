/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#allocated_storage RdsCluster#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#apply_immediately RdsCluster#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#availability_zones RdsCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#backtrack_window RdsCluster#backtrack_window}
  */
  readonly backtrackWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#ca_certificate_identifier RdsCluster#ca_certificate_identifier}
  */
  readonly caCertificateIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}
  */
  readonly clusterIdentifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#cluster_members RdsCluster#cluster_members}
  */
  readonly clusterMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#database_name RdsCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}
  */
  readonly dbClusterInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}
  */
  readonly dbClusterParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}
  */
  readonly dbInstanceParameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#db_system_id RdsCluster#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#delete_automated_backups RdsCluster#delete_automated_backups}
  */
  readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#deletion_protection RdsCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#domain RdsCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#domain_iam_role_name RdsCluster#domain_iam_role_name}
  */
  readonly domainIamRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}
  */
  readonly enableGlobalWriteForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}
  */
  readonly enableHttpEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#enable_local_write_forwarding RdsCluster#enable_local_write_forwarding}
  */
  readonly enableLocalWriteForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}
  */
  readonly enabledCloudwatchLogsExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#engine RdsCluster#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#engine_lifecycle_support RdsCluster#engine_lifecycle_support}
  */
  readonly engineLifecycleSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#engine_mode RdsCluster#engine_mode}
  */
  readonly engineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#engine_version RdsCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}
  */
  readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#iam_roles RdsCluster#iam_roles}
  */
  readonly iamRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#id RdsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#iops RdsCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#kms_key_id RdsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#manage_master_user_password RdsCluster#manage_master_user_password}
  */
  readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#master_password RdsCluster#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#master_user_secret_kms_key_id RdsCluster#master_user_secret_kms_key_id}
  */
  readonly masterUserSecretKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#master_username RdsCluster#master_username}
  */
  readonly masterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#network_type RdsCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#port RdsCluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}
  */
  readonly replicationSourceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#source_region RdsCluster#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#storage_type RdsCluster#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#tags RdsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#tags_all RdsCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * restore_to_point_in_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#restore_to_point_in_time RdsCluster#restore_to_point_in_time}
  */
  readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime;
  /**
  * s3_import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#s3_import RdsCluster#s3_import}
  */
  readonly s3Import?: RdsClusterS3Import;
  /**
  * scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#scaling_configuration RdsCluster#scaling_configuration}
  */
  readonly scalingConfiguration?: RdsClusterScalingConfiguration;
  /**
  * serverlessv2_scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#serverlessv2_scaling_configuration RdsCluster#serverlessv2_scaling_configuration}
  */
  readonly serverlessv2ScalingConfiguration?: RdsClusterServerlessv2ScalingConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#timeouts RdsCluster#timeouts}
  */
  readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterMasterUserSecret {
}

export function rdsClusterMasterUserSecretToTerraform(struct?: RdsClusterMasterUserSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rdsClusterMasterUserSecretToHclTerraform(struct?: RdsClusterMasterUserSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RdsClusterMasterUserSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsClusterMasterUserSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsClusterMasterUserSecret | undefined) {
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

export class RdsClusterMasterUserSecretList extends cdktf.ComplexList {

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
  public get(index: number): RdsClusterMasterUserSecretOutputReference {
    return new RdsClusterMasterUserSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsClusterRestoreToPointInTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#restore_to_time RdsCluster#restore_to_time}
  */
  readonly restoreToTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#restore_type RdsCluster#restore_type}
  */
  readonly restoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}
  */
  readonly sourceClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}

export function rdsClusterRestoreToPointInTimeToTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any {
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


export function rdsClusterRestoreToPointInTimeToHclTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any {
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

export class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsClusterRestoreToPointInTime | undefined {
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

  public set internalValue(value: RdsClusterRestoreToPointInTime | undefined) {
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
export interface RdsClusterS3Import {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#bucket_name RdsCluster#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#ingestion_role RdsCluster#ingestion_role}
  */
  readonly ingestionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#source_engine RdsCluster#source_engine}
  */
  readonly sourceEngine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#source_engine_version RdsCluster#source_engine_version}
  */
  readonly sourceEngineVersion: string;
}

export function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
    source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
    source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
  }
}


export function rdsClusterS3ImportToHclTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_role: {
      value: cdktf.stringToHclTerraform(struct!.ingestionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_engine: {
      value: cdktf.stringToHclTerraform(struct!.sourceEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_engine_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsClusterS3Import | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._ingestionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionRole = this._ingestionRole;
    }
    if (this._sourceEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEngine = this._sourceEngine;
    }
    if (this._sourceEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEngineVersion = this._sourceEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsClusterS3Import | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._ingestionRole = undefined;
      this._sourceEngine = undefined;
      this._sourceEngineVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._ingestionRole = value.ingestionRole;
      this._sourceEngine = value.sourceEngine;
      this._sourceEngineVersion = value.sourceEngineVersion;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // ingestion_role - computed: false, optional: false, required: true
  private _ingestionRole?: string; 
  public get ingestionRole() {
    return this.getStringAttribute('ingestion_role');
  }
  public set ingestionRole(value: string) {
    this._ingestionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionRoleInput() {
    return this._ingestionRole;
  }

  // source_engine - computed: false, optional: false, required: true
  private _sourceEngine?: string; 
  public get sourceEngine() {
    return this.getStringAttribute('source_engine');
  }
  public set sourceEngine(value: string) {
    this._sourceEngine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEngineInput() {
    return this._sourceEngine;
  }

  // source_engine_version - computed: false, optional: false, required: true
  private _sourceEngineVersion?: string; 
  public get sourceEngineVersion() {
    return this.getStringAttribute('source_engine_version');
  }
  public set sourceEngineVersion(value: string) {
    this._sourceEngineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEngineVersionInput() {
    return this._sourceEngineVersion;
  }
}
export interface RdsClusterScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#auto_pause RdsCluster#auto_pause}
  */
  readonly autoPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#seconds_before_timeout RdsCluster#seconds_before_timeout}
  */
  readonly secondsBeforeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}
  */
  readonly secondsUntilAutoPause?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#timeout_action RdsCluster#timeout_action}
  */
  readonly timeoutAction?: string;
}

export function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seconds_before_timeout: cdktf.numberToTerraform(struct!.secondsBeforeTimeout),
    seconds_until_auto_pause: cdktf.numberToTerraform(struct!.secondsUntilAutoPause),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}


export function rdsClusterScalingConfigurationToHclTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pause: {
      value: cdktf.booleanToHclTerraform(struct!.autoPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_before_timeout: {
      value: cdktf.numberToHclTerraform(struct!.secondsBeforeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_until_auto_pause: {
      value: cdktf.numberToHclTerraform(struct!.secondsUntilAutoPause),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsClusterScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPause = this._autoPause;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._secondsBeforeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsBeforeTimeout = this._secondsBeforeTimeout;
    }
    if (this._secondsUntilAutoPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsClusterScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPause = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._secondsBeforeTimeout = undefined;
      this._secondsUntilAutoPause = undefined;
      this._timeoutAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPause = value.autoPause;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._secondsBeforeTimeout = value.secondsBeforeTimeout;
      this._secondsUntilAutoPause = value.secondsUntilAutoPause;
      this._timeoutAction = value.timeoutAction;
    }
  }

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: boolean | cdktf.IResolvable; 
  public get autoPause() {
    return this.getBooleanAttribute('auto_pause');
  }
  public set autoPause(value: boolean | cdktf.IResolvable) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seconds_before_timeout - computed: false, optional: true, required: false
  private _secondsBeforeTimeout?: number; 
  public get secondsBeforeTimeout() {
    return this.getNumberAttribute('seconds_before_timeout');
  }
  public set secondsBeforeTimeout(value: number) {
    this._secondsBeforeTimeout = value;
  }
  public resetSecondsBeforeTimeout() {
    this._secondsBeforeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsBeforeTimeoutInput() {
    return this._secondsBeforeTimeout;
  }

  // seconds_until_auto_pause - computed: false, optional: true, required: false
  private _secondsUntilAutoPause?: number; 
  public get secondsUntilAutoPause() {
    return this.getNumberAttribute('seconds_until_auto_pause');
  }
  public set secondsUntilAutoPause(value: number) {
    this._secondsUntilAutoPause = value;
  }
  public resetSecondsUntilAutoPause() {
    this._secondsUntilAutoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsUntilAutoPauseInput() {
    return this._secondsUntilAutoPause;
  }

  // timeout_action - computed: false, optional: true, required: false
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  public resetTimeoutAction() {
    this._timeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }
}
export interface RdsClusterServerlessv2ScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}
  */
  readonly minCapacity: number;
}

export function rdsClusterServerlessv2ScalingConfigurationToTerraform(struct?: RdsClusterServerlessv2ScalingConfigurationOutputReference | RdsClusterServerlessv2ScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


export function rdsClusterServerlessv2ScalingConfigurationToHclTerraform(struct?: RdsClusterServerlessv2ScalingConfigurationOutputReference | RdsClusterServerlessv2ScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsClusterServerlessv2ScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsClusterServerlessv2ScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsClusterServerlessv2ScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }
}
export interface RdsClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#create RdsCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#delete RdsCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#update RdsCluster#update}
  */
  readonly update?: string;
}

export function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeouts | cdktf.IResolvable): any {
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


export function rdsClusterTimeoutsToHclTerraform(struct?: RdsClusterTimeouts | cdktf.IResolvable): any {
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

export class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster aws_rds_cluster}
*/
export class RdsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsCluster to import
  * @param importFromId The id of the existing RdsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/rds_cluster aws_rds_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RdsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.60.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedStorage = config.allocatedStorage;
    this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
    this._applyImmediately = config.applyImmediately;
    this._availabilityZones = config.availabilityZones;
    this._backtrackWindow = config.backtrackWindow;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._caCertificateIdentifier = config.caCertificateIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
    this._clusterMembers = config.clusterMembers;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._databaseName = config.databaseName;
    this._dbClusterInstanceClass = config.dbClusterInstanceClass;
    this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
    this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._dbSystemId = config.dbSystemId;
    this._deleteAutomatedBackups = config.deleteAutomatedBackups;
    this._deletionProtection = config.deletionProtection;
    this._domain = config.domain;
    this._domainIamRoleName = config.domainIamRoleName;
    this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
    this._enableHttpEndpoint = config.enableHttpEndpoint;
    this._enableLocalWriteForwarding = config.enableLocalWriteForwarding;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineLifecycleSupport = config.engineLifecycleSupport;
    this._engineMode = config.engineMode;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
    this._iamRoles = config.iamRoles;
    this._id = config.id;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._manageMasterUserPassword = config.manageMasterUserPassword;
    this._masterPassword = config.masterPassword;
    this._masterUserSecretKmsKeyId = config.masterUserSecretKmsKeyId;
    this._masterUsername = config.masterUsername;
    this._networkType = config.networkType;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._replicationSourceIdentifier = config.replicationSourceIdentifier;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._sourceRegion = config.sourceRegion;
    this._storageEncrypted = config.storageEncrypted;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
    this._s3Import.internalValue = config.s3Import;
    this._scalingConfiguration.internalValue = config.scalingConfiguration;
    this._serverlessv2ScalingConfiguration.internalValue = config.serverlessv2ScalingConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number; 
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage;
  }

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

  // apply_immediately - computed: true, optional: true, required: false
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

  // backtrack_window - computed: false, optional: true, required: false
  private _backtrackWindow?: number; 
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }
  public set backtrackWindow(value: number) {
    this._backtrackWindow = value;
  }
  public resetBacktrackWindow() {
    this._backtrackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackWindowInput() {
    return this._backtrackWindow;
  }

  // backup_retention_period - computed: true, optional: true, required: false
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

  // ca_certificate_identifier - computed: true, optional: true, required: false
  private _caCertificateIdentifier?: string; 
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }
  public set caCertificateIdentifier(value: string) {
    this._caCertificateIdentifier = value;
  }
  public resetCaCertificateIdentifier() {
    this._caCertificateIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdentifierInput() {
    return this._caCertificateIdentifier;
  }

  // ca_certificate_valid_till - computed: true, optional: false, required: false
  public get caCertificateValidTill() {
    return this.getStringAttribute('ca_certificate_valid_till');
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

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot;
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

  // db_cluster_instance_class - computed: false, optional: true, required: false
  private _dbClusterInstanceClass?: string; 
  public get dbClusterInstanceClass() {
    return this.getStringAttribute('db_cluster_instance_class');
  }
  public set dbClusterInstanceClass(value: string) {
    this._dbClusterInstanceClass = value;
  }
  public resetDbClusterInstanceClass() {
    this._dbClusterInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterInstanceClassInput() {
    return this._dbClusterInstanceClass;
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

  // db_instance_parameter_group_name - computed: false, optional: true, required: false
  private _dbInstanceParameterGroupName?: string; 
  public get dbInstanceParameterGroupName() {
    return this.getStringAttribute('db_instance_parameter_group_name');
  }
  public set dbInstanceParameterGroupName(value: string) {
    this._dbInstanceParameterGroupName = value;
  }
  public resetDbInstanceParameterGroupName() {
    this._dbInstanceParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceParameterGroupNameInput() {
    return this._dbInstanceParameterGroupName;
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

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // delete_automated_backups - computed: false, optional: true, required: false
  private _deleteAutomatedBackups?: boolean | cdktf.IResolvable; 
  public get deleteAutomatedBackups() {
    return this.getBooleanAttribute('delete_automated_backups');
  }
  public set deleteAutomatedBackups(value: boolean | cdktf.IResolvable) {
    this._deleteAutomatedBackups = value;
  }
  public resetDeleteAutomatedBackups() {
    this._deleteAutomatedBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutomatedBackupsInput() {
    return this._deleteAutomatedBackups;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_iam_role_name - computed: false, optional: true, required: false
  private _domainIamRoleName?: string; 
  public get domainIamRoleName() {
    return this.getStringAttribute('domain_iam_role_name');
  }
  public set domainIamRoleName(value: string) {
    this._domainIamRoleName = value;
  }
  public resetDomainIamRoleName() {
    this._domainIamRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIamRoleNameInput() {
    return this._domainIamRoleName;
  }

  // enable_global_write_forwarding - computed: false, optional: true, required: false
  private _enableGlobalWriteForwarding?: boolean | cdktf.IResolvable; 
  public get enableGlobalWriteForwarding() {
    return this.getBooleanAttribute('enable_global_write_forwarding');
  }
  public set enableGlobalWriteForwarding(value: boolean | cdktf.IResolvable) {
    this._enableGlobalWriteForwarding = value;
  }
  public resetEnableGlobalWriteForwarding() {
    this._enableGlobalWriteForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGlobalWriteForwardingInput() {
    return this._enableGlobalWriteForwarding;
  }

  // enable_http_endpoint - computed: false, optional: true, required: false
  private _enableHttpEndpoint?: boolean | cdktf.IResolvable; 
  public get enableHttpEndpoint() {
    return this.getBooleanAttribute('enable_http_endpoint');
  }
  public set enableHttpEndpoint(value: boolean | cdktf.IResolvable) {
    this._enableHttpEndpoint = value;
  }
  public resetEnableHttpEndpoint() {
    this._enableHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpEndpointInput() {
    return this._enableHttpEndpoint;
  }

  // enable_local_write_forwarding - computed: false, optional: true, required: false
  private _enableLocalWriteForwarding?: boolean | cdktf.IResolvable; 
  public get enableLocalWriteForwarding() {
    return this.getBooleanAttribute('enable_local_write_forwarding');
  }
  public set enableLocalWriteForwarding(value: boolean | cdktf.IResolvable) {
    this._enableLocalWriteForwarding = value;
  }
  public resetEnableLocalWriteForwarding() {
    this._enableLocalWriteForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalWriteForwardingInput() {
    return this._enableLocalWriteForwarding;
  }

  // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enabledCloudwatchLogsExports?: string[]; 
  public get enabledCloudwatchLogsExports() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_cloudwatch_logs_exports'));
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

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_lifecycle_support - computed: true, optional: true, required: false
  private _engineLifecycleSupport?: string; 
  public get engineLifecycleSupport() {
    return this.getStringAttribute('engine_lifecycle_support');
  }
  public set engineLifecycleSupport(value: string) {
    this._engineLifecycleSupport = value;
  }
  public resetEngineLifecycleSupport() {
    this._engineLifecycleSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineLifecycleSupportInput() {
    return this._engineLifecycleSupport;
  }

  // engine_mode - computed: false, optional: true, required: false
  private _engineMode?: string; 
  public get engineMode() {
    return this.getStringAttribute('engine_mode');
  }
  public set engineMode(value: string) {
    this._engineMode = value;
  }
  public resetEngineMode() {
    this._engineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineModeInput() {
    return this._engineMode;
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

  // engine_version_actual - computed: true, optional: false, required: false
  public get engineVersionActual() {
    return this.getStringAttribute('engine_version_actual');
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

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._iamDatabaseAuthenticationEnabled = value;
  }
  public resetIamDatabaseAuthenticationEnabled() {
    this._iamDatabaseAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDatabaseAuthenticationEnabledInput() {
    return this._iamDatabaseAuthenticationEnabled;
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // master_user_secret - computed: true, optional: false, required: false
  private _masterUserSecret = new RdsClusterMasterUserSecretList(this, "master_user_secret", false);
  public get masterUserSecret() {
    return this._masterUserSecret;
  }

  // master_user_secret_kms_key_id - computed: true, optional: true, required: false
  private _masterUserSecretKmsKeyId?: string; 
  public get masterUserSecretKmsKeyId() {
    return this.getStringAttribute('master_user_secret_kms_key_id');
  }
  public set masterUserSecretKmsKeyId(value: string) {
    this._masterUserSecretKmsKeyId = value;
  }
  public resetMasterUserSecretKmsKeyId() {
    this._masterUserSecretKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserSecretKmsKeyIdInput() {
    return this._masterUserSecretKmsKeyId;
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

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // port - computed: true, optional: true, required: false
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

  // replication_source_identifier - computed: false, optional: true, required: false
  private _replicationSourceIdentifier?: string; 
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }
  public set replicationSourceIdentifier(value: string) {
    this._replicationSourceIdentifier = value;
  }
  public resetReplicationSourceIdentifier() {
    this._replicationSourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceIdentifierInput() {
    return this._replicationSourceIdentifier;
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

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string; 
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }
  public resetSourceRegion() {
    this._sourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion;
  }

  // storage_encrypted - computed: true, optional: true, required: false
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

  // storage_type - computed: true, optional: true, required: false
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
  private _restoreToPointInTime = new RdsClusterRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time");
  public get restoreToPointInTime() {
    return this._restoreToPointInTime;
  }
  public putRestoreToPointInTime(value: RdsClusterRestoreToPointInTime) {
    this._restoreToPointInTime.internalValue = value;
  }
  public resetRestoreToPointInTime() {
    this._restoreToPointInTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToPointInTimeInput() {
    return this._restoreToPointInTime.internalValue;
  }

  // s3_import - computed: false, optional: true, required: false
  private _s3Import = new RdsClusterS3ImportOutputReference(this, "s3_import");
  public get s3Import() {
    return this._s3Import;
  }
  public putS3Import(value: RdsClusterS3Import) {
    this._s3Import.internalValue = value;
  }
  public resetS3Import() {
    this._s3Import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ImportInput() {
    return this._s3Import.internalValue;
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration = new RdsClusterScalingConfigurationOutputReference(this, "scaling_configuration");
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }
  public putScalingConfiguration(value: RdsClusterScalingConfiguration) {
    this._scalingConfiguration.internalValue = value;
  }
  public resetScalingConfiguration() {
    this._scalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationInput() {
    return this._scalingConfiguration.internalValue;
  }

  // serverlessv2_scaling_configuration - computed: false, optional: true, required: false
  private _serverlessv2ScalingConfiguration = new RdsClusterServerlessv2ScalingConfigurationOutputReference(this, "serverlessv2_scaling_configuration");
  public get serverlessv2ScalingConfiguration() {
    return this._serverlessv2ScalingConfiguration;
  }
  public putServerlessv2ScalingConfiguration(value: RdsClusterServerlessv2ScalingConfiguration) {
    this._serverlessv2ScalingConfiguration.internalValue = value;
  }
  public resetServerlessv2ScalingConfiguration() {
    this._serverlessv2ScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessv2ScalingConfigurationInput() {
    return this._serverlessv2ScalingConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsClusterTimeouts) {
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
      allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
      allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      ca_certificate_identifier: cdktf.stringToTerraform(this._caCertificateIdentifier),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
      cluster_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterMembers),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_cluster_instance_class: cdktf.stringToTerraform(this._dbClusterInstanceClass),
      db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
      db_instance_parameter_group_name: cdktf.stringToTerraform(this._dbInstanceParameterGroupName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      db_system_id: cdktf.stringToTerraform(this._dbSystemId),
      delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      domain: cdktf.stringToTerraform(this._domain),
      domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
      enable_global_write_forwarding: cdktf.booleanToTerraform(this._enableGlobalWriteForwarding),
      enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
      enable_local_write_forwarding: cdktf.booleanToTerraform(this._enableLocalWriteForwarding),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_lifecycle_support: cdktf.stringToTerraform(this._engineLifecycleSupport),
      engine_mode: cdktf.stringToTerraform(this._engineMode),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamRoles),
      id: cdktf.stringToTerraform(this._id),
      iops: cdktf.numberToTerraform(this._iops),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      manage_master_user_password: cdktf.booleanToTerraform(this._manageMasterUserPassword),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_user_secret_kms_key_id: cdktf.stringToTerraform(this._masterUserSecretKmsKeyId),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      network_type: cdktf.stringToTerraform(this._networkType),
      port: cdktf.numberToTerraform(this._port),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      restore_to_point_in_time: rdsClusterRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
      s3_import: rdsClusterS3ImportToTerraform(this._s3Import.internalValue),
      scaling_configuration: rdsClusterScalingConfigurationToTerraform(this._scalingConfiguration.internalValue),
      serverlessv2_scaling_configuration: rdsClusterServerlessv2ScalingConfigurationToTerraform(this._serverlessv2ScalingConfiguration.internalValue),
      timeouts: rdsClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_storage: {
        value: cdktf.numberToHclTerraform(this._allocatedStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      backtrack_window: {
        value: cdktf.numberToHclTerraform(this._backtrackWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_certificate_identifier: {
        value: cdktf.stringToHclTerraform(this._caCertificateIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      copy_tags_to_snapshot: {
        value: cdktf.booleanToHclTerraform(this._copyTagsToSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbClusterInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._dbClusterParameterGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_parameter_group_name: {
        value: cdktf.stringToHclTerraform(this._dbInstanceParameterGroupName),
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
      db_system_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_automated_backups: {
        value: cdktf.booleanToHclTerraform(this._deleteAutomatedBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_iam_role_name: {
        value: cdktf.stringToHclTerraform(this._domainIamRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_global_write_forwarding: {
        value: cdktf.booleanToHclTerraform(this._enableGlobalWriteForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_http_endpoint: {
        value: cdktf.booleanToHclTerraform(this._enableHttpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_local_write_forwarding: {
        value: cdktf.booleanToHclTerraform(this._enableLocalWriteForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_cloudwatch_logs_exports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledCloudwatchLogsExports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_lifecycle_support: {
        value: cdktf.stringToHclTerraform(this._engineLifecycleSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_mode: {
        value: cdktf.stringToHclTerraform(this._engineMode),
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
      iam_database_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._iamDatabaseAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      master_user_secret_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._masterUserSecretKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_username: {
        value: cdktf.stringToHclTerraform(this._masterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
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
      replication_source_identifier: {
        value: cdktf.stringToHclTerraform(this._replicationSourceIdentifier),
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
      source_region: {
        value: cdktf.stringToHclTerraform(this._sourceRegion),
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
        value: rdsClusterRestoreToPointInTimeToHclTerraform(this._restoreToPointInTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsClusterRestoreToPointInTimeList",
      },
      s3_import: {
        value: rdsClusterS3ImportToHclTerraform(this._s3Import.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsClusterS3ImportList",
      },
      scaling_configuration: {
        value: rdsClusterScalingConfigurationToHclTerraform(this._scalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsClusterScalingConfigurationList",
      },
      serverlessv2_scaling_configuration: {
        value: rdsClusterServerlessv2ScalingConfigurationToHclTerraform(this._serverlessv2ScalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsClusterServerlessv2ScalingConfigurationList",
      },
      timeouts: {
        value: rdsClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
