// https://www.terraform.io/docs/providers/aws/r/alb.html
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
      "arn_suffix": {
        "type": "string",
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "drop_invalid_header_fields": {
        "type": "bool",
        "optional": true
      },
      "enable_cross_zone_load_balancing": {
        "type": "bool",
        "optional": true
      },
      "enable_deletion_protection": {
        "type": "bool",
        "optional": true
      },
      "enable_http2": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idle_timeout": {
        "type": "number",
        "optional": true
      },
      "internal": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "ip_address_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_type": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "subnets": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "access_logs": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "required": true
            },
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "prefix": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "subnet_mapping": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "allocation_id": {
              "type": "string",
              "optional": true
            },
            "subnet_id": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AlbConfig extends TerraformMetaArguments {
  readonly dropInvalidHeaderFields?: boolean;
  readonly enableCrossZoneLoadBalancing?: boolean;
  readonly enableDeletionProtection?: boolean;
  readonly enableHttp2?: boolean;
  readonly idleTimeout?: number;
  readonly internal?: boolean;
  readonly ipAddressType?: string;
  readonly loadBalancerType?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly securityGroups?: string[];
  readonly subnets?: string[];
  readonly tags?: { [key: string]: string };
  /** access_logs block */
  readonly accessLogs?: AlbAccessLogs[];
  /** subnet_mapping block */
  readonly subnetMapping?: AlbSubnetMapping[];
  /** timeouts block */
  readonly timeouts?: AlbTimeouts;
}
export interface AlbAccessLogs {
  readonly bucket: string;
  readonly enabled?: boolean;
  readonly prefix?: string;
}
export interface AlbSubnetMapping {
  readonly allocationId?: string;
  readonly subnetId: string;
}
export interface AlbTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Alb extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AlbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_alb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
    this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
    this._enableDeletionProtection = config.enableDeletionProtection;
    this._enableHttp2 = config.enableHttp2;
    this._idleTimeout = config.idleTimeout;
    this._internal = config.internal;
    this._ipAddressType = config.ipAddressType;
    this._loadBalancerType = config.loadBalancerType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._securityGroups = config.securityGroups;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._accessLogs = config.accessLogs;
    this._subnetMapping = config.subnetMapping;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: true
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: false, optional: true, required: false
  private _dropInvalidHeaderFields?: boolean;
  public get dropInvalidHeaderFields() {
    return this._dropInvalidHeaderFields;
  }
  public set dropInvalidHeaderFields(value: boolean | undefined) {
    this._dropInvalidHeaderFields = value;
  }

  // enable_cross_zone_load_balancing - computed: false, optional: true, required: false
  private _enableCrossZoneLoadBalancing?: boolean;
  public get enableCrossZoneLoadBalancing() {
    return this._enableCrossZoneLoadBalancing;
  }
  public set enableCrossZoneLoadBalancing(value: boolean | undefined) {
    this._enableCrossZoneLoadBalancing = value;
  }

  // enable_deletion_protection - computed: false, optional: true, required: false
  private _enableDeletionProtection?: boolean;
  public get enableDeletionProtection() {
    return this._enableDeletionProtection;
  }
  public set enableDeletionProtection(value: boolean | undefined) {
    this._enableDeletionProtection = value;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean;
  public get enableHttp2() {
    return this._enableHttp2;
  }
  public set enableHttp2(value: boolean | undefined) {
    this._enableHttp2 = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number;
  public get idleTimeout() {
    return this._idleTimeout;
  }
  public set idleTimeout(value: number | undefined) {
    this._idleTimeout = value;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean;
  public get internal() {
    return this._internal ?? this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | undefined) {
    this._internal = value;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this._ipAddressType ?? this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string | undefined) {
    this._ipAddressType = value;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string;
  public get loadBalancerType() {
    return this._loadBalancerType;
  }
  public set loadBalancerType(value: string | undefined) {
    this._loadBalancerType = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[];
  public get subnets() {
    return this._subnets ?? this.getListAttribute('subnets');
  }
  public set subnets(value: string[] | undefined) {
    this._subnets = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs?: AlbAccessLogs[];
  public get accessLogs() {
    return this._accessLogs;
  }
  public set accessLogs(value: AlbAccessLogs[] | undefined) {
    this._accessLogs = value;
  }

  // subnet_mapping - computed: false, optional: true, required: false
  private _subnetMapping?: AlbSubnetMapping[];
  public get subnetMapping() {
    return this._subnetMapping;
  }
  public set subnetMapping(value: AlbSubnetMapping[] | undefined) {
    this._subnetMapping = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AlbTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AlbTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      drop_invalid_header_fields: this._dropInvalidHeaderFields,
      enable_cross_zone_load_balancing: this._enableCrossZoneLoadBalancing,
      enable_deletion_protection: this._enableDeletionProtection,
      enable_http2: this._enableHttp2,
      idle_timeout: this._idleTimeout,
      internal: this._internal,
      ip_address_type: this._ipAddressType,
      load_balancer_type: this._loadBalancerType,
      name: this._name,
      name_prefix: this._namePrefix,
      security_groups: this._securityGroups,
      subnets: this._subnets,
      tags: this._tags,
      access_logs: this._accessLogs,
      subnet_mapping: this._subnetMapping,
      timeouts: this._timeouts,
    };
  }
}
