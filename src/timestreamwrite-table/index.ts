// https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#database_name TimestreamwriteTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#id TimestreamwriteTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#table_name TimestreamwriteTable#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#tags TimestreamwriteTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#tags_all TimestreamwriteTable#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * magnetic_store_write_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#magnetic_store_write_properties TimestreamwriteTable#magnetic_store_write_properties}
  */
  readonly magneticStoreWriteProperties?: TimestreamwriteTableMagneticStoreWriteProperties;
  /**
  * retention_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#retention_properties TimestreamwriteTable#retention_properties}
  */
  readonly retentionProperties?: TimestreamwriteTableRetentionProperties;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#schema TimestreamwriteTable#schema}
  */
  readonly schema?: TimestreamwriteTableSchema;
}
export interface TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#bucket_name TimestreamwriteTable#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#encryption_option TimestreamwriteTable#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#kms_key_id TimestreamwriteTable#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#object_key_prefix TimestreamwriteTable#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}

export function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    object_key_prefix: cdktf.stringToTerraform(struct!.objectKeyPrefix),
  }
}

export class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._kmsKeyId = undefined;
      this._objectKeyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyId = value.kmsKeyId;
      this._objectKeyPrefix = value.objectKeyPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // encryption_option - computed: false, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // object_key_prefix - computed: false, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}
export interface TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#s3_configuration TimestreamwriteTable#s3_configuration}
  */
  readonly s3Configuration?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}

export function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_configuration: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}

export class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface TimestreamwriteTableMagneticStoreWriteProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#enable_magnetic_store_writes TimestreamwriteTable#enable_magnetic_store_writes}
  */
  readonly enableMagneticStoreWrites?: boolean | cdktf.IResolvable;
  /**
  * magnetic_store_rejected_data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#magnetic_store_rejected_data_location TimestreamwriteTable#magnetic_store_rejected_data_location}
  */
  readonly magneticStoreRejectedDataLocation?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
}

export function timestreamwriteTableMagneticStoreWritePropertiesToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesOutputReference | TimestreamwriteTableMagneticStoreWriteProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_magnetic_store_writes: cdktf.booleanToTerraform(struct!.enableMagneticStoreWrites),
    magnetic_store_rejected_data_location: timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct!.magneticStoreRejectedDataLocation),
  }
}

export class TimestreamwriteTableMagneticStoreWritePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableMagneticStoreWriteProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMagneticStoreWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMagneticStoreWrites = this._enableMagneticStoreWrites;
    }
    if (this._magneticStoreRejectedDataLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRejectedDataLocation = this._magneticStoreRejectedDataLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableMagneticStoreWriteProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMagneticStoreWrites = undefined;
      this._magneticStoreRejectedDataLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMagneticStoreWrites = value.enableMagneticStoreWrites;
      this._magneticStoreRejectedDataLocation.internalValue = value.magneticStoreRejectedDataLocation;
    }
  }

  // enable_magnetic_store_writes - computed: false, optional: true, required: false
  private _enableMagneticStoreWrites?: boolean | cdktf.IResolvable; 
  public get enableMagneticStoreWrites() {
    return this.getBooleanAttribute('enable_magnetic_store_writes');
  }
  public set enableMagneticStoreWrites(value: boolean | cdktf.IResolvable) {
    this._enableMagneticStoreWrites = value;
  }
  public resetEnableMagneticStoreWrites() {
    this._enableMagneticStoreWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMagneticStoreWritesInput() {
    return this._enableMagneticStoreWrites;
  }

  // magnetic_store_rejected_data_location - computed: false, optional: true, required: false
  private _magneticStoreRejectedDataLocation = new TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(this, "magnetic_store_rejected_data_location");
  public get magneticStoreRejectedDataLocation() {
    return this._magneticStoreRejectedDataLocation;
  }
  public putMagneticStoreRejectedDataLocation(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation) {
    this._magneticStoreRejectedDataLocation.internalValue = value;
  }
  public resetMagneticStoreRejectedDataLocation() {
    this._magneticStoreRejectedDataLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRejectedDataLocationInput() {
    return this._magneticStoreRejectedDataLocation.internalValue;
  }
}
export interface TimestreamwriteTableRetentionProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#magnetic_store_retention_period_in_days TimestreamwriteTable#magnetic_store_retention_period_in_days}
  */
  readonly magneticStoreRetentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#memory_store_retention_period_in_hours TimestreamwriteTable#memory_store_retention_period_in_hours}
  */
  readonly memoryStoreRetentionPeriodInHours: number;
}

export function timestreamwriteTableRetentionPropertiesToTerraform(struct?: TimestreamwriteTableRetentionPropertiesOutputReference | TimestreamwriteTableRetentionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}

export class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableRetentionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._magneticStoreRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
    }
    if (this._memoryStoreRetentionPeriodInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableRetentionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._magneticStoreRetentionPeriodInDays = undefined;
      this._memoryStoreRetentionPeriodInHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
      this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
    }
  }

  // magnetic_store_retention_period_in_days - computed: false, optional: false, required: true
  private _magneticStoreRetentionPeriodInDays?: number; 
  public get magneticStoreRetentionPeriodInDays() {
    return this.getNumberAttribute('magnetic_store_retention_period_in_days');
  }
  public set magneticStoreRetentionPeriodInDays(value: number) {
    this._magneticStoreRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRetentionPeriodInDaysInput() {
    return this._magneticStoreRetentionPeriodInDays;
  }

  // memory_store_retention_period_in_hours - computed: false, optional: false, required: true
  private _memoryStoreRetentionPeriodInHours?: number; 
  public get memoryStoreRetentionPeriodInHours() {
    return this.getNumberAttribute('memory_store_retention_period_in_hours');
  }
  public set memoryStoreRetentionPeriodInHours(value: number) {
    this._memoryStoreRetentionPeriodInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStoreRetentionPeriodInHoursInput() {
    return this._memoryStoreRetentionPeriodInHours;
  }
}
export interface TimestreamwriteTableSchemaCompositePartitionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#enforcement_in_record TimestreamwriteTable#enforcement_in_record}
  */
  readonly enforcementInRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#name TimestreamwriteTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#type TimestreamwriteTable#type}
  */
  readonly type: string;
}

export function timestreamwriteTableSchemaCompositePartitionKeyToTerraform(struct?: TimestreamwriteTableSchemaCompositePartitionKeyOutputReference | TimestreamwriteTableSchemaCompositePartitionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_in_record: cdktf.stringToTerraform(struct!.enforcementInRecord),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class TimestreamwriteTableSchemaCompositePartitionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableSchemaCompositePartitionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementInRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementInRecord = this._enforcementInRecord;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableSchemaCompositePartitionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementInRecord = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementInRecord = value.enforcementInRecord;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // enforcement_in_record - computed: false, optional: true, required: false
  private _enforcementInRecord?: string; 
  public get enforcementInRecord() {
    return this.getStringAttribute('enforcement_in_record');
  }
  public set enforcementInRecord(value: string) {
    this._enforcementInRecord = value;
  }
  public resetEnforcementInRecord() {
    this._enforcementInRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInRecordInput() {
    return this._enforcementInRecord;
  }

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TimestreamwriteTableSchema {
  /**
  * composite_partition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table#composite_partition_key TimestreamwriteTable#composite_partition_key}
  */
  readonly compositePartitionKey?: TimestreamwriteTableSchemaCompositePartitionKey;
}

export function timestreamwriteTableSchemaToTerraform(struct?: TimestreamwriteTableSchemaOutputReference | TimestreamwriteTableSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite_partition_key: timestreamwriteTableSchemaCompositePartitionKeyToTerraform(struct!.compositePartitionKey),
  }
}

export class TimestreamwriteTableSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimestreamwriteTableSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositePartitionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositePartitionKey = this._compositePartitionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamwriteTableSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compositePartitionKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compositePartitionKey.internalValue = value.compositePartitionKey;
    }
  }

  // composite_partition_key - computed: false, optional: true, required: false
  private _compositePartitionKey = new TimestreamwriteTableSchemaCompositePartitionKeyOutputReference(this, "composite_partition_key");
  public get compositePartitionKey() {
    return this._compositePartitionKey;
  }
  public putCompositePartitionKey(value: TimestreamwriteTableSchemaCompositePartitionKey) {
    this._compositePartitionKey.internalValue = value;
  }
  public resetCompositePartitionKey() {
    this._compositePartitionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositePartitionKeyInput() {
    return this._compositePartitionKey.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table aws_timestreamwrite_table}
*/
export class TimestreamwriteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_timestreamwrite_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/timestreamwrite_table aws_timestreamwrite_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimestreamwriteTableConfig
  */
  public constructor(scope: Construct, id: string, config: TimestreamwriteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreamwrite_table',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.13.1',
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
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._tableName = config.tableName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._magneticStoreWriteProperties.internalValue = config.magneticStoreWriteProperties;
    this._retentionProperties.internalValue = config.retentionProperties;
    this._schema.internalValue = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
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

  // magnetic_store_write_properties - computed: false, optional: true, required: false
  private _magneticStoreWriteProperties = new TimestreamwriteTableMagneticStoreWritePropertiesOutputReference(this, "magnetic_store_write_properties");
  public get magneticStoreWriteProperties() {
    return this._magneticStoreWriteProperties;
  }
  public putMagneticStoreWriteProperties(value: TimestreamwriteTableMagneticStoreWriteProperties) {
    this._magneticStoreWriteProperties.internalValue = value;
  }
  public resetMagneticStoreWriteProperties() {
    this._magneticStoreWriteProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreWritePropertiesInput() {
    return this._magneticStoreWriteProperties.internalValue;
  }

  // retention_properties - computed: false, optional: true, required: false
  private _retentionProperties = new TimestreamwriteTableRetentionPropertiesOutputReference(this, "retention_properties");
  public get retentionProperties() {
    return this._retentionProperties;
  }
  public putRetentionProperties(value: TimestreamwriteTableRetentionProperties) {
    this._retentionProperties.internalValue = value;
  }
  public resetRetentionProperties() {
    this._retentionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPropertiesInput() {
    return this._retentionProperties.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TimestreamwriteTableSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TimestreamwriteTableSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      table_name: cdktf.stringToTerraform(this._tableName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      magnetic_store_write_properties: timestreamwriteTableMagneticStoreWritePropertiesToTerraform(this._magneticStoreWriteProperties.internalValue),
      retention_properties: timestreamwriteTableRetentionPropertiesToTerraform(this._retentionProperties.internalValue),
      schema: timestreamwriteTableSchemaToTerraform(this._schema.internalValue),
    };
  }
}
