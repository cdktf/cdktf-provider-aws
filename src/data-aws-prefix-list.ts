// https://www.terraform.io/docs/providers/aws/r/data_aws_prefix_list.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
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
      "prefix_list_id": {
        "type": "string",
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

export interface DataAwsPrefixListConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly prefixListId?: string;
  /** filter block */
  readonly filter?: DataAwsPrefixListFilter[];
}
export interface DataAwsPrefixListFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsPrefixList extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsPrefixListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._prefixListId = config.prefixListId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
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

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string;
  public get prefixListId() {
    return this._prefixListId;
  }
  public set prefixListId(value: string | undefined) {
    this._prefixListId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsPrefixListFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsPrefixListFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      prefix_list_id: this._prefixListId,
      filter: this._filter,
    };
  }
}
