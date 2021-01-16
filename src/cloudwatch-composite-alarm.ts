// https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchCompositeAlarmConfig extends TerraformMetaArguments {
  readonly actionsEnabled?: boolean;
  readonly alarmActions?: string[];
  readonly alarmDescription?: string;
  readonly alarmName: string;
  readonly alarmRule: string;
  readonly insufficientDataActions?: string[];
  readonly okActions?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class CloudwatchCompositeAlarm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_composite_alarm',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._alarmRule = config.alarmRule;
    this._insufficientDataActions = config.insufficientDataActions;
    this._okActions = config.okActions;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean;
  public get actionsEnabled() {
    return this._actionsEnabled;
  }
  public set actionsEnabled(value: boolean | undefined) {
    this._actionsEnabled = value;
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[];
  public get alarmActions() {
    return this._alarmActions;
  }
  public set alarmActions(value: string[] | undefined) {
    this._alarmActions = value;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string;
  public get alarmDescription() {
    return this._alarmDescription;
  }
  public set alarmDescription(value: string | undefined) {
    this._alarmDescription = value;
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName: string;
  public get alarmName() {
    return this._alarmName;
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }

  // alarm_rule - computed: false, optional: false, required: true
  private _alarmRule: string;
  public get alarmRule() {
    return this._alarmRule;
  }
  public set alarmRule(value: string) {
    this._alarmRule = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[];
  public get insufficientDataActions() {
    return this._insufficientDataActions;
  }
  public set insufficientDataActions(value: string[] | undefined) {
    this._insufficientDataActions = value;
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[];
  public get okActions() {
    return this._okActions;
  }
  public set okActions(value: string[] | undefined) {
    this._okActions = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: this._actionsEnabled,
      alarm_actions: this._alarmActions,
      alarm_description: this._alarmDescription,
      alarm_name: this._alarmName,
      alarm_rule: this._alarmRule,
      insufficient_data_actions: this._insufficientDataActions,
      ok_actions: this._okActions,
      tags: this._tags,
    };
  }
}
