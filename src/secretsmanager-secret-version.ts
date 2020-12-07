// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  readonly secretBinary?: string;
  readonly secretId: string;
  readonly secretString?: string;
  readonly versionStages?: string[];
}

// Resource

export class SecretsmanagerSecretVersion extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretBinary = config.secretBinary;
    this._secretId = config.secretId;
    this._secretString = config.secretString;
    this._versionStages = config.versionStages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret_binary - computed: false, optional: true, required: false
  private _secretBinary?: string;
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
  }
  public set secretBinary(value: string ) {
    this._secretBinary = value;
  }
  public resetSecretBinary() {
    this._secretBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretBinaryInput() {
    return this._secretBinary
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string;
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string ) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_stages - computed: true, optional: true, required: false
  private _versionStages?: string[];
  public get versionStages() {
    return this.getListAttribute('version_stages');
  }
  public set versionStages(value: string[]) {
    this._versionStages = value;
  }
  public resetVersionStages() {
    this._versionStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStagesInput() {
    return this._versionStages
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_binary: cdktf.stringToTerraform(this._secretBinary),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_string: cdktf.stringToTerraform(this._secretString),
      version_stages: cdktf.listMapper(cdktf.stringToTerraform)(this._versionStages),
    };
  }
}
