// https://www.terraform.io/docs/providers/aws/r/data_aws_autoscaling_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAutoscalingGroupsConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataAwsAutoscalingGroupsFilter[];
}
export interface DataAwsAutoscalingGroupsFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsAutoscalingGroupsFilterToTerraform(struct?: DataAwsAutoscalingGroupsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsAutoscalingGroups extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_groups',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
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
  private _filter?: DataAwsAutoscalingGroupsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAutoscalingGroupsFilter[] ) {
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
      filter: cdktf.listMapper(dataAwsAutoscalingGroupsFilterToTerraform)(this._filter),
    };
  }
}
