// https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "caller_reference": {
        "type": "string",
        "computed": true
      },
      "cloudfront_access_identity_path": {
        "type": "string",
        "computed": true
      },
      "comment": {
        "type": "string",
        "optional": true
      },
      "etag": {
        "type": "string",
        "computed": true
      },
      "iam_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "s3_canonical_user_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudfrontOriginAccessIdentityConfig extends TerraformMetaArguments {
  readonly comment?: string;
}

// Resource

export class CloudfrontOriginAccessIdentity extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfrontOriginAccessIdentityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_access_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: true
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // cloudfront_access_identity_path - computed: true, optional: false, required: true
  public get cloudfrontAccessIdentityPath() {
    return this.getStringAttribute('cloudfront_access_identity_path');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this._comment;
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // iam_arn - computed: true, optional: false, required: true
  public get iamArn() {
    return this.getStringAttribute('iam_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // s3_canonical_user_id - computed: true, optional: false, required: true
  public get s3CanonicalUserId() {
    return this.getStringAttribute('s3_canonical_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: this._comment,
    };
  }
}
