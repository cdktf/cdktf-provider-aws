/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}
  */
  readonly accessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}
  */
  readonly noPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}
  */
  readonly passwords?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#region DataAwsElasticacheUser#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}
  */
  readonly userName?: string;
  /**
  * authentication_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#authentication_mode DataAwsElasticacheUser#authentication_mode}
  */
  readonly authenticationMode?: DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable;
}
export interface DataAwsElasticacheUserAuthenticationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}
  */
  readonly passwordCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}
  */
  readonly type?: string;
}

export function dataAwsElasticacheUserAuthenticationModeToTerraform(struct?: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_count: cdktf.numberToTerraform(struct!.passwordCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataAwsElasticacheUserAuthenticationModeToHclTerraform(struct?: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_count: {
      value: cdktf.numberToHclTerraform(struct!.passwordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsElasticacheUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCount = this._passwordCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordCount = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordCount = value.passwordCount;
      this._type = value.type;
    }
  }

  // password_count - computed: false, optional: true, required: false
  private _passwordCount?: number; 
  public get passwordCount() {
    return this.getNumberAttribute('password_count');
  }
  public set passwordCount(value: number) {
    this._passwordCount = value;
  }
  public resetPasswordCount() {
    this._passwordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCountInput() {
    return this._passwordCount;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataAwsElasticacheUserAuthenticationModeList extends cdktf.ComplexList {
  public internalValue? : DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsElasticacheUserAuthenticationModeOutputReference {
    return new DataAwsElasticacheUserAuthenticationModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user aws_elasticache_user}
*/
export class DataAwsElasticacheUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsElasticacheUser to import
  * @param importFromId The id of the existing DataAwsElasticacheUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsElasticacheUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/elasticache_user aws_elasticache_user} Data Source
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
        providerVersion: '6.13.0',
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
    this._accessString = config.accessString;
    this._engine = config.engine;
    this._id = config.id;
    this._noPasswordRequired = config.noPasswordRequired;
    this._passwords = config.passwords;
    this._region = config.region;
    this._userId = config.userId;
    this._userName = config.userName;
    this._authenticationMode.internalValue = config.authenticationMode;
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

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode = new DataAwsElasticacheUserAuthenticationModeList(this, "authentication_mode", false);
  public get authenticationMode() {
    return this._authenticationMode;
  }
  public putAuthenticationMode(value: DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable) {
    this._authenticationMode.internalValue = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode.internalValue;
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
      region: cdktf.stringToTerraform(this._region),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      authentication_mode: cdktf.listMapper(dataAwsElasticacheUserAuthenticationModeToTerraform, true)(this._authenticationMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_string: {
        value: cdktf.stringToHclTerraform(this._accessString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
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
      no_password_required: {
        value: cdktf.booleanToHclTerraform(this._noPasswordRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passwords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_mode: {
        value: cdktf.listMapperHcl(dataAwsElasticacheUserAuthenticationModeToHclTerraform, true)(this._authenticationMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsElasticacheUserAuthenticationModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
