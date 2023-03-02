# `redshiftEndpointAuthorization` Submodule <a name="`redshiftEndpointAuthorization` Submodule" id="@cdktf/provider-aws.redshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAuthorization <a name="RedshiftEndpointAuthorization" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization aws_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftEndpointAuthorization(Construct Scope, string Id, RedshiftEndpointAuthorizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds">ResetVpcIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVpcIds` <a name="ResetVpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds"></a>

```csharp
private void ResetVpcIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftEndpointAuthorization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftEndpointAuthorization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftEndpointAuthorization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs">AllowedAllVpcs</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount">EndpointCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor">Grantor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput">VpcIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedAllVpcs`<sup>Required</sup> <a name="AllowedAllVpcs" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs"></a>

```csharp
public IResolvable AllowedAllVpcs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EndpointCount`<sup>Required</sup> <a name="EndpointCount" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount"></a>

```csharp
public double EndpointCount { get; }
```

- *Type:* double

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor"></a>

```csharp
public string Grantor { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VpcIdsInput`<sup>Optional</sup> <a name="VpcIdsInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput"></a>

```csharp
public string[] VpcIdsInput { get; }
```

- *Type:* string[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAuthorizationConfig <a name="RedshiftEndpointAuthorizationConfig" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftEndpointAuthorizationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Account,
    string ClusterIdentifier,
    object ForceDelete = null,
    string Id = null,
    string[] VpcIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account">Account</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}.

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VpcIds`<sup>Optional</sup> <a name="VpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}.

---



