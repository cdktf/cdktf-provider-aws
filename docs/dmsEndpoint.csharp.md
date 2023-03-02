# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktf/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpoint(Construct Scope, string Id, DmsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">PutElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">PutKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">PutKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">PutMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">PutRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings">PutS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">ResetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">ResetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">ResetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">ResetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">ResetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">ResetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings">ResetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">ResetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">ResetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutElasticsearchSettings` <a name="PutElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```csharp
private void PutElasticsearchSettings(DmsEndpointElasticsearchSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `PutKafkaSettings` <a name="PutKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```csharp
private void PutKafkaSettings(DmsEndpointKafkaSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `PutKinesisSettings` <a name="PutKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```csharp
private void PutKinesisSettings(DmsEndpointKinesisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `PutMongodbSettings` <a name="PutMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```csharp
private void PutMongodbSettings(DmsEndpointMongodbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `PutRedisSettings` <a name="PutRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```csharp
private void PutRedisSettings(DmsEndpointRedisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```csharp
private void PutRedshiftSettings(DmsEndpointRedshiftSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `PutS3Settings` <a name="PutS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```csharp
private void PutS3Settings(DmsEndpointS3Settings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetElasticsearchSettings` <a name="ResetElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```csharp
private void ResetElasticsearchSettings()
```

##### `ResetExtraConnectionAttributes` <a name="ResetExtraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```csharp
private void ResetExtraConnectionAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKafkaSettings` <a name="ResetKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```csharp
private void ResetKafkaSettings()
```

##### `ResetKinesisSettings` <a name="ResetKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```csharp
private void ResetKinesisSettings()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetMongodbSettings` <a name="ResetMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```csharp
private void ResetMongodbSettings()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRedisSettings` <a name="ResetRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```csharp
private void ResetRedisSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```csharp
private void ResetRedshiftSettings()
```

##### `ResetS3Settings` <a name="ResetS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```csharp
private void ResetS3Settings()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerArn` <a name="ResetSecretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```csharp
private void ResetSecretsManagerArn()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetServiceAccessRole` <a name="ResetServiceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```csharp
private void ResetServiceAccessRole()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">ElasticsearchSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">EngineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">ExtraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">KafkaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">KinesisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">MongodbSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">RedisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">S3SettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">SecretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">ServiceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettingsOutputReference ElasticsearchSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettingsOutputReference KafkaSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettingsOutputReference KinesisSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `MongodbSettings`<sup>Required</sup> <a name="MongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```csharp
public DmsEndpointMongodbSettingsOutputReference MongodbSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettingsOutputReference RedisSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettingsOutputReference RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```csharp
public DmsEndpointS3SettingsOutputReference S3Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```csharp
public DmsEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ElasticsearchSettingsInput`<sup>Optional</sup> <a name="ElasticsearchSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```csharp
public DmsEndpointElasticsearchSettings ElasticsearchSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```csharp
public string EngineNameInput { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributesInput`<sup>Optional</sup> <a name="ExtraConnectionAttributesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```csharp
public string ExtraConnectionAttributesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KafkaSettingsInput`<sup>Optional</sup> <a name="KafkaSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```csharp
public DmsEndpointKafkaSettings KafkaSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `KinesisSettingsInput`<sup>Optional</sup> <a name="KinesisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```csharp
public DmsEndpointKinesisSettings KinesisSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MongodbSettingsInput`<sup>Optional</sup> <a name="MongodbSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```csharp
public DmsEndpointMongodbSettings MongodbSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RedisSettingsInput`<sup>Optional</sup> <a name="RedisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```csharp
public DmsEndpointRedisSettings RedisSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```csharp
public DmsEndpointRedshiftSettings RedshiftSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `S3SettingsInput`<sup>Optional</sup> <a name="S3SettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```csharp
public DmsEndpointS3Settings S3SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerArnInput`<sup>Optional</sup> <a name="SecretsManagerArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```csharp
public string SecretsManagerArnInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleInput`<sup>Optional</sup> <a name="ServiceAccessRoleInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```csharp
public string ServiceAccessRoleInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServiceAccessRole`<sup>Required</sup> <a name="ServiceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```csharp
public string ServiceAccessRole { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointId,
    string EndpointType,
    string EngineName,
    string CertificateArn = null,
    string DatabaseName = null,
    DmsEndpointElasticsearchSettings ElasticsearchSettings = null,
    string ExtraConnectionAttributes = null,
    string Id = null,
    DmsEndpointKafkaSettings KafkaSettings = null,
    DmsEndpointKinesisSettings KinesisSettings = null,
    string KmsKeyArn = null,
    DmsEndpointMongodbSettings MongodbSettings = null,
    string Password = null,
    double Port = null,
    DmsEndpointRedisSettings RedisSettings = null,
    DmsEndpointRedshiftSettings RedshiftSettings = null,
    DmsEndpointS3Settings S3Settings = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerArn = null,
    string ServerName = null,
    string ServiceAccessRole = null,
    string SslMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DmsEndpointTimeouts Timeouts = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">EngineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | s3_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```csharp
public string EngineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `ElasticsearchSettings`<sup>Optional</sup> <a name="ElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettings ElasticsearchSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `ExtraConnectionAttributes`<sup>Optional</sup> <a name="ExtraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KafkaSettings`<sup>Optional</sup> <a name="KafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettings KafkaSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `KinesisSettings`<sup>Optional</sup> <a name="KinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettings KinesisSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `MongodbSettings`<sup>Optional</sup> <a name="MongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```csharp
public DmsEndpointMongodbSettings MongodbSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `RedisSettings`<sup>Optional</sup> <a name="RedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettings RedisSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettings RedshiftSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `S3Settings`<sup>Optional</sup> <a name="S3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```csharp
public DmsEndpointS3Settings S3Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

s3_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `SecretsManagerArn`<sup>Optional</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `ServiceAccessRole`<sup>Optional</sup> <a name="ServiceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```csharp
public string ServiceAccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```csharp
public DmsEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointElasticsearchSettings {
    string EndpointUri,
    string ServiceAccessRoleArn,
    double ErrorRetryDuration = null,
    double FullLoadErrorPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">EndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```csharp
public string EndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `FullLoadErrorPercentage`<sup>Optional</sup> <a name="FullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointKafkaSettings {
    string Broker,
    object IncludeControlDetails = null,
    object IncludeNullAndEmpty = null,
    object IncludePartitionValue = null,
    object IncludeTableAlterOperations = null,
    object IncludeTransactionDetails = null,
    string MessageFormat = null,
    double MessageMaxBytes = null,
    object NoHexPrefix = null,
    object PartitionIncludeSchemaTable = null,
    string SaslPassword = null,
    string SaslUsername = null,
    string SecurityProtocol = null,
    string SslCaCertificateArn = null,
    string SslClientCertificateArn = null,
    string SslClientKeyArn = null,
    string SslClientKeyPassword = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">Broker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">SaslPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">SaslUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```csharp
public string Broker { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```csharp
public object IncludeControlDetails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```csharp
public object IncludeNullAndEmpty { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```csharp
public object IncludePartitionValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```csharp
public object IncludeTableAlterOperations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```csharp
public object IncludeTransactionDetails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```csharp
public object NoHexPrefix { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public object PartitionIncludeSchemaTable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `SaslPassword`<sup>Optional</sup> <a name="SaslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```csharp
public string SaslPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `SaslUsername`<sup>Optional</sup> <a name="SaslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```csharp
public string SaslUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `SslClientCertificateArn`<sup>Optional</sup> <a name="SslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `SslClientKeyArn`<sup>Optional</sup> <a name="SslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `SslClientKeyPassword`<sup>Optional</sup> <a name="SslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointKinesisSettings {
    object IncludeControlDetails = null,
    object IncludeNullAndEmpty = null,
    object IncludePartitionValue = null,
    object IncludeTableAlterOperations = null,
    object IncludeTransactionDetails = null,
    string MessageFormat = null,
    object PartitionIncludeSchemaTable = null,
    string ServiceAccessRoleArn = null,
    string StreamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```csharp
public object IncludeControlDetails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```csharp
public object IncludeNullAndEmpty { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```csharp
public object IncludePartitionValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```csharp
public object IncludeTableAlterOperations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```csharp
public object IncludeTransactionDetails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public object PartitionIncludeSchemaTable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointMongodbSettings {
    string AuthMechanism = null,
    string AuthSource = null,
    string AuthType = null,
    string DocsToInvestigate = null,
    string ExtractDocId = null,
    string NestingLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">AuthSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```csharp
public string AuthSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointRedisSettings {
    string AuthType,
    double Port,
    string ServerName,
    string AuthPassword = null,
    string AuthUserName = null,
    string SslCaCertificateArn = null,
    string SslSecurityProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">AuthPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">AuthUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```csharp
public string AuthPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `AuthUserName`<sup>Optional</sup> <a name="AuthUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```csharp
public string AuthUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `SslSecurityProtocol`<sup>Optional</sup> <a name="SslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointRedshiftSettings {
    string BucketFolder = null,
    string BucketName = null,
    string EncryptionMode = null,
    string ServerSideEncryptionKmsKeyId = null,
    string ServiceAccessRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointS3Settings {
    object AddColumnName = null,
    string BucketFolder = null,
    string BucketName = null,
    string CannedAclForObjects = null,
    object CdcInsertsAndUpdates = null,
    object CdcInsertsOnly = null,
    double CdcMaxBatchInterval = null,
    double CdcMinFileSize = null,
    string CdcPath = null,
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
    double DictPageSizeLimit = null,
    object EnableStatistics = null,
    string EncodingType = null,
    string EncryptionMode = null,
    string ExternalTableDefinition = null,
    double IgnoreHeaderRows = null,
    double IgnoreHeadersRow = null,
    object IncludeOpForFullLoad = null,
    double MaxFileSize = null,
    object ParquetTimestampInMillisecond = null,
    string ParquetVersion = null,
    object PreserveTransactions = null,
    object Rfc4180 = null,
    double RowGroupLength = null,
    string ServerSideEncryptionKmsKeyId = null,
    string ServiceAccessRoleArn = null,
    string TimestampColumnName = null,
    object UseCsvNoSupValue = null,
    object UseTaskStartTimeForFullLoadTimestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">AddColumnName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">CdcPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">DataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">EnableStatistics</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">EncodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow">IgnoreHeadersRow</a></code> | <code>double</code> | This setting has no effect, is deprecated, and will be removed in a future version. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">PreserveTransactions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">Rfc4180</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `AddColumnName`<sup>Optional</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```csharp
public object AddColumnName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}.

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `CannedAclForObjects`<sup>Optional</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}.

---

##### `CdcInsertsAndUpdates`<sup>Optional</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```csharp
public object CdcInsertsAndUpdates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}.

---

##### `CdcInsertsOnly`<sup>Optional</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```csharp
public object CdcInsertsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}.

---

##### `CdcMaxBatchInterval`<sup>Optional</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}.

---

##### `CdcMinFileSize`<sup>Optional</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}.

---

##### `CdcPath`<sup>Optional</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```csharp
public string CdcPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}.

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}.

---

##### `CsvDelimiter`<sup>Optional</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}.

---

##### `CsvNoSupValue`<sup>Optional</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}.

---

##### `CsvNullValue`<sup>Optional</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}.

---

##### `CsvRowDelimiter`<sup>Optional</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}.

---

##### `DataPageSize`<sup>Optional</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}.

---

##### `DatePartitionDelimiter`<sup>Optional</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}.

---

##### `DatePartitionEnabled`<sup>Optional</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```csharp
public object DatePartitionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}.

---

##### `DatePartitionSequence`<sup>Optional</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}.

---

##### `DictPageSizeLimit`<sup>Optional</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}.

---

##### `EnableStatistics`<sup>Optional</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```csharp
public object EnableStatistics { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```csharp
public string EncodingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}.

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `ExternalTableDefinition`<sup>Optional</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}.

---

##### `IgnoreHeaderRows`<sup>Optional</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}.

---

##### `IgnoreHeadersRow`<sup>Optional</sup> <a name="IgnoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow"></a>

```csharp
public double IgnoreHeadersRow { get; set; }
```

- *Type:* double

This setting has no effect, is deprecated, and will be removed in a future version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_headers_row DmsEndpoint#ignore_headers_row}

---

##### `IncludeOpForFullLoad`<sup>Optional</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```csharp
public object IncludeOpForFullLoad { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}.

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `ParquetTimestampInMillisecond`<sup>Optional</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```csharp
public object ParquetTimestampInMillisecond { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}.

---

##### `ParquetVersion`<sup>Optional</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}.

---

##### `PreserveTransactions`<sup>Optional</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```csharp
public object PreserveTransactions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}.

---

##### `Rfc4180`<sup>Optional</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```csharp
public object Rfc4180 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}.

---

##### `RowGroupLength`<sup>Optional</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}.

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `TimestampColumnName`<sup>Optional</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}.

---

##### `UseCsvNoSupValue`<sup>Optional</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```csharp
public object UseCsvNoSupValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}.

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestamp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">ResetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">ResetFullLoadErrorPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```csharp
private void ResetErrorRetryDuration()
```

##### `ResetFullLoadErrorPercentage` <a name="ResetFullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```csharp
private void ResetFullLoadErrorPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">EndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">FullLoadErrorPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```csharp
public string EndpointUriInput { get; }
```

- *Type:* string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```csharp
public double ErrorRetryDurationInput { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentageInput`<sup>Optional</sup> <a name="FullLoadErrorPercentageInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```csharp
public double FullLoadErrorPercentageInput { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointElasticsearchSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">ResetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">ResetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">ResetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">ResetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">ResetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">ResetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">ResetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```csharp
private void ResetMessageMaxBytes()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```csharp
private void ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetSaslPassword` <a name="ResetSaslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```csharp
private void ResetSaslPassword()
```

##### `ResetSaslUsername` <a name="ResetSaslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```csharp
private void ResetSaslUsername()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslClientCertificateArn` <a name="ResetSslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```csharp
private void ResetSslClientCertificateArn()
```

##### `ResetSslClientKeyArn` <a name="ResetSslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```csharp
private void ResetSslClientKeyArn()
```

##### `ResetSslClientKeyPassword` <a name="ResetSslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```csharp
private void ResetSslClientKeyPassword()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">BrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">SaslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">SaslUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">SslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">SslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">SslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">SaslUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerInput`<sup>Optional</sup> <a name="BrokerInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```csharp
public string BrokerInput { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public object IncludeControlDetailsInput { get; }
```

- *Type:* object

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public object IncludeNullAndEmptyInput { get; }
```

- *Type:* object

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public object IncludePartitionValueInput { get; }
```

- *Type:* object

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public object IncludeTableAlterOperationsInput { get; }
```

- *Type:* object

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public object IncludeTransactionDetailsInput { get; }
```

- *Type:* object

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```csharp
public double MessageMaxBytesInput { get; }
```

- *Type:* double

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```csharp
public object NoHexPrefixInput { get; }
```

- *Type:* object

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public object PartitionIncludeSchemaTableInput { get; }
```

- *Type:* object

---

##### `SaslPasswordInput`<sup>Optional</sup> <a name="SaslPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```csharp
public string SaslPasswordInput { get; }
```

- *Type:* string

---

##### `SaslUsernameInput`<sup>Optional</sup> <a name="SaslUsernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```csharp
public string SaslUsernameInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientCertificateArnInput`<sup>Optional</sup> <a name="SslClientCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```csharp
public string SslClientCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyArnInput`<sup>Optional</sup> <a name="SslClientKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```csharp
public string SslClientKeyArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyPasswordInput`<sup>Optional</sup> <a name="SslClientKeyPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```csharp
public string SslClientKeyPasswordInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```csharp
public string Broker { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public object IncludeControlDetails { get; }
```

- *Type:* object

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public object IncludeNullAndEmpty { get; }
```

- *Type:* object

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public object IncludePartitionValue { get; }
```

- *Type:* object

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public object IncludeTableAlterOperations { get; }
```

- *Type:* object

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public object IncludeTransactionDetails { get; }
```

- *Type:* object

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public object NoHexPrefix { get; }
```

- *Type:* object

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public object PartitionIncludeSchemaTable { get; }
```

- *Type:* object

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```csharp
public string SaslPassword { get; }
```

- *Type:* string

---

##### `SaslUsername`<sup>Required</sup> <a name="SaslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```csharp
public string SaslUsername { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; }
```

- *Type:* string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointKafkaSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```csharp
private void ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public object IncludeControlDetailsInput { get; }
```

- *Type:* object

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public object IncludeNullAndEmptyInput { get; }
```

- *Type:* object

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public object IncludePartitionValueInput { get; }
```

- *Type:* object

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public object IncludeTableAlterOperationsInput { get; }
```

- *Type:* object

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public object IncludeTransactionDetailsInput { get; }
```

- *Type:* object

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public object PartitionIncludeSchemaTableInput { get; }
```

- *Type:* object

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public object IncludeControlDetails { get; }
```

- *Type:* object

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public object IncludeNullAndEmpty { get; }
```

- *Type:* object

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public object IncludePartitionValue { get; }
```

- *Type:* object

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public object IncludeTableAlterOperations { get; }
```

- *Type:* object

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public object IncludeTransactionDetails { get; }
```

- *Type:* object

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public object PartitionIncludeSchemaTable { get; }
```

- *Type:* object

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointKinesisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointMongodbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">ResetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">ResetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">ResetNestingLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```csharp
private void ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```csharp
private void ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```csharp
private void ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```csharp
private void ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```csharp
private void ResetNestingLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```csharp
public string AuthMechanismInput { get; }
```

- *Type:* string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```csharp
public string AuthSourceInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```csharp
public string DocsToInvestigateInput { get; }
```

- *Type:* string

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```csharp
public string ExtractDocIdInput { get; }
```

- *Type:* string

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```csharp
public string NestingLevelInput { get; }
```

- *Type:* string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; }
```

- *Type:* string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; }
```

- *Type:* string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointMongodbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">ResetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">ResetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">ResetSslSecurityProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```csharp
private void ResetAuthPassword()
```

##### `ResetAuthUserName` <a name="ResetAuthUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```csharp
private void ResetAuthUserName()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslSecurityProtocol` <a name="ResetSslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```csharp
private void ResetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">AuthUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">SslSecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```csharp
public string AuthPasswordInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthUserNameInput`<sup>Optional</sup> <a name="AuthUserNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```csharp
public string AuthUserNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslSecurityProtocolInput`<sup>Optional</sup> <a name="SslSecurityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```csharp
public string SslSecurityProtocolInput { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointRedisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointRedshiftSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointS3SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">ResetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">ResetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">ResetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">ResetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">ResetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">ResetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">ResetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">ResetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">ResetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">ResetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">ResetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">ResetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">ResetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">ResetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">ResetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">ResetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">ResetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">ResetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">ResetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow">ResetIgnoreHeadersRow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">ResetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">ResetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">ResetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">ResetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">ResetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">ResetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">ResetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">ResetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">ResetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddColumnName` <a name="ResetAddColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```csharp
private void ResetAddColumnName()
```

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCannedAclForObjects` <a name="ResetCannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```csharp
private void ResetCannedAclForObjects()
```

##### `ResetCdcInsertsAndUpdates` <a name="ResetCdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```csharp
private void ResetCdcInsertsAndUpdates()
```

##### `ResetCdcInsertsOnly` <a name="ResetCdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```csharp
private void ResetCdcInsertsOnly()
```

##### `ResetCdcMaxBatchInterval` <a name="ResetCdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```csharp
private void ResetCdcMaxBatchInterval()
```

##### `ResetCdcMinFileSize` <a name="ResetCdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```csharp
private void ResetCdcMinFileSize()
```

##### `ResetCdcPath` <a name="ResetCdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```csharp
private void ResetCdcPath()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetCsvDelimiter` <a name="ResetCsvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```csharp
private void ResetCsvDelimiter()
```

##### `ResetCsvNoSupValue` <a name="ResetCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```csharp
private void ResetCsvNoSupValue()
```

##### `ResetCsvNullValue` <a name="ResetCsvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```csharp
private void ResetCsvNullValue()
```

##### `ResetCsvRowDelimiter` <a name="ResetCsvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```csharp
private void ResetCsvRowDelimiter()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetDataPageSize` <a name="ResetDataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```csharp
private void ResetDataPageSize()
```

##### `ResetDatePartitionDelimiter` <a name="ResetDatePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```csharp
private void ResetDatePartitionDelimiter()
```

##### `ResetDatePartitionEnabled` <a name="ResetDatePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```csharp
private void ResetDatePartitionEnabled()
```

##### `ResetDatePartitionSequence` <a name="ResetDatePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```csharp
private void ResetDatePartitionSequence()
```

##### `ResetDictPageSizeLimit` <a name="ResetDictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```csharp
private void ResetDictPageSizeLimit()
```

##### `ResetEnableStatistics` <a name="ResetEnableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```csharp
private void ResetEnableStatistics()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```csharp
private void ResetEncodingType()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetExternalTableDefinition` <a name="ResetExternalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```csharp
private void ResetExternalTableDefinition()
```

##### `ResetIgnoreHeaderRows` <a name="ResetIgnoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```csharp
private void ResetIgnoreHeaderRows()
```

##### `ResetIgnoreHeadersRow` <a name="ResetIgnoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow"></a>

```csharp
private void ResetIgnoreHeadersRow()
```

##### `ResetIncludeOpForFullLoad` <a name="ResetIncludeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```csharp
private void ResetIncludeOpForFullLoad()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParquetTimestampInMillisecond` <a name="ResetParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```csharp
private void ResetParquetTimestampInMillisecond()
```

##### `ResetParquetVersion` <a name="ResetParquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```csharp
private void ResetParquetVersion()
```

##### `ResetPreserveTransactions` <a name="ResetPreserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```csharp
private void ResetPreserveTransactions()
```

##### `ResetRfc4180` <a name="ResetRfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```csharp
private void ResetRfc4180()
```

##### `ResetRowGroupLength` <a name="ResetRowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```csharp
private void ResetRowGroupLength()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetTimestampColumnName` <a name="ResetTimestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```csharp
private void ResetTimestampColumnName()
```

##### `ResetUseCsvNoSupValue` <a name="ResetUseCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```csharp
private void ResetUseCsvNoSupValue()
```

##### `ResetUseTaskStartTimeForFullLoadTimestamp` <a name="ResetUseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```csharp
private void ResetUseTaskStartTimeForFullLoadTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">AddColumnNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">CannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">CdcInsertsAndUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">CdcInsertsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">CdcMaxBatchIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">CdcMinFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">CdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">CsvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">CsvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">CsvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">CsvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">DataPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">DatePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">DatePartitionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">DatePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">DictPageSizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">EnableStatisticsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">ExternalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">IgnoreHeaderRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput">IgnoreHeadersRowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">IncludeOpForFullLoadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">ParquetTimestampInMillisecondInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">ParquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">PreserveTransactionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">Rfc4180Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">RowGroupLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">TimestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">UseCsvNoSupValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">UseTaskStartTimeForFullLoadTimestampInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow">IgnoreHeadersRow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddColumnNameInput`<sup>Optional</sup> <a name="AddColumnNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```csharp
public object AddColumnNameInput { get; }
```

- *Type:* object

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CannedAclForObjectsInput`<sup>Optional</sup> <a name="CannedAclForObjectsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```csharp
public string CannedAclForObjectsInput { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="CdcInsertsAndUpdatesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```csharp
public object CdcInsertsAndUpdatesInput { get; }
```

- *Type:* object

---

##### `CdcInsertsOnlyInput`<sup>Optional</sup> <a name="CdcInsertsOnlyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```csharp
public object CdcInsertsOnlyInput { get; }
```

- *Type:* object

---

##### `CdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="CdcMaxBatchIntervalInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```csharp
public double CdcMaxBatchIntervalInput { get; }
```

- *Type:* double

---

##### `CdcMinFileSizeInput`<sup>Optional</sup> <a name="CdcMinFileSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```csharp
public double CdcMinFileSizeInput { get; }
```

- *Type:* double

---

##### `CdcPathInput`<sup>Optional</sup> <a name="CdcPathInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```csharp
public string CdcPathInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `CsvDelimiterInput`<sup>Optional</sup> <a name="CsvDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```csharp
public string CsvDelimiterInput { get; }
```

- *Type:* string

---

##### `CsvNoSupValueInput`<sup>Optional</sup> <a name="CsvNoSupValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```csharp
public string CsvNoSupValueInput { get; }
```

- *Type:* string

---

##### `CsvNullValueInput`<sup>Optional</sup> <a name="CsvNullValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```csharp
public string CsvNullValueInput { get; }
```

- *Type:* string

---

##### `CsvRowDelimiterInput`<sup>Optional</sup> <a name="CsvRowDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```csharp
public string CsvRowDelimiterInput { get; }
```

- *Type:* string

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `DataPageSizeInput`<sup>Optional</sup> <a name="DataPageSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```csharp
public double DataPageSizeInput { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiterInput`<sup>Optional</sup> <a name="DatePartitionDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```csharp
public string DatePartitionDelimiterInput { get; }
```

- *Type:* string

---

##### `DatePartitionEnabledInput`<sup>Optional</sup> <a name="DatePartitionEnabledInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```csharp
public object DatePartitionEnabledInput { get; }
```

- *Type:* object

---

##### `DatePartitionSequenceInput`<sup>Optional</sup> <a name="DatePartitionSequenceInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```csharp
public string DatePartitionSequenceInput { get; }
```

- *Type:* string

---

##### `DictPageSizeLimitInput`<sup>Optional</sup> <a name="DictPageSizeLimitInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```csharp
public double DictPageSizeLimitInput { get; }
```

- *Type:* double

---

##### `EnableStatisticsInput`<sup>Optional</sup> <a name="EnableStatisticsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```csharp
public object EnableStatisticsInput { get; }
```

- *Type:* object

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```csharp
public string EncodingTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `ExternalTableDefinitionInput`<sup>Optional</sup> <a name="ExternalTableDefinitionInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```csharp
public string ExternalTableDefinitionInput { get; }
```

- *Type:* string

---

##### `IgnoreHeaderRowsInput`<sup>Optional</sup> <a name="IgnoreHeaderRowsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```csharp
public double IgnoreHeaderRowsInput { get; }
```

- *Type:* double

---

##### `IgnoreHeadersRowInput`<sup>Optional</sup> <a name="IgnoreHeadersRowInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput"></a>

```csharp
public double IgnoreHeadersRowInput { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoadInput`<sup>Optional</sup> <a name="IncludeOpForFullLoadInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```csharp
public object IncludeOpForFullLoadInput { get; }
```

- *Type:* object

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="ParquetTimestampInMillisecondInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```csharp
public object ParquetTimestampInMillisecondInput { get; }
```

- *Type:* object

---

##### `ParquetVersionInput`<sup>Optional</sup> <a name="ParquetVersionInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```csharp
public string ParquetVersionInput { get; }
```

- *Type:* string

---

##### `PreserveTransactionsInput`<sup>Optional</sup> <a name="PreserveTransactionsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```csharp
public object PreserveTransactionsInput { get; }
```

- *Type:* object

---

##### `Rfc4180Input`<sup>Optional</sup> <a name="Rfc4180Input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```csharp
public object Rfc4180Input { get; }
```

- *Type:* object

---

##### `RowGroupLengthInput`<sup>Optional</sup> <a name="RowGroupLengthInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```csharp
public double RowGroupLengthInput { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `TimestampColumnNameInput`<sup>Optional</sup> <a name="TimestampColumnNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```csharp
public string TimestampColumnNameInput { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValueInput`<sup>Optional</sup> <a name="UseCsvNoSupValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```csharp
public object UseCsvNoSupValueInput { get; }
```

- *Type:* object

---

##### `UseTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="UseTaskStartTimeForFullLoadTimestampInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestampInput { get; }
```

- *Type:* object

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```csharp
public object AddColumnName { get; }
```

- *Type:* object

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```csharp
public object CdcInsertsAndUpdates { get; }
```

- *Type:* object

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```csharp
public object CdcInsertsOnly { get; }
```

- *Type:* object

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; }
```

- *Type:* double

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; }
```

- *Type:* double

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```csharp
public string CdcPath { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; }
```

- *Type:* string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; }
```

- *Type:* string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; }
```

- *Type:* string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; }
```

- *Type:* string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```csharp
public object DatePartitionEnabled { get; }
```

- *Type:* object

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; }
```

- *Type:* string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; }
```

- *Type:* double

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```csharp
public object EnableStatistics { get; }
```

- *Type:* object

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; }
```

- *Type:* string

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; }
```

- *Type:* double

---

##### `IgnoreHeadersRow`<sup>Required</sup> <a name="IgnoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow"></a>

```csharp
public double IgnoreHeadersRow { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```csharp
public object IncludeOpForFullLoad { get; }
```

- *Type:* object

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```csharp
public object ParquetTimestampInMillisecond { get; }
```

- *Type:* object

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; }
```

- *Type:* string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```csharp
public object PreserveTransactions { get; }
```

- *Type:* object

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```csharp
public object Rfc4180 { get; }
```

- *Type:* object

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```csharp
public object UseCsvNoSupValue { get; }
```

- *Type:* object

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public object UseTaskStartTimeForFullLoadTimestamp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointS3Settings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



