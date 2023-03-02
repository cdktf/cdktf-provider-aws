# `appsyncDatasource` Submodule <a name="`appsyncDatasource` Submodule" id="@cdktf/provider-aws.appsyncDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDatasource <a name="AppsyncDatasource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasource(Construct Scope, string Id, AppsyncDatasourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig">AppsyncDatasourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig">AppsyncDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig">PutDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig">PutElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig">PutHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig">PutRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig">ResetDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig">ResetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig">ResetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig">ResetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn">ResetServiceRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDynamodbConfig` <a name="PutDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig"></a>

```csharp
private void PutDynamodbConfig(AppsyncDatasourceDynamodbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `PutElasticsearchConfig` <a name="PutElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig"></a>

```csharp
private void PutElasticsearchConfig(AppsyncDatasourceElasticsearchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `PutHttpConfig` <a name="PutHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig"></a>

```csharp
private void PutHttpConfig(AppsyncDatasourceHttpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig"></a>

```csharp
private void PutLambdaConfig(AppsyncDatasourceLambdaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `PutRelationalDatabaseConfig` <a name="PutRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig"></a>

```csharp
private void PutRelationalDatabaseConfig(AppsyncDatasourceRelationalDatabaseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamodbConfig` <a name="ResetDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig"></a>

```csharp
private void ResetDynamodbConfig()
```

##### `ResetElasticsearchConfig` <a name="ResetElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig"></a>

```csharp
private void ResetElasticsearchConfig()
```

##### `ResetHttpConfig` <a name="ResetHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig"></a>

```csharp
private void ResetHttpConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig"></a>

```csharp
private void ResetLambdaConfig()
```

##### `ResetRelationalDatabaseConfig` <a name="ResetRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig"></a>

```csharp
private void ResetRelationalDatabaseConfig()
```

##### `ResetServiceRoleArn` <a name="ResetServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn"></a>

```csharp
private void ResetServiceRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncDatasource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncDatasource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppsyncDatasource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig">DynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput">DynamodbConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput">ElasticsearchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput">HttpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput">RelationalDatabaseConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DynamodbConfig`<sup>Required</sup> <a name="DynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig"></a>

```csharp
public AppsyncDatasourceDynamodbConfigOutputReference DynamodbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a>

---

##### `ElasticsearchConfig`<sup>Required</sup> <a name="ElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig"></a>

```csharp
public AppsyncDatasourceElasticsearchConfigOutputReference ElasticsearchConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a>

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig"></a>

```csharp
public AppsyncDatasourceHttpConfigOutputReference HttpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a>

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig"></a>

```csharp
public AppsyncDatasourceLambdaConfigOutputReference LambdaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a>

---

##### `RelationalDatabaseConfig`<sup>Required</sup> <a name="RelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfigOutputReference RelationalDatabaseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DynamodbConfigInput`<sup>Optional</sup> <a name="DynamodbConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput"></a>

```csharp
public AppsyncDatasourceDynamodbConfig DynamodbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `ElasticsearchConfigInput`<sup>Optional</sup> <a name="ElasticsearchConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput"></a>

```csharp
public AppsyncDatasourceElasticsearchConfig ElasticsearchConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `HttpConfigInput`<sup>Optional</sup> <a name="HttpConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput"></a>

```csharp
public AppsyncDatasourceHttpConfig HttpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput"></a>

```csharp
public AppsyncDatasourceLambdaConfig LambdaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RelationalDatabaseConfigInput`<sup>Optional</sup> <a name="RelationalDatabaseConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfig RelationalDatabaseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDatasourceConfig <a name="AppsyncDatasourceConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiId,
    string Name,
    string Type,
    string Description = null,
    AppsyncDatasourceDynamodbConfig DynamodbConfig = null,
    AppsyncDatasourceElasticsearchConfig ElasticsearchConfig = null,
    AppsyncDatasourceHttpConfig HttpConfig = null,
    string Id = null,
    AppsyncDatasourceLambdaConfig LambdaConfig = null,
    AppsyncDatasourceRelationalDatabaseConfig RelationalDatabaseConfig = null,
    string ServiceRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig">DynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `DynamodbConfig`<sup>Optional</sup> <a name="DynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig"></a>

```csharp
public AppsyncDatasourceDynamodbConfig DynamodbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `ElasticsearchConfig`<sup>Optional</sup> <a name="ElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig"></a>

```csharp
public AppsyncDatasourceElasticsearchConfig ElasticsearchConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `HttpConfig`<sup>Optional</sup> <a name="HttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig"></a>

```csharp
public AppsyncDatasourceHttpConfig HttpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig"></a>

```csharp
public AppsyncDatasourceLambdaConfig LambdaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `RelationalDatabaseConfig`<sup>Optional</sup> <a name="RelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfig RelationalDatabaseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `ServiceRoleArn`<sup>Optional</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

### AppsyncDatasourceDynamodbConfig <a name="AppsyncDatasourceDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceDynamodbConfig {
    string TableName,
    AppsyncDatasourceDynamodbConfigDeltaSyncConfig DeltaSyncConfig = null,
    string Region = null,
    object UseCallerCredentials = null,
    object Versioned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | delta_sync_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned">Versioned</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}.

---

##### `DeltaSyncConfig`<sup>Optional</sup> <a name="DeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig"></a>

```csharp
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig DeltaSyncConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

delta_sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `UseCallerCredentials`<sup>Optional</sup> <a name="UseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials"></a>

```csharp
public object UseCallerCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}.

---

##### `Versioned`<sup>Optional</sup> <a name="Versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned"></a>

```csharp
public object Versioned { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}.

---

### AppsyncDatasourceDynamodbConfigDeltaSyncConfig <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceDynamodbConfigDeltaSyncConfig {
    string DeltaSyncTableName,
    double BaseTableTtl = null,
    double DeltaSyncTableTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl">BaseTableTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}. |

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```csharp
public string DeltaSyncTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}.

---

##### `BaseTableTtl`<sup>Optional</sup> <a name="BaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```csharp
public double BaseTableTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}.

---

##### `DeltaSyncTableTtl`<sup>Optional</sup> <a name="DeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```csharp
public double DeltaSyncTableTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}.

---

### AppsyncDatasourceElasticsearchConfig <a name="AppsyncDatasourceElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceElasticsearchConfig {
    string Endpoint,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

### AppsyncDatasourceHttpConfig <a name="AppsyncDatasourceHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfig {
    string Endpoint,
    AppsyncDatasourceHttpConfigAuthorizationConfig AuthorizationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | authorization_config block. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfig AuthorizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfigAuthorizationConfig {
    string AuthorizationType = null,
    AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | aws_iam_config block. |

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}.

---

##### `AwsIamConfig`<sup>Optional</sup> <a name="AwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

aws_iam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig {
    string SigningRegion = null,
    string SigningServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">SigningRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">SigningServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}. |

---

##### `SigningRegion`<sup>Optional</sup> <a name="SigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```csharp
public string SigningRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}.

---

##### `SigningServiceName`<sup>Optional</sup> <a name="SigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```csharp
public string SigningServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}.

---

### AppsyncDatasourceLambdaConfig <a name="AppsyncDatasourceLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceLambdaConfig {
    string FunctionArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}. |

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}.

---

### AppsyncDatasourceRelationalDatabaseConfig <a name="AppsyncDatasourceRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceRelationalDatabaseConfig {
    AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig HttpEndpointConfig = null,
    string SourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig">HttpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | http_endpoint_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}. |

---

##### `HttpEndpointConfig`<sup>Optional</sup> <a name="HttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig HttpEndpointConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

http_endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}.

---

### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig {
    string AwsSecretStoreArn,
    string DbClusterIdentifier,
    string DatabaseName = null,
    string Region = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}. |

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn"></a>

```csharp
public string AwsSecretStoreArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}.

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">ResetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">ResetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseTableTtl` <a name="ResetBaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```csharp
private void ResetBaseTableTtl()
```

##### `ResetDeltaSyncTableTtl` <a name="ResetDeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```csharp
private void ResetDeltaSyncTableTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">BaseTableTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">DeltaSyncTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">DeltaSyncTableTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">BaseTableTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseTableTtlInput`<sup>Optional</sup> <a name="BaseTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```csharp
public double BaseTableTtlInput { get; }
```

- *Type:* double

---

##### `DeltaSyncTableNameInput`<sup>Optional</sup> <a name="DeltaSyncTableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```csharp
public string DeltaSyncTableNameInput { get; }
```

- *Type:* string

---

##### `DeltaSyncTableTtlInput`<sup>Optional</sup> <a name="DeltaSyncTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```csharp
public double DeltaSyncTableTtlInput { get; }
```

- *Type:* double

---

##### `BaseTableTtl`<sup>Required</sup> <a name="BaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```csharp
public double BaseTableTtl { get; }
```

- *Type:* double

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```csharp
public string DeltaSyncTableName { get; }
```

- *Type:* string

---

##### `DeltaSyncTableTtl`<sup>Required</sup> <a name="DeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```csharp
public double DeltaSyncTableTtl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---


### AppsyncDatasourceDynamodbConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceDynamodbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig">PutDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig">ResetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials">ResetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned">ResetVersioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaSyncConfig` <a name="PutDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig"></a>

```csharp
private void PutDeltaSyncConfig(AppsyncDatasourceDynamodbConfigDeltaSyncConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `ResetDeltaSyncConfig` <a name="ResetDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig"></a>

```csharp
private void ResetDeltaSyncConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetUseCallerCredentials` <a name="ResetUseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials"></a>

```csharp
private void ResetUseCallerCredentials()
```

##### `ResetVersioned` <a name="ResetVersioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned"></a>

```csharp
private void ResetVersioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput">DeltaSyncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput">UseCallerCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput">VersionedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned">Versioned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaSyncConfig`<sup>Required</sup> <a name="DeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig"></a>

```csharp
public AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference DeltaSyncConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a>

---

##### `DeltaSyncConfigInput`<sup>Optional</sup> <a name="DeltaSyncConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput"></a>

```csharp
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig DeltaSyncConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `UseCallerCredentialsInput`<sup>Optional</sup> <a name="UseCallerCredentialsInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput"></a>

```csharp
public object UseCallerCredentialsInput { get; }
```

- *Type:* object

---

##### `VersionedInput`<sup>Optional</sup> <a name="VersionedInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput"></a>

```csharp
public object VersionedInput { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `UseCallerCredentials`<sup>Required</sup> <a name="UseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials"></a>

```csharp
public object UseCallerCredentials { get; }
```

- *Type:* object

---

##### `Versioned`<sup>Required</sup> <a name="Versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned"></a>

```csharp
public object Versioned { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceDynamodbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---


### AppsyncDatasourceElasticsearchConfigOutputReference <a name="AppsyncDatasourceElasticsearchConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceElasticsearchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceElasticsearchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">ResetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">ResetSigningServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSigningRegion` <a name="ResetSigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```csharp
private void ResetSigningRegion()
```

##### `ResetSigningServiceName` <a name="ResetSigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```csharp
private void ResetSigningServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">SigningRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">SigningServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">SigningRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">SigningServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SigningRegionInput`<sup>Optional</sup> <a name="SigningRegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```csharp
public string SigningRegionInput { get; }
```

- *Type:* string

---

##### `SigningServiceNameInput`<sup>Optional</sup> <a name="SigningServiceNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```csharp
public string SigningServiceNameInput { get; }
```

- *Type:* string

---

##### `SigningRegion`<sup>Required</sup> <a name="SigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```csharp
public string SigningRegion { get; }
```

- *Type:* string

---

##### `SigningServiceName`<sup>Required</sup> <a name="SigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```csharp
public string SigningServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">PutAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">ResetAwsIamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIamConfig` <a name="PutAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```csharp
private void PutAwsIamConfig(AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetAwsIamConfig` <a name="ResetAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```csharp
private void ResetAwsIamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">AwsIamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIamConfig`<sup>Required</sup> <a name="AwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference AwsIamConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `AwsIamConfigInput`<sup>Optional</sup> <a name="AwsIamConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig AwsIamConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDatasourceHttpConfigOutputReference <a name="AppsyncDatasourceHttpConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceHttpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```csharp
private void PutAuthorizationConfig(AppsyncDatasourceHttpConfigAuthorizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```csharp
private void ResetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```csharp
public AppsyncDatasourceHttpConfigAuthorizationConfig AuthorizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceHttpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---


### AppsyncDatasourceLambdaConfigOutputReference <a name="AppsyncDatasourceLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceLambdaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceLambdaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">AwsSecretStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsSecretStoreArnInput`<sup>Optional</sup> <a name="AwsSecretStoreArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```csharp
public string AwsSecretStoreArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```csharp
public string AwsSecretStoreArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppsyncDatasourceRelationalDatabaseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig">PutHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig">ResetHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpEndpointConfig` <a name="PutHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig"></a>

```csharp
private void PutHttpEndpointConfig(AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `ResetHttpEndpointConfig` <a name="ResetHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig"></a>

```csharp
private void ResetHttpEndpointConfig()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType"></a>

```csharp
private void ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig">HttpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput">HttpEndpointConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointConfig`<sup>Required</sup> <a name="HttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference HttpEndpointConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a>

---

##### `HttpEndpointConfigInput`<sup>Optional</sup> <a name="HttpEndpointConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig HttpEndpointConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```csharp
public AppsyncDatasourceRelationalDatabaseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---



