# `dmsS3Endpoint` Submodule <a name="`dmsS3Endpoint` Submodule" id="@cdktf/provider-aws.dmsS3Endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsS3Endpoint <a name="DmsS3Endpoint" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsS3Endpoint(Construct Scope, string Id, DmsS3EndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig">DmsS3EndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig">DmsS3EndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName">ResetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter">ResetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects">ResetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates">ResetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly">ResetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval">ResetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize">ResetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath">ResetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter">ResetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue">ResetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue">ResetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter">ResetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize">ResetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter">ResetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled">ResetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence">ResetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone">ResetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit">ResetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics">ResetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition">ResetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows">ResetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad">ResetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond">ResetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion">ResetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions">ResetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180">ResetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength">ResetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName">ResetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue">ResetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp">ResetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsS3EndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---

##### `ResetAddColumnName` <a name="ResetAddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName"></a>

```csharp
private void ResetAddColumnName()
```

##### `ResetAddTrailingPaddingCharacter` <a name="ResetAddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter"></a>

```csharp
private void ResetAddTrailingPaddingCharacter()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetCannedAclForObjects` <a name="ResetCannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects"></a>

```csharp
private void ResetCannedAclForObjects()
```

##### `ResetCdcInsertsAndUpdates` <a name="ResetCdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates"></a>

```csharp
private void ResetCdcInsertsAndUpdates()
```

##### `ResetCdcInsertsOnly` <a name="ResetCdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly"></a>

```csharp
private void ResetCdcInsertsOnly()
```

##### `ResetCdcMaxBatchInterval` <a name="ResetCdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval"></a>

```csharp
private void ResetCdcMaxBatchInterval()
```

##### `ResetCdcMinFileSize` <a name="ResetCdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize"></a>

```csharp
private void ResetCdcMinFileSize()
```

##### `ResetCdcPath` <a name="ResetCdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath"></a>

```csharp
private void ResetCdcPath()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetCsvDelimiter` <a name="ResetCsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter"></a>

```csharp
private void ResetCsvDelimiter()
```

##### `ResetCsvNoSupValue` <a name="ResetCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue"></a>

```csharp
private void ResetCsvNoSupValue()
```

##### `ResetCsvNullValue` <a name="ResetCsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue"></a>

```csharp
private void ResetCsvNullValue()
```

##### `ResetCsvRowDelimiter` <a name="ResetCsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter"></a>

```csharp
private void ResetCsvRowDelimiter()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetDataPageSize` <a name="ResetDataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize"></a>

```csharp
private void ResetDataPageSize()
```

##### `ResetDatePartitionDelimiter` <a name="ResetDatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter"></a>

```csharp
private void ResetDatePartitionDelimiter()
```

##### `ResetDatePartitionEnabled` <a name="ResetDatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled"></a>

```csharp
private void ResetDatePartitionEnabled()
```

##### `ResetDatePartitionSequence` <a name="ResetDatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence"></a>

```csharp
private void ResetDatePartitionSequence()
```

##### `ResetDatePartitionTimezone` <a name="ResetDatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone"></a>

```csharp
private void ResetDatePartitionTimezone()
```

##### `ResetDictPageSizeLimit` <a name="ResetDictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit"></a>

```csharp
private void ResetDictPageSizeLimit()
```

##### `ResetEnableStatistics` <a name="ResetEnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics"></a>

```csharp
private void ResetEnableStatistics()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType"></a>

```csharp
private void ResetEncodingType()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetExternalTableDefinition` <a name="ResetExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition"></a>

```csharp
private void ResetExternalTableDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreHeaderRows` <a name="ResetIgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows"></a>

```csharp
private void ResetIgnoreHeaderRows()
```

##### `ResetIncludeOpForFullLoad` <a name="ResetIncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad"></a>

```csharp
private void ResetIncludeOpForFullLoad()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParquetTimestampInMillisecond` <a name="ResetParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond"></a>

```csharp
private void ResetParquetTimestampInMillisecond()
```

##### `ResetParquetVersion` <a name="ResetParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion"></a>

```csharp
private void ResetParquetVersion()
```

##### `ResetPreserveTransactions` <a name="ResetPreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions"></a>

```csharp
private void ResetPreserveTransactions()
```

##### `ResetRfc4180` <a name="ResetRfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180"></a>

```csharp
private void ResetRfc4180()
```

##### `ResetRowGroupLength` <a name="ResetRowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength"></a>

```csharp
private void ResetRowGroupLength()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampColumnName` <a name="ResetTimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName"></a>

```csharp
private void ResetTimestampColumnName()
```

##### `ResetUseCsvNoSupValue` <a name="ResetUseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue"></a>

```csharp
private void ResetUseCsvNoSupValue()
```

##### `ResetUseTaskStartTimeForFullLoadTimestamp` <a name="ResetUseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```csharp
private void ResetUseTaskStartTimeForFullLoadTimestamp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsS3Endpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsS3Endpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsS3Endpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName">EngineDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput">AddColumnNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput">AddTrailingPaddingCharacterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput">CannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput">CdcInsertsAndUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput">CdcInsertsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput">CdcMaxBatchIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput">CdcMinFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput">CdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput">CsvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput">CsvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput">CsvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput">CsvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput">DataPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput">DatePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput">DatePartitionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput">DatePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput">DatePartitionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput">DictPageSizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput">EnableStatisticsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput">ExternalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput">IgnoreHeaderRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput">IncludeOpForFullLoadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput">ParquetTimestampInMillisecondInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput">ParquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput">PreserveTransactionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input">Rfc4180Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput">RowGroupLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput">TimestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput">UseCsvNoSupValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput">UseTaskStartTimeForFullLoadTimestampInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName">AddColumnName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath">CdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics">EnableStatistics</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions">PreserveTransactions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180">Rfc4180</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `EngineDisplayName`<sup>Required</sup> <a name="EngineDisplayName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName"></a>

```csharp
public string EngineDisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts"></a>

```csharp
public DmsS3EndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a>

---

##### `AddColumnNameInput`<sup>Optional</sup> <a name="AddColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput"></a>

```csharp
public object AddColumnNameInput { get; }
```

- *Type:* object

---

##### `AddTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="AddTrailingPaddingCharacterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput"></a>

```csharp
public object AddTrailingPaddingCharacterInput { get; }
```

- *Type:* object

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CannedAclForObjectsInput`<sup>Optional</sup> <a name="CannedAclForObjectsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput"></a>

```csharp
public string CannedAclForObjectsInput { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="CdcInsertsAndUpdatesInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput"></a>

```csharp
public object CdcInsertsAndUpdatesInput { get; }
```

- *Type:* object

---

##### `CdcInsertsOnlyInput`<sup>Optional</sup> <a name="CdcInsertsOnlyInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput"></a>

```csharp
public object CdcInsertsOnlyInput { get; }
```

- *Type:* object

---

##### `CdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="CdcMaxBatchIntervalInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput"></a>

```csharp
public double CdcMaxBatchIntervalInput { get; }
```

- *Type:* double

---

##### `CdcMinFileSizeInput`<sup>Optional</sup> <a name="CdcMinFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput"></a>

```csharp
public double CdcMinFileSizeInput { get; }
```

- *Type:* double

---

##### `CdcPathInput`<sup>Optional</sup> <a name="CdcPathInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput"></a>

```csharp
public string CdcPathInput { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `CsvDelimiterInput`<sup>Optional</sup> <a name="CsvDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput"></a>

```csharp
public string CsvDelimiterInput { get; }
```

- *Type:* string

---

##### `CsvNoSupValueInput`<sup>Optional</sup> <a name="CsvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput"></a>

```csharp
public string CsvNoSupValueInput { get; }
```

- *Type:* string

---

##### `CsvNullValueInput`<sup>Optional</sup> <a name="CsvNullValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput"></a>

```csharp
public string CsvNullValueInput { get; }
```

- *Type:* string

---

##### `CsvRowDelimiterInput`<sup>Optional</sup> <a name="CsvRowDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput"></a>

```csharp
public string CsvRowDelimiterInput { get; }
```

- *Type:* string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `DataPageSizeInput`<sup>Optional</sup> <a name="DataPageSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput"></a>

```csharp
public double DataPageSizeInput { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiterInput`<sup>Optional</sup> <a name="DatePartitionDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput"></a>

```csharp
public string DatePartitionDelimiterInput { get; }
```

- *Type:* string

---

##### `DatePartitionEnabledInput`<sup>Optional</sup> <a name="DatePartitionEnabledInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput"></a>

```csharp
public object DatePartitionEnabledInput { get; }
```

- *Type:* object

---

##### `DatePartitionSequenceInput`<sup>Optional</sup> <a name="DatePartitionSequenceInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput"></a>

```csharp
public string DatePartitionSequenceInput { get; }
```

- *Type:* string

---

##### `DatePartitionTimezoneInput`<sup>Optional</sup> <a name="DatePartitionTimezoneInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput"></a>

```csharp
public string DatePartitionTimezoneInput { get; }
```

- *Type:* string

---

##### `DictPageSizeLimitInput`<sup>Optional</sup> <a name="DictPageSizeLimitInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput"></a>

```csharp
public double DictPageSizeLimitInput { get; }
```

- *Type:* double

---

##### `EnableStatisticsInput`<sup>Optional</sup> <a name="EnableStatisticsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput"></a>

```csharp
public object EnableStatisticsInput { get; }
```

- *Type:* object

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput"></a>

```csharp
public string EncodingTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `ExternalTableDefinitionInput`<sup>Optional</sup> <a name="ExternalTableDefinitionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput"></a>

```csharp
public string ExternalTableDefinitionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreHeaderRowsInput`<sup>Optional</sup> <a name="IgnoreHeaderRowsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput"></a>

```csharp
public double IgnoreHeaderRowsInput { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoadInput`<sup>Optional</sup> <a name="IncludeOpForFullLoadInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput"></a>

```csharp
public object IncludeOpForFullLoadInput { get; }
```

- *Type:* object

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="ParquetTimestampInMillisecondInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput"></a>

```csharp
public object ParquetTimestampInMillisecondInput { get; }
```

- *Type:* object

---

##### `ParquetVersionInput`<sup>Optional</sup> <a name="ParquetVersionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput"></a>

```csharp
public string ParquetVersionInput { get; }
```

- *Type:* string

---

##### `PreserveTransactionsInput`<sup>Optional</sup> <a name="PreserveTransactionsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput"></a>

```csharp
public object PreserveTransactionsInput { get; }
```

- *Type:* object

---

##### `Rfc4180Input`<sup>Optional</sup> <a name="Rfc4180Input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input"></a>

```csharp
public object Rfc4180Input { get; }
```

- *Type:* object

---

##### `RowGroupLengthInput`<sup>Optional</sup> <a name="RowGroupLengthInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput"></a>

```csharp
public double RowGroupLengthInput { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimestampColumnNameInput`<sup>Optional</sup> <a name="TimestampColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput"></a>

```csharp
public string TimestampColumnNameInput { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValueInput`<sup>Optional</sup> <a name="UseCsvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput"></a>

```csharp
public object UseCsvNoSupValueInput { get; }
```

- *Type:* object

---

##### `UseTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestampInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestampInput { get; }
```

- *Type:* object

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName"></a>

```csharp
public object AddColumnName { get; }
```

- *Type:* object

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter"></a>

```csharp
public object AddTrailingPaddingCharacter { get; }
```

- *Type:* object

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates"></a>

```csharp
public object CdcInsertsAndUpdates { get; }
```

- *Type:* object

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly"></a>

```csharp
public object CdcInsertsOnly { get; }
```

- *Type:* object

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; }
```

- *Type:* double

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; }
```

- *Type:* double

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath"></a>

```csharp
public string CdcPath { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; }
```

- *Type:* string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; }
```

- *Type:* string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; }
```

- *Type:* string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; }
```

- *Type:* string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled"></a>

```csharp
public object DatePartitionEnabled { get; }
```

- *Type:* object

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; }
```

- *Type:* string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone"></a>

```csharp
public string DatePartitionTimezone { get; }
```

- *Type:* string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; }
```

- *Type:* double

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics"></a>

```csharp
public object EnableStatistics { get; }
```

- *Type:* object

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad"></a>

```csharp
public object IncludeOpForFullLoad { get; }
```

- *Type:* object

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond"></a>

```csharp
public object ParquetTimestampInMillisecond { get; }
```

- *Type:* object

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; }
```

- *Type:* string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions"></a>

```csharp
public object PreserveTransactions { get; }
```

- *Type:* object

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180"></a>

```csharp
public object Rfc4180 { get; }
```

- *Type:* object

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue"></a>

```csharp
public object UseCsvNoSupValue { get; }
```

- *Type:* object

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestamp { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsS3EndpointConfig <a name="DmsS3EndpointConfig" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsS3EndpointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BucketName,
    string EndpointId,
    string EndpointType,
    string ServiceAccessRoleArn,
    object AddColumnName = null,
    object AddTrailingPaddingCharacter = null,
    string BucketFolder = null,
    string CannedAclForObjects = null,
    object CdcInsertsAndUpdates = null,
    object CdcInsertsOnly = null,
    double CdcMaxBatchInterval = null,
    double CdcMinFileSize = null,
    string CdcPath = null,
    string CertificateArn = null,
    string CompressionType = null,
    string CsvDelimiter = null,
    string CsvNoSupValue = null,
    string CsvNullValue = null,
    string CsvRowDelimiter = null,
    string DataFormat = null,
    double DataPageSize = null,
    string DatePartitionDelimiter = null,
    object DatePartitionEnabled = null,
    string DatePartitionSequence = null,
    string DatePartitionTimezone = null,
    double DictPageSizeLimit = null,
    object EnableStatistics = null,
    string EncodingType = null,
    string EncryptionMode = null,
    string ExpectedBucketOwner = null,
    string ExternalTableDefinition = null,
    string Id = null,
    double IgnoreHeaderRows = null,
    object IncludeOpForFullLoad = null,
    string KmsKeyArn = null,
    double MaxFileSize = null,
    object ParquetTimestampInMillisecond = null,
    string ParquetVersion = null,
    object PreserveTransactions = null,
    object Rfc4180 = null,
    double RowGroupLength = null,
    string ServerSideEncryptionKmsKeyId = null,
    string SslMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DmsS3EndpointTimeouts Timeouts = null,
    string TimestampColumnName = null,
    object UseCsvNoSupValue = null,
    object UseTaskStartTimeForFullLoadTimestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName">AddColumnName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath">CdcPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat">DataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics">EnableStatistics</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType">EncodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions">PreserveTransactions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180">Rfc4180</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `AddColumnName`<sup>Optional</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName"></a>

```csharp
public object AddColumnName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `AddTrailingPaddingCharacter`<sup>Optional</sup> <a name="AddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter"></a>

```csharp
public object AddTrailingPaddingCharacter { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `CannedAclForObjects`<sup>Optional</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `CdcInsertsAndUpdates`<sup>Optional</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates"></a>

```csharp
public object CdcInsertsAndUpdates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `CdcInsertsOnly`<sup>Optional</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly"></a>

```csharp
public object CdcInsertsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `CdcMaxBatchInterval`<sup>Optional</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `CdcMinFileSize`<sup>Optional</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `CdcPath`<sup>Optional</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath"></a>

```csharp
public string CdcPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `CsvDelimiter`<sup>Optional</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `CsvNoSupValue`<sup>Optional</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `CsvNullValue`<sup>Optional</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `CsvRowDelimiter`<sup>Optional</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `DataPageSize`<sup>Optional</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `DatePartitionDelimiter`<sup>Optional</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `DatePartitionEnabled`<sup>Optional</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled"></a>

```csharp
public object DatePartitionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `DatePartitionSequence`<sup>Optional</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `DatePartitionTimezone`<sup>Optional</sup> <a name="DatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone"></a>

```csharp
public string DatePartitionTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `DictPageSizeLimit`<sup>Optional</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `EnableStatistics`<sup>Optional</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics"></a>

```csharp
public object EnableStatistics { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType"></a>

```csharp
public string EncodingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `ExternalTableDefinition`<sup>Optional</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreHeaderRows`<sup>Optional</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `IncludeOpForFullLoad`<sup>Optional</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad"></a>

```csharp
public object IncludeOpForFullLoad { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `ParquetTimestampInMillisecond`<sup>Optional</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond"></a>

```csharp
public object ParquetTimestampInMillisecond { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `ParquetVersion`<sup>Optional</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `PreserveTransactions`<sup>Optional</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions"></a>

```csharp
public object PreserveTransactions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `Rfc4180`<sup>Optional</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180"></a>

```csharp
public object Rfc4180 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `RowGroupLength`<sup>Optional</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts"></a>

```csharp
public DmsS3EndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `TimestampColumnName`<sup>Optional</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `UseCsvNoSupValue`<sup>Optional</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue"></a>

```csharp
public object UseCsvNoSupValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestamp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsS3EndpointTimeouts <a name="DmsS3EndpointTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsS3EndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsS3EndpointTimeoutsOutputReference <a name="DmsS3EndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsS3EndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



