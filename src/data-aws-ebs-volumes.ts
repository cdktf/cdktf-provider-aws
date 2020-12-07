// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_volumes.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEbsVolumesConfig extends cdktf.TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEbsVolumesFilter[];
}
export interface DataAwsEbsVolumesFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEbsVolumesFilterToTerraform(struct?: DataAwsEbsVolumesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEbsVolumes extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsVolumesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_volumes',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsVolumesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEbsVolumesFilter[] ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEbsVolumesFilterToTerraform)(this._filter),
    };
  }
}
