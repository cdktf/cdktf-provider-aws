// https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#id EcsCapacityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#name EcsCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags EcsCapacityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * auto_scaling_group_provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
  */
  readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
  */
  readonly instanceWarmupPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
  */
  readonly maximumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
  */
  readonly minimumScalingStepSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#status EcsCapacityProvider#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#target_capacity EcsCapacityProvider#target_capacity}
  */
  readonly targetCapacity?: number;
}

export function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceWarmupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
    }
    if (this._maximumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
    }
    if (this._minimumScalingStepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacity = this._targetCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceWarmupPeriod = undefined;
      this._maximumScalingStepSize = undefined;
      this._minimumScalingStepSize = undefined;
      this._status = undefined;
      this._targetCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceWarmupPeriod = value.instanceWarmupPeriod;
      this._maximumScalingStepSize = value.maximumScalingStepSize;
      this._minimumScalingStepSize = value.minimumScalingStepSize;
      this._status = value.status;
      this._targetCapacity = value.targetCapacity;
    }
  }

  // instance_warmup_period - computed: true, optional: true, required: false
  private _instanceWarmupPeriod?: number; 
  public get instanceWarmupPeriod() {
    return this.getNumberAttribute('instance_warmup_period');
  }
  public set instanceWarmupPeriod(value: number) {
    this._instanceWarmupPeriod = value;
  }
  public resetInstanceWarmupPeriod() {
    this._instanceWarmupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWarmupPeriodInput() {
    return this._instanceWarmupPeriod;
  }

  // maximum_scaling_step_size - computed: true, optional: true, required: false
  private _maximumScalingStepSize?: number; 
  public get maximumScalingStepSize() {
    return this.getNumberAttribute('maximum_scaling_step_size');
  }
  public set maximumScalingStepSize(value: number) {
    this._maximumScalingStepSize = value;
  }
  public resetMaximumScalingStepSize() {
    this._maximumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScalingStepSizeInput() {
    return this._maximumScalingStepSize;
  }

  // minimum_scaling_step_size - computed: true, optional: true, required: false
  private _minimumScalingStepSize?: number; 
  public get minimumScalingStepSize() {
    return this.getNumberAttribute('minimum_scaling_step_size');
  }
  public set minimumScalingStepSize(value: number) {
    this._minimumScalingStepSize = value;
  }
  public resetMinimumScalingStepSize() {
    this._minimumScalingStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumScalingStepSizeInput() {
    return this._minimumScalingStepSize;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_capacity - computed: true, optional: true, required: false
  private _targetCapacity?: number; 
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }
  public resetTargetCapacity() {
    this._targetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
  }
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
  */
  readonly autoScalingGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
  */
  readonly managedTerminationProtection?: string;
  /**
  * managed_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#managed_scaling EcsCapacityProvider#managed_scaling}
  */
  readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
}

export function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsCapacityProviderAutoScalingGroupProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
    }
    if (this._managedTerminationProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
    }
    if (this._managedScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedScaling = this._managedScaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsCapacityProviderAutoScalingGroupProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingGroupArn = undefined;
      this._managedTerminationProtection = undefined;
      this._managedScaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingGroupArn = value.autoScalingGroupArn;
      this._managedTerminationProtection = value.managedTerminationProtection;
      this._managedScaling.internalValue = value.managedScaling;
    }
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
    return this._autoScalingGroupArn;
  }

  // managed_termination_protection - computed: true, optional: true, required: false
  private _managedTerminationProtection?: string; 
  public get managedTerminationProtection() {
    return this.getStringAttribute('managed_termination_protection');
  }
  public set managedTerminationProtection(value: string) {
    this._managedTerminationProtection = value;
  }
  public resetManagedTerminationProtection() {
    this._managedTerminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedTerminationProtectionInput() {
    return this._managedTerminationProtection;
  }

  // managed_scaling - computed: false, optional: true, required: false
  private _managedScaling = new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this, "managed_scaling");
  public get managedScaling() {
    return this._managedScaling;
  }
  public putManagedScaling(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling) {
    this._managedScaling.internalValue = value;
  }
  public resetManagedScaling() {
    this._managedScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedScalingInput() {
    return this._managedScaling.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider aws_ecs_capacity_provider}
*/
export class EcsCapacityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_capacity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider aws_ecs_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_capacity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
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

  // auto_scaling_group_provider - computed: false, optional: false, required: true
  private _autoScalingGroupProvider = new EcsCapacityProviderAutoScalingGroupProviderOutputReference(this, "auto_scaling_group_provider");
  public get autoScalingGroupProvider() {
    return this._autoScalingGroupProvider;
  }
  public putAutoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider) {
    this._autoScalingGroupProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupProviderInput() {
    return this._autoScalingGroupProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider.internalValue),
    };
  }
}
