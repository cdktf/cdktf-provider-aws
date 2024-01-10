# `dataAwsVpclatticeAuthPolicy` Submodule <a name="`dataAwsVpclatticeAuthPolicy` Submodule" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeAuthPolicy <a name="DataAwsVpclatticeAuthPolicy" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy aws_vpclattice_auth_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpclatticeAuthPolicy(Construct Scope, string Id, DataAwsVpclatticeAuthPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig">DataAwsVpclatticeAuthPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig">DataAwsVpclatticeAuthPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpclatticeAuthPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpclatticeAuthPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpclatticeAuthPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpclatticeAuthPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpclatticeAuthPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsVpclatticeAuthPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpclatticeAuthPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpclatticeAuthPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeAuthPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeAuthPolicyConfig <a name="DataAwsVpclatticeAuthPolicyConfig" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpclatticeAuthPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ResourceIdentifier,
    string Id = null,
    string Policy = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#resource_identifier DataAwsVpclatticeAuthPolicy#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#id DataAwsVpclatticeAuthPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#policy DataAwsVpclatticeAuthPolicy#policy}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#state DataAwsVpclatticeAuthPolicy#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#resource_identifier DataAwsVpclatticeAuthPolicy#resource_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#id DataAwsVpclatticeAuthPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#policy DataAwsVpclatticeAuthPolicy#policy}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.dataAwsVpclatticeAuthPolicy.DataAwsVpclatticeAuthPolicyConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/vpclattice_auth_policy#state DataAwsVpclatticeAuthPolicy#state}.

---



