# `dxMacsecKeyAssociation` Submodule <a name="`dxMacsecKeyAssociation` Submodule" id="@cdktf/provider-aws.dxMacsecKeyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxMacsecKeyAssociation <a name="DxMacsecKeyAssociation" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association aws_dx_macsec_key_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxMacsecKeyAssociation(Construct Scope, string Id, DxMacsecKeyAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig">DxMacsecKeyAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig">DxMacsecKeyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak">ResetCak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn">ResetCkn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCak` <a name="ResetCak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCak"></a>

```csharp
private void ResetCak()
```

##### `ResetCkn` <a name="ResetCkn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetCkn"></a>

```csharp
private void ResetCkn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxMacsecKeyAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxMacsecKeyAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxMacsecKeyAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn">StartOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput">CakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput">CknInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak">Cak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn">Ckn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `StartOn`<sup>Required</sup> <a name="StartOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.startOn"></a>

```csharp
public string StartOn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `CakInput`<sup>Optional</sup> <a name="CakInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cakInput"></a>

```csharp
public string CakInput { get; }
```

- *Type:* string

---

##### `CknInput`<sup>Optional</sup> <a name="CknInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cknInput"></a>

```csharp
public string CknInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `Cak`<sup>Required</sup> <a name="Cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.cak"></a>

```csharp
public string Cak { get; }
```

- *Type:* string

---

##### `Ckn`<sup>Required</sup> <a name="Ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.ckn"></a>

```csharp
public string Ckn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxMacsecKeyAssociationConfig <a name="DxMacsecKeyAssociationConfig" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxMacsecKeyAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionId,
    string Cak = null,
    string Ckn = null,
    string Id = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak">Cak</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn">Ckn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}.

---

##### `Cak`<sup>Optional</sup> <a name="Cak" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.cak"></a>

```csharp
public string Cak { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}.

---

##### `Ckn`<sup>Optional</sup> <a name="Ckn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.ckn"></a>

```csharp
public string Ckn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#id DxMacsecKeyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktf/provider-aws.dxMacsecKeyAssociation.DxMacsecKeyAssociationConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}.

---



