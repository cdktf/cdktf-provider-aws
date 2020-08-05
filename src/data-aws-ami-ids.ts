// https://www.terraform.io/docs/providers/aws/r/data_aws_ami_ids.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "executable_users": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
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
      "name_regex": {
        "type": "string",
        "optional": true
      },
      "owners": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "sort_ascending": {
        "type": "bool",
        "optional": true
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

export interface DataAwsAmiIdsConfig extends TerraformMetaArguments {
  readonly executableUsers?: string[];
  readonly nameRegex?: string;
  readonly owners: string[];
  readonly sortAscending?: boolean;
  /** filter block */
  readonly filter?: DataAwsAmiIdsFilter[];
}
export interface DataAwsAmiIdsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsAmiIds extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAmiIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_ids',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._executableUsers = config.executableUsers;
    this._nameRegex = config.nameRegex;
    this._owners = config.owners;
    this._sortAscending = config.sortAscending;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // executable_users - computed: false, optional: true, required: false
  private _executableUsers?: string[];
  public get executableUsers() {
    return this._executableUsers;
  }
  public set executableUsers(value: string[] | undefined) {
    this._executableUsers = value;
  }

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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string;
  public get nameRegex() {
    return this._nameRegex;
  }
  public set nameRegex(value: string | undefined) {
    this._nameRegex = value;
  }

  // owners - computed: false, optional: false, required: true
  private _owners: string[];
  public get owners() {
    return this._owners;
  }
  public set owners(value: string[]) {
    this._owners = value;
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean;
  public get sortAscending() {
    return this._sortAscending;
  }
  public set sortAscending(value: boolean | undefined) {
    this._sortAscending = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAmiIdsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsAmiIdsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      executable_users: this._executableUsers,
      name_regex: this._nameRegex,
      owners: this._owners,
      sort_ascending: this._sortAscending,
      filter: this._filter,
    };
  }
}
