// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export namespace ECS {
  export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags_all EcsCapacityProvider#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * auto_scaling_group_provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
  }
  export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
  }

  function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_warmup_period: cdktf.numberToTerraform(struct!.instanceWarmupPeriod),
      maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
      minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
      status: cdktf.stringToTerraform(struct!.status),
      target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
    }
  }

  export class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_warmup_period - computed: true, optional: true, required: false
    private _instanceWarmupPeriod?: number | undefined; 
    public get instanceWarmupPeriod() {
      return this.getNumberAttribute('instance_warmup_period');
    }
    public set instanceWarmupPeriod(value: number | undefined) {
      this._instanceWarmupPeriod = value;
    }
    public resetInstanceWarmupPeriod() {
      this._instanceWarmupPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceWarmupPeriodInput() {
      return this._instanceWarmupPeriod
    }

    // maximum_scaling_step_size - computed: true, optional: true, required: false
    private _maximumScalingStepSize?: number | undefined; 
    public get maximumScalingStepSize() {
      return this.getNumberAttribute('maximum_scaling_step_size');
    }
    public set maximumScalingStepSize(value: number | undefined) {
      this._maximumScalingStepSize = value;
    }
    public resetMaximumScalingStepSize() {
      this._maximumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumScalingStepSizeInput() {
      return this._maximumScalingStepSize
    }

    // minimum_scaling_step_size - computed: true, optional: true, required: false
    private _minimumScalingStepSize?: number | undefined; 
    public get minimumScalingStepSize() {
      return this.getNumberAttribute('minimum_scaling_step_size');
    }
    public set minimumScalingStepSize(value: number | undefined) {
      this._minimumScalingStepSize = value;
    }
    public resetMinimumScalingStepSize() {
      this._minimumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumScalingStepSizeInput() {
      return this._minimumScalingStepSize
    }

    // status - computed: true, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // target_capacity - computed: true, optional: true, required: false
    private _targetCapacity?: number | undefined; 
    public get targetCapacity() {
      return this.getNumberAttribute('target_capacity');
    }
    public set targetCapacity(value: number | undefined) {
      this._targetCapacity = value;
    }
    public resetTargetCapacity() {
      this._targetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityInput() {
      return this._targetCapacity
    }
  }
  export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
    /**
    * managed_scaling block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
  }

  function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
      managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
      managed_scaling: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct!.managedScaling),
    }
  }

  export class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auto_scaling_group_arn - computed: false, optional: false, required: true
    private _autoScalingGroupArn?: string; 
    public get autoScalingGroupArn() {
      return this.getStringAttribute('auto_scaling_group_arn');
    }
    public set autoScalingGroupArn(value: string) {
      this._autoScalingGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupArnInput() {
      return this._autoScalingGroupArn
    }

    // managed_termination_protection - computed: true, optional: true, required: false
    private _managedTerminationProtection?: string | undefined; 
    public get managedTerminationProtection() {
      return this.getStringAttribute('managed_termination_protection');
    }
    public set managedTerminationProtection(value: string | undefined) {
      this._managedTerminationProtection = value;
    }
    public resetManagedTerminationProtection() {
      this._managedTerminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedTerminationProtectionInput() {
      return this._managedTerminationProtection
    }

    // managed_scaling - computed: false, optional: true, required: false
    private _managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined; 
    private __managedScalingOutput = new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this as any, "managed_scaling", true);
    public get managedScaling() {
      return this.__managedScalingOutput;
    }
    public putManagedScaling(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined) {
      this._managedScaling = value;
    }
    public resetManagedScaling() {
      this._managedScaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedScalingInput() {
      return this._managedScaling
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}
  */
  export class EcsCapacityProvider extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_capacity_provider";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_capacity_provider',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._autoScalingGroupProvider = config.autoScalingGroupProvider;
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

    // auto_scaling_group_provider - computed: false, optional: false, required: true
    private _autoScalingGroupProvider?: EcsCapacityProviderAutoScalingGroupProvider; 
    private __autoScalingGroupProviderOutput = new EcsCapacityProviderAutoScalingGroupProviderOutputReference(this as any, "auto_scaling_group_provider", true);
    public get autoScalingGroupProvider() {
      return this.__autoScalingGroupProviderOutput;
    }
    public putAutoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider) {
      this._autoScalingGroupProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupProviderInput() {
      return this._autoScalingGroupProvider
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider),
      };
    }
  }
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

  function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
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

    // cloud_watch_encryption_enabled - computed: false, optional: true, required: false
    private _cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get cloudWatchEncryptionEnabled() {
      return this.getBooleanAttribute('cloud_watch_encryption_enabled') as any;
    }
    public set cloudWatchEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._cloudWatchEncryptionEnabled = value;
    }
    public resetCloudWatchEncryptionEnabled() {
      this._cloudWatchEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudWatchEncryptionEnabledInput() {
      return this._cloudWatchEncryptionEnabled
    }

    // cloud_watch_log_group_name - computed: false, optional: true, required: false
    private _cloudWatchLogGroupName?: string | undefined; 
    public get cloudWatchLogGroupName() {
      return this.getStringAttribute('cloud_watch_log_group_name');
    }
    public set cloudWatchLogGroupName(value: string | undefined) {
      this._cloudWatchLogGroupName = value;
    }
    public resetCloudWatchLogGroupName() {
      this._cloudWatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudWatchLogGroupNameInput() {
      return this._cloudWatchLogGroupName
    }

    // s3_bucket_encryption_enabled - computed: false, optional: true, required: false
    private _s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get s3BucketEncryptionEnabled() {
      return this.getBooleanAttribute('s3_bucket_encryption_enabled') as any;
    }
    public set s3BucketEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._s3BucketEncryptionEnabled = value;
    }
    public resetS3BucketEncryptionEnabled() {
      this._s3BucketEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketEncryptionEnabledInput() {
      return this._s3BucketEncryptionEnabled
    }

    // s3_bucket_name - computed: false, optional: true, required: false
    private _s3BucketName?: string | undefined; 
    public get s3BucketName() {
      return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string | undefined) {
      this._s3BucketName = value;
    }
    public resetS3BucketName() {
      this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
      return this._s3BucketName
    }

    // s3_key_prefix - computed: false, optional: true, required: false
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

  function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationOutputReference | EcsClusterConfigurationExecuteCommandConfiguration): any {
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

    // kms_key_id - computed: false, optional: true, required: false
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

    // logging - computed: false, optional: true, required: false
    private _logging?: string | undefined; 
    public get logging() {
      return this.getStringAttribute('logging');
    }
    public set logging(value: string | undefined) {
      this._logging = value;
    }
    public resetLogging() {
      this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
      return this._logging
    }

    // log_configuration - computed: false, optional: true, required: false
    private _logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined; 
    private __logConfigurationOutput = new EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(this as any, "log_configuration", true);
    public get logConfiguration() {
      return this.__logConfigurationOutput;
    }
    public putLogConfiguration(value: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration | undefined) {
      this._logConfiguration = value;
    }
    public resetLogConfiguration() {
      this._logConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
      return this._logConfiguration
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

  function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfigurationOutputReference | EcsClusterConfiguration): any {
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

    // execute_command_configuration - computed: false, optional: true, required: false
    private _executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration | undefined; 
    private __executeCommandConfigurationOutput = new EcsClusterConfigurationExecuteCommandConfigurationOutputReference(this as any, "execute_command_configuration", true);
    public get executeCommandConfiguration() {
      return this.__executeCommandConfigurationOutput;
    }
    public putExecuteCommandConfiguration(value: EcsClusterConfigurationExecuteCommandConfiguration | undefined) {
      this._executeCommandConfiguration = value;
    }
    public resetExecuteCommandConfiguration() {
      this._executeCommandConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executeCommandConfigurationInput() {
      return this._executeCommandConfiguration
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

  function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any {
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
    private _capacityProviders?: string[] | undefined; 
    public get capacityProviders() {
      return this.getListAttribute('capacity_providers');
    }
    public set capacityProviders(value: string[] | undefined) {
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

    // configuration - computed: false, optional: true, required: false
    private _configuration?: EcsClusterConfiguration | undefined; 
    private __configurationOutput = new EcsClusterConfigurationOutputReference(this as any, "configuration", true);
    public get configuration() {
      return this.__configurationOutput;
    }
    public putConfiguration(value: EcsClusterConfiguration | undefined) {
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
    private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[] | undefined; 
    public get defaultCapacityProviderStrategy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
    }
    public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] | undefined) {
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
    private _setting?: EcsClusterSetting[] | undefined; 
    public get setting() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('setting') as any;
    }
    public set setting(value: EcsClusterSetting[] | undefined) {
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
        configuration: ecsClusterConfigurationToTerraform(this._configuration),
        default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
        setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
      };
    }
  }
  export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#cluster EcsService#cluster}
    */
    readonly cluster?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_maximum_percent EcsService#deployment_maximum_percent}
    */
    readonly deploymentMaximumPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
    */
    readonly deploymentMinimumHealthyPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#desired_count EcsService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#force_new_deployment EcsService#force_new_deployment}
    */
    readonly forceNewDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#iam_role EcsService#iam_role}
    */
    readonly iamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#launch_type EcsService#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#name EcsService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#platform_version EcsService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags EcsService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags_all EcsService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#task_definition EcsService#task_definition}
    */
    readonly taskDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#wait_for_steady_state EcsService#wait_for_steady_state}
    */
    readonly waitForSteadyState?: boolean | cdktf.IResolvable;
    /**
    * capacity_provider_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    /**
    * deployment_circuit_breaker block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker;
    /**
    * deployment_controller block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
    */
    readonly deploymentController?: EcsServiceDeploymentController;
    /**
    * load_balancer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#load_balancer EcsService#load_balancer}
    */
    readonly loadBalancer?: EcsServiceLoadBalancer[];
    /**
    * network_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#network_configuration EcsService#network_configuration}
    */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration;
    /**
    * ordered_placement_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#ordered_placement_strategy EcsService#ordered_placement_strategy}
    */
    readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
    /**
    * placement_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
    */
    readonly placementConstraints?: EcsServicePlacementConstraints[];
    /**
    * service_registries block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#service_registries EcsService#service_registries}
    */
    readonly serviceRegistries?: EcsServiceServiceRegistries;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#timeouts EcsService#timeouts}
    */
    readonly timeouts?: EcsServiceTimeouts;
  }
  export interface EcsServiceCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#base EcsService#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider EcsService#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#weight EcsService#weight}
    */
    readonly weight?: number;
  }

  function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any {
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

  export interface EcsServiceDeploymentCircuitBreaker {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
  }

  function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enable: cdktf.booleanToTerraform(struct!.enable),
      rollback: cdktf.booleanToTerraform(struct!.rollback),
    }
  }

  export class EcsServiceDeploymentCircuitBreakerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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

    // rollback - computed: false, optional: false, required: true
    private _rollback?: boolean | cdktf.IResolvable; 
    public get rollback() {
      return this.getBooleanAttribute('rollback') as any;
    }
    public set rollback(value: boolean | cdktf.IResolvable) {
      this._rollback = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackInput() {
      return this._rollback
    }
  }
  export interface EcsServiceDeploymentController {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type?: string;
  }

  function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class EcsServiceDeploymentControllerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface EcsServiceLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#elb_name EcsService#elb_name}
    */
    readonly elbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn?: string;
  }

  function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      container_port: cdktf.numberToTerraform(struct!.containerPort),
      elb_name: cdktf.stringToTerraform(struct!.elbName),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    }
  }

  export interface EcsServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#security_groups EcsService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#subnets EcsService#subnets}
    */
    readonly subnets: string[];
  }

  function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    }
  }

  export class EcsServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // assign_public_ip - computed: false, optional: true, required: false
    private _assignPublicIp?: boolean | cdktf.IResolvable | undefined; 
    public get assignPublicIp() {
      return this.getBooleanAttribute('assign_public_ip') as any;
    }
    public set assignPublicIp(value: boolean | cdktf.IResolvable | undefined) {
      this._assignPublicIp = value;
    }
    public resetAssignPublicIp() {
      this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignPublicIpInput() {
      return this._assignPublicIp
    }

    // security_groups - computed: false, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
      this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
      return this._subnets
    }
  }
  export interface EcsServiceOrderedPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#field EcsService#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
  }

  function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      field: cdktf.stringToTerraform(struct!.field),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsServicePlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#expression EcsService#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
  }

  function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsServiceServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#port EcsService#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#registry_arn EcsService#registry_arn}
    */
    readonly registryArn: string;
  }

  function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      container_port: cdktf.numberToTerraform(struct!.containerPort),
      port: cdktf.numberToTerraform(struct!.port),
      registry_arn: cdktf.stringToTerraform(struct!.registryArn),
    }
  }

  export class EcsServiceServiceRegistriesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // container_name - computed: false, optional: true, required: false
    private _containerName?: string | undefined; 
    public get containerName() {
      return this.getStringAttribute('container_name');
    }
    public set containerName(value: string | undefined) {
      this._containerName = value;
    }
    public resetContainerName() {
      this._containerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
      return this._containerName
    }

    // container_port - computed: false, optional: true, required: false
    private _containerPort?: number | undefined; 
    public get containerPort() {
      return this.getNumberAttribute('container_port');
    }
    public set containerPort(value: number | undefined) {
      this._containerPort = value;
    }
    public resetContainerPort() {
      this._containerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPortInput() {
      return this._containerPort
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

    // registry_arn - computed: false, optional: false, required: true
    private _registryArn?: string; 
    public get registryArn() {
      return this.getStringAttribute('registry_arn');
    }
    public set registryArn(value: string) {
      this._registryArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get registryArnInput() {
      return this._registryArn
    }
  }
  export interface EcsServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#delete EcsService#delete}
    */
    readonly delete?: string;
  }

  function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeoutsOutputReference | EcsServiceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}
  */
  export class EcsService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig
    */
    public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cluster = config.cluster;
      this._deploymentMaximumPercent = config.deploymentMaximumPercent;
      this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
      this._desiredCount = config.desiredCount;
      this._enableEcsManagedTags = config.enableEcsManagedTags;
      this._enableExecuteCommand = config.enableExecuteCommand;
      this._forceNewDeployment = config.forceNewDeployment;
      this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
      this._iamRole = config.iamRole;
      this._launchType = config.launchType;
      this._name = config.name;
      this._platformVersion = config.platformVersion;
      this._propagateTags = config.propagateTags;
      this._schedulingStrategy = config.schedulingStrategy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._taskDefinition = config.taskDefinition;
      this._waitForSteadyState = config.waitForSteadyState;
      this._capacityProviderStrategy = config.capacityProviderStrategy;
      this._deploymentCircuitBreaker = config.deploymentCircuitBreaker;
      this._deploymentController = config.deploymentController;
      this._loadBalancer = config.loadBalancer;
      this._networkConfiguration = config.networkConfiguration;
      this._orderedPlacementStrategy = config.orderedPlacementStrategy;
      this._placementConstraints = config.placementConstraints;
      this._serviceRegistries = config.serviceRegistries;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster - computed: true, optional: true, required: false
    private _cluster?: string | undefined; 
    public get cluster() {
      return this.getStringAttribute('cluster');
    }
    public set cluster(value: string | undefined) {
      this._cluster = value;
    }
    public resetCluster() {
      this._cluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
      return this._cluster
    }

    // deployment_maximum_percent - computed: false, optional: true, required: false
    private _deploymentMaximumPercent?: number | undefined; 
    public get deploymentMaximumPercent() {
      return this.getNumberAttribute('deployment_maximum_percent');
    }
    public set deploymentMaximumPercent(value: number | undefined) {
      this._deploymentMaximumPercent = value;
    }
    public resetDeploymentMaximumPercent() {
      this._deploymentMaximumPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentMaximumPercentInput() {
      return this._deploymentMaximumPercent
    }

    // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
    private _deploymentMinimumHealthyPercent?: number | undefined; 
    public get deploymentMinimumHealthyPercent() {
      return this.getNumberAttribute('deployment_minimum_healthy_percent');
    }
    public set deploymentMinimumHealthyPercent(value: number | undefined) {
      this._deploymentMinimumHealthyPercent = value;
    }
    public resetDeploymentMinimumHealthyPercent() {
      this._deploymentMinimumHealthyPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentMinimumHealthyPercentInput() {
      return this._deploymentMinimumHealthyPercent
    }

    // desired_count - computed: false, optional: true, required: false
    private _desiredCount?: number | undefined; 
    public get desiredCount() {
      return this.getNumberAttribute('desired_count');
    }
    public set desiredCount(value: number | undefined) {
      this._desiredCount = value;
    }
    public resetDesiredCount() {
      this._desiredCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCountInput() {
      return this._desiredCount
    }

    // enable_ecs_managed_tags - computed: false, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktf.IResolvable | undefined; 
    public get enableEcsManagedTags() {
      return this.getBooleanAttribute('enable_ecs_managed_tags') as any;
    }
    public set enableEcsManagedTags(value: boolean | cdktf.IResolvable | undefined) {
      this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
      this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
      return this._enableEcsManagedTags
    }

    // enable_execute_command - computed: false, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktf.IResolvable | undefined; 
    public get enableExecuteCommand() {
      return this.getBooleanAttribute('enable_execute_command') as any;
    }
    public set enableExecuteCommand(value: boolean | cdktf.IResolvable | undefined) {
      this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
      this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
      return this._enableExecuteCommand
    }

    // force_new_deployment - computed: false, optional: true, required: false
    private _forceNewDeployment?: boolean | cdktf.IResolvable | undefined; 
    public get forceNewDeployment() {
      return this.getBooleanAttribute('force_new_deployment') as any;
    }
    public set forceNewDeployment(value: boolean | cdktf.IResolvable | undefined) {
      this._forceNewDeployment = value;
    }
    public resetForceNewDeployment() {
      this._forceNewDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceNewDeploymentInput() {
      return this._forceNewDeployment
    }

    // health_check_grace_period_seconds - computed: false, optional: true, required: false
    private _healthCheckGracePeriodSeconds?: number | undefined; 
    public get healthCheckGracePeriodSeconds() {
      return this.getNumberAttribute('health_check_grace_period_seconds');
    }
    public set healthCheckGracePeriodSeconds(value: number | undefined) {
      this._healthCheckGracePeriodSeconds = value;
    }
    public resetHealthCheckGracePeriodSeconds() {
      this._healthCheckGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckGracePeriodSecondsInput() {
      return this._healthCheckGracePeriodSeconds
    }

    // iam_role - computed: true, optional: true, required: false
    private _iamRole?: string | undefined; 
    public get iamRole() {
      return this.getStringAttribute('iam_role');
    }
    public set iamRole(value: string | undefined) {
      this._iamRole = value;
    }
    public resetIamRole() {
      this._iamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleInput() {
      return this._iamRole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_type - computed: true, optional: true, required: false
    private _launchType?: string | undefined; 
    public get launchType() {
      return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string | undefined) {
      this._launchType = value;
    }
    public resetLaunchType() {
      this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
      return this._launchType
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

    // platform_version - computed: true, optional: true, required: false
    private _platformVersion?: string | undefined; 
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string | undefined) {
      this._platformVersion = value;
    }
    public resetPlatformVersion() {
      this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
      return this._platformVersion
    }

    // propagate_tags - computed: false, optional: true, required: false
    private _propagateTags?: string | undefined; 
    public get propagateTags() {
      return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string | undefined) {
      this._propagateTags = value;
    }
    public resetPropagateTags() {
      this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
      return this._propagateTags
    }

    // scheduling_strategy - computed: false, optional: true, required: false
    private _schedulingStrategy?: string | undefined; 
    public get schedulingStrategy() {
      return this.getStringAttribute('scheduling_strategy');
    }
    public set schedulingStrategy(value: string | undefined) {
      this._schedulingStrategy = value;
    }
    public resetSchedulingStrategy() {
      this._schedulingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingStrategyInput() {
      return this._schedulingStrategy
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

    // task_definition - computed: false, optional: true, required: false
    private _taskDefinition?: string | undefined; 
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string | undefined) {
      this._taskDefinition = value;
    }
    public resetTaskDefinition() {
      this._taskDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // wait_for_steady_state - computed: false, optional: true, required: false
    private _waitForSteadyState?: boolean | cdktf.IResolvable | undefined; 
    public get waitForSteadyState() {
      return this.getBooleanAttribute('wait_for_steady_state') as any;
    }
    public set waitForSteadyState(value: boolean | cdktf.IResolvable | undefined) {
      this._waitForSteadyState = value;
    }
    public resetWaitForSteadyState() {
      this._waitForSteadyState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForSteadyStateInput() {
      return this._waitForSteadyState
    }

    // capacity_provider_strategy - computed: false, optional: true, required: false
    private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[] | undefined; 
    public get capacityProviderStrategy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('capacity_provider_strategy') as any;
    }
    public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] | undefined) {
      this._capacityProviderStrategy = value;
    }
    public resetCapacityProviderStrategy() {
      this._capacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
      return this._capacityProviderStrategy
    }

    // deployment_circuit_breaker - computed: false, optional: true, required: false
    private _deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker | undefined; 
    private __deploymentCircuitBreakerOutput = new EcsServiceDeploymentCircuitBreakerOutputReference(this as any, "deployment_circuit_breaker", true);
    public get deploymentCircuitBreaker() {
      return this.__deploymentCircuitBreakerOutput;
    }
    public putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker | undefined) {
      this._deploymentCircuitBreaker = value;
    }
    public resetDeploymentCircuitBreaker() {
      this._deploymentCircuitBreaker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentCircuitBreakerInput() {
      return this._deploymentCircuitBreaker
    }

    // deployment_controller - computed: false, optional: true, required: false
    private _deploymentController?: EcsServiceDeploymentController | undefined; 
    private __deploymentControllerOutput = new EcsServiceDeploymentControllerOutputReference(this as any, "deployment_controller", true);
    public get deploymentController() {
      return this.__deploymentControllerOutput;
    }
    public putDeploymentController(value: EcsServiceDeploymentController | undefined) {
      this._deploymentController = value;
    }
    public resetDeploymentController() {
      this._deploymentController = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentControllerInput() {
      return this._deploymentController
    }

    // load_balancer - computed: false, optional: true, required: false
    private _loadBalancer?: EcsServiceLoadBalancer[] | undefined; 
    public get loadBalancer() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('load_balancer') as any;
    }
    public set loadBalancer(value: EcsServiceLoadBalancer[] | undefined) {
      this._loadBalancer = value;
    }
    public resetLoadBalancer() {
      this._loadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
    }

    // network_configuration - computed: false, optional: true, required: false
    private _networkConfiguration?: EcsServiceNetworkConfiguration | undefined; 
    private __networkConfigurationOutput = new EcsServiceNetworkConfigurationOutputReference(this as any, "network_configuration", true);
    public get networkConfiguration() {
      return this.__networkConfigurationOutput;
    }
    public putNetworkConfiguration(value: EcsServiceNetworkConfiguration | undefined) {
      this._networkConfiguration = value;
    }
    public resetNetworkConfiguration() {
      this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
      return this._networkConfiguration
    }

    // ordered_placement_strategy - computed: false, optional: true, required: false
    private _orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[] | undefined; 
    public get orderedPlacementStrategy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ordered_placement_strategy') as any;
    }
    public set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] | undefined) {
      this._orderedPlacementStrategy = value;
    }
    public resetOrderedPlacementStrategy() {
      this._orderedPlacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderedPlacementStrategyInput() {
      return this._orderedPlacementStrategy
    }

    // placement_constraints - computed: false, optional: true, required: false
    private _placementConstraints?: EcsServicePlacementConstraints[] | undefined; 
    public get placementConstraints() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('placement_constraints') as any;
    }
    public set placementConstraints(value: EcsServicePlacementConstraints[] | undefined) {
      this._placementConstraints = value;
    }
    public resetPlacementConstraints() {
      this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
      return this._placementConstraints
    }

    // service_registries - computed: false, optional: true, required: false
    private _serviceRegistries?: EcsServiceServiceRegistries | undefined; 
    private __serviceRegistriesOutput = new EcsServiceServiceRegistriesOutputReference(this as any, "service_registries", true);
    public get serviceRegistries() {
      return this.__serviceRegistriesOutput;
    }
    public putServiceRegistries(value: EcsServiceServiceRegistries | undefined) {
      this._serviceRegistries = value;
    }
    public resetServiceRegistries() {
      this._serviceRegistries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRegistriesInput() {
      return this._serviceRegistries
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EcsServiceTimeouts | undefined; 
    private __timeoutsOutput = new EcsServiceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EcsServiceTimeouts | undefined) {
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
        cluster: cdktf.stringToTerraform(this._cluster),
        deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
        deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
        desired_count: cdktf.numberToTerraform(this._desiredCount),
        enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
        enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
        force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
        health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
        iam_role: cdktf.stringToTerraform(this._iamRole),
        launch_type: cdktf.stringToTerraform(this._launchType),
        name: cdktf.stringToTerraform(this._name),
        platform_version: cdktf.stringToTerraform(this._platformVersion),
        propagate_tags: cdktf.stringToTerraform(this._propagateTags),
        scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
        wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
        capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
        deployment_circuit_breaker: ecsServiceDeploymentCircuitBreakerToTerraform(this._deploymentCircuitBreaker),
        deployment_controller: ecsServiceDeploymentControllerToTerraform(this._deploymentController),
        load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
        network_configuration: ecsServiceNetworkConfigurationToTerraform(this._networkConfiguration),
        ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
        placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
        service_registries: ecsServiceServiceRegistriesToTerraform(this._serviceRegistries),
        timeouts: ecsServiceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EcsTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#key EcsTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#resource_arn EcsTag#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#value EcsTag#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag}
  */
  export class EcsTag extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_tag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTagConfig
    */
    public constructor(scope: Construct, id: string, config: EcsTagConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_tag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._key = config.key;
      this._resourceArn = config.resourceArn;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
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
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key: cdktf.stringToTerraform(this._key),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}
    */
    readonly containerDefinitions: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#family EcsTaskDefinition#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
    */
    readonly requiresCompatibilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags_all EcsTaskDefinition#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * ephemeral_storage block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
    */
    readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
    /**
    * inference_accelerator block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#inference_accelerator EcsTaskDefinition#inference_accelerator}
    */
    readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
    /**
    * placement_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
    */
    readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
    /**
    * proxy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
    */
    readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
    /**
    * volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#volume EcsTaskDefinition#volume}
    */
    readonly volume?: EcsTaskDefinitionVolume[];
  }
  export interface EcsTaskDefinitionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#size_in_gib EcsTaskDefinition#size_in_gib}
    */
    readonly sizeInGib: number;
  }

  function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      size_in_gib: cdktf.numberToTerraform(struct!.sizeInGib),
    }
  }

  export class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // size_in_gib - computed: false, optional: false, required: true
    private _sizeInGib?: number; 
    public get sizeInGib() {
      return this.getNumberAttribute('size_in_gib');
    }
    public set sizeInGib(value: number) {
      this._sizeInGib = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGibInput() {
      return this._sizeInGib
    }
  }
  export interface EcsTaskDefinitionInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}
    */
    readonly deviceType: string;
  }

  function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      device_type: cdktf.stringToTerraform(struct!.deviceType),
    }
  }

  export interface EcsTaskDefinitionPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type: string;
  }

  function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsTaskDefinitionProxyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#properties EcsTaskDefinition#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type?: string;
  }

  function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // container_name - computed: false, optional: false, required: true
    private _containerName?: string; 
    public get containerName() {
      return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
      this._containerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
      return this._containerName
    }

    // properties - computed: false, optional: true, required: false
    private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get properties() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('properties') as any;
    }
    public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._properties = value;
    }
    public resetProperties() {
      this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
      return this._properties
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}
    */
    readonly autoprovision?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}
    */
    readonly driver?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}
    */
    readonly driverOpts?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
    */
    readonly scope?: string;
  }

  function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
      driver: cdktf.stringToTerraform(struct!.driver),
      driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOpts),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
      scope: cdktf.stringToTerraform(struct!.scope),
    }
  }

  export class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // autoprovision - computed: false, optional: true, required: false
    private _autoprovision?: boolean | cdktf.IResolvable | undefined; 
    public get autoprovision() {
      return this.getBooleanAttribute('autoprovision') as any;
    }
    public set autoprovision(value: boolean | cdktf.IResolvable | undefined) {
      this._autoprovision = value;
    }
    public resetAutoprovision() {
      this._autoprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoprovisionInput() {
      return this._autoprovision
    }

    // driver - computed: false, optional: true, required: false
    private _driver?: string | undefined; 
    public get driver() {
      return this.getStringAttribute('driver');
    }
    public set driver(value: string | undefined) {
      this._driver = value;
    }
    public resetDriver() {
      this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driverInput() {
      return this._driver
    }

    // driver_opts - computed: false, optional: true, required: false
    private _driverOpts?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get driverOpts() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('driver_opts') as any;
    }
    public set driverOpts(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._driverOpts = value;
    }
    public resetDriverOpts() {
      this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driverOptsInput() {
      return this._driverOpts
    }

    // labels - computed: false, optional: true, required: false
    private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get labels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('labels') as any;
    }
    public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._labels = value;
    }
    public resetLabels() {
      this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
      return this._labels
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string | undefined; 
    public get scope() {
      return this.getStringAttribute('scope');
    }
    public set scope(value: string | undefined) {
      this._scope = value;
    }
    public resetScope() {
      this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
      return this._scope
    }
  }
  export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}
    */
    readonly iam?: string;
  }

  function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
      iam: cdktf.stringToTerraform(struct!.iam),
    }
  }

  export class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_point_id - computed: false, optional: true, required: false
    private _accessPointId?: string | undefined; 
    public get accessPointId() {
      return this.getStringAttribute('access_point_id');
    }
    public set accessPointId(value: string | undefined) {
      this._accessPointId = value;
    }
    public resetAccessPointId() {
      this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointIdInput() {
      return this._accessPointId
    }

    // iam - computed: false, optional: true, required: false
    private _iam?: string | undefined; 
    public get iam() {
      return this.getStringAttribute('iam');
    }
    public set iam(value: string | undefined) {
      this._iam = value;
    }
    public resetIam() {
      this._iam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
      return this._iam
    }
  }
  export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}
    */
    readonly transitEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
    /**
    * authorization_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
  }

  function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
      root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
      transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
      transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
      authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
    }
  }

  export class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // root_directory - computed: false, optional: true, required: false
    private _rootDirectory?: string | undefined; 
    public get rootDirectory() {
      return this.getStringAttribute('root_directory');
    }
    public set rootDirectory(value: string | undefined) {
      this._rootDirectory = value;
    }
    public resetRootDirectory() {
      this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
      return this._rootDirectory
    }

    // transit_encryption - computed: false, optional: true, required: false
    private _transitEncryption?: string | undefined; 
    public get transitEncryption() {
      return this.getStringAttribute('transit_encryption');
    }
    public set transitEncryption(value: string | undefined) {
      this._transitEncryption = value;
    }
    public resetTransitEncryption() {
      this._transitEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionInput() {
      return this._transitEncryption
    }

    // transit_encryption_port - computed: false, optional: true, required: false
    private _transitEncryptionPort?: number | undefined; 
    public get transitEncryptionPort() {
      return this.getNumberAttribute('transit_encryption_port');
    }
    public set transitEncryptionPort(value: number | undefined) {
      this._transitEncryptionPort = value;
    }
    public resetTransitEncryptionPort() {
      this._transitEncryptionPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionPortInput() {
      return this._transitEncryptionPort
    }

    // authorization_config - computed: false, optional: true, required: false
    private _authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined; 
    private __authorizationConfigOutput = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this as any, "authorization_config", true);
    public get authorizationConfig() {
      return this.__authorizationConfigOutput;
    }
    public putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined) {
      this._authorizationConfig = value;
    }
    public resetAuthorizationConfig() {
      this._authorizationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
      return this._authorizationConfig
    }
  }
  export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#domain EcsTaskDefinition#domain}
    */
    readonly domain: string;
  }

  function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
      domain: cdktf.stringToTerraform(struct!.domain),
    }
  }

  export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // credentials_parameter - computed: false, optional: false, required: true
    private _credentialsParameter?: string; 
    public get credentialsParameter() {
      return this.getStringAttribute('credentials_parameter');
    }
    public set credentialsParameter(value: string) {
      this._credentialsParameter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsParameterInput() {
      return this._credentialsParameter
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }
  }
  export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory: string;
    /**
    * authorization_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
  }

  function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
      root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
      authorization_config: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
    }
  }

  export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // root_directory - computed: false, optional: false, required: true
    private _rootDirectory?: string; 
    public get rootDirectory() {
      return this.getStringAttribute('root_directory');
    }
    public set rootDirectory(value: string) {
      this._rootDirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDirectoryInput() {
      return this._rootDirectory
    }

    // authorization_config - computed: false, optional: false, required: true
    private _authorizationConfig?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig; 
    private __authorizationConfigOutput = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(this as any, "authorization_config", true);
    public get authorizationConfig() {
      return this.__authorizationConfigOutput;
    }
    public putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig) {
      this._authorizationConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
      return this._authorizationConfig
    }
  }
  export interface EcsTaskDefinitionVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}
    */
    readonly hostPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#name EcsTaskDefinition#name}
    */
    readonly name: string;
    /**
    * docker_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
    */
    readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
    /**
    * efs_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
    */
    readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
    /**
    * fsx_windows_file_server_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
    */
    readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
  }

  function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      host_path: cdktf.stringToTerraform(struct!.hostPath),
      name: cdktf.stringToTerraform(struct!.name),
      docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
      efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
      fsx_windows_file_server_volume_configuration: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}
  */
  export class EcsTaskDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_task_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_task_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._containerDefinitions = config.containerDefinitions;
      this._cpu = config.cpu;
      this._executionRoleArn = config.executionRoleArn;
      this._family = config.family;
      this._ipcMode = config.ipcMode;
      this._memory = config.memory;
      this._networkMode = config.networkMode;
      this._pidMode = config.pidMode;
      this._requiresCompatibilities = config.requiresCompatibilities;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._taskRoleArn = config.taskRoleArn;
      this._ephemeralStorage = config.ephemeralStorage;
      this._inferenceAccelerator = config.inferenceAccelerator;
      this._placementConstraints = config.placementConstraints;
      this._proxyConfiguration = config.proxyConfiguration;
      this._volume = config.volume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // container_definitions - computed: false, optional: false, required: true
    private _containerDefinitions?: string; 
    public get containerDefinitions() {
      return this.getStringAttribute('container_definitions');
    }
    public set containerDefinitions(value: string) {
      this._containerDefinitions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerDefinitionsInput() {
      return this._containerDefinitions
    }

    // cpu - computed: false, optional: true, required: false
    private _cpu?: string | undefined; 
    public get cpu() {
      return this.getStringAttribute('cpu');
    }
    public set cpu(value: string | undefined) {
      this._cpu = value;
    }
    public resetCpu() {
      this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
      return this._cpu
    }

    // execution_role_arn - computed: false, optional: true, required: false
    private _executionRoleArn?: string | undefined; 
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string | undefined) {
      this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
      this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
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

    // ipc_mode - computed: false, optional: true, required: false
    private _ipcMode?: string | undefined; 
    public get ipcMode() {
      return this.getStringAttribute('ipc_mode');
    }
    public set ipcMode(value: string | undefined) {
      this._ipcMode = value;
    }
    public resetIpcMode() {
      this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipcModeInput() {
      return this._ipcMode
    }

    // memory - computed: false, optional: true, required: false
    private _memory?: string | undefined; 
    public get memory() {
      return this.getStringAttribute('memory');
    }
    public set memory(value: string | undefined) {
      this._memory = value;
    }
    public resetMemory() {
      this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
      return this._memory
    }

    // network_mode - computed: true, optional: true, required: false
    private _networkMode?: string | undefined; 
    public get networkMode() {
      return this.getStringAttribute('network_mode');
    }
    public set networkMode(value: string | undefined) {
      this._networkMode = value;
    }
    public resetNetworkMode() {
      this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeInput() {
      return this._networkMode
    }

    // pid_mode - computed: false, optional: true, required: false
    private _pidMode?: string | undefined; 
    public get pidMode() {
      return this.getStringAttribute('pid_mode');
    }
    public set pidMode(value: string | undefined) {
      this._pidMode = value;
    }
    public resetPidMode() {
      this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pidModeInput() {
      return this._pidMode
    }

    // requires_compatibilities - computed: false, optional: true, required: false
    private _requiresCompatibilities?: string[] | undefined; 
    public get requiresCompatibilities() {
      return this.getListAttribute('requires_compatibilities');
    }
    public set requiresCompatibilities(value: string[] | undefined) {
      this._requiresCompatibilities = value;
    }
    public resetRequiresCompatibilities() {
      this._requiresCompatibilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiresCompatibilitiesInput() {
      return this._requiresCompatibilities
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
      return this.getNumberAttribute('revision');
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

    // task_role_arn - computed: false, optional: true, required: false
    private _taskRoleArn?: string | undefined; 
    public get taskRoleArn() {
      return this.getStringAttribute('task_role_arn');
    }
    public set taskRoleArn(value: string | undefined) {
      this._taskRoleArn = value;
    }
    public resetTaskRoleArn() {
      this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskRoleArnInput() {
      return this._taskRoleArn
    }

    // ephemeral_storage - computed: false, optional: true, required: false
    private _ephemeralStorage?: EcsTaskDefinitionEphemeralStorage | undefined; 
    private __ephemeralStorageOutput = new EcsTaskDefinitionEphemeralStorageOutputReference(this as any, "ephemeral_storage", true);
    public get ephemeralStorage() {
      return this.__ephemeralStorageOutput;
    }
    public putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage | undefined) {
      this._ephemeralStorage = value;
    }
    public resetEphemeralStorage() {
      this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
      return this._ephemeralStorage
    }

    // inference_accelerator - computed: false, optional: true, required: false
    private _inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[] | undefined; 
    public get inferenceAccelerator() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('inference_accelerator') as any;
    }
    public set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] | undefined) {
      this._inferenceAccelerator = value;
    }
    public resetInferenceAccelerator() {
      this._inferenceAccelerator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAcceleratorInput() {
      return this._inferenceAccelerator
    }

    // placement_constraints - computed: false, optional: true, required: false
    private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[] | undefined; 
    public get placementConstraints() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('placement_constraints') as any;
    }
    public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[] | undefined) {
      this._placementConstraints = value;
    }
    public resetPlacementConstraints() {
      this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
      return this._placementConstraints
    }

    // proxy_configuration - computed: false, optional: true, required: false
    private _proxyConfiguration?: EcsTaskDefinitionProxyConfiguration | undefined; 
    private __proxyConfigurationOutput = new EcsTaskDefinitionProxyConfigurationOutputReference(this as any, "proxy_configuration", true);
    public get proxyConfiguration() {
      return this.__proxyConfigurationOutput;
    }
    public putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration | undefined) {
      this._proxyConfiguration = value;
    }
    public resetProxyConfiguration() {
      this._proxyConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyConfigurationInput() {
      return this._proxyConfiguration
    }

    // volume - computed: false, optional: true, required: false
    private _volume?: EcsTaskDefinitionVolume[] | undefined; 
    public get volume() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('volume') as any;
    }
    public set volume(value: EcsTaskDefinitionVolume[] | undefined) {
      this._volume = value;
    }
    public resetVolume() {
      this._volume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeInput() {
      return this._volume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
        cpu: cdktf.stringToTerraform(this._cpu),
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        family: cdktf.stringToTerraform(this._family),
        ipc_mode: cdktf.stringToTerraform(this._ipcMode),
        memory: cdktf.stringToTerraform(this._memory),
        network_mode: cdktf.stringToTerraform(this._networkMode),
        pid_mode: cdktf.stringToTerraform(this._pidMode),
        requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
        ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage),
        inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
        placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
        proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration),
        volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume),
      };
    }
  }
  export interface DataAwsEcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html#cluster_name DataAwsEcsCluster#cluster_name}
    */
    readonly clusterName: string;
  }
  export class DataAwsEcsClusterSetting extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster}
  */
  export class DataAwsEcsCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsClusterConfig) {
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
      this._clusterName = config.clusterName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pending_tasks_count - computed: true, optional: false, required: false
    public get pendingTasksCount() {
      return this.getNumberAttribute('pending_tasks_count');
    }

    // registered_container_instances_count - computed: true, optional: false, required: false
    public get registeredContainerInstancesCount() {
      return this.getNumberAttribute('registered_container_instances_count');
    }

    // running_tasks_count - computed: true, optional: false, required: false
    public get runningTasksCount() {
      return this.getNumberAttribute('running_tasks_count');
    }

    // setting - computed: true, optional: false, required: false
    public setting(index: string) {
      return new DataAwsEcsClusterSetting(this, 'setting', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
      };
    }
  }
  export interface DataAwsEcsContainerDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#container_name DataAwsEcsContainerDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#task_definition DataAwsEcsContainerDefinition#task_definition}
    */
    readonly taskDefinition: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition}
  */
  export class DataAwsEcsContainerDefinition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_container_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsContainerDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsContainerDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_container_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._containerName = config.containerName;
      this._taskDefinition = config.taskDefinition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // container_name - computed: false, optional: false, required: true
    private _containerName?: string; 
    public get containerName() {
      return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
      this._containerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
      return this._containerName
    }

    // cpu - computed: true, optional: false, required: false
    public get cpu() {
      return this.getNumberAttribute('cpu');
    }

    // disable_networking - computed: true, optional: false, required: false
    public get disableNetworking() {
      return this.getBooleanAttribute('disable_networking') as any;
    }

    // docker_labels - computed: true, optional: false, required: false
    public dockerLabels(key: string): string {
      return new cdktf.StringMap(this, 'docker_labels').lookup(key);
    }

    // environment - computed: true, optional: false, required: false
    public environment(key: string): string {
      return new cdktf.StringMap(this, 'environment').lookup(key);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image - computed: true, optional: false, required: false
    public get image() {
      return this.getStringAttribute('image');
    }

    // image_digest - computed: true, optional: false, required: false
    public get imageDigest() {
      return this.getStringAttribute('image_digest');
    }

    // memory - computed: true, optional: false, required: false
    public get memory() {
      return this.getNumberAttribute('memory');
    }

    // memory_reservation - computed: true, optional: false, required: false
    public get memoryReservation() {
      return this.getNumberAttribute('memory_reservation');
    }

    // task_definition - computed: false, optional: false, required: true
    private _taskDefinition?: string; 
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
      this._taskDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container_name: cdktf.stringToTerraform(this._containerName),
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
      };
    }
  }
  export interface DataAwsEcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#cluster_arn DataAwsEcsService#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#service_name DataAwsEcsService#service_name}
    */
    readonly serviceName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service}
  */
  export class DataAwsEcsService extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsServiceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._serviceName = config.serviceName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // desired_count - computed: true, optional: false, required: false
    public get desiredCount() {
      return this.getNumberAttribute('desired_count');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_type - computed: true, optional: false, required: false
    public get launchType() {
      return this.getStringAttribute('launch_type');
    }

    // scheduling_strategy - computed: true, optional: false, required: false
    public get schedulingStrategy() {
      return this.getStringAttribute('scheduling_strategy');
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // task_definition - computed: true, optional: false, required: false
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        service_name: cdktf.stringToTerraform(this._serviceName),
      };
    }
  }
  export interface DataAwsEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html#task_definition DataAwsEcsTaskDefinition#task_definition}
    */
    readonly taskDefinition: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition}
  */
  export class DataAwsEcsTaskDefinition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_task_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsTaskDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_task_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._taskDefinition = config.taskDefinition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // family - computed: true, optional: false, required: false
    public get family() {
      return this.getStringAttribute('family');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_mode - computed: true, optional: false, required: false
    public get networkMode() {
      return this.getStringAttribute('network_mode');
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
      return this.getNumberAttribute('revision');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // task_definition - computed: false, optional: false, required: true
    private _taskDefinition?: string; 
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
      this._taskDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // task_role_arn - computed: true, optional: false, required: false
    public get taskRoleArn() {
      return this.getStringAttribute('task_role_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
      };
    }
  }
}
