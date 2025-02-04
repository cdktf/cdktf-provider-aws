/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShieldProtectionHealthCheckAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}
  */
  readonly healthCheckArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}
  */
  readonly shieldProtectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association}
*/
export class ShieldProtectionHealthCheckAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_shield_protection_health_check_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShieldProtectionHealthCheckAssociation to import
  * @param importFromId The id of the existing ShieldProtectionHealthCheckAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShieldProtectionHealthCheckAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_shield_protection_health_check_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShieldProtectionHealthCheckAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ShieldProtectionHealthCheckAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_shield_protection_health_check_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._healthCheckArn = config.healthCheckArn;
    this._id = config.id;
    this._shieldProtectionId = config.shieldProtectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_arn - computed: false, optional: false, required: true
  private _healthCheckArn?: string; 
  public get healthCheckArn() {
    return this.getStringAttribute('health_check_arn');
  }
  public set healthCheckArn(value: string) {
    this._healthCheckArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckArnInput() {
    return this._healthCheckArn;
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

  // shield_protection_id - computed: false, optional: false, required: true
  private _shieldProtectionId?: string; 
  public get shieldProtectionId() {
    return this.getStringAttribute('shield_protection_id');
  }
  public set shieldProtectionId(value: string) {
    this._shieldProtectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldProtectionIdInput() {
    return this._shieldProtectionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_arn: cdktf.stringToTerraform(this._healthCheckArn),
      id: cdktf.stringToTerraform(this._id),
      shield_protection_id: cdktf.stringToTerraform(this._shieldProtectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check_arn: {
        value: cdktf.stringToHclTerraform(this._healthCheckArn),
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
      shield_protection_id: {
        value: cdktf.stringToHclTerraform(this._shieldProtectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
