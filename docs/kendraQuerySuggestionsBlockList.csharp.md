# `kendraQuerySuggestionsBlockList` Submodule <a name="`kendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraQuerySuggestionsBlockList <a name="KendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockList(Construct Scope, string Id, KendraQuerySuggestionsBlockListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig">KendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path">PutSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSourceS3Path` <a name="PutSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path"></a>

```csharp
private void PutSourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts"></a>

```csharp
private void PutTimeouts(KendraQuerySuggestionsBlockListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraQuerySuggestionsBlockList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraQuerySuggestionsBlockList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraQuerySuggestionsBlockList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">QuerySuggestionsBlockListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path">SourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput">SourceS3PathInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `QuerySuggestionsBlockListId`<sup>Required</sup> <a name="QuerySuggestionsBlockListId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```csharp
public string QuerySuggestionsBlockListId { get; }
```

- *Type:* string

---

##### `SourceS3Path`<sup>Required</sup> <a name="SourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```csharp
public KendraQuerySuggestionsBlockListSourceS3PathOutputReference SourceS3Path { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts"></a>

```csharp
public KendraQuerySuggestionsBlockListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SourceS3PathInput`<sup>Optional</sup> <a name="SourceS3PathInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput"></a>

```csharp
public KendraQuerySuggestionsBlockListSourceS3Path SourceS3PathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraQuerySuggestionsBlockListConfig <a name="KendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockListConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IndexId,
    string Name,
    string RoleArn,
    KendraQuerySuggestionsBlockListSourceS3Path SourceS3Path,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KendraQuerySuggestionsBlockListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId">IndexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path">SourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | source_s3_path block. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}.

---

##### `SourceS3Path`<sup>Required</sup> <a name="SourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path"></a>

```csharp
public KendraQuerySuggestionsBlockListSourceS3Path SourceS3Path { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

source_s3_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts"></a>

```csharp
public KendraQuerySuggestionsBlockListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#timeouts KendraQuerySuggestionsBlockList#timeouts}

---

### KendraQuerySuggestionsBlockListSourceS3Path <a name="KendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockListSourceS3Path {
    string Bucket,
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}.

---

### KendraQuerySuggestionsBlockListTimeouts <a name="KendraQuerySuggestionsBlockListTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockListTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="KendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockListSourceS3PathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```csharp
public KendraQuerySuggestionsBlockListSourceS3Path InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---


### KendraQuerySuggestionsBlockListTimeoutsOutputReference <a name="KendraQuerySuggestionsBlockListTimeoutsOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraQuerySuggestionsBlockListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



