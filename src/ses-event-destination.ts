// https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "configuration_set_name": {
        "type": "string",
        "required": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "matching_types": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "cloudwatch_destination": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "default_value": {
              "type": "string",
              "required": true
            },
            "dimension_name": {
              "type": "string",
              "required": true
            },
            "value_source": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "kinesis_destination": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "role_arn": {
              "type": "string",
              "required": true
            },
            "stream_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "sns_destination": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "topic_arn": {
              "type": "string",
              "required": true
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

export interface SesEventDestinationConfig extends TerraformMetaArguments {
  readonly configurationSetName: string;
  readonly enabled?: boolean;
  readonly matchingTypes: string[];
  readonly name: string;
  /** cloudwatch_destination block */
  readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
  /** kinesis_destination block */
  readonly kinesisDestination?: SesEventDestinationKinesisDestination[];
  /** sns_destination block */
  readonly snsDestination?: SesEventDestinationSnsDestination[];
}
export interface SesEventDestinationCloudwatchDestination {
  readonly defaultValue: string;
  readonly dimensionName: string;
  readonly valueSource: string;
}
export interface SesEventDestinationKinesisDestination {
  readonly roleArn: string;
  readonly streamArn: string;
}
export interface SesEventDestinationSnsDestination {
  readonly topicArn: string;
}

// Resource

export class SesEventDestination extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_event_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configurationSetName = config.configurationSetName;
    this._enabled = config.enabled;
    this._matchingTypes = config.matchingTypes;
    this._name = config.name;
    this._cloudwatchDestination = config.cloudwatchDestination;
    this._kinesisDestination = config.kinesisDestination;
    this._snsDestination = config.snsDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName: string;
  public get configurationSetName() {
    return this._configurationSetName;
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // matching_types - computed: false, optional: false, required: true
  private _matchingTypes: string[];
  public get matchingTypes() {
    return this._matchingTypes;
  }
  public set matchingTypes(value: string[]) {
    this._matchingTypes = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // cloudwatch_destination - computed: false, optional: true, required: false
  private _cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
  public get cloudwatchDestination() {
    return this._cloudwatchDestination;
  }
  public set cloudwatchDestination(value: SesEventDestinationCloudwatchDestination[] | undefined) {
    this._cloudwatchDestination = value;
  }

  // kinesis_destination - computed: false, optional: true, required: false
  private _kinesisDestination?: SesEventDestinationKinesisDestination[];
  public get kinesisDestination() {
    return this._kinesisDestination;
  }
  public set kinesisDestination(value: SesEventDestinationKinesisDestination[] | undefined) {
    this._kinesisDestination = value;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination?: SesEventDestinationSnsDestination[];
  public get snsDestination() {
    return this._snsDestination;
  }
  public set snsDestination(value: SesEventDestinationSnsDestination[] | undefined) {
    this._snsDestination = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: this._configurationSetName,
      enabled: this._enabled,
      matching_types: this._matchingTypes,
      name: this._name,
      cloudwatch_destination: this._cloudwatchDestination,
      kinesis_destination: this._kinesisDestination,
      sns_destination: this._snsDestination,
    };
  }
}
