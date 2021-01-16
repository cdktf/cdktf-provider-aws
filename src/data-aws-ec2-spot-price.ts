// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_spot_price.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEc2SpotPriceConfig extends TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  /** filter block */
  readonly filter?: DataAwsEc2SpotPriceFilter[];
}
export interface DataAwsEc2SpotPriceFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2SpotPrice extends TerraformDataSource {

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
    return this._availabilityZone;
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string | undefined) {
    this._instanceType = value;
  }

  // spot_price - computed: true, optional: false, required: true
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // spot_price_timestamp - computed: true, optional: false, required: true
  public get spotPriceTimestamp() {
    return this.getStringAttribute('spot_price_timestamp');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2SpotPriceFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2SpotPriceFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      instance_type: this._instanceType,
      filter: this._filter,
    };
  }
}
