# `dataAwsDmsEndpoint` Submodule <a name="`dataAwsDmsEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsEndpoint <a name="DataAwsDmsEndpoint" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpoint(Construct Scope, string Id, DataAwsDmsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig">DataAwsDmsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig">DataAwsDmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDmsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDmsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDmsEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDmsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDmsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList">DataAwsDmsEndpointElasticsearchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList">DataAwsDmsEndpointKafkaSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList">DataAwsDmsEndpointKinesisSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList">DataAwsDmsEndpointMongodbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.postgresSettings">PostgresSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList">DataAwsDmsEndpointPostgresSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList">DataAwsDmsEndpointRedisSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList">DataAwsDmsEndpointRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList">DataAwsDmsEndpointS3SettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.elasticsearchSettings"></a>

```csharp
public DataAwsDmsEndpointElasticsearchSettingsList ElasticsearchSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList">DataAwsDmsEndpointElasticsearchSettingsList</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; }
```

- *Type:* string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kafkaSettings"></a>

```csharp
public DataAwsDmsEndpointKafkaSettingsList KafkaSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList">DataAwsDmsEndpointKafkaSettingsList</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kinesisSettings"></a>

```csharp
public DataAwsDmsEndpointKinesisSettingsList KinesisSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList">DataAwsDmsEndpointKinesisSettingsList</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MongodbSettings`<sup>Required</sup> <a name="MongodbSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.mongodbSettings"></a>

```csharp
public DataAwsDmsEndpointMongodbSettingsList MongodbSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList">DataAwsDmsEndpointMongodbSettingsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.postgresSettings"></a>

```csharp
public DataAwsDmsEndpointPostgresSettingsList PostgresSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList">DataAwsDmsEndpointPostgresSettingsList</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redisSettings"></a>

```csharp
public DataAwsDmsEndpointRedisSettingsList RedisSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList">DataAwsDmsEndpointRedisSettingsList</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.redshiftSettings"></a>

```csharp
public DataAwsDmsEndpointRedshiftSettingsList RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList">DataAwsDmsEndpointRedshiftSettingsList</a>

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.s3Settings"></a>

```csharp
public DataAwsDmsEndpointS3SettingsList S3Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList">DataAwsDmsEndpointS3SettingsList</a>

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServiceAccessRole`<sup>Required</sup> <a name="ServiceAccessRole" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.serviceAccessRole"></a>

```csharp
public string ServiceAccessRole { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsEndpointConfig <a name="DataAwsDmsEndpointConfig" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EndpointId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.35.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}.

---

### DataAwsDmsEndpointElasticsearchSettings <a name="DataAwsDmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointElasticsearchSettings {

};
```


### DataAwsDmsEndpointKafkaSettings <a name="DataAwsDmsEndpointKafkaSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKafkaSettings {

};
```


### DataAwsDmsEndpointKinesisSettings <a name="DataAwsDmsEndpointKinesisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKinesisSettings {

};
```


### DataAwsDmsEndpointMongodbSettings <a name="DataAwsDmsEndpointMongodbSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointMongodbSettings {

};
```


### DataAwsDmsEndpointPostgresSettings <a name="DataAwsDmsEndpointPostgresSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointPostgresSettings {

};
```


### DataAwsDmsEndpointRedisSettings <a name="DataAwsDmsEndpointRedisSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedisSettings {

};
```


### DataAwsDmsEndpointRedshiftSettings <a name="DataAwsDmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedshiftSettings {

};
```


### DataAwsDmsEndpointS3Settings <a name="DataAwsDmsEndpointS3Settings" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointS3Settings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDmsEndpointElasticsearchSettingsList <a name="DataAwsDmsEndpointElasticsearchSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointElasticsearchSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointElasticsearchSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsDmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings">DataAwsDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointElasticsearchSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointElasticsearchSettings">DataAwsDmsEndpointElasticsearchSettings</a>

---


### DataAwsDmsEndpointKafkaSettingsList <a name="DataAwsDmsEndpointKafkaSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKafkaSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointKafkaSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointKafkaSettingsOutputReference <a name="DataAwsDmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKafkaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslUsername">SaslUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings">DataAwsDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```csharp
public string Broker { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public IResolvable IncludeControlDetails { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public IResolvable IncludePartitionValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public IResolvable IncludeTransactionDetails { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public IResolvable NoHexPrefix { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```csharp
public string SaslPassword { get; }
```

- *Type:* string

---

##### `SaslUsername`<sup>Required</sup> <a name="SaslUsername" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```csharp
public string SaslUsername { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; }
```

- *Type:* string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointKafkaSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKafkaSettings">DataAwsDmsEndpointKafkaSettings</a>

---


### DataAwsDmsEndpointKinesisSettingsList <a name="DataAwsDmsEndpointKinesisSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKinesisSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointKinesisSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointKinesisSettingsOutputReference <a name="DataAwsDmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointKinesisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings">DataAwsDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public IResolvable IncludeControlDetails { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public IResolvable IncludePartitionValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public IResolvable IncludeTransactionDetails { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointKinesisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointKinesisSettings">DataAwsDmsEndpointKinesisSettings</a>

---


### DataAwsDmsEndpointMongodbSettingsList <a name="DataAwsDmsEndpointMongodbSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointMongodbSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointMongodbSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointMongodbSettingsOutputReference <a name="DataAwsDmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointMongodbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings">DataAwsDmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; }
```

- *Type:* string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; }
```

- *Type:* string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointMongodbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointMongodbSettings">DataAwsDmsEndpointMongodbSettings</a>

---


### DataAwsDmsEndpointPostgresSettingsList <a name="DataAwsDmsEndpointPostgresSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointPostgresSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointPostgresSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointPostgresSettingsOutputReference <a name="DataAwsDmsEndpointPostgresSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointPostgresSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob">MapJsonbAsClob</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs">MapLongVarcharAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings">DataAwsDmsEndpointPostgresSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; }
```

- *Type:* string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.captureDdls"></a>

```csharp
public IResolvable CaptureDdls { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; }
```

- *Type:* string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable"></a>

```csharp
public IResolvable HeartbeatEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; }
```

- *Type:* double

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; }
```

- *Type:* string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MapJsonbAsClob`<sup>Required</sup> <a name="MapJsonbAsClob" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob"></a>

```csharp
public IResolvable MapJsonbAsClob { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MapLongVarcharAs`<sup>Required</sup> <a name="MapLongVarcharAs" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs"></a>

```csharp
public string MapLongVarcharAs { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointPostgresSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointPostgresSettings">DataAwsDmsEndpointPostgresSettings</a>

---


### DataAwsDmsEndpointRedisSettingsList <a name="DataAwsDmsEndpointRedisSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedisSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointRedisSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointRedisSettingsOutputReference <a name="DataAwsDmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings">DataAwsDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointRedisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedisSettings">DataAwsDmsEndpointRedisSettings</a>

---


### DataAwsDmsEndpointRedshiftSettingsList <a name="DataAwsDmsEndpointRedshiftSettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedshiftSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get"></a>

```csharp
private DataAwsDmsEndpointRedshiftSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsDmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings">DataAwsDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointRedshiftSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointRedshiftSettings">DataAwsDmsEndpointRedshiftSettings</a>

---


### DataAwsDmsEndpointS3SettingsList <a name="DataAwsDmsEndpointS3SettingsList" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointS3SettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get"></a>

```csharp
private DataAwsDmsEndpointS3SettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDmsEndpointS3SettingsOutputReference <a name="DataAwsDmsEndpointS3SettingsOutputReference" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDmsEndpointS3SettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow">IgnoreHeadersRow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings">DataAwsDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```csharp
public IResolvable AddColumnName { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```csharp
public string CannedAclForObjects { get; }
```

- *Type:* string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```csharp
public IResolvable CdcInsertsAndUpdates { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```csharp
public IResolvable CdcInsertsOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```csharp
public double CdcMaxBatchInterval { get; }
```

- *Type:* double

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```csharp
public double CdcMinFileSize { get; }
```

- *Type:* double

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```csharp
public string CdcPath { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```csharp
public string CsvDelimiter { get; }
```

- *Type:* string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```csharp
public string CsvNoSupValue { get; }
```

- *Type:* string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```csharp
public string CsvNullValue { get; }
```

- *Type:* string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```csharp
public string CsvRowDelimiter { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```csharp
public double DataPageSize { get; }
```

- *Type:* double

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```csharp
public string DatePartitionDelimiter { get; }
```

- *Type:* string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```csharp
public IResolvable DatePartitionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```csharp
public string DatePartitionSequence { get; }
```

- *Type:* string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```csharp
public double DictPageSizeLimit { get; }
```

- *Type:* double

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```csharp
public IResolvable EnableStatistics { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```csharp
public string ExternalTableDefinition { get; }
```

- *Type:* string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```csharp
public IResolvable GlueCatalogGeneration { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```csharp
public double IgnoreHeaderRows { get; }
```

- *Type:* double

---

##### `IgnoreHeadersRow`<sup>Required</sup> <a name="IgnoreHeadersRow" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow"></a>

```csharp
public double IgnoreHeadersRow { get; }
```

- *Type:* double

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```csharp
public IResolvable IncludeOpForFullLoad { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```csharp
public IResolvable ParquetTimestampInMillisecond { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```csharp
public string ParquetVersion { get; }
```

- *Type:* string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```csharp
public IResolvable PreserveTransactions { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```csharp
public IResolvable Rfc4180 { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```csharp
public double RowGroupLength { get; }
```

- *Type:* double

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```csharp
public string TimestampColumnName { get; }
```

- *Type:* string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```csharp
public IResolvable UseCsvNoSupValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```csharp
public IResolvable UseTaskStartTimeForFullLoadTimestamp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsDmsEndpointS3Settings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDmsEndpoint.DataAwsDmsEndpointS3Settings">DataAwsDmsEndpointS3Settings</a>

---



