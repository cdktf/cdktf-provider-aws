// https://www.terraform.io/docs/providers/aws/r/data_aws_instances.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "instance_state_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "instance_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "private_ips": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "public_ips": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsInstancesConfig extends TerraformMetaArguments {
  readonly instanceStateNames?: string[];
  readonly instanceTags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsInstancesFilter[];
}
export interface DataAwsInstancesFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_instances',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceStateNames = config.instanceStateNames;
    this._instanceTags = config.instanceTags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: true, optional: false, required: true
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_state_names - computed: false, optional: true, required: false
  private _instanceStateNames?: string[];
  public get instanceStateNames() {
    return this._instanceStateNames;
  }
  public set instanceStateNames(value: string[] | undefined) {
    this._instanceStateNames = value;
  }

  // instance_tags - computed: true, optional: true, required: false
  private _instanceTags?: { [key: string]: string }
  public get instanceTags(): { [key: string]: string } | undefined {
    return this._instanceTags; // Getting the computed value is not yet implemented
  }
  public set instanceTags(value: { [key: string]: string } | undefined) {
    this._instanceTags = value;
  }

  // private_ips - computed: true, optional: false, required: true
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // public_ips - computed: true, optional: false, required: true
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_state_names: this._instanceStateNames,
      instance_tags: this._instanceTags,
      filter: this._filter,
    };
  }
}
