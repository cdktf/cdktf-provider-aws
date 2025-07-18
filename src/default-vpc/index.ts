/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}
  */
  readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}
  */
  readonly enableDnsHostnames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}
  */
  readonly enableDnsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}
  */
  readonly enableNetworkAddressUsageMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#force_destroy DefaultVpc#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#id DefaultVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}
  */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}
  */
  readonly ipv6IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}
  */
  readonly ipv6NetmaskLength?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#region DefaultVpc#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#tags DefaultVpc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#tags_all DefaultVpc#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc aws_default_vpc}
*/
export class DefaultVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_default_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVpc to import
  * @param importFromId The id of the existing DefaultVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_default_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/default_vpc aws_default_vpc} Resource
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
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._enableNetworkAddressUsageMetrics = config.enableNetworkAddressUsageMetrics;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._ipv6CidrBlockNetworkBorderGroup = config.ipv6CidrBlockNetworkBorderGroup;
    this._ipv6IpamPoolId = config.ipv6IpamPoolId;
    this._ipv6NetmaskLength = config.ipv6NetmaskLength;
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
      enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
      enable_network_address_usage_metrics: cdktf.booleanToTerraform(this._enableNetworkAddressUsageMetrics),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6_cidr_block_network_border_group: cdktf.stringToTerraform(this._ipv6CidrBlockNetworkBorderGroup),
      ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
      ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_generated_ipv6_cidr_block: {
        value: cdktf.booleanToHclTerraform(this._assignGeneratedIpv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dns_hostnames: {
        value: cdktf.booleanToHclTerraform(this._enableDnsHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dns_support: {
        value: cdktf.booleanToHclTerraform(this._enableDnsSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_network_address_usage_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableNetworkAddressUsageMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_cidr_block: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_cidr_block_network_border_group: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrBlockNetworkBorderGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipv6IpamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_netmask_length: {
        value: cdktf.numberToHclTerraform(this._ipv6NetmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
