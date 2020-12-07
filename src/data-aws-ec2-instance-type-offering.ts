// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_instance_type_offering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2InstanceTypeOfferingConfig extends cdktf.TerraformMetaArguments {
  readonly locationType?: string;
  readonly preferredInstanceTypes?: string[];
  /** filter block */
  readonly filter?: DataAwsEc2InstanceTypeOfferingFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2InstanceTypeOfferingFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2InstanceTypeOffering extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type_offering',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationType = config.locationType;
    this._preferredInstanceTypes = config.preferredInstanceTypes;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string;
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string ) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType
  }

  // preferred_instance_types - computed: false, optional: true, required: false
  private _preferredInstanceTypes?: string[];
  public get preferredInstanceTypes() {
    return this.getListAttribute('preferred_instance_types');
  }
  public set preferredInstanceTypes(value: string[] ) {
    this._preferredInstanceTypes = value;
  }
  public resetPreferredInstanceTypes() {
    this._preferredInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInstanceTypesInput() {
    return this._preferredInstanceTypes
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2InstanceTypeOfferingFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2InstanceTypeOfferingFilter[] ) {
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
      location_type: cdktf.stringToTerraform(this._locationType),
      preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes),
      filter: cdktf.listMapper(dataAwsEc2InstanceTypeOfferingFilterToTerraform)(this._filter),
    };
  }
}
