// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html
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
      "mesh_name": {
        "type": "string",
        "required": true
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
            "provider": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "virtual_node": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "virtual_node_name": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "virtual_router": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "virtual_router_name": {
                          "type": "string",
                          "required": true
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

export interface AppmeshVirtualServiceConfig extends TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualServiceSpec[];
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
  readonly virtualNodeName: string;
}
export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
  readonly virtualRouterName: string;
}
export interface AppmeshVirtualServiceSpecProvider {
  /** virtual_node block */
  readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode[];
  /** virtual_router block */
  readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter[];
}
export interface AppmeshVirtualServiceSpec {
  /** provider block */
  readonly provider?: AppmeshVirtualServiceSpecProvider[];
}

// Resource

export class AppmeshVirtualService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
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

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this._meshName;
  }
  public set meshName(value: string) {
    this._meshName = value;
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

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualServiceSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshVirtualServiceSpec[]) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: this._meshName,
      name: this._name,
      tags: this._tags,
      spec: this._spec,
    };
  }
}
