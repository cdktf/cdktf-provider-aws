// https://www.terraform.io/docs/providers/aws/r/elb.html
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
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "connection_draining": {
        "type": "bool",
        "optional": true
      },
      "connection_draining_timeout": {
        "type": "number",
        "optional": true
      },
      "cross_zone_load_balancing": {
        "type": "bool",
        "optional": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
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
      "instances": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "internal": {
        "type": "bool",
        "optional": true,
        "computed": true
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
      "source_security_group": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source_security_group_id": {
        "type": "string",
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
            "bucket_prefix": {
              "type": "string",
              "optional": true
            },
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "interval": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "health_check": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "healthy_threshold": {
              "type": "number",
              "required": true
            },
            "interval": {
              "type": "number",
              "required": true
            },
            "target": {
              "type": "string",
              "required": true
            },
            "timeout": {
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
      "listener": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "instance_port": {
              "type": "number",
              "required": true
            },
            "instance_protocol": {
              "type": "string",
              "required": true
            },
            "lb_port": {
              "type": "number",
              "required": true
            },
            "lb_protocol": {
              "type": "string",
              "required": true
            },
            "ssl_certificate_id": {
              "type": "string",
              "optional": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElbConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly connectionDraining?: boolean;
  readonly connectionDrainingTimeout?: number;
  readonly crossZoneLoadBalancing?: boolean;
  readonly idleTimeout?: number;
  readonly instances?: string[];
  readonly internal?: boolean;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly securityGroups?: string[];
  readonly sourceSecurityGroup?: string;
  readonly subnets?: string[];
  readonly tags?: { [key: string]: string };
  /** access_logs block */
  readonly accessLogs?: ElbAccessLogs[];
  /** health_check block */
  readonly healthCheck?: ElbHealthCheck[];
  /** listener block */
  readonly listener: ElbListener[];
}
export interface ElbAccessLogs {
  readonly bucket: string;
  readonly bucketPrefix?: string;
  readonly enabled?: boolean;
  readonly interval?: number;
}
export interface ElbHealthCheck {
  readonly healthyThreshold: number;
  readonly interval: number;
  readonly target: string;
  readonly timeout: number;
  readonly unhealthyThreshold: number;
}
export interface ElbListener {
  readonly instancePort: number;
  readonly instanceProtocol: string;
  readonly lbPort: number;
  readonly lbProtocol: string;
  readonly sslCertificateId?: string;
}

// Resource

export class Elb extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._connectionDraining = config.connectionDraining;
    this._connectionDrainingTimeout = config.connectionDrainingTimeout;
    this._crossZoneLoadBalancing = config.crossZoneLoadBalancing;
    this._idleTimeout = config.idleTimeout;
    this._instances = config.instances;
    this._internal = config.internal;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._securityGroups = config.securityGroups;
    this._sourceSecurityGroup = config.sourceSecurityGroup;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._accessLogs = config.accessLogs;
    this._healthCheck = config.healthCheck;
    this._listener = config.listener;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones ?? this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining?: boolean;
  public get connectionDraining() {
    return this._connectionDraining;
  }
  public set connectionDraining(value: boolean | undefined) {
    this._connectionDraining = value;
  }

  // connection_draining_timeout - computed: false, optional: true, required: false
  private _connectionDrainingTimeout?: number;
  public get connectionDrainingTimeout() {
    return this._connectionDrainingTimeout;
  }
  public set connectionDrainingTimeout(value: number | undefined) {
    this._connectionDrainingTimeout = value;
  }

  // cross_zone_load_balancing - computed: false, optional: true, required: false
  private _crossZoneLoadBalancing?: boolean;
  public get crossZoneLoadBalancing() {
    return this._crossZoneLoadBalancing;
  }
  public set crossZoneLoadBalancing(value: boolean | undefined) {
    this._crossZoneLoadBalancing = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // instances - computed: true, optional: true, required: false
  private _instances?: string[];
  public get instances() {
    return this._instances ?? this.getListAttribute('instances');
  }
  public set instances(value: string[] | undefined) {
    this._instances = value;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean;
  public get internal() {
    return this._internal ?? this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | undefined) {
    this._internal = value;
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

  // source_security_group - computed: true, optional: true, required: false
  private _sourceSecurityGroup?: string;
  public get sourceSecurityGroup() {
    return this._sourceSecurityGroup ?? this.getStringAttribute('source_security_group');
  }
  public set sourceSecurityGroup(value: string | undefined) {
    this._sourceSecurityGroup = value;
  }

  // source_security_group_id - computed: true, optional: false, required: true
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
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

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs?: ElbAccessLogs[];
  public get accessLogs() {
    return this._accessLogs;
  }
  public set accessLogs(value: ElbAccessLogs[] | undefined) {
    this._accessLogs = value;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: ElbHealthCheck[];
  public get healthCheck() {
    return this._healthCheck;
  }
  public set healthCheck(value: ElbHealthCheck[] | undefined) {
    this._healthCheck = value;
  }

  // listener - computed: false, optional: false, required: true
  private _listener: ElbListener[];
  public get listener() {
    return this._listener;
  }
  public set listener(value: ElbListener[]) {
    this._listener = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: this._availabilityZones,
      connection_draining: this._connectionDraining,
      connection_draining_timeout: this._connectionDrainingTimeout,
      cross_zone_load_balancing: this._crossZoneLoadBalancing,
      idle_timeout: this._idleTimeout,
      instances: this._instances,
      internal: this._internal,
      name: this._name,
      name_prefix: this._namePrefix,
      security_groups: this._securityGroups,
      source_security_group: this._sourceSecurityGroup,
      subnets: this._subnets,
      tags: this._tags,
      access_logs: this._accessLogs,
      health_check: this._healthCheck,
      listener: this._listener,
    };
  }
}
