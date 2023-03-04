// https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}
  */
  readonly versionStage?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version aws_secretsmanager_secret_version}
*/
export class DataAwsSecretsmanagerSecretVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version aws_secretsmanager_secret_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecretsmanagerSecretVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // secret_binary - computed: true, optional: false, required: false
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
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
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }

  // version_stages - computed: true, optional: false, required: false
  public get versionStages() {
    return cdktf.Fn.tolist(this.getListAttribute('version_stages'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      secret_id: cdktf.stringToTerraform(this._secretId),
      version_id: cdktf.stringToTerraform(this._versionId),
      version_stage: cdktf.stringToTerraform(this._versionStage),
    };
  }
}
