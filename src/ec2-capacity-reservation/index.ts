// https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2CapacityReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}
  */
  readonly endDateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}
  */
  readonly ephemeralStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#id Ec2CapacityReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}
  */
  readonly instanceMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}
  */
  readonly instancePlatform: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#outpost_arn Ec2CapacityReservation#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}
  */
  readonly placementGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#tags_all Ec2CapacityReservation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}
  */
  readonly tenancy?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation aws_ec2_capacity_reservation}
*/
export class Ec2CapacityReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_capacity_reservation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation aws_ec2_capacity_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2CapacityReservationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2CapacityReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_capacity_reservation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._ebsOptimized = config.ebsOptimized;
    this._endDate = config.endDate;
    this._endDateType = config.endDateType;
    this._ephemeralStorage = config.ephemeralStorage;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._instanceMatchCriteria = config.instanceMatchCriteria;
    this._instancePlatform = config.instancePlatform;
    this._instanceType = config.instanceType;
    this._outpostArn = config.outpostArn;
    this._placementGroupArn = config.placementGroupArn;
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
    return this.getBooleanAttribute('ebs_optimized');
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
    return this.getBooleanAttribute('ephemeral_storage');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // placement_group_arn - computed: false, optional: true, required: false
  private _placementGroupArn?: string; 
  public get placementGroupArn() {
    return this.getStringAttribute('placement_group_arn');
  }
  public set placementGroupArn(value: string) {
    this._placementGroupArn = value;
  }
  public resetPlacementGroupArn() {
    this._placementGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupArnInput() {
    return this._placementGroupArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_match_criteria: cdktf.stringToTerraform(this._instanceMatchCriteria),
      instance_platform: cdktf.stringToTerraform(this._instancePlatform),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      placement_group_arn: cdktf.stringToTerraform(this._placementGroupArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tenancy: cdktf.stringToTerraform(this._tenancy),
    };
  }
}
