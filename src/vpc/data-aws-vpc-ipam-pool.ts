// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}
  */
  readonly allocationResourceTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#id DataAwsVpcIpamPool#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}
  */
  readonly ipamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#filter DataAwsVpcIpamPool#filter}
  */
  readonly filter?: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable;
}
export interface DataAwsVpcIpamPoolFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#name DataAwsVpcIpamPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool#values DataAwsVpcIpamPool#values}
  */
  readonly values: string[];
}

export function dataAwsVpcIpamPoolFilterToTerraform(struct?: DataAwsVpcIpamPoolFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool aws_vpc_ipam_pool}
*/
export class DataAwsVpcIpamPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_ipam_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool aws_vpc_ipam_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcIpamPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpcIpamPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationResourceTags = config.allocationResourceTags;
    this._id = config.id;
    this._ipamPoolId = config.ipamPoolId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // allocation_default_netmask_length - computed: true, optional: false, required: false
  public get allocationDefaultNetmaskLength() {
    return this.getNumberAttribute('allocation_default_netmask_length');
  }

  // allocation_max_netmask_length - computed: true, optional: false, required: false
  public get allocationMaxNetmaskLength() {
    return this.getNumberAttribute('allocation_max_netmask_length');
  }

  // allocation_min_netmask_length - computed: true, optional: false, required: false
  public get allocationMinNetmaskLength() {
    return this.getNumberAttribute('allocation_min_netmask_length');
  }

  // allocation_resource_tags - computed: true, optional: true, required: false
  private _allocationResourceTags?: { [key: string]: string }; 
  public get allocationResourceTags() {
    return this.getStringMapAttribute('allocation_resource_tags');
  }
  public set allocationResourceTags(value: { [key: string]: string }) {
    this._allocationResourceTags = value;
  }
  public resetAllocationResourceTags() {
    this._allocationResourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationResourceTagsInput() {
    return this._allocationResourceTags;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_import - computed: true, optional: false, required: false
  public get autoImport() {
    return this.getBooleanAttribute('auto_import');
  }

  // aws_service - computed: true, optional: false, required: false
  public get awsService() {
    return this.getStringAttribute('aws_service');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // ipam_pool_id - computed: false, optional: true, required: false
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  public resetIpamPoolId() {
    this._ipamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // ipam_scope_id - computed: true, optional: false, required: false
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }

  // ipam_scope_type - computed: true, optional: false, required: false
  public get ipamScopeType() {
    return this.getStringAttribute('ipam_scope_type');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // pool_depth - computed: true, optional: false, required: false
  public get poolDepth() {
    return this.getNumberAttribute('pool_depth');
  }

  // publicly_advertisable - computed: true, optional: false, required: false
  public get publiclyAdvertisable() {
    return this.getBooleanAttribute('publicly_advertisable');
  }

  // source_ipam_pool_id - computed: true, optional: false, required: false
  public get sourceIpamPoolId() {
    return this.getStringAttribute('source_ipam_pool_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable) {
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
      allocation_resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._allocationResourceTags),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpcIpamPoolFilterToTerraform)(this._filter),
    };
  }
}
