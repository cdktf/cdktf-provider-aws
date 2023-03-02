# `dataAwsSsmPatchBaseline` Submodule <a name="`dataAwsSsmPatchBaseline` Submodule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaseline <a name="DataAwsSsmPatchBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaseline(Construct Scope, string Id, DataAwsSsmPatchBaselineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline">ResetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultBaseline` <a name="ResetDefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline"></a>

```csharp
private void ResetDefaultBaseline()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmPatchBaseline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmPatchBaseline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmPatchBaseline.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule">ApprovalRule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches">ApprovedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter">GlobalFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches">RejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput">DefaultBaselineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline">DefaultBaseline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner">Owner</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalRule`<sup>Required</sup> <a name="ApprovalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvalRule"></a>

```csharp
public DataAwsSsmPatchBaselineApprovalRuleList ApprovalRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList">DataAwsSsmPatchBaselineApprovalRuleList</a>

---

##### `ApprovedPatches`<sup>Required</sup> <a name="ApprovedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatches"></a>

```csharp
public string[] ApprovedPatches { get; }
```

- *Type:* string[]

---

##### `ApprovedPatchesComplianceLevel`<sup>Required</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```csharp
public string ApprovedPatchesComplianceLevel { get; }
```

- *Type:* string

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Required</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```csharp
public IResolvable ApprovedPatchesEnableNonSecurity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GlobalFilter`<sup>Required</sup> <a name="GlobalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.globalFilter"></a>

```csharp
public DataAwsSsmPatchBaselineGlobalFilterList GlobalFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList">DataAwsSsmPatchBaselineGlobalFilterList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RejectedPatches`<sup>Required</sup> <a name="RejectedPatches" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatches"></a>

```csharp
public string[] RejectedPatches { get; }
```

- *Type:* string[]

---

##### `RejectedPatchesAction`<sup>Required</sup> <a name="RejectedPatchesAction" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.rejectedPatchesAction"></a>

```csharp
public string RejectedPatchesAction { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.source"></a>

```csharp
public DataAwsSsmPatchBaselineSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList">DataAwsSsmPatchBaselineSourceList</a>

---

##### `DefaultBaselineInput`<sup>Optional</sup> <a name="DefaultBaselineInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput"></a>

```csharp
public object DefaultBaselineInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline"></a>

```csharp
public object DefaultBaseline { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselineApprovalRule <a name="DataAwsSsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRule {

};
```


### DataAwsSsmPatchBaselineApprovalRulePatchFilter <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRulePatchFilter {

};
```


### DataAwsSsmPatchBaselineConfig <a name="DataAwsSsmPatchBaselineConfig" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Owner,
    object DefaultBaseline = null,
    string Id = null,
    string NamePrefix = null,
    string OperatingSystem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline">DefaultBaseline</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}.

---

##### `DefaultBaseline`<sup>Optional</sup> <a name="DefaultBaseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline"></a>

```csharp
public object DefaultBaseline { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}.

---

### DataAwsSsmPatchBaselineGlobalFilter <a name="DataAwsSsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineGlobalFilter {

};
```


### DataAwsSsmPatchBaselineSource <a name="DataAwsSsmPatchBaselineSource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineSource {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselineApprovalRuleList <a name="DataAwsSsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get"></a>

```csharp
private DataAwsSsmPatchBaselineApprovalRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmPatchBaselineApprovalRuleOutputReference <a name="DataAwsSsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">ApproveAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">ApproveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">ComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">PatchFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproveAfterDays`<sup>Required</sup> <a name="ApproveAfterDays" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```csharp
public double ApproveAfterDays { get; }
```

- *Type:* double

---

##### `ApproveUntilDate`<sup>Required</sup> <a name="ApproveUntilDate" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```csharp
public string ApproveUntilDate { get; }
```

- *Type:* string

---

##### `ComplianceLevel`<sup>Required</sup> <a name="ComplianceLevel" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```csharp
public string ComplianceLevel { get; }
```

- *Type:* string

---

##### `EnableNonSecurity`<sup>Required</sup> <a name="EnableNonSecurity" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```csharp
public IResolvable EnableNonSecurity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PatchFilter`<sup>Required</sup> <a name="PatchFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```csharp
public DataAwsSsmPatchBaselineApprovalRulePatchFilterList PatchFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList">DataAwsSsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmPatchBaselineApprovalRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRule">DataAwsSsmPatchBaselineApprovalRule</a>

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterList <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRulePatchFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```csharp
private DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmPatchBaselineApprovalRulePatchFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineApprovalRulePatchFilter">DataAwsSsmPatchBaselineApprovalRulePatchFilter</a>

---


### DataAwsSsmPatchBaselineGlobalFilterList <a name="DataAwsSsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineGlobalFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get"></a>

```csharp
private DataAwsSsmPatchBaselineGlobalFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmPatchBaselineGlobalFilterOutputReference <a name="DataAwsSsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineGlobalFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmPatchBaselineGlobalFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineGlobalFilter">DataAwsSsmPatchBaselineGlobalFilter</a>

---


### DataAwsSsmPatchBaselineSourceList <a name="DataAwsSsmPatchBaselineSourceList" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get"></a>

```csharp
private DataAwsSsmPatchBaselineSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmPatchBaselineSourceOutputReference <a name="DataAwsSsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmPatchBaselineSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmPatchBaselineSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineSource">DataAwsSsmPatchBaselineSource</a>

---



