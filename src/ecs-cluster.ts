// https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly configuration?: EcsClusterConfiguration[];
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

function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_watch_encryption_enabled: cdktf.booleanToTerraform(struct!.cloudWatchEncryptionEnabled),
    cloud_watch_log_group_name: cdktf.stringToTerraform(struct!.cloudWatchLogGroupName),
    s3_bucket_encryption_enabled: cdktf.booleanToTerraform(struct!.s3BucketEncryptionEnabled),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
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
  readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration[];
}

function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    logging: cdktf.stringToTerraform(struct!.logging),
    log_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform)(struct!.logConfiguration),
  }
}

export interface EcsClusterConfiguration {
  /**
  * execute_command_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
  */
  readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration[];
}

function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execute_command_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationToTerraform)(struct!.executeCommandConfiguration),
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

function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    this._configuration = config.configuration;
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
  public set capacityProviders(value: string[] ) {
    this._capacityProviders = value;
  }
  public resetCapacityProviders() {
    this._capacityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration?: EcsClusterConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: EcsClusterConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] ) {
    this._defaultCapacityProviderStrategy = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: EcsClusterSetting[];
  public get setting() {
    return this.interpolationForAttribute('setting') as any;
  }
  public set setting(value: EcsClusterSetting[] ) {
    this._setting = value;
  }
  public resetSetting() {
    this._setting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting
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
      configuration: cdktf.listMapper(ecsClusterConfigurationToTerraform)(this._configuration),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
      setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
    };
  }
}
