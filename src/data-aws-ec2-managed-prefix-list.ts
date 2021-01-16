// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_managed_prefix_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEc2ManagedPrefixListConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2ManagedPrefixListFilter[];
}
export class DataAwsEc2ManagedPrefixListEntries extends ComplexComputedList {

  // cidr - computed: true, optional: false, required: true
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }
}
export interface DataAwsEc2ManagedPrefixListFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2ManagedPrefixList extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2ManagedPrefixListConfig = {}) {
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
    this._name = config.name;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: true, optional: false, required: true
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // entries - computed: true, optional: false, required: true
  public entries(index: string) {
    return new DataAwsEc2ManagedPrefixListEntries(this, 'entries', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_entries - computed: true, optional: false, required: true
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2ManagedPrefixListFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2ManagedPrefixListFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
