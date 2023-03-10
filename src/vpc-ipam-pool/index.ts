// https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}
  */
  readonly allocationDefaultNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}
  */
  readonly allocationMaxNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}
  */
  readonly allocationMinNetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}
  */
  readonly allocationResourceTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}
  */
  readonly autoImport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}
  */
  readonly awsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}
  */
  readonly ipamScopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}
  */
  readonly publicIpSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}
  */
  readonly publiclyAdvertisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}
  */
  readonly sourceIpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}
  */
  readonly timeouts?: VpcIpamPoolTimeouts;
}
export interface VpcIpamPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}
  */
  readonly update?: string;
}

export function vpcIpamPoolTimeoutsToTerraform(struct?: VpcIpamPoolTimeoutsOutputReference | VpcIpamPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpcIpamPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcIpamPoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpamPoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool}
*/
export class VpcIpamPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_pool',
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
    this._addressFamily = config.addressFamily;
    this._allocationDefaultNetmaskLength = config.allocationDefaultNetmaskLength;
    this._allocationMaxNetmaskLength = config.allocationMaxNetmaskLength;
    this._allocationMinNetmaskLength = config.allocationMinNetmaskLength;
    this._allocationResourceTags = config.allocationResourceTags;
    this._autoImport = config.autoImport;
    this._awsService = config.awsService;
    this._description = config.description;
    this._id = config.id;
    this._ipamScopeId = config.ipamScopeId;
    this._locale = config.locale;
    this._publicIpSource = config.publicIpSource;
    this._publiclyAdvertisable = config.publiclyAdvertisable;
    this._sourceIpamPoolId = config.sourceIpamPoolId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
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

  // auto_import - computed: false, optional: true, required: false
  private _autoImport?: boolean | cdktf.IResolvable; 
  public get autoImport() {
    return this.getBooleanAttribute('auto_import');
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

  // public_ip_source - computed: false, optional: true, required: false
  private _publicIpSource?: string; 
  public get publicIpSource() {
    return this.getStringAttribute('public_ip_source');
  }
  public set publicIpSource(value: string) {
    this._publicIpSource = value;
  }
  public resetPublicIpSource() {
    this._publicIpSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpSourceInput() {
    return this._publicIpSource;
  }

  // publicly_advertisable - computed: false, optional: true, required: false
  private _publiclyAdvertisable?: boolean | cdktf.IResolvable; 
  public get publiclyAdvertisable() {
    return this.getBooleanAttribute('publicly_advertisable');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpamPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      allocation_resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._allocationResourceTags),
      auto_import: cdktf.booleanToTerraform(this._autoImport),
      aws_service: cdktf.stringToTerraform(this._awsService),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
      locale: cdktf.stringToTerraform(this._locale),
      public_ip_source: cdktf.stringToTerraform(this._publicIpSource),
      publicly_advertisable: cdktf.booleanToTerraform(this._publiclyAdvertisable),
      source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: vpcIpamPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
