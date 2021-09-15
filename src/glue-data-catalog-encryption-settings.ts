// https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * data_catalog_encryption_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
  */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
  */
  readonly awsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
  */
  readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
}

function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    return_connection_password_encrypted: cdktf.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
  }
}

export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
  */
  readonly catalogEncryptionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
  */
  readonly sseAwsKmsKeyId?: string;
}

function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_encryption_mode: cdktf.stringToTerraform(struct!.catalogEncryptionMode),
    sse_aws_kms_key_id: cdktf.stringToTerraform(struct!.sseAwsKmsKeyId),
  }
}

export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  /**
  * connection_password_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
  */
  readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption[];
  /**
  * encryption_at_rest block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
  */
  readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest[];
}

function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_password_encryption: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform)(struct!.connectionPasswordEncryption),
    encryption_at_rest: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform)(struct!.encryptionAtRest),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_data_catalog_encryption_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueDataCatalogEncryptionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig) {
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
    this._dataCatalogEncryptionSettings = config.dataCatalogEncryptionSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // data_catalog_encryption_settings - computed: false, optional: false, required: true
  private _dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
  public get dataCatalogEncryptionSettings() {
    return this.interpolationForAttribute('data_catalog_encryption_settings') as any;
  }
  public set dataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[]) {
    this._dataCatalogEncryptionSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogEncryptionSettingsInput() {
    return this._dataCatalogEncryptionSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      data_catalog_encryption_settings: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform)(this._dataCatalogEncryptionSettings),
    };
  }
}
