// https://www.terraform.io/docs/providers/aws/r/data_aws_ram_resource_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceOwner: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsRamResourceShareFilter[];
}
export interface DataAwsRamResourceShareFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsRamResourceShareFilterToTerraform(struct?: DataAwsRamResourceShareFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsRamResourceShare extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // owning_account_id - computed: true, optional: false, required: false
  public get owningAccountId() {
    return this.getStringAttribute('owning_account_id');
  }

  // resource_owner - computed: false, optional: false, required: true
  private _resourceOwner: string;
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }
  public set resourceOwner(value: string) {
    this._resourceOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerInput() {
    return this._resourceOwner
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRamResourceShareFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsRamResourceShareFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
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
