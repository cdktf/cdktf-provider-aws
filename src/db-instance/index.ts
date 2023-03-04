// https://www.terraform.io/docs/providers/aws/r/db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}
  */
  readonly backupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}
  */
  readonly caCertIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}
  */
  readonly customIamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}
  */
  readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}
  */
  readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}
  */
  readonly domainIamRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}
  */
  readonly enabledCloudwatchLogsExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}
  */
  readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}
  */
  readonly identifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}
  */
  readonly maxAllocatedStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}
  */
  readonly monitoringInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}
  */
  readonly monitoringRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}
  */
  readonly ncharCharacterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}
  */
  readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}
  */
  readonly performanceInsightsRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}
  */
  readonly replicaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}
  */
  readonly replicateSourceDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}
  */
  readonly storageThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * blue_green_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}
  */
  readonly blueGreenUpdate?: DbInstanceBlueGreenUpdate;
  /**
  * restore_to_point_in_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}
  */
  readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime;
  /**
  * s3_import block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}
  */
  readonly s3Import?: DbInstanceS3Import;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}
  */
  readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceBlueGreenUpdate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dbInstanceBlueGreenUpdateToTerraform(struct?: DbInstanceBlueGreenUpdateOutputReference | DbInstanceBlueGreenUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DbInstanceBlueGreenUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceBlueGreenUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceBlueGreenUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DbInstanceRestoreToPointInTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}
  */
  readonly sourceDbInstanceAutomatedBackupsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}
  */
  readonly sourceDbInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}
  */
  readonly sourceDbiResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}

export function dbInstanceRestoreToPointInTimeToTerraform(struct?: DbInstanceRestoreToPointInTimeOutputReference | DbInstanceRestoreToPointInTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restore_time: cdktf.stringToTerraform(struct!.restoreTime),
    source_db_instance_automated_backups_arn: cdktf.stringToTerraform(struct!.sourceDbInstanceAutomatedBackupsArn),
    source_db_instance_identifier: cdktf.stringToTerraform(struct!.sourceDbInstanceIdentifier),
    source_dbi_resource_id: cdktf.stringToTerraform(struct!.sourceDbiResourceId),
    use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
  }
}

export class DbInstanceRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceRestoreToPointInTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restoreTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreTime = this._restoreTime;
    }
    if (this._sourceDbInstanceAutomatedBackupsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbInstanceAutomatedBackupsArn = this._sourceDbInstanceAutomatedBackupsArn;
    }
    if (this._sourceDbInstanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbInstanceIdentifier = this._sourceDbInstanceIdentifier;
    }
    if (this._sourceDbiResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbiResourceId = this._sourceDbiResourceId;
    }
    if (this._useLatestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceRestoreToPointInTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restoreTime = undefined;
      this._sourceDbInstanceAutomatedBackupsArn = undefined;
      this._sourceDbInstanceIdentifier = undefined;
      this._sourceDbiResourceId = undefined;
      this._useLatestRestorableTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restoreTime = value.restoreTime;
      this._sourceDbInstanceAutomatedBackupsArn = value.sourceDbInstanceAutomatedBackupsArn;
      this._sourceDbInstanceIdentifier = value.sourceDbInstanceIdentifier;
      this._sourceDbiResourceId = value.sourceDbiResourceId;
      this._useLatestRestorableTime = value.useLatestRestorableTime;
    }
  }

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: string; 
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }
  public set restoreTime(value: string) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }

  // source_db_instance_automated_backups_arn - computed: false, optional: true, required: false
  private _sourceDbInstanceAutomatedBackupsArn?: string; 
  public get sourceDbInstanceAutomatedBackupsArn() {
    return this.getStringAttribute('source_db_instance_automated_backups_arn');
  }
  public set sourceDbInstanceAutomatedBackupsArn(value: string) {
    this._sourceDbInstanceAutomatedBackupsArn = value;
  }
  public resetSourceDbInstanceAutomatedBackupsArn() {
    this._sourceDbInstanceAutomatedBackupsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceAutomatedBackupsArnInput() {
    return this._sourceDbInstanceAutomatedBackupsArn;
  }

  // source_db_instance_identifier - computed: false, optional: true, required: false
  private _sourceDbInstanceIdentifier?: string; 
  public get sourceDbInstanceIdentifier() {
    return this.getStringAttribute('source_db_instance_identifier');
  }
  public set sourceDbInstanceIdentifier(value: string) {
    this._sourceDbInstanceIdentifier = value;
  }
  public resetSourceDbInstanceIdentifier() {
    this._sourceDbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceIdentifierInput() {
    return this._sourceDbInstanceIdentifier;
  }

  // source_dbi_resource_id - computed: false, optional: true, required: false
  private _sourceDbiResourceId?: string; 
  public get sourceDbiResourceId() {
    return this.getStringAttribute('source_dbi_resource_id');
  }
  public set sourceDbiResourceId(value: string) {
    this._sourceDbiResourceId = value;
  }
  public resetSourceDbiResourceId() {
    this._sourceDbiResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbiResourceIdInput() {
    return this._sourceDbiResourceId;
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
export interface DbInstanceS3Import {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}
  */
  readonly ingestionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}
  */
  readonly sourceEngine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}
  */
  readonly sourceEngineVersion: string;
}

export function dbInstanceS3ImportToTerraform(struct?: DbInstanceS3ImportOutputReference | DbInstanceS3Import): any {
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

export class DbInstanceS3ImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceS3Import | undefined {
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

  public set internalValue(value: DbInstanceS3Import | undefined) {
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
export interface DbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}
  */
  readonly update?: string;
}

export function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeoutsOutputReference | DbInstanceTimeouts | cdktf.IResolvable): any {
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

export class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance aws_db_instance}
*/
export class DbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_db_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance aws_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupWindow = config.backupWindow;
    this._caCertIdentifier = config.caCertIdentifier;
    this._characterSetName = config.characterSetName;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._customIamInstanceProfile = config.customIamInstanceProfile;
    this._customerOwnedIpEnabled = config.customerOwnedIpEnabled;
    this._dbName = config.dbName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deleteAutomatedBackups = config.deleteAutomatedBackups;
    this._deletionProtection = config.deletionProtection;
    this._domain = config.domain;
    this._domainIamRoleName = config.domainIamRoleName;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
    this._id = config.id;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._licenseModel = config.licenseModel;
    this._maintenanceWindow = config.maintenanceWindow;
    this._maxAllocatedStorage = config.maxAllocatedStorage;
    this._monitoringInterval = config.monitoringInterval;
    this._monitoringRoleArn = config.monitoringRoleArn;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._ncharCharacterSetName = config.ncharCharacterSetName;
    this._networkType = config.networkType;
    this._optionGroupName = config.optionGroupName;
    this._parameterGroupName = config.parameterGroupName;
    this._password = config.password;
    this._performanceInsightsEnabled = config.performanceInsightsEnabled;
    this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
    this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
    this._port = config.port;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicaMode = config.replicaMode;
    this._replicateSourceDb = config.replicateSourceDb;
    this._securityGroupNames = config.securityGroupNames;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._storageThroughput = config.storageThroughput;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timezone = config.timezone;
    this._username = config.username;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._blueGreenUpdate.internalValue = config.blueGreenUpdate;
    this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
    this._s3Import.internalValue = config.s3Import;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

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

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
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

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string; 
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string) {
    this._backupWindow = value;
  }
  public resetBackupWindow() {
    this._backupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow;
  }

  // ca_cert_identifier - computed: true, optional: true, required: false
  private _caCertIdentifier?: string; 
  public get caCertIdentifier() {
    return this.getStringAttribute('ca_cert_identifier');
  }
  public set caCertIdentifier(value: string) {
    this._caCertIdentifier = value;
  }
  public resetCaCertIdentifier() {
    this._caCertIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertIdentifierInput() {
    return this._caCertIdentifier;
  }

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
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

  // custom_iam_instance_profile - computed: false, optional: true, required: false
  private _customIamInstanceProfile?: string; 
  public get customIamInstanceProfile() {
    return this.getStringAttribute('custom_iam_instance_profile');
  }
  public set customIamInstanceProfile(value: string) {
    this._customIamInstanceProfile = value;
  }
  public resetCustomIamInstanceProfile() {
    this._customIamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIamInstanceProfileInput() {
    return this._customIamInstanceProfile;
  }

  // customer_owned_ip_enabled - computed: false, optional: true, required: false
  private _customerOwnedIpEnabled?: boolean | cdktf.IResolvable; 
  public get customerOwnedIpEnabled() {
    return this.getBooleanAttribute('customer_owned_ip_enabled');
  }
  public set customerOwnedIpEnabled(value: boolean | cdktf.IResolvable) {
    this._customerOwnedIpEnabled = value;
  }
  public resetCustomerOwnedIpEnabled() {
    this._customerOwnedIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpEnabledInput() {
    return this._customerOwnedIpEnabled;
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // engine - computed: true, optional: true, required: false
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string; 
  public get identifierPrefix() {
    return this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string) {
    this._identifierPrefix = value;
  }
  public resetIdentifierPrefix() {
    this._identifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierPrefixInput() {
    return this._identifierPrefix;
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // iops - computed: true, optional: true, required: false
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

  // latest_restorable_time - computed: true, optional: false, required: false
  public get latestRestorableTime() {
    return this.getStringAttribute('latest_restorable_time');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }

  // max_allocated_storage - computed: false, optional: true, required: false
  private _maxAllocatedStorage?: number; 
  public get maxAllocatedStorage() {
    return this.getNumberAttribute('max_allocated_storage');
  }
  public set maxAllocatedStorage(value: number) {
    this._maxAllocatedStorage = value;
  }
  public resetMaxAllocatedStorage() {
    this._maxAllocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllocatedStorageInput() {
    return this._maxAllocatedStorage;
  }

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: number; 
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }
  public set monitoringInterval(value: number) {
    this._monitoringInterval = value;
  }
  public resetMonitoringInterval() {
    this._monitoringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalInput() {
    return this._monitoringInterval;
  }

  // monitoring_role_arn - computed: true, optional: true, required: false
  private _monitoringRoleArn?: string; 
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }
  public set monitoringRoleArn(value: string) {
    this._monitoringRoleArn = value;
  }
  public resetMonitoringRoleArn() {
    this._monitoringRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRoleArnInput() {
    return this._monitoringRoleArn;
  }

  // multi_az - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nchar_character_set_name - computed: true, optional: true, required: false
  private _ncharCharacterSetName?: string; 
  public get ncharCharacterSetName() {
    return this.getStringAttribute('nchar_character_set_name');
  }
  public set ncharCharacterSetName(value: string) {
    this._ncharCharacterSetName = value;
  }
  public resetNcharCharacterSetName() {
    this._ncharCharacterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharCharacterSetNameInput() {
    return this._ncharCharacterSetName;
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

  // option_group_name - computed: true, optional: true, required: false
  private _optionGroupName?: string; 
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string) {
    this._optionGroupName = value;
  }
  public resetOptionGroupName() {
    this._optionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupNameInput() {
    return this._optionGroupName;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // performance_insights_enabled - computed: false, optional: true, required: false
  private _performanceInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }
  public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceInsightsEnabled = value;
  }
  public resetPerformanceInsightsEnabled() {
    this._performanceInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsEnabledInput() {
    return this._performanceInsightsEnabled;
  }

  // performance_insights_kms_key_id - computed: true, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string; 
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string) {
    this._performanceInsightsKmsKeyId = value;
  }
  public resetPerformanceInsightsKmsKeyId() {
    this._performanceInsightsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyIdInput() {
    return this._performanceInsightsKmsKeyId;
  }

  // performance_insights_retention_period - computed: true, optional: true, required: false
  private _performanceInsightsRetentionPeriod?: number; 
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }
  public set performanceInsightsRetentionPeriod(value: number) {
    this._performanceInsightsRetentionPeriod = value;
  }
  public resetPerformanceInsightsRetentionPeriod() {
    this._performanceInsightsRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsRetentionPeriodInput() {
    return this._performanceInsightsRetentionPeriod;
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

  // replica_mode - computed: true, optional: true, required: false
  private _replicaMode?: string; 
  public get replicaMode() {
    return this.getStringAttribute('replica_mode');
  }
  public set replicaMode(value: string) {
    this._replicaMode = value;
  }
  public resetReplicaMode() {
    this._replicaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModeInput() {
    return this._replicaMode;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getListAttribute('replicas');
  }

  // replicate_source_db - computed: false, optional: true, required: false
  private _replicateSourceDb?: string; 
  public get replicateSourceDb() {
    return this.getStringAttribute('replicate_source_db');
  }
  public set replicateSourceDb(value: string) {
    this._replicateSourceDb = value;
  }
  public resetReplicateSourceDb() {
    this._replicateSourceDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateSourceDbInput() {
    return this._replicateSourceDb;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[]; 
  public get securityGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_names'));
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames;
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

  // snapshot_identifier - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // storage_throughput - computed: true, optional: true, required: false
  private _storageThroughput?: number; 
  public get storageThroughput() {
    return this.getNumberAttribute('storage_throughput');
  }
  public set storageThroughput(value: number) {
    this._storageThroughput = value;
  }
  public resetStorageThroughput() {
    this._storageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageThroughputInput() {
    return this._storageThroughput;
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // blue_green_update - computed: false, optional: true, required: false
  private _blueGreenUpdate = new DbInstanceBlueGreenUpdateOutputReference(this, "blue_green_update");
  public get blueGreenUpdate() {
    return this._blueGreenUpdate;
  }
  public putBlueGreenUpdate(value: DbInstanceBlueGreenUpdate) {
    this._blueGreenUpdate.internalValue = value;
  }
  public resetBlueGreenUpdate() {
    this._blueGreenUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdateInput() {
    return this._blueGreenUpdate.internalValue;
  }

  // restore_to_point_in_time - computed: false, optional: true, required: false
  private _restoreToPointInTime = new DbInstanceRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time");
  public get restoreToPointInTime() {
    return this._restoreToPointInTime;
  }
  public putRestoreToPointInTime(value: DbInstanceRestoreToPointInTime) {
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
  private _s3Import = new DbInstanceS3ImportOutputReference(this, "s3_import");
  public get s3Import() {
    return this._s3Import;
  }
  public putS3Import(value: DbInstanceS3Import) {
    this._s3Import.internalValue = value;
  }
  public resetS3Import() {
    this._s3Import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ImportInput() {
    return this._s3Import.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbInstanceTimeouts) {
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
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_window: cdktf.stringToTerraform(this._backupWindow),
      ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      custom_iam_instance_profile: cdktf.stringToTerraform(this._customIamInstanceProfile),
      customer_owned_ip_enabled: cdktf.booleanToTerraform(this._customerOwnedIpEnabled),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      domain: cdktf.stringToTerraform(this._domain),
      domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      iops: cdktf.numberToTerraform(this._iops),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      max_allocated_storage: cdktf.numberToTerraform(this._maxAllocatedStorage),
      monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
      monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      nchar_character_set_name: cdktf.stringToTerraform(this._ncharCharacterSetName),
      network_type: cdktf.stringToTerraform(this._networkType),
      option_group_name: cdktf.stringToTerraform(this._optionGroupName),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      password: cdktf.stringToTerraform(this._password),
      performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
      performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
      performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
      port: cdktf.numberToTerraform(this._port),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      replica_mode: cdktf.stringToTerraform(this._replicaMode),
      replicate_source_db: cdktf.stringToTerraform(this._replicateSourceDb),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupNames),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      storage_throughput: cdktf.numberToTerraform(this._storageThroughput),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timezone: cdktf.stringToTerraform(this._timezone),
      username: cdktf.stringToTerraform(this._username),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      blue_green_update: dbInstanceBlueGreenUpdateToTerraform(this._blueGreenUpdate.internalValue),
      restore_to_point_in_time: dbInstanceRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
      s3_import: dbInstanceS3ImportToTerraform(this._s3Import.internalValue),
      timeouts: dbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
