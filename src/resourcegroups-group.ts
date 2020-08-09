// https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html
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
      "resource_query": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "query": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          }
        },
        "min_items": 1,
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

export interface ResourcegroupsGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** resource_query block */
  readonly resourceQuery: ResourcegroupsGroupResourceQuery[];
}
export interface ResourcegroupsGroupResourceQuery {
  readonly query: string;
  readonly type?: string;
}

// Resource

export class ResourcegroupsGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resourcegroups_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._resourceQuery = config.resourceQuery;
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

  // resource_query - computed: false, optional: false, required: true
  private _resourceQuery: ResourcegroupsGroupResourceQuery[];
  public get resourceQuery() {
    return this._resourceQuery;
  }
  public set resourceQuery(value: ResourcegroupsGroupResourceQuery[]) {
    this._resourceQuery = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      tags: this._tags,
      resource_query: this._resourceQuery,
    };
  }
}
