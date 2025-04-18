// https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#tags AppautoscalingTarget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * suspended_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#suspended_state AppautoscalingTarget#suspended_state}
  */
  readonly suspendedState?: AppautoscalingTargetSuspendedState;
}
export interface AppautoscalingTargetSuspendedState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}
  */
  readonly dynamicScalingInSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}
  */
  readonly dynamicScalingOutSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}
  */
  readonly scheduledScalingSuspended?: boolean | cdktf.IResolvable;
}

export function appautoscalingTargetSuspendedStateToTerraform(struct?: AppautoscalingTargetSuspendedStateOutputReference | AppautoscalingTargetSuspendedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_scaling_in_suspended: cdktf.booleanToTerraform(struct!.dynamicScalingInSuspended),
    dynamic_scaling_out_suspended: cdktf.booleanToTerraform(struct!.dynamicScalingOutSuspended),
    scheduled_scaling_suspended: cdktf.booleanToTerraform(struct!.scheduledScalingSuspended),
  }
}


export function appautoscalingTargetSuspendedStateToHclTerraform(struct?: AppautoscalingTargetSuspendedStateOutputReference | AppautoscalingTargetSuspendedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_scaling_in_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicScalingInSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_scaling_out_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicScalingOutSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduled_scaling_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.scheduledScalingSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingTargetSuspendedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingTargetSuspendedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicScalingInSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicScalingInSuspended = this._dynamicScalingInSuspended;
    }
    if (this._dynamicScalingOutSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicScalingOutSuspended = this._dynamicScalingOutSuspended;
    }
    if (this._scheduledScalingSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScalingSuspended = this._scheduledScalingSuspended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingTargetSuspendedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicScalingInSuspended = undefined;
      this._dynamicScalingOutSuspended = undefined;
      this._scheduledScalingSuspended = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicScalingInSuspended = value.dynamicScalingInSuspended;
      this._dynamicScalingOutSuspended = value.dynamicScalingOutSuspended;
      this._scheduledScalingSuspended = value.scheduledScalingSuspended;
    }
  }

  // dynamic_scaling_in_suspended - computed: false, optional: true, required: false
  private _dynamicScalingInSuspended?: boolean | cdktf.IResolvable; 
  public get dynamicScalingInSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_in_suspended');
  }
  public set dynamicScalingInSuspended(value: boolean | cdktf.IResolvable) {
    this._dynamicScalingInSuspended = value;
  }
  public resetDynamicScalingInSuspended() {
    this._dynamicScalingInSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicScalingInSuspendedInput() {
    return this._dynamicScalingInSuspended;
  }

  // dynamic_scaling_out_suspended - computed: false, optional: true, required: false
  private _dynamicScalingOutSuspended?: boolean | cdktf.IResolvable; 
  public get dynamicScalingOutSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_out_suspended');
  }
  public set dynamicScalingOutSuspended(value: boolean | cdktf.IResolvable) {
    this._dynamicScalingOutSuspended = value;
  }
  public resetDynamicScalingOutSuspended() {
    this._dynamicScalingOutSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicScalingOutSuspendedInput() {
    return this._dynamicScalingOutSuspended;
  }

  // scheduled_scaling_suspended - computed: false, optional: true, required: false
  private _scheduledScalingSuspended?: boolean | cdktf.IResolvable; 
  public get scheduledScalingSuspended() {
    return this.getBooleanAttribute('scheduled_scaling_suspended');
  }
  public set scheduledScalingSuspended(value: boolean | cdktf.IResolvable) {
    this._scheduledScalingSuspended = value;
  }
  public resetScheduledScalingSuspended() {
    this._scheduledScalingSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScalingSuspendedInput() {
    return this._scheduledScalingSuspended;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target aws_appautoscaling_target}
*/
export class AppautoscalingTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appautoscaling_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppautoscalingTarget to import
  * @param importFromId The id of the existing AppautoscalingTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppautoscalingTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appautoscaling_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/appautoscaling_target aws_appautoscaling_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_target',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.95.0',
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
    this._id = config.id;
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._resourceId = config.resourceId;
    this._roleArn = config.roleArn;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._suspendedState.internalValue = config.suspendedState;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
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

  // suspended_state - computed: false, optional: true, required: false
  private _suspendedState = new AppautoscalingTargetSuspendedStateOutputReference(this, "suspended_state");
  public get suspendedState() {
    return this._suspendedState;
  }
  public putSuspendedState(value: AppautoscalingTargetSuspendedState) {
    this._suspendedState.internalValue = value;
  }
  public resetSuspendedState() {
    this._suspendedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedStateInput() {
    return this._suspendedState.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      suspended_state: appautoscalingTargetSuspendedStateToTerraform(this._suspendedState.internalValue),
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
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_capacity: {
        value: cdktf.numberToHclTerraform(this._minCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scalable_dimension: {
        value: cdktf.stringToHclTerraform(this._scalableDimension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceNamespace),
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
      suspended_state: {
        value: appautoscalingTargetSuspendedStateToHclTerraform(this._suspendedState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppautoscalingTargetSuspendedStateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
