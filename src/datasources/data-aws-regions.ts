// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Sources
*/
export interface DataAwsRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#all_regions DataAwsRegions#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#filter DataAwsRegions#filter}
  */
  readonly filter?: DataAwsRegionsFilter[];
}
export interface DataAwsRegionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#name DataAwsRegions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#values DataAwsRegions#values}
  */
  readonly values: string[];
}

export function dataAwsRegionsFilterToTerraform(struct?: DataAwsRegionsFilter): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions}
*/
export class DataAwsRegions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_regions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRegionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRegionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_regions',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allRegions = config.allRegions;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktf.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions') as any;
  }
  public set allRegions(value: boolean | cdktf.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsRegionsFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsRegionsFilter[]) {
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
      all_regions: cdktf.booleanToTerraform(this._allRegions),
      filter: cdktf.listMapper(dataAwsRegionsFilterToTerraform)(this._filter),
    };
  }
}
