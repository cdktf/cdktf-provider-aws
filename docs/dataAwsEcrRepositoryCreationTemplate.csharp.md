# `dataAwsEcrRepositoryCreationTemplate` Submodule <a name="`dataAwsEcrRepositoryCreationTemplate` Submodule" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrRepositoryCreationTemplate <a name="DataAwsEcrRepositoryCreationTemplate" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template aws_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplate(Construct Scope, string Id, DataAwsEcrRepositoryCreationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig">DataAwsEcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig">DataAwsEcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrRepositoryCreationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrRepositoryCreationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrRepositoryCreationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrRepositoryCreationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcrRepositoryCreationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor">AppliedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability">ImageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilter">ImageTagMutabilityExclusionFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.appliedFor"></a>

```csharp
public string[] AppliedFor { get; }
```

- *Type:* string[]

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```csharp
public DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList">DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList</a>

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```csharp
public string ImageTagMutability { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilter`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilter" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilter"></a>

```csharp
public DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList ImageTagMutabilityExclusionFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList</a>

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```csharp
public string LifecyclePolicy { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `RepositoryPolicy`<sup>Required</sup> <a name="RepositoryPolicy" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```csharp
public string RepositoryPolicy { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrRepositoryCreationTemplateConfig <a name="DataAwsEcrRepositoryCreationTemplateConfig" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Prefix,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#prefix DataAwsEcrRepositoryCreationTemplate#prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#id DataAwsEcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#region DataAwsEcrRepositoryCreationTemplate#region}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/ecr_repository_creation_template#resource_tags DataAwsEcrRepositoryCreationTemplate#resource_tags}.

---

### DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration {

};
```


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get"></a>

```csharp
private DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsEcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get"></a>

```csharp
private DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference <a name="DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrRepositoryCreationTemplate.DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter">DataAwsEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilter</a>

---



