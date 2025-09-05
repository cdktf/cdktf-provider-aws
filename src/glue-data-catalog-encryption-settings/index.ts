/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#id GlueDataCatalogEncryptionSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#region GlueDataCatalogEncryptionSettings#region}
  */
  readonly region?: string;
  /**
  * data_catalog_encryption_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
  */
  readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
  */
  readonly awsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
  */
  readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kms_key_id: cdktf.stringToTerraform(struct!.awsKmsKeyId),
    return_connection_password_encrypted: cdktf.booleanToTerraform(struct!.returnConnectionPasswordEncrypted),
  }
}


export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_connection_password_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.returnConnectionPasswordEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
    }
    if (this._returnConnectionPasswordEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnConnectionPasswordEncrypted = this._returnConnectionPasswordEncrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsKmsKeyId = undefined;
      this._returnConnectionPasswordEncrypted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsKmsKeyId = value.awsKmsKeyId;
      this._returnConnectionPasswordEncrypted = value.returnConnectionPasswordEncrypted;
    }
  }

  // aws_kms_key_id - computed: false, optional: true, required: false
  private _awsKmsKeyId?: string; 
  public get awsKmsKeyId() {
    return this.getStringAttribute('aws_kms_key_id');
  }
  public set awsKmsKeyId(value: string) {
    this._awsKmsKeyId = value;
  }
  public resetAwsKmsKeyId() {
    this._awsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyIdInput() {
    return this._awsKmsKeyId;
  }

  // return_connection_password_encrypted - computed: false, optional: false, required: true
  private _returnConnectionPasswordEncrypted?: boolean | cdktf.IResolvable; 
  public get returnConnectionPasswordEncrypted() {
    return this.getBooleanAttribute('return_connection_password_encrypted');
  }
  public set returnConnectionPasswordEncrypted(value: boolean | cdktf.IResolvable) {
    this._returnConnectionPasswordEncrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnConnectionPasswordEncryptedInput() {
    return this._returnConnectionPasswordEncrypted;
  }
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
  */
  readonly catalogEncryptionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_service_role GlueDataCatalogEncryptionSettings#catalog_encryption_service_role}
  */
  readonly catalogEncryptionServiceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
  */
  readonly sseAwsKmsKeyId?: string;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_encryption_mode: cdktf.stringToTerraform(struct!.catalogEncryptionMode),
    catalog_encryption_service_role: cdktf.stringToTerraform(struct!.catalogEncryptionServiceRole),
    sse_aws_kms_key_id: cdktf.stringToTerraform(struct!.sseAwsKmsKeyId),
  }
}


export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.catalogEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_encryption_service_role: {
      value: cdktf.stringToHclTerraform(struct!.catalogEncryptionServiceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_aws_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.sseAwsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogEncryptionMode = this._catalogEncryptionMode;
    }
    if (this._catalogEncryptionServiceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogEncryptionServiceRole = this._catalogEncryptionServiceRole;
    }
    if (this._sseAwsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAwsKmsKeyId = this._sseAwsKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogEncryptionMode = undefined;
      this._catalogEncryptionServiceRole = undefined;
      this._sseAwsKmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogEncryptionMode = value.catalogEncryptionMode;
      this._catalogEncryptionServiceRole = value.catalogEncryptionServiceRole;
      this._sseAwsKmsKeyId = value.sseAwsKmsKeyId;
    }
  }

  // catalog_encryption_mode - computed: false, optional: false, required: true
  private _catalogEncryptionMode?: string; 
  public get catalogEncryptionMode() {
    return this.getStringAttribute('catalog_encryption_mode');
  }
  public set catalogEncryptionMode(value: string) {
    this._catalogEncryptionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogEncryptionModeInput() {
    return this._catalogEncryptionMode;
  }

  // catalog_encryption_service_role - computed: false, optional: true, required: false
  private _catalogEncryptionServiceRole?: string; 
  public get catalogEncryptionServiceRole() {
    return this.getStringAttribute('catalog_encryption_service_role');
  }
  public set catalogEncryptionServiceRole(value: string) {
    this._catalogEncryptionServiceRole = value;
  }
  public resetCatalogEncryptionServiceRole() {
    this._catalogEncryptionServiceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogEncryptionServiceRoleInput() {
    return this._catalogEncryptionServiceRole;
  }

  // sse_aws_kms_key_id - computed: false, optional: true, required: false
  private _sseAwsKmsKeyId?: string; 
  public get sseAwsKmsKeyId() {
    return this.getStringAttribute('sse_aws_kms_key_id');
  }
  public set sseAwsKmsKeyId(value: string) {
    this._sseAwsKmsKeyId = value;
  }
  public resetSseAwsKmsKeyId() {
    this._sseAwsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAwsKmsKeyIdInput() {
    return this._sseAwsKmsKeyId;
  }
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  /**
  * connection_password_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
  */
  readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  /**
  * encryption_at_rest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
  */
  readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}

export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct!.connectionPasswordEncryption),
    encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct!.encryptionAtRest),
  }
}


export function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_password_encryption: {
      value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform(struct!.connectionPasswordEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList",
    },
    encryption_at_rest: {
      value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform(struct!.encryptionAtRest),
      isBlock: true,
      type: "list",
      storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPasswordEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPasswordEncryption = this._connectionPasswordEncryption?.internalValue;
    }
    if (this._encryptionAtRest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionPasswordEncryption.internalValue = undefined;
      this._encryptionAtRest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionPasswordEncryption.internalValue = value.connectionPasswordEncryption;
      this._encryptionAtRest.internalValue = value.encryptionAtRest;
    }
  }

  // connection_password_encryption - computed: false, optional: false, required: true
  private _connectionPasswordEncryption = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this, "connection_password_encryption");
  public get connectionPasswordEncryption() {
    return this._connectionPasswordEncryption;
  }
  public putConnectionPasswordEncryption(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption) {
    this._connectionPasswordEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPasswordEncryptionInput() {
    return this._connectionPasswordEncryption.internalValue;
  }

  // encryption_at_rest - computed: false, optional: false, required: true
  private _encryptionAtRest = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this, "encryption_at_rest");
  public get encryptionAtRest() {
    return this._encryptionAtRest;
  }
  public putEncryptionAtRest(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest) {
    this._encryptionAtRest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestInput() {
    return this._encryptionAtRest.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings}
*/
export class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_data_catalog_encryption_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueDataCatalogEncryptionSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueDataCatalogEncryptionSettings to import
  * @param importFromId The id of the existing GlueDataCatalogEncryptionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueDataCatalogEncryptionSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_data_catalog_encryption_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueDataCatalogEncryptionSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._catalogId = config.catalogId;
    this._id = config.id;
    this._region = config.region;
    this._dataCatalogEncryptionSettings.internalValue = config.dataCatalogEncryptionSettings;
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
    return this._catalogId;
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

  // data_catalog_encryption_settings - computed: false, optional: false, required: true
  private _dataCatalogEncryptionSettings = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this, "data_catalog_encryption_settings");
  public get dataCatalogEncryptionSettings() {
    return this._dataCatalogEncryptionSettings;
  }
  public putDataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings) {
    this._dataCatalogEncryptionSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogEncryptionSettingsInput() {
    return this._dataCatalogEncryptionSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
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
      data_catalog_encryption_settings: {
        value: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform(this._dataCatalogEncryptionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
