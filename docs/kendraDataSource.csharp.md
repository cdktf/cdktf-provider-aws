# `kendraDataSource` Submodule <a name="`kendraDataSource` Submodule" id="@cdktf/provider-aws.kendraDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraDataSource <a name="KendraDataSource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source aws_kendra_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSource(Construct Scope, string Id, KendraDataSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig">KendraDataSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig">KendraDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration">PutCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetCustomDocumentEnrichmentConfiguration">ResetCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration"></a>

```csharp
private void PutConfiguration(KendraDataSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

---

##### `PutCustomDocumentEnrichmentConfiguration` <a name="PutCustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration"></a>

```csharp
private void PutCustomDocumentEnrichmentConfiguration(KendraDataSourceCustomDocumentEnrichmentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts"></a>

```csharp
private void PutTimeouts(KendraDataSourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetCustomDocumentEnrichmentConfiguration` <a name="ResetCustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetCustomDocumentEnrichmentConfiguration"></a>

```csharp
private void ResetCustomDocumentEnrichmentConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraDataSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraDataSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraDataSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference">KendraDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfiguration">CustomDocumentEnrichmentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference">KendraDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfigurationInput">CustomDocumentEnrichmentConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configuration"></a>

```csharp
public KendraDataSourceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference">KendraDataSourceConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomDocumentEnrichmentConfiguration`<sup>Required</sup> <a name="CustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference CustomDocumentEnrichmentConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeouts"></a>

```csharp
public KendraDataSourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference">KendraDataSourceTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configurationInput"></a>

```csharp
public KendraDataSourceConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

---

##### `CustomDocumentEnrichmentConfigurationInput`<sup>Optional</sup> <a name="CustomDocumentEnrichmentConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfigurationInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfiguration CustomDocumentEnrichmentConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraDataSourceConfig <a name="KendraDataSourceConfig" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IndexId,
    string Name,
    string Type,
    KendraDataSourceConfiguration Configuration = null,
    KendraDataSourceCustomDocumentEnrichmentConfiguration CustomDocumentEnrichmentConfiguration = null,
    string Description = null,
    string Id = null,
    string LanguageCode = null,
    string RoleArn = null,
    string Schedule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KendraDataSourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.indexId">IndexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.customDocumentEnrichmentConfiguration">CustomDocumentEnrichmentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | custom_document_enrichment_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.configuration"></a>

```csharp
public KendraDataSourceConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#configuration KendraDataSource#configuration}

---

##### `CustomDocumentEnrichmentConfiguration`<sup>Optional</sup> <a name="CustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.customDocumentEnrichmentConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfiguration CustomDocumentEnrichmentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

custom_document_enrichment_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.timeouts"></a>

```csharp
public KendraDataSourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#timeouts KendraDataSource#timeouts}

---

### KendraDataSourceConfiguration <a name="KendraDataSourceConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfiguration {
    KendraDataSourceConfigurationS3Configuration S3Configuration = null,
    KendraDataSourceConfigurationWebCrawlerConfiguration WebCrawlerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | s3_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.webCrawlerConfiguration">WebCrawlerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | web_crawler_configuration block. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.s3Configuration"></a>

```csharp
public KendraDataSourceConfigurationS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}

---

##### `WebCrawlerConfiguration`<sup>Optional</sup> <a name="WebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.webCrawlerConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfiguration WebCrawlerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

web_crawler_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}

---

### KendraDataSourceConfigurationS3Configuration <a name="KendraDataSourceConfigurationS3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3Configuration {
    string BucketName,
    KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration AccessControlListConfiguration = null,
    KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration DocumentsMetadataConfiguration = null,
    string[] ExclusionPatterns = null,
    string[] InclusionPatterns = null,
    string[] InclusionPrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.accessControlListConfiguration">AccessControlListConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | access_control_list_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.documentsMetadataConfiguration">DocumentsMetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | documents_metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPatterns">InclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}.

---

##### `AccessControlListConfiguration`<sup>Optional</sup> <a name="AccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.accessControlListConfiguration"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration AccessControlListConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

access_control_list_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}

---

##### `DocumentsMetadataConfiguration`<sup>Optional</sup> <a name="DocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.documentsMetadataConfiguration"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration DocumentsMetadataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

documents_metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}

---

##### `ExclusionPatterns`<sup>Optional</sup> <a name="ExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.exclusionPatterns"></a>

```csharp
public string[] ExclusionPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}.

---

##### `InclusionPatterns`<sup>Optional</sup> <a name="InclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPatterns"></a>

```csharp
public string[] InclusionPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}.

---

##### `InclusionPrefixes`<sup>Optional</sup> <a name="InclusionPrefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPrefixes"></a>

```csharp
public string[] InclusionPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}.

---

### KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration <a name="KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
    string KeyPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.property.keyPath">KeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}. |

---

##### `KeyPath`<sup>Optional</sup> <a name="KeyPath" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.property.keyPath"></a>

```csharp
public string KeyPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}.

---

### KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration <a name="KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
    string S3Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}. |

---

##### `S3Prefix`<sup>Optional</sup> <a name="S3Prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}.

---

### KendraDataSourceConfigurationWebCrawlerConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfiguration {
    KendraDataSourceConfigurationWebCrawlerConfigurationUrls Urls,
    KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration AuthenticationConfiguration = null,
    double CrawlDepth = null,
    double MaxContentSizePerPageInMegaBytes = null,
    double MaxLinksPerPage = null,
    double MaxUrlsPerMinuteCrawlRate = null,
    KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration ProxyConfiguration = null,
    string[] UrlExclusionPatterns = null,
    string[] UrlInclusionPatterns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urls">Urls</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | urls block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.crawlDepth">CrawlDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxContentSizePerPageInMegaBytes">MaxContentSizePerPageInMegaBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxLinksPerPage">MaxLinksPerPage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxUrlsPerMinuteCrawlRate">MaxUrlsPerMinuteCrawlRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlExclusionPatterns">UrlExclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlInclusionPatterns">UrlInclusionPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}. |

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urls"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrls Urls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

urls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#urls KendraDataSource#urls}

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.authenticationConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}

---

##### `CrawlDepth`<sup>Optional</sup> <a name="CrawlDepth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.crawlDepth"></a>

```csharp
public double CrawlDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}.

---

##### `MaxContentSizePerPageInMegaBytes`<sup>Optional</sup> <a name="MaxContentSizePerPageInMegaBytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxContentSizePerPageInMegaBytes"></a>

```csharp
public double MaxContentSizePerPageInMegaBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}.

---

##### `MaxLinksPerPage`<sup>Optional</sup> <a name="MaxLinksPerPage" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxLinksPerPage"></a>

```csharp
public double MaxLinksPerPage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}.

---

##### `MaxUrlsPerMinuteCrawlRate`<sup>Optional</sup> <a name="MaxUrlsPerMinuteCrawlRate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxUrlsPerMinuteCrawlRate"></a>

```csharp
public double MaxUrlsPerMinuteCrawlRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}.

---

##### `ProxyConfiguration`<sup>Optional</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.proxyConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration ProxyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}

---

##### `UrlExclusionPatterns`<sup>Optional</sup> <a name="UrlExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlExclusionPatterns"></a>

```csharp
public string[] UrlExclusionPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}.

---

##### `UrlInclusionPatterns`<sup>Optional</sup> <a name="UrlInclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlInclusionPatterns"></a>

```csharp
public string[] UrlInclusionPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
    object BasicAuthentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.property.basicAuthentication">BasicAuthentication</a></code> | <code>object</code> | basic_authentication block. |

---

##### `BasicAuthentication`<sup>Optional</sup> <a name="BasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.property.basicAuthentication"></a>

```csharp
public object BasicAuthentication { get; set; }
```

- *Type:* object

basic_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}

---

### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
    string Credentials,
    string Host,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}. |

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
    string Host,
    double Port,
    string Credentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrls <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrls {
    KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration SeedUrlConfiguration = null,
    KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration SiteMapsConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.seedUrlConfiguration">SeedUrlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | seed_url_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.siteMapsConfiguration">SiteMapsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | site_maps_configuration block. |

---

##### `SeedUrlConfiguration`<sup>Optional</sup> <a name="SeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.seedUrlConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration SeedUrlConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

seed_url_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}

---

##### `SiteMapsConfiguration`<sup>Optional</sup> <a name="SiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.siteMapsConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration SiteMapsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

site_maps_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
    string[] SeedUrls,
    string WebCrawlerMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.seedUrls">SeedUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.webCrawlerMode">WebCrawlerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}. |

---

##### `SeedUrls`<sup>Required</sup> <a name="SeedUrls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.seedUrls"></a>

```csharp
public string[] SeedUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}.

---

##### `WebCrawlerMode`<sup>Optional</sup> <a name="WebCrawlerMode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.webCrawlerMode"></a>

```csharp
public string WebCrawlerMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration {
    string[] SiteMaps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.property.siteMaps">SiteMaps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}. |

---

##### `SiteMaps`<sup>Required</sup> <a name="SiteMaps" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.property.siteMaps"></a>

```csharp
public string[] SiteMaps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}.

---

### KendraDataSourceCustomDocumentEnrichmentConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfiguration {
    object InlineConfigurations = null,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration PostExtractionHookConfiguration = null,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration PreExtractionHookConfiguration = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.inlineConfigurations">InlineConfigurations</a></code> | <code>object</code> | inline_configurations block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration">PostExtractionHookConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | post_extraction_hook_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration">PreExtractionHookConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | pre_extraction_hook_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}. |

---

##### `InlineConfigurations`<sup>Optional</sup> <a name="InlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.inlineConfigurations"></a>

```csharp
public object InlineConfigurations { get; set; }
```

- *Type:* object

inline_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}

---

##### `PostExtractionHookConfiguration`<sup>Optional</sup> <a name="PostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration PostExtractionHookConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

post_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}

---

##### `PreExtractionHookConfiguration`<sup>Optional</sup> <a name="PreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration PreExtractionHookConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

pre_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations {
    KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition Condition = null,
    object DocumentContentDeletion = null,
    KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentDeletion">DocumentContentDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | target block. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.condition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition KendraDataSource#condition}

---

##### `DocumentContentDeletion`<sup>Optional</sup> <a name="DocumentContentDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentDeletion"></a>

```csharp
public object DocumentContentDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.target"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target KendraDataSource#target}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition {
    string ConditionDocumentAttributeKey,
    string Operator,
    KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue ConditionOnValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `ConditionOnValue`<sup>Optional</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue ConditionOnValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue {
    string DateValue = null,
    double LongValue = null,
    string[] StringListValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.dateValue">DateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.longValue">LongValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.dateValue"></a>

```csharp
public string DateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.longValue"></a>

```csharp
public double LongValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget {
    string TargetDocumentAttributeKey = null,
    KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue TargetDocumentAttributeValue = null,
    object TargetDocumentAttributeValueDeletion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeKey">TargetDocumentAttributeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValue">TargetDocumentAttributeValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | target_document_attribute_value block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValueDeletion">TargetDocumentAttributeValueDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}. |

---

##### `TargetDocumentAttributeKey`<sup>Optional</sup> <a name="TargetDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeKey"></a>

```csharp
public string TargetDocumentAttributeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}.

---

##### `TargetDocumentAttributeValue`<sup>Optional</sup> <a name="TargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue TargetDocumentAttributeValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

target_document_attribute_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}

---

##### `TargetDocumentAttributeValueDeletion`<sup>Optional</sup> <a name="TargetDocumentAttributeValueDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValueDeletion"></a>

```csharp
public object TargetDocumentAttributeValueDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue {
    string DateValue = null,
    double LongValue = null,
    string[] StringListValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.dateValue">DateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.longValue">LongValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.dateValue"></a>

```csharp
public string DateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.longValue"></a>

```csharp
public double LongValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
    string LambdaArn,
    string S3Bucket,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition InvocationCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | invocation_condition block. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

##### `InvocationCondition`<sup>Optional</sup> <a name="InvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition InvocationCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
    string ConditionDocumentAttributeKey,
    string Operator,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `ConditionOnValue`<sup>Optional</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
    string DateValue = null,
    double LongValue = null,
    string[] StringListValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue">DateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue">LongValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue"></a>

```csharp
public string DateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue"></a>

```csharp
public double LongValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
    string LambdaArn,
    string S3Bucket,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition InvocationCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | invocation_condition block. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

##### `InvocationCondition`<sup>Optional</sup> <a name="InvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition InvocationCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
    string ConditionDocumentAttributeKey,
    string Operator,
    KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `ConditionOnValue`<sup>Optional</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
    string DateValue = null,
    double LongValue = null,
    string[] StringListValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue">DateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue">LongValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue"></a>

```csharp
public string DateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue"></a>

```csharp
public double LongValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceTimeouts <a name="KendraDataSourceTimeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraDataSourceConfigurationOutputReference <a name="KendraDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration">PutWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetWebCrawlerConfiguration">ResetWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(KendraDataSourceConfigurationS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

---

##### `PutWebCrawlerConfiguration` <a name="PutWebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration"></a>

```csharp
private void PutWebCrawlerConfiguration(KendraDataSourceConfigurationWebCrawlerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```

##### `ResetWebCrawlerConfiguration` <a name="ResetWebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetWebCrawlerConfiguration"></a>

```csharp
private void ResetWebCrawlerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfiguration">WebCrawlerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfigurationInput">WebCrawlerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationOutputReference</a>

---

##### `WebCrawlerConfiguration`<sup>Required</sup> <a name="WebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference WebCrawlerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationS3Configuration S3ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

---

##### `WebCrawlerConfigurationInput`<sup>Optional</sup> <a name="WebCrawlerConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfiguration WebCrawlerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resetKeyPath">ResetKeyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyPath` <a name="ResetKeyPath" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resetKeyPath"></a>

```csharp
private void ResetKeyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPathInput">KeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPath">KeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyPathInput`<sup>Optional</sup> <a name="KeyPathInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPathInput"></a>

```csharp
public string KeyPathInput { get; }
```

- *Type:* string

---

##### `KeyPath`<sup>Required</sup> <a name="KeyPath" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPath"></a>

```csharp
public string KeyPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resetS3Prefix">ResetS3Prefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Prefix` <a name="ResetS3Prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resetS3Prefix"></a>

```csharp
private void ResetS3Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration">PutAccessControlListConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration">PutDocumentsMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetAccessControlListConfiguration">ResetAccessControlListConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetDocumentsMetadataConfiguration">ResetDocumentsMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetExclusionPatterns">ResetExclusionPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPatterns">ResetInclusionPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes">ResetInclusionPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessControlListConfiguration` <a name="PutAccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration"></a>

```csharp
private void PutAccessControlListConfiguration(KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

---

##### `PutDocumentsMetadataConfiguration` <a name="PutDocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration"></a>

```csharp
private void PutDocumentsMetadataConfiguration(KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

---

##### `ResetAccessControlListConfiguration` <a name="ResetAccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetAccessControlListConfiguration"></a>

```csharp
private void ResetAccessControlListConfiguration()
```

##### `ResetDocumentsMetadataConfiguration` <a name="ResetDocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetDocumentsMetadataConfiguration"></a>

```csharp
private void ResetDocumentsMetadataConfiguration()
```

##### `ResetExclusionPatterns` <a name="ResetExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetExclusionPatterns"></a>

```csharp
private void ResetExclusionPatterns()
```

##### `ResetInclusionPatterns` <a name="ResetInclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPatterns"></a>

```csharp
private void ResetInclusionPatterns()
```

##### `ResetInclusionPrefixes` <a name="ResetInclusionPrefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes"></a>

```csharp
private void ResetInclusionPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfiguration">AccessControlListConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfiguration">DocumentsMetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfigurationInput">AccessControlListConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfigurationInput">DocumentsMetadataConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatternsInput">ExclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatternsInput">InclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput">InclusionPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatterns">InclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessControlListConfiguration`<sup>Required</sup> <a name="AccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfiguration"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference AccessControlListConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference</a>

---

##### `DocumentsMetadataConfiguration`<sup>Required</sup> <a name="DocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfiguration"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference DocumentsMetadataConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference</a>

---

##### `AccessControlListConfigurationInput`<sup>Optional</sup> <a name="AccessControlListConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration AccessControlListConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `DocumentsMetadataConfigurationInput`<sup>Optional</sup> <a name="DocumentsMetadataConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration DocumentsMetadataConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

---

##### `ExclusionPatternsInput`<sup>Optional</sup> <a name="ExclusionPatternsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatternsInput"></a>

```csharp
public string[] ExclusionPatternsInput { get; }
```

- *Type:* string[]

---

##### `InclusionPatternsInput`<sup>Optional</sup> <a name="InclusionPatternsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatternsInput"></a>

```csharp
public string[] InclusionPatternsInput { get; }
```

- *Type:* string[]

---

##### `InclusionPrefixesInput`<sup>Optional</sup> <a name="InclusionPrefixesInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput"></a>

```csharp
public string[] InclusionPrefixesInput { get; }
```

- *Type:* string[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ExclusionPatterns`<sup>Required</sup> <a name="ExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatterns"></a>

```csharp
public string[] ExclusionPatterns { get; }
```

- *Type:* string[]

---

##### `InclusionPatterns`<sup>Required</sup> <a name="InclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatterns"></a>

```csharp
public string[] InclusionPatterns { get; }
```

- *Type:* string[]

---

##### `InclusionPrefixes`<sup>Required</sup> <a name="InclusionPrefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes"></a>

```csharp
public string[] InclusionPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get"></a>

```csharp
private KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication">PutBasicAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resetBasicAuthentication">ResetBasicAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthentication` <a name="PutBasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication"></a>

```csharp
private void PutBasicAuthentication(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication.parameter.value"></a>

- *Type:* object

---

##### `ResetBasicAuthentication` <a name="ResetBasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resetBasicAuthentication"></a>

```csharp
private void ResetBasicAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthentication">BasicAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthenticationInput">BasicAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthentication`<sup>Required</sup> <a name="BasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthentication"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList BasicAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList</a>

---

##### `BasicAuthenticationInput`<sup>Optional</sup> <a name="BasicAuthenticationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthenticationInput"></a>

```csharp
public object BasicAuthenticationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration">PutProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls">PutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlDepth">ResetCrawlDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxContentSizePerPageInMegaBytes">ResetMaxContentSizePerPageInMegaBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxLinksPerPage">ResetMaxLinksPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxUrlsPerMinuteCrawlRate">ResetMaxUrlsPerMinuteCrawlRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetProxyConfiguration">ResetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlExclusionPatterns">ResetUrlExclusionPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlInclusionPatterns">ResetUrlInclusionPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

---

##### `PutProxyConfiguration` <a name="PutProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration"></a>

```csharp
private void PutProxyConfiguration(KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

---

##### `PutUrls` <a name="PutUrls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls"></a>

```csharp
private void PutUrls(KendraDataSourceConfigurationWebCrawlerConfigurationUrls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

---

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetCrawlDepth` <a name="ResetCrawlDepth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlDepth"></a>

```csharp
private void ResetCrawlDepth()
```

##### `ResetMaxContentSizePerPageInMegaBytes` <a name="ResetMaxContentSizePerPageInMegaBytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxContentSizePerPageInMegaBytes"></a>

```csharp
private void ResetMaxContentSizePerPageInMegaBytes()
```

##### `ResetMaxLinksPerPage` <a name="ResetMaxLinksPerPage" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxLinksPerPage"></a>

```csharp
private void ResetMaxLinksPerPage()
```

##### `ResetMaxUrlsPerMinuteCrawlRate` <a name="ResetMaxUrlsPerMinuteCrawlRate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxUrlsPerMinuteCrawlRate"></a>

```csharp
private void ResetMaxUrlsPerMinuteCrawlRate()
```

##### `ResetProxyConfiguration` <a name="ResetProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetProxyConfiguration"></a>

```csharp
private void ResetProxyConfiguration()
```

##### `ResetUrlExclusionPatterns` <a name="ResetUrlExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlExclusionPatterns"></a>

```csharp
private void ResetUrlExclusionPatterns()
```

##### `ResetUrlInclusionPatterns` <a name="ResetUrlInclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlInclusionPatterns"></a>

```csharp
private void ResetUrlInclusionPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urls">Urls</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepthInput">CrawlDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytesInput">MaxContentSizePerPageInMegaBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPageInput">MaxLinksPerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRateInput">MaxUrlsPerMinuteCrawlRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfigurationInput">ProxyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatternsInput">UrlExclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatternsInput">UrlInclusionPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlsInput">UrlsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepth">CrawlDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytes">MaxContentSizePerPageInMegaBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPage">MaxLinksPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRate">MaxUrlsPerMinuteCrawlRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatterns">UrlExclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatterns">UrlInclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `ProxyConfiguration`<sup>Required</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference ProxyConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference</a>

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urls"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference Urls { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference</a>

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

---

##### `CrawlDepthInput`<sup>Optional</sup> <a name="CrawlDepthInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepthInput"></a>

```csharp
public double CrawlDepthInput { get; }
```

- *Type:* double

---

##### `MaxContentSizePerPageInMegaBytesInput`<sup>Optional</sup> <a name="MaxContentSizePerPageInMegaBytesInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytesInput"></a>

```csharp
public double MaxContentSizePerPageInMegaBytesInput { get; }
```

- *Type:* double

---

##### `MaxLinksPerPageInput`<sup>Optional</sup> <a name="MaxLinksPerPageInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPageInput"></a>

```csharp
public double MaxLinksPerPageInput { get; }
```

- *Type:* double

---

##### `MaxUrlsPerMinuteCrawlRateInput`<sup>Optional</sup> <a name="MaxUrlsPerMinuteCrawlRateInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRateInput"></a>

```csharp
public double MaxUrlsPerMinuteCrawlRateInput { get; }
```

- *Type:* double

---

##### `ProxyConfigurationInput`<sup>Optional</sup> <a name="ProxyConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration ProxyConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

---

##### `UrlExclusionPatternsInput`<sup>Optional</sup> <a name="UrlExclusionPatternsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatternsInput"></a>

```csharp
public string[] UrlExclusionPatternsInput { get; }
```

- *Type:* string[]

---

##### `UrlInclusionPatternsInput`<sup>Optional</sup> <a name="UrlInclusionPatternsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatternsInput"></a>

```csharp
public string[] UrlInclusionPatternsInput { get; }
```

- *Type:* string[]

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlsInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrls UrlsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

---

##### `CrawlDepth`<sup>Required</sup> <a name="CrawlDepth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepth"></a>

```csharp
public double CrawlDepth { get; }
```

- *Type:* double

---

##### `MaxContentSizePerPageInMegaBytes`<sup>Required</sup> <a name="MaxContentSizePerPageInMegaBytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytes"></a>

```csharp
public double MaxContentSizePerPageInMegaBytes { get; }
```

- *Type:* double

---

##### `MaxLinksPerPage`<sup>Required</sup> <a name="MaxLinksPerPage" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPage"></a>

```csharp
public double MaxLinksPerPage { get; }
```

- *Type:* double

---

##### `MaxUrlsPerMinuteCrawlRate`<sup>Required</sup> <a name="MaxUrlsPerMinuteCrawlRate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRate"></a>

```csharp
public double MaxUrlsPerMinuteCrawlRate { get; }
```

- *Type:* double

---

##### `UrlExclusionPatterns`<sup>Required</sup> <a name="UrlExclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatterns"></a>

```csharp
public string[] UrlExclusionPatterns { get; }
```

- *Type:* string[]

---

##### `UrlInclusionPatterns`<sup>Required</sup> <a name="UrlInclusionPatterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatterns"></a>

```csharp
public string[] UrlInclusionPatterns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration">PutSeedUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration">PutSiteMapsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSeedUrlConfiguration">ResetSeedUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSiteMapsConfiguration">ResetSiteMapsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSeedUrlConfiguration` <a name="PutSeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration"></a>

```csharp
private void PutSeedUrlConfiguration(KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

---

##### `PutSiteMapsConfiguration` <a name="PutSiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration"></a>

```csharp
private void PutSiteMapsConfiguration(KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

---

##### `ResetSeedUrlConfiguration` <a name="ResetSeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSeedUrlConfiguration"></a>

```csharp
private void ResetSeedUrlConfiguration()
```

##### `ResetSiteMapsConfiguration` <a name="ResetSiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSiteMapsConfiguration"></a>

```csharp
private void ResetSiteMapsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfiguration">SeedUrlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfiguration">SiteMapsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfigurationInput">SeedUrlConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfigurationInput">SiteMapsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SeedUrlConfiguration`<sup>Required</sup> <a name="SeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference SeedUrlConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference</a>

---

##### `SiteMapsConfiguration`<sup>Required</sup> <a name="SiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfiguration"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference SiteMapsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference</a>

---

##### `SeedUrlConfigurationInput`<sup>Optional</sup> <a name="SeedUrlConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration SeedUrlConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

---

##### `SiteMapsConfigurationInput`<sup>Optional</sup> <a name="SiteMapsConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfigurationInput"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration SiteMapsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resetWebCrawlerMode">ResetWebCrawlerMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWebCrawlerMode` <a name="ResetWebCrawlerMode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resetWebCrawlerMode"></a>

```csharp
private void ResetWebCrawlerMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrlsInput">SeedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerModeInput">WebCrawlerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrls">SeedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerMode">WebCrawlerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SeedUrlsInput`<sup>Optional</sup> <a name="SeedUrlsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrlsInput"></a>

```csharp
public string[] SeedUrlsInput { get; }
```

- *Type:* string[]

---

##### `WebCrawlerModeInput`<sup>Optional</sup> <a name="WebCrawlerModeInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerModeInput"></a>

```csharp
public string WebCrawlerModeInput { get; }
```

- *Type:* string

---

##### `SeedUrls`<sup>Required</sup> <a name="SeedUrls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrls"></a>

```csharp
public string[] SeedUrls { get; }
```

- *Type:* string[]

---

##### `WebCrawlerMode`<sup>Required</sup> <a name="WebCrawlerMode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerMode"></a>

```csharp
public string WebCrawlerMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMapsInput">SiteMapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMaps">SiteMaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SiteMapsInput`<sup>Optional</sup> <a name="SiteMapsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMapsInput"></a>

```csharp
public string[] SiteMapsInput { get; }
```

- *Type:* string[]

---

##### `SiteMaps`<sup>Required</sup> <a name="SiteMaps" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMaps"></a>

```csharp
public string[] SiteMaps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetLongValue"></a>

```csharp
private void ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringListValue"></a>

```csharp
private void ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValue">DateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValue">LongValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```csharp
public string DateValueInput { get; }
```

- *Type:* string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValueInput"></a>

```csharp
public double LongValueInput { get; }
```

- *Type:* double

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```csharp
public string[] StringListValueInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValue"></a>

```csharp
public string DateValue { get; }
```

- *Type:* string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValue"></a>

```csharp
public double LongValue { get; }
```

- *Type:* double

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue">PutConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetConditionOnValue">ResetConditionOnValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionOnValue` <a name="PutConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue"></a>

```csharp
private void PutConditionOnValue(KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

---

##### `ResetConditionOnValue` <a name="ResetConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetConditionOnValue"></a>

```csharp
private void ResetConditionOnValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKeyInput">ConditionDocumentAttributeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValueInput">ConditionOnValueInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionOnValue`<sup>Required</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference ConditionOnValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference</a>

---

##### `ConditionDocumentAttributeKeyInput`<sup>Optional</sup> <a name="ConditionDocumentAttributeKeyInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```csharp
public string ConditionDocumentAttributeKeyInput { get; }
```

- *Type:* string

---

##### `ConditionOnValueInput`<sup>Optional</sup> <a name="ConditionOnValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValueInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue ConditionOnValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```csharp
private KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentDeletion">ResetDocumentContentDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition"></a>

```csharp
private void PutCondition(KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget"></a>

```csharp
private void PutTarget(KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDocumentContentDeletion` <a name="ResetDocumentContentDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentDeletion"></a>

```csharp
private void ResetDocumentContentDeletion()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletionInput">DocumentContentDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletion">DocumentContentDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `DocumentContentDeletionInput`<sup>Optional</sup> <a name="DocumentContentDeletionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletionInput"></a>

```csharp
public object DocumentContentDeletionInput { get; }
```

- *Type:* object

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `DocumentContentDeletion`<sup>Required</sup> <a name="DocumentContentDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletion"></a>

```csharp
public object DocumentContentDeletion { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue">PutTargetDocumentAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeKey">ResetTargetDocumentAttributeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValue">ResetTargetDocumentAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValueDeletion">ResetTargetDocumentAttributeValueDeletion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetDocumentAttributeValue` <a name="PutTargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue"></a>

```csharp
private void PutTargetDocumentAttributeValue(KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

---

##### `ResetTargetDocumentAttributeKey` <a name="ResetTargetDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeKey"></a>

```csharp
private void ResetTargetDocumentAttributeKey()
```

##### `ResetTargetDocumentAttributeValue` <a name="ResetTargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValue"></a>

```csharp
private void ResetTargetDocumentAttributeValue()
```

##### `ResetTargetDocumentAttributeValueDeletion` <a name="ResetTargetDocumentAttributeValueDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValueDeletion"></a>

```csharp
private void ResetTargetDocumentAttributeValueDeletion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValue">TargetDocumentAttributeValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKeyInput">TargetDocumentAttributeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletionInput">TargetDocumentAttributeValueDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueInput">TargetDocumentAttributeValueInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKey">TargetDocumentAttributeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletion">TargetDocumentAttributeValueDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetDocumentAttributeValue`<sup>Required</sup> <a name="TargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference TargetDocumentAttributeValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference</a>

---

##### `TargetDocumentAttributeKeyInput`<sup>Optional</sup> <a name="TargetDocumentAttributeKeyInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKeyInput"></a>

```csharp
public string TargetDocumentAttributeKeyInput { get; }
```

- *Type:* string

---

##### `TargetDocumentAttributeValueDeletionInput`<sup>Optional</sup> <a name="TargetDocumentAttributeValueDeletionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletionInput"></a>

```csharp
public object TargetDocumentAttributeValueDeletionInput { get; }
```

- *Type:* object

---

##### `TargetDocumentAttributeValueInput`<sup>Optional</sup> <a name="TargetDocumentAttributeValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue TargetDocumentAttributeValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

---

##### `TargetDocumentAttributeKey`<sup>Required</sup> <a name="TargetDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKey"></a>

```csharp
public string TargetDocumentAttributeKey { get; }
```

- *Type:* string

---

##### `TargetDocumentAttributeValueDeletion`<sup>Required</sup> <a name="TargetDocumentAttributeValueDeletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletion"></a>

```csharp
public object TargetDocumentAttributeValueDeletion { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetLongValue"></a>

```csharp
private void ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringListValue"></a>

```csharp
private void ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValue">DateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValue">LongValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValueInput"></a>

```csharp
public string DateValueInput { get; }
```

- *Type:* string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValueInput"></a>

```csharp
public double LongValueInput { get; }
```

- *Type:* double

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValueInput"></a>

```csharp
public string[] StringListValueInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValue"></a>

```csharp
public string DateValue { get; }
```

- *Type:* string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValue"></a>

```csharp
public double LongValue { get; }
```

- *Type:* double

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations">PutInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration">PutPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration">PutPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations">ResetInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration">ResetPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration">ResetPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInlineConfigurations` <a name="PutInlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations"></a>

```csharp
private void PutInlineConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations.parameter.value"></a>

- *Type:* object

---

##### `PutPostExtractionHookConfiguration` <a name="PutPostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration"></a>

```csharp
private void PutPostExtractionHookConfiguration(KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `PutPreExtractionHookConfiguration` <a name="PutPreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration"></a>

```csharp
private void PutPreExtractionHookConfiguration(KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `ResetInlineConfigurations` <a name="ResetInlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations"></a>

```csharp
private void ResetInlineConfigurations()
```

##### `ResetPostExtractionHookConfiguration` <a name="ResetPostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration"></a>

```csharp
private void ResetPostExtractionHookConfiguration()
```

##### `ResetPreExtractionHookConfiguration` <a name="ResetPreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration"></a>

```csharp
private void ResetPreExtractionHookConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">InlineConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">PostExtractionHookConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">PreExtractionHookConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput">InlineConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput">PostExtractionHookConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput">PreExtractionHookConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InlineConfigurations`<sup>Required</sup> <a name="InlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList InlineConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `PostExtractionHookConfiguration`<sup>Required</sup> <a name="PostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference PostExtractionHookConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `PreExtractionHookConfiguration`<sup>Required</sup> <a name="PreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference PreExtractionHookConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `InlineConfigurationsInput`<sup>Optional</sup> <a name="InlineConfigurationsInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput"></a>

```csharp
public object InlineConfigurationsInput { get; }
```

- *Type:* object

---

##### `PostExtractionHookConfigurationInput`<sup>Optional</sup> <a name="PostExtractionHookConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration PostExtractionHookConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `PreExtractionHookConfigurationInput`<sup>Optional</sup> <a name="PreExtractionHookConfigurationInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration PreExtractionHookConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue"></a>

```csharp
private void ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue"></a>

```csharp
private void ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue">DateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue">LongValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```csharp
public string DateValueInput { get; }
```

- *Type:* string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput"></a>

```csharp
public double LongValueInput { get; }
```

- *Type:* double

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```csharp
public string[] StringListValueInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue"></a>

```csharp
public string DateValue { get; }
```

- *Type:* string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue"></a>

```csharp
public double LongValue { get; }
```

- *Type:* double

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue">PutConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue">ResetConditionOnValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionOnValue` <a name="PutConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue"></a>

```csharp
private void PutConditionOnValue(KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `ResetConditionOnValue` <a name="ResetConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue"></a>

```csharp
private void ResetConditionOnValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput">ConditionDocumentAttributeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput">ConditionOnValueInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionOnValue`<sup>Required</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference ConditionOnValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a>

---

##### `ConditionDocumentAttributeKeyInput`<sup>Optional</sup> <a name="ConditionDocumentAttributeKeyInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```csharp
public string ConditionDocumentAttributeKeyInput { get; }
```

- *Type:* string

---

##### `ConditionOnValueInput`<sup>Optional</sup> <a name="ConditionOnValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition">PutInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition">ResetInvocationCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvocationCondition` <a name="PutInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```csharp
private void PutInvocationCondition(KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `ResetInvocationCondition` <a name="ResetInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```csharp
private void ResetInvocationCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput">InvocationConditionInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference InvocationCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `InvocationConditionInput`<sup>Optional</sup> <a name="InvocationConditionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition InvocationConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue"></a>

```csharp
private void ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue"></a>

```csharp
private void ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue">DateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue">LongValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```csharp
public string DateValueInput { get; }
```

- *Type:* string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput"></a>

```csharp
public double LongValueInput { get; }
```

- *Type:* double

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```csharp
public string[] StringListValueInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue"></a>

```csharp
public string DateValue { get; }
```

- *Type:* string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue"></a>

```csharp
public double LongValue { get; }
```

- *Type:* double

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue"></a>

```csharp
public string[] StringListValue { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue">PutConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue">ResetConditionOnValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionOnValue` <a name="PutConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue"></a>

```csharp
private void PutConditionOnValue(KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `ResetConditionOnValue` <a name="ResetConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue"></a>

```csharp
private void ResetConditionOnValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue">ConditionOnValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput">ConditionDocumentAttributeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput">ConditionOnValueInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey">ConditionDocumentAttributeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionOnValue`<sup>Required</sup> <a name="ConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference ConditionOnValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a>

---

##### `ConditionDocumentAttributeKeyInput`<sup>Optional</sup> <a name="ConditionDocumentAttributeKeyInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```csharp
public string ConditionDocumentAttributeKeyInput { get; }
```

- *Type:* string

---

##### `ConditionOnValueInput`<sup>Optional</sup> <a name="ConditionOnValueInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue ConditionOnValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ConditionDocumentAttributeKey`<sup>Required</sup> <a name="ConditionDocumentAttributeKey" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```csharp
public string ConditionDocumentAttributeKey { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition">PutInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition">ResetInvocationCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvocationCondition` <a name="PutInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```csharp
private void PutInvocationCondition(KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `ResetInvocationCondition` <a name="ResetInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```csharp
private void ResetInvocationCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput">InvocationConditionInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference InvocationCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `InvocationConditionInput`<sup>Optional</sup> <a name="InvocationConditionInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition InvocationConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### KendraDataSourceTimeoutsOutputReference <a name="KendraDataSourceTimeoutsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraDataSourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



