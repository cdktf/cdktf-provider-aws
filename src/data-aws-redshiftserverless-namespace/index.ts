/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRedshiftserverlessNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace#id DataAwsRedshiftserverlessNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace#namespace_name DataAwsRedshiftserverlessNamespace#namespace_name}
  */
  readonly namespaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace aws_redshiftserverless_namespace}
*/
export class DataAwsRedshiftserverlessNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshiftserverless_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRedshiftserverlessNamespace to import
  * @param importFromId The id of the existing DataAwsRedshiftserverlessNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRedshiftserverlessNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshiftserverless_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/redshiftserverless_namespace aws_redshiftserverless_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRedshiftserverlessNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRedshiftserverlessNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshiftserverless_namespace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.47.0',
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
    this._id = config.id;
    this._namespaceName = config.namespaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // default_iam_role_arn - computed: true, optional: false, required: false
  public get defaultIamRoleArn() {
    return this.getStringAttribute('default_iam_role_arn');
  }

  // iam_roles - computed: true, optional: false, required: false
  public get iamRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_roles'));
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // log_exports - computed: true, optional: false, required: false
  public get logExports() {
    return cdktf.Fn.tolist(this.getListAttribute('log_exports'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
