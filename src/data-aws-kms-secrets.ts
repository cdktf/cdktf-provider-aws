// https://www.terraform.io/docs/providers/aws/r/data_aws_kms_secrets.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsKmsSecretsConfig extends TerraformMetaArguments {
  /** secret block */
  readonly secret: DataAwsKmsSecretsSecret[];
}
export interface DataAwsKmsSecretsSecret {
  readonly context?: { [key: string]: string };
  readonly grantTokens?: string[];
  readonly name: string;
  readonly payload: string;
}

// Resource

export class DataAwsKmsSecrets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return new StringMap(this, 'plaintext').lookup(key);
  }

  // secret - computed: false, optional: false, required: true
  private _secret: DataAwsKmsSecretsSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DataAwsKmsSecretsSecret[]) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secret: this._secret,
    };
  }
}
