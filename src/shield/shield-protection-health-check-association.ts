// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Shield Protection
*/
export interface ShieldProtectionHealthCheckAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}
  */
  readonly healthCheckArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}
  */
  readonly shieldProtectionId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_health_check_association aws_shield_protection_health_check_association}
*/
export class ShieldProtectionHealthCheckAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_shield_protection_health_check_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_health_check_association aws_shield_protection_health_check_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShieldProtectionHealthCheckAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ShieldProtectionHealthCheckAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_shield_protection_health_check_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._healthCheckArn = config.healthCheckArn;
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
  public get id() {
    return this.getStringAttribute('id');
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
      shield_protection_id: cdktf.stringToTerraform(this._shieldProtectionId),
    };
  }
}
