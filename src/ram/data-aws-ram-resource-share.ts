// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Resource Access Manager
*/
export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#resource_owner DataAwsRamResourceShare#resource_owner}
  */
  readonly resourceOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#tags DataAwsRamResourceShare#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#filter DataAwsRamResourceShare#filter}
  */
  readonly filter?: DataAwsRamResourceShareFilter[];
}
export interface DataAwsRamResourceShareFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#values DataAwsRamResourceShare#values}
  */
  readonly values: string[];
}

export function dataAwsRamResourceShareFilterToTerraform(struct?: DataAwsRamResourceShareFilter): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share}
*/
export class DataAwsRamResourceShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ram_resource_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRamResourceShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceOwner = config.resourceOwner;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owning_account_id - computed: true, optional: false, required: false
  public get owningAccountId() {
    return this.getStringAttribute('owning_account_id');
  }

  // resource_owner - computed: false, optional: false, required: true
  private _resourceOwner?: string; 
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }
  public set resourceOwner(value: string) {
    this._resourceOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerInput() {
    return this._resourceOwner;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
  private _filter?: DataAwsRamResourceShareFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsRamResourceShareFilter[]) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_owner: cdktf.stringToTerraform(this._resourceOwner),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsRamResourceShareFilterToTerraform)(this._filter),
    };
  }
}
