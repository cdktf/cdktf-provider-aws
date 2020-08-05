// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

/*
{
  "version": 1,
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
          "attributes": {
            "backends": {
              "type": [
                "set",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "backend": {
              "nesting_mode": "set",
              "block": {
                "block_types": {
                  "virtual_service": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "virtual_service_name": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 25
            },
            "listener": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "health_check": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "healthy_threshold": {
                          "type": "number",
                          "required": true
                        },
                        "interval_millis": {
                          "type": "number",
                          "required": true
                        },
                        "path": {
                          "type": "string",
                          "optional": true
                        },
                        "port": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        },
                        "protocol": {
                          "type": "string",
                          "required": true
                        },
                        "timeout_millis": {
                          "type": "number",
                          "required": true
                        },
                        "unhealthy_threshold": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "port_mapping": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "port": {
                          "type": "number",
                          "required": true
                        },
                        "protocol": {
                          "type": "string",
                          "required": true
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
            "logging": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "access_log": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "file": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "path": {
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
              "max_items": 1
            },
            "service_discovery": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "aws_cloud_map": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "attributes": {
                          "type": [
                            "map",
                            "string"
                          ],
                          "optional": true
                        },
                        "namespace_name": {
                          "type": "string",
                          "required": true
                        },
                        "service_name": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "dns": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "hostname": {
                          "type": "string",
                          "required": true
                        },
                        "service_name": {
                          "type": "string",
                          "optional": true,
                          "computed": true
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

export interface AppmeshVirtualNodeConfig extends TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  readonly virtualServiceName: string;
}
export interface AppmeshVirtualNodeSpecBackend {
  /** virtual_service block */
  readonly virtualService?: AppmeshVirtualNodeSpecBackendVirtualService[];
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  readonly healthyThreshold: number;
  readonly intervalMillis: number;
  readonly path?: string;
  readonly port?: number;
  readonly protocol: string;
  readonly timeoutMillis: number;
  readonly unhealthyThreshold: number;
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}
export interface AppmeshVirtualNodeSpecListener {
  /** health_check block */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  readonly path: string;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
}
export interface AppmeshVirtualNodeSpecLogging {
  /** access_log block */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  readonly attributes?: { [key: string]: string };
  readonly namespaceName: string;
  readonly serviceName: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  readonly hostname: string;
  readonly serviceName?: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /** aws_cloud_map block */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
  /** dns block */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
}
export interface AppmeshVirtualNodeSpec {
  readonly backends?: string[];
  /** backend block */
  readonly backend?: AppmeshVirtualNodeSpecBackend[];
  /** listener block */
  readonly listener?: AppmeshVirtualNodeSpecListener[];
  /** logging block */
  readonly logging?: AppmeshVirtualNodeSpecLogging[];
  /** service_discovery block */
  readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery[];
}

// Resource

export class AppmeshVirtualNode extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
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
  private _spec: AppmeshVirtualNodeSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshVirtualNodeSpec[]) {
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
