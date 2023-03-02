# `dmsS3Endpoint` Submodule <a name="`dmsS3Endpoint` Submodule" id="@cdktf/provider-aws.dmsS3Endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsS3Endpoint <a name="DmsS3Endpoint" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

new dmsS3Endpoint.DmsS3Endpoint(scope: Construct, id: string, config: DmsS3EndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig">DmsS3EndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig">DmsS3EndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName">resetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter">resetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects">resetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates">resetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly">resetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval">resetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize">resetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath">resetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue">resetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue">resetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize">resetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter">resetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence">resetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone">resetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit">resetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics">resetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows">resetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad">resetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions">resetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180">resetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength">resetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName">resetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue">resetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp">resetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsS3EndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---

##### `resetAddColumnName` <a name="resetAddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName"></a>

```typescript
public resetAddColumnName(): void
```

##### `resetAddTrailingPaddingCharacter` <a name="resetAddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter"></a>

```typescript
public resetAddTrailingPaddingCharacter(): void
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetCannedAclForObjects` <a name="resetCannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects"></a>

```typescript
public resetCannedAclForObjects(): void
```

##### `resetCdcInsertsAndUpdates` <a name="resetCdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates"></a>

```typescript
public resetCdcInsertsAndUpdates(): void
```

##### `resetCdcInsertsOnly` <a name="resetCdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly"></a>

```typescript
public resetCdcInsertsOnly(): void
```

##### `resetCdcMaxBatchInterval` <a name="resetCdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval"></a>

```typescript
public resetCdcMaxBatchInterval(): void
```

##### `resetCdcMinFileSize` <a name="resetCdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize"></a>

```typescript
public resetCdcMinFileSize(): void
```

##### `resetCdcPath` <a name="resetCdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath"></a>

```typescript
public resetCdcPath(): void
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter"></a>

```typescript
public resetCsvDelimiter(): void
```

##### `resetCsvNoSupValue` <a name="resetCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue"></a>

```typescript
public resetCsvNoSupValue(): void
```

##### `resetCsvNullValue` <a name="resetCsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue"></a>

```typescript
public resetCsvNullValue(): void
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter"></a>

```typescript
public resetCsvRowDelimiter(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetDataPageSize` <a name="resetDataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize"></a>

```typescript
public resetDataPageSize(): void
```

##### `resetDatePartitionDelimiter` <a name="resetDatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter"></a>

```typescript
public resetDatePartitionDelimiter(): void
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled"></a>

```typescript
public resetDatePartitionEnabled(): void
```

##### `resetDatePartitionSequence` <a name="resetDatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence"></a>

```typescript
public resetDatePartitionSequence(): void
```

##### `resetDatePartitionTimezone` <a name="resetDatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone"></a>

```typescript
public resetDatePartitionTimezone(): void
```

##### `resetDictPageSizeLimit` <a name="resetDictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit"></a>

```typescript
public resetDictPageSizeLimit(): void
```

##### `resetEnableStatistics` <a name="resetEnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics"></a>

```typescript
public resetEnableStatistics(): void
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType"></a>

```typescript
public resetEncodingType(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition"></a>

```typescript
public resetExternalTableDefinition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreHeaderRows` <a name="resetIgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows"></a>

```typescript
public resetIgnoreHeaderRows(): void
```

##### `resetIncludeOpForFullLoad` <a name="resetIncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad"></a>

```typescript
public resetIncludeOpForFullLoad(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond"></a>

```typescript
public resetParquetTimestampInMillisecond(): void
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion"></a>

```typescript
public resetParquetVersion(): void
```

##### `resetPreserveTransactions` <a name="resetPreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions"></a>

```typescript
public resetPreserveTransactions(): void
```

##### `resetRfc4180` <a name="resetRfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180"></a>

```typescript
public resetRfc4180(): void
```

##### `resetRowGroupLength` <a name="resetRowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength"></a>

```typescript
public resetRowGroupLength(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimestampColumnName` <a name="resetTimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName"></a>

```typescript
public resetTimestampColumnName(): void
```

##### `resetUseCsvNoSupValue` <a name="resetUseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue"></a>

```typescript
public resetUseCsvNoSupValue(): void
```

##### `resetUseTaskStartTimeForFullLoadTimestamp` <a name="resetUseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public resetUseTaskStartTimeForFullLoadTimestamp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

dmsS3Endpoint.DmsS3Endpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

dmsS3Endpoint.DmsS3Endpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

dmsS3Endpoint.DmsS3Endpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName">engineDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput">addColumnNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput">addTrailingPaddingCharacterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput">cannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput">cdcInsertsAndUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput">cdcInsertsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput">cdcMaxBatchIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput">cdcMinFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput">cdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput">csvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput">csvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput">dataPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput">datePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput">datePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput">datePartitionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput">dictPageSizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput">enableStatisticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput">encodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput">ignoreHeaderRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput">includeOpForFullLoadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput">parquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput">preserveTransactionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input">rfc4180Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput">rowGroupLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput">timestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput">useCsvNoSupValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput">useTaskStartTimeForFullLoadTimestampInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath">cdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType">encodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `engineDisplayName`<sup>Required</sup> <a name="engineDisplayName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName"></a>

```typescript
public readonly engineDisplayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DmsS3EndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a>

---

##### `addColumnNameInput`<sup>Optional</sup> <a name="addColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput"></a>

```typescript
public readonly addColumnNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="addTrailingPaddingCharacterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput"></a>

```typescript
public readonly addTrailingPaddingCharacterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cannedAclForObjectsInput`<sup>Optional</sup> <a name="cannedAclForObjectsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput"></a>

```typescript
public readonly cannedAclForObjectsInput: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="cdcInsertsAndUpdatesInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput"></a>

```typescript
public readonly cdcInsertsAndUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcInsertsOnlyInput`<sup>Optional</sup> <a name="cdcInsertsOnlyInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput"></a>

```typescript
public readonly cdcInsertsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="cdcMaxBatchIntervalInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput"></a>

```typescript
public readonly cdcMaxBatchIntervalInput: number;
```

- *Type:* number

---

##### `cdcMinFileSizeInput`<sup>Optional</sup> <a name="cdcMinFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput"></a>

```typescript
public readonly cdcMinFileSizeInput: number;
```

- *Type:* number

---

##### `cdcPathInput`<sup>Optional</sup> <a name="cdcPathInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput"></a>

```typescript
public readonly cdcPathInput: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput"></a>

```typescript
public readonly csvDelimiterInput: string;
```

- *Type:* string

---

##### `csvNoSupValueInput`<sup>Optional</sup> <a name="csvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput"></a>

```typescript
public readonly csvNoSupValueInput: string;
```

- *Type:* string

---

##### `csvNullValueInput`<sup>Optional</sup> <a name="csvNullValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput"></a>

```typescript
public readonly csvNullValueInput: string;
```

- *Type:* string

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput"></a>

```typescript
public readonly csvRowDelimiterInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `dataPageSizeInput`<sup>Optional</sup> <a name="dataPageSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput"></a>

```typescript
public readonly dataPageSizeInput: number;
```

- *Type:* number

---

##### `datePartitionDelimiterInput`<sup>Optional</sup> <a name="datePartitionDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput"></a>

```typescript
public readonly datePartitionDelimiterInput: string;
```

- *Type:* string

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput"></a>

```typescript
public readonly datePartitionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datePartitionSequenceInput`<sup>Optional</sup> <a name="datePartitionSequenceInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput"></a>

```typescript
public readonly datePartitionSequenceInput: string;
```

- *Type:* string

---

##### `datePartitionTimezoneInput`<sup>Optional</sup> <a name="datePartitionTimezoneInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput"></a>

```typescript
public readonly datePartitionTimezoneInput: string;
```

- *Type:* string

---

##### `dictPageSizeLimitInput`<sup>Optional</sup> <a name="dictPageSizeLimitInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput"></a>

```typescript
public readonly dictPageSizeLimitInput: number;
```

- *Type:* number

---

##### `enableStatisticsInput`<sup>Optional</sup> <a name="enableStatisticsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput"></a>

```typescript
public readonly enableStatisticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput"></a>

```typescript
public readonly encodingTypeInput: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput"></a>

```typescript
public readonly externalTableDefinitionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreHeaderRowsInput`<sup>Optional</sup> <a name="ignoreHeaderRowsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput"></a>

```typescript
public readonly ignoreHeaderRowsInput: number;
```

- *Type:* number

---

##### `includeOpForFullLoadInput`<sup>Optional</sup> <a name="includeOpForFullLoadInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput"></a>

```typescript
public readonly includeOpForFullLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput"></a>

```typescript
public readonly parquetTimestampInMillisecondInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput"></a>

```typescript
public readonly parquetVersionInput: string;
```

- *Type:* string

---

##### `preserveTransactionsInput`<sup>Optional</sup> <a name="preserveTransactionsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput"></a>

```typescript
public readonly preserveTransactionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rfc4180Input`<sup>Optional</sup> <a name="rfc4180Input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input"></a>

```typescript
public readonly rfc4180Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rowGroupLengthInput`<sup>Optional</sup> <a name="rowGroupLengthInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput"></a>

```typescript
public readonly rowGroupLengthInput: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DmsS3EndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a> | cdktf.IResolvable

---

##### `timestampColumnNameInput`<sup>Optional</sup> <a name="timestampColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput"></a>

```typescript
public readonly timestampColumnNameInput: string;
```

- *Type:* string

---

##### `useCsvNoSupValueInput`<sup>Optional</sup> <a name="useCsvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput"></a>

```typescript
public readonly useCsvNoSupValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestampInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestampInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addTrailingPaddingCharacter`<sup>Required</sup> <a name="addTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter"></a>

```typescript
public readonly addTrailingPaddingCharacter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

---

##### `datePartitionTimezone`<sup>Required</sup> <a name="datePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone"></a>

```typescript
public readonly datePartitionTimezone: string;
```

- *Type:* string

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsS3EndpointConfig <a name="DmsS3EndpointConfig" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.Initializer"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

const dmsS3EndpointConfig: dmsS3Endpoint.DmsS3EndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath">cdcPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType">compressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType">encodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `addTrailingPaddingCharacter`<sup>Optional</sup> <a name="addTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter"></a>

```typescript
public readonly addTrailingPaddingCharacter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `datePartitionTimezone`<sup>Optional</sup> <a name="datePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone"></a>

```typescript
public readonly datePartitionTimezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DmsS3EndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsS3EndpointTimeouts <a name="DmsS3EndpointTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.Initializer"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

const dmsS3EndpointTimeouts: dmsS3Endpoint.DmsS3EndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsS3EndpointTimeoutsOutputReference <a name="DmsS3EndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsS3Endpoint } from '@cdktf/provider-aws'

new dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsS3EndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a> | cdktf.IResolvable

---



