# `iotThingGroupMembership` Submodule <a name="`iotThingGroupMembership` Submodule" id="@cdktf/provider-aws.iotThingGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingGroupMembership <a name="IotThingGroupMembership" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership aws_iot_thing_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotThingGroupMembership(Construct Scope, string Id, IotThingGroupMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig">IotThingGroupMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig">IotThingGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetOverrideDynamicGroup">ResetOverrideDynamicGroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverrideDynamicGroup` <a name="ResetOverrideDynamicGroup" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.resetOverrideDynamicGroup"></a>

```csharp
private void ResetOverrideDynamicGroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotThingGroupMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotThingGroupMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IotThingGroupMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.overrideDynamicGroupInput">OverrideDynamicGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingGroupNameInput">ThingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingNameInput">ThingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.overrideDynamicGroup">OverrideDynamicGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingGroupName">ThingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OverrideDynamicGroupInput`<sup>Optional</sup> <a name="OverrideDynamicGroupInput" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.overrideDynamicGroupInput"></a>

```csharp
public object OverrideDynamicGroupInput { get; }
```

- *Type:* object

---

##### `ThingGroupNameInput`<sup>Optional</sup> <a name="ThingGroupNameInput" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingGroupNameInput"></a>

```csharp
public string ThingGroupNameInput { get; }
```

- *Type:* string

---

##### `ThingNameInput`<sup>Optional</sup> <a name="ThingNameInput" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingNameInput"></a>

```csharp
public string ThingNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OverrideDynamicGroup`<sup>Required</sup> <a name="OverrideDynamicGroup" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.overrideDynamicGroup"></a>

```csharp
public object OverrideDynamicGroup { get; }
```

- *Type:* object

---

##### `ThingGroupName`<sup>Required</sup> <a name="ThingGroupName" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingGroupName"></a>

```csharp
public string ThingGroupName { get; }
```

- *Type:* string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingGroupMembershipConfig <a name="IotThingGroupMembershipConfig" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IotThingGroupMembershipConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ThingGroupName,
    string ThingName,
    string Id = null,
    object OverrideDynamicGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.thingGroupName">ThingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_group_name IotThingGroupMembership#thing_group_name}. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.thingName">ThingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_name IotThingGroupMembership#thing_name}. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#id IotThingGroupMembership#id}. |
| <code><a href="#@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.overrideDynamicGroup">OverrideDynamicGroup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#override_dynamic_group IotThingGroupMembership#override_dynamic_group}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ThingGroupName`<sup>Required</sup> <a name="ThingGroupName" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.thingGroupName"></a>

```csharp
public string ThingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_group_name IotThingGroupMembership#thing_group_name}.

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.thingName"></a>

```csharp
public string ThingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#thing_name IotThingGroupMembership#thing_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#id IotThingGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideDynamicGroup`<sup>Optional</sup> <a name="OverrideDynamicGroup" id="@cdktf/provider-aws.iotThingGroupMembership.IotThingGroupMembershipConfig.property.overrideDynamicGroup"></a>

```csharp
public object OverrideDynamicGroup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership#override_dynamic_group IotThingGroupMembership#override_dynamic_group}.

---



