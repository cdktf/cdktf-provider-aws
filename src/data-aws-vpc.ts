// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc.html
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
      "cidr_block": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cidr_block_associations": {
        "type": [
          "list",
          [
            "object",
            {
              "association_id": "string",
              "cidr_block": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "default": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "dhcp_options_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "enable_dns_hostnames": {
        "type": "bool",
        "computed": true
      },
      "enable_dns_support": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_tenancy": {
        "type": "string",
        "computed": true
      },
      "ipv6_association_id": {
        "type": "string",
        "computed": true
      },
      "ipv6_cidr_block": {
        "type": "string",
        "computed": true
      },
      "main_route_table_id": {
        "type": "string",
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
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

export interface DataAwsVpcConfig extends TerraformMetaArguments {
  readonly cidrBlock?: string;
  readonly default?: boolean;
  readonly dhcpOptionsId?: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsVpcFilter[];
}
export class DataAwsVpcCidrBlockAssociations extends ComplexComputedList {

  // association_id - computed: true, optional: false, required: true
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsVpcFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpc extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlock = config.cidrBlock;
    this._default = config.default;
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._state = config.state;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string;
  public get cidrBlock() {
    return this._cidrBlock ?? this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string | undefined) {
    this._cidrBlock = value;
  }

  // cidr_block_associations - computed: true, optional: false, required: true
  public cidrBlockAssociations(index: string) {
    return new DataAwsVpcCidrBlockAssociations(this, 'cidr_block_associations', index);
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean;
  public get default() {
    return this._default ?? this.getBooleanAttribute('default');
  }
  public set default(value: boolean | undefined) {
    this._default = value;
  }

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string;
  public get dhcpOptionsId() {
    return this._dhcpOptionsId ?? this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string | undefined) {
    this._dhcpOptionsId = value;
  }

  // enable_dns_hostnames - computed: true, optional: false, required: true
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }

  // enable_dns_support - computed: true, optional: false, required: true
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_tenancy - computed: true, optional: false, required: true
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }

  // ipv6_association_id - computed: true, optional: false, required: true
  public get ipv6AssociationId() {
    return this.getStringAttribute('ipv6_association_id');
  }

  // ipv6_cidr_block - computed: true, optional: false, required: true
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // main_route_table_id - computed: true, optional: false, required: true
  public get mainRouteTableId() {
    return this.getStringAttribute('main_route_table_id');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpcFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: this._cidrBlock,
      default: this._default,
      dhcp_options_id: this._dhcpOptionsId,
      state: this._state,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
