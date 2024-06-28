/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#actions AcmpcaPermission#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#certificate_authority_arn AcmpcaPermission#certificate_authority_arn}
  */
  readonly certificateAuthorityArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#id AcmpcaPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#principal AcmpcaPermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#source_account AcmpcaPermission#source_account}
  */
  readonly sourceAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission aws_acmpca_permission}
*/
export class AcmpcaPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_acmpca_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcmpcaPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcmpcaPermission to import
  * @param importFromId The id of the existing AcmpcaPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcmpcaPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_acmpca_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/acmpca_permission aws_acmpca_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.56.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._id = config.id;
    this._principal = config.principal;
    this._sourceAccount = config.sourceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
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

  // source_account - computed: true, optional: true, required: false
  private _sourceAccount?: string; 
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }
  public set sourceAccount(value: string) {
    this._sourceAccount = value;
  }
  public resetSourceAccount() {
    this._sourceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountInput() {
    return this._sourceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      id: cdktf.stringToTerraform(this._id),
      principal: cdktf.stringToTerraform(this._principal),
      source_account: cdktf.stringToTerraform(this._sourceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_authority_arn: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityArn),
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
      source_account: {
        value: cdktf.stringToHclTerraform(this._sourceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
