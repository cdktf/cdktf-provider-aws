// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventRuleConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly eventPattern?: string;
  readonly isEnabled?: boolean;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly roleArn?: string;
  readonly scheduleExpression?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class CloudwatchEventRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchEventRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eventPattern = config.eventPattern;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._roleArn = config.roleArn;
    this._scheduleExpression = config.scheduleExpression;
    this._tags = config.tags;
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

  // event_pattern - computed: false, optional: true, required: false
  private _eventPattern?: string;
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }
  public set eventPattern(value: string ) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean ) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string ) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression
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
      description: cdktf.stringToTerraform(this._description),
      event_pattern: cdktf.stringToTerraform(this._eventPattern),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
