// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}
  */
  readonly capacityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags EcsCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags_all EcsCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#configuration EcsCluster#configuration}
  */
  readonly configuration?: EcsClusterConfiguration;
  /**
  * default_capacity_provider_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
  */
  readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  /**
  * setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#setting EcsCluster#setting}
  */
  readonly setting?: EcsClusterSetting[];
}
export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}
  */
  readonly cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}
  */
  readonly cloudWatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}
  */
  readonly s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_name EcsCluster#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_key_prefix EcsCluster#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

export function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cloudWatchEncryptionEnabled) {
      hasAnyValues = true;
      internalValueResult.cloudWatchEncryptionEnabled = this._cloudWatchEncryptionEnabled;
    }
    if (this._cloudWatchLogGroupName) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogGroupName = this._cloudWatchLogGroupName;
    }
    if (this._s3BucketEncryptionEnabled) {
      hasAnyValues = true;
      internalValueResult.s3BucketEncryptionEnabled = this._s3BucketEncryptionEnabled;
    }
    if (this._s3BucketName) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3KeyPrefix) {
      hasAnyValues = true;
      internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this._cloudWatchEncryptionEnabled = undefined;
      this._cloudWatchLogGroupName = undefined;
      this._s3BucketEncryptionEnabled = undefined;
      this._s3BucketName = undefined;
      this._s3KeyPrefix = undefined;
    }
    else {
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
    return this.getBooleanAttribute('cloud_watch_encryption_enabled') as any;
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
    return this.getBooleanAttribute('s3_bucket_encryption_enabled') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#kms_key_id EcsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#logging EcsCluster#logging}
  */
  readonly logging?: string;
  /**
  * log_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#log_configuration EcsCluster#log_configuration}
  */
  readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
}

export function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    logging: cdktf.stringToTerraform(struct!.logging),
    log_configuration: ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
  }
}

export class EcsClusterConfigurationExecuteCommandConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsClusterConfigurationExecuteCommandConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._kmsKeyId) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._logging) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._logConfiguration) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfigurationExecuteCommandConfiguration | undefined) {
    if (value === undefined) {
      this._kmsKeyId = undefined;
      this._logging = undefined;
      this._logConfiguration.internalValue = undefined;
    }
    else {
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
  private _logConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(this as any, "log_configuration", true);
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
export interface EcsClusterConfiguration {
  /**
  * execute_command_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
  */
  readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
}

export function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_command_configuration: ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct!.executeCommandConfiguration),
  }
}

export class EcsClusterConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsClusterConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._executeCommandConfiguration) {
      hasAnyValues = true;
      internalValueResult.executeCommandConfiguration = this._executeCommandConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsClusterConfiguration | undefined) {
    if (value === undefined) {
      this._executeCommandConfiguration.internalValue = undefined;
    }
    else {
      this._executeCommandConfiguration.internalValue = value.executeCommandConfiguration;
    }
  }

  // execute_command_configuration - computed: false, optional: true, required: false
  private _executeCommandConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationOutputReference(this as any, "execute_command_configuration", true);
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
}
export interface EcsClusterDefaultCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#base EcsCluster#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#weight EcsCluster#weight}
  */
  readonly weight?: number;
}

export function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface EcsClusterSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#value EcsCluster#value}
  */
  readonly value: string;
}

export function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}
*/
export class EcsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecs_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
    this._setting = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_providers - computed: false, optional: true, required: false
  private _capacityProviders?: string[]; 
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }
  public set capacityProviders(value: string[]) {
    this._capacityProviders = value;
  }
  public resetCapacityProviders() {
    this._capacityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders;
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
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _configuration = new EcsClusterConfigurationOutputReference(this as any, "configuration", true);
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

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[]; 
  public get defaultCapacityProviderStrategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[]) {
    this._defaultCapacityProviderStrategy = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: EcsClusterSetting[]; 
  public get setting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('setting') as any;
  }
  public set setting(value: EcsClusterSetting[]) {
    this._setting = value;
  }
  public resetSetting() {
    this._setting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      configuration: ecsClusterConfigurationToTerraform(this._configuration.internalValue),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
      setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
    };
  }
}
