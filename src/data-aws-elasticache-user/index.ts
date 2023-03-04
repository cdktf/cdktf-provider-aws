// https://www.terraform.io/docs/providers/aws/d/elasticache_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#access_string DataAwsElasticacheUser#access_string}
  */
  readonly accessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#engine DataAwsElasticacheUser#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#id DataAwsElasticacheUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}
  */
  readonly noPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#passwords DataAwsElasticacheUser#passwords}
  */
  readonly passwords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#user_id DataAwsElasticacheUser#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user#user_name DataAwsElasticacheUser#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user aws_elasticache_user}
*/
export class DataAwsElasticacheUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user aws_elasticache_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticacheUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticacheUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._accessString = config.accessString;
    this._engine = config.engine;
    this._id = config.id;
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
  public set accessString(value: string) {
    this._accessString = value;
  }
  public resetAccessString() {
    this._accessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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

  // no_password_required - computed: false, optional: true, required: false
  private _noPasswordRequired?: boolean | cdktf.IResolvable; 
  public get noPasswordRequired() {
    return this.getBooleanAttribute('no_password_required');
  }
  public set noPasswordRequired(value: boolean | cdktf.IResolvable) {
    this._noPasswordRequired = value;
  }
  public resetNoPasswordRequired() {
    this._noPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswordRequiredInput() {
    return this._noPasswordRequired;
  }

  // passwords - computed: false, optional: true, required: false
  private _passwords?: string[]; 
  public get passwords() {
    return cdktf.Fn.tolist(this.getListAttribute('passwords'));
  }
  public set passwords(value: string[]) {
    this._passwords = value;
  }
  public resetPasswords() {
    this._passwords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_string: cdktf.stringToTerraform(this._accessString),
      engine: cdktf.stringToTerraform(this._engine),
      id: cdktf.stringToTerraform(this._id),
      no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
      passwords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwords),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
