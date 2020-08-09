// https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "campaign_hook": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "lambda_function_name": {
              "type": "string",
              "optional": true
            },
            "mode": {
              "type": "string",
              "optional": true
            },
            "web_url": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "limits": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "daily": {
              "type": "number",
              "optional": true
            },
            "maximum_duration": {
              "type": "number",
              "optional": true
            },
            "messages_per_second": {
              "type": "number",
              "optional": true
            },
            "total": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "quiet_time": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "end": {
              "type": "string",
              "optional": true
            },
            "start": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PinpointAppConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly tags?: { [key: string]: string };
  /** campaign_hook block */
  readonly campaignHook?: PinpointAppCampaignHook[];
  /** limits block */
  readonly limits?: PinpointAppLimits[];
  /** quiet_time block */
  readonly quietTime?: PinpointAppQuietTime[];
}
export interface PinpointAppCampaignHook {
  readonly lambdaFunctionName?: string;
  readonly mode?: string;
  readonly webUrl?: string;
}
export interface PinpointAppLimits {
  readonly daily?: number;
  readonly maximumDuration?: number;
  readonly messagesPerSecond?: number;
  readonly total?: number;
}
export interface PinpointAppQuietTime {
  readonly end?: string;
  readonly start?: string;
}

// Resource

export class PinpointApp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PinpointAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_app',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._campaignHook = config.campaignHook;
    this._limits = config.limits;
    this._quietTime = config.quietTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: true
  public get applicationId() {
    return this.getStringAttribute('application_id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // campaign_hook - computed: false, optional: true, required: false
  private _campaignHook?: PinpointAppCampaignHook[];
  public get campaignHook() {
    return this._campaignHook;
  }
  public set campaignHook(value: PinpointAppCampaignHook[] | undefined) {
    this._campaignHook = value;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: PinpointAppLimits[];
  public get limits() {
    return this._limits;
  }
  public set limits(value: PinpointAppLimits[] | undefined) {
    this._limits = value;
  }

  // quiet_time - computed: false, optional: true, required: false
  private _quietTime?: PinpointAppQuietTime[];
  public get quietTime() {
    return this._quietTime;
  }
  public set quietTime(value: PinpointAppQuietTime[] | undefined) {
    this._quietTime = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      name_prefix: this._namePrefix,
      tags: this._tags,
      campaign_hook: this._campaignHook,
      limits: this._limits,
      quiet_time: this._quietTime,
    };
  }
}
