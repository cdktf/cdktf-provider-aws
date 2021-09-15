// https://www.terraform.io/docs/providers/aws/r/glue_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#description GlueTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#enabled GlueTrigger#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#name GlueTrigger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#schedule GlueTrigger#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags GlueTrigger#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags_all GlueTrigger#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#type GlueTrigger#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#workflow_name GlueTrigger#workflow_name}
  */
  readonly workflowName?: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#actions GlueTrigger#actions}
  */
  readonly actions: GlueTriggerActions[];
  /**
  * predicate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#predicate GlueTrigger#predicate}
  */
  readonly predicate?: GlueTriggerPredicate[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeouts GlueTrigger#timeouts}
  */
  readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActionsNotificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notify_delay_after GlueTrigger#notify_delay_after}
  */
  readonly notifyDelayAfter?: number;
}

function glueTriggerActionsNotificationPropertyToTerraform(struct?: GlueTriggerActionsNotificationProperty): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
  }
}

export interface GlueTriggerActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#arguments GlueTrigger#arguments}
  */
  readonly arguments?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
  */
  readonly crawlerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#security_configuration GlueTrigger#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeout GlueTrigger#timeout}
  */
  readonly timeout?: number;
  /**
  * notification_property block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notification_property GlueTrigger#notification_property}
  */
  readonly notificationProperty?: GlueTriggerActionsNotificationProperty[];
}

function glueTriggerActionsToTerraform(struct?: GlueTriggerActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arguments: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.arguments),
    crawler_name: cdktf.stringToTerraform(struct!.crawlerName),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    security_configuration: cdktf.stringToTerraform(struct!.securityConfiguration),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    notification_property: cdktf.listMapper(glueTriggerActionsNotificationPropertyToTerraform)(struct!.notificationProperty),
  }
}

export interface GlueTriggerPredicateConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawl_state GlueTrigger#crawl_state}
  */
  readonly crawlState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}
  */
  readonly crawlerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}
  */
  readonly jobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical_operator GlueTrigger#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#state GlueTrigger#state}
  */
  readonly state?: string;
}

function glueTriggerPredicateConditionsToTerraform(struct?: GlueTriggerPredicateConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical GlueTrigger#logical}
  */
  readonly logical?: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#conditions GlueTrigger#conditions}
  */
  readonly conditions: GlueTriggerPredicateConditions[];
}

function glueTriggerPredicateToTerraform(struct?: GlueTriggerPredicate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    logical: cdktf.stringToTerraform(struct!.logical),
    conditions: cdktf.listMapper(glueTriggerPredicateConditionsToTerraform)(struct!.conditions),
  }
}

export interface GlueTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#create GlueTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#delete GlueTrigger#delete}
  */
  readonly delete?: string;
}

function glueTriggerTimeoutsToTerraform(struct?: GlueTriggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger} Resource
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
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._workflowName = config.workflowName;
    this._actions = config.actions;
    this._predicate = config.predicate;
    this._timeouts = config.timeouts;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string;
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string ) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName
  }

  // actions - computed: false, optional: false, required: true
  private _actions: GlueTriggerActions[];
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: GlueTriggerActions[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: GlueTriggerPredicate[];
  public get predicate() {
    return this.interpolationForAttribute('predicate') as any;
  }
  public set predicate(value: GlueTriggerPredicate[] ) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GlueTriggerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GlueTriggerTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      workflow_name: cdktf.stringToTerraform(this._workflowName),
      actions: cdktf.listMapper(glueTriggerActionsToTerraform)(this._actions),
      predicate: cdktf.listMapper(glueTriggerPredicateToTerraform)(this._predicate),
      timeouts: glueTriggerTimeoutsToTerraform(this._timeouts),
    };
  }
}
