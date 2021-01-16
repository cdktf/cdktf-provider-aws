// https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueDataCatalogEncryptionSettingsConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  /** data_catalog_encryption_settings block */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  readonly awsKmsKeyId?: string;
  readonly returnConnectionPasswordEncrypted: boolean;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  readonly catalogEncryptionMode: string;
  readonly sseAwsKmsKeyId?: string;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  /** connection_password_encryption block */
  readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption[];
  /** encryption_at_rest block */
  readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest[];
}

// Resource

export class GlueDataCatalogEncryptionSettings extends TerraformResource {

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
    return this._catalogId ?? this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // data_catalog_encryption_settings - computed: false, optional: false, required: true
  private _dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
  public get dataCatalogEncryptionSettings() {
    return this._dataCatalogEncryptionSettings;
  }
  public set dataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[]) {
    this._dataCatalogEncryptionSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      data_catalog_encryption_settings: this._dataCatalogEncryptionSettings,
    };
  }
}
