// https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "enable": {
        "type": "bool",
        "optional": true
      },
      "finding_publishing_frequency": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
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

export interface GuarddutyDetectorConfig extends TerraformMetaArguments {
  readonly enable?: boolean;
  readonly findingPublishingFrequency?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class GuarddutyDetector extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyDetectorConfig = {}) {
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
    this._enable = config.enable;
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: true
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean;
  public get enable() {
    return this._enable;
  }
  public set enable(value: boolean | undefined) {
    this._enable = value;
  }

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string;
  public get findingPublishingFrequency() {
    return this._findingPublishingFrequency ?? this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string | undefined) {
    this._findingPublishingFrequency = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: this._enable,
      finding_publishing_frequency: this._findingPublishingFrequency,
      tags: this._tags,
    };
  }
}
