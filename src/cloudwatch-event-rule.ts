// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "event_pattern": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "role_arn": {
        "type": "string",
        "optional": true
      },
      "schedule_expression": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchEventRuleConfig extends TerraformMetaArguments {
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

export class CloudwatchEventRule extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // event_pattern - computed: false, optional: true, required: false
  private _eventPattern?: string;
  public get eventPattern() {
    return this._eventPattern;
  }
  public set eventPattern(value: string | undefined) {
    this._eventPattern = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this._scheduleExpression;
  }
  public set scheduleExpression(value: string | undefined) {
    this._scheduleExpression = value;
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

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      event_pattern: this._eventPattern,
      is_enabled: this._isEnabled,
      name: this._name,
      name_prefix: this._namePrefix,
      role_arn: this._roleArn,
      schedule_expression: this._scheduleExpression,
      tags: this._tags,
    };
  }
}
