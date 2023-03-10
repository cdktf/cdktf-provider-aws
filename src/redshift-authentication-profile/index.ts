// https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile#authentication_profile_content RedshiftAuthenticationProfile#authentication_profile_content}
  */
  readonly authenticationProfileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile#authentication_profile_name RedshiftAuthenticationProfile#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile#id RedshiftAuthenticationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile aws_redshift_authentication_profile}
*/
export class RedshiftAuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_authentication_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_authentication_profile aws_redshift_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._authenticationProfileContent = config.authenticationProfileContent;
    this._authenticationProfileName = config.authenticationProfileName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profile_content - computed: false, optional: false, required: true
  private _authenticationProfileContent?: string; 
  public get authenticationProfileContent() {
    return this.getStringAttribute('authentication_profile_content');
  }
  public set authenticationProfileContent(value: string) {
    this._authenticationProfileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileContentInput() {
    return this._authenticationProfileContent;
  }

  // authentication_profile_name - computed: false, optional: false, required: true
  private _authenticationProfileName?: string; 
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
  }
  public set authenticationProfileName(value: string) {
    this._authenticationProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileNameInput() {
    return this._authenticationProfileName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_profile_content: cdktf.stringToTerraform(this._authenticationProfileContent),
      authentication_profile_name: cdktf.stringToTerraform(this._authenticationProfileName),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
