// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}
  */
  readonly startOnCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}
  */
  readonly workflowName?: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#actions GlueTrigger#actions}
  */
  readonly actions: GlueTriggerActions[] | cdktf.IResolvable;
  /**
  * event_batching_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}
  */
  readonly eventBatchingCondition?: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable;
  /**
  * predicate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#predicate GlueTrigger#predicate}
  */
  readonly predicate?: GlueTriggerPredicate;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeouts GlueTrigger#timeouts}
  */
  readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActionsNotificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}
  */
  readonly notifyDelayAfter?: number;
}

export function glueTriggerActionsNotificationPropertyToTerraform(struct?: GlueTriggerActionsNotificationPropertyOutputReference | GlueTriggerActionsNotificationProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
  }
}

export class GlueTriggerActionsNotificationPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GlueTriggerActionsNotificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyDelayAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDelayAfter = this._notifyDelayAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTriggerActionsNotificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifyDelayAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifyDelayAfter = value.notifyDelayAfter;
    }
  }

  // notify_delay_after - computed: false, optional: true, required: false
  private _notifyDelayAfter?: number; 
  public get notifyDelayAfter() {
    return this.getNumberAttribute('notify_delay_after');
  }
  public set notifyDelayAfter(value: number) {
    this._notifyDelayAfter = value;
  }
  public resetNotifyDelayAfter() {
    this._notifyDelayAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDelayAfterInput() {
    return this._notifyDelayAfter;
  }
}
export interface GlueTriggerActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}
  */
  readonly arguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}
  */
  readonly crawlerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}
  */
  readonly timeout?: number;
  /**
  * notification_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notification_property GlueTrigger#notification_property}
  */
  readonly notificationProperty?: GlueTriggerActionsNotificationProperty;
}

export function glueTriggerActionsToTerraform(struct?: GlueTriggerActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.arguments),
    crawler_name: cdktf.stringToTerraform(struct!.crawlerName),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    security_configuration: cdktf.stringToTerraform(struct!.securityConfiguration),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    notification_property: glueTriggerActionsNotificationPropertyToTerraform(struct!.notificationProperty),
  }
}

export interface GlueTriggerEventBatchingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}
  */
  readonly batchSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}
  */
  readonly batchWindow?: number;
}

export function glueTriggerEventBatchingConditionToTerraform(struct?: GlueTriggerEventBatchingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    batch_window: cdktf.numberToTerraform(struct!.batchWindow),
  }
}

export interface GlueTriggerPredicateConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}
  */
  readonly crawlState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}
  */
  readonly crawlerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}
  */
  readonly state?: string;
}

export function glueTriggerPredicateConditionsToTerraform(struct?: GlueTriggerPredicateConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawl_state: cdktf.stringToTerraform(struct!.crawlState),
    crawler_name: cdktf.stringToTerraform(struct!.crawlerName),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export interface GlueTriggerPredicate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}
  */
  readonly logical?: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#conditions GlueTrigger#conditions}
  */
  readonly conditions: GlueTriggerPredicateConditions[] | cdktf.IResolvable;
}

export function glueTriggerPredicateToTerraform(struct?: GlueTriggerPredicateOutputReference | GlueTriggerPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical: cdktf.stringToTerraform(struct!.logical),
    conditions: cdktf.listMapper(glueTriggerPredicateConditionsToTerraform)(struct!.conditions),
  }
}

export class GlueTriggerPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GlueTriggerPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logical !== undefined) {
      hasAnyValues = true;
      internalValueResult.logical = this._logical;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTriggerPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logical = undefined;
      this._conditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logical = value.logical;
      this._conditions = value.conditions;
    }
  }

  // logical - computed: false, optional: true, required: false
  private _logical?: string; 
  public get logical() {
    return this.getStringAttribute('logical');
  }
  public set logical(value: string) {
    this._logical = value;
  }
  public resetLogical() {
    this._logical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInput() {
    return this._logical;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: GlueTriggerPredicateConditions[] | cdktf.IResolvable; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions');
  }
  public set conditions(value: GlueTriggerPredicateConditions[] | cdktf.IResolvable) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface GlueTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}
  */
  readonly delete?: string;
}

export function glueTriggerTimeoutsToTerraform(struct?: GlueTriggerTimeoutsOutputReference | GlueTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GlueTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GlueTriggerTimeouts | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTriggerTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger aws_glue_trigger}
*/
export class GlueTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger aws_glue_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: GlueTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_trigger',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._schedule = config.schedule;
    this._startOnCreation = config.startOnCreation;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._workflowName = config.workflowName;
    this._actions = config.actions;
    this._eventBatchingCondition = config.eventBatchingCondition;
    this._predicate.internalValue = config.predicate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // start_on_creation - computed: false, optional: true, required: false
  private _startOnCreation?: boolean | cdktf.IResolvable; 
  public get startOnCreation() {
    return this.getBooleanAttribute('start_on_creation');
  }
  public set startOnCreation(value: boolean | cdktf.IResolvable) {
    this._startOnCreation = value;
  }
  public resetStartOnCreation() {
    this._startOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnCreationInput() {
    return this._startOnCreation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: GlueTriggerActions[] | cdktf.IResolvable; 
  public get actions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('actions');
  }
  public set actions(value: GlueTriggerActions[] | cdktf.IResolvable) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // event_batching_condition - computed: false, optional: true, required: false
  private _eventBatchingCondition?: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable; 
  public get eventBatchingCondition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_batching_condition');
  }
  public set eventBatchingCondition(value: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable) {
    this._eventBatchingCondition = value;
  }
  public resetEventBatchingCondition() {
    this._eventBatchingCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBatchingConditionInput() {
    return this._eventBatchingCondition;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate = new GlueTriggerPredicateOutputReference(this, "predicate", true);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: GlueTriggerPredicate) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlueTriggerTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlueTriggerTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      start_on_creation: cdktf.booleanToTerraform(this._startOnCreation),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      workflow_name: cdktf.stringToTerraform(this._workflowName),
      actions: cdktf.listMapper(glueTriggerActionsToTerraform)(this._actions),
      event_batching_condition: cdktf.listMapper(glueTriggerEventBatchingConditionToTerraform)(this._eventBatchingCondition),
      predicate: glueTriggerPredicateToTerraform(this._predicate.internalValue),
      timeouts: glueTriggerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
