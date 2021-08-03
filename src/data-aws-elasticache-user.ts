// https://www.terraform.io/docs/providers/aws/d/elasticache_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#access_string DataAwsElasticacheUser#access_string}
  */
  readonly accessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#engine DataAwsElasticacheUser#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#no_password_required DataAwsElasticacheUser#no_password_required}
  */
  readonly noPasswordRequired?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#passwords DataAwsElasticacheUser#passwords}
  */
  readonly passwords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_id DataAwsElasticacheUser#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_name DataAwsElasticacheUser#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user}
*/
export class DataAwsElasticacheUser extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessString = config.accessString;
    this._engine = config.engine;
    this._noPasswordRequired = config.noPasswordRequired;
    this._passwords = config.passwords;
    this._userId = config.userId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_string - computed: false, optional: true, required: false
  private _accessString?: string;
  public get accessString() {
    return this.getStringAttribute('access_string');
  }
  public set accessString(value: string ) {
    this._accessString = value;
  }
  public resetAccessString() {
    this._accessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string ) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // no_password_required - computed: false, optional: true, required: false
  private _noPasswordRequired?: boolean;
  public get noPasswordRequired() {
    return this.getBooleanAttribute('no_password_required');
  }
  public set noPasswordRequired(value: boolean ) {
    this._noPasswordRequired = value;
  }
  public resetNoPasswordRequired() {
    this._noPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswordRequiredInput() {
    return this._noPasswordRequired
  }

  // passwords - computed: false, optional: true, required: false
  private _passwords?: string[];
  public get passwords() {
    return this.getListAttribute('passwords');
  }
  public set passwords(value: string[] ) {
    this._passwords = value;
  }
  public resetPasswords() {
    this._passwords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string ) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_string: cdktf.stringToTerraform(this._accessString),
      engine: cdktf.stringToTerraform(this._engine),
      no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
      passwords: cdktf.listMapper(cdktf.stringToTerraform)(this._passwords),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
