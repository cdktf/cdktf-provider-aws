// https://www.terraform.io/docs/providers/aws/r/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}
  */
  readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}
  */
  readonly enableClassiclink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}
  */
  readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}
  */
  readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}
  */
  readonly enableDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}
  */
  readonly enableNetworkAddressUsageMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}
  */
  readonly instanceTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}
  */
  readonly ipv4IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}
  */
  readonly ipv4NetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}
  */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}
  */
  readonly ipv6IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}
  */
  readonly ipv6NetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
    this._cidrBlock = config.cidrBlock;
    this._enableClassiclink = config.enableClassiclink;
    this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._enableNetworkAddressUsageMetrics = config.enableNetworkAddressUsageMetrics;
    this._id = config.id;
    this._instanceTenancy = config.instanceTenancy;
    this._ipv4IpamPoolId = config.ipv4IpamPoolId;
    this._ipv4NetmaskLength = config.ipv4NetmaskLength;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._ipv6CidrBlockNetworkBorderGroup = config.ipv6CidrBlockNetworkBorderGroup;
    this._ipv6IpamPoolId = config.ipv6IpamPoolId;
    this._ipv6NetmaskLength = config.ipv6NetmaskLength;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_generated_ipv6_cidr_block - computed: false, optional: true, required: false
  private _assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable; 
  public get assignGeneratedIpv6CidrBlock() {
    return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
  }
  public set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable) {
    this._assignGeneratedIpv6CidrBlock = value;
  }
  public resetAssignGeneratedIpv6CidrBlock() {
    this._assignGeneratedIpv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignGeneratedIpv6CidrBlockInput() {
    return this._assignGeneratedIpv6CidrBlock;
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
  private _enableClassiclink?: boolean | cdktf.IResolvable; 
  public get enableClassiclink() {
    return this.getBooleanAttribute('enable_classiclink');
  }
  public set enableClassiclink(value: boolean | cdktf.IResolvable) {
    this._enableClassiclink = value;
  }
  public resetEnableClassiclink() {
    this._enableClassiclink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassiclinkInput() {
    return this._enableClassiclink;
  }

  // enable_classiclink_dns_support - computed: true, optional: true, required: false
  private _enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable; 
  public get enableClassiclinkDnsSupport() {
    return this.getBooleanAttribute('enable_classiclink_dns_support');
  }
  public set enableClassiclinkDnsSupport(value: boolean | cdktf.IResolvable) {
    this._enableClassiclinkDnsSupport = value;
  }
  public resetEnableClassiclinkDnsSupport() {
    this._enableClassiclinkDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassiclinkDnsSupportInput() {
    return this._enableClassiclinkDnsSupport;
  }

  // enable_dns_hostnames - computed: true, optional: true, required: false
  private _enableDnsHostnames?: boolean | cdktf.IResolvable; 
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }
  public set enableDnsHostnames(value: boolean | cdktf.IResolvable) {
    this._enableDnsHostnames = value;
  }
  public resetEnableDnsHostnames() {
    this._enableDnsHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsHostnamesInput() {
    return this._enableDnsHostnames;
  }

  // enable_dns_support - computed: false, optional: true, required: false
  private _enableDnsSupport?: boolean | cdktf.IResolvable; 
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
  }
  public set enableDnsSupport(value: boolean | cdktf.IResolvable) {
    this._enableDnsSupport = value;
  }
  public resetEnableDnsSupport() {
    this._enableDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsSupportInput() {
    return this._enableDnsSupport;
  }

  // enable_network_address_usage_metrics - computed: true, optional: true, required: false
  private _enableNetworkAddressUsageMetrics?: boolean | cdktf.IResolvable; 
  public get enableNetworkAddressUsageMetrics() {
    return this.getBooleanAttribute('enable_network_address_usage_metrics');
  }
  public set enableNetworkAddressUsageMetrics(value: boolean | cdktf.IResolvable) {
    this._enableNetworkAddressUsageMetrics = value;
  }
  public resetEnableNetworkAddressUsageMetrics() {
    this._enableNetworkAddressUsageMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkAddressUsageMetricsInput() {
    return this._enableNetworkAddressUsageMetrics;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_tenancy - computed: false, optional: true, required: false
  private _instanceTenancy?: string; 
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }
  public set instanceTenancy(value: string) {
    this._instanceTenancy = value;
  }
  public resetInstanceTenancy() {
    this._instanceTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenancyInput() {
    return this._instanceTenancy;
  }

  // ipv4_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv4IpamPoolId?: string; 
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv4_ipam_pool_id');
  }
  public set ipv4IpamPoolId(value: string) {
    this._ipv4IpamPoolId = value;
  }
  public resetIpv4IpamPoolId() {
    this._ipv4IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpamPoolIdInput() {
    return this._ipv4IpamPoolId;
  }

  // ipv4_netmask_length - computed: false, optional: true, required: false
  private _ipv4NetmaskLength?: number; 
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv4_netmask_length');
  }
  public set ipv4NetmaskLength(value: number) {
    this._ipv4NetmaskLength = value;
  }
  public resetIpv4NetmaskLength() {
    this._ipv4NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskLengthInput() {
    return this._ipv4NetmaskLength;
  }

  // ipv6_association_id - computed: true, optional: false, required: false
  public get ipv6AssociationId() {
    return this.getStringAttribute('ipv6_association_id');
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_cidr_block_network_border_group - computed: true, optional: true, required: false
  private _ipv6CidrBlockNetworkBorderGroup?: string; 
  public get ipv6CidrBlockNetworkBorderGroup() {
    return this.getStringAttribute('ipv6_cidr_block_network_border_group');
  }
  public set ipv6CidrBlockNetworkBorderGroup(value: string) {
    this._ipv6CidrBlockNetworkBorderGroup = value;
  }
  public resetIpv6CidrBlockNetworkBorderGroup() {
    this._ipv6CidrBlockNetworkBorderGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockNetworkBorderGroupInput() {
    return this._ipv6CidrBlockNetworkBorderGroup;
  }

  // ipv6_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv6IpamPoolId?: string; 
  public get ipv6IpamPoolId() {
    return this.getStringAttribute('ipv6_ipam_pool_id');
  }
  public set ipv6IpamPoolId(value: string) {
    this._ipv6IpamPoolId = value;
  }
  public resetIpv6IpamPoolId() {
    this._ipv6IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpamPoolIdInput() {
    return this._ipv6IpamPoolId;
  }

  // ipv6_netmask_length - computed: false, optional: true, required: false
  private _ipv6NetmaskLength?: number; 
  public get ipv6NetmaskLength() {
    return this.getNumberAttribute('ipv6_netmask_length');
  }
  public set ipv6NetmaskLength(value: number) {
    this._ipv6NetmaskLength = value;
  }
  public resetIpv6NetmaskLength() {
    this._ipv6NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskLengthInput() {
    return this._ipv6NetmaskLength;
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
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
      enable_network_address_usage_metrics: cdktf.booleanToTerraform(this._enableNetworkAddressUsageMetrics),
      id: cdktf.stringToTerraform(this._id),
      instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
      ipv4_ipam_pool_id: cdktf.stringToTerraform(this._ipv4IpamPoolId),
      ipv4_netmask_length: cdktf.numberToTerraform(this._ipv4NetmaskLength),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6_cidr_block_network_border_group: cdktf.stringToTerraform(this._ipv6CidrBlockNetworkBorderGroup),
      ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
      ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
