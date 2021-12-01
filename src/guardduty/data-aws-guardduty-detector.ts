// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS GuardDuty
*/
export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector}
*/
export class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_guardduty_detector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGuarddutyDetectorConfig = {}
  */
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
