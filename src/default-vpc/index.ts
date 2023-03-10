// https://www.terraform.io/docs/providers/aws/r/default_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}
  */
  readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}
  */
  readonly enableClassiclink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}
  */
  readonly enableClassiclinkDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}
  */
  readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}
  */
  readonly enableDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}
  */
  readonly enableNetworkAddressUsageMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}
  */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}
  */
  readonly ipv6IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}
  */
  readonly ipv6NetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc aws_default_vpc}
*/
export class DefaultVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_default_vpc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc aws_default_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVpcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultVpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_default_vpc',
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
    this._enableClassiclink = config.enableClassiclink;
    this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._enableNetworkAddressUsageMetrics = config.enableNetworkAddressUsageMetrics;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
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

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
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

  // enable_dns_hostnames - computed: false, optional: true, required: false
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

  // existing_default_vpc - computed: true, optional: false, required: false
  public get existingDefaultVpc() {
    return this.getBooleanAttribute('existing_default_vpc');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // instance_tenancy - computed: true, optional: false, required: false
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
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
      enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
      enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
      enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
      enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
      enable_network_address_usage_metrics: cdktf.booleanToTerraform(this._enableNetworkAddressUsageMetrics),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6_cidr_block_network_border_group: cdktf.stringToTerraform(this._ipv6CidrBlockNetworkBorderGroup),
      ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
      ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
