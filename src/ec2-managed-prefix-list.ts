// https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ManagedPrefixListConfig extends TerraformMetaArguments {
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

// Resource

export class Ec2ManagedPrefixList extends TerraformResource {

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
    return this._addressFamily;
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_entries - computed: false, optional: false, required: true
  private _maxEntries: number;
  public get maxEntries() {
    return this._maxEntries;
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: Ec2ManagedPrefixListEntry[];
  public get entry() {
    return this._entry;
  }
  public set entry(value: Ec2ManagedPrefixListEntry[] | undefined) {
    this._entry = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: this._addressFamily,
      max_entries: this._maxEntries,
      name: this._name,
      tags: this._tags,
      entry: this._entry,
    };
  }
}
