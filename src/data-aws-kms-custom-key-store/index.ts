// https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}
  */
  readonly customKeyStoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store aws_kms_custom_key_store}
*/
export class DataAwsKmsCustomKeyStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_custom_key_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store aws_kms_custom_key_store} Data Source
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
    this._customKeyStoreId = config.customKeyStoreId;
    this._customKeyStoreName = config.customKeyStoreName;
    this._id = config.id;
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
    };
  }
}
