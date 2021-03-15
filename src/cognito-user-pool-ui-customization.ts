// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolUiCustomizationConfig extends cdktf.TerraformMetaArguments {
  readonly clientId?: string;
  readonly css?: string;
  readonly imageFile?: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoUserPoolUiCustomization extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoUserPoolUiCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_ui_customization',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientId = config.clientId;
    this._css = config.css;
    this._imageFile = config.imageFile;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string ) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // css - computed: false, optional: true, required: false
  private _css?: string;
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string ) {
    this._css = value;
  }
  public resetCss() {
    this._css = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css
  }

  // css_version - computed: true, optional: false, required: false
  public get cssVersion() {
    return this.getStringAttribute('css_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_file - computed: false, optional: true, required: false
  private _imageFile?: string;
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string ) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      css: cdktf.stringToTerraform(this._css),
      image_file: cdktf.stringToTerraform(this._imageFile),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }
}
