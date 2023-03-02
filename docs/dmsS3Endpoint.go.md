# `dmsS3Endpoint` Submodule <a name="`dmsS3Endpoint` Submodule" id="@cdktf/provider-aws.dmsS3Endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsS3Endpoint <a name="DmsS3Endpoint" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint aws_dms_s3_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

dmss3endpoint.NewDmsS3Endpoint(scope Construct, id *string, config DmsS3EndpointConfig) DmsS3Endpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig">DmsS3EndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts"></a>

```go
func PutTimeouts(value DmsS3EndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

---

##### `ResetAddColumnName` <a name="ResetAddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddColumnName"></a>

```go
func ResetAddColumnName()
```

##### `ResetAddTrailingPaddingCharacter` <a name="ResetAddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetAddTrailingPaddingCharacter"></a>

```go
func ResetAddTrailingPaddingCharacter()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetBucketFolder"></a>

```go
func ResetBucketFolder()
```

##### `ResetCannedAclForObjects` <a name="ResetCannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCannedAclForObjects"></a>

```go
func ResetCannedAclForObjects()
```

##### `ResetCdcInsertsAndUpdates` <a name="ResetCdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsAndUpdates"></a>

```go
func ResetCdcInsertsAndUpdates()
```

##### `ResetCdcInsertsOnly` <a name="ResetCdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcInsertsOnly"></a>

```go
func ResetCdcInsertsOnly()
```

##### `ResetCdcMaxBatchInterval` <a name="ResetCdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMaxBatchInterval"></a>

```go
func ResetCdcMaxBatchInterval()
```

##### `ResetCdcMinFileSize` <a name="ResetCdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcMinFileSize"></a>

```go
func ResetCdcMinFileSize()
```

##### `ResetCdcPath` <a name="ResetCdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCdcPath"></a>

```go
func ResetCdcPath()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetCsvDelimiter` <a name="ResetCsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvDelimiter"></a>

```go
func ResetCsvDelimiter()
```

##### `ResetCsvNoSupValue` <a name="ResetCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNoSupValue"></a>

```go
func ResetCsvNoSupValue()
```

##### `ResetCsvNullValue` <a name="ResetCsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvNullValue"></a>

```go
func ResetCsvNullValue()
```

##### `ResetCsvRowDelimiter` <a name="ResetCsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetCsvRowDelimiter"></a>

```go
func ResetCsvRowDelimiter()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetDataPageSize` <a name="ResetDataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDataPageSize"></a>

```go
func ResetDataPageSize()
```

##### `ResetDatePartitionDelimiter` <a name="ResetDatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionDelimiter"></a>

```go
func ResetDatePartitionDelimiter()
```

##### `ResetDatePartitionEnabled` <a name="ResetDatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionEnabled"></a>

```go
func ResetDatePartitionEnabled()
```

##### `ResetDatePartitionSequence` <a name="ResetDatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionSequence"></a>

```go
func ResetDatePartitionSequence()
```

##### `ResetDatePartitionTimezone` <a name="ResetDatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDatePartitionTimezone"></a>

```go
func ResetDatePartitionTimezone()
```

##### `ResetDictPageSizeLimit` <a name="ResetDictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetDictPageSizeLimit"></a>

```go
func ResetDictPageSizeLimit()
```

##### `ResetEnableStatistics` <a name="ResetEnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEnableStatistics"></a>

```go
func ResetEnableStatistics()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncodingType"></a>

```go
func ResetEncodingType()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetEncryptionMode"></a>

```go
func ResetEncryptionMode()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetExternalTableDefinition` <a name="ResetExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetExternalTableDefinition"></a>

```go
func ResetExternalTableDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreHeaderRows` <a name="ResetIgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIgnoreHeaderRows"></a>

```go
func ResetIgnoreHeaderRows()
```

##### `ResetIncludeOpForFullLoad` <a name="ResetIncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetIncludeOpForFullLoad"></a>

```go
func ResetIncludeOpForFullLoad()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetParquetTimestampInMillisecond` <a name="ResetParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetTimestampInMillisecond"></a>

```go
func ResetParquetTimestampInMillisecond()
```

##### `ResetParquetVersion` <a name="ResetParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetParquetVersion"></a>

```go
func ResetParquetVersion()
```

##### `ResetPreserveTransactions` <a name="ResetPreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetPreserveTransactions"></a>

```go
func ResetPreserveTransactions()
```

##### `ResetRfc4180` <a name="ResetRfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRfc4180"></a>

```go
func ResetRfc4180()
```

##### `ResetRowGroupLength` <a name="ResetRowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetRowGroupLength"></a>

```go
func ResetRowGroupLength()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetServerSideEncryptionKmsKeyId"></a>

```go
func ResetServerSideEncryptionKmsKeyId()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetSslMode"></a>

```go
func ResetSslMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimestampColumnName` <a name="ResetTimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetTimestampColumnName"></a>

```go
func ResetTimestampColumnName()
```

##### `ResetUseCsvNoSupValue` <a name="ResetUseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseCsvNoSupValue"></a>

```go
func ResetUseCsvNoSupValue()
```

##### `ResetUseTaskStartTimeForFullLoadTimestamp` <a name="ResetUseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```go
func ResetUseTaskStartTimeForFullLoadTimestamp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

dmss3endpoint.DmsS3Endpoint_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

dmss3endpoint.DmsS3Endpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

dmss3endpoint.DmsS3Endpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName">EngineDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput">AddColumnNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput">AddTrailingPaddingCharacterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput">BucketFolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput">CannedAclForObjectsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput">CdcInsertsAndUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput">CdcInsertsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput">CdcMaxBatchIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput">CdcMinFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput">CdcPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput">CsvDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput">CsvNoSupValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput">CsvNullValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput">CsvRowDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput">DataPageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput">DatePartitionDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput">DatePartitionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput">DatePartitionSequenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput">DatePartitionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput">DictPageSizeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput">EnableStatisticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput">ExternalTableDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput">IgnoreHeaderRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput">IncludeOpForFullLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput">ParquetTimestampInMillisecondInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput">ParquetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput">PreserveTransactionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input">Rfc4180Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput">RowGroupLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput">TimestampColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput">UseCsvNoSupValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput">UseTaskStartTimeForFullLoadTimestampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName">AddColumnName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath">CdcPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics">EnableStatistics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions">PreserveTransactions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180">Rfc4180</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `EngineDisplayName`<sup>Required</sup> <a name="EngineDisplayName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.engineDisplayName"></a>

```go
func EngineDisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeouts"></a>

```go
func Timeouts() DmsS3EndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference">DmsS3EndpointTimeoutsOutputReference</a>

---

##### `AddColumnNameInput`<sup>Optional</sup> <a name="AddColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnNameInput"></a>

```go
func AddColumnNameInput() interface{}
```

- *Type:* interface{}

---

##### `AddTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="AddTrailingPaddingCharacterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacterInput"></a>

```go
func AddTrailingPaddingCharacterInput() interface{}
```

- *Type:* interface{}

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolderInput"></a>

```go
func BucketFolderInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CannedAclForObjectsInput`<sup>Optional</sup> <a name="CannedAclForObjectsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjectsInput"></a>

```go
func CannedAclForObjectsInput() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="CdcInsertsAndUpdatesInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdatesInput"></a>

```go
func CdcInsertsAndUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `CdcInsertsOnlyInput`<sup>Optional</sup> <a name="CdcInsertsOnlyInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnlyInput"></a>

```go
func CdcInsertsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="CdcMaxBatchIntervalInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchIntervalInput"></a>

```go
func CdcMaxBatchIntervalInput() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSizeInput`<sup>Optional</sup> <a name="CdcMinFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSizeInput"></a>

```go
func CdcMinFileSizeInput() *f64
```

- *Type:* *f64

---

##### `CdcPathInput`<sup>Optional</sup> <a name="CdcPathInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPathInput"></a>

```go
func CdcPathInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `CsvDelimiterInput`<sup>Optional</sup> <a name="CsvDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiterInput"></a>

```go
func CsvDelimiterInput() *string
```

- *Type:* *string

---

##### `CsvNoSupValueInput`<sup>Optional</sup> <a name="CsvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValueInput"></a>

```go
func CsvNoSupValueInput() *string
```

- *Type:* *string

---

##### `CsvNullValueInput`<sup>Optional</sup> <a name="CsvNullValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValueInput"></a>

```go
func CsvNullValueInput() *string
```

- *Type:* *string

---

##### `CsvRowDelimiterInput`<sup>Optional</sup> <a name="CsvRowDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiterInput"></a>

```go
func CsvRowDelimiterInput() *string
```

- *Type:* *string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `DataPageSizeInput`<sup>Optional</sup> <a name="DataPageSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSizeInput"></a>

```go
func DataPageSizeInput() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiterInput`<sup>Optional</sup> <a name="DatePartitionDelimiterInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiterInput"></a>

```go
func DatePartitionDelimiterInput() *string
```

- *Type:* *string

---

##### `DatePartitionEnabledInput`<sup>Optional</sup> <a name="DatePartitionEnabledInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabledInput"></a>

```go
func DatePartitionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DatePartitionSequenceInput`<sup>Optional</sup> <a name="DatePartitionSequenceInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequenceInput"></a>

```go
func DatePartitionSequenceInput() *string
```

- *Type:* *string

---

##### `DatePartitionTimezoneInput`<sup>Optional</sup> <a name="DatePartitionTimezoneInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezoneInput"></a>

```go
func DatePartitionTimezoneInput() *string
```

- *Type:* *string

---

##### `DictPageSizeLimitInput`<sup>Optional</sup> <a name="DictPageSizeLimitInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimitInput"></a>

```go
func DictPageSizeLimitInput() *f64
```

- *Type:* *f64

---

##### `EnableStatisticsInput`<sup>Optional</sup> <a name="EnableStatisticsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatisticsInput"></a>

```go
func EnableStatisticsInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingTypeInput"></a>

```go
func EncodingTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionModeInput"></a>

```go
func EncryptionModeInput() *string
```

- *Type:* *string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `ExternalTableDefinitionInput`<sup>Optional</sup> <a name="ExternalTableDefinitionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinitionInput"></a>

```go
func ExternalTableDefinitionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreHeaderRowsInput`<sup>Optional</sup> <a name="IgnoreHeaderRowsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRowsInput"></a>

```go
func IgnoreHeaderRowsInput() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoadInput`<sup>Optional</sup> <a name="IncludeOpForFullLoadInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoadInput"></a>

```go
func IncludeOpForFullLoadInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="ParquetTimestampInMillisecondInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecondInput"></a>

```go
func ParquetTimestampInMillisecondInput() interface{}
```

- *Type:* interface{}

---

##### `ParquetVersionInput`<sup>Optional</sup> <a name="ParquetVersionInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersionInput"></a>

```go
func ParquetVersionInput() *string
```

- *Type:* *string

---

##### `PreserveTransactionsInput`<sup>Optional</sup> <a name="PreserveTransactionsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactionsInput"></a>

```go
func PreserveTransactionsInput() interface{}
```

- *Type:* interface{}

---

##### `Rfc4180Input`<sup>Optional</sup> <a name="Rfc4180Input" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180Input"></a>

```go
func Rfc4180Input() interface{}
```

- *Type:* interface{}

---

##### `RowGroupLengthInput`<sup>Optional</sup> <a name="RowGroupLengthInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLengthInput"></a>

```go
func RowGroupLengthInput() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyIdInput"></a>

```go
func ServerSideEncryptionKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampColumnNameInput`<sup>Optional</sup> <a name="TimestampColumnNameInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnNameInput"></a>

```go
func TimestampColumnNameInput() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValueInput`<sup>Optional</sup> <a name="UseCsvNoSupValueInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValueInput"></a>

```go
func UseCsvNoSupValueInput() interface{}
```

- *Type:* interface{}

---

##### `UseTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestampInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```go
func UseTaskStartTimeForFullLoadTimestampInput() interface{}
```

- *Type:* interface{}

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addColumnName"></a>

```go
func AddColumnName() interface{}
```

- *Type:* interface{}

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.addTrailingPaddingCharacter"></a>

```go
func AddTrailingPaddingCharacter() interface{}
```

- *Type:* interface{}

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cannedAclForObjects"></a>

```go
func CannedAclForObjects() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsAndUpdates"></a>

```go
func CdcInsertsAndUpdates() interface{}
```

- *Type:* interface{}

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcInsertsOnly"></a>

```go
func CdcInsertsOnly() interface{}
```

- *Type:* interface{}

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMaxBatchInterval"></a>

```go
func CdcMaxBatchInterval() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcMinFileSize"></a>

```go
func CdcMinFileSize() *f64
```

- *Type:* *f64

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.cdcPath"></a>

```go
func CdcPath() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvDelimiter"></a>

```go
func CsvDelimiter() *string
```

- *Type:* *string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNoSupValue"></a>

```go
func CsvNoSupValue() *string
```

- *Type:* *string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvNullValue"></a>

```go
func CsvNullValue() *string
```

- *Type:* *string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.csvRowDelimiter"></a>

```go
func CsvRowDelimiter() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dataPageSize"></a>

```go
func DataPageSize() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionDelimiter"></a>

```go
func DatePartitionDelimiter() *string
```

- *Type:* *string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionEnabled"></a>

```go
func DatePartitionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionSequence"></a>

```go
func DatePartitionSequence() *string
```

- *Type:* *string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.datePartitionTimezone"></a>

```go
func DatePartitionTimezone() *string
```

- *Type:* *string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.dictPageSizeLimit"></a>

```go
func DictPageSizeLimit() *f64
```

- *Type:* *f64

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.enableStatistics"></a>

```go
func EnableStatistics() interface{}
```

- *Type:* interface{}

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.externalTableDefinition"></a>

```go
func ExternalTableDefinition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.ignoreHeaderRows"></a>

```go
func IgnoreHeaderRows() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.includeOpForFullLoad"></a>

```go
func IncludeOpForFullLoad() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetTimestampInMillisecond"></a>

```go
func ParquetTimestampInMillisecond() interface{}
```

- *Type:* interface{}

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.parquetVersion"></a>

```go
func ParquetVersion() *string
```

- *Type:* *string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.preserveTransactions"></a>

```go
func PreserveTransactions() interface{}
```

- *Type:* interface{}

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rfc4180"></a>

```go
func Rfc4180() interface{}
```

- *Type:* interface{}

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.rowGroupLength"></a>

```go
func RowGroupLength() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.timestampColumnName"></a>

```go
func TimestampColumnName() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useCsvNoSupValue"></a>

```go
func UseCsvNoSupValue() interface{}
```

- *Type:* interface{}

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
func UseTaskStartTimeForFullLoadTimestamp() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3Endpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsS3EndpointConfig <a name="DmsS3EndpointConfig" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

&dmss3endpoint.DmsS3EndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	EndpointId: *string,
	EndpointType: *string,
	ServiceAccessRoleArn: *string,
	AddColumnName: interface{},
	AddTrailingPaddingCharacter: interface{},
	BucketFolder: *string,
	CannedAclForObjects: *string,
	CdcInsertsAndUpdates: interface{},
	CdcInsertsOnly: interface{},
	CdcMaxBatchInterval: *f64,
	CdcMinFileSize: *f64,
	CdcPath: *string,
	CertificateArn: *string,
	CompressionType: *string,
	CsvDelimiter: *string,
	CsvNoSupValue: *string,
	CsvNullValue: *string,
	CsvRowDelimiter: *string,
	DataFormat: *string,
	DataPageSize: *f64,
	DatePartitionDelimiter: *string,
	DatePartitionEnabled: interface{},
	DatePartitionSequence: *string,
	DatePartitionTimezone: *string,
	DictPageSizeLimit: *f64,
	EnableStatistics: interface{},
	EncodingType: *string,
	EncryptionMode: *string,
	ExpectedBucketOwner: *string,
	ExternalTableDefinition: *string,
	Id: *string,
	IgnoreHeaderRows: *f64,
	IncludeOpForFullLoad: interface{},
	KmsKeyArn: *string,
	MaxFileSize: *f64,
	ParquetTimestampInMillisecond: interface{},
	ParquetVersion: *string,
	PreserveTransactions: interface{},
	Rfc4180: interface{},
	RowGroupLength: *f64,
	ServerSideEncryptionKmsKeyId: *string,
	SslMode: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dmsS3Endpoint.DmsS3EndpointTimeouts,
	TimestampColumnName: *string,
	UseCsvNoSupValue: interface{},
	UseTaskStartTimeForFullLoadTimestamp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName">AddColumnName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath">CdcPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics">EnableStatistics</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType">EncodingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions">PreserveTransactions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180">Rfc4180</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}.

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}.

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}.

---

##### `AddColumnName`<sup>Optional</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addColumnName"></a>

```go
AddColumnName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}.

---

##### `AddTrailingPaddingCharacter`<sup>Optional</sup> <a name="AddTrailingPaddingCharacter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.addTrailingPaddingCharacter"></a>

```go
AddTrailingPaddingCharacter interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}.

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.bucketFolder"></a>

```go
BucketFolder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}.

---

##### `CannedAclForObjects`<sup>Optional</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cannedAclForObjects"></a>

```go
CannedAclForObjects *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}.

---

##### `CdcInsertsAndUpdates`<sup>Optional</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsAndUpdates"></a>

```go
CdcInsertsAndUpdates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}.

---

##### `CdcInsertsOnly`<sup>Optional</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcInsertsOnly"></a>

```go
CdcInsertsOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}.

---

##### `CdcMaxBatchInterval`<sup>Optional</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMaxBatchInterval"></a>

```go
CdcMaxBatchInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}.

---

##### `CdcMinFileSize`<sup>Optional</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcMinFileSize"></a>

```go
CdcMinFileSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}.

---

##### `CdcPath`<sup>Optional</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.cdcPath"></a>

```go
CdcPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}.

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}.

---

##### `CsvDelimiter`<sup>Optional</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvDelimiter"></a>

```go
CsvDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}.

---

##### `CsvNoSupValue`<sup>Optional</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNoSupValue"></a>

```go
CsvNoSupValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}.

---

##### `CsvNullValue`<sup>Optional</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvNullValue"></a>

```go
CsvNullValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}.

---

##### `CsvRowDelimiter`<sup>Optional</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.csvRowDelimiter"></a>

```go
CsvRowDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}.

---

##### `DataPageSize`<sup>Optional</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dataPageSize"></a>

```go
DataPageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}.

---

##### `DatePartitionDelimiter`<sup>Optional</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionDelimiter"></a>

```go
DatePartitionDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}.

---

##### `DatePartitionEnabled`<sup>Optional</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionEnabled"></a>

```go
DatePartitionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}.

---

##### `DatePartitionSequence`<sup>Optional</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionSequence"></a>

```go
DatePartitionSequence *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}.

---

##### `DatePartitionTimezone`<sup>Optional</sup> <a name="DatePartitionTimezone" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.datePartitionTimezone"></a>

```go
DatePartitionTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}.

---

##### `DictPageSizeLimit`<sup>Optional</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.dictPageSizeLimit"></a>

```go
DictPageSizeLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}.

---

##### `EnableStatistics`<sup>Optional</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.enableStatistics"></a>

```go
EnableStatistics interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encodingType"></a>

```go
EncodingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}.

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.encryptionMode"></a>

```go
EncryptionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}.

---

##### `ExternalTableDefinition`<sup>Optional</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.externalTableDefinition"></a>

```go
ExternalTableDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#id DmsS3Endpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreHeaderRows`<sup>Optional</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.ignoreHeaderRows"></a>

```go
IgnoreHeaderRows *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}.

---

##### `IncludeOpForFullLoad`<sup>Optional</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.includeOpForFullLoad"></a>

```go
IncludeOpForFullLoad interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}.

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}.

---

##### `ParquetTimestampInMillisecond`<sup>Optional</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetTimestampInMillisecond"></a>

```go
ParquetTimestampInMillisecond interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}.

---

##### `ParquetVersion`<sup>Optional</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.parquetVersion"></a>

```go
ParquetVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}.

---

##### `PreserveTransactions`<sup>Optional</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.preserveTransactions"></a>

```go
PreserveTransactions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}.

---

##### `Rfc4180`<sup>Optional</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rfc4180"></a>

```go
Rfc4180 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}.

---

##### `RowGroupLength`<sup>Optional</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.rowGroupLength"></a>

```go
RowGroupLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}.

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.serverSideEncryptionKmsKeyId"></a>

```go
ServerSideEncryptionKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags DmsS3Endpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timeouts"></a>

```go
Timeouts DmsS3EndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts">DmsS3EndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}

---

##### `TimestampColumnName`<sup>Optional</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.timestampColumnName"></a>

```go
TimestampColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}.

---

##### `UseCsvNoSupValue`<sup>Optional</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useCsvNoSupValue"></a>

```go
UseCsvNoSupValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}.

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointConfig.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
UseTaskStartTimeForFullLoadTimestamp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsS3EndpointTimeouts <a name="DmsS3EndpointTimeouts" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

&dmss3endpoint.DmsS3EndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#create DmsS3Endpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_s3_endpoint#delete DmsS3Endpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsS3EndpointTimeoutsOutputReference <a name="DmsS3EndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmss3endpoint"

dmss3endpoint.NewDmsS3EndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsS3EndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsS3Endpoint.DmsS3EndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



