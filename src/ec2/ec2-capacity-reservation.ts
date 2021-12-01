// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2CapacityReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#availability_zone Ec2CapacityReservation#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ebs_optimized Ec2CapacityReservation#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date Ec2CapacityReservation#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date_type Ec2CapacityReservation#end_date_type}
  */
  readonly endDateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}
  */
  readonly ephemeralStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_count Ec2CapacityReservation#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}
  */
  readonly instanceMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_platform Ec2CapacityReservation#instance_platform}
  */
  readonly instancePlatform: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_type Ec2CapacityReservation#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#outpost_arn Ec2CapacityReservation#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags Ec2CapacityReservation#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags_all Ec2CapacityReservation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tenancy Ec2CapacityReservation#tenancy}
  */
  readonly tenancy?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation}
*/
export class Ec2CapacityReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_capacity_reservation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2CapacityReservationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2CapacityReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_capacity_reservation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._ebsOptimized = config.ebsOptimized;
    this._endDate = config.endDate;
    this._endDateType = config.endDateType;
    this._ephemeralStorage = config.ephemeralStorage;
    this._instanceCount = config.instanceCount;
    this._instanceMatchCriteria = config.instanceMatchCriteria;
    this._instancePlatform = config.instancePlatform;
    this._instanceType = config.instanceType;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tenancy = config.tenancy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized') as any;
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_date_type - computed: false, optional: true, required: false
  private _endDateType?: string; 
  public get endDateType() {
    return this.getStringAttribute('end_date_type');
  }
  public set endDateType(value: string) {
    this._endDateType = value;
  }
  public resetEndDateType() {
    this._endDateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateTypeInput() {
    return this._endDateType;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: boolean | cdktf.IResolvable; 
  public get ephemeralStorage() {
    return this.getBooleanAttribute('ephemeral_storage') as any;
  }
  public set ephemeralStorage(value: boolean | cdktf.IResolvable) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // instance_match_criteria - computed: false, optional: true, required: false
  private _instanceMatchCriteria?: string; 
  public get instanceMatchCriteria() {
    return this.getStringAttribute('instance_match_criteria');
  }
  public set instanceMatchCriteria(value: string) {
    this._instanceMatchCriteria = value;
  }
  public resetInstanceMatchCriteria() {
    this._instanceMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMatchCriteriaInput() {
    return this._instanceMatchCriteria;
  }

  // instance_platform - computed: false, optional: false, required: true
  private _instancePlatform?: string; 
  public get instancePlatform() {
    return this.getStringAttribute('instance_platform');
  }
  public set instancePlatform(value: string) {
    this._instancePlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlatformInput() {
    return this._instancePlatform;
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

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string; 
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_date_type: cdktf.stringToTerraform(this._endDateType),
      ephemeral_storage: cdktf.booleanToTerraform(this._ephemeralStorage),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_match_criteria: cdktf.stringToTerraform(this._instanceMatchCriteria),
      instance_platform: cdktf.stringToTerraform(this._instancePlatform),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      tenancy: cdktf.stringToTerraform(this._tenancy),
    };
  }
}
