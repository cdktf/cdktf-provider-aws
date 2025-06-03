/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIamServerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#id DataAwsIamServerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#latest DataAwsIamServerCertificate#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#name DataAwsIamServerCertificate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#name_prefix DataAwsIamServerCertificate#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#path_prefix DataAwsIamServerCertificate#path_prefix}
  */
  readonly pathPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate aws_iam_server_certificate}
*/
export class DataAwsIamServerCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_server_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsIamServerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsIamServerCertificate to import
  * @param importFromId The id of the existing DataAwsIamServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsIamServerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_server_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/iam_server_certificate aws_iam_server_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamServerCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamServerCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_server_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._latest = config.latest;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._pathPrefix = config.pathPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_body - computed: true, optional: false, required: false
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // upload_date - computed: true, optional: false, required: false
  public get uploadDate() {
    return this.getStringAttribute('upload_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      latest: cdktf.booleanToTerraform(this._latest),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
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
      latest: {
        value: cdktf.booleanToHclTerraform(this._latest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
