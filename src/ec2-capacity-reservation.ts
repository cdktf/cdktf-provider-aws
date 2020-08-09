// https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "required": true
      },
      "ebs_optimized": {
        "type": "bool",
        "optional": true
      },
      "end_date": {
        "type": "string",
        "optional": true
      },
      "end_date_type": {
        "type": "string",
        "optional": true
      },
      "ephemeral_storage": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_count": {
        "type": "number",
        "required": true
      },
      "instance_match_criteria": {
        "type": "string",
        "optional": true
      },
      "instance_platform": {
        "type": "string",
        "required": true
      },
      "instance_type": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tenancy": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2CapacityReservationConfig extends TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly ebsOptimized?: boolean;
  readonly endDate?: string;
  readonly endDateType?: string;
  readonly ephemeralStorage?: boolean;
  readonly instanceCount: number;
  readonly instanceMatchCriteria?: string;
  readonly instancePlatform: string;
  readonly instanceType: string;
  readonly tags?: { [key: string]: string };
  readonly tenancy?: string;
}

// Resource

export class Ec2CapacityReservation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._tags = config.tags;
    this._tenancy = config.tenancy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this._ebsOptimized;
  }
  public set ebsOptimized(value: boolean | undefined) {
    this._ebsOptimized = value;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string;
  public get endDate() {
    return this._endDate;
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }

  // end_date_type - computed: false, optional: true, required: false
  private _endDateType?: string;
  public get endDateType() {
    return this._endDateType;
  }
  public set endDateType(value: string | undefined) {
    this._endDateType = value;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: boolean;
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public set ephemeralStorage(value: boolean | undefined) {
    this._ephemeralStorage = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount: number;
  public get instanceCount() {
    return this._instanceCount;
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }

  // instance_match_criteria - computed: false, optional: true, required: false
  private _instanceMatchCriteria?: string;
  public get instanceMatchCriteria() {
    return this._instanceMatchCriteria;
  }
  public set instanceMatchCriteria(value: string | undefined) {
    this._instanceMatchCriteria = value;
  }

  // instance_platform - computed: false, optional: false, required: true
  private _instancePlatform: string;
  public get instancePlatform() {
    return this._instancePlatform;
  }
  public set instancePlatform(value: string) {
    this._instancePlatform = value;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this._tenancy;
  }
  public set tenancy(value: string | undefined) {
    this._tenancy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      ebs_optimized: this._ebsOptimized,
      end_date: this._endDate,
      end_date_type: this._endDateType,
      ephemeral_storage: this._ephemeralStorage,
      instance_count: this._instanceCount,
      instance_match_criteria: this._instanceMatchCriteria,
      instance_platform: this._instancePlatform,
      instance_type: this._instanceType,
      tags: this._tags,
      tenancy: this._tenancy,
    };
  }
}
