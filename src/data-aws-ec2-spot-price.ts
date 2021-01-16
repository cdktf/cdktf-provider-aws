// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_spot_price.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2SpotPriceConfig extends cdktf.TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  /** filter block */
  readonly filter?: DataAwsEc2SpotPriceFilter[];
}
export interface DataAwsEc2SpotPriceFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2SpotPriceFilterToTerraform(struct?: DataAwsEc2SpotPriceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2SpotPrice extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2SpotPriceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_spot_price',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._instanceType = config.instanceType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string ) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string ) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // spot_price_timestamp - computed: true, optional: false, required: false
  public get spotPriceTimestamp() {
    return this.getStringAttribute('spot_price_timestamp');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2SpotPriceFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2SpotPriceFilter[] ) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      filter: cdktf.listMapper(dataAwsEc2SpotPriceFilterToTerraform)(this._filter),
    };
  }
}
