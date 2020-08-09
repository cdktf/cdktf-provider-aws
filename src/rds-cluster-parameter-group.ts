// https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html
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
      "family": {
        "type": "string",
        "required": true
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
        "optional": true,
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
      "parameter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "apply_method": {
              "type": "string",
              "optional": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
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

export interface RdsClusterParameterGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly family: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly tags?: { [key: string]: string };
  /** parameter block */
  readonly parameter?: RdsClusterParameterGroupParameter[];
}
export interface RdsClusterParameterGroupParameter {
  readonly applyMethod?: string;
  readonly name: string;
  readonly value: string;
}

// Resource

export class RdsClusterParameterGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RdsClusterParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._family = config.family;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._parameter = config.parameter;
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

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this._family;
  }
  public set family(value: string) {
    this._family = value;
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
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

  // parameter - computed: false, optional: true, required: false
  private _parameter?: RdsClusterParameterGroupParameter[];
  public get parameter() {
    return this._parameter;
  }
  public set parameter(value: RdsClusterParameterGroupParameter[] | undefined) {
    this._parameter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      family: this._family,
      name: this._name,
      name_prefix: this._namePrefix,
      tags: this._tags,
      parameter: this._parameter,
    };
  }
}
