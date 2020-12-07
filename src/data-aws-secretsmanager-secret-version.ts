// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  readonly secretId: string;
  readonly versionId?: string;
  readonly versionStage?: string;
}

// Resource

export class DataAwsSecretsmanagerSecretVersion extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig) {
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
    this._secretId = config.secretId;
    this._versionId = config.versionId;
    this._versionStage = config.versionStage;
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

  // secret_binary - computed: true, optional: false, required: false
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
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

  // secret_string - computed: true, optional: false, required: false
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string;
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string ) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage
  }

  // version_stages - computed: true, optional: false, required: false
  public get versionStages() {
    return this.getListAttribute('version_stages');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: cdktf.stringToTerraform(this._secretId),
      version_id: cdktf.stringToTerraform(this._versionId),
      version_stage: cdktf.stringToTerraform(this._versionStage),
    };
  }
}
