// https://www.terraform.io/docs/providers/aws/r/data_aws_guardduty_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finding_publishing_frequency - computed: true, optional: false, required: false
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    };
  }
}
