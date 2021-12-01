// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#address_family Ec2ManagedPrefixList#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#max_entries Ec2ManagedPrefixList#max_entries}
  */
  readonly maxEntries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#name Ec2ManagedPrefixList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags Ec2ManagedPrefixList#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags_all Ec2ManagedPrefixList#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * entry block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#entry Ec2ManagedPrefixList#entry}
  */
  readonly entry?: Ec2ManagedPrefixListEntry[];
}
export interface Ec2ManagedPrefixListEntry {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#cidr Ec2ManagedPrefixList#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#description Ec2ManagedPrefixList#description}
  */
  readonly description?: string;
}

export function ec2ManagedPrefixListEntryToTerraform(struct?: Ec2ManagedPrefixListEntry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
*/
export class Ec2ManagedPrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_managed_prefix_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ManagedPrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_managed_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._maxEntries = config.maxEntries;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._entry = config.entry;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_entries - computed: false, optional: false, required: true
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: Ec2ManagedPrefixListEntry[]; 
  public get entry() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('entry') as any;
  }
  public set entry(value: Ec2ManagedPrefixListEntry[]) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      max_entries: cdktf.numberToTerraform(this._maxEntries),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      entry: cdktf.listMapper(ec2ManagedPrefixListEntryToTerraform)(this._entry),
    };
  }
}
