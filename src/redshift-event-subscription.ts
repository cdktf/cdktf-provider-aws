// https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html
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
      "customer_aws_id": {
        "type": "string",
        "computed": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "event_categories": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
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
      "severity": {
        "type": "string",
        "optional": true
      },
      "sns_topic_arn": {
        "type": "string",
        "required": true
      },
      "source_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "source_type": {
        "type": "string",
        "optional": true
      },
      "status": {
        "type": "string",
        "computed": true
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
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedshiftEventSubscriptionConfig extends TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly eventCategories?: string[];
  readonly name: string;
  readonly severity?: string;
  readonly snsTopicArn: string;
  readonly sourceIds?: string[];
  readonly sourceType?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RedshiftEventSubscriptionTimeouts;
}
export interface RedshiftEventSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class RedshiftEventSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._eventCategories = config.eventCategories;
    this._name = config.name;
    this._severity = config.severity;
    this._snsTopicArn = config.snsTopicArn;
    this._sourceIds = config.sourceIds;
    this._sourceType = config.sourceType;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_aws_id - computed: true, optional: false, required: true
  public get customerAwsId() {
    return this.getStringAttribute('customer_aws_id');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // event_categories - computed: false, optional: true, required: false
  private _eventCategories?: string[];
  public get eventCategories() {
    return this._eventCategories;
  }
  public set eventCategories(value: string[] | undefined) {
    this._eventCategories = value;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string;
  public get severity() {
    return this._severity;
  }
  public set severity(value: string | undefined) {
    this._severity = value;
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn: string;
  public get snsTopicArn() {
    return this._snsTopicArn;
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }

  // source_ids - computed: false, optional: true, required: false
  private _sourceIds?: string[];
  public get sourceIds() {
    return this._sourceIds;
  }
  public set sourceIds(value: string[] | undefined) {
    this._sourceIds = value;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string;
  public get sourceType() {
    return this._sourceType;
  }
  public set sourceType(value: string | undefined) {
    this._sourceType = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedshiftEventSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RedshiftEventSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      event_categories: this._eventCategories,
      name: this._name,
      severity: this._severity,
      sns_topic_arn: this._snsTopicArn,
      source_ids: this._sourceIds,
      source_type: this._sourceType,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
