// https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html
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
      "detail_type": {
        "type": "string",
        "required": true
      },
      "event_type_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "resource": {
        "type": "string",
        "required": true
      },
      "status": {
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
    },
    "block_types": {
      "target": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "address": {
              "type": "string",
              "required": true
            },
            "status": {
              "type": "string",
              "computed": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 10
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodestarnotificationsNotificationRuleConfig extends TerraformMetaArguments {
  readonly detailType: string;
  readonly eventTypeIds: string[];
  readonly name: string;
  readonly resource: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  /** target block */
  readonly target?: CodestarnotificationsNotificationRuleTarget[];
}
export interface CodestarnotificationsNotificationRuleTarget {
  readonly address: string;
  readonly type?: string;
}

// Resource

export class CodestarnotificationsNotificationRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarnotifications_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._detailType = config.detailType;
    this._eventTypeIds = config.eventTypeIds;
    this._name = config.name;
    this._resource = config.resource;
    this._status = config.status;
    this._tags = config.tags;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType: string;
  public get detailType() {
    return this._detailType;
  }
  public set detailType(value: string) {
    this._detailType = value;
  }

  // event_type_ids - computed: false, optional: false, required: true
  private _eventTypeIds: string[];
  public get eventTypeIds() {
    return this._eventTypeIds;
  }
  public set eventTypeIds(value: string[]) {
    this._eventTypeIds = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this._resource;
  }
  public set resource(value: string) {
    this._resource = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target - computed: false, optional: true, required: false
  private _target?: CodestarnotificationsNotificationRuleTarget[];
  public get target() {
    return this._target;
  }
  public set target(value: CodestarnotificationsNotificationRuleTarget[] | undefined) {
    this._target = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      detail_type: this._detailType,
      event_type_ids: this._eventTypeIds,
      name: this._name,
      resource: this._resource,
      status: this._status,
      tags: this._tags,
      target: this._target,
    };
  }
}
