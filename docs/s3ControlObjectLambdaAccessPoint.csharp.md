# `s3ControlObjectLambdaAccessPoint` Submodule <a name="`s3ControlObjectLambdaAccessPoint` Submodule" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlObjectLambdaAccessPoint <a name="S3ControlObjectLambdaAccessPoint" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPoint(Construct Scope, string Id, S3ControlObjectLambdaAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig">S3ControlObjectLambdaAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig">S3ControlObjectLambdaAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.putConfiguration"></a>

```csharp
private void PutConfiguration(S3ControlObjectLambdaAccessPointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlObjectLambdaAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlObjectLambdaAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlObjectLambdaAccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference">S3ControlObjectLambdaAccessPointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.configuration"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference">S3ControlObjectLambdaAccessPointConfigurationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.configurationInput"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlObjectLambdaAccessPointConfig <a name="S3ControlObjectLambdaAccessPointConfig" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    S3ControlObjectLambdaAccessPointConfiguration Configuration,
    string Name,
    string AccountId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#name S3ControlObjectLambdaAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#account_id S3ControlObjectLambdaAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#id S3ControlObjectLambdaAccessPoint#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.configuration"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#configuration S3ControlObjectLambdaAccessPoint#configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#name S3ControlObjectLambdaAccessPoint#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#account_id S3ControlObjectLambdaAccessPoint#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#id S3ControlObjectLambdaAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3ControlObjectLambdaAccessPointConfiguration <a name="S3ControlObjectLambdaAccessPointConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfiguration {
    string SupportingAccessPoint,
    object TransformationConfiguration,
    string[] AllowedFeatures = null,
    object CloudWatchMetricsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.supportingAccessPoint">SupportingAccessPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#supporting_access_point S3ControlObjectLambdaAccessPoint#supporting_access_point}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.transformationConfiguration">TransformationConfiguration</a></code> | <code>object</code> | transformation_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.allowedFeatures">AllowedFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#allowed_features S3ControlObjectLambdaAccessPoint#allowed_features}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.cloudWatchMetricsEnabled">CloudWatchMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#cloud_watch_metrics_enabled S3ControlObjectLambdaAccessPoint#cloud_watch_metrics_enabled}. |

---

##### `SupportingAccessPoint`<sup>Required</sup> <a name="SupportingAccessPoint" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.supportingAccessPoint"></a>

```csharp
public string SupportingAccessPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#supporting_access_point S3ControlObjectLambdaAccessPoint#supporting_access_point}.

---

##### `TransformationConfiguration`<sup>Required</sup> <a name="TransformationConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.transformationConfiguration"></a>

```csharp
public object TransformationConfiguration { get; set; }
```

- *Type:* object

transformation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#transformation_configuration S3ControlObjectLambdaAccessPoint#transformation_configuration}

---

##### `AllowedFeatures`<sup>Optional</sup> <a name="AllowedFeatures" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.allowedFeatures"></a>

```csharp
public string[] AllowedFeatures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#allowed_features S3ControlObjectLambdaAccessPoint#allowed_features}.

---

##### `CloudWatchMetricsEnabled`<sup>Optional</sup> <a name="CloudWatchMetricsEnabled" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration.property.cloudWatchMetricsEnabled"></a>

```csharp
public object CloudWatchMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#cloud_watch_metrics_enabled S3ControlObjectLambdaAccessPoint#cloud_watch_metrics_enabled}.

---

### S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration {
    string[] Actions,
    S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation ContentTransformation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#actions S3ControlObjectLambdaAccessPoint#actions}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration.property.contentTransformation">ContentTransformation</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a></code> | content_transformation block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#actions S3ControlObjectLambdaAccessPoint#actions}.

---

##### `ContentTransformation`<sup>Required</sup> <a name="ContentTransformation" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration.property.contentTransformation"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation ContentTransformation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a>

content_transformation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#content_transformation S3ControlObjectLambdaAccessPoint#content_transformation}

---

### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation {
    S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda AwsLambda
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation.property.awsLambda">AwsLambda</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a></code> | aws_lambda block. |

---

##### `AwsLambda`<sup>Required</sup> <a name="AwsLambda" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation.property.awsLambda"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda AwsLambda { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a>

aws_lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#aws_lambda S3ControlObjectLambdaAccessPoint#aws_lambda}

---

### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda {
    string FunctionArn,
    string FunctionPayload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_arn S3ControlObjectLambdaAccessPoint#function_arn}. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda.property.functionPayload">FunctionPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_payload S3ControlObjectLambdaAccessPoint#function_payload}. |

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_arn S3ControlObjectLambdaAccessPoint#function_arn}.

---

##### `FunctionPayload`<sup>Optional</sup> <a name="FunctionPayload" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda.property.functionPayload"></a>

```csharp
public string FunctionPayload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_payload S3ControlObjectLambdaAccessPoint#function_payload}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlObjectLambdaAccessPointConfigurationOutputReference <a name="S3ControlObjectLambdaAccessPointConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.putTransformationConfiguration">PutTransformationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resetAllowedFeatures">ResetAllowedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resetCloudWatchMetricsEnabled">ResetCloudWatchMetricsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformationConfiguration` <a name="PutTransformationConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.putTransformationConfiguration"></a>

```csharp
private void PutTransformationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.putTransformationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedFeatures` <a name="ResetAllowedFeatures" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resetAllowedFeatures"></a>

```csharp
private void ResetAllowedFeatures()
```

##### `ResetCloudWatchMetricsEnabled` <a name="ResetCloudWatchMetricsEnabled" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.resetCloudWatchMetricsEnabled"></a>

```csharp
private void ResetCloudWatchMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.transformationConfiguration">TransformationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.allowedFeaturesInput">AllowedFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.cloudWatchMetricsEnabledInput">CloudWatchMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.supportingAccessPointInput">SupportingAccessPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.transformationConfigurationInput">TransformationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.allowedFeatures">AllowedFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.cloudWatchMetricsEnabled">CloudWatchMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.supportingAccessPoint">SupportingAccessPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransformationConfiguration`<sup>Required</sup> <a name="TransformationConfiguration" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.transformationConfiguration"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList TransformationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList</a>

---

##### `AllowedFeaturesInput`<sup>Optional</sup> <a name="AllowedFeaturesInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.allowedFeaturesInput"></a>

```csharp
public string[] AllowedFeaturesInput { get; }
```

- *Type:* string[]

---

##### `CloudWatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudWatchMetricsEnabledInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.cloudWatchMetricsEnabledInput"></a>

```csharp
public object CloudWatchMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `SupportingAccessPointInput`<sup>Optional</sup> <a name="SupportingAccessPointInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.supportingAccessPointInput"></a>

```csharp
public string SupportingAccessPointInput { get; }
```

- *Type:* string

---

##### `TransformationConfigurationInput`<sup>Optional</sup> <a name="TransformationConfigurationInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.transformationConfigurationInput"></a>

```csharp
public object TransformationConfigurationInput { get; }
```

- *Type:* object

---

##### `AllowedFeatures`<sup>Required</sup> <a name="AllowedFeatures" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.allowedFeatures"></a>

```csharp
public string[] AllowedFeatures { get; }
```

- *Type:* string[]

---

##### `CloudWatchMetricsEnabled`<sup>Required</sup> <a name="CloudWatchMetricsEnabled" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.cloudWatchMetricsEnabled"></a>

```csharp
public object CloudWatchMetricsEnabled { get; }
```

- *Type:* object

---

##### `SupportingAccessPoint`<sup>Required</sup> <a name="SupportingAccessPoint" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.supportingAccessPoint"></a>

```csharp
public string SupportingAccessPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference.property.internalValue"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfiguration">S3ControlObjectLambdaAccessPointConfiguration</a>

---


### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.resetFunctionPayload">ResetFunctionPayload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionPayload` <a name="ResetFunctionPayload" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.resetFunctionPayload"></a>

```csharp
private void ResetFunctionPayload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionPayloadInput">FunctionPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionPayload">FunctionPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `FunctionPayloadInput`<sup>Optional</sup> <a name="FunctionPayloadInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionPayloadInput"></a>

```csharp
public string FunctionPayloadInput { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `FunctionPayload`<sup>Required</sup> <a name="FunctionPayload" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.functionPayload"></a>

```csharp
public string FunctionPayload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference.property.internalValue"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a>

---


### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.putAwsLambda">PutAwsLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLambda` <a name="PutAwsLambda" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.putAwsLambda"></a>

```csharp
private void PutAwsLambda(S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.putAwsLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.awsLambda">AwsLambda</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.awsLambdaInput">AwsLambdaInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsLambda`<sup>Required</sup> <a name="AwsLambda" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.awsLambda"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference AwsLambda { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference</a>

---

##### `AwsLambdaInput`<sup>Optional</sup> <a name="AwsLambdaInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.awsLambdaInput"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda AwsLambdaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference.property.internalValue"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a>

---


### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.get"></a>

```csharp
private S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference <a name="S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.putContentTransformation">PutContentTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentTransformation` <a name="PutContentTransformation" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.putContentTransformation"></a>

```csharp
private void PutContentTransformation(S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.putContentTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.contentTransformation">ContentTransformation</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.contentTransformationInput">ContentTransformationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTransformation`<sup>Required</sup> <a name="ContentTransformation" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.contentTransformation"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference ContentTransformation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `ContentTransformationInput`<sup>Optional</sup> <a name="ContentTransformationInput" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.contentTransformationInput"></a>

```csharp
public S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation ContentTransformationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation">S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation</a>

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



