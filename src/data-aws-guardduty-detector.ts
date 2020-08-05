// https://www.terraform.io/docs/providers/aws/r/data_aws_guardduty_detector.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "finding_publishing_frequency": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "service_role_arn": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsGuarddutyDetectorConfig extends TerraformMetaArguments {
}

// Resource

export class DataAwsGuarddutyDetector extends TerraformDataSource {

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

  // finding_publishing_frequency - computed: true, optional: false, required: true
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_role_arn - computed: true, optional: false, required: true
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
