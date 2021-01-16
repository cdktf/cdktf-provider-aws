// https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
  readonly catalogId?: string;
  /** data_catalog_encryption_settings block */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  readonly awsKmsKeyId?: string;
  readonly returnConnectionPasswordEncrypted: boolean;
}

function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    return_connection_password_encrypted: cdktf.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
  }
}

export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  readonly catalogEncryptionMode: string;
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
  /** connection_password_encryption block */
  readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption[];
  /** encryption_at_rest block */
  readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest[];
}

function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_password_encryption: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform)(struct!.connectionPasswordEncryption),
    encryption_at_rest: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform)(struct!.encryptionAtRest),
  }
}


// Resource

export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
