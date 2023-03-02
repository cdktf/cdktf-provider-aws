# `s3ControlMultiRegionAccessPointPolicy` Submodule <a name="`s3ControlMultiRegionAccessPointPolicy` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointPolicy <a name="S3ControlMultiRegionAccessPointPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy aws_s3control_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicy(Construct Scope, string Id, S3ControlMultiRegionAccessPointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig">S3ControlMultiRegionAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig">S3ControlMultiRegionAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDetails` <a name="PutDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails"></a>

```csharp
private void PutDetails(S3ControlMultiRegionAccessPointPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(S3ControlMultiRegionAccessPointPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPointPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details">Details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established">Established</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed">Proposed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a>

---

##### `Established`<sup>Required</sup> <a name="Established" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established"></a>

```csharp
public string Established { get; }
```

- *Type:* string

---

##### `Proposed`<sup>Required</sup> <a name="Proposed" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed"></a>

```csharp
public string Proposed { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointPolicyConfig <a name="S3ControlMultiRegionAccessPointPolicyConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    S3ControlMultiRegionAccessPointPolicyDetails Details,
    string AccountId = null,
    string Id = null,
    S3ControlMultiRegionAccessPointPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#details S3ControlMultiRegionAccessPointPolicy#details}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}

---

### S3ControlMultiRegionAccessPointPolicyDetails <a name="S3ControlMultiRegionAccessPointPolicyDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicyDetails {
    string Name,
    string Policy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}.

---

### S3ControlMultiRegionAccessPointPolicyTimeouts <a name="S3ControlMultiRegionAccessPointPolicyTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicyTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointPolicyDetailsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public S3ControlMultiRegionAccessPointPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---


### S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



