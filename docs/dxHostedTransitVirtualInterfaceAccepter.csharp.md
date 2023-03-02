# `dxHostedTransitVirtualInterfaceAccepter` Submodule <a name="`dxHostedTransitVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedTransitVirtualInterfaceAccepter <a name="DxHostedTransitVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter aws_dx_hosted_transit_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedTransitVirtualInterfaceAccepter(Construct Scope, string Id, DxHostedTransitVirtualInterfaceAccepterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig">DxHostedTransitVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig">DxHostedTransitVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts"></a>

```csharp
private void PutTimeouts(DxHostedTransitVirtualInterfaceAccepterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedTransitVirtualInterfaceAccepter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedTransitVirtualInterfaceAccepter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedTransitVirtualInterfaceAccepter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput">VirtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts"></a>

```csharp
public DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualInterfaceIdInput`<sup>Optional</sup> <a name="VirtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```csharp
public string VirtualInterfaceIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedTransitVirtualInterfaceAccepterConfig <a name="DxHostedTransitVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedTransitVirtualInterfaceAccepterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DxGatewayId,
    string VirtualInterfaceId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DxHostedTransitVirtualInterfaceAccepterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts"></a>

```csharp
public DxHostedTransitVirtualInterfaceAccepterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}

---

### DxHostedTransitVirtualInterfaceAccepterTimeouts <a name="DxHostedTransitVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedTransitVirtualInterfaceAccepterTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



