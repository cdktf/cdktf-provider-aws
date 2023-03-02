# `lambdaCodeSigningConfig` Submodule <a name="`lambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.lambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCodeSigningConfig <a name="LambdaCodeSigningConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfig(Construct Scope, string Id, LambdaCodeSigningConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers">PutAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAllowedPublishers` <a name="PutAllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers"></a>

```csharp
private void PutAllowedPublishers(LambdaCodeSigningConfigAllowedPublishers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies"></a>

```csharp
private void PutPolicies(LambdaCodeSigningConfigPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaCodeSigningConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaCodeSigningConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaCodeSigningConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers">AllowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput">AllowedPublishersInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput">PoliciesInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedPublishers`<sup>Required</sup> <a name="AllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishersOutputReference AllowedPublishers { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies"></a>

```csharp
public LambdaCodeSigningConfigPoliciesOutputReference Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a>

---

##### `AllowedPublishersInput`<sup>Optional</sup> <a name="AllowedPublishersInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers AllowedPublishersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput"></a>

```csharp
public LambdaCodeSigningConfigPolicies PoliciesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCodeSigningConfigAllowedPublishers <a name="LambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfigAllowedPublishers {
    string[] SigningProfileVersionArns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns">SigningProfileVersionArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}. |

---

##### `SigningProfileVersionArns`<sup>Required</sup> <a name="SigningProfileVersionArns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

```csharp
public string[] SigningProfileVersionArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.

---

### LambdaCodeSigningConfigConfig <a name="LambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LambdaCodeSigningConfigAllowedPublishers AllowedPublishers,
    string Description = null,
    string Id = null,
    LambdaCodeSigningConfigPolicies Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers">AllowedPublishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | allowed_publishers block. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | policies block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedPublishers`<sup>Required</sup> <a name="AllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers AllowedPublishers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

allowed_publishers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies"></a>

```csharp
public LambdaCodeSigningConfigPolicies Policies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}

---

### LambdaCodeSigningConfigPolicies <a name="LambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfigPolicies {
    string UntrustedArtifactOnDeployment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment">UntrustedArtifactOnDeployment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}. |

---

##### `UntrustedArtifactOnDeployment`<sup>Required</sup> <a name="UntrustedArtifactOnDeployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment"></a>

```csharp
public string UntrustedArtifactOnDeployment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCodeSigningConfigAllowedPublishersOutputReference <a name="LambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfigAllowedPublishersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput">SigningProfileVersionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">SigningProfileVersionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SigningProfileVersionArnsInput`<sup>Optional</sup> <a name="SigningProfileVersionArnsInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput"></a>

```csharp
public string[] SigningProfileVersionArnsInput { get; }
```

- *Type:* string[]

---

##### `SigningProfileVersionArns`<sup>Required</sup> <a name="SigningProfileVersionArns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```csharp
public string[] SigningProfileVersionArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```csharp
public LambdaCodeSigningConfigAllowedPublishers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---


### LambdaCodeSigningConfigPoliciesOutputReference <a name="LambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaCodeSigningConfigPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput">UntrustedArtifactOnDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">UntrustedArtifactOnDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UntrustedArtifactOnDeploymentInput`<sup>Optional</sup> <a name="UntrustedArtifactOnDeploymentInput" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput"></a>

```csharp
public string UntrustedArtifactOnDeploymentInput { get; }
```

- *Type:* string

---

##### `UntrustedArtifactOnDeployment`<sup>Required</sup> <a name="UntrustedArtifactOnDeployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```csharp
public string UntrustedArtifactOnDeployment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```csharp
public LambdaCodeSigningConfigPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---



