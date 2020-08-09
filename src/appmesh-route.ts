// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
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
      },
      "virtual_router_name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "spec": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "priority": {
              "type": "number",
              "optional": true
            }
          },
          "block_types": {
            "http_route": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "action": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "weighted_target": {
                          "nesting_mode": "set",
                          "block": {
                            "attributes": {
                              "virtual_node": {
                                "type": "string",
                                "required": true
                              },
                              "weight": {
                                "type": "number",
                                "required": true
                              }
                            }
                          },
                          "min_items": 1,
                          "max_items": 10
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "match": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "method": {
                          "type": "string",
                          "optional": true
                        },
                        "prefix": {
                          "type": "string",
                          "required": true
                        },
                        "scheme": {
                          "type": "string",
                          "optional": true
                        }
                      },
                      "block_types": {
                        "header": {
                          "nesting_mode": "set",
                          "block": {
                            "attributes": {
                              "invert": {
                                "type": "bool",
                                "optional": true
                              },
                              "name": {
                                "type": "string",
                                "required": true
                              }
                            },
                            "block_types": {
                              "match": {
                                "nesting_mode": "list",
                                "block": {
                                  "attributes": {
                                    "exact": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "prefix": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "regex": {
                                      "type": "string",
                                      "optional": true
                                    },
                                    "suffix": {
                                      "type": "string",
                                      "optional": true
                                    }
                                  },
                                  "block_types": {
                                    "range": {
                                      "nesting_mode": "list",
                                      "block": {
                                        "attributes": {
                                          "end": {
                                            "type": "number",
                                            "required": true
                                          },
                                          "start": {
                                            "type": "number",
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
                          "max_items": 10
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "tcp_route": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "action": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "weighted_target": {
                          "nesting_mode": "set",
                          "block": {
                            "attributes": {
                              "virtual_node": {
                                "type": "string",
                                "required": true
                              },
                              "weight": {
                                "type": "number",
                                "required": true
                              }
                            }
                          },
                          "min_items": 1,
                          "max_items": 10
                        }
                      }
                    },
                    "min_items": 1,
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

export interface AppmeshRouteConfig extends TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly virtualRouterName: string;
  /** spec block */
  readonly spec: AppmeshRouteSpec[];
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}
export interface AppmeshRouteSpecHttpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  readonly end: number;
  readonly start: number;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch[];
}
export interface AppmeshRouteSpecHttpRouteMatch {
  readonly method?: string;
  readonly prefix: string;
  readonly scheme?: string;
  /** header block */
  readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}
export interface AppmeshRouteSpecHttpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecHttpRouteAction[];
  /** match block */
  readonly match: AppmeshRouteSpecHttpRouteMatch[];
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}
export interface AppmeshRouteSpecTcpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecTcpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecTcpRouteAction[];
}
export interface AppmeshRouteSpec {
  readonly priority?: number;
  /** http_route block */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
  /** tcp_route block */
  readonly tcpRoute?: AppmeshRouteSpecTcpRoute[];
}

// Resource

export class AppmeshRoute extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_route',
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
    this._virtualRouterName = config.virtualRouterName;
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

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName: string;
  public get virtualRouterName() {
    return this._virtualRouterName;
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshRouteSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshRouteSpec[]) {
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
      virtual_router_name: this._virtualRouterName,
      spec: this._spec,
    };
  }
}
