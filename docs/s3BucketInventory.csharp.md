# `s3BucketInventory` Submodule <a name="`s3BucketInventory` Submodule" id="@cdktf/provider-aws.s3BucketInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketInventory <a name="S3BucketInventory" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory aws_s3_bucket_inventory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventory(Construct Scope, string Id, S3BucketInventoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig">S3BucketInventoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig">S3BucketInventoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields">ResetOptionalFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination"></a>

```csharp
private void PutDestination(S3BucketInventoryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter"></a>

```csharp
private void PutFilter(S3BucketInventoryFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule"></a>

```csharp
private void PutSchedule(S3BucketInventorySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptionalFields` <a name="ResetOptionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields"></a>

```csharp
private void ResetOptionalFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketInventory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketInventory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketInventory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput">IncludedObjectVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput">OptionalFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination"></a>

```csharp
public S3BucketInventoryDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter"></a>

```csharp
public S3BucketInventoryFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule"></a>

```csharp
public S3BucketInventoryScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput"></a>

```csharp
public S3BucketInventoryDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput"></a>

```csharp
public S3BucketInventoryFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludedObjectVersionsInput`<sup>Optional</sup> <a name="IncludedObjectVersionsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput"></a>

```csharp
public string IncludedObjectVersionsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionalFieldsInput`<sup>Optional</sup> <a name="OptionalFieldsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput"></a>

```csharp
public string[] OptionalFieldsInput { get; }
```

- *Type:* string[]

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput"></a>

```csharp
public S3BucketInventorySchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions"></a>

```csharp
public string IncludedObjectVersions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketInventoryConfig <a name="S3BucketInventoryConfig" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    S3BucketInventoryDestination Destination,
    string IncludedObjectVersions,
    string Name,
    S3BucketInventorySchedule Schedule,
    object Enabled = null,
    S3BucketInventoryFilter Filter = null,
    string Id = null,
    string[] OptionalFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination"></a>

```csharp
public S3BucketInventoryDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions"></a>

```csharp
public string IncludedObjectVersions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule"></a>

```csharp
public S3BucketInventorySchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter"></a>

```csharp
public S3BucketInventoryFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OptionalFields`<sup>Optional</sup> <a name="OptionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

### S3BucketInventoryDestination <a name="S3BucketInventoryDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestination {
    S3BucketInventoryDestinationBucket Bucket
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | bucket block. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket"></a>

```csharp
public S3BucketInventoryDestinationBucket Bucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}

---

### S3BucketInventoryDestinationBucket <a name="S3BucketInventoryDestinationBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucket {
    string BucketArn,
    string Format,
    string AccountId = null,
    S3BucketInventoryDestinationBucketEncryption Encryption = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#encryption S3BucketInventory#encryption}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventoryDestinationBucketEncryption <a name="S3BucketInventoryDestinationBucketEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryption {
    S3BucketInventoryDestinationBucketEncryptionSseKms SseKms = null,
    S3BucketInventoryDestinationBucketEncryptionSseS3 SseS3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms">SseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | sse_kms block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3">SseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | sse_s3 block. |

---

##### `SseKms`<sup>Optional</sup> <a name="SseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseKms SseKms { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

sse_kms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}

---

##### `SseS3`<sup>Optional</sup> <a name="SseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseS3 SseS3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

sse_s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}

---

### S3BucketInventoryDestinationBucketEncryptionSseKms <a name="S3BucketInventoryDestinationBucketEncryptionSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryptionSseKms {
    string KeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}.

---

### S3BucketInventoryDestinationBucketEncryptionSseS3 <a name="S3BucketInventoryDestinationBucketEncryptionSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryptionSseS3 {

};
```


### S3BucketInventoryFilter <a name="S3BucketInventoryFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryFilter {
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventorySchedule <a name="S3BucketInventorySchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventorySchedule {
    string Frequency
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketInventoryDestinationBucketEncryptionOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms">PutSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3">PutSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms">ResetSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3">ResetSseS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSseKms` <a name="PutSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms"></a>

```csharp
private void PutSseKms(S3BucketInventoryDestinationBucketEncryptionSseKms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `PutSseS3` <a name="PutSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3"></a>

```csharp
private void PutSseS3(S3BucketInventoryDestinationBucketEncryptionSseS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `ResetSseKms` <a name="ResetSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms"></a>

```csharp
private void ResetSseKms()
```

##### `ResetSseS3` <a name="ResetSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3"></a>

```csharp
private void ResetSseS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms">SseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3">SseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput">SseKmsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input">SseS3Input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SseKms`<sup>Required</sup> <a name="SseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference SseKms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a>

---

##### `SseS3`<sup>Required</sup> <a name="SseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference SseS3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a>

---

##### `SseKmsInput`<sup>Optional</sup> <a name="SseKmsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseKms SseKmsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `SseS3Input`<sup>Optional</sup> <a name="SseS3Input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseS3 SseS3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseKms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionSseS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---


### S3BucketInventoryDestinationBucketOutputReference <a name="S3BucketInventoryDestinationBucketOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(S3BucketInventoryDestinationBucketEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput"></a>

```csharp
public S3BucketInventoryDestinationBucketEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryDestinationBucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


### S3BucketInventoryDestinationOutputReference <a name="S3BucketInventoryDestinationOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket">PutBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBucket` <a name="PutBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket"></a>

```csharp
private void PutBucket(S3BucketInventoryDestinationBucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket"></a>

```csharp
public S3BucketInventoryDestinationBucketOutputReference Bucket { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput"></a>

```csharp
public S3BucketInventoryDestinationBucket BucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---


### S3BucketInventoryFilterOutputReference <a name="S3BucketInventoryFilterOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventoryFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---


### S3BucketInventoryScheduleOutputReference <a name="S3BucketInventoryScheduleOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketInventoryScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue"></a>

```csharp
public S3BucketInventorySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---



