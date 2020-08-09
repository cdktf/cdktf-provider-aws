// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "aws_account_id": {
        "type": "string",
        "computed": true
      },
      "certificate_arn": {
        "type": "string",
        "optional": true
      },
      "cloudfront_distribution_arn": {
        "type": "string",
        "computed": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "s3_bucket": {
        "type": "string",
        "computed": true
      },
      "user_pool_id": {
        "type": "string",
        "required": true
      },
      "version": {
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

export interface CognitoUserPoolDomainConfig extends TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly domain: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoUserPoolDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoUserPoolDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._domain = config.domain;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: true
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this._certificateArn;
  }
  public set certificateArn(value: string | undefined) {
    this._certificateArn = value;
  }

  // cloudfront_distribution_arn - computed: true, optional: false, required: true
  public get cloudfrontDistributionArn() {
    return this.getStringAttribute('cloudfront_distribution_arn');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // s3_bucket - computed: true, optional: false, required: true
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this._userPoolId;
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      domain: this._domain,
      user_pool_id: this._userPoolId,
    };
  }
}
