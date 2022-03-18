// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketRequestPaymentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_request_payment_configuration#bucket S3BucketRequestPaymentConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_request_payment_configuration#expected_bucket_owner S3BucketRequestPaymentConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_request_payment_configuration#payer S3BucketRequestPaymentConfiguration#payer}
  */
  readonly payer: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_request_payment_configuration aws_s3_bucket_request_payment_configuration}
*/
export class S3BucketRequestPaymentConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_request_payment_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_request_payment_configuration aws_s3_bucket_request_payment_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketRequestPaymentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketRequestPaymentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_request_payment_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._payer = config.payer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // payer - computed: false, optional: false, required: true
  private _payer?: string; 
  public get payer() {
    return this.getStringAttribute('payer');
  }
  public set payer(value: string) {
    this._payer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payerInput() {
    return this._payer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      payer: cdktf.stringToTerraform(this._payer),
    };
  }
}
