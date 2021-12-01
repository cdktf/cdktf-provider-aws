// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#cidr_block DataAwsVpc#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#default DataAwsVpc#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#dhcp_options_id DataAwsVpc#dhcp_options_id}
  */
  readonly dhcpOptionsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#state DataAwsVpc#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#tags DataAwsVpc#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#filter DataAwsVpc#filter}
  */
  readonly filter?: DataAwsVpcFilter[];
}
export class DataAwsVpcCidrBlockAssociations extends cdktf.ComplexComputedList {

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsVpcFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#name DataAwsVpc#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#values DataAwsVpc#values}
  */
  readonly values: string[];
}

export function dataAwsVpcFilterToTerraform(struct?: DataAwsVpcFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc}
*/
export class DataAwsVpc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcConfig = {}
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // cidr_block_associations - computed: true, optional: false, required: false
  public cidrBlockAssociations(index: string) {
    return new DataAwsVpcCidrBlockAssociations(this, 'cidr_block_associations', index);
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string; 
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }
  public resetDhcpOptionsId() {
    this._dhcpOptionsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsIdInput() {
    return this._dhcpOptionsId;
  }

  // enable_dns_hostnames - computed: true, optional: false, required: false
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames') as any;
  }

  // enable_dns_support - computed: true, optional: false, required: false
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenancy - computed: true, optional: false, required: false
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      default: cdktf.booleanToTerraform(this._default),
      dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpcFilterToTerraform)(this._filter),
    };
  }
}
