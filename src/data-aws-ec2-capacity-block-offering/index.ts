/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2CapacityBlockOfferingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}
  */
  readonly capacityDurationHours: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}
  */
  readonly endDateRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}
  */
  readonly startDateRange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}
*/
export class DataAwsEc2CapacityBlockOffering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_capacity_block_offering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import
  * @param importFromId The id of the existing DataAwsEc2CapacityBlockOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_capacity_block_offering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2CapacityBlockOfferingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2CapacityBlockOfferingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_capacity_block_offering',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityDurationHours = config.capacityDurationHours;
    this._endDateRange = config.endDateRange;
    this._instanceCount = config.instanceCount;
    this._instanceType = config.instanceType;
    this._startDateRange = config.startDateRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // capacity_block_offering_id - computed: true, optional: false, required: false
  public get capacityBlockOfferingId() {
    return this.getStringAttribute('capacity_block_offering_id');
  }

  // capacity_duration_hours - computed: false, optional: false, required: true
  private _capacityDurationHours?: number; 
  public get capacityDurationHours() {
    return this.getNumberAttribute('capacity_duration_hours');
  }
  public set capacityDurationHours(value: number) {
    this._capacityDurationHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityDurationHoursInput() {
    return this._capacityDurationHours;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // end_date_range - computed: true, optional: true, required: false
  private _endDateRange?: string; 
  public get endDateRange() {
    return this.getStringAttribute('end_date_range');
  }
  public set endDateRange(value: string) {
    this._endDateRange = value;
  }
  public resetEndDateRange() {
    this._endDateRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateRangeInput() {
    return this._endDateRange;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // start_date_range - computed: true, optional: true, required: false
  private _startDateRange?: string; 
  public get startDateRange() {
    return this.getStringAttribute('start_date_range');
  }
  public set startDateRange(value: string) {
    this._startDateRange = value;
  }
  public resetStartDateRange() {
    this._startDateRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateRangeInput() {
    return this._startDateRange;
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // upfront_fee - computed: true, optional: false, required: false
  public get upfrontFee() {
    return this.getStringAttribute('upfront_fee');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_duration_hours: cdktf.numberToTerraform(this._capacityDurationHours),
      end_date_range: cdktf.stringToTerraform(this._endDateRange),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      start_date_range: cdktf.stringToTerraform(this._startDateRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_duration_hours: {
        value: cdktf.numberToHclTerraform(this._capacityDurationHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_date_range: {
        value: cdktf.stringToHclTerraform(this._endDateRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date_range: {
        value: cdktf.stringToHclTerraform(this._startDateRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
