// https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
  readonly addressFamily: string;
  readonly maxEntries: number;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** entry block */
  readonly entry?: Ec2ManagedPrefixListEntry[];
}
export interface Ec2ManagedPrefixListEntry {
  readonly cidr: string;
  readonly description?: string;
}

function ec2ManagedPrefixListEntryToTerraform(struct?: Ec2ManagedPrefixListEntry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


// Resource

export class Ec2ManagedPrefixList extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._entry = config.entry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily
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
  private _maxEntries: number;
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: Ec2ManagedPrefixListEntry[];
  public get entry() {
    return this.interpolationForAttribute('entry') as any;
  }
  public set entry(value: Ec2ManagedPrefixListEntry[] ) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry
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
      entry: cdktf.listMapper(ec2ManagedPrefixListEntryToTerraform)(this._entry),
    };
  }
}
