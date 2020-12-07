// https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** auto_scaling_group_provider block */
  readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
  readonly maximumScalingStepSize?: number;
  readonly minimumScalingStepSize?: number;
  readonly status?: string;
  readonly targetCapacity?: number;
}

function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
    minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
    status: cdktf.stringToTerraform(struct!.status),
    target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
  }
}

export interface EcsCapacityProviderAutoScalingGroupProvider {
  readonly autoScalingGroupArn: string;
  readonly managedTerminationProtection?: string;
  /** managed_scaling block */
  readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling[];
}

function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
    managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
    managed_scaling: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform)(struct!.managedScaling),
  }
}


// Resource

export class EcsCapacityProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // auto_scaling_group_provider - computed: false, optional: false, required: true
  private _autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
  public get autoScalingGroupProvider() {
    return this.interpolationForAttribute('auto_scaling_group_provider') as any;
  }
  public set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider[]) {
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
      auto_scaling_group_provider: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderToTerraform)(this._autoScalingGroupProvider),
    };
  }
}
