/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}
  */
  readonly actionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}
  */
  readonly alarmActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}
  */
  readonly alarmDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}
  */
  readonly alarmRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}
  */
  readonly insufficientDataActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}
  */
  readonly okActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * actions_suppressor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}
  */
  readonly actionsSuppressor?: CloudwatchCompositeAlarmActionsSuppressor;
}
export interface CloudwatchCompositeAlarmActionsSuppressor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#alarm CloudwatchCompositeAlarm#alarm}
  */
  readonly alarm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#extension_period CloudwatchCompositeAlarm#extension_period}
  */
  readonly extensionPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#wait_period CloudwatchCompositeAlarm#wait_period}
  */
  readonly waitPeriod: number;
}

export function cloudwatchCompositeAlarmActionsSuppressorToTerraform(struct?: CloudwatchCompositeAlarmActionsSuppressorOutputReference | CloudwatchCompositeAlarmActionsSuppressor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm: cdktf.stringToTerraform(struct!.alarm),
    extension_period: cdktf.numberToTerraform(struct!.extensionPeriod),
    wait_period: cdktf.numberToTerraform(struct!.waitPeriod),
  }
}


export function cloudwatchCompositeAlarmActionsSuppressorToHclTerraform(struct?: CloudwatchCompositeAlarmActionsSuppressorOutputReference | CloudwatchCompositeAlarmActionsSuppressor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm: {
      value: cdktf.stringToHclTerraform(struct!.alarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_period: {
      value: cdktf.numberToHclTerraform(struct!.extensionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_period: {
      value: cdktf.numberToHclTerraform(struct!.waitPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchCompositeAlarmActionsSuppressorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchCompositeAlarmActionsSuppressor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarm = this._alarm;
    }
    if (this._extensionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionPeriod = this._extensionPeriod;
    }
    if (this._waitPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitPeriod = this._waitPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchCompositeAlarmActionsSuppressor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarm = undefined;
      this._extensionPeriod = undefined;
      this._waitPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarm = value.alarm;
      this._extensionPeriod = value.extensionPeriod;
      this._waitPeriod = value.waitPeriod;
    }
  }

  // alarm - computed: false, optional: false, required: true
  private _alarm?: string; 
  public get alarm() {
    return this.getStringAttribute('alarm');
  }
  public set alarm(value: string) {
    this._alarm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmInput() {
    return this._alarm;
  }

  // extension_period - computed: false, optional: false, required: true
  private _extensionPeriod?: number; 
  public get extensionPeriod() {
    return this.getNumberAttribute('extension_period');
  }
  public set extensionPeriod(value: number) {
    this._extensionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionPeriodInput() {
    return this._extensionPeriod;
  }

  // wait_period - computed: false, optional: false, required: true
  private _waitPeriod?: number; 
  public get waitPeriod() {
    return this.getNumberAttribute('wait_period');
  }
  public set waitPeriod(value: number) {
    this._waitPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitPeriodInput() {
    return this._waitPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm}
*/
export class CloudwatchCompositeAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_composite_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchCompositeAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchCompositeAlarm to import
  * @param importFromId The id of the existing CloudwatchCompositeAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_composite_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchCompositeAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_composite_alarm',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._alarmRule = config.alarmRule;
    this._id = config.id;
    this._insufficientDataActions = config.insufficientDataActions;
    this._okActions = config.okActions;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._actionsSuppressor.internalValue = config.actionsSuppressor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean | cdktf.IResolvable; 
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean | cdktf.IResolvable) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled;
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[]; 
  public get alarmActions() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_actions'));
  }
  public set alarmActions(value: string[]) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription;
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // alarm_rule - computed: false, optional: false, required: true
  private _alarmRule?: string; 
  public get alarmRule() {
    return this.getStringAttribute('alarm_rule');
  }
  public set alarmRule(value: string) {
    this._alarmRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRuleInput() {
    return this._alarmRule;
  }

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

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[]; 
  public get insufficientDataActions() {
    return cdktf.Fn.tolist(this.getListAttribute('insufficient_data_actions'));
  }
  public set insufficientDataActions(value: string[]) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions;
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[]; 
  public get okActions() {
    return cdktf.Fn.tolist(this.getListAttribute('ok_actions'));
  }
  public set okActions(value: string[]) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions;
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

  // actions_suppressor - computed: false, optional: true, required: false
  private _actionsSuppressor = new CloudwatchCompositeAlarmActionsSuppressorOutputReference(this, "actions_suppressor");
  public get actionsSuppressor() {
    return this._actionsSuppressor;
  }
  public putActionsSuppressor(value: CloudwatchCompositeAlarmActionsSuppressor) {
    this._actionsSuppressor.internalValue = value;
  }
  public resetActionsSuppressor() {
    this._actionsSuppressor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsSuppressorInput() {
    return this._actionsSuppressor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmActions),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      alarm_rule: cdktf.stringToTerraform(this._alarmRule),
      id: cdktf.stringToTerraform(this._id),
      insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insufficientDataActions),
      ok_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._okActions),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      actions_suppressor: cloudwatchCompositeAlarmActionsSuppressorToTerraform(this._actionsSuppressor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions_enabled: {
        value: cdktf.booleanToHclTerraform(this._actionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alarm_description: {
        value: cdktf.stringToHclTerraform(this._alarmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_name: {
        value: cdktf.stringToHclTerraform(this._alarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_rule: {
        value: cdktf.stringToHclTerraform(this._alarmRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insufficient_data_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insufficientDataActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ok_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._okActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      actions_suppressor: {
        value: cloudwatchCompositeAlarmActionsSuppressorToHclTerraform(this._actionsSuppressor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchCompositeAlarmActionsSuppressorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
