// https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountAlternateContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#alternate_contact_type AccountAlternateContact#alternate_contact_type}
  */
  readonly alternateContactType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#email_address AccountAlternateContact#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#name AccountAlternateContact#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#phone_number AccountAlternateContact#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html#title AccountAlternateContact#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html aws_account_alternate_contact}
*/
export class AccountAlternateContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_account_alternate_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/account_alternate_contact.html aws_account_alternate_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountAlternateContactConfig
  */
  public constructor(scope: Construct, id: string, config: AccountAlternateContactConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_account_alternate_contact',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternateContactType = config.alternateContactType;
    this._emailAddress = config.emailAddress;
    this._name = config.name;
    this._phoneNumber = config.phoneNumber;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_contact_type - computed: false, optional: false, required: true
  private _alternateContactType?: string; 
  public get alternateContactType() {
    return this.getStringAttribute('alternate_contact_type');
  }
  public set alternateContactType(value: string) {
    this._alternateContactType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateContactTypeInput() {
    return this._alternateContactType
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_contact_type: cdktf.stringToTerraform(this._alternateContactType),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      name: cdktf.stringToTerraform(this._name),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
