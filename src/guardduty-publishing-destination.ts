// https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyPublishingDestinationConfig extends cdktf.TerraformMetaArguments {
  readonly destinationArn: string;
  readonly destinationType?: string;
  readonly detectorId: string;
  readonly kmsKeyArn: string;
}

// Resource

export class GuarddutyPublishingDestination extends cdktf.TerraformResource {

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
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string;
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string ) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_arn: cdktf.stringToTerraform(this._destinationArn),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
    };
  }
}
