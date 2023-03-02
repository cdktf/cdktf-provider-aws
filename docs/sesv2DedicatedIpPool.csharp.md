# `sesv2DedicatedIpPool` Submodule <a name="`sesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.sesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2DedicatedIpPool <a name="Sesv2DedicatedIpPool" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2DedicatedIpPool(Construct Scope, string Id, Sesv2DedicatedIpPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode">ResetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts"></a>

```csharp
private void PutTimeouts(Sesv2DedicatedIpPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode"></a>

```csharp
private void ResetScalingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2DedicatedIpPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2DedicatedIpPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2DedicatedIpPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput">ScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode">ScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeouts"></a>

```csharp
public Sesv2DedicatedIpPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference">Sesv2DedicatedIpPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput"></a>

```csharp
public string ScalingModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode"></a>

```csharp
public string ScalingMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2DedicatedIpPoolConfig <a name="Sesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2DedicatedIpPoolConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PoolName,
    string Id = null,
    string ScalingMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Sesv2DedicatedIpPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName">PoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode">ScalingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode"></a>

```csharp
public string ScalingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.timeouts"></a>

```csharp
public Sesv2DedicatedIpPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts">Sesv2DedicatedIpPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#timeouts Sesv2DedicatedIpPool#timeouts}

---

### Sesv2DedicatedIpPoolTimeouts <a name="Sesv2DedicatedIpPoolTimeouts" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2DedicatedIpPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#create Sesv2DedicatedIpPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#delete Sesv2DedicatedIpPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_dedicated_ip_pool#update Sesv2DedicatedIpPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2DedicatedIpPoolTimeoutsOutputReference <a name="Sesv2DedicatedIpPoolTimeoutsOutputReference" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2DedicatedIpPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



