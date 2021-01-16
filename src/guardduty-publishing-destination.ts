// https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GuarddutyPublishingDestinationConfig extends TerraformMetaArguments {
  readonly destinationArn: string;
  readonly destinationType?: string;
  readonly detectorId: string;
  readonly kmsKeyArn: string;
}

// Resource

export class GuarddutyPublishingDestination extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyPublishingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_publishing_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationArn = config.destinationArn;
    this._destinationType = config.destinationType;
    this._detectorId = config.detectorId;
    this._kmsKeyArn = config.kmsKeyArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn: string;
  public get destinationArn() {
    return this._destinationArn;
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string;
  public get destinationType() {
    return this._destinationType;
  }
  public set destinationType(value: string | undefined) {
    this._destinationType = value;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn;
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_arn: this._destinationArn,
      destination_type: this._destinationType,
      detector_id: this._detectorId,
      kms_key_arn: this._kmsKeyArn,
    };
  }
}
