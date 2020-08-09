// https://www.terraform.io/docs/providers/aws/r/data_aws_ram_resource_share.html
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
      "owning_account_id": {
        "type": "string",
        "computed": true
      },
      "resource_owner": {
        "type": "string",
        "required": true
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
        "optional": true,
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

export interface DataAwsRamResourceShareConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceOwner: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsRamResourceShareFilter[];
}
export interface DataAwsRamResourceShareFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsRamResourceShare extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceOwner = config.resourceOwner;
    this._tags = config.tags;
    this._filter = config.filter;
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

  // owning_account_id - computed: true, optional: false, required: true
  public get owningAccountId() {
    return this.getStringAttribute('owning_account_id');
  }

  // resource_owner - computed: false, optional: false, required: true
  private _resourceOwner: string;
  public get resourceOwner() {
    return this._resourceOwner;
  }
  public set resourceOwner(value: string) {
    this._resourceOwner = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRamResourceShareFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsRamResourceShareFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_owner: this._resourceOwner,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
