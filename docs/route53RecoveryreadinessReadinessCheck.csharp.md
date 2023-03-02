# `route53RecoveryreadinessReadinessCheck` Submodule <a name="`route53RecoveryreadinessReadinessCheck` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessReadinessCheck <a name="Route53RecoveryreadinessReadinessCheck" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoveryreadinessReadinessCheck(Construct Scope, string Id, Route53RecoveryreadinessReadinessCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig">Route53RecoveryreadinessReadinessCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(Route53RecoveryreadinessReadinessCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoveryreadinessReadinessCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoveryreadinessReadinessCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecoveryreadinessReadinessCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference">Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput">ReadinessCheckNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput">ResourceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName">ReadinessCheckName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName">ResourceSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeouts"></a>

```csharp
public Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference">Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReadinessCheckNameInput`<sup>Optional</sup> <a name="ReadinessCheckNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckNameInput"></a>

```csharp
public string ReadinessCheckNameInput { get; }
```

- *Type:* string

---

##### `ResourceSetNameInput`<sup>Optional</sup> <a name="ResourceSetNameInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetNameInput"></a>

```csharp
public string ResourceSetNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReadinessCheckName`<sup>Required</sup> <a name="ReadinessCheckName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.readinessCheckName"></a>

```csharp
public string ReadinessCheckName { get; }
```

- *Type:* string

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.resourceSetName"></a>

```csharp
public string ResourceSetName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessReadinessCheckConfig <a name="Route53RecoveryreadinessReadinessCheckConfig" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoveryreadinessReadinessCheckConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReadinessCheckName,
    string ResourceSetName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Route53RecoveryreadinessReadinessCheckTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName">ReadinessCheckName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName">ResourceSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReadinessCheckName`<sup>Required</sup> <a name="ReadinessCheckName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.readinessCheckName"></a>

```csharp
public string ReadinessCheckName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}.

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.resourceSetName"></a>

```csharp
public string ResourceSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckConfig.property.timeouts"></a>

```csharp
public Route53RecoveryreadinessReadinessCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts">Route53RecoveryreadinessReadinessCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}

---

### Route53RecoveryreadinessReadinessCheckTimeouts <a name="Route53RecoveryreadinessReadinessCheckTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoveryreadinessReadinessCheckTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference <a name="Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecoveryreadinessReadinessCheck.Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



