// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcIpamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#description VpcIpam#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#tags VpcIpam#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#tags_all VpcIpam#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * operating_regions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#operating_regions VpcIpam#operating_regions}
  */
  readonly operatingRegions: VpcIpamOperatingRegions[];
}
export interface VpcIpamOperatingRegions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#region_name VpcIpam#region_name}
  */
  readonly regionName: string;
}

export function vpcIpamOperatingRegionsToTerraform(struct?: VpcIpamOperatingRegions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html aws_vpc_ipam}
*/
export class VpcIpam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_ipam";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html aws_vpc_ipam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._operatingRegions = config.operatingRegions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // private_default_scope_id - computed: true, optional: false, required: false
  public get privateDefaultScopeId() {
    return this.getStringAttribute('private_default_scope_id');
  }

  // public_default_scope_id - computed: true, optional: false, required: false
  public get publicDefaultScopeId() {
    return this.getStringAttribute('public_default_scope_id');
  }

  // scope_count - computed: true, optional: false, required: false
  public get scopeCount() {
    return this.getNumberAttribute('scope_count');
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

  // operating_regions - computed: false, optional: false, required: true
  private _operatingRegions?: VpcIpamOperatingRegions[]; 
  public get operatingRegions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operating_regions') as any;
  }
  public set operatingRegions(value: VpcIpamOperatingRegions[]) {
    this._operatingRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingRegionsInput() {
    return this._operatingRegions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      operating_regions: cdktf.listMapper(vpcIpamOperatingRegionsToTerraform)(this._operatingRegions),
    };
  }
}
