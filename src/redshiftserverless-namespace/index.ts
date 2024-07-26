/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftserverlessNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}
  */
  readonly adminPasswordSecretKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}
  */
  readonly adminUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}
  */
  readonly defaultIamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}
  */
  readonly iamRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}
  */
  readonly logExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}
  */
  readonly manageAdminPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace}
*/
export class RedshiftserverlessNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshiftserverless_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftserverlessNamespace to import
  * @param importFromId The id of the existing RedshiftserverlessNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftserverlessNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshiftserverless_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftserverlessNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftserverlessNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshiftserverless_namespace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.60.0',
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
    this._adminPasswordSecretKmsKeyId = config.adminPasswordSecretKmsKeyId;
    this._adminUserPassword = config.adminUserPassword;
    this._adminUsername = config.adminUsername;
    this._dbName = config.dbName;
    this._defaultIamRoleArn = config.defaultIamRoleArn;
    this._iamRoles = config.iamRoles;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._logExports = config.logExports;
    this._manageAdminPassword = config.manageAdminPassword;
    this._namespaceName = config.namespaceName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password_secret_arn - computed: true, optional: false, required: false
  public get adminPasswordSecretArn() {
    return this.getStringAttribute('admin_password_secret_arn');
  }

  // admin_password_secret_kms_key_id - computed: true, optional: true, required: false
  private _adminPasswordSecretKmsKeyId?: string; 
  public get adminPasswordSecretKmsKeyId() {
    return this.getStringAttribute('admin_password_secret_kms_key_id');
  }
  public set adminPasswordSecretKmsKeyId(value: string) {
    this._adminPasswordSecretKmsKeyId = value;
  }
  public resetAdminPasswordSecretKmsKeyId() {
    this._adminPasswordSecretKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretKmsKeyIdInput() {
    return this._adminPasswordSecretKmsKeyId;
  }

  // admin_user_password - computed: false, optional: true, required: false
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  public resetAdminUserPassword() {
    this._adminUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // default_iam_role_arn - computed: false, optional: true, required: false
  private _defaultIamRoleArn?: string; 
  public get defaultIamRoleArn() {
    return this.getStringAttribute('default_iam_role_arn');
  }
  public set defaultIamRoleArn(value: string) {
    this._defaultIamRoleArn = value;
  }
  public resetDefaultIamRoleArn() {
    this._defaultIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIamRoleArnInput() {
    return this._defaultIamRoleArn;
  }

  // iam_roles - computed: true, optional: true, required: false
  private _iamRoles?: string[]; 
  public get iamRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_roles'));
  }
  public set iamRoles(value: string[]) {
    this._iamRoles = value;
  }
  public resetIamRoles() {
    this._iamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRolesInput() {
    return this._iamRoles;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // log_exports - computed: false, optional: true, required: false
  private _logExports?: string[]; 
  public get logExports() {
    return cdktf.Fn.tolist(this.getListAttribute('log_exports'));
  }
  public set logExports(value: string[]) {
    this._logExports = value;
  }
  public resetLogExports() {
    this._logExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExportsInput() {
    return this._logExports;
  }

  // manage_admin_password - computed: false, optional: true, required: false
  private _manageAdminPassword?: boolean | cdktf.IResolvable; 
  public get manageAdminPassword() {
    return this.getBooleanAttribute('manage_admin_password');
  }
  public set manageAdminPassword(value: boolean | cdktf.IResolvable) {
    this._manageAdminPassword = value;
  }
  public resetManageAdminPassword() {
    this._manageAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageAdminPasswordInput() {
    return this._manageAdminPassword;
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password_secret_kms_key_id: cdktf.stringToTerraform(this._adminPasswordSecretKmsKeyId),
      admin_user_password: cdktf.stringToTerraform(this._adminUserPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      db_name: cdktf.stringToTerraform(this._dbName),
      default_iam_role_arn: cdktf.stringToTerraform(this._defaultIamRoleArn),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamRoles),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      log_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logExports),
      manage_admin_password: cdktf.booleanToTerraform(this._manageAdminPassword),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password_secret_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._adminPasswordSecretKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user_password: {
        value: cdktf.stringToHclTerraform(this._adminUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._defaultIamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_exports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logExports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manage_admin_password: {
        value: cdktf.booleanToHclTerraform(this._manageAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
