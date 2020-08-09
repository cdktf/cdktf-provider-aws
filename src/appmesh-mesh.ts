// https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html
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
      "created_date": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_updated_date": {
        "type": "string",
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
      "spec": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "egress_filter": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "type": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
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

export interface AppmeshMeshConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec?: AppmeshMeshSpec[];
}
export interface AppmeshMeshSpecEgressFilter {
  readonly type?: string;
}
export interface AppmeshMeshSpec {
  /** egress_filter block */
  readonly egressFilter?: AppmeshMeshSpecEgressFilter[];
}

// Resource

export class AppmeshMesh extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_mesh',
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
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // spec - computed: false, optional: true, required: false
  private _spec?: AppmeshMeshSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshMeshSpec[] | undefined) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      spec: this._spec,
    };
  }
}
