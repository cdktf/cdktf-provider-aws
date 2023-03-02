# `vpcPeeringConnectionAccepter` Submodule <a name="`vpcPeeringConnectionAccepter` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionAccepterA <a name="VpcPeeringConnectionAccepterA" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterA(Construct Scope, string Id, VpcPeeringConnectionAccepterAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter">PutAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester">PutRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter">ResetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester">ResetRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccepter` <a name="PutAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter"></a>

```csharp
private void PutAccepter(VpcPeeringConnectionAccepterAccepter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `PutRequester` <a name="PutRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester"></a>

```csharp
private void PutRequester(VpcPeeringConnectionAccepterRequester Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcPeeringConnectionAccepterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

---

##### `ResetAccepter` <a name="ResetAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter"></a>

```csharp
private void ResetAccepter()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequester` <a name="ResetRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester"></a>

```csharp
private void ResetRequester()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcPeeringConnectionAccepterA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcPeeringConnectionAccepterA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcPeeringConnectionAccepterA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus">AcceptStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId">PeerOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId">PeerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput">AccepterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput">RequesterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept">AutoAccept</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter"></a>

```csharp
public VpcPeeringConnectionAccepterAccepterOutputReference Accepter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a>

---

##### `AcceptStatus`<sup>Required</sup> <a name="AcceptStatus" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus"></a>

```csharp
public string AcceptStatus { get; }
```

- *Type:* string

---

##### `PeerOwnerId`<sup>Required</sup> <a name="PeerOwnerId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId"></a>

```csharp
public string PeerOwnerId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId"></a>

```csharp
public string PeerVpcId { get; }
```

- *Type:* string

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester"></a>

```csharp
public VpcPeeringConnectionAccepterRequesterOutputReference Requester { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts"></a>

```csharp
public VpcPeeringConnectionAccepterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AccepterInput`<sup>Optional</sup> <a name="AccepterInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput"></a>

```csharp
public VpcPeeringConnectionAccepterAccepter AccepterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput"></a>

```csharp
public object AutoAcceptInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RequesterInput`<sup>Optional</sup> <a name="RequesterInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput"></a>

```csharp
public VpcPeeringConnectionAccepterRequester RequesterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput"></a>

```csharp
public string VpcPeeringConnectionIdInput { get; }
```

- *Type:* string

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept"></a>

```csharp
public object AutoAccept { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepterAccepter <a name="VpcPeeringConnectionAccepterAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterAccepter {
    object AllowClassicLinkToRemoteVpc = null,
    object AllowRemoteVpcDnsResolution = null,
    object AllowVpcToRemoteClassicLink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc"></a>

```csharp
public object AllowClassicLinkToRemoteVpc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution"></a>

```csharp
public object AllowRemoteVpcDnsResolution { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink"></a>

```csharp
public object AllowVpcToRemoteClassicLink { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterAConfig <a name="VpcPeeringConnectionAccepterAConfig" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterAConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VpcPeeringConnectionId,
    VpcPeeringConnectionAccepterAccepter Accepter = null,
    object AutoAccept = null,
    string Id = null,
    VpcPeeringConnectionAccepterRequester Requester = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpcPeeringConnectionAccepterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept">AutoAccept</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId"></a>

```csharp
public string VpcPeeringConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.

---

##### `Accepter`<sup>Optional</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter"></a>

```csharp
public VpcPeeringConnectionAccepterAccepter Accepter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept"></a>

```csharp
public object AutoAccept { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Requester`<sup>Optional</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester"></a>

```csharp
public VpcPeeringConnectionAccepterRequester Requester { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts"></a>

```csharp
public VpcPeeringConnectionAccepterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}

---

### VpcPeeringConnectionAccepterRequester <a name="VpcPeeringConnectionAccepterRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterRequester {
    object AllowClassicLinkToRemoteVpc = null,
    object AllowRemoteVpcDnsResolution = null,
    object AllowVpcToRemoteClassicLink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc"></a>

```csharp
public object AllowClassicLinkToRemoteVpc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution"></a>

```csharp
public object AllowRemoteVpcDnsResolution { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink"></a>

```csharp
public object AllowVpcToRemoteClassicLink { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterTimeouts <a name="VpcPeeringConnectionAccepterTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterAccepterOutputReference <a name="VpcPeeringConnectionAccepterAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterAccepterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```csharp
private void ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```csharp
private void ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```csharp
private void ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```csharp
public object AllowClassicLinkToRemoteVpcInput { get; }
```

- *Type:* object

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```csharp
public object AllowRemoteVpcDnsResolutionInput { get; }
```

- *Type:* object

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```csharp
public object AllowVpcToRemoteClassicLinkInput { get; }
```

- *Type:* object

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```csharp
public object AllowClassicLinkToRemoteVpc { get; }
```

- *Type:* object

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```csharp
public object AllowRemoteVpcDnsResolution { get; }
```

- *Type:* object

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```csharp
public object AllowVpcToRemoteClassicLink { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue"></a>

```csharp
public VpcPeeringConnectionAccepterAccepter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---


### VpcPeeringConnectionAccepterRequesterOutputReference <a name="VpcPeeringConnectionAccepterRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterRequesterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```csharp
private void ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```csharp
private void ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```csharp
private void ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```csharp
public object AllowClassicLinkToRemoteVpcInput { get; }
```

- *Type:* object

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```csharp
public object AllowRemoteVpcDnsResolutionInput { get; }
```

- *Type:* object

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```csharp
public object AllowVpcToRemoteClassicLinkInput { get; }
```

- *Type:* object

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```csharp
public object AllowClassicLinkToRemoteVpc { get; }
```

- *Type:* object

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```csharp
public object AllowRemoteVpcDnsResolution { get; }
```

- *Type:* object

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```csharp
public object AllowVpcToRemoteClassicLink { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue"></a>

```csharp
public VpcPeeringConnectionAccepterRequester InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---


### VpcPeeringConnectionAccepterTimeoutsOutputReference <a name="VpcPeeringConnectionAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcPeeringConnectionAccepterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



