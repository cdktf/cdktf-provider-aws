// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html
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
      "auto_accept": {
        "type": "bool",
        "optional": true
      },
      "cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "dns_entry": {
        "type": [
          "list",
          [
            "object",
            {
              "dns_name": "string",
              "hosted_zone_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "policy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "prefix_list_id": {
        "type": "string",
        "computed": true
      },
      "private_dns_enabled": {
        "type": "bool",
        "optional": true
      },
      "requester_managed": {
        "type": "bool",
        "computed": true
      },
      "route_table_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "service_name": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
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
      "vpc_endpoint_type": {
        "type": "string",
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface VpcEndpointConfig extends TerraformMetaArguments {
  readonly autoAccept?: boolean;
  readonly policy?: string;
  readonly privateDnsEnabled?: boolean;
  readonly routeTableIds?: string[];
  readonly securityGroupIds?: string[];
  readonly serviceName: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  readonly vpcEndpointType?: string;
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: VpcEndpointTimeouts;
}
export class VpcEndpointDnsEntry extends ComplexComputedList {

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface VpcEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class VpcEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._policy = config.policy;
    this._privateDnsEnabled = config.privateDnsEnabled;
    this._routeTableIds = config.routeTableIds;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceName = config.serviceName;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcEndpointType = config.vpcEndpointType;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean;
  public get autoAccept() {
    return this._autoAccept;
  }
  public set autoAccept(value: boolean | undefined) {
    this._autoAccept = value;
  }

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // dns_entry - computed: true, optional: false, required: true
  public dnsEntry(index: string) {
    return new VpcEndpointDnsEntry(this, 'dns_entry', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_interface_ids - computed: true, optional: false, required: true
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy ?? this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // prefix_list_id - computed: true, optional: false, required: true
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // private_dns_enabled - computed: false, optional: true, required: false
  private _privateDnsEnabled?: boolean;
  public get privateDnsEnabled() {
    return this._privateDnsEnabled;
  }
  public set privateDnsEnabled(value: boolean | undefined) {
    this._privateDnsEnabled = value;
  }

  // requester_managed - computed: true, optional: false, required: true
  public get requesterManaged() {
    return this.getBooleanAttribute('requester_managed');
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[];
  public get routeTableIds() {
    return this._routeTableIds ?? this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[] | undefined) {
    this._routeTableIds = value;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds ?? this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_endpoint_type - computed: false, optional: true, required: false
  private _vpcEndpointType?: string;
  public get vpcEndpointType() {
    return this._vpcEndpointType;
  }
  public set vpcEndpointType(value: string | undefined) {
    this._vpcEndpointType = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpcEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: this._autoAccept,
      policy: this._policy,
      private_dns_enabled: this._privateDnsEnabled,
      route_table_ids: this._routeTableIds,
      security_group_ids: this._securityGroupIds,
      service_name: this._serviceName,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      vpc_endpoint_type: this._vpcEndpointType,
      vpc_id: this._vpcId,
      timeouts: this._timeouts,
    };
  }
}
