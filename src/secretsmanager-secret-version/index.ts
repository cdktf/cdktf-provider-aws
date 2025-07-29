/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#region SecretsmanagerSecretVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}
  */
  readonly secretBinary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}
  */
  readonly secretString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}
  */
  readonly secretStringWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}
  */
  readonly secretStringWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}
  */
  readonly versionStages?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version}
*/
export class SecretsmanagerSecretVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsmanagerSecretVersion to import
  * @param importFromId The id of the existing SecretsmanagerSecretVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsmanagerSecretVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_secretsmanager_secret_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerSecretVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
    this._secretBinary = config.secretBinary;
    this._secretId = config.secretId;
    this._secretString = config.secretString;
    this._secretStringWo = config.secretStringWo;
    this._secretStringWoVersion = config.secretStringWoVersion;
    this._versionStages = config.versionStages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // has_secret_string_wo - computed: true, optional: false, required: false
  public get hasSecretStringWo() {
    return this.getBooleanAttribute('has_secret_string_wo');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_binary - computed: false, optional: true, required: false
  private _secretBinary?: string; 
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
  }
  public set secretBinary(value: string) {
    this._secretBinary = value;
  }
  public resetSecretBinary() {
    this._secretBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretBinaryInput() {
    return this._secretBinary;
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

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // secret_string_wo - computed: false, optional: true, required: false
  private _secretStringWo?: string; 
  public get secretStringWo() {
    return this.getStringAttribute('secret_string_wo');
  }
  public set secretStringWo(value: string) {
    this._secretStringWo = value;
  }
  public resetSecretStringWo() {
    this._secretStringWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringWoInput() {
    return this._secretStringWo;
  }

  // secret_string_wo_version - computed: false, optional: true, required: false
  private _secretStringWoVersion?: number; 
  public get secretStringWoVersion() {
    return this.getNumberAttribute('secret_string_wo_version');
  }
  public set secretStringWoVersion(value: number) {
    this._secretStringWoVersion = value;
  }
  public resetSecretStringWoVersion() {
    this._secretStringWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringWoVersionInput() {
    return this._secretStringWoVersion;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_stages - computed: true, optional: true, required: false
  private _versionStages?: string[]; 
  public get versionStages() {
    return cdktf.Fn.tolist(this.getListAttribute('version_stages'));
  }
  public set versionStages(value: string[]) {
    this._versionStages = value;
  }
  public resetVersionStages() {
    this._versionStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStagesInput() {
    return this._versionStages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      secret_binary: cdktf.stringToTerraform(this._secretBinary),
      secret_id: cdktf.stringToTerraform(this._secretId),
      secret_string: cdktf.stringToTerraform(this._secretString),
      secret_string_wo: cdktf.stringToTerraform(this._secretStringWo),
      secret_string_wo_version: cdktf.numberToTerraform(this._secretStringWoVersion),
      version_stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versionStages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_binary: {
        value: cdktf.stringToHclTerraform(this._secretBinary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_string_wo: {
        value: cdktf.stringToHclTerraform(this._secretStringWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_string_wo_version: {
        value: cdktf.numberToHclTerraform(this._secretStringWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_stages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versionStages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
