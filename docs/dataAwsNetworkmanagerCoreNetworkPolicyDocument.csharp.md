# `dataAwsNetworkmanagerCoreNetworkPolicyDocument` Submodule <a name="`dataAwsNetworkmanagerCoreNetworkPolicyDocument` Submodule" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerCoreNetworkPolicyDocument <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocument" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocument(Construct Scope, string Id, DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig">DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig">DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putAttachmentPolicies">PutAttachmentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putCoreNetworkConfiguration">PutCoreNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putNetworkFunctionGroups">PutNetworkFunctionGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegmentActions">PutSegmentActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegments">PutSegments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetAttachmentPolicies">ResetAttachmentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetNetworkFunctionGroups">ResetNetworkFunctionGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetSegmentActions">ResetSegmentActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttachmentPolicies` <a name="PutAttachmentPolicies" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putAttachmentPolicies"></a>

```csharp
private void PutAttachmentPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putAttachmentPolicies.parameter.value"></a>

- *Type:* object

---

##### `PutCoreNetworkConfiguration` <a name="PutCoreNetworkConfiguration" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putCoreNetworkConfiguration"></a>

```csharp
private void PutCoreNetworkConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putCoreNetworkConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkFunctionGroups` <a name="PutNetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putNetworkFunctionGroups"></a>

```csharp
private void PutNetworkFunctionGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putNetworkFunctionGroups.parameter.value"></a>

- *Type:* object

---

##### `PutSegmentActions` <a name="PutSegmentActions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegmentActions"></a>

```csharp
private void PutSegmentActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegmentActions.parameter.value"></a>

- *Type:* object

---

##### `PutSegments` <a name="PutSegments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegments"></a>

```csharp
private void PutSegments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.putSegments.parameter.value"></a>

- *Type:* object

---

##### `ResetAttachmentPolicies` <a name="ResetAttachmentPolicies" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetAttachmentPolicies"></a>

```csharp
private void ResetAttachmentPolicies()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkFunctionGroups` <a name="ResetNetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetNetworkFunctionGroups"></a>

```csharp
private void ResetNetworkFunctionGroups()
```

##### `ResetSegmentActions` <a name="ResetSegmentActions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetSegmentActions"></a>

```csharp
private void ResetSegmentActions()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNetworkmanagerCoreNetworkPolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkmanagerCoreNetworkPolicyDocument.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkmanagerCoreNetworkPolicyDocument.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkmanagerCoreNetworkPolicyDocument.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkmanagerCoreNetworkPolicyDocument.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsNetworkmanagerCoreNetworkPolicyDocument resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNetworkmanagerCoreNetworkPolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.attachmentPolicies">AttachmentPolicies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.coreNetworkConfiguration">CoreNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.networkFunctionGroups">NetworkFunctionGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentActions">SegmentActions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segments">Segments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.attachmentPoliciesInput">AttachmentPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.coreNetworkConfigurationInput">CoreNetworkConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.networkFunctionGroupsInput">NetworkFunctionGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentActionsInput">SegmentActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentsInput">SegmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AttachmentPolicies`<sup>Required</sup> <a name="AttachmentPolicies" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.attachmentPolicies"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList AttachmentPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList</a>

---

##### `CoreNetworkConfiguration`<sup>Required</sup> <a name="CoreNetworkConfiguration" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.coreNetworkConfiguration"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList CoreNetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `NetworkFunctionGroups`<sup>Required</sup> <a name="NetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.networkFunctionGroups"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList NetworkFunctionGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList</a>

---

##### `SegmentActions`<sup>Required</sup> <a name="SegmentActions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentActions"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList SegmentActions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList</a>

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segments"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList Segments { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList</a>

---

##### `AttachmentPoliciesInput`<sup>Optional</sup> <a name="AttachmentPoliciesInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.attachmentPoliciesInput"></a>

```csharp
public object AttachmentPoliciesInput { get; }
```

- *Type:* object

---

##### `CoreNetworkConfigurationInput`<sup>Optional</sup> <a name="CoreNetworkConfigurationInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.coreNetworkConfigurationInput"></a>

```csharp
public object CoreNetworkConfigurationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkFunctionGroupsInput`<sup>Optional</sup> <a name="NetworkFunctionGroupsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.networkFunctionGroupsInput"></a>

```csharp
public object NetworkFunctionGroupsInput { get; }
```

- *Type:* object

---

##### `SegmentActionsInput`<sup>Optional</sup> <a name="SegmentActionsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentActionsInput"></a>

```csharp
public object SegmentActionsInput { get; }
```

- *Type:* object

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.segmentsInput"></a>

```csharp
public object SegmentsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocument.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies {
    DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction Action,
    object Conditions,
    double RuleNumber,
    string ConditionLogic = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.conditionLogic">ConditionLogic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.action"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}.

---

##### `ConditionLogic`<sup>Optional</sup> <a name="ConditionLogic" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.conditionLogic"></a>

```csharp
public string ConditionLogic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
    string AddToNetworkFunctionGroup = null,
    string AssociationMethod = null,
    object RequireAcceptance = null,
    string Segment = null,
    string TagValueOfKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.addToNetworkFunctionGroup">AddToNetworkFunctionGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataAwsNetworkmanagerCoreNetworkPolicyDocument#add_to_network_function_group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.associationMethod">AssociationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.requireAcceptance">RequireAcceptance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.segment">Segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.tagValueOfKey">TagValueOfKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}. |

---

##### `AddToNetworkFunctionGroup`<sup>Optional</sup> <a name="AddToNetworkFunctionGroup" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.addToNetworkFunctionGroup"></a>

```csharp
public string AddToNetworkFunctionGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataAwsNetworkmanagerCoreNetworkPolicyDocument#add_to_network_function_group}.

---

##### `AssociationMethod`<sup>Optional</sup> <a name="AssociationMethod" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.associationMethod"></a>

```csharp
public string AssociationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}.

---

##### `RequireAcceptance`<sup>Optional</sup> <a name="RequireAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.requireAcceptance"></a>

```csharp
public object RequireAcceptance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}.

---

##### `Segment`<sup>Optional</sup> <a name="Segment" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.segment"></a>

```csharp
public string Segment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}.

---

##### `TagValueOfKey`<sup>Optional</sup> <a name="TagValueOfKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction.property.tagValueOfKey"></a>

```csharp
public string TagValueOfKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions {
    string Type,
    string Key = null,
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object CoreNetworkConfiguration,
    object Segments,
    object AttachmentPolicies = null,
    string Id = null,
    object NetworkFunctionGroups = null,
    object SegmentActions = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.coreNetworkConfiguration">CoreNetworkConfiguration</a></code> | <code>object</code> | core_network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.segments">Segments</a></code> | <code>object</code> | segments block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.attachmentPolicies">AttachmentPolicies</a></code> | <code>object</code> | attachment_policies block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.networkFunctionGroups">NetworkFunctionGroups</a></code> | <code>object</code> | network_function_groups block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.segmentActions">SegmentActions</a></code> | <code>object</code> | segment_actions block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CoreNetworkConfiguration`<sup>Required</sup> <a name="CoreNetworkConfiguration" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.coreNetworkConfiguration"></a>

```csharp
public object CoreNetworkConfiguration { get; set; }
```

- *Type:* object

core_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.segments"></a>

```csharp
public object Segments { get; set; }
```

- *Type:* object

segments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}

---

##### `AttachmentPolicies`<sup>Optional</sup> <a name="AttachmentPolicies" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.attachmentPolicies"></a>

```csharp
public object AttachmentPolicies { get; set; }
```

- *Type:* object

attachment_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkFunctionGroups`<sup>Optional</sup> <a name="NetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.networkFunctionGroups"></a>

```csharp
public object NetworkFunctionGroups { get; set; }
```

- *Type:* object

network_function_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}

---

##### `SegmentActions`<sup>Optional</sup> <a name="SegmentActions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.segmentActions"></a>

```csharp
public object SegmentActions { get; set; }
```

- *Type:* object

segment_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration {
    string[] AsnRanges,
    object EdgeLocations,
    string[] InsideCidrBlocks = null,
    object VpnEcmpSupport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.asnRanges">AsnRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.edgeLocations">EdgeLocations</a></code> | <code>object</code> | edge_locations block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.vpnEcmpSupport">VpnEcmpSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}. |

---

##### `AsnRanges`<sup>Required</sup> <a name="AsnRanges" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.asnRanges"></a>

```csharp
public string[] AsnRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}.

---

##### `EdgeLocations`<sup>Required</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.edgeLocations"></a>

```csharp
public object EdgeLocations { get; set; }
```

- *Type:* object

edge_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}

---

##### `InsideCidrBlocks`<sup>Optional</sup> <a name="InsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.insideCidrBlocks"></a>

```csharp
public string[] InsideCidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}.

---

##### `VpnEcmpSupport`<sup>Optional</sup> <a name="VpnEcmpSupport" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration.property.vpnEcmpSupport"></a>

```csharp
public object VpnEcmpSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations {
    string Location,
    string Asn = null,
    string[] InsideCidrBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.asn">Asn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.asn"></a>

```csharp
public string Asn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}.

---

##### `InsideCidrBlocks`<sup>Optional</sup> <a name="InsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations.property.insideCidrBlocks"></a>

```csharp
public string[] InsideCidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups {
    string Name,
    object RequireAttachmentAcceptance,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.requireAttachmentAcceptance">RequireAttachmentAcceptance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}.

---

##### `RequireAttachmentAcceptance`<sup>Required</sup> <a name="RequireAttachmentAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.requireAttachmentAcceptance"></a>

```csharp
public object RequireAttachmentAcceptance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
    string Action,
    string Segment,
    string Description = null,
    string[] DestinationCidrBlocks = null,
    string[] Destinations = null,
    string Mode = null,
    string[] ShareWith = null,
    string[] ShareWithExcept = null,
    DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia Via = null,
    DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo WhenSentTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.segment">Segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.destinationCidrBlocks">DestinationCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.destinations">Destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.shareWith">ShareWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.shareWithExcept">ShareWithExcept</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.via">Via</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a></code> | via block. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.whenSentTo">WhenSentTo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a></code> | when_sent_to block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}.

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.segment"></a>

```csharp
public string Segment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}.

---

##### `DestinationCidrBlocks`<sup>Optional</sup> <a name="DestinationCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.destinationCidrBlocks"></a>

```csharp
public string[] DestinationCidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.destinations"></a>

```csharp
public string[] Destinations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}.

---

##### `ShareWith`<sup>Optional</sup> <a name="ShareWith" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.shareWith"></a>

```csharp
public string[] ShareWith { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}.

---

##### `ShareWithExcept`<sup>Optional</sup> <a name="ShareWithExcept" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.shareWithExcept"></a>

```csharp
public string[] ShareWithExcept { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}.

---

##### `Via`<sup>Optional</sup> <a name="Via" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.via"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia Via { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a>

via block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#via DataAwsNetworkmanagerCoreNetworkPolicyDocument#via}

---

##### `WhenSentTo`<sup>Optional</sup> <a name="WhenSentTo" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions.property.whenSentTo"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo WhenSentTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a>

when_sent_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#when_sent_to DataAwsNetworkmanagerCoreNetworkPolicyDocument#when_sent_to}

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia {
    string[] NetworkFunctionGroups = null,
    object WithEdgeOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia.property.networkFunctionGroups">NetworkFunctionGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia.property.withEdgeOverride">WithEdgeOverride</a></code> | <code>object</code> | with_edge_override block. |

---

##### `NetworkFunctionGroups`<sup>Optional</sup> <a name="NetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia.property.networkFunctionGroups"></a>

```csharp
public string[] NetworkFunctionGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}.

---

##### `WithEdgeOverride`<sup>Optional</sup> <a name="WithEdgeOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia.property.withEdgeOverride"></a>

```csharp
public object WithEdgeOverride { get; set; }
```

- *Type:* object

with_edge_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#with_edge_override DataAwsNetworkmanagerCoreNetworkPolicyDocument#with_edge_override}

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride {
    object EdgeSets = null,
    string UseEdge = null,
    string UseEdgeLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.edgeSets">EdgeSets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_sets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.useEdge">UseEdge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.useEdgeLocation">UseEdgeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge_location}. |

---

##### `EdgeSets`<sup>Optional</sup> <a name="EdgeSets" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.edgeSets"></a>

```csharp
public object EdgeSets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_sets}.

---

##### `UseEdge`<sup>Optional</sup> <a name="UseEdge" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.useEdge"></a>

```csharp
public string UseEdge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge}.

---

##### `UseEdgeLocation`<sup>Optional</sup> <a name="UseEdgeLocation" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride.property.useEdgeLocation"></a>

```csharp
public string UseEdgeLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge_location}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo {
    string[] Segments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo.property.segments">Segments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}. |

---

##### `Segments`<sup>Optional</sup> <a name="Segments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo.property.segments"></a>

```csharp
public string[] Segments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}.

---

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments {
    string Name,
    string[] AllowFilter = null,
    string[] DenyFilter = null,
    string Description = null,
    string[] EdgeLocations = null,
    object IsolateAttachments = null,
    object RequireAttachmentAcceptance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.allowFilter">AllowFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.denyFilter">DenyFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.edgeLocations">EdgeLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.isolateAttachments">IsolateAttachments</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.requireAttachmentAcceptance">RequireAttachmentAcceptance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}.

---

##### `AllowFilter`<sup>Optional</sup> <a name="AllowFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.allowFilter"></a>

```csharp
public string[] AllowFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}.

---

##### `DenyFilter`<sup>Optional</sup> <a name="DenyFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.denyFilter"></a>

```csharp
public string[] DenyFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}.

---

##### `EdgeLocations`<sup>Optional</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.edgeLocations"></a>

```csharp
public string[] EdgeLocations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}.

---

##### `IsolateAttachments`<sup>Optional</sup> <a name="IsolateAttachments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.isolateAttachments"></a>

```csharp
public object IsolateAttachments { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}.

---

##### `RequireAttachmentAcceptance`<sup>Optional</sup> <a name="RequireAttachmentAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments.property.requireAttachmentAcceptance"></a>

```csharp
public object RequireAttachmentAcceptance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetAddToNetworkFunctionGroup">ResetAddToNetworkFunctionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetAssociationMethod">ResetAssociationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetRequireAcceptance">ResetRequireAcceptance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetSegment">ResetSegment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetTagValueOfKey">ResetTagValueOfKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddToNetworkFunctionGroup` <a name="ResetAddToNetworkFunctionGroup" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetAddToNetworkFunctionGroup"></a>

```csharp
private void ResetAddToNetworkFunctionGroup()
```

##### `ResetAssociationMethod` <a name="ResetAssociationMethod" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetAssociationMethod"></a>

```csharp
private void ResetAssociationMethod()
```

##### `ResetRequireAcceptance` <a name="ResetRequireAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetRequireAcceptance"></a>

```csharp
private void ResetRequireAcceptance()
```

##### `ResetSegment` <a name="ResetSegment" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetSegment"></a>

```csharp
private void ResetSegment()
```

##### `ResetTagValueOfKey` <a name="ResetTagValueOfKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.resetTagValueOfKey"></a>

```csharp
private void ResetTagValueOfKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.addToNetworkFunctionGroupInput">AddToNetworkFunctionGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.associationMethodInput">AssociationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.requireAcceptanceInput">RequireAcceptanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.segmentInput">SegmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.tagValueOfKeyInput">TagValueOfKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.addToNetworkFunctionGroup">AddToNetworkFunctionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.associationMethod">AssociationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.requireAcceptance">RequireAcceptance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.segment">Segment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.tagValueOfKey">TagValueOfKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddToNetworkFunctionGroupInput`<sup>Optional</sup> <a name="AddToNetworkFunctionGroupInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.addToNetworkFunctionGroupInput"></a>

```csharp
public string AddToNetworkFunctionGroupInput { get; }
```

- *Type:* string

---

##### `AssociationMethodInput`<sup>Optional</sup> <a name="AssociationMethodInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.associationMethodInput"></a>

```csharp
public string AssociationMethodInput { get; }
```

- *Type:* string

---

##### `RequireAcceptanceInput`<sup>Optional</sup> <a name="RequireAcceptanceInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.requireAcceptanceInput"></a>

```csharp
public object RequireAcceptanceInput { get; }
```

- *Type:* object

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.segmentInput"></a>

```csharp
public string SegmentInput { get; }
```

- *Type:* string

---

##### `TagValueOfKeyInput`<sup>Optional</sup> <a name="TagValueOfKeyInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.tagValueOfKeyInput"></a>

```csharp
public string TagValueOfKeyInput { get; }
```

- *Type:* string

---

##### `AddToNetworkFunctionGroup`<sup>Required</sup> <a name="AddToNetworkFunctionGroup" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.addToNetworkFunctionGroup"></a>

```csharp
public string AddToNetworkFunctionGroup { get; }
```

- *Type:* string

---

##### `AssociationMethod`<sup>Required</sup> <a name="AssociationMethod" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.associationMethod"></a>

```csharp
public string AssociationMethod { get; }
```

- *Type:* string

---

##### `RequireAcceptance`<sup>Required</sup> <a name="RequireAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.requireAcceptance"></a>

```csharp
public object RequireAcceptance { get; }
```

- *Type:* object

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.segment"></a>

```csharp
public string Segment { get; }
```

- *Type:* string

---

##### `TagValueOfKey`<sup>Required</sup> <a name="TagValueOfKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.tagValueOfKey"></a>

```csharp
public string TagValueOfKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a>

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resetConditionLogic">ResetConditionLogic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putAction"></a>

```csharp
private void PutAction(DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetConditionLogic` <a name="ResetConditionLogic" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resetConditionLogic"></a>

```csharp
private void ResetConditionLogic()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionLogicInput">ConditionLogicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionLogic">ConditionLogic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.action"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditions"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.actionInput"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction">DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction</a>

---

##### `ConditionLogicInput`<sup>Optional</sup> <a name="ConditionLogicInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionLogicInput"></a>

```csharp
public string ConditionLogicInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `ConditionLogic`<sup>Required</sup> <a name="ConditionLogic" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.conditionLogic"></a>

```csharp
public string ConditionLogic { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resetInsideCidrBlocks">ResetInsideCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resetAsn"></a>

```csharp
private void ResetAsn()
```

##### `ResetInsideCidrBlocks` <a name="ResetInsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.resetInsideCidrBlocks"></a>

```csharp
private void ResetInsideCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.asnInput">AsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.insideCidrBlocksInput">InsideCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.asnInput"></a>

```csharp
public string AsnInput { get; }
```

- *Type:* string

---

##### `InsideCidrBlocksInput`<sup>Optional</sup> <a name="InsideCidrBlocksInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.insideCidrBlocksInput"></a>

```csharp
public string[] InsideCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.insideCidrBlocks"></a>

```csharp
public string[] InsideCidrBlocks { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.putEdgeLocations">PutEdgeLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resetInsideCidrBlocks">ResetInsideCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resetVpnEcmpSupport">ResetVpnEcmpSupport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEdgeLocations` <a name="PutEdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.putEdgeLocations"></a>

```csharp
private void PutEdgeLocations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.putEdgeLocations.parameter.value"></a>

- *Type:* object

---

##### `ResetInsideCidrBlocks` <a name="ResetInsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resetInsideCidrBlocks"></a>

```csharp
private void ResetInsideCidrBlocks()
```

##### `ResetVpnEcmpSupport` <a name="ResetVpnEcmpSupport" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.resetVpnEcmpSupport"></a>

```csharp
private void ResetVpnEcmpSupport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.edgeLocations">EdgeLocations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.asnRangesInput">AsnRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.edgeLocationsInput">EdgeLocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.insideCidrBlocksInput">InsideCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.vpnEcmpSupportInput">VpnEcmpSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.asnRanges">AsnRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.insideCidrBlocks">InsideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.vpnEcmpSupport">VpnEcmpSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeLocations`<sup>Required</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.edgeLocations"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList EdgeLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList</a>

---

##### `AsnRangesInput`<sup>Optional</sup> <a name="AsnRangesInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.asnRangesInput"></a>

```csharp
public string[] AsnRangesInput { get; }
```

- *Type:* string[]

---

##### `EdgeLocationsInput`<sup>Optional</sup> <a name="EdgeLocationsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.edgeLocationsInput"></a>

```csharp
public object EdgeLocationsInput { get; }
```

- *Type:* object

---

##### `InsideCidrBlocksInput`<sup>Optional</sup> <a name="InsideCidrBlocksInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.insideCidrBlocksInput"></a>

```csharp
public string[] InsideCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `VpnEcmpSupportInput`<sup>Optional</sup> <a name="VpnEcmpSupportInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.vpnEcmpSupportInput"></a>

```csharp
public object VpnEcmpSupportInput { get; }
```

- *Type:* object

---

##### `AsnRanges`<sup>Required</sup> <a name="AsnRanges" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.asnRanges"></a>

```csharp
public string[] AsnRanges { get; }
```

- *Type:* string[]

---

##### `InsideCidrBlocks`<sup>Required</sup> <a name="InsideCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.insideCidrBlocks"></a>

```csharp
public string[] InsideCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VpnEcmpSupport`<sup>Required</sup> <a name="VpnEcmpSupport" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.vpnEcmpSupport"></a>

```csharp
public object VpnEcmpSupport { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.requireAttachmentAcceptanceInput">RequireAttachmentAcceptanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.requireAttachmentAcceptance">RequireAttachmentAcceptance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequireAttachmentAcceptanceInput`<sup>Optional</sup> <a name="RequireAttachmentAcceptanceInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.requireAttachmentAcceptanceInput"></a>

```csharp
public object RequireAttachmentAcceptanceInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequireAttachmentAcceptance`<sup>Required</sup> <a name="RequireAttachmentAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.requireAttachmentAcceptance"></a>

```csharp
public object RequireAttachmentAcceptance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putVia">PutVia</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putWhenSentTo">PutWhenSentTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDestinationCidrBlocks">ResetDestinationCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetShareWith">ResetShareWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetShareWithExcept">ResetShareWithExcept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetVia">ResetVia</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetWhenSentTo">ResetWhenSentTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVia` <a name="PutVia" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putVia"></a>

```csharp
private void PutVia(DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putVia.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a>

---

##### `PutWhenSentTo` <a name="PutWhenSentTo" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putWhenSentTo"></a>

```csharp
private void PutWhenSentTo(DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.putWhenSentTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationCidrBlocks` <a name="ResetDestinationCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDestinationCidrBlocks"></a>

```csharp
private void ResetDestinationCidrBlocks()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetShareWith` <a name="ResetShareWith" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetShareWith"></a>

```csharp
private void ResetShareWith()
```

##### `ResetShareWithExcept` <a name="ResetShareWithExcept" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetShareWithExcept"></a>

```csharp
private void ResetShareWithExcept()
```

##### `ResetVia` <a name="ResetVia" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetVia"></a>

```csharp
private void ResetVia()
```

##### `ResetWhenSentTo` <a name="ResetWhenSentTo" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.resetWhenSentTo"></a>

```csharp
private void ResetWhenSentTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.via">Via</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.whenSentTo">WhenSentTo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationCidrBlocksInput">DestinationCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.segmentInput">SegmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithExceptInput">ShareWithExceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithInput">ShareWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.viaInput">ViaInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.whenSentToInput">WhenSentToInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationCidrBlocks">DestinationCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinations">Destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.segment">Segment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWith">ShareWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithExcept">ShareWithExcept</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Via`<sup>Required</sup> <a name="Via" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.via"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference Via { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference</a>

---

##### `WhenSentTo`<sup>Required</sup> <a name="WhenSentTo" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.whenSentTo"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference WhenSentTo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationCidrBlocksInput`<sup>Optional</sup> <a name="DestinationCidrBlocksInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationCidrBlocksInput"></a>

```csharp
public string[] DestinationCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationsInput"></a>

```csharp
public string[] DestinationsInput { get; }
```

- *Type:* string[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.segmentInput"></a>

```csharp
public string SegmentInput { get; }
```

- *Type:* string

---

##### `ShareWithExceptInput`<sup>Optional</sup> <a name="ShareWithExceptInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithExceptInput"></a>

```csharp
public string[] ShareWithExceptInput { get; }
```

- *Type:* string[]

---

##### `ShareWithInput`<sup>Optional</sup> <a name="ShareWithInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithInput"></a>

```csharp
public string[] ShareWithInput { get; }
```

- *Type:* string[]

---

##### `ViaInput`<sup>Optional</sup> <a name="ViaInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.viaInput"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia ViaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a>

---

##### `WhenSentToInput`<sup>Optional</sup> <a name="WhenSentToInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.whenSentToInput"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo WhenSentToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationCidrBlocks`<sup>Required</sup> <a name="DestinationCidrBlocks" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinationCidrBlocks"></a>

```csharp
public string[] DestinationCidrBlocks { get; }
```

- *Type:* string[]

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.destinations"></a>

```csharp
public string[] Destinations { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.segment"></a>

```csharp
public string Segment { get; }
```

- *Type:* string

---

##### `ShareWith`<sup>Required</sup> <a name="ShareWith" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWith"></a>

```csharp
public string[] ShareWith { get; }
```

- *Type:* string[]

---

##### `ShareWithExcept`<sup>Required</sup> <a name="ShareWithExcept" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.shareWithExcept"></a>

```csharp
public string[] ShareWithExcept { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.putWithEdgeOverride">PutWithEdgeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resetNetworkFunctionGroups">ResetNetworkFunctionGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resetWithEdgeOverride">ResetWithEdgeOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWithEdgeOverride` <a name="PutWithEdgeOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.putWithEdgeOverride"></a>

```csharp
private void PutWithEdgeOverride(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.putWithEdgeOverride.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworkFunctionGroups` <a name="ResetNetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resetNetworkFunctionGroups"></a>

```csharp
private void ResetNetworkFunctionGroups()
```

##### `ResetWithEdgeOverride` <a name="ResetWithEdgeOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.resetWithEdgeOverride"></a>

```csharp
private void ResetWithEdgeOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.withEdgeOverride">WithEdgeOverride</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.networkFunctionGroupsInput">NetworkFunctionGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.withEdgeOverrideInput">WithEdgeOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.networkFunctionGroups">NetworkFunctionGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WithEdgeOverride`<sup>Required</sup> <a name="WithEdgeOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.withEdgeOverride"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList WithEdgeOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList</a>

---

##### `NetworkFunctionGroupsInput`<sup>Optional</sup> <a name="NetworkFunctionGroupsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.networkFunctionGroupsInput"></a>

```csharp
public string[] NetworkFunctionGroupsInput { get; }
```

- *Type:* string[]

---

##### `WithEdgeOverrideInput`<sup>Optional</sup> <a name="WithEdgeOverrideInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.withEdgeOverrideInput"></a>

```csharp
public object WithEdgeOverrideInput { get; }
```

- *Type:* object

---

##### `NetworkFunctionGroups`<sup>Required</sup> <a name="NetworkFunctionGroups" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.networkFunctionGroups"></a>

```csharp
public string[] NetworkFunctionGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia</a>

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetEdgeSets">ResetEdgeSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetUseEdge">ResetUseEdge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetUseEdgeLocation">ResetUseEdgeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEdgeSets` <a name="ResetEdgeSets" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetEdgeSets"></a>

```csharp
private void ResetEdgeSets()
```

##### `ResetUseEdge` <a name="ResetUseEdge" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetUseEdge"></a>

```csharp
private void ResetUseEdge()
```

##### `ResetUseEdgeLocation` <a name="ResetUseEdgeLocation" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.resetUseEdgeLocation"></a>

```csharp
private void ResetUseEdgeLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.edgeSetsInput">EdgeSetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeInput">UseEdgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeLocationInput">UseEdgeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.edgeSets">EdgeSets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdge">UseEdge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeLocation">UseEdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeSetsInput`<sup>Optional</sup> <a name="EdgeSetsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.edgeSetsInput"></a>

```csharp
public object EdgeSetsInput { get; }
```

- *Type:* object

---

##### `UseEdgeInput`<sup>Optional</sup> <a name="UseEdgeInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeInput"></a>

```csharp
public string UseEdgeInput { get; }
```

- *Type:* string

---

##### `UseEdgeLocationInput`<sup>Optional</sup> <a name="UseEdgeLocationInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeLocationInput"></a>

```csharp
public string UseEdgeLocationInput { get; }
```

- *Type:* string

---

##### `EdgeSets`<sup>Required</sup> <a name="EdgeSets" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.edgeSets"></a>

```csharp
public object EdgeSets { get; }
```

- *Type:* object

---

##### `UseEdge`<sup>Required</sup> <a name="UseEdge" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdge"></a>

```csharp
public string UseEdge { get; }
```

- *Type:* string

---

##### `UseEdgeLocation`<sup>Required</sup> <a name="UseEdgeLocation" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.useEdgeLocation"></a>

```csharp
public string UseEdgeLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.resetSegments">ResetSegments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegments` <a name="ResetSegments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.resetSegments"></a>

```csharp
private void ResetSegments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.segments">Segments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.segmentsInput"></a>

```csharp
public string[] SegmentsInput { get; }
```

- *Type:* string[]

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.segments"></a>

```csharp
public string[] Segments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo">DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo</a>

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.get"></a>

```csharp
private DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetAllowFilter">ResetAllowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetDenyFilter">ResetDenyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetEdgeLocations">ResetEdgeLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetIsolateAttachments">ResetIsolateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetRequireAttachmentAcceptance">ResetRequireAttachmentAcceptance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowFilter` <a name="ResetAllowFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetAllowFilter"></a>

```csharp
private void ResetAllowFilter()
```

##### `ResetDenyFilter` <a name="ResetDenyFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetDenyFilter"></a>

```csharp
private void ResetDenyFilter()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEdgeLocations` <a name="ResetEdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetEdgeLocations"></a>

```csharp
private void ResetEdgeLocations()
```

##### `ResetIsolateAttachments` <a name="ResetIsolateAttachments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetIsolateAttachments"></a>

```csharp
private void ResetIsolateAttachments()
```

##### `ResetRequireAttachmentAcceptance` <a name="ResetRequireAttachmentAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.resetRequireAttachmentAcceptance"></a>

```csharp
private void ResetRequireAttachmentAcceptance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.allowFilterInput">AllowFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.denyFilterInput">DenyFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.edgeLocationsInput">EdgeLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.isolateAttachmentsInput">IsolateAttachmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.requireAttachmentAcceptanceInput">RequireAttachmentAcceptanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.allowFilter">AllowFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.denyFilter">DenyFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.edgeLocations">EdgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.isolateAttachments">IsolateAttachments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.requireAttachmentAcceptance">RequireAttachmentAcceptance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowFilterInput`<sup>Optional</sup> <a name="AllowFilterInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.allowFilterInput"></a>

```csharp
public string[] AllowFilterInput { get; }
```

- *Type:* string[]

---

##### `DenyFilterInput`<sup>Optional</sup> <a name="DenyFilterInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.denyFilterInput"></a>

```csharp
public string[] DenyFilterInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EdgeLocationsInput`<sup>Optional</sup> <a name="EdgeLocationsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.edgeLocationsInput"></a>

```csharp
public string[] EdgeLocationsInput { get; }
```

- *Type:* string[]

---

##### `IsolateAttachmentsInput`<sup>Optional</sup> <a name="IsolateAttachmentsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.isolateAttachmentsInput"></a>

```csharp
public object IsolateAttachmentsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequireAttachmentAcceptanceInput`<sup>Optional</sup> <a name="RequireAttachmentAcceptanceInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.requireAttachmentAcceptanceInput"></a>

```csharp
public object RequireAttachmentAcceptanceInput { get; }
```

- *Type:* object

---

##### `AllowFilter`<sup>Required</sup> <a name="AllowFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.allowFilter"></a>

```csharp
public string[] AllowFilter { get; }
```

- *Type:* string[]

---

##### `DenyFilter`<sup>Required</sup> <a name="DenyFilter" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.denyFilter"></a>

```csharp
public string[] DenyFilter { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EdgeLocations`<sup>Required</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.edgeLocations"></a>

```csharp
public string[] EdgeLocations { get; }
```

- *Type:* string[]

---

##### `IsolateAttachments`<sup>Required</sup> <a name="IsolateAttachments" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.isolateAttachments"></a>

```csharp
public object IsolateAttachments { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequireAttachmentAcceptance`<sup>Required</sup> <a name="RequireAttachmentAcceptance" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.requireAttachmentAcceptance"></a>

```csharp
public object RequireAttachmentAcceptance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerCoreNetworkPolicyDocument.DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



