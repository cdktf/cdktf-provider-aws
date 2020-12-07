// https://www.terraform.io/docs/providers/aws/r/data_aws_kms_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKmsSecretConfig extends cdktf.TerraformMetaArguments {
  /** secret block */
  readonly secret: DataAwsKmsSecretSecret[];
}
export interface DataAwsKmsSecretSecret {
  readonly context?: { [key: string]: string };
  readonly grantTokens?: string[];
  readonly name: string;
  readonly payload: string;
}

function dataAwsKmsSecretSecretToTerraform(struct?: DataAwsKmsSecretSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    context: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.context),
    grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grantTokens),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


// Resource

export class DataAwsKmsSecret extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _secret: DataAwsKmsSecretSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DataAwsKmsSecretSecret[]) {
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
      secret: cdktf.listMapper(dataAwsKmsSecretSecretToTerraform)(this._secret),
    };
  }
}
