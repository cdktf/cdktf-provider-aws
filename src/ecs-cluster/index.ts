/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#id EcsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#region EcsCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags EcsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#tags_all EcsCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#configuration EcsCluster#configuration}
  */
  readonly configuration?: EcsClusterConfiguration;
  /**
  * service_connect_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}
  */
  readonly serviceConnectDefaults?: EcsClusterServiceConnectDefaults;
  /**
  * setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#setting EcsCluster#setting}
  */
  readonly setting?: EcsClusterSetting[] | cdktf.IResolvable;
}
export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}
  */
  readonly cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}
  */
  readonly cloudWatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}
  */
  readonly s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

export function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_encryption_enabled: cdktf.booleanToTerraform(struct!.cloudWatchEncryptionEnabled),
    cloud_watch_log_group_name: cdktf.stringToTerraform(struct!.cloudWatchLogGroupName),
    s3_bucket_encryption_enabled: cdktf.booleanToTerraform(struct!.s3BucketEncryptionEnabled),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}


export function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToHclTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudWatchEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_watch_log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudWatchLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.s3BucketEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3KeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchEncryptionEnabled = this._cloudWatchEncryptionEnabled;
    }
    if (this._cloudWatchLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogGroupName = this._cloudWatchLogGroupName;
    }
    if (this._s3BucketEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketEncryptionEnabled = this._s3BucketEncryptionEnabled;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudWatchEncryptionEnabled = undefined;
      this._cloudWatchLogGroupName = undefined;
      this._s3BucketEncryptionEnabled = undefined;
      this._s3BucketName = undefined;
      this._s3KeyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudWatchEncryptionEnabled = value.cloudWatchEncryptionEnabled;
      this._cloudWatchLogGroupName = value.cloudWatchLogGroupName;
      this._s3BucketEncryptionEnabled = value.s3BucketEncryptionEnabled;
      this._s3BucketName = value.s3BucketName;
      this._s3KeyPrefix = value.s3KeyPrefix;
    }
  }

  // cloud_watch_encryption_enabled - computed: false, optional: true, required: false
  private _cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get cloudWatchEncryptionEnabled() {
    return this.getBooleanAttribute('cloud_watch_encryption_enabled');
  }
  public set cloudWatchEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudWatchEncryptionEnabled = value;
  }
  public resetCloudWatchEncryptionEnabled() {
    this._cloudWatchEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchEncryptionEnabledInput() {
    return this._cloudWatchEncryptionEnabled;
  }

  // cloud_watch_log_group_name - computed: false, optional: true, required: false
  private _cloudWatchLogGroupName?: string; 
  public get cloudWatchLogGroupName() {
    return this.getStringAttribute('cloud_watch_log_group_name');
  }
  public set cloudWatchLogGroupName(value: string) {
    this._cloudWatchLogGroupName = value;
  }
  public resetCloudWatchLogGroupName() {
    this._cloudWatchLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogGroupNameInput() {
    return this._cloudWatchLogGroupName;
  }

  // s3_bucket_encryption_enabled - computed: false, optional: true, required: false
  private _s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get s3BucketEncryptionEnabled() {
    return this.getBooleanAttribute('s3_bucket_encryption_enabled');
  }
  public set s3BucketEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._s3BucketEncryptionEnabled = value;
  }
  public resetS3BucketEncryptionEnabled() {
    this._s3BucketEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketEncryptionEnabledInput() {
    return this._s3BucketEncryptionEnabled;
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
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
    return this._s3KeyPrefix;
  }
}
export interface EcsClusterConfigurationExecuteCommandConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#logging EcsCluster#logging}
  */
  readonly logging?: string;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#log_configuration EcsCluster#log_configuration}
  */
  readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
}

export function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    logging: cdktf.stringToTerraform(struct!.logging),
    log_configuration: ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
  }
}


export function ecsClusterConfigurationExecuteCommandConfigurationToHclTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_configuration: {
      value: ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToHclTerraform(struct!.logConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterConfigurationExecuteCommandConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsClusterConfigurationExecuteCommandConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfigurationExecuteCommandConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._logging = undefined;
      this._logConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._logging = value.logging;
      this._logConfiguration.internalValue = value.logConfiguration;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }
}
export interface EcsClusterConfigurationManagedStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id EcsCluster#fargate_ephemeral_storage_kms_key_id}
  */
  readonly fargateEphemeralStorageKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#kms_key_id EcsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function ecsClusterConfigurationManagedStorageConfigurationToTerraform(struct?: EcsClusterConfigurationManagedStorageConfigurationOutputReference | EcsClusterConfigurationManagedStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fargate_ephemeral_storage_kms_key_id: cdktf.stringToTerraform(struct!.fargateEphemeralStorageKmsKeyId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function ecsClusterConfigurationManagedStorageConfigurationToHclTerraform(struct?: EcsClusterConfigurationManagedStorageConfigurationOutputReference | EcsClusterConfigurationManagedStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fargate_ephemeral_storage_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.fargateEphemeralStorageKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterConfigurationManagedStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsClusterConfigurationManagedStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fargateEphemeralStorageKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fargateEphemeralStorageKmsKeyId = this._fargateEphemeralStorageKmsKeyId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfigurationManagedStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fargateEphemeralStorageKmsKeyId = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fargateEphemeralStorageKmsKeyId = value.fargateEphemeralStorageKmsKeyId;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // fargate_ephemeral_storage_kms_key_id - computed: false, optional: true, required: false
  private _fargateEphemeralStorageKmsKeyId?: string; 
  public get fargateEphemeralStorageKmsKeyId() {
    return this.getStringAttribute('fargate_ephemeral_storage_kms_key_id');
  }
  public set fargateEphemeralStorageKmsKeyId(value: string) {
    this._fargateEphemeralStorageKmsKeyId = value;
  }
  public resetFargateEphemeralStorageKmsKeyId() {
    this._fargateEphemeralStorageKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fargateEphemeralStorageKmsKeyIdInput() {
    return this._fargateEphemeralStorageKmsKeyId;
  }

  // kms_key_id - computed: false, optional: true, required: false
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
}
export interface EcsClusterConfiguration {
  /**
  * execute_command_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}
  */
  readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
  /**
  * managed_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#managed_storage_configuration EcsCluster#managed_storage_configuration}
  */
  readonly managedStorageConfiguration?: EcsClusterConfigurationManagedStorageConfiguration;
}

export function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_command_configuration: ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct!.executeCommandConfiguration),
    managed_storage_configuration: ecsClusterConfigurationManagedStorageConfigurationToTerraform(struct!.managedStorageConfiguration),
  }
}


export function ecsClusterConfigurationToHclTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_command_configuration: {
      value: ecsClusterConfigurationExecuteCommandConfigurationToHclTerraform(struct!.executeCommandConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsClusterConfigurationExecuteCommandConfigurationList",
    },
    managed_storage_configuration: {
      value: ecsClusterConfigurationManagedStorageConfigurationToHclTerraform(struct!.managedStorageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsClusterConfigurationManagedStorageConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsClusterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeCommandConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeCommandConfiguration = this._executeCommandConfiguration?.internalValue;
    }
    if (this._managedStorageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedStorageConfiguration = this._managedStorageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeCommandConfiguration.internalValue = undefined;
      this._managedStorageConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeCommandConfiguration.internalValue = value.executeCommandConfiguration;
      this._managedStorageConfiguration.internalValue = value.managedStorageConfiguration;
    }
  }

  // execute_command_configuration - computed: false, optional: true, required: false
  private _executeCommandConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationOutputReference(this, "execute_command_configuration");
  public get executeCommandConfiguration() {
    return this._executeCommandConfiguration;
  }
  public putExecuteCommandConfiguration(value: EcsClusterConfigurationExecuteCommandConfiguration) {
    this._executeCommandConfiguration.internalValue = value;
  }
  public resetExecuteCommandConfiguration() {
    this._executeCommandConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeCommandConfigurationInput() {
    return this._executeCommandConfiguration.internalValue;
  }

  // managed_storage_configuration - computed: false, optional: true, required: false
  private _managedStorageConfiguration = new EcsClusterConfigurationManagedStorageConfigurationOutputReference(this, "managed_storage_configuration");
  public get managedStorageConfiguration() {
    return this._managedStorageConfiguration;
  }
  public putManagedStorageConfiguration(value: EcsClusterConfigurationManagedStorageConfiguration) {
    this._managedStorageConfiguration.internalValue = value;
  }
  public resetManagedStorageConfiguration() {
    this._managedStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStorageConfigurationInput() {
    return this._managedStorageConfiguration.internalValue;
  }
}
export interface EcsClusterServiceConnectDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#namespace EcsCluster#namespace}
  */
  readonly namespace: string;
}

export function ecsClusterServiceConnectDefaultsToTerraform(struct?: EcsClusterServiceConnectDefaultsOutputReference | EcsClusterServiceConnectDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function ecsClusterServiceConnectDefaultsToHclTerraform(struct?: EcsClusterServiceConnectDefaultsOutputReference | EcsClusterServiceConnectDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterServiceConnectDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsClusterServiceConnectDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterServiceConnectDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface EcsClusterSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#name EcsCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#value EcsCluster#value}
  */
  readonly value: string;
}

export function ecsClusterSettingToTerraform(struct?: EcsClusterSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ecsClusterSettingToHclTerraform(struct?: EcsClusterSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsClusterSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsClusterSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EcsClusterSettingList extends cdktf.ComplexList {
  public internalValue? : EcsClusterSetting[] | cdktf.IResolvable

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
  public get(index: number): EcsClusterSettingOutputReference {
    return new EcsClusterSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster aws_ecs_cluster}
*/
export class EcsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsCluster to import
  * @param importFromId The id of the existing EcsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ecs_cluster aws_ecs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
    this._serviceConnectDefaults.internalValue = config.serviceConnectDefaults;
    this._setting.internalValue = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
    return this._name;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new EcsClusterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EcsClusterConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // service_connect_defaults - computed: false, optional: true, required: false
  private _serviceConnectDefaults = new EcsClusterServiceConnectDefaultsOutputReference(this, "service_connect_defaults");
  public get serviceConnectDefaults() {
    return this._serviceConnectDefaults;
  }
  public putServiceConnectDefaults(value: EcsClusterServiceConnectDefaults) {
    this._serviceConnectDefaults.internalValue = value;
  }
  public resetServiceConnectDefaults() {
    this._serviceConnectDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectDefaultsInput() {
    return this._serviceConnectDefaults.internalValue;
  }

  // setting - computed: false, optional: true, required: false
  private _setting = new EcsClusterSettingList(this, "setting", true);
  public get setting() {
    return this._setting;
  }
  public putSetting(value: EcsClusterSetting[] | cdktf.IResolvable) {
    this._setting.internalValue = value;
  }
  public resetSetting() {
    this._setting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      configuration: ecsClusterConfigurationToTerraform(this._configuration.internalValue),
      service_connect_defaults: ecsClusterServiceConnectDefaultsToTerraform(this._serviceConnectDefaults.internalValue),
      setting: cdktf.listMapper(ecsClusterSettingToTerraform, true)(this._setting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      configuration: {
        value: ecsClusterConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsClusterConfigurationList",
      },
      service_connect_defaults: {
        value: ecsClusterServiceConnectDefaultsToHclTerraform(this._serviceConnectDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsClusterServiceConnectDefaultsList",
      },
      setting: {
        value: cdktf.listMapperHcl(ecsClusterSettingToHclTerraform, true)(this._setting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsClusterSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
