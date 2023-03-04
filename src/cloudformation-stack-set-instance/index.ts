// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}
  */
  readonly callAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
  */
  readonly parameterOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}
  */
  readonly retainStack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}
  */
  readonly stackSetName: string;
  /**
  * deployment_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}
  */
  readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
  /**
  * operation_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#operation_preferences CloudformationStackSetInstance#operation_preferences}
  */
  readonly operationPreferences?: CloudformationStackSetInstanceOperationPreferences;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}
  */
  readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceDeploymentTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
}

export function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnitIds),
  }
}

export class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetInstanceDeploymentTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationalUnitIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitIds = this._organizationalUnitIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackSetInstanceDeploymentTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organizationalUnitIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organizationalUnitIds = value.organizationalUnitIds;
    }
  }

  // organizational_unit_ids - computed: false, optional: true, required: false
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }
}
export interface CloudformationStackSetInstanceOperationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}
  */
  readonly maxConcurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}
  */
  readonly maxConcurrentPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}
  */
  readonly regionConcurrencyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}
  */
  readonly regionOrder?: string[];
}

export function cloudformationStackSetInstanceOperationPreferencesToTerraform(struct?: CloudformationStackSetInstanceOperationPreferencesOutputReference | CloudformationStackSetInstanceOperationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrent_count: cdktf.numberToTerraform(struct!.maxConcurrentCount),
    max_concurrent_percentage: cdktf.numberToTerraform(struct!.maxConcurrentPercentage),
    region_concurrency_type: cdktf.stringToTerraform(struct!.regionConcurrencyType),
    region_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionOrder),
  }
}

export class CloudformationStackSetInstanceOperationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetInstanceOperationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureToleranceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureToleranceCount = this._failureToleranceCount;
    }
    if (this._failureTolerancePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
    }
    if (this._maxConcurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCount = this._maxConcurrentCount;
    }
    if (this._maxConcurrentPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentPercentage = this._maxConcurrentPercentage;
    }
    if (this._regionConcurrencyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionConcurrencyType = this._regionConcurrencyType;
    }
    if (this._regionOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionOrder = this._regionOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackSetInstanceOperationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureToleranceCount = undefined;
      this._failureTolerancePercentage = undefined;
      this._maxConcurrentCount = undefined;
      this._maxConcurrentPercentage = undefined;
      this._regionConcurrencyType = undefined;
      this._regionOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureToleranceCount = value.failureToleranceCount;
      this._failureTolerancePercentage = value.failureTolerancePercentage;
      this._maxConcurrentCount = value.maxConcurrentCount;
      this._maxConcurrentPercentage = value.maxConcurrentPercentage;
      this._regionConcurrencyType = value.regionConcurrencyType;
      this._regionOrder = value.regionOrder;
    }
  }

  // failure_tolerance_count - computed: false, optional: true, required: false
  private _failureToleranceCount?: number; 
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }
  public set failureToleranceCount(value: number) {
    this._failureToleranceCount = value;
  }
  public resetFailureToleranceCount() {
    this._failureToleranceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureToleranceCountInput() {
    return this._failureToleranceCount;
  }

  // failure_tolerance_percentage - computed: false, optional: true, required: false
  private _failureTolerancePercentage?: number; 
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }
  public set failureTolerancePercentage(value: number) {
    this._failureTolerancePercentage = value;
  }
  public resetFailureTolerancePercentage() {
    this._failureTolerancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTolerancePercentageInput() {
    return this._failureTolerancePercentage;
  }

  // max_concurrent_count - computed: false, optional: true, required: false
  private _maxConcurrentCount?: number; 
  public get maxConcurrentCount() {
    return this.getNumberAttribute('max_concurrent_count');
  }
  public set maxConcurrentCount(value: number) {
    this._maxConcurrentCount = value;
  }
  public resetMaxConcurrentCount() {
    this._maxConcurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCountInput() {
    return this._maxConcurrentCount;
  }

  // max_concurrent_percentage - computed: false, optional: true, required: false
  private _maxConcurrentPercentage?: number; 
  public get maxConcurrentPercentage() {
    return this.getNumberAttribute('max_concurrent_percentage');
  }
  public set maxConcurrentPercentage(value: number) {
    this._maxConcurrentPercentage = value;
  }
  public resetMaxConcurrentPercentage() {
    this._maxConcurrentPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentPercentageInput() {
    return this._maxConcurrentPercentage;
  }

  // region_concurrency_type - computed: false, optional: true, required: false
  private _regionConcurrencyType?: string; 
  public get regionConcurrencyType() {
    return this.getStringAttribute('region_concurrency_type');
  }
  public set regionConcurrencyType(value: string) {
    this._regionConcurrencyType = value;
  }
  public resetRegionConcurrencyType() {
    this._regionConcurrencyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionConcurrencyTypeInput() {
    return this._regionConcurrencyType;
  }

  // region_order - computed: false, optional: true, required: false
  private _regionOrder?: string[]; 
  public get regionOrder() {
    return this.getListAttribute('region_order');
  }
  public set regionOrder(value: string[]) {
    this._regionOrder = value;
  }
  public resetRegionOrder() {
    this._regionOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOrderInput() {
    return this._regionOrder;
  }
}
export interface CloudformationStackSetInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}
  */
  readonly update?: string;
}

export function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeoutsOutputReference | CloudformationStackSetInstanceTimeouts | cdktf.IResolvable): any {
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

export class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}
*/
export class CloudformationStackSetInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudformation_stack_set_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackSetInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set_instance',
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
    this._accountId = config.accountId;
    this._callAs = config.callAs;
    this._id = config.id;
    this._parameterOverrides = config.parameterOverrides;
    this._region = config.region;
    this._retainStack = config.retainStack;
    this._stackSetName = config.stackSetName;
    this._deploymentTargets.internalValue = config.deploymentTargets;
    this._operationPreferences.internalValue = config.operationPreferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // call_as - computed: false, optional: true, required: false
  private _callAs?: string; 
  public get callAs() {
    return this.getStringAttribute('call_as');
  }
  public set callAs(value: string) {
    this._callAs = value;
  }
  public resetCallAs() {
    this._callAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAsInput() {
    return this._callAs;
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

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string }; 
  public get parameterOverrides() {
    return this.getStringMapAttribute('parameter_overrides');
  }
  public set parameterOverrides(value: { [key: string]: string }) {
    this._parameterOverrides = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides;
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

  // retain_stack - computed: false, optional: true, required: false
  private _retainStack?: boolean | cdktf.IResolvable; 
  public get retainStack() {
    return this.getBooleanAttribute('retain_stack');
  }
  public set retainStack(value: boolean | cdktf.IResolvable) {
    this._retainStack = value;
  }
  public resetRetainStack() {
    this._retainStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStackInput() {
    return this._retainStack;
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName;
  }

  // deployment_targets - computed: false, optional: true, required: false
  private _deploymentTargets = new CloudformationStackSetInstanceDeploymentTargetsOutputReference(this, "deployment_targets");
  public get deploymentTargets() {
    return this._deploymentTargets;
  }
  public putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets) {
    this._deploymentTargets.internalValue = value;
  }
  public resetDeploymentTargets() {
    this._deploymentTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetsInput() {
    return this._deploymentTargets.internalValue;
  }

  // operation_preferences - computed: false, optional: true, required: false
  private _operationPreferences = new CloudformationStackSetInstanceOperationPreferencesOutputReference(this, "operation_preferences");
  public get operationPreferences() {
    return this._operationPreferences;
  }
  public putOperationPreferences(value: CloudformationStackSetInstanceOperationPreferences) {
    this._operationPreferences.internalValue = value;
  }
  public resetOperationPreferences() {
    this._operationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPreferencesInput() {
    return this._operationPreferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudformationStackSetInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudformationStackSetInstanceTimeouts) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      call_as: cdktf.stringToTerraform(this._callAs),
      id: cdktf.stringToTerraform(this._id),
      parameter_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameterOverrides),
      region: cdktf.stringToTerraform(this._region),
      retain_stack: cdktf.booleanToTerraform(this._retainStack),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      deployment_targets: cloudformationStackSetInstanceDeploymentTargetsToTerraform(this._deploymentTargets.internalValue),
      operation_preferences: cloudformationStackSetInstanceOperationPreferencesToTerraform(this._operationPreferences.internalValue),
      timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
