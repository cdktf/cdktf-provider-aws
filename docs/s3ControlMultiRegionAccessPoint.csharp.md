# `s3ControlMultiRegionAccessPoint` Submodule <a name="`s3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPoint <a name="S3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPoint(Construct Scope, string Id, S3ControlMultiRegionAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig">S3ControlMultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig">S3ControlMultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDetails` <a name="PutDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails"></a>

```csharp
private void PutDetails(S3ControlMultiRegionAccessPointDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts"></a>

```csharp
private void PutTimeouts(S3ControlMultiRegionAccessPointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlMultiRegionAccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details">Details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts"></a>

```csharp
public S3ControlMultiRegionAccessPointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput"></a>

```csharp
public S3ControlMultiRegionAccessPointDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointConfig <a name="S3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    S3ControlMultiRegionAccessPointDetails Details,
    string AccountId = null,
    string Id = null,
    S3ControlMultiRegionAccessPointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details">Details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details"></a>

```csharp
public S3ControlMultiRegionAccessPointDetails Details { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts"></a>

```csharp
public S3ControlMultiRegionAccessPointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}

---

### S3ControlMultiRegionAccessPointDetails <a name="S3ControlMultiRegionAccessPointDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetails {
    string Name,
    object Region,
    S3ControlMultiRegionAccessPointDetailsPublicAccessBlock PublicAccessBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region">Region</a></code> | <code>object</code> | region block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | public_access_block block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region"></a>

```csharp
public object Region { get; set; }
```

- *Type:* object

region block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}

---

##### `PublicAccessBlock`<sup>Optional</sup> <a name="PublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock PublicAccessBlock { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

public_access_block block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}

---

### S3ControlMultiRegionAccessPointDetailsPublicAccessBlock <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsPublicAccessBlock {
    object BlockPublicAcls = null,
    object BlockPublicPolicy = null,
    object IgnorePublicAcls = null,
    object RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}. |

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}.

---

### S3ControlMultiRegionAccessPointDetailsRegion <a name="S3ControlMultiRegionAccessPointDetailsRegion" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsRegion {
    string Bucket
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}.

---

### S3ControlMultiRegionAccessPointTimeouts <a name="S3ControlMultiRegionAccessPointTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointDetailsOutputReference <a name="S3ControlMultiRegionAccessPointDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock">PutPublicAccessBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion">PutRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock">ResetPublicAccessBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicAccessBlock` <a name="PutPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock"></a>

```csharp
private void PutPublicAccessBlock(S3ControlMultiRegionAccessPointDetailsPublicAccessBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---

##### `PutRegion` <a name="PutRegion" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion"></a>

```csharp
private void PutRegion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion.parameter.value"></a>

- *Type:* object

---

##### `ResetPublicAccessBlock` <a name="ResetPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock"></a>

```csharp
private void ResetPublicAccessBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region">Region</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput">PublicAccessBlockInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicAccessBlock`<sup>Required</sup> <a name="PublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference PublicAccessBlock { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsRegionList Region { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicAccessBlockInput`<sup>Optional</sup> <a name="PublicAccessBlockInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock PublicAccessBlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput"></a>

```csharp
public object RegionInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue"></a>

```csharp
public S3ControlMultiRegionAccessPointDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---


### S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput"></a>

```csharp
public object BlockPublicAclsInput { get; }
```

- *Type:* object

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput"></a>

```csharp
public object BlockPublicPolicyInput { get; }
```

- *Type:* object

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput"></a>

```csharp
public object IgnorePublicAclsInput { get; }
```

- *Type:* object

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput"></a>

```csharp
public object RestrictPublicBucketsInput { get; }
```

- *Type:* object

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; }
```

- *Type:* object

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; }
```

- *Type:* object

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; }
```

- *Type:* object

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue"></a>

```csharp
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---


### S3ControlMultiRegionAccessPointDetailsRegionList <a name="S3ControlMultiRegionAccessPointDetailsRegionList" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get"></a>

```csharp
private S3ControlMultiRegionAccessPointDetailsRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlMultiRegionAccessPointDetailsRegionOutputReference <a name="S3ControlMultiRegionAccessPointDetailsRegionOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointDetailsRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlMultiRegionAccessPointTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlMultiRegionAccessPointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



