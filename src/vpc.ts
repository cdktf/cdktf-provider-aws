// https://www.terraform.io/docs/providers/aws/r/vpc.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  readonly assignGeneratedIpv6CidrBlock?: boolean;
  readonly cidrBlock: string;
  readonly enableClassiclink?: boolean;
  readonly enableClassiclinkDnsSupport?: boolean;
  readonly enableDnsHostnames?: boolean;
  readonly enableDnsSupport?: boolean;
  readonly instanceTenancy?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Vpc extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcConfig) {
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
    this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
    this._cidrBlock = config.cidrBlock;
    this._enableClassiclink = config.enableClassiclink;
    this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._instanceTenancy = config.instanceTenancy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_generated_ipv6_cidr_block - computed: false, optional: true, required: false
  private _assignGeneratedIpv6CidrBlock?: boolean;
  public get assignGeneratedIpv6CidrBlock() {
    return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
  }
  public set assignGeneratedIpv6CidrBlock(value: boolean ) {
    this._assignGeneratedIpv6CidrBlock = value;
  }
  public resetAssignGeneratedIpv6CidrBlock() {
    this._assignGeneratedIpv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignGeneratedIpv6CidrBlockInput() {
    return this._assignGeneratedIpv6CidrBlock
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock
  }

  // default_network_acl_id - computed: true, optional: false, required: false
  public get defaultNetworkAclId() {
    return this.getStringAttribute('default_network_acl_id');
  }

  // default_route_table_id - computed: true, optional: false, required: false
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // default_security_group_id - computed: true, optional: false, required: false
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }

  // dhcp_options_id - computed: true, optional: false, required: false
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // enable_classiclink - computed: true, optional: true, required: false
  private _enableClassiclink?: boolean;
  public get enableClassiclink() {
    return this.getBooleanAttribute('enable_classiclink');
  }
  public set enableClassiclink(value: boolean) {
    this._enableClassiclink = value;
  }
  public resetEnableClassiclink() {
    this._enableClassiclink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassiclinkInput() {
    return this._enableClassiclink
  }

  // enable_classiclink_dns_support - computed: true, optional: true, required: false
  private _enableClassiclinkDnsSupport?: boolean;
  public get enableClassiclinkDnsSupport() {
    return this.getBooleanAttribute('enable_classiclink_dns_support');
  }
  public set enableClassiclinkDnsSupport(value: boolean) {
    this._enableClassiclinkDnsSupport = value;
  }
  public resetEnableClassiclinkDnsSupport() {
    this._enableClassiclinkDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassiclinkDnsSupportInput() {
    return this._enableClassiclinkDnsSupport
  }

  // enable_dns_hostnames - computed: true, optional: true, required: false
  private _enableDnsHostnames?: boolean;
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }
  public set enableDnsHostnames(value: boolean) {
    this._enableDnsHostnames = value;
  }
  public resetEnableDnsHostnames() {
    this._enableDnsHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsHostnamesInput() {
    return this._enableDnsHostnames
  }

  // enable_dns_support - computed: false, optional: true, required: false
  private _enableDnsSupport?: boolean;
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
  }
  public set enableDnsSupport(value: boolean ) {
    this._enableDnsSupport = value;
  }
  public resetEnableDnsSupport() {
    this._enableDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsSupportInput() {
    return this._enableDnsSupport
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenancy - computed: false, optional: true, required: false
  private _instanceTenancy?: string;
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }
  public set instanceTenancy(value: string ) {
    this._instanceTenancy = value;
  }
  public resetInstanceTenancy() {
    this._instanceTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenancyInput() {
    return this._instanceTenancy
  }

  // ipv6_association_id - computed: true, optional: false, required: false
  public get ipv6AssociationId() {
    return this.getStringAttribute('ipv6_association_id');
  }

  // ipv6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // main_route_table_id - computed: true, optional: false, required: false
  public get mainRouteTableId() {
    return this.getStringAttribute('main_route_table_id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_generated_ipv6_cidr_block: cdktf.booleanToTerraform(this._assignGeneratedIpv6CidrBlock),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
      enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
      enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
      enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
      instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
