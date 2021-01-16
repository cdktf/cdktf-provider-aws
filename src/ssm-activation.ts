// https://www.terraform.io/docs/providers/aws/r/ssm_activation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmActivationConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly expirationDate?: string;
  readonly iamRole: string;
  readonly name?: string;
  readonly registrationLimit?: number;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SsmActivation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_activation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._expirationDate = config.expirationDate;
    this._iamRole = config.iamRole;
    this._name = config.name;
    this._registrationLimit = config.registrationLimit;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_code - computed: true, optional: false, required: false
  public get activationCode() {
    return this.getStringAttribute('activation_code');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string;
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole: string;
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // registration_count - computed: true, optional: false, required: false
  public get registrationCount() {
    return this.getNumberAttribute('registration_count');
  }

  // registration_limit - computed: false, optional: true, required: false
  private _registrationLimit?: number;
  public get registrationLimit() {
    return this.getNumberAttribute('registration_limit');
  }
  public set registrationLimit(value: number ) {
    this._registrationLimit = value;
  }
  public resetRegistrationLimit() {
    this._registrationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationLimitInput() {
    return this._registrationLimit
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      name: cdktf.stringToTerraform(this._name),
      registration_limit: cdktf.numberToTerraform(this._registrationLimit),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
