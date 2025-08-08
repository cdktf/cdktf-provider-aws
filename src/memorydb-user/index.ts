/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemorydbUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#access_string MemorydbUser#access_string}
  */
  readonly accessString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#id MemorydbUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#region MemorydbUser#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#tags MemorydbUser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#tags_all MemorydbUser#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#user_name MemorydbUser#user_name}
  */
  readonly userName: string;
  /**
  * authentication_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#authentication_mode MemorydbUser#authentication_mode}
  */
  readonly authenticationMode: MemorydbUserAuthenticationMode;
}
export interface MemorydbUserAuthenticationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#passwords MemorydbUser#passwords}
  */
  readonly passwords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#type MemorydbUser#type}
  */
  readonly type: string;
}

export function memorydbUserAuthenticationModeToTerraform(struct?: MemorydbUserAuthenticationModeOutputReference | MemorydbUserAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passwords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passwords),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function memorydbUserAuthenticationModeToHclTerraform(struct?: MemorydbUserAuthenticationModeOutputReference | MemorydbUserAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passwords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passwords),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class MemorydbUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemorydbUserAuthenticationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwords !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwords = this._passwords;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbUserAuthenticationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwords = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwords = value.passwords;
      this._type = value.type;
    }
  }

  // password_count - computed: true, optional: false, required: false
  public get passwordCount() {
    return this.getNumberAttribute('password_count');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user aws_memorydb_user}
*/
export class MemorydbUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_memorydb_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MemorydbUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MemorydbUser to import
  * @param importFromId The id of the existing MemorydbUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MemorydbUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_memorydb_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/memorydb_user aws_memorydb_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemorydbUserConfig
  */
  public constructor(scope: Construct, id: string, config: MemorydbUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_memorydb_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
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
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userName = config.userName;
    this._authenticationMode.internalValue = config.authenticationMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_string - computed: false, optional: false, required: true
  private _accessString?: string; 
  public get accessString() {
    return this.getStringAttribute('access_string');
  }
  public set accessString(value: string) {
    this._accessString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // minimum_engine_version - computed: true, optional: false, required: false
  public get minimumEngineVersion() {
    return this.getStringAttribute('minimum_engine_version');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // authentication_mode - computed: false, optional: false, required: true
  private _authenticationMode = new MemorydbUserAuthenticationModeOutputReference(this, "authentication_mode");
  public get authenticationMode() {
    return this._authenticationMode;
  }
  public putAuthenticationMode(value: MemorydbUserAuthenticationMode) {
    this._authenticationMode.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      authentication_mode: memorydbUserAuthenticationModeToTerraform(this._authenticationMode.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_mode: {
        value: memorydbUserAuthenticationModeToHclTerraform(this._authenticationMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MemorydbUserAuthenticationModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
