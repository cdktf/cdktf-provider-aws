# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaseline(Construct Scope, string Id, SsmPatchBaselineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule">PutApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter">PutGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule">ResetApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">ResetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">ResetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">ResetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter">ResetGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">ResetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">ResetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApprovalRule` <a name="PutApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule"></a>

```csharp
private void PutApprovalRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule.parameter.value"></a>

- *Type:* object

---

##### `PutGlobalFilter` <a name="PutGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter"></a>

```csharp
private void PutGlobalFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource.parameter.value"></a>

- *Type:* object

---

##### `ResetApprovalRule` <a name="ResetApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule"></a>

```csharp
private void ResetApprovalRule()
```

##### `ResetApprovedPatches` <a name="ResetApprovedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```csharp
private void ResetApprovedPatches()
```

##### `ResetApprovedPatchesComplianceLevel` <a name="ResetApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```csharp
private void ResetApprovedPatchesComplianceLevel()
```

##### `ResetApprovedPatchesEnableNonSecurity` <a name="ResetApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```csharp
private void ResetApprovedPatchesEnableNonSecurity()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlobalFilter` <a name="ResetGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter"></a>

```csharp
private void ResetGlobalFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetRejectedPatches` <a name="ResetRejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```csharp
private void ResetRejectedPatches()
```

##### `ResetRejectedPatchesAction` <a name="ResetRejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```csharp
private void ResetRejectedPatchesAction()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmPatchBaseline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmPatchBaseline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmPatchBaseline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule">ApprovalRule</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter">GlobalFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput">ApprovalRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">ApprovedPatchesComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">ApprovedPatchesEnableNonSecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">ApprovedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput">GlobalFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">RejectedPatchesActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">RejectedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">ApprovedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">RejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalRule`<sup>Required</sup> <a name="ApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule"></a>

```csharp
public SsmPatchBaselineApprovalRuleList ApprovalRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `GlobalFilter`<sup>Required</sup> <a name="GlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter"></a>

```csharp
public SsmPatchBaselineGlobalFilterList GlobalFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source"></a>

```csharp
public SsmPatchBaselineSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a>

---

##### `ApprovalRuleInput`<sup>Optional</sup> <a name="ApprovalRuleInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput"></a>

```csharp
public object ApprovalRuleInput { get; }
```

- *Type:* object

---

##### `ApprovedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```csharp
public string ApprovedPatchesComplianceLevelInput { get; }
```

- *Type:* string

---

##### `ApprovedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```csharp
public object ApprovedPatchesEnableNonSecurityInput { get; }
```

- *Type:* object

---

##### `ApprovedPatchesInput`<sup>Optional</sup> <a name="ApprovedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```csharp
public string[] ApprovedPatchesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalFilterInput`<sup>Optional</sup> <a name="GlobalFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput"></a>

```csharp
public object GlobalFilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `RejectedPatchesActionInput`<sup>Optional</sup> <a name="RejectedPatchesActionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```csharp
public string RejectedPatchesActionInput { get; }
```

- *Type:* string

---

##### `RejectedPatchesInput`<sup>Optional</sup> <a name="RejectedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```csharp
public string[] RejectedPatchesInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApprovedPatches`<sup>Required</sup> <a name="ApprovedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```csharp
public string[] ApprovedPatches { get; }
```

- *Type:* string[]

---

##### `ApprovedPatchesComplianceLevel`<sup>Required</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```csharp
public string ApprovedPatchesComplianceLevel { get; }
```

- *Type:* string

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Required</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```csharp
public object ApprovedPatchesEnableNonSecurity { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `RejectedPatches`<sup>Required</sup> <a name="RejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```csharp
public string[] RejectedPatches { get; }
```

- *Type:* string[]

---

##### `RejectedPatchesAction`<sup>Required</sup> <a name="RejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```csharp
public string RejectedPatchesAction { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRule <a name="SsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRule {
    object PatchFilter,
    double ApproveAfterDays = null,
    string ApproveUntilDate = null,
    string ComplianceLevel = null,
    object EnableNonSecurity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter">PatchFilter</a></code> | <code>object</code> | patch_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays">ApproveAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate">ApproveUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel">ComplianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |

---

##### `PatchFilter`<sup>Required</sup> <a name="PatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter"></a>

```csharp
public object PatchFilter { get; set; }
```

- *Type:* object

patch_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}

---

##### `ApproveAfterDays`<sup>Optional</sup> <a name="ApproveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays"></a>

```csharp
public double ApproveAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `ApproveUntilDate`<sup>Optional</sup> <a name="ApproveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate"></a>

```csharp
public string ApproveUntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `ComplianceLevel`<sup>Optional</sup> <a name="ComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel"></a>

```csharp
public string ComplianceLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `EnableNonSecurity`<sup>Optional</sup> <a name="EnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity"></a>

```csharp
public object EnableNonSecurity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

### SsmPatchBaselineApprovalRulePatchFilter <a name="SsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRulePatchFilter {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ApprovalRule = null,
    string[] ApprovedPatches = null,
    string ApprovedPatchesComplianceLevel = null,
    object ApprovedPatchesEnableNonSecurity = null,
    string Description = null,
    object GlobalFilter = null,
    string Id = null,
    string OperatingSystem = null,
    string[] RejectedPatches = null,
    string RejectedPatchesAction = null,
    object Source = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule">ApprovalRule</a></code> | <code>object</code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">ApprovedPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter">GlobalFilter</a></code> | <code>object</code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">RejectedPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source">Source</a></code> | <code>object</code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `ApprovalRule`<sup>Optional</sup> <a name="ApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule"></a>

```csharp
public object ApprovalRule { get; set; }
```

- *Type:* object

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `ApprovedPatches`<sup>Optional</sup> <a name="ApprovedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```csharp
public string[] ApprovedPatches { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `ApprovedPatchesComplianceLevel`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```csharp
public string ApprovedPatchesComplianceLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```csharp
public object ApprovedPatchesEnableNonSecurity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `GlobalFilter`<sup>Optional</sup> <a name="GlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter"></a>

```csharp
public object GlobalFilter { get; set; }
```

- *Type:* object

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `RejectedPatches`<sup>Optional</sup> <a name="RejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```csharp
public string[] RejectedPatches { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `RejectedPatchesAction`<sup>Optional</sup> <a name="RejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```csharp
public string RejectedPatchesAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

### SsmPatchBaselineGlobalFilter <a name="SsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineGlobalFilter {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSource <a name="SsmPatchBaselineSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineSource {
    string Configuration,
    string Name,
    string[] Products
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration">Configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products">Products</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products"></a>

```csharp
public string[] Products { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRuleList <a name="SsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get"></a>

```csharp
private SsmPatchBaselineApprovalRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineApprovalRuleOutputReference <a name="SsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter">PutPatchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays">ResetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate">ResetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel">ResetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity">ResetEnableNonSecurity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilter` <a name="PutPatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter"></a>

```csharp
private void PutPatchFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetApproveAfterDays` <a name="ResetApproveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays"></a>

```csharp
private void ResetApproveAfterDays()
```

##### `ResetApproveUntilDate` <a name="ResetApproveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate"></a>

```csharp
private void ResetApproveUntilDate()
```

##### `ResetComplianceLevel` <a name="ResetComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel"></a>

```csharp
private void ResetComplianceLevel()
```

##### `ResetEnableNonSecurity` <a name="ResetEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity"></a>

```csharp
private void ResetEnableNonSecurity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">PatchFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput">ApproveAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput">ApproveUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput">ComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput">EnableNonSecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput">PatchFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">ApproveAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">ApproveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">ComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchFilter`<sup>Required</sup> <a name="PatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```csharp
public SsmPatchBaselineApprovalRulePatchFilterList PatchFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `ApproveAfterDaysInput`<sup>Optional</sup> <a name="ApproveAfterDaysInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput"></a>

```csharp
public double ApproveAfterDaysInput { get; }
```

- *Type:* double

---

##### `ApproveUntilDateInput`<sup>Optional</sup> <a name="ApproveUntilDateInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput"></a>

```csharp
public string ApproveUntilDateInput { get; }
```

- *Type:* string

---

##### `ComplianceLevelInput`<sup>Optional</sup> <a name="ComplianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput"></a>

```csharp
public string ComplianceLevelInput { get; }
```

- *Type:* string

---

##### `EnableNonSecurityInput`<sup>Optional</sup> <a name="EnableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput"></a>

```csharp
public object EnableNonSecurityInput { get; }
```

- *Type:* object

---

##### `PatchFilterInput`<sup>Optional</sup> <a name="PatchFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput"></a>

```csharp
public object PatchFilterInput { get; }
```

- *Type:* object

---

##### `ApproveAfterDays`<sup>Required</sup> <a name="ApproveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```csharp
public double ApproveAfterDays { get; }
```

- *Type:* double

---

##### `ApproveUntilDate`<sup>Required</sup> <a name="ApproveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```csharp
public string ApproveUntilDate { get; }
```

- *Type:* string

---

##### `ComplianceLevel`<sup>Required</sup> <a name="ComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```csharp
public string ComplianceLevel { get; }
```

- *Type:* string

---

##### `EnableNonSecurity`<sup>Required</sup> <a name="EnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```csharp
public object EnableNonSecurity { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineApprovalRulePatchFilterList <a name="SsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRulePatchFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```csharp
private SsmPatchBaselineApprovalRulePatchFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="SsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineApprovalRulePatchFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineGlobalFilterList <a name="SsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineGlobalFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get"></a>

```csharp
private SsmPatchBaselineGlobalFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineGlobalFilterOutputReference <a name="SsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineGlobalFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineSourceList <a name="SsmPatchBaselineSourceList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get"></a>

```csharp
private SsmPatchBaselineSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmPatchBaselineSourceOutputReference <a name="SsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmPatchBaselineSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput">ProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductsInput`<sup>Optional</sup> <a name="ProductsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput"></a>

```csharp
public string[] ProductsInput { get; }
```

- *Type:* string[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



