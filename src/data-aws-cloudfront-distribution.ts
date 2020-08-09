// https://www.terraform.io/docs/providers/aws/r/data_aws_cloudfront_distribution.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "computed": true
      },
      "enabled": {
        "type": "bool",
        "computed": true
      },
      "etag": {
        "type": "string",
        "computed": true
      },
      "hosted_zone_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "required": true
      },
      "in_progress_validation_batches": {
        "type": "number",
        "computed": true
      },
      "last_modified_time": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsCloudfrontDistributionConfig extends TerraformMetaArguments {
  readonly id: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsCloudfrontDistribution extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_distribution',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  // in_progress_validation_batches - computed: true, optional: false, required: true
  public get inProgressValidationBatches() {
    return this.getNumberAttribute('in_progress_validation_batches');
  }

  // last_modified_time - computed: true, optional: false, required: true
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
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
      id: this._id,
      tags: this._tags,
    };
  }
}
