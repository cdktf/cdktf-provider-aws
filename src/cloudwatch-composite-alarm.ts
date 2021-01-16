// https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
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

export class CloudwatchCompositeAlarm extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean ) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[];
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }
  public set alarmActions(value: string[] ) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string;
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string ) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName: string;
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName
  }

  // alarm_rule - computed: false, optional: false, required: true
  private _alarmRule: string;
  public get alarmRule() {
    return this.getStringAttribute('alarm_rule');
  }
  public set alarmRule(value: string) {
    this._alarmRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRuleInput() {
    return this._alarmRule
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[];
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }
  public set insufficientDataActions(value: string[] ) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[];
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }
  public set okActions(value: string[] ) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      alarm_rule: cdktf.stringToTerraform(this._alarmRule),
      insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
      ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
