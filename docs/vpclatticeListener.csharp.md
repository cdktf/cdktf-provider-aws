# `aws_vpclattice_listener`

Refer to the Terraform Registory for docs: [`aws_vpclattice_listener`](https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener).

# `vpclatticeListener` Submodule <a name="`vpclatticeListener` Submodule" id="@cdktf/provider-aws.vpclatticeListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeListener <a name="VpclatticeListener" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener aws_vpclattice_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListener(Construct Scope, string Id, VpclatticeListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig">VpclatticeListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig">VpclatticeListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putDefaultAction">PutDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetServiceArn">ResetServiceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetServiceIdentifier">ResetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDefaultAction` <a name="PutDefaultAction" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putDefaultAction"></a>

```csharp
private void PutDefaultAction(VpclatticeListenerDefaultAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putTimeouts"></a>

```csharp
private void PutTimeouts(VpclatticeListenerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts">VpclatticeListenerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServiceArn` <a name="ResetServiceArn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetServiceArn"></a>

```csharp
private void ResetServiceArn()
```

##### `ResetServiceIdentifier` <a name="ResetServiceIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetServiceIdentifier"></a>

```csharp
private void ResetServiceIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference">VpclatticeListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.defaultActionInput">DefaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceArnInput">ServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.defaultAction"></a>

```csharp
public VpclatticeListenerDefaultActionOutputReference DefaultAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference">VpclatticeListenerDefaultActionOutputReference</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.timeouts"></a>

```csharp
public VpclatticeListenerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference">VpclatticeListenerTimeoutsOutputReference</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.defaultActionInput"></a>

```csharp
public VpclatticeListenerDefaultAction DefaultActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceArnInput"></a>

```csharp
public string ServiceArnInput { get; }
```

- *Type:* string

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceIdentifierInput"></a>

```csharp
public string ServiceIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeListenerConfig <a name="VpclatticeListenerConfig" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    VpclatticeListenerDefaultAction DefaultAction,
    string Name,
    string Protocol,
    string Id = null,
    double Port = null,
    string ServiceArn = null,
    string ServiceIdentifier = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpclatticeListenerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#id VpclatticeListener#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.serviceArn">ServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#service_arn VpclatticeListener#service_arn}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#tags_all VpclatticeListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts">VpclatticeListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.defaultAction"></a>

```csharp
public VpclatticeListenerDefaultAction DefaultAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#id VpclatticeListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}.

---

##### `ServiceArn`<sup>Optional</sup> <a name="ServiceArn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.serviceArn"></a>

```csharp
public string ServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#service_arn VpclatticeListener#service_arn}.

---

##### `ServiceIdentifier`<sup>Optional</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#tags_all VpclatticeListener#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerConfig.property.timeouts"></a>

```csharp
public VpclatticeListenerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts">VpclatticeListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#timeouts VpclatticeListener#timeouts}

---

### VpclatticeListenerDefaultAction <a name="VpclatticeListenerDefaultAction" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultAction {
    VpclatticeListenerDefaultActionFixedResponse FixedResponse = null,
    object Forward = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward">Forward</a></code> | <code>object</code> | forward block. |

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction.property.fixedResponse"></a>

```csharp
public VpclatticeListenerDefaultActionFixedResponse FixedResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction.property.forward"></a>

```csharp
public object Forward { get; set; }
```

- *Type:* object

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}

---

### VpclatticeListenerDefaultActionFixedResponse <a name="VpclatticeListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionFixedResponse {
    double StatusCode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}.

---

### VpclatticeListenerDefaultActionForward <a name="VpclatticeListenerDefaultActionForward" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForward.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForward {
    object TargetGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups">TargetGroups</a></code> | <code>object</code> | target_groups block. |

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForward.property.targetGroups"></a>

```csharp
public object TargetGroups { get; set; }
```

- *Type:* object

target_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}

---

### VpclatticeListenerDefaultActionForwardTargetGroups <a name="VpclatticeListenerDefaultActionForwardTargetGroups" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForwardTargetGroups {
    string TargetGroupIdentifier = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}. |

---

##### `TargetGroupIdentifier`<sup>Optional</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroups.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}.

---

### VpclatticeListenerTimeouts <a name="VpclatticeListenerTimeouts" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#create VpclatticeListener#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#delete VpclatticeListener#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#update VpclatticeListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#create VpclatticeListener#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#delete VpclatticeListener#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/vpclattice_listener#update VpclatticeListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeListenerDefaultActionFixedResponseOutputReference <a name="VpclatticeListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionFixedResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```csharp
public VpclatticeListenerDefaultActionFixedResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---


### VpclatticeListenerDefaultActionForwardList <a name="VpclatticeListenerDefaultActionForwardList" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForwardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.get"></a>

```csharp
private VpclatticeListenerDefaultActionForwardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpclatticeListenerDefaultActionForwardOutputReference <a name="VpclatticeListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForwardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups"></a>

```csharp
private void PutTargetGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* object

---

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.resetTargetGroups"></a>

```csharp
private void ResetTargetGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroups"></a>

```csharp
public VpclatticeListenerDefaultActionForwardTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList">VpclatticeListenerDefaultActionForwardTargetGroupsList</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.targetGroupsInput"></a>

```csharp
public object TargetGroupsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpclatticeListenerDefaultActionForwardTargetGroupsList <a name="VpclatticeListenerDefaultActionForwardTargetGroupsList" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForwardTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get"></a>

```csharp
private VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference <a name="VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier">ResetTargetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetGroupIdentifier` <a name="ResetTargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetTargetGroupIdentifier"></a>

```csharp
private void ResetTargetGroupIdentifier()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">TargetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetGroupIdentifierInput`<sup>Optional</sup> <a name="TargetGroupIdentifierInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```csharp
public string TargetGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpclatticeListenerDefaultActionOutputReference <a name="VpclatticeListenerDefaultActionOutputReference" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerDefaultActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse"></a>

```csharp
private void PutFixedResponse(VpclatticeListenerDefaultActionFixedResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward"></a>

```csharp
private void PutForward(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* object

---

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetFixedResponse"></a>

```csharp
private void ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.resetForward"></a>

```csharp
private void ResetForward()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList">VpclatticeListenerDefaultActionForwardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponse"></a>

```csharp
public VpclatticeListenerDefaultActionFixedResponseOutputReference FixedResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponseOutputReference">VpclatticeListenerDefaultActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forward"></a>

```csharp
public VpclatticeListenerDefaultActionForwardList Forward { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionForwardList">VpclatticeListenerDefaultActionForwardList</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```csharp
public VpclatticeListenerDefaultActionFixedResponse FixedResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionFixedResponse">VpclatticeListenerDefaultActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.forwardInput"></a>

```csharp
public object ForwardInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultActionOutputReference.property.internalValue"></a>

```csharp
public VpclatticeListenerDefaultAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerDefaultAction">VpclatticeListenerDefaultAction</a>

---


### VpclatticeListenerTimeoutsOutputReference <a name="VpclatticeListenerTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeListenerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListener.VpclatticeListenerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



