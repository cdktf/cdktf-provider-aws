// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface DataAwsGlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings#catalog_id DataAwsGlueDataCatalogEncryptionSettings#catalog_id}
  */
  readonly catalogId: string;
}
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdktf.ComplexComputedList {

  // aws_kms_key_id - computed: true, optional: false, required: false
  public get awsKmsKeyId() {
    return this.getStringAttribute('aws_kms_key_id');
  }

  // return_connection_password_encrypted - computed: true, optional: false, required: false
  public get returnConnectionPasswordEncrypted() {
    return this.getBooleanAttribute('return_connection_password_encrypted');
  }
}
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdktf.ComplexComputedList {

  // catalog_encryption_mode - computed: true, optional: false, required: false
  public get catalogEncryptionMode() {
    return this.getStringAttribute('catalog_encryption_mode');
  }

  // sse_aws_kms_key_id - computed: true, optional: false, required: false
  public get sseAwsKmsKeyId() {
    return this.getStringAttribute('sse_aws_kms_key_id');
  }
}
export class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdktf.ComplexComputedList {

  // connection_password_encryption - computed: true, optional: false, required: false
  public get connectionPasswordEncryption() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connection_password_encryption');
  }

  // encryption_at_rest - computed: true, optional: false, required: false
  public get encryptionAtRest() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('encryption_at_rest');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings}
*/
export class DataAwsGlueDataCatalogEncryptionSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_data_catalog_encryption_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlueDataCatalogEncryptionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlueDataCatalogEncryptionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // data_catalog_encryption_settings - computed: true, optional: false, required: false
  public dataCatalogEncryptionSettings(index: string) {
    return new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'data_catalog_encryption_settings', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
    };
  }
}
