// https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html
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
      "namespace_id": {
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
      "dns_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "namespace_id": {
              "type": "string",
              "required": true
            },
            "routing_policy": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "dns_records": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "ttl": {
                    "type": "number",
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1
            }
          }
        },
        "max_items": 1
      },
      "health_check_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "failure_threshold": {
              "type": "number",
              "optional": true
            },
            "resource_path": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "health_check_custom_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "failure_threshold": {
              "type": "number",
              "optional": true
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

export interface ServiceDiscoveryServiceConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly namespaceId?: string;
  readonly tags?: { [key: string]: string };
  /** dns_config block */
  readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
  /** health_check_config block */
  readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
  /** health_check_custom_config block */
  readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
  readonly ttl: number;
  readonly type: string;
}
export interface ServiceDiscoveryServiceDnsConfig {
  readonly namespaceId: string;
  readonly routingPolicy?: string;
  /** dns_records block */
  readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[];
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
  readonly failureThreshold?: number;
  readonly resourcePath?: string;
  readonly type?: string;
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
  readonly failureThreshold?: number;
}

// Resource

export class ServiceDiscoveryService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_service_discovery_service',
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
    this._namespaceId = config.namespaceId;
    this._tags = config.tags;
    this._dnsConfig = config.dnsConfig;
    this._healthCheckConfig = config.healthCheckConfig;
    this._healthCheckCustomConfig = config.healthCheckCustomConfig;
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

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string;
  public get namespaceId() {
    return this._namespaceId ?? this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string | undefined) {
    this._namespaceId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public set dnsConfig(value: ServiceDiscoveryServiceDnsConfig[] | undefined) {
    this._dnsConfig = value;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public set healthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig[] | undefined) {
    this._healthCheckConfig = value;
  }

  // health_check_custom_config - computed: false, optional: true, required: false
  private _healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
  public get healthCheckCustomConfig() {
    return this._healthCheckCustomConfig;
  }
  public set healthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig[] | undefined) {
    this._healthCheckCustomConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      namespace_id: this._namespaceId,
      tags: this._tags,
      dns_config: this._dnsConfig,
      health_check_config: this._healthCheckConfig,
      health_check_custom_config: this._healthCheckCustomConfig,
    };
  }
}
