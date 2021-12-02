// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface DataAwsKmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#secret DataAwsKmsSecret#secret}
  */
  readonly secret: DataAwsKmsSecretSecret[];
}
export interface DataAwsKmsSecretSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#context DataAwsKmsSecret#context}
  */
  readonly context?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#grant_tokens DataAwsKmsSecret#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#name DataAwsKmsSecret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#payload DataAwsKmsSecret#payload}
  */
  readonly payload: string;
}

export function dataAwsKmsSecretSecretToTerraform(struct?: DataAwsKmsSecretSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.context),
    grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grantTokens),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret}
*/
export class DataAwsKmsSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsKmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_secret',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: DataAwsKmsSecretSecret[]; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DataAwsKmsSecretSecret[]) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secret: cdktf.listMapper(dataAwsKmsSecretSecretToTerraform)(this._secret),
    };
  }
}
