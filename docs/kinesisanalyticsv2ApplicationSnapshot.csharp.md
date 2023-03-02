# `kinesisanalyticsv2ApplicationSnapshot` Submodule <a name="`kinesisanalyticsv2ApplicationSnapshot` Submodule" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2ApplicationSnapshot <a name="Kinesisanalyticsv2ApplicationSnapshot" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Kinesisanalyticsv2ApplicationSnapshot(Construct Scope, string Id, Kinesisanalyticsv2ApplicationSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(Kinesisanalyticsv2ApplicationSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Kinesisanalyticsv2ApplicationSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Kinesisanalyticsv2ApplicationSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Kinesisanalyticsv2ApplicationSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId">ApplicationVersionId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp">SnapshotCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId"></a>

```csharp
public double ApplicationVersionId { get; }
```

- *Type:* double

---

##### `SnapshotCreationTimestamp`<sup>Required</sup> <a name="SnapshotCreationTimestamp" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp"></a>

```csharp
public string SnapshotCreationTimestamp { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts"></a>

```csharp
public Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2ApplicationSnapshotConfig <a name="Kinesisanalyticsv2ApplicationSnapshotConfig" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Kinesisanalyticsv2ApplicationSnapshotConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationName,
    string SnapshotName,
    string Id = null,
    Kinesisanalyticsv2ApplicationSnapshotTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts"></a>

```csharp
public Kinesisanalyticsv2ApplicationSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}

---

### Kinesisanalyticsv2ApplicationSnapshotTimeouts <a name="Kinesisanalyticsv2ApplicationSnapshotTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Kinesisanalyticsv2ApplicationSnapshotTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference <a name="Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



