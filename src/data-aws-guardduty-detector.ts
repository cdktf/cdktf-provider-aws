// https://www.terraform.io/docs/providers/aws/r/data_aws_guardduty_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
  readonly id?: string;
}

// Resource

export class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsGuarddutyDetectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_detector',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finding_publishing_frequency - computed: true, optional: false, required: false
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string ) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // service_role_arn - computed: true, optional: false, required: false
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
