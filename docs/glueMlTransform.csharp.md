# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktf/provider-aws.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransform(Construct Scope, string Id, GlueMlTransformConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables">PutInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInputRecordTables` <a name="PutInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```csharp
private void PutInputRecordTables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* object

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters"></a>

```csharp
private void PutParameters(GlueMlTransformParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueMlTransform.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueMlTransform.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueMlTransform.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount">LabelCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">InputRecordTablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```csharp
public GlueMlTransformInputRecordTablesList InputRecordTables { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList">GlueMlTransformInputRecordTablesList</a>

---

##### `LabelCount`<sup>Required</sup> <a name="LabelCount" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.labelCount"></a>

```csharp
public double LabelCount { get; }
```

- *Type:* double

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parameters"></a>

```csharp
public GlueMlTransformParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference">GlueMlTransformParametersOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.schema"></a>

```csharp
public GlueMlTransformSchemaList Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList">GlueMlTransformSchemaList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputRecordTablesInput`<sup>Optional</sup> <a name="InputRecordTablesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```csharp
public object InputRecordTablesInput { get; }
```

- *Type:* object

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.parametersInput"></a>

```csharp
public GlueMlTransformParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object InputRecordTables,
    string Name,
    GlueMlTransformParameters Parameters,
    string RoleArn,
    string Description = null,
    string GlueVersion = null,
    string Id = null,
    double MaxCapacity = null,
    double MaxRetries = null,
    double NumberOfWorkers = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double Timeout = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">InputRecordTables</a></code> | <code>object</code> | input_record_tables block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion">GlueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType">WorkerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```csharp
public object InputRecordTables { get; set; }
```

- *Type:* object

input_record_tables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.parameters"></a>

```csharp
public GlueMlTransformParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}.

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#id GlueMlTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}.

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}.

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformInputRecordTables {
    string DatabaseName,
    string TableName,
    string CatalogId = null,
    string ConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTables.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}.

---

### GlueMlTransformParameters <a name="GlueMlTransformParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformParameters {
    GlueMlTransformParametersFindMatchesParameters FindMatchesParameters,
    string TransformType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | find_matches_parameters block. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType">TransformType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}. |

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.findMatchesParameters"></a>

```csharp
public GlueMlTransformParametersFindMatchesParameters FindMatchesParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

find_matches_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters.property.transformType"></a>

```csharp
public string TransformType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}.

---

### GlueMlTransformParametersFindMatchesParameters <a name="GlueMlTransformParametersFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformParametersFindMatchesParameters {
    double AccuracyCostTradeOff = null,
    object EnforceProvidedLabels = null,
    double PrecisionRecallTradeOff = null,
    string PrimaryKeyColumnName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff">AccuracyCostTradeOff</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff">PrecisionRecallTradeOff</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}. |

---

##### `AccuracyCostTradeOff`<sup>Optional</sup> <a name="AccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.accuracyCostTradeOff"></a>

```csharp
public double AccuracyCostTradeOff { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}.

---

##### `EnforceProvidedLabels`<sup>Optional</sup> <a name="EnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```csharp
public object EnforceProvidedLabels { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}.

---

##### `PrecisionRecallTradeOff`<sup>Optional</sup> <a name="PrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.precisionRecallTradeOff"></a>

```csharp
public double PrecisionRecallTradeOff { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}.

---

##### `PrimaryKeyColumnName`<sup>Optional</sup> <a name="PrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```csharp
public string PrimaryKeyColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}.

---

### GlueMlTransformSchema <a name="GlueMlTransformSchema" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformSchema {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesList <a name="GlueMlTransformInputRecordTablesList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformInputRecordTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get"></a>

```csharp
private GlueMlTransformInputRecordTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformInputRecordTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueMlTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformParametersFindMatchesParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformParametersFindMatchesParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff">ResetAccuracyCostTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">ResetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff">ResetPrecisionRecallTradeOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">ResetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccuracyCostTradeOff` <a name="ResetAccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeOff"></a>

```csharp
private void ResetAccuracyCostTradeOff()
```

##### `ResetEnforceProvidedLabels` <a name="ResetEnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```csharp
private void ResetEnforceProvidedLabels()
```

##### `ResetPrecisionRecallTradeOff` <a name="ResetPrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeOff"></a>

```csharp
private void ResetPrecisionRecallTradeOff()
```

##### `ResetPrimaryKeyColumnName` <a name="ResetPrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```csharp
private void ResetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput">AccuracyCostTradeOffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">EnforceProvidedLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput">PrecisionRecallTradeOffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">PrimaryKeyColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff">AccuracyCostTradeOff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff">PrecisionRecallTradeOff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccuracyCostTradeOffInput`<sup>Optional</sup> <a name="AccuracyCostTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOffInput"></a>

```csharp
public double AccuracyCostTradeOffInput { get; }
```

- *Type:* double

---

##### `EnforceProvidedLabelsInput`<sup>Optional</sup> <a name="EnforceProvidedLabelsInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```csharp
public object EnforceProvidedLabelsInput { get; }
```

- *Type:* object

---

##### `PrecisionRecallTradeOffInput`<sup>Optional</sup> <a name="PrecisionRecallTradeOffInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOffInput"></a>

```csharp
public double PrecisionRecallTradeOffInput { get; }
```

- *Type:* double

---

##### `PrimaryKeyColumnNameInput`<sup>Optional</sup> <a name="PrimaryKeyColumnNameInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```csharp
public string PrimaryKeyColumnNameInput { get; }
```

- *Type:* string

---

##### `AccuracyCostTradeOff`<sup>Required</sup> <a name="AccuracyCostTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeOff"></a>

```csharp
public double AccuracyCostTradeOff { get; }
```

- *Type:* double

---

##### `EnforceProvidedLabels`<sup>Required</sup> <a name="EnforceProvidedLabels" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```csharp
public object EnforceProvidedLabels { get; }
```

- *Type:* object

---

##### `PrecisionRecallTradeOff`<sup>Required</sup> <a name="PrecisionRecallTradeOff" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeOff"></a>

```csharp
public double PrecisionRecallTradeOff { get; }
```

- *Type:* double

---

##### `PrimaryKeyColumnName`<sup>Required</sup> <a name="PrimaryKeyColumnName" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```csharp
public string PrimaryKeyColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```csharp
public GlueMlTransformParametersFindMatchesParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformParametersOutputReference <a name="GlueMlTransformParametersOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters">PutFindMatchesParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFindMatchesParameters` <a name="PutFindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters"></a>

```csharp
private void PutFindMatchesParameters(GlueMlTransformParametersFindMatchesParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput">FindMatchesParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput">TransformTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType">TransformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParameters"></a>

```csharp
public GlueMlTransformParametersFindMatchesParametersOutputReference FindMatchesParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParametersOutputReference">GlueMlTransformParametersFindMatchesParametersOutputReference</a>

---

##### `FindMatchesParametersInput`<sup>Optional</sup> <a name="FindMatchesParametersInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```csharp
public GlueMlTransformParametersFindMatchesParameters FindMatchesParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersFindMatchesParameters">GlueMlTransformParametersFindMatchesParameters</a>

---

##### `TransformTypeInput`<sup>Optional</sup> <a name="TransformTypeInput" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformTypeInput"></a>

```csharp
public string TransformTypeInput { get; }
```

- *Type:* string

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.transformType"></a>

```csharp
public string TransformType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformParametersOutputReference.property.internalValue"></a>

```csharp
public GlueMlTransformParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformParameters">GlueMlTransformParameters</a>

---


### GlueMlTransformSchemaList <a name="GlueMlTransformSchemaList" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformSchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get"></a>

```csharp
private GlueMlTransformSchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GlueMlTransformSchemaOutputReference <a name="GlueMlTransformSchemaOutputReference" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueMlTransformSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchemaOutputReference.property.internalValue"></a>

```csharp
public GlueMlTransformSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueMlTransform.GlueMlTransformSchema">GlueMlTransformSchema</a>

---



