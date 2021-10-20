// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Lifecycle Manager
*/
export namespace DLM {
  export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#description DlmLifecyclePolicy#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#state DlmLifecyclePolicy#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags DlmLifecyclePolicy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_all DlmLifecyclePolicy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * policy_details block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#policy_details DlmLifecyclePolicy#policy_details}
    */
    readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
  }
  export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#times DlmLifecyclePolicy#times}
    */
    readonly times?: string[];
  }

  function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      interval: cdktf.numberToTerraform(struct!.interval),
      interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
      times: cdktf.listMapper(cdktf.stringToTerraform)(struct!.times),
    }
  }

  export class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // interval - computed: false, optional: false, required: true
    private _interval?: number; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
      this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // interval_unit - computed: false, optional: true, required: false
    private _intervalUnit?: string | undefined; 
    public get intervalUnit() {
      return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string | undefined) {
      this._intervalUnit = value;
    }
    public resetIntervalUnit() {
      this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
      return this._intervalUnit
    }

    // times - computed: true, optional: true, required: false
    private _times?: string[] | undefined; 
    public get times() {
      return this.getListAttribute('times');
    }
    public set times(value: string[] | undefined) {
      this._times = value;
    }
    public resetTimes() {
      this._times = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timesInput() {
      return this._times
    }
  }
  export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#count DlmLifecyclePolicy#count}
    */
    readonly count: number;
  }

  function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      count: cdktf.numberToTerraform(struct!.count),
    }
  }

  export class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // count - computed: false, optional: false, required: true
    private _count?: number; 
    public get count() {
      return this.getNumberAttribute('count');
    }
    public set count(value: number) {
      this._count = value;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
      return this._count
    }
  }
  export interface DlmLifecyclePolicyPolicyDetailsSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#copy_tags DlmLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#name DlmLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_to_add DlmLifecyclePolicy#tags_to_add}
    */
    readonly tagsToAdd?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * create_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#create_rule DlmLifecyclePolicy#create_rule}
    */
    readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
    /**
    * retain_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
  }

  function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      copy_tags: cdktf.booleanToTerraform(struct!.copyTags),
      name: cdktf.stringToTerraform(struct!.name),
      tags_to_add: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tagsToAdd),
      create_rule: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct!.createRule),
      retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct!.retainRule),
    }
  }

  export interface DlmLifecyclePolicyPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#resource_types DlmLifecyclePolicy#resource_types}
    */
    readonly resourceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#target_tags DlmLifecyclePolicy#target_tags}
    */
    readonly targetTags: { [key: string]: string } | cdktf.IResolvable;
    /**
    * schedule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#schedule DlmLifecyclePolicy#schedule}
    */
    readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[];
  }

  function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
      target_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.targetTags),
      schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform)(struct!.schedule),
    }
  }

  export class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource_types - computed: false, optional: false, required: true
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
      return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
      this._resourceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
      return this._resourceTypes
    }

    // target_tags - computed: false, optional: false, required: true
    private _targetTags?: { [key: string]: string } | cdktf.IResolvable; 
    public get targetTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('target_tags') as any;
    }
    public set targetTags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._targetTags = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTagsInput() {
      return this._targetTags
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule?: DlmLifecyclePolicyPolicyDetailsSchedule[]; 
    public get schedule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('schedule') as any;
    }
    public set schedule(value: DlmLifecyclePolicyPolicyDetailsSchedule[]) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy}
  */
  export class DlmLifecyclePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dlm_lifecycle_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DlmLifecyclePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dlm_lifecycle_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._executionRoleArn = config.executionRoleArn;
      this._state = config.state;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._policyDetails = config.policyDetails;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string) {
      this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
      this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // state - computed: false, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
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

    // policy_details - computed: false, optional: false, required: true
    private _policyDetails?: DlmLifecyclePolicyPolicyDetails; 
    private __policyDetailsOutput = new DlmLifecyclePolicyPolicyDetailsOutputReference(this as any, "policy_details", true);
    public get policyDetails() {
      return this.__policyDetailsOutput;
    }
    public putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails) {
      this._policyDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDetailsInput() {
      return this._policyDetails
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails),
      };
    }
  }
}
