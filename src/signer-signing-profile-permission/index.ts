/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignerSigningProfilePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#action SignerSigningProfilePermission#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#id SignerSigningProfilePermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}
  */
  readonly profileVersion?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#region SignerSigningProfilePermission#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}
  */
  readonly statementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}
  */
  readonly statementIdPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission aws_signer_signing_profile_permission}
*/
export class SignerSigningProfilePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_signer_signing_profile_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignerSigningProfilePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignerSigningProfilePermission to import
  * @param importFromId The id of the existing SignerSigningProfilePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignerSigningProfilePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_signer_signing_profile_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/signer_signing_profile_permission aws_signer_signing_profile_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignerSigningProfilePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_profile_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._action = config.action;
    this._id = config.id;
    this._principal = config.principal;
    this._profileName = config.profileName;
    this._profileVersion = config.profileVersion;
    this._region = config.region;
    this._statementId = config.statementId;
    this._statementIdPrefix = config.statementIdPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_version - computed: true, optional: true, required: false
  private _profileVersion?: string; 
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }
  public set profileVersion(value: string) {
    this._profileVersion = value;
  }
  public resetProfileVersion() {
    this._profileVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileVersionInput() {
    return this._profileVersion;
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

  // statement_id - computed: true, optional: true, required: false
  private _statementId?: string; 
  public get statementId() {
    return this.getStringAttribute('statement_id');
  }
  public set statementId(value: string) {
    this._statementId = value;
  }
  public resetStatementId() {
    this._statementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdInput() {
    return this._statementId;
  }

  // statement_id_prefix - computed: true, optional: true, required: false
  private _statementIdPrefix?: string; 
  public get statementIdPrefix() {
    return this.getStringAttribute('statement_id_prefix');
  }
  public set statementIdPrefix(value: string) {
    this._statementIdPrefix = value;
  }
  public resetStatementIdPrefix() {
    this._statementIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdPrefixInput() {
    return this._statementIdPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      principal: cdktf.stringToTerraform(this._principal),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_version: cdktf.stringToTerraform(this._profileVersion),
      region: cdktf.stringToTerraform(this._region),
      statement_id: cdktf.stringToTerraform(this._statementId),
      statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_version: {
        value: cdktf.stringToHclTerraform(this._profileVersion),
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
      statement_id: {
        value: cdktf.stringToHclTerraform(this._statementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_id_prefix: {
        value: cdktf.stringToHclTerraform(this._statementIdPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
