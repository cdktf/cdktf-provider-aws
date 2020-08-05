// https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
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
      "account_aggregation_source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "account_ids": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "all_regions": {
              "type": "bool",
              "optional": true
            },
            "regions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "organization_aggregation_source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "all_regions": {
              "type": "bool",
              "optional": true
            },
            "regions": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "role_arn": {
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

export interface ConfigConfigurationAggregatorConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** account_aggregation_source block */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
  /** organization_aggregation_source block */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  readonly accountIds: string[];
  readonly allRegions?: boolean;
  readonly regions?: string[];
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  readonly allRegions?: boolean;
  readonly regions?: string[];
  readonly roleArn: string;
}

// Resource

export class ConfigConfigurationAggregator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._accountAggregationSource = config.accountAggregationSource;
    this._organizationAggregationSource = config.organizationAggregationSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // account_aggregation_source - computed: false, optional: true, required: false
  private _accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
  public get accountAggregationSource() {
    return this._accountAggregationSource;
  }
  public set accountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource[] | undefined) {
    this._accountAggregationSource = value;
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
  public get organizationAggregationSource() {
    return this._organizationAggregationSource;
  }
  public set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource[] | undefined) {
    this._organizationAggregationSource = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      account_aggregation_source: this._accountAggregationSource,
      organization_aggregation_source: this._organizationAggregationSource,
    };
  }
}
