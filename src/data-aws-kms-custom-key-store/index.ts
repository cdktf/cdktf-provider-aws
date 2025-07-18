/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}
  */
  readonly customKeyStoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store#region DataAwsKmsCustomKeyStore#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store aws_kms_custom_key_store}
*/
export class DataAwsKmsCustomKeyStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_custom_key_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsKmsCustomKeyStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsKmsCustomKeyStore to import
  * @param importFromId The id of the existing DataAwsKmsCustomKeyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsKmsCustomKeyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kms_custom_key_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kms_custom_key_store aws_kms_custom_key_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsCustomKeyStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsKmsCustomKeyStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_custom_key_store',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._customKeyStoreId = config.customKeyStoreId;
    this._customKeyStoreName = config.customKeyStoreName;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_hsm_cluster_id - computed: true, optional: false, required: false
  public get cloudHsmClusterId() {
    return this.getStringAttribute('cloud_hsm_cluster_id');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_key_store_id - computed: true, optional: true, required: false
  private _customKeyStoreId?: string; 
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }
  public set customKeyStoreId(value: string) {
    this._customKeyStoreId = value;
  }
  public resetCustomKeyStoreId() {
    this._customKeyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreIdInput() {
    return this._customKeyStoreId;
  }

  // custom_key_store_name - computed: true, optional: true, required: false
  private _customKeyStoreName?: string; 
  public get customKeyStoreName() {
    return this.getStringAttribute('custom_key_store_name');
  }
  public set customKeyStoreName(value: string) {
    this._customKeyStoreName = value;
  }
  public resetCustomKeyStoreName() {
    this._customKeyStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreNameInput() {
    return this._customKeyStoreName;
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

  // trust_anchor_certificate - computed: true, optional: false, required: false
  public get trustAnchorCertificate() {
    return this.getStringAttribute('trust_anchor_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_key_store_id: cdktf.stringToTerraform(this._customKeyStoreId),
      custom_key_store_name: cdktf.stringToTerraform(this._customKeyStoreName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_key_store_id: {
        value: cdktf.stringToHclTerraform(this._customKeyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_key_store_name: {
        value: cdktf.stringToHclTerraform(this._customKeyStoreName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
