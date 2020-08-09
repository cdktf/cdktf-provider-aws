// https://www.terraform.io/docs/providers/aws/r/default_vpc.html
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
      "assign_generated_ipv6_cidr_block": {
        "type": "bool",
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "computed": true
      },
      "default_network_acl_id": {
        "type": "string",
        "computed": true
      },
      "default_route_table_id": {
        "type": "string",
        "computed": true
      },
      "default_security_group_id": {
        "type": "string",
        "computed": true
      },
      "dhcp_options_id": {
        "type": "string",
        "computed": true
      },
      "enable_classiclink": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "enable_classiclink_dns_support": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "enable_dns_hostnames": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "enable_dns_support": {
        "type": "bool",
        "optional": true
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DefaultVpcConfig extends TerraformMetaArguments {
  readonly enableClassiclink?: boolean;
  readonly enableClassiclinkDnsSupport?: boolean;
  readonly enableDnsHostnames?: boolean;
  readonly enableDnsSupport?: boolean;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DefaultVpc extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultVpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_default_vpc',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableClassiclink = config.enableClassiclink;
    this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: true
  public get assignGeneratedIpv6CidrBlock() {
    return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
  }

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // default_network_acl_id - computed: true, optional: false, required: true
  public get defaultNetworkAclId() {
    return this.getStringAttribute('default_network_acl_id');
  }

  // default_route_table_id - computed: true, optional: false, required: true
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // default_security_group_id - computed: true, optional: false, required: true
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // dhcp_options_id - computed: true, optional: false, required: true
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // enable_classiclink - computed: true, optional: true, required: false
  private _enableClassiclink?: boolean;
  public get enableClassiclink() {
    return this._enableClassiclink ?? this.getBooleanAttribute('enable_classiclink');
  }
  public set enableClassiclink(value: boolean | undefined) {
    this._enableClassiclink = value;
  }

  // enable_classiclink_dns_support - computed: true, optional: true, required: false
  private _enableClassiclinkDnsSupport?: boolean;
  public get enableClassiclinkDnsSupport() {
    return this._enableClassiclinkDnsSupport ?? this.getBooleanAttribute('enable_classiclink_dns_support');
  }
  public set enableClassiclinkDnsSupport(value: boolean | undefined) {
    this._enableClassiclinkDnsSupport = value;
  }

  // enable_dns_hostnames - computed: true, optional: true, required: false
  private _enableDnsHostnames?: boolean;
  public get enableDnsHostnames() {
    return this._enableDnsHostnames ?? this.getBooleanAttribute('enable_dns_hostnames');
  }
  public set enableDnsHostnames(value: boolean | undefined) {
    this._enableDnsHostnames = value;
  }

  // enable_dns_support - computed: false, optional: true, required: false
  private _enableDnsSupport?: boolean;
  public get enableDnsSupport() {
    return this._enableDnsSupport;
  }
  public set enableDnsSupport(value: boolean | undefined) {
    this._enableDnsSupport = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_classiclink: this._enableClassiclink,
      enable_classiclink_dns_support: this._enableClassiclinkDnsSupport,
      enable_dns_hostnames: this._enableDnsHostnames,
      enable_dns_support: this._enableDnsSupport,
      tags: this._tags,
    };
  }
}
