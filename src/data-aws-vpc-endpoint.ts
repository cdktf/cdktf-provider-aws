// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_endpoint.html
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
        "computed": true
      },
      "prefix_list_id": {
        "type": "string",
        "computed": true
      },
      "private_dns_enabled": {
        "type": "bool",
        "computed": true
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
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "service_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "vpc_endpoint_type": {
        "type": "string",
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
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
                "set",
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsVpcEndpointConfig extends TerraformMetaArguments {
  readonly serviceName?: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsVpcEndpointFilter[];
}
export class DataAwsVpcEndpointDnsEntry extends ComplexComputedList {

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface DataAwsVpcEndpointFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpcEndpoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpcEndpointConfig = {}) {
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
    this._serviceName = config.serviceName;
    this._state = config.state;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // dns_entry - computed: true, optional: false, required: true
  public dnsEntry(index: string) {
    return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
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

  // policy - computed: true, optional: false, required: true
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // prefix_list_id - computed: true, optional: false, required: true
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // private_dns_enabled - computed: true, optional: false, required: true
  public get privateDnsEnabled() {
    return this.getBooleanAttribute('private_dns_enabled');
  }

  // requester_managed - computed: true, optional: false, required: true
  public get requesterManaged() {
    return this.getBooleanAttribute('requester_managed');
  }

  // route_table_ids - computed: true, optional: false, required: true
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this._serviceName ?? this.getStringAttribute('service_name');
  }
  public set serviceName(value: string | undefined) {
    this._serviceName = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_endpoint_type - computed: true, optional: false, required: true
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcEndpointFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpcEndpointFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: this._serviceName,
      state: this._state,
      tags: this._tags,
      vpc_id: this._vpcId,
      filter: this._filter,
    };
  }
}
