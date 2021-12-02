// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface DataAwsKmsSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#secret DataAwsKmsSecrets#secret}
  */
  readonly secret: DataAwsKmsSecretsSecret[];
}
export interface DataAwsKmsSecretsSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#context DataAwsKmsSecrets#context}
  */
  readonly context?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#grant_tokens DataAwsKmsSecrets#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#name DataAwsKmsSecrets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#payload DataAwsKmsSecrets#payload}
  */
  readonly payload: string;
}

export function dataAwsKmsSecretsSecretToTerraform(struct?: DataAwsKmsSecretsSecret): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets}
*/
export class DataAwsKmsSecrets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_secrets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsSecretsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsKmsSecretsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_secrets',
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

  // plaintext - computed: true, optional: false, required: false
  public plaintext(key: string): string {
    return new cdktf.StringMap(this, 'plaintext').lookup(key);
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: DataAwsKmsSecretsSecret[]; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DataAwsKmsSecretsSecret[]) {
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
      secret: cdktf.listMapper(dataAwsKmsSecretsSecretToTerraform)(this._secret),
    };
  }
}
