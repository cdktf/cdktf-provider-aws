# `dataAwsResourcegroupstaggingapiResources` Submodule <a name="`dataAwsResourcegroupstaggingapiResources` Submodule" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiResources <a name="DataAwsResourcegroupstaggingapiResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources aws_resourcegroupstaggingapi_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResources(Construct Scope, string Id, DataAwsResourcegroupstaggingapiResourcesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig">DataAwsResourcegroupstaggingapiResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig">DataAwsResourcegroupstaggingapiResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter">PutTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetExcludeCompliantResources">ResetExcludeCompliantResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetIncludeComplianceDetails">ResetIncludeComplianceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceArnList">ResetResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceTypeFilters">ResetResourceTypeFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetTagFilter">ResetTagFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTagFilter` <a name="PutTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter"></a>

```csharp
private void PutTagFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.putTagFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetExcludeCompliantResources` <a name="ResetExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetExcludeCompliantResources"></a>

```csharp
private void ResetExcludeCompliantResources()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeComplianceDetails` <a name="ResetIncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetIncludeComplianceDetails"></a>

```csharp
private void ResetIncludeComplianceDetails()
```

##### `ResetResourceArnList` <a name="ResetResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceArnList"></a>

```csharp
private void ResetResourceArnList()
```

##### `ResetResourceTypeFilters` <a name="ResetResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetResourceTypeFilters"></a>

```csharp
private void ResetResourceTypeFilters()
```

##### `ResetTagFilter` <a name="ResetTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.resetTagFilter"></a>

```csharp
private void ResetTagFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsResourcegroupstaggingapiResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsResourcegroupstaggingapiResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsResourcegroupstaggingapiResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTagMappingList">ResourceTagMappingList</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList">DataAwsResourcegroupstaggingapiResourcesTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResourcesInput">ExcludeCompliantResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetailsInput">IncludeComplianceDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnListInput">ResourceArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFiltersInput">ResourceTypeFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilterInput">TagFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResources">ExcludeCompliantResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetails">IncludeComplianceDetails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnList">ResourceArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFilters">ResourceTypeFilters</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ResourceTagMappingList`<sup>Required</sup> <a name="ResourceTagMappingList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTagMappingList"></a>

```csharp
public DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList ResourceTagMappingList { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList</a>

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilter"></a>

```csharp
public DataAwsResourcegroupstaggingapiResourcesTagFilterList TagFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList">DataAwsResourcegroupstaggingapiResourcesTagFilterList</a>

---

##### `ExcludeCompliantResourcesInput`<sup>Optional</sup> <a name="ExcludeCompliantResourcesInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResourcesInput"></a>

```csharp
public object ExcludeCompliantResourcesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeComplianceDetailsInput`<sup>Optional</sup> <a name="IncludeComplianceDetailsInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetailsInput"></a>

```csharp
public object IncludeComplianceDetailsInput { get; }
```

- *Type:* object

---

##### `ResourceArnListInput`<sup>Optional</sup> <a name="ResourceArnListInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnListInput"></a>

```csharp
public string[] ResourceArnListInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeFiltersInput`<sup>Optional</sup> <a name="ResourceTypeFiltersInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFiltersInput"></a>

```csharp
public string[] ResourceTypeFiltersInput { get; }
```

- *Type:* string[]

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tagFilterInput"></a>

```csharp
public object TagFilterInput { get; }
```

- *Type:* object

---

##### `ExcludeCompliantResources`<sup>Required</sup> <a name="ExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.excludeCompliantResources"></a>

```csharp
public object ExcludeCompliantResources { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeComplianceDetails`<sup>Required</sup> <a name="IncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.includeComplianceDetails"></a>

```csharp
public object IncludeComplianceDetails { get; }
```

- *Type:* object

---

##### `ResourceArnList`<sup>Required</sup> <a name="ResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceArnList"></a>

```csharp
public string[] ResourceArnList { get; }
```

- *Type:* string[]

---

##### `ResourceTypeFilters`<sup>Required</sup> <a name="ResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.resourceTypeFilters"></a>

```csharp
public string[] ResourceTypeFilters { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiResourcesConfig <a name="DataAwsResourcegroupstaggingapiResourcesConfig" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ExcludeCompliantResources = null,
    string Id = null,
    object IncludeComplianceDetails = null,
    string[] ResourceArnList = null,
    string[] ResourceTypeFilters = null,
    object TagFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.excludeCompliantResources">ExcludeCompliantResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.includeComplianceDetails">IncludeComplianceDetails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceArnList">ResourceArnList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceTypeFilters">ResourceTypeFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.tagFilter">TagFilter</a></code> | <code>object</code> | tag_filter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExcludeCompliantResources`<sup>Optional</sup> <a name="ExcludeCompliantResources" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.excludeCompliantResources"></a>

```csharp
public object ExcludeCompliantResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#id DataAwsResourcegroupstaggingapiResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeComplianceDetails`<sup>Optional</sup> <a name="IncludeComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.includeComplianceDetails"></a>

```csharp
public object IncludeComplianceDetails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}.

---

##### `ResourceArnList`<sup>Optional</sup> <a name="ResourceArnList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceArnList"></a>

```csharp
public string[] ResourceArnList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}.

---

##### `ResourceTypeFilters`<sup>Optional</sup> <a name="ResourceTypeFilters" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.resourceTypeFilters"></a>

```csharp
public string[] ResourceTypeFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}.

---

##### `TagFilter`<sup>Optional</sup> <a name="TagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesConfig.property.tagFilter"></a>

```csharp
public object TagFilter { get; set; }
```

- *Type:* object

tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}

---

### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList {

};
```


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails {

};
```


### DataAwsResourcegroupstaggingapiResourcesTagFilter <a name="DataAwsResourcegroupstaggingapiResourcesTagFilter" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesTagFilter {
    string Key,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#key DataAwsResourcegroupstaggingapiResources#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources#values DataAwsResourcegroupstaggingapiResources#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get"></a>

```csharp
private DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.keysWithNoncompliantValues">KeysWithNoncompliantValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.nonCompliantKeys">NonCompliantKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.complianceStatus"></a>

```csharp
public IResolvable ComplianceStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeysWithNoncompliantValues`<sup>Required</sup> <a name="KeysWithNoncompliantValues" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.keysWithNoncompliantValues"></a>

```csharp
public string[] KeysWithNoncompliantValues { get; }
```

- *Type:* string[]

---

##### `NonCompliantKeys`<sup>Required</sup> <a name="NonCompliantKeys" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.nonCompliantKeys"></a>

```csharp
public string[] NonCompliantKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails</a>

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get"></a>

```csharp
private DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.complianceDetails">ComplianceDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceDetails`<sup>Required</sup> <a name="ComplianceDetails" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.complianceDetails"></a>

```csharp
public DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList ComplianceDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetailsList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListOutputReference.property.internalValue"></a>

```csharp
public DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList">DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList</a>

---


### DataAwsResourcegroupstaggingapiResourcesTagFilterList <a name="DataAwsResourcegroupstaggingapiResourcesTagFilterList" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesTagFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get"></a>

```csharp
private DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference <a name="DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourcegroupstaggingapiResources.DataAwsResourcegroupstaggingapiResourcesTagFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



