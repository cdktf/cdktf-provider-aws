// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#address_family VpcIpamPool#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}
  */
  readonly allocationDefaultNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}
  */
  readonly allocationMaxNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}
  */
  readonly allocationMinNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_resource_tags VpcIpamPool#allocation_resource_tags}
  */
  readonly allocationResourceTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#auto_import VpcIpamPool#auto_import}
  */
  readonly autoImport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#aws_service VpcIpamPool#aws_service}
  */
  readonly awsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#description VpcIpamPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#ipam_scope_id VpcIpamPool#ipam_scope_id}
  */
  readonly ipamScopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#locale VpcIpamPool#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#publicly_advertisable VpcIpamPool#publicly_advertisable}
  */
  readonly publiclyAdvertisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}
  */
  readonly sourceIpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#tags VpcIpamPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#tags_all VpcIpamPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool}
*/
export class VpcIpamPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_ipam_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamPoolConfig) {
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
    this._addressFamily = config.addressFamily;
    this._allocationDefaultNetmaskLength = config.allocationDefaultNetmaskLength;
    this._allocationMaxNetmaskLength = config.allocationMaxNetmaskLength;
    this._allocationMinNetmaskLength = config.allocationMinNetmaskLength;
    this._allocationResourceTags = config.allocationResourceTags;
    this._autoImport = config.autoImport;
    this._awsService = config.awsService;
    this._description = config.description;
    this._ipamScopeId = config.ipamScopeId;
    this._locale = config.locale;
    this._publiclyAdvertisable = config.publiclyAdvertisable;
    this._sourceIpamPoolId = config.sourceIpamPoolId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // allocation_default_netmask_length - computed: false, optional: true, required: false
  private _allocationDefaultNetmaskLength?: number; 
  public get allocationDefaultNetmaskLength() {
    return this.getNumberAttribute('allocation_default_netmask_length');
  }
  public set allocationDefaultNetmaskLength(value: number) {
    this._allocationDefaultNetmaskLength = value;
  }
  public resetAllocationDefaultNetmaskLength() {
    this._allocationDefaultNetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationDefaultNetmaskLengthInput() {
    return this._allocationDefaultNetmaskLength;
  }

  // allocation_max_netmask_length - computed: false, optional: true, required: false
  private _allocationMaxNetmaskLength?: number; 
  public get allocationMaxNetmaskLength() {
    return this.getNumberAttribute('allocation_max_netmask_length');
  }
  public set allocationMaxNetmaskLength(value: number) {
    this._allocationMaxNetmaskLength = value;
  }
  public resetAllocationMaxNetmaskLength() {
    this._allocationMaxNetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationMaxNetmaskLengthInput() {
    return this._allocationMaxNetmaskLength;
  }

  // allocation_min_netmask_length - computed: false, optional: true, required: false
  private _allocationMinNetmaskLength?: number; 
  public get allocationMinNetmaskLength() {
    return this.getNumberAttribute('allocation_min_netmask_length');
  }
  public set allocationMinNetmaskLength(value: number) {
    this._allocationMinNetmaskLength = value;
  }
  public resetAllocationMinNetmaskLength() {
    this._allocationMinNetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationMinNetmaskLengthInput() {
    return this._allocationMinNetmaskLength;
  }

  // allocation_resource_tags - computed: false, optional: true, required: false
  private _allocationResourceTags?: { [key: string]: string } | cdktf.IResolvable; 
  public get allocationResourceTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allocation_resource_tags') as any;
  }
  public set allocationResourceTags(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // auto_import - computed: false, optional: true, required: false
  private _autoImport?: boolean | cdktf.IResolvable; 
  public get autoImport() {
    return this.getBooleanAttribute('auto_import') as any;
  }
  public set autoImport(value: boolean | cdktf.IResolvable) {
    this._autoImport = value;
  }
  public resetAutoImport() {
    this._autoImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportInput() {
    return this._autoImport;
  }

  // aws_service - computed: false, optional: true, required: false
  private _awsService?: string; 
  public get awsService() {
    return this.getStringAttribute('aws_service');
  }
  public set awsService(value: string) {
    this._awsService = value;
  }
  public resetAwsService() {
    this._awsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceInput() {
    return this._awsService;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_scope_id - computed: false, optional: false, required: true
  private _ipamScopeId?: string; 
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }
  public set ipamScopeId(value: string) {
    this._ipamScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamScopeIdInput() {
    return this._ipamScopeId;
  }

  // ipam_scope_type - computed: true, optional: false, required: false
  public get ipamScopeType() {
    return this.getStringAttribute('ipam_scope_type');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // pool_depth - computed: true, optional: false, required: false
  public get poolDepth() {
    return this.getNumberAttribute('pool_depth');
  }

  // publicly_advertisable - computed: false, optional: true, required: false
  private _publiclyAdvertisable?: boolean | cdktf.IResolvable; 
  public get publiclyAdvertisable() {
    return this.getBooleanAttribute('publicly_advertisable') as any;
  }
  public set publiclyAdvertisable(value: boolean | cdktf.IResolvable) {
    this._publiclyAdvertisable = value;
  }
  public resetPubliclyAdvertisable() {
    this._publiclyAdvertisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAdvertisableInput() {
    return this._publiclyAdvertisable;
  }

  // source_ipam_pool_id - computed: false, optional: true, required: false
  private _sourceIpamPoolId?: string; 
  public get sourceIpamPoolId() {
    return this.getStringAttribute('source_ipam_pool_id');
  }
  public set sourceIpamPoolId(value: string) {
    this._sourceIpamPoolId = value;
  }
  public resetSourceIpamPoolId() {
    this._sourceIpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpamPoolIdInput() {
    return this._sourceIpamPoolId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
      address_family: cdktf.stringToTerraform(this._addressFamily),
      allocation_default_netmask_length: cdktf.numberToTerraform(this._allocationDefaultNetmaskLength),
      allocation_max_netmask_length: cdktf.numberToTerraform(this._allocationMaxNetmaskLength),
      allocation_min_netmask_length: cdktf.numberToTerraform(this._allocationMinNetmaskLength),
      allocation_resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._allocationResourceTags),
      auto_import: cdktf.booleanToTerraform(this._autoImport),
      aws_service: cdktf.stringToTerraform(this._awsService),
      description: cdktf.stringToTerraform(this._description),
      ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
      locale: cdktf.stringToTerraform(this._locale),
      publicly_advertisable: cdktf.booleanToTerraform(this._publiclyAdvertisable),
      source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
